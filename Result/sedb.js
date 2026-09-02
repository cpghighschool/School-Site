// database.js

const students9th = [
    {
        rollNo: "1",
        name: "દરજી જાનવી વિપુલકુમાર",
        result: "PASS",
        marks: { Gujarati: 66, Hindi: 69, English: 75, Sanskrit: 62, Maths: 42, Science: 56, SocialScience: 55, Computer: "A", PT: "A", Drawing: "B" }
    },
    {
        rollNo: "2",
        name: "ડાભી હેમાંગી જયદીપકુમાર",
        result: "PASS",
        marks: { Gujarati: 46, Hindi: 56, English: 58, Sanskrit: 44, Maths: 33, Science: 37, SocialScience: 38, Computer: "B+", PT: "A", Drawing: "B" }
    },
    {
        rollNo: "3",
        name: "દંતાણી મમતા ટિનાભાઈ",
        result: "FAIL",
        marks: { Gujarati: 8, Hindi: 19, English: 18, Sanskrit: 13, Maths: 7, Science: 11, SocialScience: 10, Computer: "E", PT: "E", Drawing: "E" }
    },
    {
        rollNo: "4",
        name: "દેસાઈ તનીશા રાજુભાઈ",
        result: "PASS",
        marks: { Gujarati: 87, Hindi: 94, English: 96, Sanskrit: 86, Maths: 89, Science: 89, SocialScience: 92, Computer: "A", PT: "A", Drawing: "B" }
    },
    {
        rollNo: "5",
        name: "દેસાઈ હિર વિરમભાઇ",
        result: "PASS",
        marks: { Gujarati: 86, Hindi: 89, English: 97, Sanskrit: 88, Maths: 93, Science: 91, SocialScience: 93, Computer: "A", PT: "A", Drawing: "B+" }
    },
    {
        rollNo: "6",
        name: "પટેલ જેની વિસાભાઇ",
        result: "PASS",
        marks: { Gujarati: 91, Hindi: 93, English: 94, Sanskrit: 85, Maths: 84, Science: 90, SocialScience: 94, Computer: "A", PT: "A", Drawing: "B+" }
    },
    {
        rollNo: "7",
        name: "પટેલ નવિયાબેન ખોડાભાઈ",
        result: "PASS",
        marks: { Gujarati: 83, Hindi: 91, English: 89, Sanskrit: 84, Maths: 75, Science: 81, SocialScience: 86, Computer: "B+", PT: "A", Drawing: "A" }
    },
    {
        rollNo: "8",
        name: "પટેલ પલ કેતનકુમાર",
        result: "PASS",
        marks: { Gujarati: 63, Hindi: 74, English: 89, Sanskrit: 63, Maths: 70, Science: 68, SocialScience: 65, Computer: "B+", PT: "A", Drawing: "A" }
    },
    {
        rollNo: "9",
        name: "પ્રજાપતિ હિનલ જયંતીભાઈ",
        result: "PROMOTION",
        marks: { Gujarati: 40, Hindi: 39, English: 38, Sanskrit: 37, Maths: 27, Science: 29, SocialScience: 33, Computer: "B+", PT: "A", Drawing: "B" }
    },
    {
        rollNo: "10",
        name: "પ્રજાપતિ ખુશીબેન જયેશભાઈ",
        result: "PASS",
        marks: { Gujarati: 45, Hindi: 52, English: 53, Sanskrit: 49, Maths: 25, Science: 38, SocialScience: 34, Computer: "B", PT: "A", Drawing: "B" }
    },
    {
        rollNo: "11",
        name: "રબારી ધનસ્વી ખોડાભાઈ",
        result: "PASS",
        marks: { Gujarati: 58, Hindi: 62, English: 69, Sanskrit: 53, Maths: 31, Science: 47, SocialScience: 53, Computer: "B+", PT: "B+", Drawing: "B+" }
    },
    {
        rollNo: "12",
        name: "રાવળ હિનલ પ્રવિણભાઈ",
        result: "PASS",
        marks: { Gujarati: 74, Hindi: 80, English: 80, Sanskrit: 80, Maths: 56, Science: 59, SocialScience: 61, Computer: "A", PT: "B", Drawing: "B+" }
    },
    {
        rollNo: "13",
        name: "રાવળ સૃષ્ટિબેન અલ્પેશભાઈ",
        result: "PASS",
        marks: { Gujarati: 84, Hindi: 90, English: 90, Sanskrit: 83, Maths: 64, Science: 78, SocialScience: 81, Computer: "A", PT: "B+", Drawing: "B+" }
    },
    {
        rollNo: "14",
        name: "સુથાર શ્રેયાબેન ભાવેશકુમાર",
        result: "PASS",
        marks: { Gujarati: 82, Hindi: 86, English: 81, Sanskrit: 76, Maths: 60, Science: 78, SocialScience: 79, Computer: "A", PT: "A", Drawing: "B" }
    },
    {
        rollNo: "15",
        name: "સેનમા પલક જયેશભાઈ",
        result: "PASS",
        marks: { Gujarati: 74, Hindi: 73, English: 85, Sanskrit: 61, Maths: 47, Science: 64, SocialScience: 60, Computer: "B+", PT: "A", Drawing: "B" }
    },
    {
        rollNo: "16",
        name: "ઠાકોર જાનકી મેલાજી",
        result: "PROMOTION",
        marks: { Gujarati: 34, Hindi: 35, English: 39, Sanskrit: 34, Maths: 30, Science: 29, SocialScience: 31, Computer: "B", PT: "B", Drawing: "B" }
    },
    {
        rollNo: "17",
        name: "ઠાકોર મિત્તલ અરવિંદજી",
        result: "PASS",
        marks: { Gujarati: 58, Hindi: 54, English: 50, Sanskrit: 49, Maths: 26, Science: 30, SocialScience: 35, Computer: "B", PT: "B+", Drawing: "C+" }
    },
    {
        rollNo: "18",
        name: "ઠાકોર હર્ષિદાબેન દિલીપજી",
        result: "PASS",
        marks: { Gujarati: 59, Hindi: 67, English: 66, Sanskrit: 61, Maths: 36, Science: 42, SocialScience: 41, Computer: "B+", PT: "B+", Drawing: "B" }
    },
    {
        rollNo: "19",
        name: "ઠાકોર પૂનમ ડાહ્યાજી",
        result: "PROMOTION",
        marks: { Gujarati: 39, Hindi: 51, English: 57, Sanskrit: 38, Maths: 26, Science: 30, SocialScience: 34, Computer: "B", PT: "A", Drawing: "B" }
    },
    {
        rollNo: "20",
        name: "ઠાકોર ઉર્વી ગલસંગજી",
        result: "PASS",
        marks: { Gujarati: 58, Hindi: 65, English: 64, Sanskrit: 54, Maths: 29, Science: 53, SocialScience: 46, Computer: "B", PT: "A", Drawing: "B" }
    },
    {
        rollNo: "21",
        name: "ઠાકોર પલકબેન મહેશજી",
        result: "PROMOTION",
        marks: { Gujarati: 36, Hindi: 43, English: 42, Sanskrit: 34, Maths: 26, Science: 30, SocialScience: 33, Computer: "B", PT: "B+", Drawing: "B" }
    },
    {
        rollNo: "22",
        name: "ઠાકોર કવિતા રાજુજી",
        result: "PASS",
        marks: { Gujarati: 53, Hindi: 52, English: 54, Sanskrit: 56, Maths: 27, Science: 36, SocialScience: 47, Computer: "B", PT: "B+", Drawing: "B+" }
    },
    {
        rollNo: "23",
        name: "ઠાકોર જાનવી બળવંતજી",
        result: "PROMOTION",
        marks: { Gujarati: 42, Hindi: 40, English: 61, Sanskrit: 42, Maths: 28, Science: 29, SocialScience: 38, Computer: "B", PT: "A", Drawing: "C+" }
    },
    {
        rollNo: "24",
        name: "ઠાકોર રૂત્વીકા પ્રકાશભાઈ",
        result: "PROMOTION",
        marks: { Gujarati: 37, Hindi: 47, English: 55, Sanskrit: 37, Maths: 27, Science: 28, SocialScience: 37, Computer: "B", PT: "B+", Drawing: "B" }
    },
    {
        rollNo: "25",
        name: "નાડિયા જાનકી પ્રકાશભાઈ",
        result: "PROMOTION",
        marks: { Gujarati: 38, Hindi: 45, English: 46, Sanskrit: 45, Maths: 27, Science: 28, SocialScience: 33, Computer: "C+", PT: "B+", Drawing: "B" }
    },
    {
        rollNo: "26",
        name: "લેઉઆ દિવ્યાબેન મેહુલભાઈ",
        result: "PASS",
        marks: { Gujarati: 80, Hindi: 80, English: 84, Sanskrit: 75, Maths: 58, Science: 79, SocialScience: 80, Computer: "B+", PT: "A", Drawing: "B+" }
    },
    {
        rollNo: "27",
        name: "વાઘેલા પ્રિયાબેન રોહિતસિંહ",
        result: "PASS",
        marks: { Gujarati: 61, Hindi: 52, English: 53, Sanskrit: 46, Maths: 32, Science: 52, SocialScience: 39, Computer: "B+", PT: "B+", Drawing: "C+" }
    },
    {
        rollNo: "28",
        name: "વાઘેલા શ્રુતિ જગદીશભાઈ",
        result: "PASS",
        marks: { Gujarati: 80, Hindi: 82, English: 82, Sanskrit: 78, Maths: 77, Science: 76, SocialScience: 77, Computer: "A", PT: "A", Drawing: "C+" }
    },
    {
        rollNo: "29",
        name: "ડાભી સરસ્વતીબેન નરેન્દ્રસિંહ",
        result: "PASS",
        marks: { Gujarati: 69, Hindi: 67, English: 76, Sanskrit: 60, Maths: 50, Science: 63, SocialScience: 59, Computer: "A", PT: "B+", Drawing: "B+" }
    },
    {
        rollNo: "30",
        name: "બારૈયા દેવરાજસિંહ વિજયભાઈ",
        result: "PASS",
        marks: { Gujarati: 82, Hindi: 84, English: 86, Sanskrit: 84, Maths: 94, Science: 91, SocialScience: 87, Computer: "B+", PT: "B+", Drawing: "B" }
    },
    {
        rollNo: "31",
        name: "ડાભી શૈલેષકુમાર રણજીતસિંહ",
        result: "PROMOTION",
        marks: { Gujarati: 37, Hindi: 45, English: 52, Sanskrit: 35, Maths: 30, Science: 31, SocialScience: 32, Computer: "B", PT: "B+", Drawing: "C+" }
    },
    {
        rollNo: "32",
        name: "દંતાણી અમીત અશોકભાઈ",
        result: "FAIL",
        marks: { Gujarati: 25, Hindi: 35, English: 21, Sanskrit: 23, Maths: 12, Science: 15, SocialScience: 20, Computer: "C+", PT: "B", Drawing: "B" }
    },
    {
        rollNo: "33",
        name: "દંતાણી રોહિત ભરતભાઈ",
        result: "PROMOTION",
        marks: { Gujarati: 36, Hindi: 50, English: 56, Sanskrit: 38, Maths: 28, Science: 28, SocialScience: 35, Computer: "B+", PT: "B", Drawing: "B" }
    },
    {
        rollNo: "34",
        name: "દંતાણી હાર્દિક દિનેશભાઈ",
        result: "FAIL",
        marks: { Gujarati: 21, Hindi: 32, English: 30, Sanskrit: 19, Maths: 14, Science: 25, SocialScience: 18, Computer: "C+", PT: "B", Drawing: "C+" }
    },
    {
        rollNo: "35",
        name: "દંતાણી સચિન દેવેન્દ્રભાઈ",
        result: "PROMOTION",
        marks: { Gujarati: 33, Hindi: 38, English: 40, Sanskrit: 38, Maths: 28, Science: 28, SocialScience: 33, Computer: "B", PT: "B+", Drawing: "C+" }
    },
    {
        rollNo: "36",
        name: "પટેલ અનંત રોહિતભાઈ",
        result: "PASS",
        marks: { Gujarati: 71, Hindi: 77, English: 83, Sanskrit: 67, Maths: 83, Science: 73, SocialScience: 73, Computer: "A", PT: "A", Drawing: "B" }
    },
    {
        rollNo: "37",
        name: "પટેલ દક્ષ અલ્પેશભાઈ",
        result: "PASS",
        marks: { Gujarati: 67, Hindi: 66, English: 79, Sanskrit: 64, Maths: 73, Science: 64, SocialScience: 71, Computer: "B+", PT: "A", Drawing: "B+" }
    },
    {
        rollNo: "38",
        name: "પટેલ સિધ્ધકુમાર સુમનભાઈ",
        result: "PROMOTION",
        marks: { Gujarati: 37, Hindi: 43, English: 64, Sanskrit: 39, Maths: 31, Science: 27, SocialScience: 34, Computer: "B+", PT: "B+", Drawing: "C+" }
    },
    {
        rollNo: "39",
        name: "રબારી ધ્રુમીલ ખોડાભાઈ",
        result: "PROMOTION",
        marks: { Gujarati: 37, Hindi: 42, English: 45, Sanskrit: 36, Maths: 27, Science: 30, SocialScience: 33, Computer: "C+", PT: "B+", Drawing: "C+" }
    },
    {
        rollNo: "40",
        name: "રાવળ માનવ સુરેશભાઈ",
        result: "PASS",
        marks: { Gujarati: 43, Hindi: 44, English: 55, Sanskrit: 42, Maths: 31, Science: 28, SocialScience: 36, Computer: "B", PT: "B+", Drawing: "C+" }
    },
    {
        rollNo: "41",
        name: "રામી મીત રાકેશભાઈ",
        result: "PASS",
        marks: { Gujarati: 78, Hindi: 79, English: 91, Sanskrit: 73, Maths: 94, Science: 90, SocialScience: 89, Computer: "A", PT: "A+", Drawing: "B" }
    },
    {
        rollNo: "42",
        name: "ઠાકોર અંશ મહેશજી",
        result: "PROMOTION",
        marks: { Gujarati: 33, Hindi: 39, English: 46, Sanskrit: 35, Maths: 30, Science: 26, SocialScience: 38, Computer: "B+", PT: "B+", Drawing: "C+" }
    },
    {
        rollNo: "43",
        name: "ઠાકોર ધવલ વિકાજી",
        result: "PASS",
        marks: { Gujarati: 58, Hindi: 65, English: 68, Sanskrit: 55, Maths: 45, Science: 36, SocialScience: 54, Computer: "B+", PT: "B+", Drawing: "B" }
    },
    {
        rollNo: "44",
        name: "ઠાકોર જીગરજી રમેશજી",
        result: "PASS",
        marks: { Gujarati: 40, Hindi: 47, English: 57, Sanskrit: 45, Maths: 34, Science: 28, SocialScience: 43, Computer: "B+", PT: "B+", Drawing: "B+" }
    },
    {
        rollNo: "45",
        name: "ઠાકોર જયેશજી સુરેશજી",
        result: "PASS",
        marks: { Gujarati: 47, Hindi: 53, English: 59, Sanskrit: 43, Maths: 32, Science: 29, SocialScience: 38, Computer: "B+", PT: "B+", Drawing: "B" }
    },
    {
        rollNo: "46",
        name: "ઠાકોર સાહિલ મહેશજી",
        result: "PROMOTION",
        marks: { Gujarati: 33, Hindi: 33, English: 35, Sanskrit: 33, Maths: 28, Science: 28, SocialScience: 33, Computer: "B+", PT: "B", Drawing: "C+" }
    },
    {
        rollNo: "47",
        name: "ઠાકોર શ્લોક જયંતિજી",
        result: "PASS",
        marks: { Gujarati: 46, Hindi: 55, English: 45, Sanskrit: 41, Maths: 26, Science: 32, SocialScience: 42, Computer: "A", PT: "A", Drawing: "B" }
    },
    {
        rollNo: "48",
        name: "ઠાકોર કિશનજી નટુજી",
        result: "PROMOTION",
        marks: { Gujarati: 36, Hindi: 39, English: 50, Sanskrit: 33, Maths: 29, Science: 28, SocialScience: 33, Computer: "B+", PT: "B+", Drawing: "B" }
    },
    {
        rollNo: "49",
        name: "ઠાકોર અમીતજી ટીનાજી",
        result: "FAIL",
        marks: { Gujarati: 22, Hindi: 14, English: 10, Sanskrit: 13, Maths: 21, Science: 14, SocialScience: 28, Computer: "C+", PT: "B", Drawing: "C+" }
    },
    {
        rollNo: "50",
        name: "ઠાકોર મેહુલ કનુજી",
        result: "PROMOTION",
        marks: { Gujarati: 34, Hindi: 34, English: 33, Sanskrit: 33, Maths: 29, Science: 28, SocialScience: 33, Computer: "C+", PT: "B", Drawing: "C+" }
    },
    {
        rollNo: "51",
        name: "ઠાકોર સાહિલ પોપટજી",
        result: "PROMOTION",
        marks: { Gujarati: 33, Hindi: 31, English: 37, Sanskrit: 34, Maths: 31, Science: 29, SocialScience: 33, Computer: "B", PT: "B+", Drawing: "C+" }
    },
    {
        rollNo: "52",
        name: "ઠાકોર કાળાજી બકાજી",
        result: "FAIL",
        marks: { Gujarati: 21, Hindi: 31, English: 21, Sanskrit: 17, Maths: 18, Science: 13, SocialScience: 31, Computer: "C+", PT: "B", Drawing: "C" }
    },
    {
        rollNo: "53",
        name: "ઠાકોર શિવાજી જુહાજી",
        result: "PROMOTION",
        marks: { Gujarati: 38, Hindi: 47, English: 46, Sanskrit: 41, Maths: 30, Science: 29, SocialScience: 33, Computer: "B+", PT: "B+", Drawing: "C+" }
    },
    {
        rollNo: "54",
        name: "ઠાકોર શૈલેષજી કુંવરજી",
        result: "PROMOTION",
        marks: { Gujarati: 33, Hindi: 34, English: 33, Sanskrit: 34, Maths: 28, Science: 28, SocialScience: 34, Computer: "B", PT: "B+", Drawing: "C+" }
    },
    {
        rollNo: "55",
        name: "ઠાકોર વિરલ મનુજી",
        result: "PASS",
        marks: { Gujarati: 46, Hindi: 47, English: 43, Sanskrit: 46, Maths: 41, Science: 33, SocialScience: 41, Computer: "B", PT: "A", Drawing: "B" }
    },
    {
        rollNo: "56",
        name: "ઠાકોર શ્રેયાંશકુમાર મહેશજી",
        result: "PASS",
        marks: { Gujarati: 77, Hindi: 74, English: 75, Sanskrit: 68, Maths: 75, Science: 79, SocialScience: 76, Computer: "A", PT: "A", Drawing: "B+" }
    },
    {
        rollNo: "57",
        name: "ઠાકોર સચિનજી ભીખાજી",
        result: "PASS",
        marks: { Gujarati: 49, Hindi: 51, English: 45, Sanskrit: 40, Maths: 36, Science: 27, SocialScience: 44, Computer: "B+", PT: "B+", Drawing: "C+" }
    },
    {
        rollNo: "58",
        name: "મકવાણા મહેશ શ્રવણજી",
        result: "PASS",
        marks: { Gujarati: 54, Hindi: 50, English: 63, Sanskrit: 40, Maths: 36, Science: 28, SocialScience: 50, Computer: "A", PT: "A", Drawing: "C+" }
    },
    {
        rollNo: "59",
        name: "દેસાઈ નાગેશભાઇ રાજુભાઈ",
        result: "PASS",
        marks: { Gujarati: 47, Hindi: 48, English: 43, Sanskrit: 39, Maths: 52, Science: 25, SocialScience: 50, Computer: "B+", PT: "B+", Drawing: "B" }
    },
    {
        rollNo: "60",
        name: "દેસાઈ વિરલ લગધીરભાઈ",
        result: "PASS",
        marks: { Gujarati: 53, Hindi: 55, English: 56, Sanskrit: 45, Maths: 54, Science: 31, SocialScience: 59, Computer: "A", PT: "A", Drawing: "B" }
    },
    {
        rollNo: "61",
        name: "દેસાઈ સોહમ અજમલભાઈ",
        result: "PASS",
        marks: { Gujarati: 78, Hindi: 82, English: 83, Sanskrit: 71, Maths: 92, Science: 85, SocialScience: 83, Computer: "A", PT: "A", Drawing: "B" }
    },
    {
        rollNo: "62",
        name: "નાડિયા સૂરજ વિજયભાઈ",
        result: "PROMOTION",
        marks: { Gujarati: 35, Hindi: 36, English: 40, Sanskrit: 34, Maths: 28, Science: 28, SocialScience: 34, Computer: "B", PT: "C+", Drawing: "B" }
    },
    {
        rollNo: "63",
        name: "રાવળ અભિષેક દિનેશભાઈ",
        result: "FAIL",
        marks: { Gujarati: 43, Hindi: 41, English: 55, Sanskrit: 30, Maths: 25, Science: 21, SocialScience: 37, Computer: "B+", PT: "B+", Drawing: "C+" }
    }
];
const students10th = [
    {
        rollNo: "1",
        name: "Aarav Patel",
        result: "PASS", // <-- Add this line
        marks: { Math: 88, Science: 92, English: 78, Geography: 82 }
    }
];

const students11th = [
    {
        rollNo: "1",
        name: "Rohan Verma",
        result: "PASS", // <-- Add this line
        marks: { Accountancy: 45, Economics: 55, BusinessStudies: 60, English: 65, Statistics: 50 }
    }
];

const students12th = [
    {
        rollNo: "1",
        name: "Neha Gupta",
        result: "FAIL", // <-- Add this line
        marks: { Physics: 30, Chemistry: 40, Biology: 50, English: 55 } 
    },
    {
        rollNo: "2",
        name: "Vikram Singh",
        result: "PASS", // <-- Add this line
        marks: { Physics: 85, Chemistry: 90, Mathematics: 95, English: 88, ComputerScience: 92 }
    }
];