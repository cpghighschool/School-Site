let state = {
    teams: [],
    isPaused: false,
    tieBreakerStrikes: {}, // Tracks wrong answers: { 'Team Name': 0 }
    isTieBreakerActive: false,
    currentQIdx: 0,
    activeTeamIdx: 0,
    timerValue: 0,
    timerInterval: null,
    isAnswered: false,
    buzzerLocked: false,
    selectedOpt: null,
    currentRoundId: null, // NEW: Tracks the active round
    currentAudio: null // NEW: Added to track the playing audio clip
};

const audio = {
    buzzer: new Audio('Sounds/buzzer.mp3'),
    tick: new Audio('Sounds/tick.mp3'),
    correct: new Audio('Sounds/correct.mp3'),
    wrong: new Audio('Sounds/wrong.mp3')
};

function playSound(id) {
    audio[id].currentTime = 0;
    audio[id].play().catch(() => {});
}

function stopSound(id) {
    audio[id].pause();
    audio[id].currentTime = 0;
}

function addTeamInput() {
    const list = document.getElementById('teamInputList');
    const count = list.children.length + 1;
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'team-name-input';
    input.placeholder = `Team ${count} Name`;
    list.appendChild(input);
}

function startGame() {
    shuffleQuestions();     
    const inputs = document.querySelectorAll('.team-name-input');
    state.teams = []; 
    inputs.forEach((inp, i) => {
        state.teams.push({
            name: inp.value || `Team ${i+1}`,
            score: 0,
            lifelines: { '5050': true, 'poll': true, 'friend': true, 'expert': true }
        });
    });

    document.getElementById('introScreen').classList.remove('active');
    document.getElementById('gameScreen').classList.add('active');
    renderBuzzerButtons();

    // --- NEW: SHOW GAME INTRO VIDEO ---
    showModal(`
        <h1 style="color:#00e5ff; margin-bottom: 20px;">Welcome to the Quiz!</h1>
        <video id="gameIntroVideo" style="width: 100%; max-height: 350px; border-radius: 10px; border: 2px solid #f1c40f;" autoplay controls>
            <source src="Sounds/game_intro.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <button class="btn-primary" onclick="skipIntro()" style="margin-top:20px;">START ROUND 1 ➔</button>
    `);

    // Automatically go to first question when video ends
    const vid = document.getElementById('gameIntroVideo');
    if(vid) {
        vid.onended = () => skipIntro();
    }
}

// Helper function to close intro and start first round
function skipIntro() {
    const vid = document.getElementById('gameIntroVideo');
    if (vid) vid.pause(); // Stop audio if skipped
    closeModal();
    loadQuestion();
}

function renderBuzzerButtons() {
    const area = document.getElementById('buzzerArea');
    area.innerHTML = '';
    state.teams.forEach((team, i) => {
        const btn = document.createElement('button');
        btn.className = 'btn-buzzer';
        btn.innerHTML = `🔔 ${team.name}`; 
        btn.onclick = () => handleBuzzer(i);
        area.appendChild(btn);
    });
}

function updateUI() {
    const scoreboard = document.getElementById('dynamicScoreboard');
    
    // Build the scoreboard with strikes correctly without overwriting
    scoreboard.innerHTML = state.teams.map((t, i) => {
        let strikesHtml = '';
        const count = state.tieBreakerStrikes[t.name] || 0;
        
        // Add a visible X for every strike
        for(let s = 0; s < count; s++) {
            strikesHtml += '<span class="strike-symbol">❌</span>';
        }

        return `
            <div class="score-item ${i === state.activeTeamIdx ? 'active-turn' : ''}">
                ${t.name}: ${t.score} <span style="margin-left: 8px;">${strikesHtml}</span>
            </div>
        `;
    }).join('');

    const activeTeam = state.teams[state.activeTeamIdx];
    document.getElementById('turnIndicator').innerText = `Turn: ${activeTeam.name}`;

    // Update Lifeline Buttons
    ['5050', 'poll', 'friend', 'expert'].forEach(type => {
        const btn = document.getElementById(`ll-${type}`);
        btn.disabled = !activeTeam.lifelines[type] || state.isAnswered;
        btn.style.opacity = activeTeam.lifelines[type] ? "1" : "0.2";
    });
}

