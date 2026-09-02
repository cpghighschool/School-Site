// questions.js
const planetKnowledge = [
    "Sun: The Sun is a yellow dwarf star at the center of our solar system.",
    "સૂર્ય: સૂર્ય એ સૌરમંડળના કેન્દ્રમાં રહેલો એક પ્રચંડ તારો છે.",
    "Mercury: Mercury is the smallest planet and closest to the Sun. It has a rocky surface and extreme temperature changes.",
    "Venus: Venus is the second planet from the Sun. Thick clouds create a runaway greenhouse effect — very hot.",
    "Earth: Earth is our home — the third planet. It has abundant water and one natural satellite: the Moon.",
    "Moon: The Moon is Earth's only natural satellite. It influences tides and shows phases.",
    "Mars: Mars is the red planet; it has the largest volcano (Olympus Mons) and signs of past water.",
    "Jupiter: Jupiter is the largest planet, a gas giant with a Great Red Spot and many moons.",
    "Saturn: Saturn is famous for its rings made of ice and rock. It's a gas giant.",
    "Uranus: Uranus is an ice giant with a strong axial tilt; it appears pale blue-green.",
    "Neptune: Neptune is a distant ice giant, deep blue and known for strong winds.",
    "બુધ: બુધ ગ્રહ સૌરમંડળનો સૌથી નજીકનો ગ્રહ છે અને તેનો દિવસ ખૂબ લાંબો હોય છે.",
    "શુક્ર: શુક્ર ગ્રહ સૌરમંડળનો સૌથી ગરમ ગ્રહ છે, કારણ કે તેની વાતાવરણમાં કાર્બન ડાયોક્સાઇડ વધુ છે.",
    "પૃથ્વી: પૃથ્વી એ એકમાત્ર ગ્રહ છે જ્યાં જીવન છે, પાણી અને ઓક્સિજન ઉપલબ્ધ છે.",
    "મંગળ: મંગળ ગ્રહને લાલ ગ્રહ તરીકે ઓળખવામાં આવે છે અને ત્યાં પાણીના અંશ મળ્યા છે.",
    "ગુરુ: ગુરુ સૌરમંડળનો સૌથી મોટો ગ્રહ છે અને તેની પાસે ઘણા ઉપગ્રહો છે.",
    "શનિ: શનિ ગ્રહની આસપાસ સુંદર અને વિશાળ રિંગ્સ છે.",
    "યુરેનસ: યુરેનસ એક આકાશી નિલો ગ્રહ છે જે બાજુથી ફરતો હોય છે.",
    "નેપ્ચ્યુન: નેપ્ચ્યુન સૌરમંડળનો સૌથી દૂરનો ગ્રહ છે અને તેની હવા ખૂબ જ તીવ્ર છે.",
    "સૌરમંડળ શું છે?:સૌરમંડળ એ સૂર્ય અને તેના આસપાસ પરિભ્રમણ કરતા ગ્રહો, ઉપગ્રહો, ધૂમકેતુઓ અને અન્ય અવકાશી પદાર્થોનો સમૂહ છે.",
    "સૌરમંડળમાં કેટલા ગ્રહો છે?:સૌરમંડળમાં કુલ 8 મુખ્ય ગ્રહો છે: બુધ, શુક્ર, પૃથ્વી, મંગળ, ગુરુ, શનિ, યુરેનસ અને નેપ્ચ્યુન."
];

const fallbackResponse = "I'm still learning about the cosmos! Try asking me about Mercury, Mars, Earth, or સૌરમંડળ.";