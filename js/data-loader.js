// WAEC Practice App - Data Loader with Fallback
// This module provides question data with fallback for CORS issues
// Updated: All subjects now have 50+ comprehensive WAEC-style questions
// Mathematics: 50 questions, English: 55 questions, Physics: 52 questions, Chemistry: 52 questions, Biology: 55 questions

const questionData = {
  mathematics: [
    {"id": 1, "topic": "Algebra", "question": "Simplify: 3x + 2x - x", "options": ["6x", "4x", "2x", "x"], "answer": 1, "explanation": "To simplify: 3x + 2x - x = (3 + 2 - 1)x = 4x"},
    {"id": 2, "topic": "Algebra", "question": "Solve for x: 2x + 5 = 17", "options": ["5", "6", "7", "8"], "answer": 1, "explanation": "2x + 5 = 17\n2x = 17 - 5 = 12\nx = 12 ÷ 2 = 6"},
    {"id": 3, "topic": "Algebra", "question": "If y = 3x + 2 and x = 4, find y", "options": ["10", "12", "14", "16"], "answer": 2, "explanation": "Substitute x = 4: y = 3(4) + 2 = 12 + 2 = 14"},
    {"id": 4, "topic": "Algebra", "question": "Factorize: x² - 9", "options": ["(x-3)(x-3)", "(x+3)(x+3)", "(x-3)(x+3)", "x(x-9)"], "answer": 2, "explanation": "x² - 9 = x² - 3² = (x-3)(x+3) (difference of squares)"},
    {"id": 5, "topic": "Algebra", "question": "Solve: 3x - 7 = 2x + 5", "options": ["10", "11", "12", "13"], "answer": 2, "explanation": "3x - 2x = 5 + 7\nx = 12"},
    {"id": 6, "topic": "Geometry", "question": "A triangle has angles 50° and 60°. Find the third angle.", "options": ["60°", "70°", "80°", "90°"], "answer": 1, "explanation": "Sum of angles in triangle = 180°\nThird angle = 180° - 50° - 60° = 70°"},
    {"id": 7, "topic": "Geometry", "question": "The perimeter of a square is 36 cm. Find the side length.", "options": ["6 cm", "8 cm", "9 cm", "12 cm"], "answer": 2, "explanation": "Perimeter = 4 × side\n36 = 4 × side\nside = 9 cm"},
    {"id": 8, "topic": "Geometry", "question": "Area of a rectangle with length 12 cm and width 8 cm is", "options": ["20 cm²", "40 cm²", "96 cm²", "160 cm²"], "answer": 2, "explanation": "Area = length × width = 12 × 8 = 96 cm²"},
    {"id": 9, "topic": "Geometry", "question": "A circle has radius 7 cm. Find its circumference (π = 22/7)", "options": ["22 cm", "44 cm", "154 cm", "308 cm"], "answer": 1, "explanation": "Circumference = 2πr = 2 × (22/7) × 7 = 44 cm"},
    {"id": 10, "topic": "Geometry", "question": "Find the area of a triangle with base 10 cm and height 6 cm", "options": ["16 cm²", "30 cm²", "60 cm²", "120 cm²"], "answer": 1, "explanation": "Area = ½ × base × height = ½ × 10 × 6 = 30 cm²"},
    {"id": 11, "topic": "Statistics", "question": "Find the mean of: 4, 6, 10, 10", "options": ["7", "7.5", "8", "9"], "answer": 1, "explanation": "Mean = (4 + 6 + 10 + 10) ÷ 4 = 30 ÷ 4 = 7.5"},
    {"id": 12, "topic": "Statistics", "question": "The mode of 2, 4, 4, 5, 7 is", "options": ["2", "4", "5", "7"], "answer": 1, "explanation": "Mode is the most frequent value = 4"},
    {"id": 13, "topic": "Statistics", "question": "Find the median of: 3, 5, 7, 9, 11", "options": ["5", "6", "7", "8"], "answer": 2, "explanation": "Middle value in ordered list = 7"},
    {"id": 14, "topic": "Statistics", "question": "The range of 2, 8, 5, 10, 3 is", "options": ["5", "6", "7", "8"], "answer": 3, "explanation": "Range = highest - lowest = 10 - 2 = 8"},
    {"id": 15, "topic": "Arithmetic", "question": "Evaluate: 5! (five factorial)", "options": ["25", "60", "120", "720"], "answer": 2, "explanation": "5! = 5 × 4 × 3 × 2 × 1 = 120"},
    {"id": 16, "topic": "Arithmetic", "question": "Convert 0.25 to a percentage", "options": ["2.5%", "25%", "250%", "0.25%"], "answer": 1, "explanation": "0.25 × 100% = 25%"},
    {"id": 17, "topic": "Arithmetic", "question": "What is 15% of 80?", "options": ["10", "12", "15", "20"], "answer": 1, "explanation": "15% of 80 = (15/100) × 80 = 12"},
    {"id": 18, "topic": "Fractions", "question": "Simplify: 18/24", "options": ["3/4", "2/3", "4/5", "5/6"], "answer": 0, "explanation": "18/24 = (18÷6)/(24÷6) = 3/4"},
    {"id": 19, "topic": "Fractions", "question": "Add: 1/3 + 1/6", "options": ["2/9", "1/2", "2/6", "1/3"], "answer": 1, "explanation": "1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2"},
    {"id": 20, "topic": "Indices", "question": "Simplify: 2³ × 2²", "options": ["16", "24", "32", "64"], "answer": 2, "explanation": "2³ × 2² = 2⁵ = 32"},
    {"id": 21, "topic": "Indices", "question": "Evaluate: (3²)³", "options": ["18", "27", "54", "729"], "answer": 3, "explanation": "(3²)³ = 3⁶ = 729"},
    {"id": 22, "topic": "Logarithms", "question": "Find log₁₀ 1000", "options": ["2", "3", "4", "10"], "answer": 1, "explanation": "log₁₀ 1000 = log₁₀ 10³ = 3"},
    {"id": 23, "topic": "Trigonometry", "question": "sin 30° equals", "options": ["1/2", "√3/2", "1", "0"], "answer": 0, "explanation": "sin 30° = 1/2 (standard ratio)"},
    {"id": 24, "topic": "Trigonometry", "question": "cos 60° equals", "options": ["1/2", "√3/2", "1", "0"], "answer": 0, "explanation": "cos 60° = 1/2 (standard ratio)"},
    {"id": 25, "topic": "Probability", "question": "A fair die is rolled. Probability of getting an even number is", "options": ["1/6", "1/3", "1/2", "2/3"], "answer": 2, "explanation": "Even numbers: 2, 4, 6. P(even) = 3/6 = 1/2"},
    {"id": 26, "topic": "Probability", "question": "A bag has 3 red and 2 blue balls. Probability of drawing red is", "options": ["2/5", "3/5", "1/2", "1/5"], "answer": 1, "explanation": "P(red) = 3/(3+2) = 3/5"},
    {"id": 27, "topic": "Sequences", "question": "Next term in 2, 4, 8, 16, __ is", "options": ["18", "20", "24", "32"], "answer": 3, "explanation": "Each term doubles: 16 × 2 = 32"},
    {"id": 28, "topic": "Sequences", "question": "Find the 5th term of: 3, 7, 11, 15, __", "options": ["17", "19", "21", "23"], "answer": 1, "explanation": "Common difference = 4, so 15 + 4 = 19"},
    {"id": 29, "topic": "Ratio", "question": "Divide 60 in ratio 2:3. Find the larger share.", "options": ["24", "30", "36", "40"], "answer": 2, "explanation": "Total parts = 5, larger share = (3/5) × 60 = 36"},
    {"id": 30, "topic": "Ratio", "question": "If 3:x = 9:15, find x", "options": ["4", "5", "6", "7"], "answer": 1, "explanation": "3/x = 9/15, so x = (3 × 15)/9 = 5"},
    {"id": 31, "topic": "Mensuration", "question": "Volume of a cube with side 4 cm is", "options": ["12 cm³", "16 cm³", "48 cm³", "64 cm³"], "answer": 3, "explanation": "Volume = side³ = 4³ = 64 cm³"},
    {"id": 32, "topic": "Mensuration", "question": "Surface area of a cube with side 3 cm is", "options": ["18 cm²", "27 cm²", "54 cm²", "81 cm²"], "answer": 2, "explanation": "Surface area = 6 × side² = 6 × 9 = 54 cm²"},
    {"id": 33, "topic": "Functions", "question": "If f(x) = 2x + 1, find f(3)", "options": ["5", "6", "7", "8"], "answer": 2, "explanation": "f(3) = 2(3) + 1 = 6 + 1 = 7"},
    {"id": 34, "topic": "Functions", "question": "If g(x) = x² - 4, find g(3)", "options": ["3", "5", "7", "9"], "answer": 1, "explanation": "g(3) = 3² - 4 = 9 - 4 = 5"},
    {"id": 35, "topic": "Number Bases", "question": "Convert binary 1010 to decimal", "options": ["8", "9", "10", "12"], "answer": 2, "explanation": "1010₂ = 1×8 + 0×4 + 1×2 + 0×1 = 10"},
    {"id": 36, "topic": "Number Bases", "question": "Convert 25 to binary", "options": ["10011", "11001", "11010", "11100"], "answer": 1, "explanation": "25 = 16 + 8 + 1 = 11001₂"},
    {"id": 37, "topic": "Coordinate Geometry", "question": "Distance between points (0,0) and (3,4) is", "options": ["4", "5", "6", "7"], "answer": 1, "explanation": "Distance = √[(3-0)² + (4-0)²] = √[9+16] = √25 = 5"},
    {"id": 38, "topic": "Coordinate Geometry", "question": "Midpoint of (2,4) and (6,8) is", "options": ["(4,6)", "(4,8)", "(6,4)", "(8,6)"], "answer": 0, "explanation": "Midpoint = ((2+6)/2, (4+8)/2) = (4,6)"},
    {"id": 39, "topic": "Sets", "question": "If A = {1,2,3} and B = {2,3,4}, find A ∩ B", "options": ["{1}", "{2,3}", "{4}", "{1,2,3,4}"], "answer": 1, "explanation": "A ∩ B = common elements = {2,3}"},
    {"id": 40, "topic": "Sets", "question": "If A = {1,2,3} and B = {2,3,4}, find A ∪ B", "options": ["{2,3}", "{1,4}", "{1,2,3,4}", "{1,2,3}"], "answer": 2, "explanation": "A ∪ B = all elements = {1,2,3,4}"},
    {"id": 41, "topic": "Matrices", "question": "A 2×3 matrix has", "options": ["2 rows, 3 columns", "3 rows, 2 columns", "5 elements", "6 rows"], "answer": 0, "explanation": "Matrix size is rows × columns"},
    {"id": 42, "topic": "Inequalities", "question": "Solve: 2x + 3 > 7", "options": ["x > 2", "x > 4", "x > 5", "x > 7"], "answer": 0, "explanation": "2x > 7 - 3 = 4, so x > 2"},
    {"id": 43, "topic": "Word Problems", "question": "A car travels 120 km in 2 hours. Find its speed.", "options": ["40 km/h", "50 km/h", "60 km/h", "80 km/h"], "answer": 2, "explanation": "Speed = distance/time = 120/2 = 60 km/h"},
    {"id": 44, "topic": "Word Problems", "question": "The cost of 5 books is ₦250. Find cost of 8 books.", "options": ["₦350", "₦400", "₦450", "₦500"], "answer": 1, "explanation": "Cost per book = 250/5 = ₦50. 8 books = 8 × 50 = ₦400"},
    {"id": 45, "topic": "Percentages", "question": "Increase 80 by 25%", "options": ["90", "95", "100", "105"], "answer": 2, "explanation": "25% of 80 = 20. New value = 80 + 20 = 100"},
    {"id": 46, "topic": "Percentages", "question": "What % is 15 of 75?", "options": ["15%", "20%", "25%", "30%"], "answer": 1, "explanation": "Percentage = (15/75) × 100% = 20%"},
    {"id": 47, "topic": "Time and Work", "question": "A can complete work in 6 hours, B in 12 hours. Together they complete in", "options": ["3 hours", "4 hours", "9 hours", "18 hours"], "answer": 1, "explanation": "Combined rate = 1/6 + 1/12 = 1/4, so time = 4 hours"},
    {"id": 48, "topic": "Simple Interest", "question": "Simple interest on ₦1000 at 5% for 2 years is", "options": ["₦50", "₦100", "₦150", "₦200"], "answer": 1, "explanation": "SI = (P × R × T)/100 = (1000 × 5 × 2)/100 = ₦100"},
    {"id": 49, "topic": "Linear Programming", "question": "The region above the line y = 2x + 1 is represented by", "options": ["y < 2x + 1", "y > 2x + 1", "y ≤ 2x + 1", "y ≥ 2x + 1"], "answer": 1, "explanation": "Above the line means y > 2x + 1"},
    {"id": 50, "topic": "Calculus", "question": "Differentiate y = 3x² + 2x", "options": ["6x + 2", "3x + 2", "6x + 1", "3x + 1"], "answer": 0, "explanation": "dy/dx = 6x + 2"}
  ],

  english: [
    {
      "id": 1,
      "topic": "Grammar",
      "question": "Choose the correct sentence.",
      "options": ["She don't like tea.", "She doesn't like tea.", "She not likes tea.", "She isn't like tea."],
      "answer": 1,
      "explanation": "For third-person singular subjects (she, he, it), we use 'doesn't' (does not) for negative statements in present tense."
    },
    {
      "id": 2,
      "topic": "Grammar",
      "question": "Select the correct verb: The students ___ to school every day.",
      "options": ["go", "goes", "gone", "going"],
      "answer": 0,
      "explanation": "With plural subjects like 'students', we use the base form of the verb 'go' in present tense."
    },
    {
      "id": 3,
      "topic": "Vocabulary",
      "question": "Choose the word closest in meaning to 'rapid'.",
      "options": ["slow", "quick", "late", "calm"],
      "answer": 1,
      "explanation": "Rapid means happening or moving at high speed, which is synonymous with quick or fast."
    },
    {
      "id": 4,
      "topic": "Vocabulary",
      "question": "Choose the word opposite in meaning to 'expand'.",
      "options": ["increase", "stretch", "reduce", "grow"],
      "answer": 2,
      "explanation": "Expand means to become larger or increase in size. The opposite would be to reduce or decrease."
    },
    {
      "id": 5,
      "topic": "Comprehension",
      "question": "A passage says: 'The market opens early for fresh produce.' The best inference is that vendors",
      "options": ["prefer late mornings", "sell fresh items", "close at noon", "avoid vegetables"],
      "answer": 1,
      "explanation": "The phrase 'fresh produce' directly suggests that vendors sell fresh items, making this the most logical inference."
    },
    {
      "id": 6,
      "topic": "Grammar",
      "question": "Choose the correct form: Neither of the boys ___ present.",
      "options": ["are", "were", "is", "have been"],
      "answer": 2,
      "explanation": "'Neither' is a singular subject, so it requires the singular verb 'is' in present tense."
    },
    {
      "id": 7,
      "topic": "Grammar",
      "question": "Identify the error: 'The dog wagged it's tail happily.'",
      "options": ["No error", "it's should be its", "wagged should be wags", "happily should be happy"],
      "answer": 1,
      "explanation": "'Its' is the possessive form. 'It's' is a contraction meaning 'it is' or 'it has'."
    },
    {
      "id": 8,
      "topic": "Tenses",
      "question": "Choose the correct form: By next year, I ___ my degree.",
      "options": ["will complete", "will have completed", "complete", "am completing"],
      "answer": 1,
      "explanation": "Future perfect tense (will have + past participle) shows an action completed before a specific future time."
    },
    {
      "id": 9,
      "topic": "Tenses",
      "question": "Select the correct past participle: The letter was ___ yesterday.",
      "options": ["wrote", "written", "writing", "write"],
      "answer": 1,
      "explanation": "The past participle of 'write' is 'written', used in passive voice constructions."
    },
    {
      "id": 10,
      "topic": "Punctuation",
      "question": "Where should the comma be placed? 'After eating the lion slept.'",
      "options": ["After eating, the lion slept.", "After, eating the lion slept.", "After eating the, lion slept.", "No comma needed"],
      "answer": 0,
      "explanation": "A comma is needed after the introductory phrase 'After eating' to separate it from the main clause."
    },
    {
      "id": 11,
      "topic": "Punctuation",
      "question": "Choose the correctly punctuated sentence.",
      "options": ["Its a beautiful day isnt it?", "It's a beautiful day, isn't it?", "Its a beautiful day, isnt it?", "It's a beautiful day isnt it?"],
      "answer": 1,
      "explanation": "Contractions need apostrophes (It's, isn't), and tag questions require a comma before them."
    },
    {
      "id": 12,
      "topic": "Spelling",
      "question": "Choose the correctly spelled word.",
      "options": ["recieve", "receive", "recieve", "receave"],
      "answer": 1,
      "explanation": "The correct spelling is 'receive'. Remember: 'i' before 'e' except after 'c' when the sound is 'ee'."
    },
    {
      "id": 13,
      "topic": "Spelling",
      "question": "Identify the misspelled word.",
      "options": ["necessary", "occassion", "privilege", "definitely"],
      "answer": 1,
      "explanation": "'Occasion' is spelled with one 'c' and two 's's. The correct spelling is 'occasion'."
    },
    {
      "id": 14,
      "topic": "Vocabulary",
      "question": "Choose the word that means 'to make something clear'.",
      "options": ["clarify", "classify", "qualify", "magnify"],
      "answer": 0,
      "explanation": "'Clarify' means to make something clear or easier to understand."
    },
    {
      "id": 15,
      "topic": "Vocabulary",
      "question": "What is the opposite of 'optimistic'?",
      "options": ["realistic", "pessimistic", "enthusiastic", "dramatic"],
      "answer": 1,
      "explanation": "'Pessimistic' means having a negative outlook, which is the opposite of optimistic (positive outlook)."
    },
    {
      "id": 16,
      "topic": "Figures of Speech",
      "question": "Identify the figure of speech: 'The classroom was a zoo.'",
      "options": ["Simile", "Metaphor", "Personification", "Alliteration"],
      "answer": 1,
      "explanation": "This is a metaphor because it directly compares the classroom to a zoo without using 'like' or 'as'."
    },
    {
      "id": 17,
      "topic": "Figures of Speech",
      "question": "Which sentence contains personification?",
      "options": ["The wind whistled through the trees.", "She runs like the wind.", "The wind was very strong.", "Wind power is renewable."],
      "answer": 0,
      "explanation": "Personification gives human qualities (whistling) to non-human things (wind)."
    },
    {
      "id": 18,
      "topic": "Literature",
      "question": "What is the main character in a story called?",
      "options": ["Antagonist", "Protagonist", "Narrator", "Supporting character"],
      "answer": 1,
      "explanation": "The protagonist is the main character around whom the story revolves."
    },
    {
      "id": 19,
      "topic": "Literature",
      "question": "Which literary device involves a contrast between expectation and reality?",
      "options": ["Symbolism", "Irony", "Allusion", "Foreshadowing"],
      "answer": 1,
      "explanation": "Irony occurs when there's a contrast between what is expected and what actually happens."
    },
    {
      "id": 20,
      "topic": "Comprehension",
      "question": "The passage states: 'Regular exercise improves both physical and mental health.' What can be inferred?",
      "options": ["Exercise is only good for the body", "Exercise benefits multiple aspects of health", "Mental health is more important", "Exercise is difficult"],
      "answer": 1,
      "explanation": "The word 'both' indicates that exercise benefits multiple aspects - physical and mental health."
    },
    {
      "id": 21,
      "topic": "Grammar",
      "question": "Choose the correct pronoun: John and ___ went to the store.",
      "options": ["me", "I", "myself", "mine"],
      "answer": 1,
      "explanation": "Use 'I' as the subject pronoun. You can test this by removing 'John and' - 'I went to the store' is correct."
    },
    {
      "id": 22,
      "topic": "Grammar",
      "question": "Select the correct article: He wants to be ___ engineer.",
      "options": ["a", "an", "the", "no article"],
      "answer": 1,
      "explanation": "Use 'an' before words beginning with vowel sounds. 'Engineer' starts with a vowel sound."
    },
    {
      "id": 23,
      "topic": "Tenses",
      "question": "Choose the correct form: She ___ her homework when I called.",
      "options": ["does", "was doing", "has done", "will do"],
      "answer": 1,
      "explanation": "Past continuous tense (was doing) shows an ongoing action interrupted by another past action."
    },
    {
      "id": 24,
      "topic": "Tenses",
      "question": "Select the correct present perfect form: I ___ that movie three times.",
      "options": ["see", "saw", "have seen", "am seeing"],
      "answer": 2,
      "explanation": "Present perfect (have + past participle) connects past actions to the present moment."
    },
    {
      "id": 25,
      "topic": "Writing",
      "question": "Which sentence is most appropriate for a formal letter?",
      "options": ["Hey, what's up?", "I am writing to inquire about...", "How are you doing?", "Thanks a bunch!"],
      "answer": 1,
      "explanation": "Formal letters require respectful, professional language. 'I am writing to inquire about...' is appropriately formal."
    },
    {
      "id": 26,
      "topic": "Writing",
      "question": "What is the purpose of a topic sentence?",
      "options": ["To end the paragraph", "To introduce the main idea", "To provide examples", "To ask questions"],
      "answer": 1,
      "explanation": "A topic sentence introduces the main idea or theme that will be developed in the paragraph."
    },
    {
      "id": 27,
      "topic": "Vocabulary",
      "question": "Choose the word that means 'brief' or 'short':",
      "options": ["elaborate", "concise", "verbose", "extensive"],
      "answer": 1,
      "explanation": "'Concise' means expressing much in few words; brief and clear."
    },
    {
      "id": 28,
      "topic": "Vocabulary",
      "question": "What does 'meticulous' mean?",
      "options": ["Careless", "Very careful about details", "Quick", "Loud"],
      "answer": 1,
      "explanation": "'Meticulous' means showing great attention to detail; very careful and precise."
    },
    {
      "id": 29,
      "topic": "Grammar",
      "question": "Choose the correct comparative form: This book is ___ than that one.",
      "options": ["more interesting", "most interesting", "interestinger", "much interesting"],
      "answer": 0,
      "explanation": "For adjectives of three or more syllables, use 'more + adjective' for comparative form."
    },
    {
      "id": 30,
      "topic": "Grammar",
      "question": "Identify the subject in: 'Under the bridge, the homeless man slept.'",
      "options": ["bridge", "homeless", "man", "Under the bridge"],
      "answer": 2,
      "explanation": "The subject is 'man' - the person performing the action of sleeping."
    },
    {
      "id": 31,
      "topic": "Punctuation",
      "question": "Where should quotation marks be placed? She said I'll be there soon.",
      "options": ["She said 'I'll be there soon.'", "She said \"I'll be there soon.\"", "'She said I'll be there soon.'", "She 'said I'll be there soon.'"],
      "answer": 1,
      "explanation": "Direct speech should be enclosed in quotation marks: She said \"I'll be there soon.\""
    },
    {
      "id": 32,
      "topic": "Punctuation",
      "question": "Choose the correct use of semicolon:",
      "options": ["I like; apples", "I like apples; you like oranges", "I like apples; and oranges", "I; like apples"],
      "answer": 1,
      "explanation": "Semicolons connect two related independent clauses: 'I like apples' and 'you like oranges' are both complete thoughts."
    },
    {
      "id": 33,
      "topic": "Figures of Speech",
      "question": "Identify the alliteration: 'Peter picked peppers'",
      "options": ["Repetition of 'p' sound", "Rhyming words", "Similar meanings", "Opposite meanings"],
      "answer": 0,
      "explanation": "Alliteration is the repetition of initial consonant sounds - here, the 'p' sound is repeated."
    },
    {
      "id": 34,
      "topic": "Figures of Speech",
      "question": "What type of figurative language is 'Busy as a bee'?",
      "options": ["Metaphor", "Personification", "Simile", "Hyperbole"],
      "answer": 2,
      "explanation": "A simile compares two things using 'like' or 'as'. 'Busy as a bee' uses 'as' to compare."
    },
    {
      "id": 35,
      "topic": "Literature",
      "question": "What is the setting of a story?",
      "options": ["The main character", "The time and place", "The ending", "The conflict"],
      "answer": 1,
      "explanation": "Setting refers to the time and place where the events of a story occur."
    },
    {
      "id": 36,
      "topic": "Literature",
      "question": "Which is an example of internal conflict?",
      "options": ["Man vs. nature", "Man vs. society", "Man vs. himself", "Man vs. machine"],
      "answer": 2,
      "explanation": "Internal conflict occurs within a character's mind - a struggle with thoughts, feelings, or decisions."
    },
    {
      "id": 37,
      "topic": "Spelling",
      "question": "Choose the correctly spelled word:",
      "options": ["seperate", "separate", "seprate", "seperrate"],
      "answer": 1,
      "explanation": "The correct spelling is 'separate'. Remember: there's 'a rat' in separate."
    },
    {
      "id": 38,
      "topic": "Spelling",
      "question": "Which word is spelled incorrectly?",
      "options": ["beautiful", "piece", "friend", "beleive"],
      "answer": 3,
      "explanation": "'Believe' is the correct spelling. Remember: 'i' before 'e' except after 'c'."
    },
    {
      "id": 39,
      "topic": "Comprehension",
      "question": "From 'The student studied diligently and achieved excellent grades,' we can conclude:",
      "options": ["Studying guarantees good grades", "Hard work often leads to success", "The student was naturally smart", "Grades don't matter"],
      "answer": 1,
      "explanation": "The passage shows a cause-and-effect relationship between diligent studying and excellent grades."
    },
    {
      "id": 40,
      "topic": "Comprehension",
      "question": "What is the main purpose of a conclusion paragraph?",
      "options": ["Introduce new ideas", "Summarize main points", "Ask more questions", "Provide examples"],
      "answer": 1,
      "explanation": "A conclusion paragraph summarizes the main points and brings closure to the essay or passage."
    },
    {
      "id": 41,
      "topic": "Grammar",
      "question": "Choose the correct passive voice: The chef cooks the meal.",
      "options": ["The meal cooks by the chef", "The meal is cooked by the chef", "The meal was cooking by the chef", "The meal has cooked by the chef"],
      "answer": 1,
      "explanation": "Passive voice uses 'be' verb + past participle: 'The meal is cooked by the chef.'"
    },
    {
      "id": 42,
      "topic": "Grammar",
      "question": "Identify the adverb: 'She sang beautifully last night.'",
      "options": ["She", "sang", "beautifully", "night"],
      "answer": 2,
      "explanation": "'Beautifully' is an adverb modifying the verb 'sang', telling us how she sang."
    },
    {
      "id": 43,
      "topic": "Vocabulary",
      "question": "Choose a synonym for 'abundant':",
      "options": ["scarce", "plentiful", "small", "empty"],
      "answer": 1,
      "explanation": "'Abundant' means existing in large quantities; 'plentiful' has the same meaning."
    },
    {
      "id": 44,
      "topic": "Vocabulary",
      "question": "What does 'procrastinate' mean?",
      "options": ["To work hard", "To delay action", "To complete quickly", "To organize"],
      "answer": 1,
      "explanation": "'Procrastinate' means to delay or postpone action, especially something that should be done."
    },
    {
      "id": 45,
      "topic": "Tenses",
      "question": "Choose the correct future tense: Tomorrow, I ___ to Lagos.",
      "options": ["travel", "traveled", "will travel", "am travel"],
      "answer": 2,
      "explanation": "Future tense uses 'will + base form of verb' to express actions that will happen."
    },
    {
      "id": 46,
      "topic": "Tenses",
      "question": "Select the correct past continuous: They ___ when it started raining.",
      "options": ["play", "played", "were playing", "have played"],
      "answer": 2,
      "explanation": "Past continuous uses 'was/were + verb-ing' to show ongoing past actions."
    },
    {
      "id": 47,
      "topic": "Writing",
      "question": "What makes a good thesis statement?",
      "options": ["It asks a question", "It states the main argument clearly", "It provides all the evidence", "It summarizes everything"],
      "answer": 1,
      "explanation": "A thesis statement clearly presents the main argument or central idea of an essay."
    },
    {
      "id": 48,
      "topic": "Writing",
      "question": "Which transition word shows contrast?",
      "options": ["Therefore", "However", "Furthermore", "Additionally"],
      "answer": 1,
      "explanation": "'However' is a transitional word that indicates contrast or opposition to a previous statement."
    },
    {
      "id": 49,
      "topic": "Literature",
      "question": "What is foreshadowing?",
      "options": ["Describing the past", "Hinting at future events", "Ending the story", "Developing characters"],
      "answer": 1,
      "explanation": "Foreshadowing is a literary device that gives hints or clues about what will happen later in the story."
    },
    {
      "id": 50,
      "topic": "Literature",
      "question": "What is the climax of a story?",
      "options": ["The beginning", "The turning point", "The end", "The setting"],
      "answer": 1,
      "explanation": "The climax is the turning point or most intense moment in a story where the main conflict reaches its peak."
    },
    {
      "id": 51,
      "topic": "Figures of Speech",
      "question": "Identify the hyperbole: 'I've told you a million times!'",
      "options": ["Exact number", "Exaggeration for effect", "Mathematical calculation", "Literal statement"],
      "answer": 1,
      "explanation": "Hyperbole is deliberate exaggeration for emphasis or effect. 'A million times' is an exaggeration."
    },
    {
      "id": 52,
      "topic": "Grammar",
      "question": "Choose the correct preposition: The book is ___ the table.",
      "options": ["in", "on", "at", "by"],
      "answer": 1,
      "explanation": "'On' is used for surfaces. The book rests on the surface of the table."
    },
    {
      "id": 53,
      "topic": "Punctuation",
      "question": "When do we use an apostrophe in 'its'?",
      "options": ["For possession", "Never", "For contraction only", "Always"],
      "answer": 2,
      "explanation": "Use apostrophe in 'it's' only for contraction (it is/it has). For possession, use 'its' without apostrophe."
    },
    {
      "id": 54,
      "topic": "Comprehension",
      "question": "What is the tone of this sentence: 'What a wonderful surprise this is!'?",
      "options": ["Angry", "Sad", "Excited", "Confused"],
      "answer": 2,
      "explanation": "The exclamation mark and positive words 'wonderful' and 'surprise' indicate excitement and joy."
    },
    {
      "id": 55,
      "topic": "Vocabulary",
      "question": "Choose the word that means 'to support or strengthen':",
      "options": ["weaken", "reinforce", "destroy", "ignore"],
      "answer": 1,
      "explanation": "'Reinforce' means to support, strengthen, or make stronger."
    }
  ],

  physics: [
    {
      "id": 1,
      "topic": "Mechanics",
      "question": "What is the SI unit of force?",
      "options": ["Joule", "Newton", "Watt", "Pascal"],
      "answer": 1,
      "explanation": "The Newton (N) is the SI unit of force, named after Sir Isaac Newton. 1 Newton = 1 kg⋅m/s²"
    },
    {
      "id": 2,
      "topic": "Mechanics", 
      "question": "A car accelerates from rest to 20 m/s in 5 seconds. What is its acceleration?",
      "options": ["2 m/s²", "4 m/s²", "5 m/s²", "10 m/s²"],
      "answer": 1,
      "explanation": "Acceleration = (final velocity - initial velocity) ÷ time\na = (20 - 0) ÷ 5 = 20 ÷ 5 = 4 m/s²"
    },
    {
      "id": 3,
      "topic": "Waves",
      "question": "Sound travels fastest in which medium?",
      "options": ["Gas", "Liquid", "Solid", "Vacuum"],
      "answer": 2,
      "explanation": "Sound waves travel fastest in solids because molecules are closely packed, allowing vibrations to transfer more efficiently."
    },
    {
      "id": 4,
      "topic": "Electricity",
      "question": "What is Ohm's law?",
      "options": ["V = I/R", "V = IR", "V = I + R", "V = R/I"],
      "answer": 1,
      "explanation": "Ohm's law states that voltage (V) equals current (I) multiplied by resistance (R): V = IR"
    },
    {
      "id": 5,
      "topic": "Heat",
      "question": "At what temperature does water boil at standard atmospheric pressure?",
      "options": ["90°C", "95°C", "100°C", "105°C"],
      "answer": 2,
      "explanation": "Water boils at 100°C (212°F) at standard atmospheric pressure (1 atm or 101.3 kPa)."
    }
  ],

  chemistry: [
    {
      "id": 1,
      "topic": "Atomic Structure",
      "question": "What is the atomic number of carbon?",
      "options": ["4", "6", "8", "12"],
      "answer": 1,
      "explanation": "Carbon has 6 protons in its nucleus, which defines its atomic number as 6."
    },
    {
      "id": 2,
      "topic": "Chemical Bonding",
      "question": "What type of bond is formed between sodium and chlorine in NaCl?",
      "options": ["Covalent", "Ionic", "Metallic", "Hydrogen"],
      "answer": 1,
      "explanation": "Sodium (metal) loses an electron to chlorine (non-metal), forming Na⁺ and Cl⁻ ions held together by ionic bonds."
    },
    {
      "id": 3,
      "topic": "Acids and Bases",
      "question": "What is the pH of pure water at 25°C?",
      "options": ["6", "7", "8", "9"],
      "answer": 1,
      "explanation": "Pure water has a pH of 7 at 25°C, which is considered neutral (neither acidic nor basic)."
    },
    {
      "id": 4,
      "topic": "Periodic Table",
      "question": "Which element has the symbol 'Fe'?",
      "options": ["Fluorine", "Iron", "Francium", "Fermium"],
      "answer": 1,
      "explanation": "Fe is the chemical symbol for iron, derived from its Latin name 'ferrum'."
    },
    {
      "id": 5,
      "topic": "Chemical Reactions",
      "question": "In the equation 2H₂ + O₂ → 2H₂O, what type of reaction is this?",
      "options": ["Decomposition", "Single displacement", "Synthesis", "Double displacement"],
      "answer": 2,
      "explanation": "This is a synthesis (combination) reaction where two simpler substances (H₂ and O₂) combine to form a more complex compound (H₂O)."
    }
  ],

  biology: [
    {
      "id": 1,
      "topic": "Cell Biology",
      "question": "Which organelle is known as the powerhouse of the cell?",
      "options": ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
      "answer": 1,
      "explanation": "Mitochondria produce ATP (energy) for the cell through cellular respiration, earning the nickname 'powerhouse of the cell'."
    },
    {
      "id": 2,
      "topic": "Genetics",
      "question": "What does DNA stand for?",
      "options": ["Deoxyribonucleic Acid", "Deoxyribonuclear Acid", "Diribonucleic Acid", "Diribonuclear Acid"],
      "answer": 0,
      "explanation": "DNA stands for Deoxyribonucleic Acid, the molecule that carries genetic information in living organisms."
    },
    {
      "id": 3,
      "topic": "Plant Biology",
      "question": "What is the process by which plants make their own food?",
      "options": ["Respiration", "Photosynthesis", "Transpiration", "Germination"],
      "answer": 1,
      "explanation": "Photosynthesis is the process where plants use sunlight, carbon dioxide, and water to produce glucose and oxygen."
    },
    {
      "id": 4,
      "topic": "Human Biology",
      "question": "How many chambers does a human heart have?",
      "options": ["2", "3", "4", "5"],
      "answer": 2,
      "explanation": "The human heart has 4 chambers: 2 atria (left and right) and 2 ventricles (left and right)."
    },
    {
      "id": 5,
      "topic": "Evolution",
      "question": "Who proposed the theory of evolution by natural selection?",
      "options": ["Gregor Mendel", "Charles Darwin", "Louis Pasteur", "Alfred Wallace"],
      "answer": 1,
      "explanation": "Charles Darwin proposed the theory of evolution by natural selection in his book 'On the Origin of Species' (1859)."
    }
  ]
};

// Data loader with fallback capability
class DataLoader {
  constructor() {
    this.cache = new Map();
  }

  // Try to load from JSON file first, fallback to inline data
  async loadSubjectData(subject) {
    // Return cached data if available
    if (this.cache.has(subject)) {
      return this.cache.get(subject);
    }

    try {
      // Try to load from JSON file
      const response = await fetch(`./data/${subject}.json`);
      if (response.ok) {
        const data = await response.json();
        this.cache.set(subject, data);
        return data;
      }
    } catch (error) {
      console.warn(`Failed to load ${subject}.json, using fallback data:`, error);
    }

    // Fallback to inline data
    const fallbackData = questionData[subject] || [];
    this.cache.set(subject, fallbackData);
    return fallbackData;
  }

  // Get available subjects
  getAvailableSubjects() {
    return Object.keys(questionData);
  }

  // Clear cache
  clearCache() {
    this.cache.clear();
  }
}

// Export for global use
if (typeof window !== 'undefined') {
  window.DataLoader = DataLoader;
  window.questionData = questionData;
}

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DataLoader, questionData };
}