function loadQuestion() {
    const q = quizQuestions[state.currentQIdx];
    const round = ROUND_CONFIG[q.roundId];
    // If the round has changed, show the intro modal first!
    if (state.currentRoundId !== q.roundId) {
        state.currentRoundId = q.roundId; // Update the tracker
        let extraText = round.isBuzzer ? "🔔 Buzzer Round - Fastest Finger First!" : "⏱️ Turn-based Round";
        if(q.roundId === 99) extraText = "Sudden Death. First to answer correctly wins!";
        
        showModal(`
            <h1 style="font-size: 4rem; color: #00e5ff; margin-bottom: 10px;">${round.name}</h1>
            <p style="font-size: 1.5rem; color: #f1c40f; margin-bottom: 30px;">${extraText}</p>
            <button class="btn-primary" onclick="closeModal(); loadQuestion();">START ROUND</button>
        `);
        return; // Stop here. When they click "START ROUND", it will run loadQuestion() again and skip this block.
    }
    if (q.roundId === 99) {
        document.body.classList.add('tie-breaker-mode');
        state.isTieBreakerActive = true;
    } else {
        document.body.classList.remove('tie-breaker-mode');
        state.isTieBreakerActive = false;
    }
    
    // CRITICAL: Stop any existing timer immediately
    clearInterval(state.timerInterval);
    state.timerValue = 0;
    document.getElementById('timerDisplay').innerText = "--";

    state.isAnswered = false;
    state.buzzerLocked = true; // Lock until audio/start
    state.selectedOpt = null;
    
    document.getElementById('revealBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('roundTitle').innerText = round.name;
    document.getElementById('questionText').innerText = q.question;
    // Hide buzzer area until audio/start
    document.getElementById('buzzerArea').style.display = 'none';
    const img = document.getElementById('questionImage');
    img.src = q.image || "";
    img.style.display = q.image ? 'block' : 'none';

    ['A', 'B', 'C', 'D'].forEach(opt => {
        const btn = document.getElementById(`opt-${opt}`);
        btn.style.opacity = "1";
        btn.style.visibility = "visible";
        btn.disabled = true; 
        btn.className = 'btn-option';
        document.getElementById(`text-${opt}`).innerText = q.options[opt];
    });

    // 2. Handle Audio Case
    if (q.audioClip) {
        stopSound('tick');
        const qAudio = new Audio(q.audioClip);
        state.currentAudio = qAudio; // Save it so the buzzer can stop it
        
        showModal(`
            <div style="font-size:4rem">🎵</div>
            <h2>Audio Round</h2>
            <p>Buzzers will be active <b>DURING</b> the clip. Hit it if you know it!</p>
            <button class="btn-primary" id="playBtn">▶️ PLAY AUDIO</button>
        `);

        document.getElementById('playBtn').onclick = function() {
            closeModal(); // Close the modal right away
            qAudio.play();
            activateInput(round); // Turn on the buzzers IMMEDIATELY
        };
    } else {
        // Normal question: activate immediately
        activateInput(round);
    }
    updateUI();
}

// Helper function to turn on the controls
// Replace your existing activateInput function with this
function activateInput(round) {
    state.buzzerLocked = false;
    
    if (round.isBuzzer) {
        // Ensure the container is visible
        const buzzerArea = document.getElementById('buzzerArea');
        buzzerArea.style.display = 'flex';
        
        // CRITICAL: Re-generate the team buttons so they appear
        renderBuzzerButtons(); 
        
        // Optional: playSound('buzzer'); // Uncomment if you want a start sound
    } else {
        document.getElementById('buzzerArea').style.display = 'none';
        ['A', 'B', 'C', 'D'].forEach(opt => {
            document.getElementById(`opt-${opt}`).disabled = false;
        });
        if (round.timer > 0) startTimer(round.timer);
    }
}

function startTimer(sec) {
    clearInterval(state.timerInterval);
    state.timerValue = sec;
    document.getElementById('timerDisplay').innerText = sec;
    state.timerInterval = setInterval(() => {
        state.timerValue--;
        document.getElementById('timerDisplay').innerText = Math.max(0, state.timerValue);
        playSound('tick');
        if (state.timerValue <= 0) {
            clearInterval(state.timerInterval);
            stopSound('tick');
            revealAnswer();
        }
    }, 1000);
}

function handleBuzzer(idx) {
    if (state.buzzerLocked) return;
    
    state.buzzerLocked = true;
    state.activeTeamIdx = idx;
    
    // NEW: Stop the audio clip if it is currently playing
    if (state.currentAudio) {
        state.currentAudio.pause();
    }

    playSound('buzzer');
    ['A','B','C','D'].forEach(opt => document.getElementById(`opt-${opt}`).disabled = false);
    updateUI();
    startTimer(15);
}

function selectOption(opt) {
    clearInterval(state.timerInterval);
    stopSound('tick');
    state.isAnswered = true;
    state.selectedOpt = opt;
    document.getElementById(`opt-${opt}`).classList.add('selected');
    ['A','B','C','D'].forEach(o => document.getElementById(`opt-${o}`).disabled = true);
    document.getElementById('revealBtn').style.display = 'block';
}

// function revealAnswer() {
//     clearInterval(state.timerInterval);
//     stopSound('tick');
//     document.getElementById('revealBtn').style.display = 'none';
    
//     const q = quizQuestions[state.currentQIdx];
//     const activeTeam = state.teams[state.activeTeamIdx];

//     if (state.selectedOpt === q.answer) {
//         // --- CORRECT ANSWER ---
//         document.getElementById(`opt-${q.answer}`).classList.add('correct');
//         playSound('correct');
//         activeTeam.score += 100;
        
//         // If they win a tie breaker, show the trophy immediately
//         if (state.isTieBreakerActive) {
//             setTimeout(() => showFinalWinner(), 1500); 
//             return;
//         }
//         document.getElementById('nextBtn').style.display = 'block';

//     } else {
//         // --- WRONG ANSWER ---
//         if(state.selectedOpt) document.getElementById(`opt-${state.selectedOpt}`).classList.add('wrong');
//         playSound('wrong');

//         if (state.isTieBreakerActive) {
//             state.tieBreakerStrikes[activeTeam.name] = (state.tieBreakerStrikes[activeTeam.name] || 0) + 1;
            
//             if (state.tieBreakerStrikes[activeTeam.name] >= 3) {
//                 // DQ: Other team wins
//                 showModal(`<h2>❌ DISQUALIFIED</h2><p>${activeTeam.name} is out after 3 strikes!</p>`);
//                 state.teams = state.teams.filter((_, i) => i !== state.activeTeamIdx);
//                 setTimeout(() => showFinalWinner(), 2000);
//             } else {
//                 // NEXT TIE BREAKER QUESTION
//                 showModal(`
//                     <h2 style="color:#e74c3c">WRONG!</h2>
//                     <p>${activeTeam.name} now has ${state.tieBreakerStrikes[activeTeam.name]} strike(s).</p>
//                     <p>Moving to the next tie-breaker question...</p>
//                     <button class="btn-primary" onclick="closeModal(); forceNextTieQuestion();">NEXT QUESTION</button>
//                 `);
//             }
//             return;
//         }
        
//         // Normal rounds: just show correct answer
//         document.getElementById(`opt-${q.answer}`).classList.add('correct');
//         document.getElementById('nextBtn').style.display = 'block';
//     }
//     updateUI();
// }

// Helper to skip directly to next question during tie

function revealAnswer() {
    clearInterval(state.timerInterval);
    stopSound('tick');
    document.getElementById('revealBtn').style.display = 'none';
    
    const q = quizQuestions[state.currentQIdx];
    const activeTeam = state.teams[state.activeTeamIdx];

    if (state.selectedOpt === q.answer) {
        // CORRECT logic stays the same...
        document.getElementById(`opt-${q.answer}`).classList.add('correct');
        playSound('correct');
        activeTeam.score += 100;
        if (state.isTieBreakerActive) {
            setTimeout(() => showFinalWinner(), 1500);
            return;
        }
        document.getElementById('nextBtn').style.display = 'block';
    } else {
        // WRONG ANSWER
        if(state.selectedOpt) document.getElementById(`opt-${state.selectedOpt}`).classList.add('wrong');
        playSound('wrong');

        if (state.isTieBreakerActive) {
            // Trigger Intensity
            document.body.classList.add('shake-intense');
            setTimeout(() => document.body.classList.remove('shake-intense'), 500);

            state.tieBreakerStrikes[activeTeam.name] = (state.tieBreakerStrikes[activeTeam.name] || 0) + 1;
            updateUI(); // Show the strike on scoreboard immediately

            if (state.tieBreakerStrikes[activeTeam.name] >= 3) {
                showModal(`
                    <h1 style="color:#ff4757; font-size:5rem;">❌❌❌</h1>
                    <h2>DISQUALIFIED</h2>
                    <p>${activeTeam.name} hit 3 strikes!</p>
                `);
                state.teams = state.teams.filter((_, i) => i !== state.activeTeamIdx);
                setTimeout(() => showFinalWinner(), 2500);
            } else {
                showModal(`
                    <div style="font-size:5rem; color:#ff4757;">STRIKE ${state.tieBreakerStrikes[activeTeam.name]}</div>
                    <p>${activeTeam.name} is one step closer to elimination!</p>
                    <button class="btn-primary" onclick="closeModal(); forceNextTieQuestion();">NEXT TIE BREAKER</button>
                `);
            }
            return;
        }
        // Normal Round logic...
        document.getElementById(`opt-${q.answer}`).classList.add('correct');
        document.getElementById('nextBtn').style.display = 'block';
    }
    updateUI();
}

function forceNextTieQuestion() {
    state.currentQIdx++;
    if (state.currentQIdx < quizQuestions.length && quizQuestions[state.currentQIdx].roundId === 99) {
        loadQuestion();
    } else {
        // Ran out of tie questions!
        showFinalWinner();
    }
}

function setupNext() {
    state.currentQIdx++;
    
    // NEW LOGIC: Stop if we run out of questions OR if the next question is the Tie Breaker
    if (state.currentQIdx >= quizQuestions.length || quizQuestions[state.currentQIdx].roundId === 99) {
        showFinalWinner();
        return;
    }
    
    state.activeTeamIdx = (state.activeTeamIdx + 1) % state.teams.length;
    loadQuestion();
}

function showModal(contentHtml) {
    const overlay = document.getElementById('overlay');
    const modal = document.getElementById('modalContent');
    modal.innerHTML = contentHtml;
    overlay.style.display = 'flex';
}

function closeModal() {
    document.getElementById('overlay').style.display = 'none';
}

function useLifeline(type) {
    const activeTeam = state.teams[state.activeTeamIdx];
    if (!activeTeam.lifelines[type] || state.isAnswered) return;

    activeTeam.lifelines[type] = false;
    const q = quizQuestions[state.currentQIdx];

    if (type === '5050') {
        // Find wrong options and hide 2 of them
        let wrong = Object.keys(q.options).filter(o => o !== q.answer);
        wrong.sort(() => Math.random() - 0.5);
        let hidden = 0;
        wrong.forEach(o => {
            if(hidden < 2) {
                const btn = document.getElementById(`opt-${o}`);
                btn.style.opacity = "0"; // Graceful fade out
                btn.disabled = true;
                hidden++;
            }
        });
    } 
    else if (type === 'poll') {
        // Show the bar containers first
        showModal(`
            <h2>Audience Poll</h2>
            <div class="poll-row"><div class="poll-label">A</div><div class="poll-bar-container"><div id="bar-A" class="poll-bar">0%</div></div></div>
            <div class="poll-row"><div class="poll-label">B</div><div class="poll-bar-container"><div id="bar-B" class="poll-bar">0%</div></div></div>
            <div class="poll-row"><div class="poll-label">C</div><div class="poll-bar-container"><div id="bar-C" class="poll-bar">0%</div></div></div>
            <div class="poll-row"><div class="poll-label">D</div><div class="poll-bar-container"><div id="bar-D" class="poll-bar">0%</div></div></div>
            <button class="btn-primary" onclick="closeModal()" style="margin-top:20px">CONTINUE</button>
        `);

        // Use a slight delay to trigger the CSS width transition
        setTimeout(() => {
            let remaining = 100;
            let correctVal = 65 + Math.floor(Math.random() * 15); // Give correct answer 65-80%
            remaining -= correctVal;

            ['A','B','C','D'].forEach(opt => {
                let val = (opt === q.answer) ? correctVal : Math.floor(Math.random() * (remaining / 2));
                const bar = document.getElementById(`bar-${opt}`);
                if(bar){
                    bar.style.width = `${val}%`;
                    bar.innerText = `${val}%`;
                }
            });
        }, 100);
    }
    else if (type === 'friend') {
        showModal(`
            <div style="font-size:4rem">📞</div>
            <h2>Calling a Friend...</h2>
            <p style="font-size:1.5rem; margin:20px 0;">"Hello! I'm quite sure the answer is <b style="color:#f1c40f">Option ${q.answer}</b>!"</p>
            <button class="btn-primary" onclick="closeModal()">THANKS!</button>
        `);
    }
    else if (type === 'expert') {
        showModal(`
            <div style="font-size:4rem">🧠</div>
            <h2>Expert Advice</h2>
            <p style="font-size:1.5rem; margin:20px 0;">"Based on the data, the most logical answer is <b style="color:#f1c40f">Option ${q.answer}</b>."</p>
            <button class="btn-primary" onclick="closeModal()">CONTINUE</button>
        `);
    }
    updateUI();
}

// function showFinalWinner() {
//     // 1. Get teams and sort them by score (Highest first)
//     const teamsCopy = [...state.teams];
//     teamsCopy.sort((a, b) => b.score - a.score);
    
//     // 2. Strict Check: Do we have at least 2 teams and are their scores EXACTLY the same?
//     const isStrictTie = teamsCopy.length > 1 && (teamsCopy[0].score === teamsCopy[1].score);

//     if (isStrictTie) {
//         state.isTieBreakerActive = true;
//         // Initialize strikes for tie teams if not already there
//         state.teams.forEach(t => { if(!state.tieBreakerStrikes[t.name]) state.tieBreakerStrikes[t.name] = 0; });

//         const tieIdx = quizQuestions.findIndex(q => q.roundId === 99);
//         if (tieIdx !== -1 && state.currentQIdx <= tieIdx) {
//             state.currentQIdx = tieIdx; 
//             showModal(`
//                 <h2 style="color:#e74c3c">⚠️ TIE BREAKER ⚠️</h2>
//                 <p>Rules: First to get it right wins. 3 wrong answers = Disqualification.</p>
//                 <button class="btn-primary" onclick="closeModal(); loadQuestion();">START</button>
//             `);
//             return; 
//         }
//     }

//     // 3. If it's NOT a tie, or the tie-breaker is finished, show the winner
//     const winner = teamsCopy[0];
//     showModal(`
//         <div style="font-size:5rem">🏆</div>
//         <h1 style="color:#f1c40f">WINNER: ${winner.name}</h1>
//         <h2 class="modal-score">Final Score: ${winner.score}</h2>
//         <button class="btn-primary" onclick="location.reload()">RESTART GAME</button>
//     `);
// }

function showFinalWinner() {
    const teamsCopy = [...state.teams];
    teamsCopy.sort((a, b) => b.score - a.score);
    
    const isStrictTie = teamsCopy.length > 1 && (teamsCopy[0].score === teamsCopy[1].score);

    if (isStrictTie) {
        const tieIdx = quizQuestions.findIndex(q => q.roundId === 99);
        if (tieIdx !== -1 && state.currentQIdx <= tieIdx) {
            state.currentQIdx = tieIdx; 
            showModal(`
                <h2 style="color:#e74c3c">⚠️ TIE BREAKER! ⚠️</h2>
                <p>Scores are level at ${teamsCopy[0].score}!</p>
                <p>One final buzzer question will decide the winner.</p>
                <button class="btn-primary" onclick="closeModal(); loadQuestion();">START TIE BREAKER</button>
            `);
            return; 
        }
    }

    const winner = teamsCopy[0];

    // --- CONFETTI EXPLOSION ---
    const duration = 5 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#00e5ff', '#f1c40f', '#ff4757']
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#00e5ff', '#f1c40f', '#ff4757']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
    // ... your existing confetti code is above this ...

    showModal(`
        <h1 style="color:#f1c40f; font-size:4rem;">🏆 CHAMPIONS 🏆</h1>
        <h2 style="font-size:3rem; margin:10px 0;">${winner.name}</h2>
        <h2 class="modal-score">Final Score: ${winner.score}</h2>
        
        <video style="width: 100%; max-height: 250px; margin-top: 15px; border-radius: 10px; border: 2px solid #00e5ff; object-fit: cover;" autoplay controls>
            <source src="Sounds/victory_video.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>

        <button class="btn-primary" onclick="location.reload()" style="margin-top:20px;">RESTART GAME</button>
    `);
}
    // showModal(`
    //     <h1 style="color:#f1c40f; font-size:4rem;">🏆 CHAMPIONS </h1>
    //     <h2 style="font-size:3rem; margin:10px 0;">${winner.name}</h2>
    //     <h2 class="modal-score">Final Score: ${winner.score}</h2>
    //     <button class="btn-primary" onclick="location.reload()">RESTART GAME</button>
    // `);
// }
// function togglePause() {
//     state.isPaused = !state.isPaused;
    
//     const btn = document.getElementById('pauseBtn');
    
//     // Using getElementById if you applied the layout fix, or querySelector if you kept the old layout
//     const timerBox = document.getElementById('timerBox') || document.querySelector('.timer-box'); 
    
//     if (state.isPaused) {
//         // --- PAUSED STATE ---
//         btn.innerHTML = "▶️ RESUME";
//         btn.classList.add('paused-active');
//         if (timerBox) timerBox.classList.add('is-paused');
        
//         // Pause Question Audio (Round 6) AND the Timer Tick
//         if (state.currentAudio) state.currentAudio.pause();
//         audio.tick.pause(); 
        
//     } else {
//         // --- RESUMED STATE ---
//         btn.innerHTML = "⏸ PAUSE";
//         btn.classList.remove('paused-active');
//         if (timerBox) timerBox.classList.remove('is-paused');
        
//         // Resume Question Audio (Round 6) AND the Timer Tick (if time is left)
//         if (state.currentAudio) state.currentAudio.play();
//         if (state.timerValue > 0) audio.tick.play().catch(() => {});
//     }
// }

function togglePause() {
    state.isPaused = !state.isPaused;
    const btn = document.getElementById('pauseBtn');
    const timerBox = document.getElementById('timerBox') || document.querySelector('.timer-box'); 
    
    if (state.isPaused) {
        btn.innerHTML = "▶️ RESUME";
        btn.classList.add('paused-active');
        if (timerBox) timerBox.classList.add('is-paused');
        
        // Pause audio only if it's currently playing
        if (state.currentAudio) state.currentAudio.pause();
        audio.tick.pause(); 
    } else {
        btn.innerHTML = "⏸ PAUSE";
        btn.classList.remove('paused-active');
        if (timerBox) timerBox.classList.remove('is-paused');
        
        // FIX: Only resume audio if it hasn't finished yet
        if (state.currentAudio && !state.currentAudio.ended) {
            state.currentAudio.play().catch(() => {});
        }
        
        if (state.timerValue > 0) audio.tick.play().catch(() => {});
    }
}
// Update your startTimer interval to check for pause
function startTimer(sec) {
    clearInterval(state.timerInterval);
    state.timerValue = sec;
    document.getElementById('timerDisplay').innerText = sec;
    state.timerInterval = setInterval(() => {
        if (state.isPaused) return; // Skip logic if paused

        state.timerValue--;
        document.getElementById('timerDisplay').innerText = Math.max(0, state.timerValue);
        playSound('tick');
        if (state.timerValue <= 0) {
            clearInterval(state.timerInterval);
            stopSound('tick');
            revealAnswer();
        }
    }, 1000);
}

function shuffleQuestions() {
    const rounds = {};
    
    // 1. Group questions by their roundId
    quizQuestions.forEach(q => {
        if (!rounds[q.roundId]) rounds[q.roundId] = [];
        rounds[q.roundId].push(q);
    });

    // 2. Clear the original array (we saved them in 'rounds')
    quizQuestions.length = 0;

    // 3. Sort the rounds so they stay in order (Round 1, Round 2... Tie Breaker 99)
    const sortedRoundIds = Object.keys(rounds).sort((a, b) => Number(a) - Number(b));

    // 4. Shuffle the questions INSIDE each round and apply the LIMIT
    sortedRoundIds.forEach(id => {
        let roundQs = rounds[id];
        
        // Shuffle the questions randomly
        roundQs.sort(() => Math.random() - 0.5); 
        
        // NEW: Check how many questions this round allows. If no limit is set, use all of them.
        const limit = ROUND_CONFIG[id]?.limit || roundQs.length;
        
        // Cut the array down to the limit size (e.g., grab the top 50)
        const selectedQs = roundQs.slice(0, limit);
        
        // Add only the selected subset back into the game
        quizQuestions.push(...selectedQs);
    });
}