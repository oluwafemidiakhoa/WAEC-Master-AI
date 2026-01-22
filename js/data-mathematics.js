// Mathematics questions data
const mathematicsQuestions = [
  {
    "id": 1,
    "topic": "Algebra",
    "question": "Simplify: 3x + 2x - x",
    "options": ["6x", "4x", "2x", "x"],
    "answer": 1,
    "explanation": "To simplify algebraic expressions with like terms, we combine coefficients of the same variable.\n\nStep 1: Identify like terms (all contain 'x')\nStep 2: Add/subtract coefficients: 3 + 2 - 1 = 4\nStep 3: Keep the variable: 4x\n\nTherefore, 3x + 2x - x = 4x"
  },
  {
    "id": 2,
    "topic": "Algebra",
    "question": "Solve for x: 2x + 5 = 17",
    "options": ["5", "6", "7", "8"],
    "answer": 1,
    "explanation": "To solve linear equations, we isolate the variable using inverse operations.\n\nGiven: 2x + 5 = 17\n\nStep 1: Subtract 5 from both sides\n2x + 5 - 5 = 17 - 5\n2x = 12\n\nStep 2: Divide both sides by 2\n2x ÷ 2 = 12 ÷ 2\nx = 6\n\nVerification: 2(6) + 5 = 12 + 5 = 17 ✓"
  },
  {
    "id": 3,
    "topic": "Geometry",
    "question": "A triangle has angles 50° and 60°. What is the third angle?",
    "options": ["60°", "70°", "80°", "90°"],
    "answer": 1,
    "explanation": "Angles in a triangle sum to 180°, so 180 - 110 = 70°."
  },
  {
    "id": 4,
    "topic": "Geometry",
    "question": "The perimeter of a square is 36 cm. What is the side length?",
    "options": ["6 cm", "8 cm", "9 cm", "12 cm"],
    "answer": 2,
    "explanation": "Perimeter = 4s, so s = 36/4 = 9 cm."
  },
  {
    "id": 5,
    "topic": "Statistics",
    "question": "Find the mean of: 4, 6, 10, 10",
    "options": ["7", "7.5", "8", "9"],
    "answer": 1,
    "explanation": "Sum = 30, divide by 4 to get 7.5."
  }
];

// Export for use in other modules
if (typeof window !== 'undefined') {
  window.mathematicsQuestions = mathematicsQuestions;
}