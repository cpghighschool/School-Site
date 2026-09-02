console.log("Solar System & Chatbot Engine Loaded! 🚀")

// 1. Generate Deep Space Stars
function createStars(count = 200) {
  const starsContainer = document.querySelector('.stars');
  if (!starsContainer) return;
  for (let i = 0; i < count; i++) {
    const star = document.createElement('span');
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const size = Math.random() * 2 + 1; // 1 to 3px[cite: 20]
    const delay = Math.random() * 3;    

    star.style.position = 'absolute';
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.backgroundColor = 'white';
    star.style.borderRadius = '50%';
    star.style.animation = `twinkle 3s infinite ease-in-out`;
    star.style.animationDelay = `${delay}s`;

    starsContainer.appendChild(star);
  }
}

// 2. Dynamic Upright Tooltips for Orbiting Planets
const tooltip = document.getElementById('tooltip');
let rafId = null;
let followEl = null;

function showTooltipFor(el) {
  if (!tooltip) return;
  followEl = el;
  tooltip.textContent = el.getAttribute('data-name') || '';
  tooltip.style.display = 'block';
  tooltip.setAttribute('aria-hidden', 'false');
  el.classList.add('hovered');

  function loop() {
    if (!followEl) return;
    const r = followEl.getBoundingClientRect();
    const centerX = r.left + r.width / 2;
    const topCandidate = r.top - 12;
    const tooltipW = tooltip.offsetWidth || 70;
    const tooltipH = tooltip.offsetHeight || 24;

    let left = centerX - tooltipW / 2;
    left = Math.max(10, Math.min(left, window.innerWidth - tooltipW - 10));
    let top = topCandidate - tooltipH;
    if (top < 10) top = r.bottom + 12;

    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';

    rafId = requestAnimationFrame(loop);
  }
  cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(loop);
}

function hideTooltip() {
  if (!tooltip) return;
  if (followEl) followEl.classList.remove('hovered');
  followEl = null;
  tooltip.style.display = 'none';
  tooltip.setAttribute('aria-hidden', 'true');
  if (rafId) cancelAnimationFrame(rafId);
}

document.querySelectorAll('[data-name]').forEach(el => {
  el.addEventListener('mouseenter', () => showTooltipFor(el));
  el.addEventListener('mouseleave', () => hideTooltip());
});

// 3. Rocket Chatbot Controls & Response Engine
document.addEventListener('DOMContentLoaded', () => {
  createStars(250); 

  const chatbot = document.getElementById('chatbot');
  const chatIcon = document.getElementById('chat-icon');
  const chatBox = document.getElementById('chat-box');
  const chatClose = document.getElementById('chat-close');
  const chatInput = document.getElementById('chat-input');
  const chatSend = document.getElementById('chat-send');
  const chatMessages = document.getElementById('chat-messages');

  if (!chatbot) return;

  function openChat() {
    chatbot.classList.add('open');
    chatBox.setAttribute('aria-hidden', 'false');
    setTimeout(() => chatInput.focus(), 200);
    
    if (chatMessages.children.length === 0) {
        appendMsg('🚀 Guide', "Hello from space! Ask me about any planet.");
    }
  }

  function closeChat() {
    chatbot.classList.remove('open');
    chatBox.setAttribute('aria-hidden', 'true');
  }

  chatIcon.addEventListener('click', () => {
    chatbot.classList.contains('open') ? closeChat() : openChat();
  });

  chatClose.addEventListener('click', closeChat);
  chatBox.addEventListener('click', (e) => e.stopPropagation());

  // Message Handling
  function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;
    
    appendMsg('👨‍_🚀 You', escapeHtml(text));
    chatInput.value = '';

    // Simulated thinking delay before replying using planetKnowledge
    setTimeout(() => {
      const reply = getBotReply(text); 
      appendMsg('🤖 Bot', escapeHtml(reply));
    }, 450);
  }

  function appendMsg(who, text) {
    const el = document.createElement('div');
    const color = who.includes('You') ? '#fff' : '#00f0ff';
    el.innerHTML = `<strong style="color:${color}">${who}:</strong> <span style="margin-left:5px">${text}</span>`;
    chatMessages.appendChild(el);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  chatSend.addEventListener('click', sendMessage);
  chatInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') sendMessage(); });

  function escapeHtml(unsafe) {
    return unsafe.replace(/[&<>"]/g, (ch) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[ch]));
  }
});

// 4. Planet Knowledge Search Engine matching your database layout
function getBotReply(userText) {
  const lowerInput = userText.toLowerCase();

  // Ensure planetKnowledge exists globally from questions.js
  if (typeof planetKnowledge === 'undefined') {
    return "Knowledge database is loading...";
  }

  for (let i = 0; i < planetKnowledge.length; i++) {
    const entry = planetKnowledge[i];
    const parts = entry.split(':');
    const keyword = parts[0].trim().toLowerCase();
    
    if (lowerInput.includes(keyword)) {
      return entry;
    }
  }

  // Fallback response if defined or default text
  return typeof fallbackResponse !== 'undefined' 
    ? fallbackResponse 
    : "I'm still learning about the cosmos! Try asking me about Mercury, Mars, Earth, or સૌરમંડળ.";
}