const ROUND_CONFIG = {
    // 1: { name: "Round 1 – Fastest Finger", timer: 60, isBuzzer: false },
    1: { name: "Round 1 – સામાન્ય જ્ઞાન", timer: 30, isBuzzer: false, limit: 10},
    // 2: { name: "Round 2 – ચહેરો ઓળખો", timer: 30, isBuzzer: false, limit: 4 },
    // 3: { name: "Round 3 – ગણિત ગમ્મત", timer: 30, isBuzzer: false },
    // 4: { name: "Round 4 – રેપીડ ફાયર", timer: 10, isBuzzer: false },
    //3: { name: "Round 6 – Audio Challenge", timer: 15, isBuzzer: true },
    99: { name: "⚠️ TIE BREAKER ⚠️", timer: 15, isBuzzer: true, limit: 3}
};

const quizQuestions = [
    // ROUND 1 (Buzzer)
    // { roundId: 1, question: "Arrange: A) Universe B) Planet C) Galaxy D) Solar System \n ગોઠવો: A) બ્રહ્માંડ B) ગ્રહ C) આકાશગંગા D) સૌરમંડળ", options: { A: "B, D, C, A", B: "B, C, D, A", C: "D, B, C, A", D: "A, C, D, B" }, answer: "A", image: null },
    // { roundId: 1, question: "Order by date: A) COVID-19 B) WWI C) Moon Landing D) French Revolution", options: { A: "D, B, C, A", B: "B, D, A, C", C: "D, B, A, C", D: "B, C, D, A" }, answer: "A", image: null },
    { roundId: 1, question: "લોથલ કઈ નદીના કિનારે આવેલું હતું? \n Lothal was situated on the banks of which river?", options: { A: "ભોગાવો (Bhogavo)", B: "નર્મદા (Narmada)", C: "સરસ્વતી (Saraswati)", D: "સાબરમતી (Sabarmati)" }, answer: "A", image: null },
    { roundId: 1, question: "સ્વરાજ મારો જન્મસિદ્ધ અધિકાર છે' આ સૂત્ર કોણે આપ્યું હતું? \n Who gave the slogan 'Swaraj is my birthright'?", options: { A: "ગાંધીજી", B: "સરદાર પટેલ", C: "લોકમાન્ય તિલક", D: "સુભાષચંદ્ર બોઝ" }, answer: "C", image: null },
    { roundId: 1, question: "ગુજરાતના કયા ક્રાંતિકારી 'ડુંગળી ચોર' તરીકે જાણીતા હતા? \n Which freedom fighter was known as 'Dungli Chor'?", options: { A: "મોહનલાલ પંડ્યા", B: "ઝવેરચંદ મેઘાણી", C: "રવિશંકર મહારાજ", D: "ઈન્દુલાલ યાજ્ઞિક" }, answer: "A", image: null },
    { roundId: 1, question: "મોર્ય વંશના સ્થાપક કોણ હતા? \n Who was the founder of the Maurya Empire?", options: { A: "ચંદ્રગુપ્ત મૌર્ય", B: "બિંદુસાર", C: "અશોક", D: "હર્ષવર્ધન" }, answer: "A", image: null },
    { roundId: 1, question: "ભારતના લોખંડી પુરુષ (Iron Man) તરીકે કોણ ઓળખાય છે? \n Who is known as the Iron Man of India?", options: { A: "જવાહરલાલ નેહરુ", B: "સરદાર વલ્લભભાઈ પટેલ", C: "લાલ બહાદુર શાસ્ત્રી", D: "ભગત સિંહ" }, answer: "B", image: null },
    { roundId: 1, question: "ભગવાન રામની બહેનનું નામ શું હતું? \n What was the name of Lord Rama's sister?", options: { A: "સુમિત્રા", B: "શાંતા", C: "ઉર્મિલા", D: "કૌશલ્યા" }, answer: "B", image: null },
    { roundId: 1, question: "રાવણ કયા વાદ્ય (Instrument) વગાડવામાં નિપુણ હતો? \n Ravana was an expert in playing which instrument?", options: { A: "તબલા", B: "વાંસળી", C: "વીણા", D: "ઢોલ" }, answer: "C", image: null },
    { roundId: 1, question: "લક્ષ્મણ કોનો અવતાર માનવામાં આવે છે? \n Lakshman is considered an avatar of whom?", options: { A: "શેષનાગ", B: "વિષ્ણુ", C: "શિવ", D: "બ્રહ્મા" }, answer: "A", image: null },
    { roundId: 1, question: "સીતાજીનું હરણ કરતી વખતે રાવણે કયું રૂપ ધારણ કર્યું હતું? \n What form did Ravana take while kidnapping Sita?", options: { A: "રાજાનું", B: "સાધુનું", C: "હિરણનું", D: "વાંદરાનું" }, answer: "B", image: null },
    { roundId: 1, question: "રામાયણના કયા કાંડમાં હનુમાનજી અને રામની મુલાકાત થાય છે? \n In which Kanda did Hanuman and Rama meet?", options: { A: "બાલકાંડ", B: "અયોધ્યાકાંડ", C: "કિષ્કિંધાકાંડ", D: "સુંદરકાંડ" }, answer: "C", image: null },
    { roundId: 1, question: "કર્ણના પિતાનું નામ શું હતું? \n Who was the father of Karna?", options: { A: "ઈન્દ્ર", B: "સૂર્ય", C: "વાયુ", D: "અગ્નિ" }, answer: "B", image: null },
    { roundId: 1, question: "અર્જુનના રથનું નામ શું હતું? \n What was the name of Arjuna's chariot?", options: { A: "નંદીઘોષ", B: "કપિધ્વજ", C: "ગરુડધ્વજ", D: "પુષ્પક" }, answer: "B", image: null },
    { roundId: 1, question: "શ્રીકૃષ્ણના શંખનું નામ શું હતું? \n What was the name of Shri Krishna's conch?", options: { A: "દેવદત્ત", B: "પાંચજન્ય", C: "પૌન્ડ્ર", D: "અનંતવિજય" }, answer: "B", image: null },
    { roundId: 1, question: "કુરુક્ષેત્રના યુદ્ધમાં ભીષ્મ પિતામહ કેટલા દિવસ સેનાપતિ રહ્યા હતા? \n For how many days was Bhishma the commander?", options: { A: "૧૦ દિવસ", B: "૧૨ દિવસ", C: "૧૫ દિવસ", D: "૧૮ દિવસ" }, answer: "A", image: null },
    { roundId: 1, question: "અભિમન્યુની માતાનું નામ શું હતું? \n Who was the mother of Abhimanyu?", options: { A: "દ્રૌપદી", B: "કુંતી", C: "સુભદ્રા", D: "ગાંધારી" }, answer: "C", image: null },
    { roundId: 1, question: "ગુજરાતી સાહિત્યમાં 'ભક્ત કવિ' તરીકે કોણ ઓળખાય છે? \n Who is known as 'Bhakta Kavi' in Gujarati literature?", options: { A: "પ્રેમાનંદ", B: "નરસિંહ મહેતા", C: "દલપતરામ", D: "નર્મદ" }, answer: "B", image: null },
    { roundId: 1, question: "'માનવીની ભવાઈ' નવલકથાના લેખક કોણ છે? \n Who wrote the novel 'Manvini Bhavai'?", options: { A: "ઝવેરચંદ મેઘાણી", B: "પન્નાલાલ પટેલ", C: "ઉમાશંકર જોશી", D: "દર્શક" }, answer: "B", image: null },
    { roundId: 1, question: "'ગુજરાત મોરી મોરી રે' કાવ્યના કવિ કોણ છે? \n Who is the poet of 'Gujarat Mori Mori Re'?", options: { A: "કવિ નર્મદ", B: "ઉમાશંકર જોશી", C: "ખબરદાર", D: "સુંદરમ્" }, answer: "B", image: null },
    { roundId: 1, question: "સમાનાર્થી શબ્દ આપો: 'સવિતા' \n Give synonym for: 'Savita'", options: { A: "નદી", B: "પૃથ્વી", C: "સૂર્ય", D: "ચંદ્ર" }, answer: "C", image: null },
    { roundId: 1, question: "'કસુંબીનો રંગ' કાવ્યના રચયિતા કોણ છે? \n Who is the author of 'Kasumbi no Rang'?", options: { A: "દલપતરામ", B: "ઝવેરચંદ મેઘાણી", C: "નર્મદ", D: "કાન્ત" }, answer: "B", image: null },    // ROUND 2 (GK)
    { roundId: 1, question: "ગુજરાતનું પાટનગર કયું છે?", options: { A: "અમદાવાદ", B: "વડોદરા", C: "ગાંધીનગર", D: "સુરત" }, answer: "C", image: null },
    { roundId: 1, question: "ઝુલાસણ ગામ કયા તાલુકામાં આવેલ છે ?", options: { A: "કલોલ", B: "મહેસાણા", C: "કડી", D: "ગાંધીનગર" }, answer: "C", image: null },
    { roundId: 1, question: "પાનસર ગામ કયા તાલુકામાં આવેલ છે ?", options: { A: "કડી", B: "કલોલ", C: "મહેસાણા", D: "ગાંધીનગર" }, answer: "B", image: null },
    { roundId: 1, question: "પૃથ્વીનો સૌથી મોટો સમુદ્ર કયો છે?", options: { A: "એટલાન્ટીક", B: "હિન્દ", C: "આર્કટીક", D: "પેસેફિક" }, answer: "D", image: null },
    { roundId: 1, question: "ભારતની રાજધાની કઈ છે?", options: { A: "મુંબઈ", B: "કોલકાતા", C: "નવી દિલ્હી", D: "ચેન્નાઈ" }, answer: "C", image: null },
    { roundId: 1, question: "ભારતનું રાષ્ટ્રીય પ્રાણી કયું છે?", options: { A: "સિંહ", B: "વાઘ", C: "હાથી", D: "ચીતો" }, answer: "B", image: null },
    { roundId: 1, question: "ભારતનું રાષ્ટ્રીય પક્ષી કયું છે?", options: { A: "કબૂતર", B: "મોર", C: "ગરુડ", D: "હંસ" }, answer: "B", image: null },

    { roundId: 1, question: "ભારતનો રાષ્ટ્રીય ફૂલ કયું છે?", options: { A: "ગુલાબ", B: "કમળ", C: "ચમેલી", D: "સૂર્યમુખી" }, answer: "B", image: null },

    { roundId: 1, question: "ગુજરાતની રાજધાની કઈ છે?", options: { A: "અમદાવાદ", B: "વડોદરા", C: "ગાંધીનગર", D: "સુરત" }, answer: "C", image: null },

    { roundId: 1, question: "સ્ટેચ્યુ ઓફ યુનિટી કોની પ્રતિમા છે?", options: { A: "મહાત્મા ગાંધી", B: "સરદાર પટેલ", C: "સુભાષચંદ્ર બોઝ", D: "ભગતસિંહ" }, answer: "B", image: null },

    { roundId: 1, question: "ભારતને સ્વતંત્રતા ક્યારે મળી?", options: { A: "15 ઓગસ્ટ 1947", B: "26 જાન્યુઆરી 1950", C: "2 ઓક્ટોબર 1947", D: "15 ઓગસ્ટ 1952" }, answer: "A", image: null },

    { roundId: 1, question: "ભારતના પ્રથમ રાષ્ટ્રપતિ કોણ હતા?", options: { A: "ડૉ. રાજેન્દ્ર પ્રસાદ", B: "જવાહરલાલ નેહરુ", C: "ડૉ. રાધાકૃષ્ણન", D: "ઇન્દિરા ગાંધી" }, answer: "A", image: null },

    { roundId: 1, question: "ભારતના પ્રથમ વડાપ્રધાન કોણ હતા?", options: { A: "સરદાર પટેલ", B: "જવાહરલાલ નેહરુ", C: "રાજીવ ગાંધી", D: "લાલ બહાદુર શાસ્ત્રી" }, answer: "B", image: null },

    { roundId: 1, question: "ભારતનો રાષ્ટ્રીય ગીત કયું છે?", options: { A: "વંદે માતરમ", B: "જન ગણ મન", C: "સારે જહાં સે અચ્છા", D: "જય હિંદ" }, answer: "B", image: null },

    { roundId: 1, question: "ગુજરાત સ્થાપના દિવસ ક્યારે છે?", options: { A: "1 મે", B: "15 ઓગસ્ટ", C: "26 જાન્યુઆરી", D: "2 ઓક્ટોબર" }, answer: "A", image: null },

    { roundId: 1, question: "ગીર નેશનલ પાર્ક ક્યા માટે પ્રખ્યાત છે?", options: { A: "વાઘ", B: "સિંહ", C: "હાથી", D: "ચીતો" }, answer: "B", image: null },

    { roundId: 1, question: "સોમનાથ મંદિર ક્યા જિલ્લામાં છે?", options: { A: "જૂનાગઢ", B: "ગીર સોમનાથ", C: "રાજકોટ", D: "જામનગર" }, answer: "B", image: null },

    { roundId: 1, question: "દ્વારકાધીશ મંદિર ક્યા શહેરમાં છે?", options: { A: "દ્વારકા", B: "પોરબંદર", C: "જામનગર", D: "વેરાવળ" }, answer: "A", image: null },

    { roundId: 1, question: "પાણીનું રાસાયણિક સૂત્ર શું છે?", options: { A: "H2O", B: "CO2", C: "O2", D: "H2" }, answer: "A", image: null },

    { roundId: 1, question: "પૃથ્વીનો ઉપગ્રહ કયો છે?", options: { A: "સૂર્ય", B: "ચંદ્ર", C: "મંગળ", D: "શુક્ર" }, answer: "B", image: null },

    { roundId: 1, question: "પ્રકાશની ગતિ કેટલી છે?", options: { A: "3 લાખ કિમી/સેકન્ડ", B: "2 લાખ કિમી/સેકન્ડ", C: "1 લાખ કિમી/સેકન્ડ", D: "5 લાખ કિમી/સેકન્ડ" }, answer: "A", image: null },

    { roundId: 1, question: "માનવ શરીરમાં કેટલા હાડકાં હોય છે?", options: { A: "196", B: "206", C: "216", D: "226" }, answer: "B", image: null },

    { roundId: 1, question: "રક્તનો લાલ રંગ કઈ વસ્તુને કારણે છે?", options: { A: "પ્લાઝ્મા", B: "હિમોગ્લોબિન", C: "પ્લેટલેટ", D: "પાણી" }, answer: "B", image: null },

    { roundId: 1, question: "છોડ ખોરાક બનાવે છે તે પ્રક્રિયાને શું કહે છે?", options: { A: "શ્વસન", B: "પ્રકાશ સંશ્લેષણ", C: "પાચન", D: "ઉત્સર્જન" }, answer: "B", image: null },

    { roundId: 1, question: "વિશ્વનો સૌથી મોટો મહાસાગર કયો છે?", options: { A: "એટલાન્ટિક", B: "પેસિફિક", C: "ઇન્ડિયન", D: "આર્કટિક" }, answer: "B", image: null },

    { roundId: 1, question: "વિશ્વનું સૌથી ઊંચું પર્વત કયું છે?", options: { A: "K2", B: "માઉન્ટ એવરેસ્ટ", C: "કાંચનજંગા", D: "નંગા પર્વત" }, answer: "B", image: null },

    { roundId: 1, question: "નાઈલ નદી કયા ખંડમાં છે?", options: { A: "એશિયા", B: "યુરોપ", C: "આફ્રિકા", D: "ઓસ્ટ્રેલિયા" }, answer: "C", image: null },

    { roundId: 1, question: "ભારતની સૌથી લાંબી નદી કઈ છે?", options: { A: "ગંગા", B: "યમુના", C: "ગોદાવરી", D: "બ્રહ્મપુત્ર" }, answer: "A", image: null },

    { roundId: 1, question: "વિશ્વનું સૌથી મોટું રણ કયું છે?", options: { A: "સહારા", B: "થાર", C: "ગોબી", D: "કાલાહારી" }, answer: "A", image: null },

    { roundId: 1, question: "ક્રિકેટમાં એક ટીમમાં કેટલા ખેલાડીઓ હોય છે?", options: { A: "9", B: "10", C: "11", D: "12" }, answer: "C", image: null },

    { roundId: 1, question: "ઓલિમ્પિક રમતોત્સવ કેટલા વર્ષે થાય છે?", options: { A: "2", B: "3", C: "4", D: "5" }, answer: "C", image: null },

    { roundId: 1, question: "ફૂટબોલ વર્લ્ડ કપ કઈ સંસ્થા આયોજિત કરે છે?", options: { A: "ICC", B: "FIFA", C: "IOC", D: "BCCI" }, answer: "B", image: null },

    { roundId: 1, question: "વિશ્વ પર્યાવરણ દિવસ ક્યારે ઉજવાય છે?", options: { A: "5 જૂન", B: "6 જૂન", C: "7 જૂન", D: "8 જૂન" }, answer: "A", image: null },

    { roundId: 1, question: "શિક્ષક દિવસ ક્યારે ઉજવાય છે?", options: { A: "5 સપ્ટેમ્બર", B: "10 સપ્ટેમ્બર", C: "15 સપ્ટેમ્બર", D: "2 સપ્ટેમ્બર" }, answer: "A", image: null },
    // ROUND 3 (Visual - Using your files)
    { roundId: 1, question: "ભારતની રાજધાની કઈ છે?", options: { A: "મુંબઈ", B: "કોલકાતા", C: "નવી દિલ્હી", D: "ચેન્નાઈ" }, answer: "C", image: null },

    { roundId: 1, question: "ભારતનો રાષ્ટ્રીય પ્રાણી કયું છે?", options: { A: "સિંહ", B: "વાઘ", C: "હાથી", D: "ચીતો" }, answer: "B", image: null },

    { roundId: 1, question: "ભારતનો રાષ્ટ્રીય પક્ષી કયો છે?", options: { A: "મોર", B: "કબૂતર", C: "હંસ", D: "ગરુડ" }, answer: "A", image: null },

    { roundId: 1, question: "ભારતનો રાષ્ટ્રીય ફૂલ કયું છે?", options: { A: "કમળ", B: "ગુલાબ", C: "ચમેલી", D: "સૂર્યમુખી" }, answer: "A", image: null },

    { roundId: 1, question: "ભારતનો રાષ્ટ્રીય રમત તરીકે કયું રમત માનવામાં આવે છે?", options: { A: "ક્રિકેટ", B: "હોકી", C: "ફૂટબોલ", D: "કબડી" }, answer: "B", image: null },

    { roundId: 1, question: "ભારતને સ્વતંત્રતા ક્યારે મળી?", options: { A: "15 ઓગસ્ટ 1947", B: "26 જાન્યુઆરી 1950", C: "2 ઓક્ટોબર 1947", D: "15 ઓગસ્ટ 1952" }, answer: "A", image: null },

    { roundId: 1, question: "ભારતના પ્રથમ વડાપ્રધાન કોણ હતા?", options: { A: "સરદાર પટેલ", B: "જવાહરલાલ નેહરુ", C: "લાલ બહાદુર શાસ્ત્રી", D: "રાજીવ ગાંધી" }, answer: "B", image: null },

    { roundId: 1, question: "ભારતના પ્રથમ રાષ્ટ્રપતિ કોણ હતા?", options: { A: "ડૉ. રાજેન્દ્ર પ્રસાદ", B: "ડૉ. રાધાકૃષ્ણન", C: "જવાહરલાલ નેહરુ", D: "ઇન્દિરા ગાંધી" }, answer: "A", image: null },

    { roundId: 1, question: "ગુજરાતની રાજધાની કઈ છે?", options: { A: "અમદાવાદ", B: "સુરત", C: "ગાંધીનગર", D: "વડોદરા" }, answer: "C", image: null },

    { roundId: 1, question: "ગુજરાત સ્થાપના દિવસ ક્યારે ઉજવાય છે?", options: { A: "1 મે", B: "15 ઓગસ્ટ", C: "26 જાન્યુઆરી", D: "2 ઓક્ટોબર" }, answer: "A", image: null },

    { roundId: 1, question: "સ્ટેચ્યુ ઓફ યુનિટી કોની પ્રતિમા છે?", options: { A: "મહાત્મા ગાંધી", B: "સરદાર પટેલ", C: "સુભાષચંદ્ર બોઝ", D: "ભગતસિંહ" }, answer: "B", image: null },

    { roundId: 1, question: "ગીર નેશનલ પાર્ક ક્યા માટે પ્રખ્યાત છે?", options: { A: "વાઘ", B: "સિંહ", C: "હાથી", D: "ચીતો" }, answer: "B", image: null },

    { roundId: 1, question: "સોમનાથ મંદિર ક્યા રાજ્યમાં આવેલું છે?", options: { A: "ગુજરાત", B: "રાજસ્થાન", C: "મહારાષ્ટ્ર", D: "મધ્ય પ્રદેશ" }, answer: "A", image: null },

    { roundId: 1, question: "દ્વારકા કયા ભગવાન સાથે જોડાયેલું છે?", options: { A: "શિવ", B: "વિષ્ણુ", C: "કૃષ્ણ", D: "ગણેશ" }, answer: "C", image: null },

    { roundId: 1, question: "વિશ્વનો સૌથી મોટો મહાસાગર કયો છે?", options: { A: "એટલાન્ટિક", B: "પેસિફિક", C: "ઇન્ડિયન", D: "આર્કટિક" }, answer: "B", image: null },

    { roundId: 1, question: "વિશ્વનું સૌથી ઊંચું પર્વત કયું છે?", options: { A: "K2", B: "એવરેસ્ટ", C: "કાંચનજંગા", D: "નંગા પર્વત" }, answer: "B", image: null },

    { roundId: 1, question: "ભારતની સૌથી લાંબી નદી કઈ છે?", options: { A: "ગંગા", B: "યમુના", C: "ગોદાવરી", D: "નર્મદા" }, answer: "A", image: null },

    { roundId: 1, question: "કચ્છનો રણ ક્યા રાજ્યમાં છે?", options: { A: "રાજસ્થાન", B: "ગુજરાત", C: "મહારાષ્ટ્ર", D: "પંજાબ" }, answer: "B", image: null },

    { roundId: 1, question: "ભારતનો સૌથી મોટો રાજ્ય વિસ્તાર પ્રમાણે કયો છે?", options: { A: "ગુજરાત", B: "રાજસ્થાન", C: "મહારાષ્ટ્ર", D: "ઉત્તર પ્રદેશ" }, answer: "B", image: null },

    { roundId: 1, question: "ભારતનો સૌથી વધુ વસ્તી ધરાવતો રાજ્ય કયો છે?", options: { A: "બિહાર", B: "ગુજરાત", C: "ઉત્તર પ્રદેશ", D: "મહારાષ્ટ્ર" }, answer: "C", image: null },

    { roundId: 1, question: "વિશ્વ પર્યાવરણ દિવસ ક્યારે ઉજવાય છે?", options: { A: "5 જૂન", B: "10 જૂન", C: "15 જૂન", D: "20 જૂન" }, answer: "A", image: null },

    { roundId: 1, question: "શિક્ષક દિવસ ક્યારે ઉજવાય છે?", options: { A: "5 સપ્ટેમ્બર", B: "10 સપ્ટેમ્બર", C: "15 સપ્ટેમ્બર", D: "20 સપ્ટેમ્બર" }, answer: "A", image: null },

    { roundId: 1, question: "આંતરરાષ્ટ્રીય યોગ દિવસ ક્યારે ઉજવાય છે?", options: { A: "20 જૂન", B: "21 જૂન", C: "22 જૂન", D: "23 જૂન" }, answer: "B", image: null },

    { roundId: 1, question: "ક્રિકેટમાં એક ટીમમાં કેટલા ખેલાડીઓ હોય છે?", options: { A: "9", B: "10", C: "11", D: "12" }, answer: "C", image: null },

    { roundId: 1, question: "ઓલિમ્પિક રમતોત્સવ કેટલા વર્ષે થાય છે?", options: { A: "2", B: "3", C: "4", D: "5" }, answer: "C", image: null },
    { roundId: 1, question: "ભારત કયા ખંડમાં આવેલું છે?", options: { A: "એશિયા", B: "યુરોપ", C: "આફ્રિકા", D: "ઓસ્ટ્રેલિયા" }, answer: "A", image: null },
    { roundId: 1, question: "ભારતનો રાષ્ટ્રીય ધ્વજ કોણે ડિઝાઇન કર્યો?", options: { A: "પિંગળી વેંકૈયા", B: "મહાત્મા ગાંધી", C: "સુભાષચંદ્ર બોઝ", D: "રાજેન્દ્ર પ્રસાદ" }, answer: "A", image: null },

    { roundId: 1, question: "વિશ્વનું સૌથી લાંબું નદી કયું છે?", options: { A: "નાઈલ", B: "અમેઝોન", C: "ગંગા", D: "યાંગ્ત્સે" }, answer: "A", image: null },

    { roundId: 1, question: "અમેરિકાની રાજધાની કઈ છે?", options: { A: "ન્યૂયોર્ક", B: "વોશિંગ્ટન D.C.", C: "લોસ એન્જલેસ", D: "શિકાગો" }, answer: "B", image: null },

    { roundId: 1, question: "વિશ્વનું સૌથી મોટું દેશ વિસ્તાર પ્રમાણે કયું છે?", options: { A: "અમેરિકા", B: "ચીન", C: "રશિયા", D: "ભારત" }, answer: "C", image: null },

    { roundId: 1, question: "ભારતનું રાષ્ટ્રીય પ્રતિક શું છે?", options: { A: "અશોક ચક્ર", B: "સિંહ સ્તંભ", C: "વાઘ", D: "કમળ" }, answer: "B", image: null },

    { roundId: 1, question: "ભારતનું રાષ્ટ્રીય ગીત કયું છે?", options: { A: "વંદે માતરમ", B: "જન ગણ મન", C: "સારે જહાં સે અચ્છા", D: "જય હિંદ" }, answer: "B", image: null },

    { roundId: 1, question: "મહાત્મા ગાંધીનો જન્મ કયા શહેરમાં થયો?", options: { A: "અમદાવાદ", B: "રાજકોટ", C: "પોરબંદર", D: "સુરત" }, answer: "C", image: null },

    { roundId: 1, question: "ભારતની પ્રથમ મહિલા વડાપ્રધાન કોણ હતી?", options: { A: "પ્રતિભા પાટીલ", B: "ઇન્દિરા ગાંધી", C: "સોનિયા ગાંધી", D: "સુષ્મા સ્વરાજ" }, answer: "B", image: null },

    { roundId: 1, question: "ભારતમાં કેટલા રાજ્ય છે?", options: { A: "26", B: "28", C: "29", D: "30" }, answer: "B", image: null },

    { roundId: 1, question: "ગુજરાતનું સૌથી મોટું શહેર કયું છે?", options: { A: "સુરત", B: "અમદાવાદ", C: "રાજકોટ", D: "વડોદરા" }, answer: "B", image: null },

    { roundId: 1, question: "નર્મદા નદી કયા સમુદ્રમાં મળે છે?", options: { A: "અરબી સમુદ્ર", B: "બંગાળની ખાડી", C: "હિન્દ મહાસાગર", D: "લાલ સમુદ્ર" }, answer: "A", image: null },

    { roundId: 1, question: "સાબરમતી નદી કયા શહેરમાંથી વહે છે?", options: { A: "સુરત", B: "અમદાવાદ", C: "રાજકોટ", D: "જામનગર" }, answer: "B", image: null },

    { roundId: 1, question: "ભારતનો સૌથી ઊંચો ડેમ કયો છે?", options: { A: "સરદાર સરોવર", B: "ભાખરા નંગલ", C: "હિરાકુડ", D: "ટેહરી" }, answer: "D", image: null },

    { roundId: 1, question: "વિશ્વનું સૌથી મોટું રણ કયું છે?", options: { A: "સહારા", B: "ગોબી", C: "થાર", D: "કાલાહારી" }, answer: "A", image: null },

    { roundId: 1, question: "થાર રણ કયા દેશમાં આવેલું છે?", options: { A: "ભારત", B: "પાકિસ્તાન", C: "ભારત અને પાકિસ્તાન", D: "નેપાળ" }, answer: "C", image: null },

    { roundId: 1, question: "વિશ્વનું સૌથી મોટું ટાપુ કયું છે?", options: { A: "ગ્રીનલૅન્ડ", B: "મેડાગાસ્કર", C: "શ્રીલંકા", D: "જાપાન" }, answer: "A", image: null },

    { roundId: 1, question: "ભારતનો સૌથી લાંબો પુલ કયો છે?", options: { A: "ભુપેન હઝારિકા સેતુ", B: "હાવડા બ્રિજ", C: "બાંદ્રા વર્લી સી લિંક", D: "ગોલ્ડન બ્રિજ" }, answer: "A", image: null },

    { roundId: 1, question: "વિશ્વ આરોગ્ય દિવસ ક્યારે ઉજવાય છે?", options: { A: "7 એપ્રિલ", B: "5 જૂન", C: "10 ઓક્ટોબર", D: "1 ડિસેમ્બર" }, answer: "A", image: null },

    { roundId: 1, question: "વિશ્વ જળ દિવસ ક્યારે ઉજવાય છે?", options: { A: "21 માર્ચ", B: "22 માર્ચ", C: "23 માર્ચ", D: "24 માર્ચ" }, answer: "B", image: null },

    { roundId: 1, question: "ભારતનું ચલણ શું છે?", options: { A: "ડોલર", B: "રૂપિયો", C: "યેન", D: "પાઉન્ડ" }, answer: "B", image: null },

    { roundId: 1, question: "ભારતનું રાષ્ટ્રીય વૃક્ષ કયું છે?", options: { A: "વટવૃક્ષ", B: "પીપળ", C: "નીમ", D: "આંબો" }, answer: "A", image: null },

    { roundId: 1, question: "ભારતનું રાષ્ટ્રીય ફળ કયું છે?", options: { A: "સફરજન", B: "કેરી", C: "કેળું", D: "દાડમ" }, answer: "B", image: null },

    { roundId: 1, question: "ભારતનો રાષ્ટ્રીય જળચર પ્રાણી કયું છે?", options: { A: "ડોલ્ફિન", B: "વ્હેલ", C: "શાર્ક", D: "કાચબા" }, answer: "A", image: null },

    { roundId: 1, question: "વિશ્વનો સૌથી વધુ વસ્તી ધરાવતો દેશ કયો છે?", options: { A: "ચીન", B: "ભારત", C: "અમેરિકા", D: "ઇન્ડોનેશિયા" }, answer: "B", image: null },
    { roundId: 1, question: "ચહેરો ઓળખો", options: { A: "આલ્બર્ટ આઇન્સ્ટાઇન", B: "ગેલેલિયો", C: "બ્રુનો", D: "ન્યૂટન" }, answer: "A", image: "Images/Albert Einstain.jpg" },
    { roundId: 1, question: "ચહેરો ઓળખો", options: { A: "ડો. હોમી ભાભા", B: "ડો. જયંત નારલીકર", C: "ડો. વિક્રમ સારાભાઇ", D: "ડો. પંકજ જોશી" }, answer: "C", image: "Images/Vikram_Sarabhai.jpg" },
    { roundId: 1, question: "ચહેરો ઓળખો", options: { A: "ડો. મનમોહન સિંહ", B: "ડો. સલમાન ખાન", C: "રાકેશ કલામ", D: "અબુલ પાકીર જેનુલાબ્દીન અબ્દુલ કલામ" }, answer: "D", image: "Images/Apj.png" },
    { roundId: 1, question: "ચહેરો ઓળખો", options: { A: "કલ્પના ચાવલા", B: "સુનિતા વિલિયમ્સ", C: "મેડમ ક્યુરી", D: "એનોલા હોમ્સ" }, answer: "B", image: "Images/Sunita Williams.jpg" },

    // // ROUND 4 (Math)
    { roundId: 1, question: "જવાબ મેળવો: 25 x 4 + 10", options: { A: "100", B: "110", C: "120", D: "150" }, answer: "B", image: null },
    { roundId: 1, question: "50 x 1230?", options: { A: "65100", B: "60150", C: "61500", D: "65100" }, answer: "C", image: null },
    { roundId: 1, question: "144નું વર્ગમૂળ?", options: { A: "10", B: "12", C: "14", D: "16" }, answer: "B", image: null },
    { roundId: 1, question: "ત્રિકોણના ત્રણેય ખૂણાના માપનો સરવાળો કેટલો થાય?", options: { A: "90°", B: "180°", C: "270°", D: "360°" }, answer: "B", image: null },
    { roundId: 1, question: "5 + 7 = ?", options: { A: "10", B: "11", C: "12", D: "13" }, answer: "C", image: null },

    { roundId: 1, question: "9 × 6 = ?", options: { A: "54", B: "56", C: "52", D: "50" }, answer: "A", image: null },

    { roundId: 1, question: "15 - 8 = ?", options: { A: "5", B: "6", C: "7", D: "8" }, answer: "C", image: null },

    { roundId: 1, question: "24 ÷ 6 = ?", options: { A: "3", B: "4", C: "5", D: "6" }, answer: "B", image: null },

    { roundId: 1, question: "12 × 8 = ?", options: { A: "96", B: "92", C: "98", D: "94" }, answer: "A", image: null },

    { roundId: 1, question: "100 ÷ 5 = ?", options: { A: "15", B: "20", C: "25", D: "30" }, answer: "B", image: null },

    { roundId: 1, question: "7² = ?", options: { A: "14", B: "21", C: "49", D: "28" }, answer: "C", image: null },

    { roundId: 1, question: "√64 = ?", options: { A: "6", B: "7", C: "8", D: "9" }, answer: "C", image: null },

    { roundId: 1, question: "10% of 200 = ?", options: { A: "10", B: "15", C: "20", D: "25" }, answer: "C", image: null },

    { roundId: 1, question: "25 + 35 = ?", options: { A: "50", B: "55", C: "60", D: "65" }, answer: "C", image: null },

    { roundId: 1, question: "18 × 3 = ?", options: { A: "54", B: "56", C: "58", D: "60" }, answer: "A", image: null },

    { roundId: 1, question: "81 ÷ 9 = ?", options: { A: "7", B: "8", C: "9", D: "10" }, answer: "C", image: null },

    { roundId: 1, question: "6³ = ?", options: { A: "36", B: "216", C: "126", D: "196" }, answer: "B", image: null },

    { roundId: 1, question: "14 + 29 = ?", options: { A: "41", B: "42", C: "43", D: "44" }, answer: "C", image: null },

    { roundId: 1, question: "50 - 17 = ?", options: { A: "31", B: "32", C: "33", D: "34" }, answer: "C", image: null },

    { roundId: 1, question: "36 ÷ 4 = ?", options: { A: "7", B: "8", C: "9", D: "10" }, answer: "C", image: null },

    { roundId: 1, question: "11 × 11 = ?", options: { A: "111", B: "121", C: "131", D: "141" }, answer: "B", image: null },

    { roundId: 1, question: "45 + 55 = ?", options: { A: "95", B: "100", C: "105", D: "110" }, answer: "B", image: null },

    { roundId: 1, question: "72 ÷ 8 = ?", options: { A: "7", B: "8", C: "9", D: "10" }, answer: "C", image: null },

    { roundId: 1, question: "16² = ?", options: { A: "256", B: "196", C: "216", D: "266" }, answer: "A", image: null },

    { roundId: 1, question: "3/4 નું દશાંશ રૂપ શું છે?", options: { A: "0.25", B: "0.5", C: "0.75", D: "1.25" }, answer: "C", image: null },

    { roundId: 1, question: "20% of 150 = ?", options: { A: "20", B: "25", C: "30", D: "35" }, answer: "C", image: null },

    { roundId: 1, question: "13 × 4 = ?", options: { A: "48", B: "50", C: "52", D: "54" }, answer: "C", image: null },

    { roundId: 1, question: "90 ÷ 10 = ?", options: { A: "8", B: "9", C: "10", D: "11" }, answer: "B", image: null },

    { roundId: 1, question: "8² = ?", options: { A: "16", B: "32", C: "64", D: "48" }, answer: "C", image: null },

    { roundId: 1, question: "1000 ÷ 100 = ?", options: { A: "5", B: "8", C: "10", D: "20" }, answer: "C", image: null },

    { roundId: 1, question: "17 + 28 = ?", options: { A: "43", B: "44", C: "45", D: "46" }, answer: "C", image: null },

    { roundId: 1, question: "60 - 25 = ?", options: { A: "30", B: "35", C: "40", D: "45" }, answer: "B", image: null },

    { roundId: 1, question: "7 × 12 = ?", options: { A: "72", B: "84", C: "96", D: "88" }, answer: "B", image: null },

    { roundId: 1, question: "144 ÷ 12 = ?", options: { A: "10", B: "11", C: "12", D: "13" }, answer: "C", image: null },

    { roundId: 1, question: "5³ = ?", options: { A: "25", B: "75", C: "125", D: "150" }, answer: "C", image: null },

    { roundId: 1, question: "√81 = ?", options: { A: "7", B: "8", C: "9", D: "10" }, answer: "C", image: null },

    { roundId: 1, question: "30% of 200 = ?", options: { A: "40", B: "50", C: "60", D: "70" }, answer: "C", image: null },

    { roundId: 1, question: "19 + 21 = ?", options: { A: "38", B: "39", C: "40", D: "41" }, answer: "C", image: null },

    { roundId: 1, question: "80 - 32 = ?", options: { A: "46", B: "47", C: "48", D: "49" }, answer: "C", image: null },

    { roundId: 1, question: "9 × 9 = ?", options: { A: "72", B: "81", C: "90", D: "99" }, answer: "B", image: null },

    { roundId: 1, question: "63 ÷ 7 = ?", options: { A: "7", B: "8", C: "9", D: "10" }, answer: "C", image: null },

    { roundId: 1, question: "4² = ?", options: { A: "8", B: "12", C: "16", D: "20" }, answer: "C", image: null },

    { roundId: 1, question: "200 ÷ 20 = ?", options: { A: "8", B: "9", C: "10", D: "12" }, answer: "C", image: null },

    { roundId: 1, question: "22 + 33 = ?", options: { A: "50", B: "55", C: "60", D: "65" }, answer: "B", image: null },
    
    { roundId: 1, question: "પાણીનું રાસાયણિક સૂત્ર શું છે?", options: { A: "H2O", B: "CO2", C: "O2", D: "H2" }, answer: "A", image: null },

    { roundId: 1, question: "માનવ શરીરમાં કેટલા હાડકાં હોય છે?", options: { A: "196", B: "206", C: "216", D: "226" }, answer: "B", image: null },

    { roundId: 1, question: "પૃથ્વીનો ઉપગ્રહ કયો છે?", options: { A: "સૂર્ય", B: "ચંદ્ર", C: "મંગળ", D: "શુક્ર" }, answer: "B", image: null },

    { roundId: 1, question: "સૂર્ય કયો પ્રકારનો તારો છે?", options: { A: "લાલ", B: "પીળો", C: "વાદળી", D: "સફેદ" }, answer: "B", image: null },

    { roundId: 1, question: "પ્રકાશની ગતિ કેટલી છે?", options: { A: "3 લાખ કિમી/સેકન્ડ", B: "2 લાખ કિમી/સેકન્ડ", C: "1 લાખ કિમી/સેકન્ડ", D: "5 લાખ કિમી/સેકન્ડ" }, answer: "A", image: null },

    { roundId: 1, question: "પૃથ્વી સૂર્યની આસપાસ એક પરિક્રમા કરવા કેટલો સમય લે છે?", options: { A: "365 દિવસ", B: "366 દિવસ", C: "364 દિવસ", D: "360 દિવસ" }, answer: "A", image: null },

    { roundId: 1, question: "માનવ શરીરમાં સૌથી મોટું અંગ કયું છે?", options: { A: "હૃદય", B: "ફેફસા", C: "ચામડી", D: "યકૃત" }, answer: "C", image: null },

    { roundId: 1, question: "રક્તનો લાલ રંગ કઈ વસ્તુને કારણે છે?", options: { A: "પ્લાઝ્મા", B: "હિમોગ્લોબિન", C: "પ્લેટલેટ", D: "પાણી" }, answer: "B", image: null },

    { roundId: 1, question: "છોડ ખોરાક બનાવવાની પ્રક્રિયાને શું કહે છે?", options: { A: "શ્વસન", B: "પ્રકાશ સંશ્લેષણ", C: "પાચન", D: "ઉત્સર્જન" }, answer: "B", image: null },

    { roundId: 1, question: "વીજળીનું માપન કયા એકમમાં થાય છે?", options: { A: "વોલ્ટ", B: "એમ્પિયર", C: "વોટ", D: "ઓહ્મ" }, answer: "B", image: null },

    { roundId: 1, question: "સૂર્યમંડળમાં સૌથી મોટો ગ્રહ કયો છે?", options: { A: "પૃથ્વી", B: "મંગળ", C: "બૃહસ્પતિ", D: "શનિ" }, answer: "C", image: null },

    { roundId: 1, question: "પૃથ્વી પર જીવન માટે જરૂરી ગેસ કયો છે?", options: { A: "ઓક્સિજન", B: "કાર્બન ડાયોક્સાઇડ", C: "નાઇટ્રોજન", D: "હાઈડ્રોજન" }, answer: "A", image: null },

    { roundId: 1, question: "માનવ શરીરમાં રક્ત શુદ્ધ કરતું અંગ કયું છે?", options: { A: "હૃદય", B: "કિડની", C: "ફેફસા", D: "યકૃત" }, answer: "B", image: null },

    { roundId: 1, question: "પૃથ્વીનું કેન્દ્ર શું કહેવાય છે?", options: { A: "ક્રસ્ટ", B: "મેન્ટલ", C: "કોર", D: "લેયર" }, answer: "C", image: null },

    { roundId: 1, question: "સૌથી કઠોર કુદરતી પદાર્થ કયો છે?", options: { A: "લોખંડ", B: "હીરો", C: "સોનું", D: "ચાંદી" }, answer: "B", image: null },

    { roundId: 1, question: "ધ્વનિ કઈ વસ્તુમાં ઝડપથી ફેલાય છે?", options: { A: "હવા", B: "પાણી", C: "ઘન", D: "શૂન્ય" }, answer: "C", image: null },

    { roundId: 1, question: "માનવ શરીરમાં હૃદયનું મુખ્ય કાર્ય શું છે?", options: { A: "પાચન", B: "રક્ત પંપ કરવું", C: "શ્વાસ લેવો", D: "વિચાર કરવો" }, answer: "B", image: null },

    { roundId: 1, question: "પાણી 100°C પર શું બને છે?", options: { A: "બરફ", B: "વાષ્પ", C: "ઘન", D: "પ્લાઝ્મા" }, answer: "B", image: null },

    { roundId: 1, question: "પૃથ્વી પર દિવસ અને રાત કેમ થાય છે?", options: { A: "પૃથ્વીની પરિક્રમા", B: "પૃથ્વીની પરિભ્રમણ", C: "ચંદ્રની ગતિ", D: "સૂર્યની ગતિ" }, answer: "B", image: null },

    { roundId: 1, question: "પૃથ્વી પર સૌથી વધુ પ્રમાણમાં કયો ગેસ છે?", options: { A: "ઓક્સિજન", B: "નાઇટ્રોજન", C: "કાર્બન ડાયોક્સાઇડ", D: "હાઈડ્રોજન" }, answer: "B", image: null },

    { roundId: 1, question: "વીજળી શોધનાર વૈજ્ઞાનિક કોણ છે?", options: { A: "આઈન્સ્ટાઈન", B: "ન્યુટન", C: "બેન્જામિન ફ્રેન્કલિન", D: "ગેલિલિયો" }, answer: "C", image: null },

    { roundId: 1, question: "ટેલિફોન કોણે શોધ્યો?", options: { A: "ગ્રાહમ બેલ", B: "એડિસન", C: "ન્યુટન", D: "આઈન્સ્ટાઈન" }, answer: "A", image: null },

    { roundId: 1, question: "વિજ્ઞાનમાં DNA નો અર્થ શું છે?", options: { A: "Deoxyribonucleic Acid", B: "Dynamic Nuclear Acid", C: "Digital Network Array", D: "Double Nuclear Atom" }, answer: "A", image: null },

    { roundId: 1, question: "સૂર્યમંડળમાં સૌથી નજીકનો ગ્રહ કયો છે?", options: { A: "મંગળ", B: "બુધ", C: "શુક્ર", D: "પૃથ્વી" }, answer: "B", image: null },

    { roundId: 1, question: "સૂર્યમંડળમાં સૌથી ગરમ ગ્રહ કયો છે?", options: { A: "બુધ", B: "શુક્ર", C: "મંગળ", D: "શનિ" }, answer: "B", image: null },

    { roundId: 1, question: "પાણી 0°C પર શું બને છે?", options: { A: "વાષ્પ", B: "બરફ", C: "ગેસ", D: "પ્લાઝ્મા" }, answer: "B", image: null },

    { roundId: 1, question: "માનવ શરીરમાં શ્વાસ લેવા માટે કયું અંગ ઉપયોગી છે?", options: { A: "હૃદય", B: "ફેફસા", C: "યકૃત", D: "મગજ" }, answer: "B", image: null },

    { roundId: 1, question: "મગજ કઈ પ્રણાલીનો ભાગ છે?", options: { A: "પાચન", B: "સ્નાયુ", C: "નર્વસ સિસ્ટમ", D: "શ્વસન" }, answer: "C", image: null },

    { roundId: 1, question: "વિશ્વમાં સૌથી મોટું પ્રાણી કયું છે?", options: { A: "હાથી", B: "બ્લુ વ્હેલ", C: "જિરાફ", D: "શાર્ક" }, answer: "B", image: null },

    { roundId: 1, question: "બેક્ટેરિયા કયા પ્રકારના જીવ છે?", options: { A: "એકકોષી", B: "બહુકોષી", C: "વાયરલ", D: "ફંગસ" }, answer: "A", image: null },
    // ROUND 5 (Rapid Fire)
    { roundId: 1, question: "પ્રકાશસંશ્લેષણ ક્રિયા દરમિયાન વૃક્ષ કયો વાયુ શોષે છે?", options: { A: "ઓક્સિજન", B: "નાઈટ્રોજન", C: "કાર્બન ડાયોક્સાઈડ", D: "હાઇડ્રોજન" }, answer: "C", image: null },
    { roundId: 1, question: "સૌથી મજબુત તત્વ કયું છે?", options: { A: "સોનું", B: "લોખંડ", C: "પ્લેટીનીયમ", D: "હીરો" }, answer: "D", image: null },
    { roundId: 1, question: "માનવ શરીરમાં કેટલા હાડકાં છે?", options: { A: "206", B: "208", C: "210", D: "212" }, answer: "A", image: null },
    { roundId: 1, question: "સૌથી ઝડપી પ્રાણી કયું છે?", options: { A: "સિંહ", B: "ચિત્તો", C: "ઘોડો", D: "વાઘ" }, answer: "B", image: null },
    { roundId: 1, question: "ભારતની રાજધાની કઈ છે?", options: { A: "મુંબઈ", B: "અમદાવાદ", C: "નવી દિલ્લી", D: "ચેન્નાઈ" }, answer: "C", image: null },

    // ROUND 6 (Audio - Using your files)
    //{ roundId: 3, question: "Listen to the clip. Which Actor's voice is this?", options: { A: "Salman Khan", B: "Amitabh Bachhan", C: "Ajay Devgan", D: "Shah Rukh Khan" }, answer: "D", audioClip: "Sounds/Questions/SRK.mp3",image: null},
    
    // TIE BREAKER (Buzzer)
    { 
    roundId: 99, 
    question: "શાળાની પરબમાં પીવાના પાણીના કેટલા નળ છે?", 
    options: { A: "4", B: "5", C: "8", D: "6" }, 
    answer: "C", 
    image: null 
},
{ 
    roundId: 99, 
    question: "કયો વાયુ પૃથ્વી પર 78% છે?", 
    options: { A: "ઓક્સિજન", B: "કાર્બન ડાયોક્સાઈડ", C: "નાઈટ્રોજન", D: "હાઇડ્રોજન" }, 
    answer: "C", 
    image: null 
},
{ 
    roundId: 99, 
    question: "ભારતના પહેલા મહિલા વડાપ્રધાન કોણ હતા?", 
    options: { A: "સોનિયા ગાંધી", B: "દ્રૌપદી મુર્મુ", C: "ઇન્દિરા ગાંધી", D: "પ્રતિભા પાટીલ" }, 
    answer: "C", 
    image: null 
}
];
