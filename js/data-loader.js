// WAEC Practice App - Data Loader with Fallback
// This module provides question data with fallback for CORS issues
// Updated: Mathematics: 150 questions, English: 150 questions, Physics: 150 questions, Chemistry: 150 questions, Biology: 150 questions, Economics: 150 questions, Government: 150 questions, Literature: 150 questions, Geography: 150 questions, Commerce: 150 questions, Accounting: 150 questions, Agricultural Science: 150 questions

const questionData = {
  "mathematics": [
    {
      "topic": "Algebra",
      "difficulty": "easy",
      "question": "Solve for x: 2x + 5 = 19.",
      "options": [
        "7",
        "8",
        "6",
        "9"
      ],
      "answer": 0,
      "explanation": "Rearrange to isolate x.",
      "id": 1
    },
    {
      "topic": "Algebra",
      "difficulty": "easy",
      "question": "Solve for x: 3x - 4 = 14.",
      "options": [
        "7",
        "6",
        "5",
        "8"
      ],
      "answer": 1,
      "explanation": "Rearrange to isolate x.",
      "id": 2
    },
    {
      "topic": "Algebra",
      "difficulty": "easy",
      "question": "Solve for x: 4x + 9 = 29.",
      "options": [
        "6",
        "4",
        "5",
        "7"
      ],
      "answer": 2,
      "explanation": "Rearrange to isolate x.",
      "id": 3
    },
    {
      "topic": "Algebra",
      "difficulty": "easy",
      "question": "Solve for x: 5x - 10 = 10.",
      "options": [
        "5",
        "3",
        "6",
        "4"
      ],
      "answer": 3,
      "explanation": "Rearrange to isolate x.",
      "id": 4
    },
    {
      "topic": "Algebra",
      "difficulty": "easy",
      "question": "Solve for x: 6x + 7 = 25.",
      "options": [
        "3",
        "4",
        "2",
        "5"
      ],
      "answer": 0,
      "explanation": "Rearrange to isolate x.",
      "id": 5
    },
    {
      "topic": "Algebra",
      "difficulty": "easy",
      "question": "Solve for x: 7x - 5 = 9.",
      "options": [
        "3",
        "2",
        "1",
        "4"
      ],
      "answer": 1,
      "explanation": "Rearrange to isolate x.",
      "id": 6
    },
    {
      "topic": "Algebra",
      "difficulty": "easy",
      "question": "Solve for x: 8x + 6 = 38.",
      "options": [
        "5",
        "3",
        "4",
        "6"
      ],
      "answer": 2,
      "explanation": "Rearrange to isolate x.",
      "id": 7
    },
    {
      "topic": "Algebra",
      "difficulty": "easy",
      "question": "Solve for x: 9x - 3 = 42.",
      "options": [
        "6",
        "4",
        "7",
        "5"
      ],
      "answer": 3,
      "explanation": "Rearrange to isolate x.",
      "id": 8
    },
    {
      "topic": "Algebra",
      "difficulty": "medium",
      "question": "Solve the simultaneous equations: 2x + 3y = 13 and 1x + 1y = 5.",
      "options": [
        "x = 2, y = 3",
        "x = 3, y = 2",
        "x = 3, y = 3",
        "x = 2, y = 4"
      ],
      "answer": 0,
      "explanation": "Use substitution or elimination.",
      "id": 9
    },
    {
      "topic": "Algebra",
      "difficulty": "medium",
      "question": "Solve the simultaneous equations: 3x + 1y = 13 and 2x + 1y = 9.",
      "options": [
        "x = 1, y = 4",
        "x = 4, y = 1",
        "x = 5, y = 1",
        "x = 4, y = 2"
      ],
      "answer": 1,
      "explanation": "Use substitution or elimination.",
      "id": 10
    },
    {
      "topic": "Algebra",
      "difficulty": "medium",
      "question": "Solve the simultaneous equations: 1x + 2y = 13 and 2x + 1y = 11.",
      "options": [
        "x = 5, y = 3",
        "x = 4, y = 5",
        "x = 3, y = 5",
        "x = 3, y = 6"
      ],
      "answer": 2,
      "explanation": "Use substitution or elimination.",
      "id": 11
    },
    {
      "topic": "Algebra",
      "difficulty": "medium",
      "question": "Solve the simultaneous equations: 4x + 1y = 8 and 1x + 3y = 13.",
      "options": [
        "x = 4, y = 1",
        "x = 2, y = 4",
        "x = 1, y = 5",
        "x = 1, y = 4"
      ],
      "answer": 3,
      "explanation": "Use substitution or elimination.",
      "id": 12
    },
    {
      "topic": "Algebra",
      "difficulty": "medium",
      "question": "Solve the simultaneous equations: 2x + 1y = 9 and 1x + -1y = 1.",
      "options": [
        "x = 4, y = 1",
        "x = 1, y = 4",
        "x = 5, y = 1",
        "x = 4, y = 2"
      ],
      "answer": 0,
      "explanation": "Use substitution or elimination.",
      "id": 13
    },
    {
      "topic": "Algebra",
      "difficulty": "medium",
      "question": "Solve the simultaneous equations: 3x + -1y = 8 and 1x + 2y = 7.",
      "options": [
        "x = 2, y = 3",
        "x = 3, y = 2",
        "x = 4, y = 2",
        "x = 3, y = 3"
      ],
      "answer": 1,
      "explanation": "Use substitution or elimination.",
      "id": 14
    },
    {
      "topic": "Algebra",
      "difficulty": "medium",
      "question": "Solve for x: x^2 - 5x + 6 = 0.",
      "options": [
        "x = 2 or 4",
        "x = 3 or 3",
        "x = 2 or 3",
        "x = 1 or 2"
      ],
      "answer": 2,
      "explanation": "Factorize or use the sum and product of roots.",
      "id": 15
    },
    {
      "topic": "Algebra",
      "difficulty": "medium",
      "question": "Solve for x: x^2 - 7x + 6 = 0.",
      "options": [
        "x = 1 or 7",
        "x = 2 or 6",
        "x = 0 or 5",
        "x = 1 or 6"
      ],
      "answer": 3,
      "explanation": "Factorize or use the sum and product of roots.",
      "id": 16
    },
    {
      "topic": "Algebra",
      "difficulty": "medium",
      "question": "Solve for x: x^2 - 7x + 10 = 0.",
      "options": [
        "x = 2 or 5",
        "x = 2 or 6",
        "x = 3 or 5",
        "x = 1 or 4"
      ],
      "answer": 0,
      "explanation": "Factorize or use the sum and product of roots.",
      "id": 17
    },
    {
      "topic": "Algebra",
      "difficulty": "medium",
      "question": "Solve for x: x^2 - 7x + 12 = 0.",
      "options": [
        "x = 3 or 5",
        "x = 3 or 4",
        "x = 4 or 4",
        "x = 2 or 3"
      ],
      "answer": 1,
      "explanation": "Factorize or use the sum and product of roots.",
      "id": 18
    },
    {
      "topic": "Algebra",
      "difficulty": "medium",
      "question": "Solve for x: x^2 - 9x + 20 = 0.",
      "options": [
        "x = 4 or 6",
        "x = 5 or 5",
        "x = 4 or 5",
        "x = 3 or 4"
      ],
      "answer": 2,
      "explanation": "Factorize or use the sum and product of roots.",
      "id": 19
    },
    {
      "topic": "Algebra",
      "difficulty": "medium",
      "question": "Solve for x: x^2 - 6x + 5 = 0.",
      "options": [
        "x = 1 or 6",
        "x = 2 or 5",
        "x = 0 or 4",
        "x = 1 or 5"
      ],
      "answer": 3,
      "explanation": "Factorize or use the sum and product of roots.",
      "id": 20
    },
    {
      "topic": "Algebra",
      "difficulty": "medium",
      "question": "Solve for x: x^2 - 6x + 8 = 0.",
      "options": [
        "x = 2 or 4",
        "x = 2 or 5",
        "x = 3 or 4",
        "x = 1 or 3"
      ],
      "answer": 0,
      "explanation": "Factorize or use the sum and product of roots.",
      "id": 21
    },
    {
      "topic": "Algebra",
      "difficulty": "medium",
      "question": "Solve for x: x^2 - 9x + 18 = 0.",
      "options": [
        "x = 3 or 7",
        "x = 3 or 6",
        "x = 4 or 6",
        "x = 2 or 5"
      ],
      "answer": 1,
      "explanation": "Factorize or use the sum and product of roots.",
      "id": 22
    },
    {
      "topic": "Indices",
      "difficulty": "easy",
      "question": "Evaluate: 2^3 x 2^4 / 2^2.",
      "options": [
        "16",
        "64",
        "32",
        "34"
      ],
      "answer": 2,
      "explanation": "Use laws of indices.",
      "id": 23
    },
    {
      "topic": "Indices",
      "difficulty": "easy",
      "question": "Evaluate: 3^2 x 3^3 / 3^1.",
      "options": [
        "27",
        "243",
        "84",
        "81"
      ],
      "answer": 3,
      "explanation": "Use laws of indices.",
      "id": 24
    },
    {
      "topic": "Indices",
      "difficulty": "easy",
      "question": "Evaluate: 5^2 x 5^1 / 5^0.",
      "options": [
        "125",
        "25",
        "625",
        "130"
      ],
      "answer": 0,
      "explanation": "Use laws of indices.",
      "id": 25
    },
    {
      "topic": "Indices",
      "difficulty": "easy",
      "question": "Evaluate: 2^5 x 2^1 / 2^3.",
      "options": [
        "4",
        "8",
        "16",
        "10"
      ],
      "answer": 1,
      "explanation": "Use laws of indices.",
      "id": 26
    },
    {
      "topic": "Logarithms",
      "difficulty": "easy",
      "question": "Find log10(1000).",
      "options": [
        "2",
        "4",
        "3",
        "5"
      ],
      "answer": 2,
      "explanation": "Write the number as a power of 10.",
      "id": 27
    },
    {
      "topic": "Logarithms",
      "difficulty": "easy",
      "question": "Find log10(0.001).",
      "options": [
        "-4",
        "-2",
        "-1",
        "-3"
      ],
      "answer": 3,
      "explanation": "Write the number as a power of 10.",
      "id": 28
    },
    {
      "topic": "Logarithms",
      "difficulty": "easy",
      "question": "Find log10(1).",
      "options": [
        "0",
        "-1",
        "1",
        "2"
      ],
      "answer": 0,
      "explanation": "Write the number as a power of 10.",
      "id": 29
    },
    {
      "topic": "Logarithms",
      "difficulty": "easy",
      "question": "Find log10(100).",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "answer": 1,
      "explanation": "Write the number as a power of 10.",
      "id": 30
    },
    {
      "topic": "Surds",
      "difficulty": "hard",
      "question": "Simplify sqrt(50).",
      "options": [
        "10 sqrt(2)",
        "2 sqrt(5)",
        "5 sqrt(2)",
        "25"
      ],
      "answer": 2,
      "explanation": "sqrt(50)=sqrt(25x2)=5sqrt(2).",
      "id": 31
    },
    {
      "topic": "Surds",
      "difficulty": "hard",
      "question": "Simplify sqrt(12) + sqrt(27).",
      "options": [
        "3 sqrt(3)",
        "sqrt(39)",
        "9 sqrt(3)",
        "5 sqrt(3)"
      ],
      "answer": 3,
      "explanation": "sqrt(12)=2sqrt(3), sqrt(27)=3sqrt(3).",
      "id": 32
    },
    {
      "topic": "Surds",
      "difficulty": "hard",
      "question": "Rationalize 1/(sqrt(3) + sqrt(2)).",
      "options": [
        "sqrt(3) - sqrt(2)",
        "sqrt(3) + sqrt(2)",
        "1/(sqrt(3) - sqrt(2))",
        "(sqrt(3) - sqrt(2))/5"
      ],
      "answer": 0,
      "explanation": "Multiply by the conjugate.",
      "id": 33
    },
    {
      "topic": "Surds",
      "difficulty": "hard",
      "question": "Simplify sqrt(75).",
      "options": [
        "25 sqrt(3)",
        "5 sqrt(3)",
        "3 sqrt(5)",
        "15"
      ],
      "answer": 1,
      "explanation": "sqrt(75)=sqrt(25x3)=5sqrt(3).",
      "id": 34
    },
    {
      "topic": "Surds",
      "difficulty": "hard",
      "question": "Rationalize 1/(2 + sqrt(5)).",
      "options": [
        "sqrt(5) + 2",
        "1/(sqrt(5) - 2)",
        "sqrt(5) - 2",
        "(sqrt(5) - 2)/3"
      ],
      "answer": 2,
      "explanation": "Multiply by the conjugate; denominator becomes 1.",
      "id": 35
    },
    {
      "topic": "Surds",
      "difficulty": "hard",
      "question": "Simplify sqrt(18).",
      "options": [
        "6 sqrt(2)",
        "2 sqrt(3)",
        "9",
        "3 sqrt(2)"
      ],
      "answer": 3,
      "explanation": "sqrt(18)=sqrt(9x2)=3sqrt(2).",
      "id": 36
    },
    {
      "topic": "Sequences",
      "difficulty": "medium",
      "question": "Find the 7th term of the arithmetic progression 5, 8, 11, ...",
      "options": [
        "23",
        "20",
        "26",
        "29"
      ],
      "answer": 0,
      "explanation": "Use an = a + (n-1)d.",
      "id": 37
    },
    {
      "topic": "Sequences",
      "difficulty": "medium",
      "question": "Find the 10th term of the arithmetic progression 2, 6, 10, ...",
      "options": [
        "34",
        "38",
        "42",
        "46"
      ],
      "answer": 1,
      "explanation": "Use an = a + (n-1)d.",
      "id": 38
    },
    {
      "topic": "Sequences",
      "difficulty": "medium",
      "question": "Find the 6th term of the arithmetic progression 1, 6, 11, ...",
      "options": [
        "21",
        "31",
        "26",
        "36"
      ],
      "answer": 2,
      "explanation": "Use an = a + (n-1)d.",
      "id": 39
    },
    {
      "topic": "Sequences",
      "difficulty": "medium",
      "question": "Find the 8th term of the arithmetic progression 7, 9, 11, ...",
      "options": [
        "19",
        "23",
        "25",
        "21"
      ],
      "answer": 3,
      "explanation": "Use an = a + (n-1)d.",
      "id": 40
    },
    {
      "topic": "Sequences",
      "difficulty": "medium",
      "question": "Find the 6th term of the geometric progression 3, 6, 12, ...",
      "options": [
        "96",
        "48",
        "192",
        "98"
      ],
      "answer": 0,
      "explanation": "Use an = a r^(n-1).",
      "id": 41
    },
    {
      "topic": "Sequences",
      "difficulty": "medium",
      "question": "Find the 5th term of the geometric progression 2, 6, 18, ...",
      "options": [
        "54",
        "162",
        "486",
        "165"
      ],
      "answer": 1,
      "explanation": "Use an = a r^(n-1).",
      "id": 42
    },
    {
      "topic": "Sequences",
      "difficulty": "medium",
      "question": "Find the 5th term of the geometric progression 4, 8, 16, ...",
      "options": [
        "32",
        "128",
        "64",
        "66"
      ],
      "answer": 2,
      "explanation": "Use an = a r^(n-1).",
      "id": 43
    },
    {
      "topic": "Sequences",
      "difficulty": "medium",
      "question": "Find the 4th term of the geometric progression 5, 15, 45, ...",
      "options": [
        "45",
        "405",
        "138",
        "135"
      ],
      "answer": 3,
      "explanation": "Use an = a r^(n-1).",
      "id": 44
    },
    {
      "topic": "Variation",
      "difficulty": "medium",
      "question": "y varies directly as x. If y = 10 when x = 2, find y when x = 7.",
      "options": [
        "35",
        "28",
        "30",
        "40"
      ],
      "answer": 0,
      "explanation": "y = kx, k = 5.",
      "id": 45
    },
    {
      "topic": "Variation",
      "difficulty": "medium",
      "question": "y varies inversely as x. If y = 4 when x = 5, find y when x = 20.",
      "options": [
        "0.5",
        "1",
        "2",
        "4"
      ],
      "answer": 1,
      "explanation": "y = k/x, k = 20.",
      "id": 46
    },
    {
      "topic": "Variation",
      "difficulty": "hard",
      "question": "y varies as x^2. If y = 18 when x = 3, find y when x = 5.",
      "options": [
        "30",
        "45",
        "50",
        "54"
      ],
      "answer": 2,
      "explanation": "y = kx^2, k = 2.",
      "id": 47
    },
    {
      "topic": "Variation",
      "difficulty": "medium",
      "question": "y varies directly as x and y = 24 when x = 6. Find x when y = 36.",
      "options": [
        "8",
        "10",
        "12",
        "9"
      ],
      "answer": 3,
      "explanation": "k = 4, so x = y/4.",
      "id": 48
    },
    {
      "topic": "Variation",
      "difficulty": "medium",
      "question": "y varies inversely as x. If y = 12 when x = 3, find y when x = 9.",
      "options": [
        "4",
        "3",
        "6",
        "9"
      ],
      "answer": 0,
      "explanation": "k = 36, so y = 36/9.",
      "id": 49
    },
    {
      "topic": "Variation",
      "difficulty": "hard",
      "question": "y varies as x^3. If y = 27 when x = 3, find y when x = 2.",
      "options": [
        "6",
        "8",
        "9",
        "12"
      ],
      "answer": 1,
      "explanation": "k = 1, so y = 2^3.",
      "id": 50
    },
    {
      "topic": "Trigonometry",
      "difficulty": "easy",
      "question": "Find sin 30 deg.",
      "options": [
        "sqrt(3)/2",
        "1",
        "1/2",
        "0"
      ],
      "answer": 2,
      "explanation": "sin 30 deg = 1/2.",
      "id": 51
    },
    {
      "topic": "Trigonometry",
      "difficulty": "easy",
      "question": "Find cos 60 deg.",
      "options": [
        "sqrt(3)/2",
        "1",
        "0",
        "1/2"
      ],
      "answer": 3,
      "explanation": "cos 60 deg = 1/2.",
      "id": 52
    },
    {
      "topic": "Trigonometry",
      "difficulty": "medium",
      "question": "Solve sin theta = 1/2 for 0 deg <= theta <= 180 deg.",
      "options": [
        "30 deg or 150 deg",
        "30 deg only",
        "60 deg or 120 deg",
        "90 deg only"
      ],
      "answer": 0,
      "explanation": "Sine is positive in QI and QII.",
      "id": 53
    },
    {
      "topic": "Trigonometry",
      "difficulty": "medium",
      "question": "If tan theta = 3/4 and theta is acute, find sin theta.",
      "options": [
        "4/5",
        "3/5",
        "5/3",
        "3/4"
      ],
      "answer": 1,
      "explanation": "Use a 3-4-5 triangle.",
      "id": 54
    },
    {
      "topic": "Trigonometry",
      "difficulty": "medium",
      "question": "Find tan 45 deg.",
      "options": [
        "0",
        "sqrt(3)",
        "1",
        "1/2"
      ],
      "answer": 2,
      "explanation": "tan 45 deg = 1.",
      "id": 55
    },
    {
      "topic": "Trigonometry",
      "difficulty": "medium",
      "question": "Find cos 30 deg.",
      "options": [
        "1/2",
        "1",
        "0",
        "sqrt(3)/2"
      ],
      "answer": 3,
      "explanation": "cos 30 deg = sqrt(3)/2.",
      "id": 56
    },
    {
      "topic": "Trigonometry",
      "difficulty": "hard",
      "question": "A right triangle has opposite side 6 cm and hypotenuse 10 cm. Find sin theta.",
      "options": [
        "3/5",
        "4/5",
        "2/5",
        "5/3"
      ],
      "answer": 0,
      "explanation": "sin = opposite/hypotenuse = 6/10.",
      "id": 57
    },
    {
      "topic": "Trigonometry",
      "difficulty": "hard",
      "question": "Find theta if cos theta = 0.5 and 0 deg <= theta <= 180 deg.",
      "options": [
        "30 deg",
        "60 deg",
        "90 deg",
        "120 deg"
      ],
      "answer": 1,
      "explanation": "cos 60 deg = 1/2.",
      "id": 58
    },
    {
      "topic": "Trigonometry",
      "difficulty": "medium",
      "question": "Find the value of sin^2 30 deg + cos^2 30 deg.",
      "options": [
        "0",
        "1/2",
        "1",
        "2"
      ],
      "answer": 2,
      "explanation": "Use the identity sin^2 + cos^2 = 1.",
      "id": 59
    },
    {
      "topic": "Trigonometry",
      "difficulty": "medium",
      "question": "If tan theta = 1, theta equals ___.",
      "options": [
        "30 deg",
        "60 deg",
        "90 deg",
        "45 deg"
      ],
      "answer": 3,
      "explanation": "tan 45 deg = 1.",
      "id": 60
    },
    {
      "topic": "Geometry",
      "difficulty": "easy",
      "question": "Angles in a triangle add up to ___.",
      "options": [
        "180 deg",
        "90 deg",
        "270 deg",
        "360 deg"
      ],
      "answer": 0,
      "explanation": "Sum of angles in a triangle is 180 deg.",
      "id": 61
    },
    {
      "topic": "Geometry",
      "difficulty": "easy",
      "question": "Angles on a straight line add up to ___. ",
      "options": [
        "180 deg",
        "90 deg",
        "360 deg",
        "120 deg"
      ],
      "answer": 0,
      "explanation": "Angles on a straight line sum to 180 deg.",
      "id": 62
    },
    {
      "topic": "Geometry",
      "difficulty": "medium",
      "question": "A right triangle has legs 6 cm and 8 cm. Find the hypotenuse.",
      "options": [
        "12 cm",
        "14 cm",
        "10 cm",
        "16 cm"
      ],
      "answer": 2,
      "explanation": "Use Pythagoras: sqrt(36+64)=10.",
      "id": 63
    },
    {
      "topic": "Geometry",
      "difficulty": "medium",
      "question": "Two similar triangles have side ratio 3:5. The area ratio is ___.",
      "options": [
        "3:5",
        "5:3",
        "25:9",
        "9:25"
      ],
      "answer": 3,
      "explanation": "Area ratio is square of side ratio.",
      "id": 64
    },
    {
      "topic": "Geometry",
      "difficulty": "medium",
      "question": "The sum of exterior angles of a polygon is ___.",
      "options": [
        "360 deg",
        "180 deg",
        "540 deg",
        "720 deg"
      ],
      "answer": 0,
      "explanation": "Sum of exterior angles is 360 deg.",
      "id": 65
    },
    {
      "topic": "Geometry",
      "difficulty": "hard",
      "question": "A chord 5 cm from the center of a circle is 12 cm long. Find the radius.",
      "options": [
        "11 cm",
        "13 cm",
        "14 cm",
        "15 cm"
      ],
      "answer": 1,
      "explanation": "Radius is hypotenuse of 5-12-13 triangle.",
      "id": 66
    },
    {
      "topic": "Geometry",
      "difficulty": "medium",
      "question": "Find the interior angle of a regular hexagon.",
      "options": [
        "90 deg",
        "135 deg",
        "120 deg",
        "150 deg"
      ],
      "answer": 2,
      "explanation": "Interior angle = (n-2)180/n.",
      "id": 67
    },
    {
      "topic": "Geometry",
      "difficulty": "medium",
      "question": "If two angles are complementary and one is 35 deg, the other is ___.",
      "options": [
        "65 deg",
        "45 deg",
        "75 deg",
        "55 deg"
      ],
      "answer": 3,
      "explanation": "Complementary angles sum to 90 deg.",
      "id": 68
    },
    {
      "topic": "Mensuration",
      "difficulty": "medium",
      "question": "Find the volume of a cylinder of radius 7 cm and height 10 cm (pi = 22/7).",
      "options": [
        "1540 cm^3",
        "770 cm^3",
        "2200 cm^3",
        "3080 cm^3"
      ],
      "answer": 0,
      "explanation": "V = pi r^2 h.",
      "id": 69
    },
    {
      "topic": "Mensuration",
      "difficulty": "medium",
      "question": "Find the volume of a cone of radius 3 cm and height 12 cm (in terms of pi).",
      "options": [
        "18 pi cm^3",
        "36 pi cm^3",
        "48 pi cm^3",
        "108 pi cm^3"
      ],
      "answer": 1,
      "explanation": "V = (1/3) pi r^2 h.",
      "id": 70
    },
    {
      "topic": "Mensuration",
      "difficulty": "medium",
      "question": "Find the surface area of a sphere of radius 7 cm (pi = 22/7).",
      "options": [
        "308 cm^2",
        "924 cm^2",
        "616 cm^2",
        "1232 cm^2"
      ],
      "answer": 2,
      "explanation": "Surface area = 4 pi r^2.",
      "id": 71
    },
    {
      "topic": "Mensuration",
      "difficulty": "medium",
      "question": "A triangle has base 12 cm and height 9 cm. Find its area.",
      "options": [
        "108 cm^2",
        "36 cm^2",
        "60 cm^2",
        "54 cm^2"
      ],
      "answer": 3,
      "explanation": "Area = 1/2 x base x height.",
      "id": 72
    },
    {
      "topic": "Mensuration",
      "difficulty": "medium",
      "question": "Find the total surface area of a cube of side 5 cm.",
      "options": [
        "150 cm^2",
        "125 cm^2",
        "100 cm^2",
        "175 cm^2"
      ],
      "answer": 0,
      "explanation": "Total surface area = 6a^2.",
      "id": 73
    },
    {
      "topic": "Mensuration",
      "difficulty": "easy",
      "question": "Area of a rectangle of length 8 cm and width 5 cm is ___.",
      "options": [
        "13 cm^2",
        "40 cm^2",
        "26 cm^2",
        "80 cm^2"
      ],
      "answer": 1,
      "explanation": "Area = length x width.",
      "id": 74
    },
    {
      "topic": "Mensuration",
      "difficulty": "medium",
      "question": "Volume of a cube of side 6 cm is ___.",
      "options": [
        "36 cm^3",
        "72 cm^3",
        "216 cm^3",
        "180 cm^3"
      ],
      "answer": 2,
      "explanation": "Volume = a^3.",
      "id": 75
    },
    {
      "topic": "Mensuration",
      "difficulty": "medium",
      "question": "Circumference of a circle of radius 14 cm (pi = 22/7) is ___.",
      "options": [
        "44 cm",
        "132 cm",
        "154 cm",
        "88 cm"
      ],
      "answer": 3,
      "explanation": "C = 2 pi r.",
      "id": 76
    },
    {
      "topic": "Coordinate Geometry",
      "difficulty": "easy",
      "question": "Find the gradient of the line through (2,1) and (6,5).",
      "options": [
        "1",
        "1/2",
        "2",
        "4"
      ],
      "answer": 0,
      "explanation": "Gradient = (5-1)/(6-2).",
      "id": 77
    },
    {
      "topic": "Coordinate Geometry",
      "difficulty": "easy",
      "question": "Find the midpoint of (2,4) and (8,10).",
      "options": [
        "(4,6)",
        "(5,7)",
        "(6,8)",
        "(10,14)"
      ],
      "answer": 1,
      "explanation": "Midpoint = ((2+8)/2, (4+10)/2).",
      "id": 78
    },
    {
      "topic": "Coordinate Geometry",
      "difficulty": "medium",
      "question": "Find the distance between (0,0) and (6,8).",
      "options": [
        "12",
        "14",
        "10",
        "8"
      ],
      "answer": 2,
      "explanation": "Distance = sqrt(6^2 + 8^2).",
      "id": 79
    },
    {
      "topic": "Coordinate Geometry",
      "difficulty": "medium",
      "question": "Find the equation of the line through (1,2) with slope -2.",
      "options": [
        "y = 2x + 1",
        "y = -2x - 4",
        "y = 2x - 4",
        "y = -2x + 4"
      ],
      "answer": 3,
      "explanation": "Use y - y1 = m(x - x1).",
      "id": 80
    },
    {
      "topic": "Coordinate Geometry",
      "difficulty": "medium",
      "question": "The line 3x + 2y = 12 cuts the y-axis at ___.",
      "options": [
        "(0,6)",
        "(6,0)",
        "(0,4)",
        "(2,0)"
      ],
      "answer": 0,
      "explanation": "Set x = 0.",
      "id": 81
    },
    {
      "topic": "Coordinate Geometry",
      "difficulty": "hard",
      "question": "Find the equation of the line parallel to y = 3x + 1 through (0, -2).",
      "options": [
        "y = -3x - 2",
        "y = 3x - 2",
        "y = 3x + 2",
        "y = -3x + 2"
      ],
      "answer": 1,
      "explanation": "Parallel lines have the same slope.",
      "id": 82
    },
    {
      "topic": "Statistics",
      "difficulty": "easy",
      "question": "Find the mean of 3, 5, 7, 9, 11.",
      "options": [
        "6",
        "8",
        "7",
        "9"
      ],
      "answer": 2,
      "explanation": "Mean = sum/number.",
      "id": 83
    },
    {
      "topic": "Statistics",
      "difficulty": "easy",
      "question": "Find the median of 2, 4, 6, 8, 10, 12.",
      "options": [
        "6",
        "8",
        "9",
        "7"
      ],
      "answer": 3,
      "explanation": "Median is average of middle two values.",
      "id": 84
    },
    {
      "topic": "Statistics",
      "difficulty": "easy",
      "question": "The mode of 2, 3, 3, 5, 6 is ___.",
      "options": [
        "3",
        "2",
        "5",
        "6"
      ],
      "answer": 0,
      "explanation": "Mode is the most frequent value.",
      "id": 85
    },
    {
      "topic": "Probability",
      "difficulty": "easy",
      "question": "A fair die is rolled. What is the probability of getting a prime number?",
      "options": [
        "1/3",
        "1/2",
        "2/3",
        "1/6"
      ],
      "answer": 1,
      "explanation": "Primes on a die are 2, 3, 5.",
      "id": 86
    },
    {
      "topic": "Probability",
      "difficulty": "easy",
      "question": "A bag has 4 red and 6 blue balls. Probability of picking red is ___.",
      "options": [
        "1/2",
        "3/5",
        "2/5",
        "4/5"
      ],
      "answer": 2,
      "explanation": "Probability = 4/10.",
      "id": 87
    },
    {
      "topic": "Probability",
      "difficulty": "medium",
      "question": "Two coins are tossed. Probability of exactly one head is ___.",
      "options": [
        "1/4",
        "3/4",
        "1",
        "1/2"
      ],
      "answer": 3,
      "explanation": "HT or TH = 2 out of 4.",
      "id": 88
    },
    {
      "topic": "Matrices",
      "difficulty": "medium",
      "question": "Find the determinant of [[2,1],[3,4]].",
      "options": [
        "5",
        "7",
        "8",
        "11"
      ],
      "answer": 0,
      "explanation": "Determinant = 2x4 - 1x3.",
      "id": 89
    },
    {
      "topic": "Matrices",
      "difficulty": "medium",
      "question": "If A = [[1,2],[3,4]] and B = [[2,1],[0,1]], find A + B.",
      "options": [
        "[[3,2],[3,5]]",
        "[[3,3],[3,5]]",
        "[[2,3],[3,4]]",
        "[[1,3],[3,5]]"
      ],
      "answer": 1,
      "explanation": "Add corresponding elements.",
      "id": 90
    },
    {
      "topic": "Matrices",
      "difficulty": "hard",
      "question": "Find the inverse of [[1,2],[0,1]].",
      "options": [
        "[[1,2],[0,1]]",
        "[[1,0],[-2,1]]",
        "[[1,-2],[0,1]]",
        "[[-1,2],[0,1]]"
      ],
      "answer": 2,
      "explanation": "For upper triangular matrix, inverse has -2 above diagonal.",
      "id": 91
    },
    {
      "topic": "Matrices",
      "difficulty": "medium",
      "question": "If A = [[2,0],[1,3]], find 2A.",
      "options": [
        "[[2,0],[1,3]]",
        "[[4,2],[0,6]]",
        "[[1,0],[2,3]]",
        "[[4,0],[2,6]]"
      ],
      "answer": 3,
      "explanation": "Multiply each entry by 2.",
      "id": 92
    },
    {
      "topic": "Vectors",
      "difficulty": "medium",
      "question": "If a = 2i + 3j and b = -i + 4j, find a + b.",
      "options": [
        "i + 7j",
        "3i + 7j",
        "i + j",
        "i + 4j"
      ],
      "answer": 0,
      "explanation": "Add components.",
      "id": 93
    },
    {
      "topic": "Bearings",
      "difficulty": "hard",
      "question": "The bearing of B from A is 060 deg. Find the bearing of A from B.",
      "options": [
        "120 deg",
        "240 deg",
        "300 deg",
        "060 deg"
      ],
      "answer": 1,
      "explanation": "Reverse bearing differs by 180 deg.",
      "id": 94
    },
    {
      "topic": "Number Bases",
      "difficulty": "medium",
      "question": "Convert 110101_2 to base 10.",
      "options": [
        "45",
        "57",
        "53",
        "61"
      ],
      "answer": 2,
      "explanation": "Sum the place values.",
      "id": 95
    },
    {
      "topic": "Number Bases",
      "difficulty": "medium",
      "question": "Convert 25_10 to base 5.",
      "options": [
        "50_5",
        "101_5",
        "110_5",
        "100_5"
      ],
      "answer": 3,
      "explanation": "25 = 5^2.",
      "id": 96
    },
    {
      "topic": "Sets",
      "difficulty": "medium",
      "question": "If n(A)=28, n(B)=20, n(A and B)=8, find n(A or B).",
      "options": [
        "40",
        "36",
        "48",
        "50"
      ],
      "answer": 0,
      "explanation": "n(A or B)=n(A)+n(B)-n(A and B).",
      "id": 97
    },
    {
      "topic": "Sets",
      "difficulty": "medium",
      "question": "If U = {1,2,3,4,5}, A = {1,3,5}, then A' is ___.",
      "options": [
        "{1,3,5}",
        "{2,4}",
        "{1,2,3}",
        "{4,5}"
      ],
      "answer": 1,
      "explanation": "Complement contains elements not in A.",
      "id": 98
    },
    {
      "topic": "Inequalities",
      "difficulty": "medium",
      "question": "Solve the inequality 2x - 5 <= 9.",
      "options": [
        "x < 7",
        "x >= 7",
        "x <= 7",
        "x > 7"
      ],
      "answer": 2,
      "explanation": "2x <= 14.",
      "id": 99
    },
    {
      "topic": "Linear Programming",
      "difficulty": "hard",
      "question": "Maximize P = 3x + 2y subject to x + y <= 6, x <= 4, y <= 5, x,y >= 0. What is the maximum value of P?",
      "options": [
        "12",
        "13",
        "18",
        "16"
      ],
      "answer": 3,
      "explanation": "Check vertices: (4,2) gives 16.",
      "id": 100
    },
    {
      "topic": "Commercial Arithmetic",
      "difficulty": "easy",
      "question": "Find 12% of 250.",
      "options": [
        "30",
        "25",
        "32",
        "28"
      ],
      "answer": 0,
      "explanation": "12% of 250 = 0.12 x 250.",
      "id": 101
    },
    {
      "topic": "Commercial Arithmetic",
      "difficulty": "easy",
      "question": "Increase 200 by 15%.",
      "options": [
        "215",
        "230",
        "220",
        "250"
      ],
      "answer": 1,
      "explanation": "15% of 200 is 30.",
      "id": 102
    },
    {
      "topic": "Commercial Arithmetic",
      "difficulty": "easy",
      "question": "Decrease 500 by 20%.",
      "options": [
        "450",
        "420",
        "400",
        "350"
      ],
      "answer": 2,
      "explanation": "20% of 500 is 100.",
      "id": 103
    },
    {
      "topic": "Commercial Arithmetic",
      "difficulty": "medium",
      "question": "Simple interest on 1200 at 5% for 3 years is ___.",
      "options": [
        "150",
        "200",
        "240",
        "180"
      ],
      "answer": 3,
      "explanation": "SI = PRT/100.",
      "id": 104
    },
    {
      "topic": "Commercial Arithmetic",
      "difficulty": "medium",
      "question": "A profit of 20% on 800 gives a selling price of ___.",
      "options": [
        "960",
        "900",
        "1000",
        "820"
      ],
      "answer": 0,
      "explanation": "SP = cost + profit.",
      "id": 105
    },
    {
      "topic": "Commercial Arithmetic",
      "difficulty": "easy",
      "question": "A 10% discount on 1500 gives a selling price of ___.",
      "options": [
        "1400",
        "1350",
        "1450",
        "1200"
      ],
      "answer": 1,
      "explanation": "Discount = 10% of 1500.",
      "id": 106
    },
    {
      "topic": "Commercial Arithmetic",
      "difficulty": "medium",
      "question": "Divide 360 in the ratio 2:3. Find the larger share.",
      "options": [
        "144",
        "180",
        "216",
        "240"
      ],
      "answer": 2,
      "explanation": "Total parts = 5.",
      "id": 107
    },
    {
      "topic": "Commercial Arithmetic",
      "difficulty": "medium",
      "question": "If 3:5 = x:40, find x.",
      "options": [
        "20",
        "25",
        "30",
        "24"
      ],
      "answer": 3,
      "explanation": "Use proportion.",
      "id": 108
    },
    {
      "topic": "Commercial Arithmetic",
      "difficulty": "medium",
      "question": "If 4 workers finish a job in 6 days, 6 workers finish in ___ days.",
      "options": [
        "4",
        "3",
        "5",
        "6"
      ],
      "answer": 0,
      "explanation": "Work is constant.",
      "id": 109
    },
    {
      "topic": "Commercial Arithmetic",
      "difficulty": "easy",
      "question": "If $1 = NGN 800, the cost of $15 is ___.",
      "options": [
        "10000",
        "12000",
        "14000",
        "15000"
      ],
      "answer": 1,
      "explanation": "Multiply by exchange rate.",
      "id": 110
    },
    {
      "topic": "Linear Graphs",
      "difficulty": "easy",
      "question": "If y = 2x + 3, find y when x = 5.",
      "options": [
        "10",
        "8",
        "13",
        "15"
      ],
      "answer": 2,
      "explanation": "Substitute x into the equation.",
      "id": 111
    },
    {
      "topic": "Linear Graphs",
      "difficulty": "medium",
      "question": "If y = 3x - 4 and y = 11, find x.",
      "options": [
        "3",
        "4",
        "7",
        "5"
      ],
      "answer": 3,
      "explanation": "Solve 11 = 3x - 4.",
      "id": 112
    },
    {
      "topic": "Linear Graphs",
      "difficulty": "easy",
      "question": "Find the x-intercept of 2x + y = 6.",
      "options": [
        "3",
        "2",
        "6",
        "1"
      ],
      "answer": 0,
      "explanation": "Set y = 0.",
      "id": 113
    },
    {
      "topic": "Linear Graphs",
      "difficulty": "easy",
      "question": "Find the y-intercept of 3x + 2y = 12.",
      "options": [
        "4",
        "6",
        "3",
        "12"
      ],
      "answer": 1,
      "explanation": "Set x = 0.",
      "id": 114
    },
    {
      "topic": "Linear Graphs",
      "difficulty": "easy",
      "question": "The gradient of the line y = -3x + 1 is ___.",
      "options": [
        "3",
        "-1",
        "-3",
        "1"
      ],
      "answer": 2,
      "explanation": "Slope is the coefficient of x.",
      "id": 115
    },
    {
      "topic": "Linear Graphs",
      "difficulty": "medium",
      "question": "Find the equation of a line parallel to y = 2x - 5 passing through (0,2).",
      "options": [
        "y = -2x + 2",
        "y = 2x - 2",
        "y = -2x - 2",
        "y = 2x + 2"
      ],
      "answer": 3,
      "explanation": "Parallel lines have same slope.",
      "id": 116
    },
    {
      "topic": "Linear Graphs",
      "difficulty": "medium",
      "question": "A line perpendicular to y = x + 1 and through the origin is ___.",
      "options": [
        "y = -x",
        "y = x",
        "y = -x + 1",
        "x = 1"
      ],
      "answer": 0,
      "explanation": "Perpendicular slope is -1.",
      "id": 117
    },
    {
      "topic": "Linear Graphs",
      "difficulty": "easy",
      "question": "For y = x^2, find x when y = 25 (x > 0).",
      "options": [
        "4",
        "5",
        "6",
        "-5"
      ],
      "answer": 1,
      "explanation": "Square root of 25 is 5.",
      "id": 118
    },
    {
      "topic": "Linear Graphs",
      "difficulty": "medium",
      "question": "Find the gradient of the line through (1,2) and (4,8).",
      "options": [
        "1",
        "3",
        "2",
        "4"
      ],
      "answer": 2,
      "explanation": "Slope = (8-2)/(4-1).",
      "id": 119
    },
    {
      "topic": "Linear Graphs",
      "difficulty": "easy",
      "question": "The slope of a horizontal line is ___.",
      "options": [
        "1",
        "undefined",
        "-1",
        "0"
      ],
      "answer": 3,
      "explanation": "Horizontal lines have zero slope.",
      "id": 120
    },
    {
      "topic": "Circle Geometry",
      "difficulty": "easy",
      "question": "An angle in a semicircle is ___.",
      "options": [
        "90 deg",
        "45 deg",
        "60 deg",
        "120 deg"
      ],
      "answer": 0,
      "explanation": "Angle in a semicircle is right.",
      "id": 121
    },
    {
      "topic": "Circle Geometry",
      "difficulty": "medium",
      "question": "Opposite angles in a cyclic quadrilateral sum to ___.",
      "options": [
        "90 deg",
        "180 deg",
        "360 deg",
        "120 deg"
      ],
      "answer": 1,
      "explanation": "Cyclic quadrilateral property.",
      "id": 122
    },
    {
      "topic": "Circle Geometry",
      "difficulty": "easy",
      "question": "The angle between a tangent and radius at the point of contact is ___.",
      "options": [
        "60 deg",
        "120 deg",
        "90 deg",
        "180 deg"
      ],
      "answer": 2,
      "explanation": "Radius is perpendicular to tangent.",
      "id": 123
    },
    {
      "topic": "Circle Geometry",
      "difficulty": "easy",
      "question": "An angle at the center is ___ the angle at the circumference on the same arc.",
      "options": [
        "half",
        "equal to",
        "three times",
        "twice"
      ],
      "answer": 3,
      "explanation": "Center angle is double.",
      "id": 124
    },
    {
      "topic": "Circle Geometry",
      "difficulty": "medium",
      "question": "Equal chords of a circle are ___ from the center.",
      "options": [
        "equidistant",
        "parallel",
        "tangent",
        "unequal"
      ],
      "answer": 0,
      "explanation": "Equal chords have same distance.",
      "id": 125
    },
    {
      "topic": "Circle Geometry",
      "difficulty": "medium",
      "question": "If an arc subtends 40 deg at the center, the angle at the circumference is ___.",
      "options": [
        "40 deg",
        "20 deg",
        "10 deg",
        "60 deg"
      ],
      "answer": 1,
      "explanation": "Circumference angle is half.",
      "id": 126
    },
    {
      "topic": "Circle Geometry",
      "difficulty": "medium",
      "question": "Tangents from an external point to a circle are ___.",
      "options": [
        "perpendicular",
        "parallel",
        "equal",
        "unequal"
      ],
      "answer": 2,
      "explanation": "Equal lengths from external point.",
      "id": 127
    },
    {
      "topic": "Circle Geometry",
      "difficulty": "medium",
      "question": "Angles in the same segment of a circle are ___.",
      "options": [
        "supplementary",
        "right",
        "different",
        "equal"
      ],
      "answer": 3,
      "explanation": "Same segment property.",
      "id": 128
    },
    {
      "topic": "Circle Geometry",
      "difficulty": "medium",
      "question": "A line from the center perpendicular to a chord ___.",
      "options": [
        "bisects the chord",
        "doubles the chord",
        "is tangent",
        "is parallel"
      ],
      "answer": 0,
      "explanation": "Perpendicular from center bisects chord.",
      "id": 129
    },
    {
      "topic": "Circle Geometry",
      "difficulty": "hard",
      "question": "The angle between a tangent and a chord equals the angle in the ___.",
      "options": [
        "same chord",
        "opposite arc",
        "center",
        "radius"
      ],
      "answer": 1,
      "explanation": "Alternate segment theorem.",
      "id": 130
    },
    {
      "topic": "Mensuration",
      "difficulty": "medium",
      "question": "Find the area of a trapezium with parallel sides 8 cm and 12 cm and height 5 cm.",
      "options": [
        "40 cm^2",
        "60 cm^2",
        "50 cm^2",
        "70 cm^2"
      ],
      "answer": 2,
      "explanation": "Area = 1/2(a+b)h.",
      "id": 131
    },
    {
      "topic": "Mensuration",
      "difficulty": "easy",
      "question": "Find the volume of a rectangular prism 4 cm x 3 cm x 5 cm.",
      "options": [
        "45 cm^3",
        "50 cm^3",
        "65 cm^3",
        "60 cm^3"
      ],
      "answer": 3,
      "explanation": "Volume = lwh.",
      "id": 132
    },
    {
      "topic": "Mensuration",
      "difficulty": "medium",
      "question": "Find the curved surface area of a cylinder of radius 7 cm and height 10 cm (pi=22/7).",
      "options": [
        "440 cm^2",
        "220 cm^2",
        "484 cm^2",
        "660 cm^2"
      ],
      "answer": 0,
      "explanation": "CSA = 2pi r h.",
      "id": 133
    },
    {
      "topic": "Mensuration",
      "difficulty": "medium",
      "question": "Find the surface area of a sphere of radius 3 cm (in terms of pi).",
      "options": [
        "18 pi cm^2",
        "36 pi cm^2",
        "12 pi cm^2",
        "54 pi cm^2"
      ],
      "answer": 1,
      "explanation": "Surface area = 4 pi r^2.",
      "id": 134
    },
    {
      "topic": "Mensuration",
      "difficulty": "hard",
      "question": "Find the volume of a sphere of radius 3 cm (in terms of pi).",
      "options": [
        "27 pi cm^3",
        "24 pi cm^3",
        "36 pi cm^3",
        "18 pi cm^3"
      ],
      "answer": 2,
      "explanation": "Volume = 4/3 pi r^3.",
      "id": 135
    },
    {
      "topic": "Mensuration",
      "difficulty": "easy",
      "question": "Find the area of a circle of radius 7 cm (pi=22/7).",
      "options": [
        "44 cm^2",
        "308 cm^2",
        "132 cm^2",
        "154 cm^2"
      ],
      "answer": 3,
      "explanation": "Area = pi r^2.",
      "id": 136
    },
    {
      "topic": "Mensuration",
      "difficulty": "easy",
      "question": "Find the perimeter of a rectangle of length 9 cm and width 4 cm.",
      "options": [
        "26 cm",
        "18 cm",
        "36 cm",
        "22 cm"
      ],
      "answer": 0,
      "explanation": "Perimeter = 2(l+w).",
      "id": 137
    },
    {
      "topic": "Mensuration",
      "difficulty": "easy",
      "question": "Find the area of a parallelogram with base 12 cm and height 7 cm.",
      "options": [
        "42 cm^2",
        "84 cm^2",
        "60 cm^2",
        "96 cm^2"
      ],
      "answer": 1,
      "explanation": "Area = base x height.",
      "id": 138
    },
    {
      "topic": "Mensuration",
      "difficulty": "medium",
      "question": "A triangle has sides 6 cm, 8 cm, 10 cm. Its area is ___.",
      "options": [
        "30 cm^2",
        "20 cm^2",
        "24 cm^2",
        "40 cm^2"
      ],
      "answer": 2,
      "explanation": "Right triangle: area = 1/2 x 6 x 8.",
      "id": 139
    },
    {
      "topic": "Mensuration",
      "difficulty": "hard",
      "question": "Find the area of a sector of a circle with radius 7 cm and angle 60 deg (pi=22/7).",
      "options": [
        "21 cm^2",
        "30.8 cm^2",
        "36.7 cm^2",
        "25.67 cm^2"
      ],
      "answer": 3,
      "explanation": "Area = (theta/360)pi r^2.",
      "id": 140
    },
    {
      "topic": "Statistics",
      "difficulty": "medium",
      "question": "Two dice are thrown. Probability of getting a sum of 7 is ___.",
      "options": [
        "1/6",
        "1/12",
        "1/3",
        "1/9"
      ],
      "answer": 0,
      "explanation": "6 favorable out of 36.",
      "id": 141
    },
    {
      "topic": "Statistics",
      "difficulty": "medium",
      "question": "Three coins are tossed. Probability of no head is ___.",
      "options": [
        "1/4",
        "1/8",
        "3/8",
        "1/2"
      ],
      "answer": 1,
      "explanation": "Only TTT.",
      "id": 142
    },
    {
      "topic": "Statistics",
      "difficulty": "easy",
      "question": "Find the range of 3, 7, 2, 9, 5.",
      "options": [
        "6",
        "5",
        "7",
        "9"
      ],
      "answer": 2,
      "explanation": "Range = max - min.",
      "id": 143
    },
    {
      "topic": "Statistics",
      "difficulty": "easy",
      "question": "Find the median of 5, 2, 9, 7, 3.",
      "options": [
        "7",
        "3",
        "6",
        "5"
      ],
      "answer": 3,
      "explanation": "Order values and pick middle.",
      "id": 144
    },
    {
      "topic": "Statistics",
      "difficulty": "easy",
      "question": "A bag has 5 blue and 3 red balls. Probability of blue is ___.",
      "options": [
        "5/8",
        "3/8",
        "1/2",
        "2/5"
      ],
      "answer": 0,
      "explanation": "Probability = 5/8.",
      "id": 145
    },
    {
      "topic": "Statistics",
      "difficulty": "medium",
      "question": "Probability of at least one head in two coin tosses is ___.",
      "options": [
        "1/4",
        "3/4",
        "1/2",
        "1"
      ],
      "answer": 1,
      "explanation": "1 - P(TT).",
      "id": 146
    },
    {
      "topic": "Statistics",
      "difficulty": "easy",
      "question": "Find the mean of 2, 4, 6, 8.",
      "options": [
        "4",
        "6",
        "5",
        "3"
      ],
      "answer": 2,
      "explanation": "Mean = sum/4.",
      "id": 147
    },
    {
      "topic": "Statistics",
      "difficulty": "easy",
      "question": "If x has frequency 2 and y has frequency 3, the total frequency is ___.",
      "options": [
        "6",
        "4",
        "3",
        "5"
      ],
      "answer": 3,
      "explanation": "Add frequencies.",
      "id": 148
    },
    {
      "topic": "Statistics",
      "difficulty": "hard",
      "question": "A box has 3 red and 2 blue balls. Probability of two reds without replacement is ___.",
      "options": [
        "3/10",
        "1/5",
        "2/5",
        "1/2"
      ],
      "answer": 0,
      "explanation": "3/5 x 2/4.",
      "id": 149
    },
    {
      "topic": "Statistics",
      "difficulty": "easy",
      "question": "The probability of not getting a 6 on a die is ___.",
      "options": [
        "1/6",
        "5/6",
        "1/3",
        "2/3"
      ],
      "answer": 1,
      "explanation": "Non-6 outcomes = 5.",
      "id": 150
    }
  ],
  "english": [
    {
      "topic": "Grammar",
      "difficulty": "easy",
      "question": "Select the correct verb: Neither the teacher nor the students ___ ready.",
      "options": [
        "is",
        "are",
        "was",
        "has been"
      ],
      "answer": 1,
      "explanation": "Verb agrees with nearest subject.",
      "id": 1
    },
    {
      "topic": "Grammar",
      "difficulty": "easy",
      "question": "Select the correct verb: The committee ___ its report yesterday.",
      "options": [
        "submit",
        "submits",
        "submitted",
        "have submitted"
      ],
      "answer": 2,
      "explanation": "Collective noun as a unit takes singular past.",
      "id": 2
    },
    {
      "topic": "Grammar",
      "difficulty": "easy",
      "question": "Select the correct verb: Each of the boys brought ___ book.",
      "options": [
        "their",
        "her",
        "them",
        "his"
      ],
      "answer": 3,
      "explanation": "'Each' is singular.",
      "id": 3
    },
    {
      "topic": "Grammar",
      "difficulty": "easy",
      "question": "Select the correct verb: The number of applicants ___ increasing.",
      "options": [
        "is",
        "are",
        "were",
        "have been"
      ],
      "answer": 0,
      "explanation": "'The number of' is singular.",
      "id": 4
    },
    {
      "topic": "Grammar",
      "difficulty": "easy",
      "question": "Select the correct verb: A number of applicants ___ qualified.",
      "options": [
        "was",
        "were",
        "is",
        "has"
      ],
      "answer": 1,
      "explanation": "'A number of' is plural.",
      "id": 5
    },
    {
      "topic": "Grammar",
      "difficulty": "easy",
      "question": "Select the correct verb: Either of the answers ___ acceptable.",
      "options": [
        "are",
        "were",
        "is",
        "have been"
      ],
      "answer": 2,
      "explanation": "Either is singular.",
      "id": 6
    },
    {
      "topic": "Grammar",
      "difficulty": "easy",
      "question": "Select the correct verb: The police ___ arrived.",
      "options": [
        "has",
        "is",
        "was",
        "have"
      ],
      "answer": 3,
      "explanation": "Police is plural in meaning.",
      "id": 7
    },
    {
      "topic": "Grammar",
      "difficulty": "easy",
      "question": "Select the correct verb: Mathematics ___ my favorite subject.",
      "options": [
        "is",
        "are",
        "were",
        "have been"
      ],
      "answer": 0,
      "explanation": "Names of subjects are singular.",
      "id": 8
    },
    {
      "topic": "Grammar",
      "difficulty": "easy",
      "question": "Select the correct verb: One of the players ___ injured.",
      "options": [
        "were",
        "was",
        "are",
        "have been"
      ],
      "answer": 1,
      "explanation": "'One of' takes singular.",
      "id": 9
    },
    {
      "topic": "Grammar",
      "difficulty": "medium",
      "question": "Select the correct verb: Bread and butter ___ his breakfast.",
      "options": [
        "are",
        "were",
        "is",
        "have"
      ],
      "answer": 2,
      "explanation": "Two items as one idea take singular.",
      "id": 10
    },
    {
      "topic": "Grammar",
      "difficulty": "medium",
      "question": "Select the correct verb: Neither of the answers ___ correct.",
      "options": [
        "are",
        "were",
        "have",
        "is"
      ],
      "answer": 3,
      "explanation": "Neither is singular.",
      "id": 11
    },
    {
      "topic": "Grammar",
      "difficulty": "medium",
      "question": "Select the correct verb: The jury ___ reached a verdict.",
      "options": [
        "has",
        "have",
        "are",
        "were"
      ],
      "answer": 0,
      "explanation": "Jury as a unit takes singular.",
      "id": 12
    },
    {
      "topic": "Grammar",
      "difficulty": "medium",
      "question": "Select the correct verb: Every student and teacher ___ invited.",
      "options": [
        "were",
        "was",
        "are",
        "have"
      ],
      "answer": 1,
      "explanation": "With 'every', verb is singular.",
      "id": 13
    },
    {
      "topic": "Grammar",
      "difficulty": "medium",
      "question": "Select the correct verb: The data ___ accurate.",
      "options": [
        "is",
        "was",
        "are",
        "has"
      ],
      "answer": 2,
      "explanation": "Data is plural in formal usage.",
      "id": 14
    },
    {
      "topic": "Grammar",
      "difficulty": "easy",
      "question": "Select the correct verb: The news ___ encouraging.",
      "options": [
        "are",
        "were",
        "have",
        "is"
      ],
      "answer": 3,
      "explanation": "News is singular in usage.",
      "id": 15
    },
    {
      "topic": "Grammar",
      "difficulty": "easy",
      "question": "Select the correct verb: The pair of shoes ___ new.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": 0,
      "explanation": "Pair is singular.",
      "id": 16
    },
    {
      "topic": "Grammar",
      "difficulty": "easy",
      "question": "Select the correct verb: No one ___ allowed in.",
      "options": [
        "are",
        "is",
        "were",
        "have"
      ],
      "answer": 1,
      "explanation": "No one is singular.",
      "id": 17
    },
    {
      "topic": "Grammar",
      "difficulty": "medium",
      "question": "Select the correct verb: Either John or his friends ___ coming.",
      "options": [
        "is",
        "was",
        "are",
        "has"
      ],
      "answer": 2,
      "explanation": "Verb agrees with nearer subject.",
      "id": 18
    },
    {
      "topic": "Tenses",
      "difficulty": "medium",
      "question": "Choose the correct form: By the time he arrived, the meeting ___.",
      "options": [
        "started",
        "has started",
        "was starting",
        "had started"
      ],
      "answer": 3,
      "explanation": "Past perfect for earlier past.",
      "id": 19
    },
    {
      "topic": "Tenses",
      "difficulty": "medium",
      "question": "Choose the correct form: If she ___ earlier, she would have met him.",
      "options": [
        "had left",
        "left",
        "leaves",
        "would leave"
      ],
      "answer": 0,
      "explanation": "Third conditional uses past perfect.",
      "id": 20
    },
    {
      "topic": "Tenses",
      "difficulty": "medium",
      "question": "Choose the correct form: I ___ here for five years by next month.",
      "options": [
        "have been",
        "will have been",
        "am",
        "will be"
      ],
      "answer": 1,
      "explanation": "Future perfect continuous.",
      "id": 21
    },
    {
      "topic": "Tenses",
      "difficulty": "easy",
      "question": "Choose the correct form: She ___ her homework when I called.",
      "options": [
        "did",
        "does",
        "was doing",
        "has done"
      ],
      "answer": 2,
      "explanation": "Past continuous for ongoing action.",
      "id": 22
    },
    {
      "topic": "Tenses",
      "difficulty": "easy",
      "question": "Choose the correct form: The train ___ before we reached the station.",
      "options": [
        "left",
        "has left",
        "leaves",
        "had left"
      ],
      "answer": 3,
      "explanation": "Past perfect.",
      "id": 23
    },
    {
      "topic": "Tenses",
      "difficulty": "easy",
      "question": "Choose the correct form: He usually ___ to work by bus.",
      "options": [
        "goes",
        "go",
        "gone",
        "going"
      ],
      "answer": 0,
      "explanation": "Third-person singular takes -s.",
      "id": 24
    },
    {
      "topic": "Tenses",
      "difficulty": "easy",
      "question": "Choose the correct form: We ___ the match tomorrow.",
      "options": [
        "played",
        "will play",
        "play",
        "have played"
      ],
      "answer": 1,
      "explanation": "Simple future.",
      "id": 25
    },
    {
      "topic": "Tenses",
      "difficulty": "medium",
      "question": "Choose the correct form: They ___ since morning.",
      "options": [
        "studied",
        "study",
        "have been studying",
        "are studying"
      ],
      "answer": 2,
      "explanation": "Present perfect continuous.",
      "id": 26
    },
    {
      "topic": "Tenses",
      "difficulty": "medium",
      "question": "Choose the correct form: By next year, she ___ her degree.",
      "options": [
        "will complete",
        "complete",
        "am completing",
        "will have completed"
      ],
      "answer": 3,
      "explanation": "Future perfect.",
      "id": 27
    },
    {
      "topic": "Tenses",
      "difficulty": "easy",
      "question": "Choose the correct form: When I arrived, he ___ already left.",
      "options": [
        "had",
        "has",
        "was",
        "is"
      ],
      "answer": 0,
      "explanation": "Past perfect auxiliary.",
      "id": 28
    },
    {
      "topic": "Punctuation",
      "difficulty": "easy",
      "question": "However we decided to continue.",
      "options": [
        "However; we decided to continue.",
        "However, we decided to continue.",
        "However we decided; to continue.",
        "However: we decided to continue."
      ],
      "answer": 1,
      "explanation": "Comma after introductory adverb.",
      "id": 29
    },
    {
      "topic": "Punctuation",
      "difficulty": "easy",
      "question": "Its a beautiful day isnt it?",
      "options": [
        "Its a beautiful day, isnt it?",
        "It's a beautiful day isnt it?",
        "It's a beautiful day, isn't it?",
        "Its a beautiful day isn't it?"
      ],
      "answer": 2,
      "explanation": "Use apostrophes and comma.",
      "id": 30
    },
    {
      "topic": "Punctuation",
      "difficulty": "easy",
      "question": "After eating the lion slept.",
      "options": [
        "After, eating the lion slept.",
        "After eating the, lion slept.",
        "No comma needed",
        "After eating, the lion slept."
      ],
      "answer": 3,
      "explanation": "Comma after introductory phrase.",
      "id": 31
    },
    {
      "topic": "Punctuation",
      "difficulty": "medium",
      "question": "Pick the correctly punctuated sentence.",
      "options": [
        "The teacher said, 'Be quiet.'",
        "The teacher said 'Be quiet'.",
        "The teacher said, 'Be quiet'",
        "The teacher said 'Be quiet.'"
      ],
      "answer": 0,
      "explanation": "Comma before a direct quote.",
      "id": 32
    },
    {
      "topic": "Punctuation",
      "difficulty": "easy",
      "question": "Choose the correct punctuation.",
      "options": [
        "Please bring pens pencils, and rulers.",
        "Please bring pens, pencils, and rulers.",
        "Please bring pens, pencils and rulers.",
        "Please bring pens; pencils, and rulers."
      ],
      "answer": 1,
      "explanation": "Use commas in a list.",
      "id": 33
    },
    {
      "topic": "Punctuation",
      "difficulty": "easy",
      "question": "Select the correctly punctuated sentence.",
      "options": [
        "When he arrived the class had started.",
        "When, he arrived the class had started.",
        "When he arrived, the class had started.",
        "When he arrived the class, had started."
      ],
      "answer": 2,
      "explanation": "Comma after introductory clause.",
      "id": 34
    },
    {
      "topic": "Punctuation",
      "difficulty": "easy",
      "question": "Pick the correct punctuation.",
      "options": [
        "Yes I can help you.",
        "Yes; I can help you.",
        "Yes: I can help you.",
        "Yes, I can help you."
      ],
      "answer": 3,
      "explanation": "Comma after a response word.",
      "id": 35
    },
    {
      "topic": "Punctuation",
      "difficulty": "easy",
      "question": "Choose the correctly punctuated sentence.",
      "options": [
        "She bought bread, milk, and eggs.",
        "She bought bread milk, and eggs.",
        "She bought bread, milk and eggs.",
        "She bought bread; milk, and eggs."
      ],
      "answer": 0,
      "explanation": "Comma to separate items.",
      "id": 36
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word closest in meaning to 'abundant'.",
      "options": [
        "scarce",
        "plentiful",
        "tiny",
        "late"
      ],
      "answer": 1,
      "explanation": "Abundant means plentiful.",
      "id": 37
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word closest in meaning to 'obstinate'.",
      "options": [
        "gentle",
        "quick",
        "stubborn",
        "careful"
      ],
      "answer": 2,
      "explanation": "Obstinate means stubborn.",
      "id": 38
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word closest in meaning to 'succinct'.",
      "options": [
        "confusing",
        "lengthy",
        "uncertain",
        "brief"
      ],
      "answer": 3,
      "explanation": "Succinct means brief.",
      "id": 39
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word closest in meaning to 'mitigate'.",
      "options": [
        "reduce",
        "increase",
        "ignore",
        "delay"
      ],
      "answer": 0,
      "explanation": "Mitigate means reduce severity.",
      "id": 40
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word closest in meaning to 'inevitable'.",
      "options": [
        "optional",
        "unavoidable",
        "temporary",
        "doubtful"
      ],
      "answer": 1,
      "explanation": "Inevitable means unavoidable.",
      "id": 41
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word closest in meaning to 'cautious'.",
      "options": [
        "careful",
        "reckless",
        "fast",
        "angry"
      ],
      "answer": 0,
      "explanation": "Cautious means careful.",
      "id": 42
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word closest in meaning to 'candid'.",
      "options": [
        "secret",
        "silent",
        "careless",
        "frank"
      ],
      "answer": 3,
      "explanation": "Candid means frank.",
      "id": 43
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word closest in meaning to 'diligent'.",
      "options": [
        "hardworking",
        "lazy",
        "careful",
        "weak"
      ],
      "answer": 0,
      "explanation": "Diligent means hardworking.",
      "id": 44
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word closest in meaning to 'frugal'.",
      "options": [
        "wasteful",
        "thrifty",
        "rich",
        "slow"
      ],
      "answer": 1,
      "explanation": "Frugal means thrifty.",
      "id": 45
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word closest in meaning to 'vivid'.",
      "options": [
        "dull",
        "dark",
        "bright",
        "late"
      ],
      "answer": 2,
      "explanation": "Vivid means bright or clear.",
      "id": 46
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word closest in meaning to 'select'.",
      "options": [
        "choose",
        "reject",
        "delay",
        "hide"
      ],
      "answer": 0,
      "explanation": "Select means choose.",
      "id": 47
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word closest in meaning to 'commence'.",
      "options": [
        "begin",
        "end",
        "stop",
        "pause"
      ],
      "answer": 0,
      "explanation": "Commence means begin.",
      "id": 48
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word closest in meaning to 'reluctant'.",
      "options": [
        "eager",
        "unwilling",
        "quick",
        "happy"
      ],
      "answer": 1,
      "explanation": "Reluctant means unwilling.",
      "id": 49
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word closest in meaning to 'exhausted'.",
      "options": [
        "fresh",
        "alert",
        "tired",
        "lively"
      ],
      "answer": 2,
      "explanation": "Exhausted means very tired.",
      "id": 50
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word closest in meaning to 'accurate'.",
      "options": [
        "wrong",
        "rough",
        "unclear",
        "exact"
      ],
      "answer": 3,
      "explanation": "Accurate means exact.",
      "id": 51
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word opposite in meaning to 'scarce'.",
      "options": [
        "abundant",
        "rare",
        "tiny",
        "few"
      ],
      "answer": 0,
      "explanation": "Opposite of scarce is abundant.",
      "id": 52
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word opposite in meaning to 'expand'.",
      "options": [
        "increase",
        "reduce",
        "stretch",
        "grow"
      ],
      "answer": 1,
      "explanation": "Opposite of expand is reduce.",
      "id": 53
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word opposite in meaning to 'optimistic'.",
      "options": [
        "realistic",
        "enthusiastic",
        "pessimistic",
        "dramatic"
      ],
      "answer": 2,
      "explanation": "Opposite of optimistic is pessimistic.",
      "id": 54
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word opposite in meaning to 'domestic'.",
      "options": [
        "local",
        "national",
        "home",
        "foreign"
      ],
      "answer": 3,
      "explanation": "Opposite of domestic is foreign.",
      "id": 55
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word opposite in meaning to 'success'.",
      "options": [
        "failure",
        "win",
        "triumph",
        "progress"
      ],
      "answer": 0,
      "explanation": "Opposite of success is failure.",
      "id": 56
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word opposite in meaning to 'ancient'.",
      "options": [
        "old",
        "modern",
        "antique",
        "aged"
      ],
      "answer": 1,
      "explanation": "Opposite of ancient is modern.",
      "id": 57
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word opposite in meaning to 'accept'.",
      "options": [
        "receive",
        "allow",
        "reject",
        "permit"
      ],
      "answer": 2,
      "explanation": "Opposite of accept is reject.",
      "id": 58
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word opposite in meaning to 'generous'.",
      "options": [
        "kind",
        "gifted",
        "rich",
        "stingy"
      ],
      "answer": 3,
      "explanation": "Opposite of generous is stingy.",
      "id": 59
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word opposite in meaning to 'diminish'.",
      "options": [
        "increase",
        "reduce",
        "lower",
        "cut"
      ],
      "answer": 0,
      "explanation": "Opposite of diminish is increase.",
      "id": 60
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word opposite in meaning to 'transparent'.",
      "options": [
        "clear",
        "opaque",
        "bright",
        "visible"
      ],
      "answer": 1,
      "explanation": "Opposite of transparent is opaque.",
      "id": 61
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word opposite in meaning to 'advance'.",
      "options": [
        "progress",
        "move",
        "retreat",
        "lead"
      ],
      "answer": 2,
      "explanation": "Opposite of advance is retreat.",
      "id": 62
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word opposite in meaning to 'major'.",
      "options": [
        "large",
        "main",
        "chief",
        "minor"
      ],
      "answer": 3,
      "explanation": "Opposite of major is minor.",
      "id": 63
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word opposite in meaning to 'frequent'.",
      "options": [
        "rare",
        "often",
        "regular",
        "usual"
      ],
      "answer": 0,
      "explanation": "Opposite of frequent is rare.",
      "id": 64
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word opposite in meaning to 'early'.",
      "options": [
        "late",
        "soon",
        "fast",
        "quick"
      ],
      "answer": 0,
      "explanation": "Opposite of early is late.",
      "id": 65
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word opposite in meaning to 'permanent'.",
      "options": [
        "lasting",
        "stable",
        "temporary",
        "fixed"
      ],
      "answer": 2,
      "explanation": "Opposite of permanent is temporary.",
      "id": 66
    },
    {
      "topic": "Idioms",
      "difficulty": "medium",
      "question": "The idiom 'spill the beans' means to ___.",
      "options": [
        "cook a meal",
        "make a mistake",
        "lose money",
        "reveal a secret"
      ],
      "answer": 3,
      "explanation": "It means to reveal a secret.",
      "id": 67
    },
    {
      "topic": "Idioms",
      "difficulty": "medium",
      "question": "The idiom 'a blessing in disguise' means to ___.",
      "options": [
        "a good thing that seemed bad",
        "a sure loss",
        "a public insult",
        "a risky decision"
      ],
      "answer": 0,
      "explanation": "It is something good hidden in a bad event.",
      "id": 68
    },
    {
      "topic": "Idioms",
      "difficulty": "medium",
      "question": "The idiom 'once in a blue moon' means to ___.",
      "options": [
        "every night",
        "very rarely",
        "suddenly",
        "very quickly"
      ],
      "answer": 1,
      "explanation": "It means very rarely.",
      "id": 69
    },
    {
      "topic": "Idioms",
      "difficulty": "medium",
      "question": "The idiom 'hit the nail on the head' means to ___.",
      "options": [
        "make a mistake",
        "lose money",
        "say the exact truth",
        "avoid the issue"
      ],
      "answer": 2,
      "explanation": "It means to be exactly right.",
      "id": 70
    },
    {
      "topic": "Idioms",
      "difficulty": "medium",
      "question": "The idiom 'break the ice' means to ___.",
      "options": [
        "end a meeting",
        "cause trouble",
        "keep quiet",
        "start a conversation"
      ],
      "answer": 3,
      "explanation": "It means to ease tension.",
      "id": 71
    },
    {
      "topic": "Idioms",
      "difficulty": "medium",
      "question": "The idiom 'burn the midnight oil' means to ___.",
      "options": [
        "work late at night",
        "sleep early",
        "waste money",
        "travel far"
      ],
      "answer": 0,
      "explanation": "It means to study or work late.",
      "id": 72
    },
    {
      "topic": "Idioms",
      "difficulty": "medium",
      "question": "The idiom 'beat around the bush' means to ___.",
      "options": [
        "speak clearly",
        "avoid the main point",
        "answer quickly",
        "decide fast"
      ],
      "answer": 1,
      "explanation": "It means to be indirect.",
      "id": 73
    },
    {
      "topic": "Idioms",
      "difficulty": "medium",
      "question": "The idiom 'back to square one' means to ___.",
      "options": [
        "finish quickly",
        "win easily",
        "back to the beginning",
        "change sides"
      ],
      "answer": 2,
      "explanation": "It means to start over.",
      "id": 74
    },
    {
      "topic": "Phrasal Verbs",
      "difficulty": "medium",
      "question": "The phrasal verb 'put up with' means to ___.",
      "options": [
        "build",
        "admire",
        "postpone",
        "tolerate"
      ],
      "answer": 3,
      "explanation": "It means tolerate.",
      "id": 75
    },
    {
      "topic": "Phrasal Verbs",
      "difficulty": "medium",
      "question": "The phrasal verb 'call off' means to ___.",
      "options": [
        "cancel",
        "invite",
        "approve",
        "discover"
      ],
      "answer": 0,
      "explanation": "It means cancel.",
      "id": 76
    },
    {
      "topic": "Phrasal Verbs",
      "difficulty": "medium",
      "question": "The phrasal verb 'look into' means to ___.",
      "options": [
        "ignore",
        "investigate",
        "celebrate",
        "finish"
      ],
      "answer": 1,
      "explanation": "It means investigate.",
      "id": 77
    },
    {
      "topic": "Phrasal Verbs",
      "difficulty": "medium",
      "question": "The phrasal verb 'carry out' means to ___.",
      "options": [
        "cancel",
        "delay",
        "perform",
        "hide"
      ],
      "answer": 2,
      "explanation": "It means perform.",
      "id": 78
    },
    {
      "topic": "Phrasal Verbs",
      "difficulty": "medium",
      "question": "The phrasal verb 'break down' means to ___.",
      "options": [
        "start",
        "increase",
        "repair",
        "stop working"
      ],
      "answer": 3,
      "explanation": "It means stop working.",
      "id": 79
    },
    {
      "topic": "Phrasal Verbs",
      "difficulty": "medium",
      "question": "The phrasal verb 'turn down' means to ___.",
      "options": [
        "reject",
        "accept",
        "raise",
        "increase"
      ],
      "answer": 0,
      "explanation": "It means reject.",
      "id": 80
    },
    {
      "topic": "Phrasal Verbs",
      "difficulty": "medium",
      "question": "The phrasal verb 'give up' means to ___.",
      "options": [
        "continue",
        "quit",
        "support",
        "return"
      ],
      "answer": 1,
      "explanation": "It means quit.",
      "id": 81
    },
    {
      "topic": "Phrasal Verbs",
      "difficulty": "medium",
      "question": "The phrasal verb 'set off' means to ___.",
      "options": [
        "finish",
        "forget",
        "begin a journey",
        "hide"
      ],
      "answer": 2,
      "explanation": "It means start a journey.",
      "id": 82
    },
    {
      "topic": "Figures of Speech",
      "difficulty": "medium",
      "question": "Identify the figure of speech: 'The wind howled all night.'",
      "options": [
        "Metaphor",
        "Simile",
        "Hyperbole",
        "Personification"
      ],
      "answer": 3,
      "explanation": "Human action given to wind.",
      "id": 83
    },
    {
      "topic": "Figures of Speech",
      "difficulty": "medium",
      "question": "Identify the figure of speech: 'The classroom was a zoo.'",
      "options": [
        "Metaphor",
        "Simile",
        "Personification",
        "Alliteration"
      ],
      "answer": 0,
      "explanation": "Direct comparison.",
      "id": 84
    },
    {
      "topic": "Figures of Speech",
      "difficulty": "medium",
      "question": "Identify the figure of speech: 'He ran like the wind.'",
      "options": [
        "Metaphor",
        "Simile",
        "Irony",
        "Personification"
      ],
      "answer": 1,
      "explanation": "Comparison using like/as.",
      "id": 85
    },
    {
      "topic": "Figures of Speech",
      "difficulty": "medium",
      "question": "Identify the figure of speech: 'Peter Piper picked a peck of peppers.'",
      "options": [
        "Metaphor",
        "Irony",
        "Alliteration",
        "Symbolism"
      ],
      "answer": 2,
      "explanation": "Repeated initial consonant sound.",
      "id": 86
    },
    {
      "topic": "Figures of Speech",
      "difficulty": "medium",
      "question": "Identify the figure of speech: 'I have told you a thousand times.'",
      "options": [
        "Understatement",
        "Irony",
        "Metaphor",
        "Hyperbole"
      ],
      "answer": 3,
      "explanation": "Deliberate exaggeration.",
      "id": 87
    },
    {
      "topic": "Figures of Speech",
      "difficulty": "medium",
      "question": "Identify the figure of speech: 'The pen is mightier than the sword.'",
      "options": [
        "Metonymy",
        "Simile",
        "Hyperbole",
        "Irony"
      ],
      "answer": 0,
      "explanation": "Associated thing stands for another.",
      "id": 88
    },
    {
      "topic": "Figures of Speech",
      "difficulty": "medium",
      "question": "Identify the figure of speech: 'The city never sleeps.'",
      "options": [
        "Simile",
        "Personification",
        "Metaphor",
        "Alliteration"
      ],
      "answer": 1,
      "explanation": "City given human trait.",
      "id": 89
    },
    {
      "topic": "Figures of Speech",
      "difficulty": "medium",
      "question": "Identify the figure of speech: 'It is as clear as crystal.'",
      "options": [
        "Metaphor",
        "Personification",
        "Simile",
        "Irony"
      ],
      "answer": 2,
      "explanation": "Comparison using 'as'.",
      "id": 90
    },
    {
      "topic": "Comprehension",
      "difficulty": "hard",
      "question": "Read the passage: 'The farmer waited for the first heavy rains before planting maize, knowing that early showers often disappear.' What can be inferred?",
      "options": [
        "early showers are always heavy",
        "fertilizer was unavailable",
        "laborers were absent",
        "waiting reduced the risk of seed failure"
      ],
      "answer": 3,
      "explanation": "Waiting for heavy rains reduces risk of seed failure.",
      "id": 91
    },
    {
      "topic": "Comprehension",
      "difficulty": "hard",
      "question": "Read the passage: 'Prices rose steadily, so households reduced non-essential spending and postponed major purchases.' What can be inferred?",
      "options": [
        "rising prices cut discretionary spending",
        "spending on luxuries increased",
        "prices had no effect",
        "borrowers bought more"
      ],
      "answer": 0,
      "explanation": "Higher prices reduce non-essential spending.",
      "id": 92
    },
    {
      "topic": "Comprehension",
      "difficulty": "hard",
      "question": "Read the passage: 'The town installed solar panels to cut diesel costs and reduce noise from generators.' What can be inferred?",
      "options": [
        "solar panels increased noise",
        "solar panels reduced fuel costs and noise",
        "streetlights were removed",
        "tourism declined"
      ],
      "answer": 1,
      "explanation": "Both cost and noise reduction are stated.",
      "id": 93
    },
    {
      "topic": "Comprehension",
      "difficulty": "hard",
      "question": "Read the passage: 'He studied daily and kept a strict schedule, which helped him pass the examination.' What can be inferred?",
      "options": [
        "luck was the main factor",
        "he avoided studying",
        "discipline improved his success",
        "the exam was canceled"
      ],
      "answer": 2,
      "explanation": "The passage links discipline to success.",
      "id": 94
    },
    {
      "topic": "Comprehension",
      "difficulty": "hard",
      "question": "Read the passage: 'The road was flooded, so vehicles were diverted to a longer route.' What can be inferred?",
      "options": [
        "drivers refused to travel",
        "the weather was sunny",
        "fuel prices dropped",
        "the usual route was unusable"
      ],
      "answer": 3,
      "explanation": "Flooding made the usual road unusable.",
      "id": 95
    },
    {
      "topic": "Comprehension",
      "difficulty": "hard",
      "question": "Read the passage: 'The manager praised workers who met deadlines and followed safety rules.' What can be inferred?",
      "options": [
        "punctual and careful workers are valued",
        "careless workers are rewarded",
        "deadlines are not important",
        "safety rules were removed"
      ],
      "answer": 0,
      "explanation": "The manager values punctuality and safety compliance.",
      "id": 96
    },
    {
      "topic": "Comprehension",
      "difficulty": "hard",
      "question": "Read the passage: 'The clinic introduced a reminder system for appointments, and missed visits fell sharply.' What can be inferred?",
      "options": [
        "appointments were canceled",
        "reminders improved attendance",
        "patients avoided the clinic",
        "fees were removed"
      ],
      "answer": 1,
      "explanation": "Reminders reduced missed visits.",
      "id": 97
    },
    {
      "topic": "Comprehension",
      "difficulty": "hard",
      "question": "Read the passage: 'A new bus route reduced travel time, so more commuters switched from private cars.' What can be inferred?",
      "options": [
        "travel time increased",
        "car use rose",
        "faster transport increased public use",
        "routes were closed"
      ],
      "answer": 2,
      "explanation": "Shorter travel time encouraged switching.",
      "id": 98
    },
    {
      "topic": "Comprehension",
      "difficulty": "hard",
      "question": "Read the passage: 'The factory installed filters to reduce smoke, improving air quality near the plant.' What can be inferred?",
      "options": [
        "smoke levels rose",
        "air quality worsened",
        "filters were removed",
        "filters reduced pollution"
      ],
      "answer": 3,
      "explanation": "Filters improved air quality.",
      "id": 99
    },
    {
      "topic": "Comprehension",
      "difficulty": "hard",
      "question": "Read the passage: 'Rainwater harvesting supplied households during dry months, lowering water shortages.' What can be inferred?",
      "options": [
        "stored rainwater reduced shortages",
        "shortages increased",
        "harvesting caused drought",
        "rainwater was wasted"
      ],
      "answer": 0,
      "explanation": "Stored rainwater helped during dry months.",
      "id": 100
    },
    {
      "topic": "Grammar",
      "difficulty": "easy",
      "question": "Select the correct verb: Neither of the girls ___ late.",
      "options": [
        "were",
        "was",
        "are",
        "have been"
      ],
      "answer": 1,
      "explanation": "Neither is singular.",
      "id": 101
    },
    {
      "topic": "Grammar",
      "difficulty": "medium",
      "question": "Select the correct verb: The teacher with the students ___ traveling.",
      "options": [
        "are",
        "were",
        "is",
        "have"
      ],
      "answer": 2,
      "explanation": "Subject is 'teacher'.",
      "id": 102
    },
    {
      "topic": "Grammar",
      "difficulty": "medium",
      "question": "Select the correct verb: Either the boys or the girl ___ responsible.",
      "options": [
        "are",
        "were",
        "have",
        "is"
      ],
      "answer": 3,
      "explanation": "Verb agrees with nearest subject.",
      "id": 103
    },
    {
      "topic": "Grammar",
      "difficulty": "easy",
      "question": "Select the correct verb: One of the books ___ missing.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": 0,
      "explanation": "'One of' is singular.",
      "id": 104
    },
    {
      "topic": "Grammar",
      "difficulty": "easy",
      "question": "Select the correct verb: The team ___ its match yesterday.",
      "options": [
        "win",
        "won",
        "wins",
        "have won"
      ],
      "answer": 1,
      "explanation": "Collective noun as a unit.",
      "id": 105
    },
    {
      "topic": "Grammar",
      "difficulty": "medium",
      "question": "Select the correct verb: Each student must submit ___ assignment.",
      "options": [
        "their",
        "them",
        "his or her",
        "his"
      ],
      "answer": 2,
      "explanation": "Each is singular.",
      "id": 106
    },
    {
      "topic": "Grammar",
      "difficulty": "easy",
      "question": "Select the correct verb: The scissors ___ on the table.",
      "options": [
        "is",
        "was",
        "has",
        "are"
      ],
      "answer": 3,
      "explanation": "Scissors is plural in form.",
      "id": 107
    },
    {
      "topic": "Grammar",
      "difficulty": "easy",
      "question": "Select the correct verb: The list of items ___ long.",
      "options": [
        "is",
        "are",
        "were",
        "have"
      ],
      "answer": 0,
      "explanation": "Main subject is 'list'.",
      "id": 108
    },
    {
      "topic": "Grammar",
      "difficulty": "medium",
      "question": "Select the correct verb: Bread and butter ___ my breakfast.",
      "options": [
        "are",
        "is",
        "were",
        "have"
      ],
      "answer": 1,
      "explanation": "Two items as one idea.",
      "id": 109
    },
    {
      "topic": "Grammar",
      "difficulty": "easy",
      "question": "Select the correct verb: The police ___ arrested the suspect.",
      "options": [
        "has",
        "was",
        "have",
        "is"
      ],
      "answer": 2,
      "explanation": "Police is plural in meaning.",
      "id": 110
    },
    {
      "topic": "Prepositions",
      "difficulty": "medium",
      "question": "Choose the correct preposition: He insisted ___ paying the bill.",
      "options": [
        "in",
        "at",
        "for",
        "on"
      ],
      "answer": 3,
      "explanation": "Insist on.",
      "id": 111
    },
    {
      "topic": "Prepositions",
      "difficulty": "easy",
      "question": "Choose the correct preposition: She is good ___ mathematics.",
      "options": [
        "at",
        "in",
        "on",
        "for"
      ],
      "answer": 0,
      "explanation": "Good at a subject.",
      "id": 112
    },
    {
      "topic": "Prepositions",
      "difficulty": "easy",
      "question": "Choose the correct preposition: The manager was angry ___ the delay.",
      "options": [
        "for",
        "about",
        "on",
        "with"
      ],
      "answer": 1,
      "explanation": "Angry about something.",
      "id": 113
    },
    {
      "topic": "Prepositions",
      "difficulty": "easy",
      "question": "Choose the correct preposition: We arrived ___ the airport early.",
      "options": [
        "in",
        "on",
        "at",
        "to"
      ],
      "answer": 2,
      "explanation": "Arrive at a place.",
      "id": 114
    },
    {
      "topic": "Prepositions",
      "difficulty": "easy",
      "question": "Choose the correct preposition: He is afraid ___ snakes.",
      "options": [
        "from",
        "about",
        "for",
        "of"
      ],
      "answer": 3,
      "explanation": "Afraid of.",
      "id": 115
    },
    {
      "topic": "Prepositions",
      "difficulty": "medium",
      "question": "Choose the correct preposition: They congratulated him ___ his success.",
      "options": [
        "on",
        "for",
        "about",
        "with"
      ],
      "answer": 0,
      "explanation": "Congratulate on.",
      "id": 116
    },
    {
      "topic": "Prepositions",
      "difficulty": "easy",
      "question": "Choose the correct preposition: The book belongs ___ her.",
      "options": [
        "for",
        "to",
        "with",
        "at"
      ],
      "answer": 1,
      "explanation": "Belongs to.",
      "id": 117
    },
    {
      "topic": "Prepositions",
      "difficulty": "easy",
      "question": "Choose the correct preposition: She apologized ___ being late.",
      "options": [
        "about",
        "to",
        "for",
        "on"
      ],
      "answer": 2,
      "explanation": "Apologize for.",
      "id": 118
    },
    {
      "topic": "Prepositions",
      "difficulty": "medium",
      "question": "Choose the correct preposition: He died ___ malaria.",
      "options": [
        "from",
        "by",
        "with",
        "of"
      ],
      "answer": 3,
      "explanation": "Die of illness.",
      "id": 119
    },
    {
      "topic": "Prepositions",
      "difficulty": "medium",
      "question": "Choose the correct preposition: The class divided the work ___ themselves.",
      "options": [
        "among",
        "between",
        "with",
        "for"
      ],
      "answer": 0,
      "explanation": "Among for more than two.",
      "id": 120
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word closest in meaning to 'brief'.",
      "options": [
        "long",
        "short",
        "slow",
        "late"
      ],
      "answer": 1,
      "explanation": "Brief means short.",
      "id": 121
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word closest in meaning to 'increase'.",
      "options": [
        "raise",
        "reduce",
        "drop",
        "delay"
      ],
      "answer": 0,
      "explanation": "Increase means raise.",
      "id": 122
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word closest in meaning to 'hostile'.",
      "options": [
        "calm",
        "gentle",
        "quiet",
        "unfriendly"
      ],
      "answer": 3,
      "explanation": "Hostile means unfriendly.",
      "id": 123
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word closest in meaning to 'ancient'.",
      "options": [
        "old",
        "modern",
        "new",
        "fresh"
      ],
      "answer": 0,
      "explanation": "Ancient means old.",
      "id": 124
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word closest in meaning to 'obvious'.",
      "options": [
        "vague",
        "clear",
        "hidden",
        "late"
      ],
      "answer": 1,
      "explanation": "Obvious means clear.",
      "id": 125
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word closest in meaning to 'repair'.",
      "options": [
        "break",
        "avoid",
        "fix",
        "postpone"
      ],
      "answer": 2,
      "explanation": "Repair means fix.",
      "id": 126
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word closest in meaning to 'fragile'.",
      "options": [
        "delicate",
        "strong",
        "rough",
        "loud"
      ],
      "answer": 0,
      "explanation": "Fragile means delicate.",
      "id": 127
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word opposite in meaning to 'noisy'.",
      "options": [
        "quiet",
        "loud",
        "shouting",
        "echoing"
      ],
      "answer": 0,
      "explanation": "Opposite of noisy is quiet.",
      "id": 128
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word opposite in meaning to 'increase'.",
      "options": [
        "grow",
        "decrease",
        "add",
        "expand"
      ],
      "answer": 1,
      "explanation": "Opposite of increase is decrease.",
      "id": 129
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word opposite in meaning to 'brave'.",
      "options": [
        "bold",
        "strong",
        "cowardly",
        "calm"
      ],
      "answer": 2,
      "explanation": "Opposite of brave is cowardly.",
      "id": 130
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word opposite in meaning to 'agree'.",
      "options": [
        "disagree",
        "accept",
        "allow",
        "approve"
      ],
      "answer": 0,
      "explanation": "Opposite of agree is disagree.",
      "id": 131
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word opposite in meaning to 'complex'.",
      "options": [
        "simple",
        "difficult",
        "hard",
        "complicated"
      ],
      "answer": 0,
      "explanation": "Opposite of complex is simple.",
      "id": 132
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word opposite in meaning to 'arrive'.",
      "options": [
        "come",
        "depart",
        "reach",
        "enter"
      ],
      "answer": 1,
      "explanation": "Opposite of arrive is depart.",
      "id": 133
    },
    {
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "Choose the word opposite in meaning to 'permit'.",
      "options": [
        "forbid",
        "allow",
        "approve",
        "accept"
      ],
      "answer": 0,
      "explanation": "Opposite of permit is forbid.",
      "id": 134
    },
    {
      "topic": "Comprehension",
      "difficulty": "hard",
      "question": "Read the passage: 'The library extended its hours during the examination period, and student visits doubled.' What can be inferred?",
      "options": [
        "students stopped studying",
        "the library closed",
        "books became fewer",
        "longer hours increased library use"
      ],
      "answer": 3,
      "explanation": "Extended hours led to higher usage.",
      "id": 135
    },
    {
      "topic": "Comprehension",
      "difficulty": "hard",
      "question": "Read the passage: 'Farmers adopted drought-resistant seeds, which helped stabilize yields during dry seasons.' What can be inferred?",
      "options": [
        "new seeds improved harvests in dry periods",
        "rainfall increased sharply",
        "yields fell further",
        "seeds were rejected"
      ],
      "answer": 0,
      "explanation": "Drought-resistant seeds stabilized yields.",
      "id": 136
    },
    {
      "topic": "Comprehension",
      "difficulty": "hard",
      "question": "Read the passage: 'The coach emphasized teamwork and communication, and the team's performance improved.' What can be inferred?",
      "options": [
        "the team ignored the coach",
        "teamwork helped performance",
        "communication reduced performance",
        "training was canceled"
      ],
      "answer": 1,
      "explanation": "Emphasis on teamwork improved results.",
      "id": 137
    },
    {
      "topic": "Comprehension",
      "difficulty": "hard",
      "question": "Read the passage: 'A new health campaign encouraged handwashing, reducing reported infections in schools.' What can be inferred?",
      "options": [
        "infections increased",
        "schools closed",
        "handwashing reduced infections",
        "handwashing stopped"
      ],
      "answer": 2,
      "explanation": "Reported infections reduced after campaign.",
      "id": 138
    },
    {
      "topic": "Comprehension",
      "difficulty": "hard",
      "question": "Read the passage: 'The company upgraded its machines, cutting production time and costs.' What can be inferred?",
      "options": [
        "costs rose",
        "production stopped",
        "machines were removed",
        "automation improved efficiency"
      ],
      "answer": 3,
      "explanation": "Upgrade reduced time and cost.",
      "id": 139
    },
    {
      "topic": "Comprehension",
      "difficulty": "hard",
      "question": "Read the passage: 'The town repaired its drainage system, and flooding became less frequent.' What can be inferred?",
      "options": [
        "better drainage reduced flooding",
        "rainfall ended",
        "drainage was blocked",
        "floods worsened"
      ],
      "answer": 0,
      "explanation": "Improved drainage reduced floods.",
      "id": 140
    },
    {
      "topic": "Comprehension",
      "difficulty": "hard",
      "question": "Read the passage: 'Students formed study groups, and average scores rose across the class.' What can be inferred?",
      "options": [
        "scores fell",
        "collaboration improved results",
        "groups disbanded",
        "students stopped studying"
      ],
      "answer": 1,
      "explanation": "Study groups improved scores.",
      "id": 141
    },
    {
      "topic": "Comprehension",
      "difficulty": "hard",
      "question": "Read the passage: 'The market introduced price labels, and customers complained less about overcharging.' What can be inferred?",
      "options": [
        "prices doubled",
        "labels were removed",
        "price labels increased transparency",
        "complaints increased"
      ],
      "answer": 2,
      "explanation": "Labels reduced complaints.",
      "id": 142
    },
    {
      "topic": "Comprehension",
      "difficulty": "hard",
      "question": "Read the passage: 'The village built a borehole, providing clean water and reducing waterborne disease.' What can be inferred?",
      "options": [
        "disease increased",
        "water scarcity worsened",
        "borehole failed",
        "clean water improved health"
      ],
      "answer": 3,
      "explanation": "Clean water reduced disease.",
      "id": 143
    },
    {
      "topic": "Comprehension",
      "difficulty": "hard",
      "question": "Read the passage: 'The school planted trees around the compound, creating shade and cooler classrooms.' What can be inferred?",
      "options": [
        "trees improved learning environment",
        "classrooms became hotter",
        "trees were removed",
        "students stopped attending"
      ],
      "answer": 0,
      "explanation": "Shade cooled the classrooms.",
      "id": 144
    },
    {
      "topic": "Comprehension",
      "difficulty": "hard",
      "question": "Read the passage: 'In many schools, teachers noticed that students who planned their study time performed better than those who relied on last-minute reading. One group created a weekly timetable, assigning short study sessions to each subject and reviewing notes after every class. Over several weeks, their confidence grew. They asked more questions in class, corrected their mistakes quickly, and improved their test scores. Another group only studied a day before exams and often felt anxious, forgetting key points. The difference was not only in time spent, but in how consistently the time was managed.' What is the main idea?",
      "options": [
        "late reading is always effective",
        "consistent planning improved performance",
        "short study sessions reduce learning",
        "asking questions lowers confidence"
      ],
      "answer": 1,
      "explanation": "The passage links consistent planning with better outcomes.",
      "id": 145
    },
    {
      "topic": "Comprehension",
      "difficulty": "hard",
      "question": "Read the passage: 'A community health team encouraged households to boil water and cover storage containers. They also repaired broken taps that allowed dirty water to seep into pipes. Within two months, clinic records showed fewer cases of diarrhea, and children missed fewer school days. The team noted that the changes were simple and inexpensive, but the impact was significant because families practiced them daily.' What is the main idea?",
      "options": [
        "water boiling caused sickness",
        "repairs increased contamination",
        "simple hygiene actions reduced illness",
        "health records worsened"
      ],
      "answer": 2,
      "explanation": "Daily hygiene practices reduced disease.",
      "id": 146
    },
    {
      "topic": "Comprehension",
      "difficulty": "hard",
      "question": "Read the passage: 'During the dry season, farmers who planted early-maturing maize varieties harvested before the worst heat arrived. Others who used late-maturing seeds faced lower yields and higher pest attacks. The early harvest gave some farmers extra income, which they invested in better storage bags and fertilizers for the next season.' What is the main idea?",
      "options": [
        "late varieties always yield more",
        "pests prefer early crops",
        "storage bags reduce heat",
        "seed choice affected harvest timing and income"
      ],
      "answer": 3,
      "explanation": "Early-maturing seeds helped farmers avoid losses.",
      "id": 147
    },
    {
      "topic": "Comprehension",
      "difficulty": "hard",
      "question": "Read the passage: 'A town introduced separate bins for plastic, paper, and organic waste. At first, some residents complained that sorting took extra effort. After a few months, the recycling center reported higher recovery rates, and streets became cleaner because less waste overflowed. The town also saved money on landfill fees.' What is the main idea?",
      "options": [
        "sorting waste improved cleanliness and reduced costs",
        "recycling increased landfill fees",
        "sorting reduced recovery rates",
        "streets became dirtier"
      ],
      "answer": 0,
      "explanation": "Sorting improved recycling and reduced costs.",
      "id": 148
    },
    {
      "topic": "Comprehension",
      "difficulty": "hard",
      "question": "Read the passage: 'A small business adopted digital payments to reduce cash handling. Customers paid using mobile transfers, which reduced theft and made daily sales easier to track. The owner used the transaction records to identify peak sales hours and adjusted staffing accordingly. This improved customer service without increasing costs.' What is the main idea?",
      "options": [
        "digital payments increased theft",
        "digital records helped improve business decisions",
        "tracking sales became harder",
        "staffing changes reduced service"
      ],
      "answer": 1,
      "explanation": "Digital records supported better planning.",
      "id": 149
    },
    {
      "topic": "Comprehension",
      "difficulty": "hard",
      "question": "Read the passage: 'In a literature club, members compared two stories about migration. One story focused on the hardships of leaving home, while the other highlighted hope and new opportunities. The discussion helped students see that writers can present the same theme from different perspectives, changing the reader's emotional response.' What is the main idea?",
      "options": [
        "themes never change",
        "writers avoid emotional response",
        "perspective shapes how a theme is felt",
        "hardship and hope cannot coexist"
      ],
      "answer": 2,
      "explanation": "Different perspectives alter reader response.",
      "id": 150
    }
  ],
  "physics": [
    {
      "topic": "Units",
      "difficulty": "easy",
      "question": "What is the SI unit of force?",
      "options": [
        "joule",
        "watt",
        "newton",
        "pascal"
      ],
      "answer": 2,
      "explanation": "Force is measured in newtons.",
      "id": 1
    },
    {
      "topic": "Units",
      "difficulty": "easy",
      "question": "What is the SI unit of power?",
      "options": [
        "joule",
        "newton",
        "volt",
        "watt"
      ],
      "answer": 3,
      "explanation": "Power is measured in watts.",
      "id": 2
    },
    {
      "topic": "Units",
      "difficulty": "easy",
      "question": "What is the SI unit of pressure?",
      "options": [
        "pascal",
        "newton",
        "joule",
        "watt"
      ],
      "answer": 0,
      "explanation": "Pressure is measured in pascals.",
      "id": 3
    },
    {
      "topic": "Units",
      "difficulty": "easy",
      "question": "What is the SI unit of electric current?",
      "options": [
        "volt",
        "ampere",
        "ohm",
        "coulomb"
      ],
      "answer": 1,
      "explanation": "Current is measured in amperes.",
      "id": 4
    },
    {
      "topic": "Units",
      "difficulty": "easy",
      "question": "Which prefix means 10^6?",
      "options": [
        "kilo",
        "micro",
        "mega",
        "nano"
      ],
      "answer": 2,
      "explanation": "Mega means one million.",
      "id": 5
    },
    {
      "topic": "Units",
      "difficulty": "easy",
      "question": "Which instrument measures electric current?",
      "options": [
        "voltmeter",
        "barometer",
        "thermometer",
        "ammeter"
      ],
      "answer": 3,
      "explanation": "An ammeter measures current.",
      "id": 6
    },
    {
      "topic": "Units",
      "difficulty": "easy",
      "question": "A micrometer screw gauge is used to measure ___.",
      "options": [
        "small thickness",
        "temperature",
        "time",
        "mass"
      ],
      "answer": 0,
      "explanation": "It measures small lengths.",
      "id": 7
    },
    {
      "topic": "Units",
      "difficulty": "easy",
      "question": "The SI unit of time is ___.",
      "options": [
        "second",
        "hertz",
        "meter",
        "watt"
      ],
      "answer": 0,
      "explanation": "Time is measured in seconds.",
      "id": 8
    },
    {
      "topic": "Units",
      "difficulty": "easy",
      "question": "The unit of density is ___.",
      "options": [
        "m/s",
        "N/m",
        "kg/m^3",
        "J/s"
      ],
      "answer": 2,
      "explanation": "Density = mass/volume.",
      "id": 9
    },
    {
      "topic": "Units",
      "difficulty": "easy",
      "question": "The unit of work is ___.",
      "options": [
        "watt",
        "newton",
        "pascal",
        "joule"
      ],
      "answer": 3,
      "explanation": "Work is measured in joules.",
      "id": 10
    },
    {
      "topic": "Kinematics",
      "difficulty": "medium",
      "question": "A car speeds up from 0 to 20 m/s in 4 s. Find its acceleration.",
      "options": [
        "5 m/s^2",
        "4 m/s^2",
        "10 m/s^2",
        "20 m/s^2"
      ],
      "answer": 0,
      "explanation": "a = (v-u)/t.",
      "id": 11
    },
    {
      "topic": "Kinematics",
      "difficulty": "medium",
      "question": "A body starts from rest and accelerates at 2 m/s^2 for 5 s. Find the distance covered.",
      "options": [
        "10 m",
        "25 m",
        "15 m",
        "50 m"
      ],
      "answer": 1,
      "explanation": "s = 1/2 a t^2.",
      "id": 12
    },
    {
      "topic": "Kinematics",
      "difficulty": "easy",
      "question": "A runner covers 100 m in 12.5 s. Find the average speed.",
      "options": [
        "6 m/s",
        "10 m/s",
        "8 m/s",
        "12 m/s"
      ],
      "answer": 2,
      "explanation": "Speed = distance/time.",
      "id": 13
    },
    {
      "topic": "Kinematics",
      "difficulty": "medium",
      "question": "A train moving at 15 m/s slows uniformly to 5 m/s in 5 s. Find its acceleration.",
      "options": [
        "2 m/s^2",
        "-5 m/s^2",
        "-1 m/s^2",
        "-2 m/s^2"
      ],
      "answer": 3,
      "explanation": "a = (v-u)/t.",
      "id": 14
    },
    {
      "topic": "Kinematics",
      "difficulty": "easy",
      "question": "A car travels 180 km in 3 hours. Find its speed.",
      "options": [
        "60 km/h",
        "45 km/h",
        "50 km/h",
        "90 km/h"
      ],
      "answer": 0,
      "explanation": "Speed = distance/time.",
      "id": 15
    },
    {
      "topic": "Kinematics",
      "difficulty": "easy",
      "question": "A body moves with constant speed. Its acceleration is ___.",
      "options": [
        "increasing",
        "zero",
        "decreasing",
        "negative"
      ],
      "answer": 1,
      "explanation": "Constant speed means zero acceleration.",
      "id": 16
    },
    {
      "topic": "Kinematics",
      "difficulty": "easy",
      "question": "If a body moves at 10 m/s for 6 s, the distance covered is ___.",
      "options": [
        "16 m",
        "30 m",
        "60 m",
        "120 m"
      ],
      "answer": 2,
      "explanation": "s = vt.",
      "id": 17
    },
    {
      "topic": "Kinematics",
      "difficulty": "easy",
      "question": "A stone is dropped from rest. After 2 s, its speed is (g = 10 m/s^2) ___.",
      "options": [
        "10 m/s",
        "30 m/s",
        "40 m/s",
        "20 m/s"
      ],
      "answer": 3,
      "explanation": "v = gt.",
      "id": 18
    },
    {
      "topic": "Kinematics",
      "difficulty": "easy",
      "question": "A body moves with acceleration 3 m/s^2 for 4 s from rest. Find its final velocity.",
      "options": [
        "12 m/s",
        "6 m/s",
        "9 m/s",
        "15 m/s"
      ],
      "answer": 0,
      "explanation": "v = u + at.",
      "id": 19
    },
    {
      "topic": "Kinematics",
      "difficulty": "easy",
      "question": "A car covers 150 m in 10 s. Find its average speed.",
      "options": [
        "10 m/s",
        "15 m/s",
        "12 m/s",
        "20 m/s"
      ],
      "answer": 1,
      "explanation": "Speed = distance/time.",
      "id": 20
    },
    {
      "topic": "Kinematics",
      "difficulty": "medium",
      "question": "A body changes velocity from 5 m/s to 25 m/s in 4 s. Find acceleration.",
      "options": [
        "4 m/s^2",
        "6 m/s^2",
        "5 m/s^2",
        "10 m/s^2"
      ],
      "answer": 2,
      "explanation": "a = (v-u)/t.",
      "id": 21
    },
    {
      "topic": "Kinematics",
      "difficulty": "medium",
      "question": "If s = 1/2 at^2 and a = 4 m/s^2, t = 3 s, find s.",
      "options": [
        "6 m",
        "12 m",
        "24 m",
        "18 m"
      ],
      "answer": 3,
      "explanation": "s = 0.5 x 4 x 9.",
      "id": 22
    },
    {
      "topic": "Kinematics",
      "difficulty": "easy",
      "question": "A car moves at 20 m/s for 15 s. Distance covered is ___.",
      "options": [
        "300 m",
        "200 m",
        "250 m",
        "350 m"
      ],
      "answer": 0,
      "explanation": "s = vt.",
      "id": 23
    },
    {
      "topic": "Kinematics",
      "difficulty": "medium",
      "question": "A ball is thrown upward with speed 20 m/s. Time to reach max height (g=10) is ___.",
      "options": [
        "1 s",
        "2 s",
        "3 s",
        "4 s"
      ],
      "answer": 1,
      "explanation": "t = u/g.",
      "id": 24
    },
    {
      "topic": "Kinematics",
      "difficulty": "medium",
      "question": "A body accelerates uniformly from 2 m/s to 12 m/s in 5 s. Find acceleration.",
      "options": [
        "1 m/s^2",
        "3 m/s^2",
        "2 m/s^2",
        "4 m/s^2"
      ],
      "answer": 2,
      "explanation": "a = (12-2)/5.",
      "id": 25
    },
    {
      "topic": "Dynamics",
      "difficulty": "medium",
      "question": "Find the momentum of a 2 kg mass moving at 3 m/s.",
      "options": [
        "2 kg m/s",
        "9 kg m/s",
        "12 kg m/s",
        "6 kg m/s"
      ],
      "answer": 3,
      "explanation": "p = mv.",
      "id": 26
    },
    {
      "topic": "Dynamics",
      "difficulty": "hard",
      "question": "A 2 kg body moving at 4 m/s collides and sticks to a 1 kg body at rest. Find the final velocity.",
      "options": [
        "2.67 m/s",
        "3.0 m/s",
        "4.0 m/s",
        "1.33 m/s"
      ],
      "answer": 0,
      "explanation": "Conservation of momentum.",
      "id": 27
    },
    {
      "topic": "Dynamics",
      "difficulty": "medium",
      "question": "A force of 20 N acts on a 5 kg mass. Find the acceleration.",
      "options": [
        "2 m/s^2",
        "4 m/s^2",
        "5 m/s^2",
        "10 m/s^2"
      ],
      "answer": 1,
      "explanation": "a = F/m.",
      "id": 28
    },
    {
      "topic": "Dynamics",
      "difficulty": "easy",
      "question": "A force of 200 N acts on an area of 0.5 m^2. Find the pressure.",
      "options": [
        "100 Pa",
        "200 Pa",
        "400 Pa",
        "800 Pa"
      ],
      "answer": 2,
      "explanation": "Pressure = force/area.",
      "id": 29
    },
    {
      "topic": "Dynamics",
      "difficulty": "easy",
      "question": "A body weighs 12 N in air and 8 N in water. The upthrust is ___.",
      "options": [
        "8 N",
        "12 N",
        "20 N",
        "4 N"
      ],
      "answer": 3,
      "explanation": "Upthrust = loss in weight.",
      "id": 30
    },
    {
      "topic": "Dynamics",
      "difficulty": "easy",
      "question": "The unit of momentum is ___.",
      "options": [
        "kg m/s",
        "N",
        "J",
        "W"
      ],
      "answer": 0,
      "explanation": "Momentum = mass x velocity.",
      "id": 31
    },
    {
      "topic": "Dynamics",
      "difficulty": "easy",
      "question": "The force that opposes motion between surfaces is ___.",
      "options": [
        "thrust",
        "friction",
        "tension",
        "pressure"
      ],
      "answer": 1,
      "explanation": "Friction opposes motion.",
      "id": 32
    },
    {
      "topic": "Dynamics",
      "difficulty": "hard",
      "question": "A body of mass 10 kg is lifted with a force of 120 N. Find the acceleration (g = 10 m/s^2).",
      "options": [
        "0 m/s^2",
        "10 m/s^2",
        "2 m/s^2",
        "12 m/s^2"
      ],
      "answer": 2,
      "explanation": "Net force = 20 N, a = 2.",
      "id": 33
    },
    {
      "topic": "Dynamics",
      "difficulty": "easy",
      "question": "Newton's third law states that ___.",
      "options": [
        "force equals mass times acceleration",
        "energy is conserved",
        "pressure increases with depth",
        "every action has an equal and opposite reaction"
      ],
      "answer": 3,
      "explanation": "Third law is action-reaction.",
      "id": 34
    },
    {
      "topic": "Dynamics",
      "difficulty": "easy",
      "question": "The weight of a 5 kg mass (g=10) is ___.",
      "options": [
        "50 N",
        "5 N",
        "10 N",
        "500 N"
      ],
      "answer": 0,
      "explanation": "Weight = mg.",
      "id": 35
    },
    {
      "topic": "Dynamics",
      "difficulty": "medium",
      "question": "A 3 kg mass is pulled with a force of 9 N on a smooth surface. Acceleration is ___.",
      "options": [
        "1 m/s^2",
        "3 m/s^2",
        "2 m/s^2",
        "6 m/s^2"
      ],
      "answer": 1,
      "explanation": "a = F/m.",
      "id": 36
    },
    {
      "topic": "Dynamics",
      "difficulty": "easy",
      "question": "The center of gravity of a uniform rod is at its ___.",
      "options": [
        "end",
        "one-quarter",
        "midpoint",
        "one-third"
      ],
      "answer": 2,
      "explanation": "Uniform rod has CG at midpoint.",
      "id": 37
    },
    {
      "topic": "Energy",
      "difficulty": "easy",
      "question": "A force of 10 N moves an object 5 m. How much work is done?",
      "options": [
        "2 J",
        "15 J",
        "100 J",
        "50 J"
      ],
      "answer": 3,
      "explanation": "Work = force x distance.",
      "id": 38
    },
    {
      "topic": "Energy",
      "difficulty": "easy",
      "question": "If 100 J of energy is used in 5 s, the power is ___.",
      "options": [
        "20 W",
        "5 W",
        "50 W",
        "100 W"
      ],
      "answer": 0,
      "explanation": "Power = energy/time.",
      "id": 39
    },
    {
      "topic": "Energy",
      "difficulty": "medium",
      "question": "A 4 ohm resistor is connected to a 12 V supply. Find the power dissipated.",
      "options": [
        "12 W",
        "36 W",
        "24 W",
        "48 W"
      ],
      "answer": 1,
      "explanation": "P = V^2/R.",
      "id": 40
    },
    {
      "topic": "Energy",
      "difficulty": "easy",
      "question": "If useful output energy is 350 J and input energy is 500 J, the efficiency is ___.",
      "options": [
        "50%",
        "60%",
        "70%",
        "80%"
      ],
      "answer": 2,
      "explanation": "Efficiency = (350/500) x 100%.",
      "id": 41
    },
    {
      "topic": "Energy",
      "difficulty": "easy",
      "question": "Kinetic energy depends on ___.",
      "options": [
        "mass only",
        "speed only",
        "volume only",
        "mass and speed"
      ],
      "answer": 3,
      "explanation": "KE = 1/2 mv^2.",
      "id": 42
    },
    {
      "topic": "Energy",
      "difficulty": "easy",
      "question": "Potential energy of a body depends on ___.",
      "options": [
        "mass, g and height",
        "mass only",
        "speed only",
        "area only"
      ],
      "answer": 0,
      "explanation": "PE = mgh.",
      "id": 43
    },
    {
      "topic": "Energy",
      "difficulty": "medium",
      "question": "A 2 kg mass is raised 5 m. Gain in potential energy (g=10) is ___.",
      "options": [
        "10 J",
        "100 J",
        "50 J",
        "200 J"
      ],
      "answer": 1,
      "explanation": "PE = mgh.",
      "id": 44
    },
    {
      "topic": "Energy",
      "difficulty": "medium",
      "question": "A machine does 600 J of work in 20 s. Power is ___.",
      "options": [
        "12 W",
        "40 W",
        "30 W",
        "50 W"
      ],
      "answer": 2,
      "explanation": "Power = work/time.",
      "id": 45
    },
    {
      "topic": "Energy",
      "difficulty": "easy",
      "question": "Mechanical advantage of a machine is the ratio of ___.",
      "options": [
        "effort to load",
        "distance to time",
        "speed to time",
        "load to effort"
      ],
      "answer": 3,
      "explanation": "MA = load/effort.",
      "id": 46
    },
    {
      "topic": "Energy",
      "difficulty": "easy",
      "question": "Energy cannot be created or destroyed but can change form. This is the law of ___.",
      "options": [
        "conservation of energy",
        "Newton",
        "Boyle",
        "Hooke"
      ],
      "answer": 0,
      "explanation": "Energy is conserved.",
      "id": 47
    },
    {
      "topic": "Heat",
      "difficulty": "medium",
      "question": "Calculate the heat needed to raise 2 kg of water by 5 deg C (c = 4200 J/kgK).",
      "options": [
        "10500 J",
        "42000 J",
        "21000 J",
        "84000 J"
      ],
      "answer": 1,
      "explanation": "Q = mcT.",
      "id": 48
    },
    {
      "topic": "Heat",
      "difficulty": "medium",
      "question": "How much energy is required to melt 0.5 kg of ice if Lf = 3.3 x 10^5 J/kg?",
      "options": [
        "3.3 x 10^5 J",
        "6.6 x 10^5 J",
        "1.65 x 10^5 J",
        "1.32 x 10^5 J"
      ],
      "answer": 2,
      "explanation": "Q = mLf.",
      "id": 49
    },
    {
      "topic": "Heat",
      "difficulty": "easy",
      "question": "Convert 27 deg C to Kelvin.",
      "options": [
        "273 K",
        "327 K",
        "360 K",
        "300 K"
      ],
      "answer": 3,
      "explanation": "K = C + 273.",
      "id": 50
    },
    {
      "topic": "Heat",
      "difficulty": "easy",
      "question": "The boiling point of water at standard pressure is ___.",
      "options": [
        "100 deg C",
        "0 deg C",
        "50 deg C",
        "120 deg C"
      ],
      "answer": 0,
      "explanation": "Standard boiling point is 100 deg C.",
      "id": 51
    },
    {
      "topic": "Heat",
      "difficulty": "easy",
      "question": "The mode of heat transfer in a vacuum is ___.",
      "options": [
        "conduction",
        "radiation",
        "convection",
        "evaporation"
      ],
      "answer": 1,
      "explanation": "Only radiation occurs in vacuum.",
      "id": 52
    },
    {
      "topic": "Heat",
      "difficulty": "easy",
      "question": "A thermometer measures ___.",
      "options": [
        "pressure",
        "mass",
        "temperature",
        "time"
      ],
      "answer": 2,
      "explanation": "Thermometers measure temperature.",
      "id": 53
    },
    {
      "topic": "Heat",
      "difficulty": "medium",
      "question": "The latent heat of fusion is the heat needed to ___.",
      "options": [
        "raise temperature",
        "change liquid to gas",
        "increase pressure",
        "change solid to liquid without temperature change"
      ],
      "answer": 3,
      "explanation": "Latent heat changes state.",
      "id": 54
    },
    {
      "topic": "Heat",
      "difficulty": "easy",
      "question": "Which material is a good conductor of heat?",
      "options": [
        "copper",
        "wood",
        "plastic",
        "rubber"
      ],
      "answer": 0,
      "explanation": "Metals conduct heat.",
      "id": 55
    },
    {
      "topic": "Heat",
      "difficulty": "easy",
      "question": "Heat energy flows from ___.",
      "options": [
        "cold to hot",
        "hotter to colder bodies",
        "fast to slow",
        "heavy to light"
      ],
      "answer": 1,
      "explanation": "Heat flows down temperature gradient.",
      "id": 56
    },
    {
      "topic": "Heat",
      "difficulty": "medium",
      "question": "The device used to measure relative humidity is a ___.",
      "options": [
        "barometer",
        "thermometer",
        "hygrometer",
        "ammeter"
      ],
      "answer": 2,
      "explanation": "Hygrometer measures humidity.",
      "id": 57
    },
    {
      "topic": "Gas Laws",
      "difficulty": "medium",
      "question": "A gas at 300 K occupies 2 L. At constant pressure, what volume will it occupy at 450 K?",
      "options": [
        "2.5 L",
        "3.5 L",
        "4.0 L",
        "3.0 L"
      ],
      "answer": 3,
      "explanation": "Charles' law.",
      "id": 58
    },
    {
      "topic": "Gas Laws",
      "difficulty": "easy",
      "question": "At constant temperature, if the pressure of a gas doubles, its volume ___.",
      "options": [
        "halves",
        "doubles",
        "remains the same",
        "quadruples"
      ],
      "answer": 0,
      "explanation": "Boyle's law.",
      "id": 59
    },
    {
      "topic": "Gas Laws",
      "difficulty": "medium",
      "question": "A gas occupies 4 L at 100 kPa. At 200 kPa, the volume is ___.",
      "options": [
        "1 L",
        "2 L",
        "4 L",
        "8 L"
      ],
      "answer": 1,
      "explanation": "P1V1 = P2V2.",
      "id": 60
    },
    {
      "topic": "Gas Laws",
      "difficulty": "easy",
      "question": "Which law states that V is proportional to T at constant pressure?",
      "options": [
        "Boyle's law",
        "Avogadro's law",
        "Charles' law",
        "Dalton's law"
      ],
      "answer": 2,
      "explanation": "Charles' law relates V and T.",
      "id": 61
    },
    {
      "topic": "Gas Laws",
      "difficulty": "easy",
      "question": "If pressure is constant and temperature increases, volume ___.",
      "options": [
        "decreases",
        "stays the same",
        "becomes zero",
        "increases"
      ],
      "answer": 3,
      "explanation": "Charles' law.",
      "id": 62
    },
    {
      "topic": "Gas Laws",
      "difficulty": "medium",
      "question": "A gas at constant volume has temperature raised. The pressure ___.",
      "options": [
        "increases",
        "decreases",
        "stays the same",
        "becomes zero"
      ],
      "answer": 0,
      "explanation": "Gay-Lussac's law.",
      "id": 63
    },
    {
      "topic": "Waves",
      "difficulty": "medium",
      "question": "A wave has frequency 6 Hz and wavelength 0.5 m. Find its speed.",
      "options": [
        "2 m/s",
        "3 m/s",
        "6 m/s",
        "12 m/s"
      ],
      "answer": 1,
      "explanation": "v = f x lambda.",
      "id": 64
    },
    {
      "topic": "Waves",
      "difficulty": "medium",
      "question": "An echo is heard 0.8 s after a sound is made. If speed of sound is 340 m/s, find the distance to the reflecting wall.",
      "options": [
        "68 m",
        "170 m",
        "136 m",
        "272 m"
      ],
      "answer": 2,
      "explanation": "Distance = (v x t)/2.",
      "id": 65
    },
    {
      "topic": "Waves",
      "difficulty": "easy",
      "question": "Sound cannot travel through ___.",
      "options": [
        "air",
        "water",
        "steel",
        "vacuum"
      ],
      "answer": 3,
      "explanation": "Sound needs a medium.",
      "id": 66
    },
    {
      "topic": "Waves",
      "difficulty": "medium",
      "question": "A wave with period 0.2 s has frequency ___.",
      "options": [
        "5 Hz",
        "0.2 Hz",
        "2 Hz",
        "10 Hz"
      ],
      "answer": 0,
      "explanation": "f = 1/T.",
      "id": 67
    },
    {
      "topic": "Waves",
      "difficulty": "easy",
      "question": "The part of a wave with maximum displacement is the ___.",
      "options": [
        "trough",
        "crest",
        "node",
        "axis"
      ],
      "answer": 1,
      "explanation": "Maximum positive displacement is crest.",
      "id": 68
    },
    {
      "topic": "Waves",
      "difficulty": "easy",
      "question": "The unit of wavelength is ___.",
      "options": [
        "hertz",
        "newton",
        "meter",
        "joule"
      ],
      "answer": 2,
      "explanation": "Wavelength is length.",
      "id": 69
    },
    {
      "topic": "Waves",
      "difficulty": "easy",
      "question": "Refraction is the ___.",
      "options": [
        "mixing of waves",
        "stopping of waves",
        "breaking of waves",
        "bending of waves"
      ],
      "answer": 3,
      "explanation": "Refraction is bending due to speed change.",
      "id": 70
    },
    {
      "topic": "Waves",
      "difficulty": "hard",
      "question": "Two waves of the same frequency moving in the same direction interfere. The phenomenon is ___.",
      "options": [
        "superposition",
        "diffraction",
        "reflection",
        "polarization"
      ],
      "answer": 0,
      "explanation": "Waves add by superposition.",
      "id": 71
    },
    {
      "topic": "Waves",
      "difficulty": "easy",
      "question": "A note with higher pitch has ___.",
      "options": [
        "lower frequency",
        "higher frequency",
        "lower speed",
        "larger wavelength"
      ],
      "answer": 1,
      "explanation": "Pitch depends on frequency.",
      "id": 72
    },
    {
      "topic": "Waves",
      "difficulty": "medium",
      "question": "The speed of sound in air increases when temperature ___.",
      "options": [
        "decreases",
        "stays the same",
        "increases",
        "becomes zero"
      ],
      "answer": 2,
      "explanation": "Speed increases with temperature.",
      "id": 73
    },
    {
      "topic": "Optics",
      "difficulty": "hard",
      "question": "A convex lens has focal length 10 cm. An object is 30 cm from the lens. Find the image distance.",
      "options": [
        "10 cm",
        "20 cm",
        "30 cm",
        "15 cm"
      ],
      "answer": 3,
      "explanation": "1/f = 1/u + 1/v.",
      "id": 74
    },
    {
      "topic": "Optics",
      "difficulty": "hard",
      "question": "The refractive index of glass is 1.5. Find the critical angle for glass-air.",
      "options": [
        "42 deg",
        "30 deg",
        "48 deg",
        "60 deg"
      ],
      "answer": 0,
      "explanation": "sin c = 1/n.",
      "id": 75
    },
    {
      "topic": "Optics",
      "difficulty": "easy",
      "question": "A mirror that converges light is ___.",
      "options": [
        "convex",
        "concave",
        "plane",
        "prism"
      ],
      "answer": 1,
      "explanation": "Concave mirrors converge light.",
      "id": 76
    },
    {
      "topic": "Optics",
      "difficulty": "easy",
      "question": "The image formed by a plane mirror is ___.",
      "options": [
        "real and inverted",
        "virtual and smaller",
        "virtual and same size",
        "real and larger"
      ],
      "answer": 2,
      "explanation": "Plane mirrors give virtual images.",
      "id": 77
    },
    {
      "topic": "Optics",
      "difficulty": "easy",
      "question": "The bending of light as it passes from one medium to another is called ___.",
      "options": [
        "reflection",
        "diffraction",
        "dispersion",
        "refraction"
      ],
      "answer": 3,
      "explanation": "Refraction is bending due to speed change.",
      "id": 78
    },
    {
      "topic": "Optics",
      "difficulty": "medium",
      "question": "The focal length of a concave mirror is 20 cm. The radius of curvature is ___.",
      "options": [
        "40 cm",
        "10 cm",
        "20 cm",
        "60 cm"
      ],
      "answer": 0,
      "explanation": "R = 2f.",
      "id": 79
    },
    {
      "topic": "Optics",
      "difficulty": "easy",
      "question": "Which color of light has the longest wavelength?",
      "options": [
        "blue",
        "red",
        "green",
        "violet"
      ],
      "answer": 1,
      "explanation": "Red has longest wavelength.",
      "id": 80
    },
    {
      "topic": "Optics",
      "difficulty": "easy",
      "question": "A real image formed by a convex lens is ___.",
      "options": [
        "upright",
        "virtual",
        "inverted",
        "smaller only"
      ],
      "answer": 2,
      "explanation": "Real images are inverted.",
      "id": 81
    },
    {
      "topic": "Electricity",
      "difficulty": "easy",
      "question": "If V = 12 V and I = 3 A, the resistance is ___.",
      "options": [
        "3 ohm",
        "6 ohm",
        "12 ohm",
        "4 ohm"
      ],
      "answer": 3,
      "explanation": "R = V/I.",
      "id": 82
    },
    {
      "topic": "Electricity",
      "difficulty": "easy",
      "question": "Find the equivalent resistance of 2 ohm and 3 ohm connected in series.",
      "options": [
        "5 ohm",
        "1.2 ohm",
        "6 ohm",
        "0.6 ohm"
      ],
      "answer": 0,
      "explanation": "Series resistances add.",
      "id": 83
    },
    {
      "topic": "Electricity",
      "difficulty": "medium",
      "question": "Find the equivalent resistance of 6 ohm and 3 ohm connected in parallel.",
      "options": [
        "3 ohm",
        "2 ohm",
        "4 ohm",
        "9 ohm"
      ],
      "answer": 1,
      "explanation": "1/R = 1/6 + 1/3.",
      "id": 84
    },
    {
      "topic": "Electricity",
      "difficulty": "easy",
      "question": "A device uses 2 A at 240 V. Its power is ___.",
      "options": [
        "120 W",
        "240 W",
        "480 W",
        "720 W"
      ],
      "answer": 2,
      "explanation": "P = VI.",
      "id": 85
    },
    {
      "topic": "Electricity",
      "difficulty": "easy",
      "question": "A fuse is used to ___.",
      "options": [
        "increase voltage",
        "store charge",
        "reduce resistance",
        "protect circuits from excess current"
      ],
      "answer": 3,
      "explanation": "Fuse melts when current is too high.",
      "id": 86
    },
    {
      "topic": "Electricity",
      "difficulty": "easy",
      "question": "The unit of electrical resistance is ___.",
      "options": [
        "ohm",
        "volt",
        "ampere",
        "coulomb"
      ],
      "answer": 0,
      "explanation": "Resistance is measured in ohms.",
      "id": 87
    },
    {
      "topic": "Electricity",
      "difficulty": "easy",
      "question": "A 12 V battery supplies 3 A. Power is ___.",
      "options": [
        "9 W",
        "36 W",
        "15 W",
        "48 W"
      ],
      "answer": 1,
      "explanation": "P = VI.",
      "id": 88
    },
    {
      "topic": "Electricity",
      "difficulty": "medium",
      "question": "The kilowatt-hour is a unit of ___.",
      "options": [
        "energy",
        "power",
        "current",
        "voltage"
      ],
      "answer": 0,
      "explanation": "kWh is a unit of energy.",
      "id": 89
    },
    {
      "topic": "Electricity",
      "difficulty": "easy",
      "question": "A 6 ohm resistor carries 2 A. The voltage across it is ___.",
      "options": [
        "8 V",
        "3 V",
        "6 V",
        "12 V"
      ],
      "answer": 3,
      "explanation": "V = IR.",
      "id": 90
    },
    {
      "topic": "Electricity",
      "difficulty": "easy",
      "question": "The unit of electric charge is ___.",
      "options": [
        "coulomb",
        "ampere",
        "volt",
        "ohm"
      ],
      "answer": 0,
      "explanation": "Charge is measured in coulombs.",
      "id": 91
    },
    {
      "topic": "Electricity",
      "difficulty": "medium",
      "question": "A series circuit has total resistance 10 ohm and current 2 A. Supply voltage is ___.",
      "options": [
        "5 V",
        "20 V",
        "10 V",
        "40 V"
      ],
      "answer": 1,
      "explanation": "V = IR.",
      "id": 92
    },
    {
      "topic": "Electricity",
      "difficulty": "easy",
      "question": "The device used to measure voltage is a ___.",
      "options": [
        "ammeter",
        "galvanometer",
        "voltmeter",
        "barometer"
      ],
      "answer": 2,
      "explanation": "Voltmeter measures voltage.",
      "id": 93
    },
    {
      "topic": "Magnetism",
      "difficulty": "medium",
      "question": "Which device uses the motor effect?",
      "options": [
        "generator",
        "transformer",
        "rectifier",
        "electric motor"
      ],
      "answer": 3,
      "explanation": "Motor effect produces force on a conductor.",
      "id": 94
    },
    {
      "topic": "Magnetism",
      "difficulty": "medium",
      "question": "Lenz's law states that the induced current ___.",
      "options": [
        "opposes the change",
        "aids the change",
        "is zero",
        "flows only in a vacuum"
      ],
      "answer": 0,
      "explanation": "Induced current opposes the change.",
      "id": 95
    },
    {
      "topic": "Magnetism",
      "difficulty": "medium",
      "question": "A transformer works on the principle of ___.",
      "options": [
        "electrolysis",
        "electromagnetic induction",
        "static electricity",
        "refraction"
      ],
      "answer": 1,
      "explanation": "Transformers use induction.",
      "id": 96
    },
    {
      "topic": "Magnetism",
      "difficulty": "easy",
      "question": "The region around a magnet where its effect is felt is the ___.",
      "options": [
        "electric field",
        "gravitational field",
        "magnetic field",
        "circuit"
      ],
      "answer": 2,
      "explanation": "Magnets produce magnetic fields.",
      "id": 97
    },
    {
      "topic": "Magnetism",
      "difficulty": "easy",
      "question": "The north pole of a magnet attracts the ___ pole of another magnet.",
      "options": [
        "north",
        "neutral",
        "both",
        "south"
      ],
      "answer": 3,
      "explanation": "Unlike poles attract.",
      "id": 98
    },
    {
      "topic": "Modern Physics",
      "difficulty": "hard",
      "question": "A sample has a half-life of 2 days. If its initial mass is 80 g, what is the mass after 6 days?",
      "options": [
        "10 g",
        "5 g",
        "20 g",
        "40 g"
      ],
      "answer": 0,
      "explanation": "After 3 half-lives: 80->40->20->10.",
      "id": 99
    },
    {
      "topic": "Modern Physics",
      "difficulty": "hard",
      "question": "If the length of a simple pendulum is quadrupled, the period becomes ___.",
      "options": [
        "half",
        "double",
        "four times",
        "unchanged"
      ],
      "answer": 1,
      "explanation": "T is proportional to sqrt(l).",
      "id": 100
    },
    {
      "topic": "Simple Machines",
      "difficulty": "easy",
      "question": "Mechanical advantage is defined as ___.",
      "options": [
        "effort/load",
        "distance/time",
        "load/effort",
        "force/area"
      ],
      "answer": 2,
      "explanation": "MA = load divided by effort.",
      "id": 101
    },
    {
      "topic": "Simple Machines",
      "difficulty": "medium",
      "question": "Velocity ratio of a machine is ___.",
      "options": [
        "load/effort",
        "force/area",
        "work/time",
        "distance moved by effort / distance moved by load"
      ],
      "answer": 3,
      "explanation": "VR is a distance ratio.",
      "id": 102
    },
    {
      "topic": "Simple Machines",
      "difficulty": "medium",
      "question": "Efficiency of a machine is given by ___.",
      "options": [
        "MA/VR x 100%",
        "VR/MA x 100%",
        "MA + VR",
        "load/effort x 100%"
      ],
      "answer": 0,
      "explanation": "Efficiency = (MA/VR) x 100%.",
      "id": 103
    },
    {
      "topic": "Simple Machines",
      "difficulty": "easy",
      "question": "A force of 10 N acts at 2 m from a pivot. The moment is ___.",
      "options": [
        "5 Nm",
        "20 Nm",
        "12 Nm",
        "40 Nm"
      ],
      "answer": 1,
      "explanation": "Moment = F x distance.",
      "id": 104
    },
    {
      "topic": "Simple Machines",
      "difficulty": "medium",
      "question": "If a lever has effort arm 20 cm and load arm 5 cm, MA is ___.",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "answer": 2,
      "explanation": "MA = effort arm / load arm.",
      "id": 105
    },
    {
      "topic": "Simple Machines",
      "difficulty": "easy",
      "question": "A 200 N load is lifted by a 50 N effort. MA is ___.",
      "options": [
        "2",
        "3",
        "5",
        "4"
      ],
      "answer": 3,
      "explanation": "MA = load/effort.",
      "id": 106
    },
    {
      "topic": "Simple Machines",
      "difficulty": "easy",
      "question": "If MA is 3 and effort is 30 N, the load is ___.",
      "options": [
        "90 N",
        "60 N",
        "120 N",
        "150 N"
      ],
      "answer": 0,
      "explanation": "Load = MA x effort.",
      "id": 107
    },
    {
      "topic": "Simple Machines",
      "difficulty": "hard",
      "question": "A machine has VR 5 and efficiency 60%. MA is ___.",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "answer": 1,
      "explanation": "MA = efficiency x VR / 100.",
      "id": 108
    },
    {
      "topic": "Simple Machines",
      "difficulty": "medium",
      "question": "For a body in equilibrium, the sum of clockwise moments equals the sum of ___.",
      "options": [
        "forces",
        "energies",
        "anticlockwise moments",
        "pressures"
      ],
      "answer": 2,
      "explanation": "Moments balance at equilibrium.",
      "id": 109
    },
    {
      "topic": "Simple Machines",
      "difficulty": "easy",
      "question": "The center of gravity of a uniform square lamina is at its ___.",
      "options": [
        "edge",
        "corner",
        "diagonal",
        "center"
      ],
      "answer": 3,
      "explanation": "Uniform lamina has CG at center.",
      "id": 110
    },
    {
      "topic": "Electricity",
      "difficulty": "medium",
      "question": "Electrical energy used is given by ___.",
      "options": [
        "P x t",
        "V/I",
        "I/R",
        "R/I"
      ],
      "answer": 0,
      "explanation": "Energy = power x time.",
      "id": 111
    },
    {
      "topic": "Electricity",
      "difficulty": "easy",
      "question": "A 3 V bulb draws 0.5 A. Its resistance is ___.",
      "options": [
        "1.5 ohm",
        "6 ohm",
        "3 ohm",
        "9 ohm"
      ],
      "answer": 1,
      "explanation": "R = V/I.",
      "id": 112
    },
    {
      "topic": "Electricity",
      "difficulty": "easy",
      "question": "Two 4 ohm resistors in series have total resistance ___.",
      "options": [
        "2 ohm",
        "4 ohm",
        "8 ohm",
        "16 ohm"
      ],
      "answer": 2,
      "explanation": "Series resistances add.",
      "id": 113
    },
    {
      "topic": "Electricity",
      "difficulty": "medium",
      "question": "Two 6 ohm resistors in parallel have total resistance ___.",
      "options": [
        "6 ohm",
        "12 ohm",
        "9 ohm",
        "3 ohm"
      ],
      "answer": 3,
      "explanation": "1/R = 1/6 + 1/6.",
      "id": 114
    },
    {
      "topic": "Electricity",
      "difficulty": "easy",
      "question": "The unit of power is ___.",
      "options": [
        "watt",
        "joule",
        "volt",
        "ohm"
      ],
      "answer": 0,
      "explanation": "Power is measured in watts.",
      "id": 115
    },
    {
      "topic": "Electricity",
      "difficulty": "medium",
      "question": "A device uses 60 W for 2 minutes. Energy used is ___.",
      "options": [
        "120 J",
        "7200 J",
        "3600 J",
        "6000 J"
      ],
      "answer": 1,
      "explanation": "E = P x t.",
      "id": 116
    },
    {
      "topic": "Electricity",
      "difficulty": "easy",
      "question": "A fuse is connected in ___ in a circuit.",
      "options": [
        "parallel",
        "both",
        "series",
        "neither"
      ],
      "answer": 2,
      "explanation": "Fuse must break the circuit.",
      "id": 117
    },
    {
      "topic": "Electricity",
      "difficulty": "medium",
      "question": "The device that converts AC to DC is a ___.",
      "options": [
        "transformer",
        "resistor",
        "inductor",
        "rectifier"
      ],
      "answer": 3,
      "explanation": "Rectifier converts AC to DC.",
      "id": 118
    },
    {
      "topic": "Electricity",
      "difficulty": "easy",
      "question": "Household appliances are connected in ___.",
      "options": [
        "parallel",
        "series",
        "both",
        "neither"
      ],
      "answer": 0,
      "explanation": "Parallel gives same voltage.",
      "id": 119
    },
    {
      "topic": "Electricity",
      "difficulty": "easy",
      "question": "Ohm's law states that V is proportional to ___.",
      "options": [
        "resistance",
        "current",
        "power",
        "charge"
      ],
      "answer": 1,
      "explanation": "V = IR.",
      "id": 120
    },
    {
      "topic": "Waves",
      "difficulty": "easy",
      "question": "Sound waves are ___.",
      "options": [
        "transverse",
        "electromagnetic",
        "longitudinal",
        "standing only"
      ],
      "answer": 2,
      "explanation": "Sound in air is longitudinal.",
      "id": 121
    },
    {
      "topic": "Waves",
      "difficulty": "easy",
      "question": "Frequency is the number of ___.",
      "options": [
        "waves per meter",
        "seconds per wave",
        "meters per second",
        "cycles per second"
      ],
      "answer": 3,
      "explanation": "Frequency counts cycles per second.",
      "id": 122
    },
    {
      "topic": "Waves",
      "difficulty": "easy",
      "question": "The unit of frequency is ___.",
      "options": [
        "hertz",
        "meter",
        "newton",
        "joule"
      ],
      "answer": 0,
      "explanation": "Frequency is in hertz.",
      "id": 123
    },
    {
      "topic": "Waves",
      "difficulty": "medium",
      "question": "Diffraction is the ___.",
      "options": [
        "reflection",
        "bending of waves around obstacles",
        "refraction",
        "absorption"
      ],
      "answer": 1,
      "explanation": "Diffraction spreads waves.",
      "id": 124
    },
    {
      "topic": "Waves",
      "difficulty": "medium",
      "question": "Resonance occurs when the driving frequency equals the ___.",
      "options": [
        "maximum amplitude",
        "speed of sound",
        "natural frequency",
        "wavelength"
      ],
      "answer": 2,
      "explanation": "Resonance at natural frequency.",
      "id": 125
    },
    {
      "topic": "Waves",
      "difficulty": "easy",
      "question": "The loudness of a sound depends on its ___.",
      "options": [
        "frequency",
        "speed",
        "wavelength",
        "amplitude"
      ],
      "answer": 3,
      "explanation": "Loudness depends on amplitude.",
      "id": 126
    },
    {
      "topic": "Waves",
      "difficulty": "easy",
      "question": "The distance between two successive crests is the ___.",
      "options": [
        "wavelength",
        "period",
        "frequency",
        "amplitude"
      ],
      "answer": 0,
      "explanation": "Wavelength is crest-to-crest.",
      "id": 127
    },
    {
      "topic": "Waves",
      "difficulty": "easy",
      "question": "Echo is due to ___.",
      "options": [
        "refraction",
        "reflection",
        "diffraction",
        "absorption"
      ],
      "answer": 1,
      "explanation": "Echo is reflected sound.",
      "id": 128
    },
    {
      "topic": "Waves",
      "difficulty": "medium",
      "question": "A wave with wavelength 2 m and speed 10 m/s has frequency ___.",
      "options": [
        "2 Hz",
        "10 Hz",
        "5 Hz",
        "20 Hz"
      ],
      "answer": 2,
      "explanation": "f = v / lambda.",
      "id": 129
    },
    {
      "topic": "Waves",
      "difficulty": "medium",
      "question": "When a wave enters a denser medium, its speed generally ___.",
      "options": [
        "increases",
        "remains the same",
        "becomes zero",
        "decreases"
      ],
      "answer": 3,
      "explanation": "Speed reduces in denser medium.",
      "id": 130
    },
    {
      "topic": "Optics",
      "difficulty": "medium",
      "question": "A convex lens forms a real image when the object is ___.",
      "options": [
        "beyond the focal length",
        "at the focal point",
        "between lens and focus",
        "at the lens"
      ],
      "answer": 0,
      "explanation": "Real image forms beyond focus.",
      "id": 131
    },
    {
      "topic": "Optics",
      "difficulty": "medium",
      "question": "Magnification is defined as ___.",
      "options": [
        "object height / image height",
        "image height / object height",
        "focal length / distance",
        "distance / time"
      ],
      "answer": 1,
      "explanation": "Magnification is a ratio of heights.",
      "id": 132
    },
    {
      "topic": "Optics",
      "difficulty": "hard",
      "question": "A concave mirror can produce a ___ image.",
      "options": [
        "only real",
        "only virtual",
        "real or virtual",
        "only upright"
      ],
      "answer": 2,
      "explanation": "Depends on object position.",
      "id": 133
    },
    {
      "topic": "Optics",
      "difficulty": "easy",
      "question": "The unit of focal length is ___.",
      "options": [
        "hertz",
        "newton",
        "watt",
        "meter"
      ],
      "answer": 3,
      "explanation": "Focal length is a length.",
      "id": 134
    },
    {
      "topic": "Optics",
      "difficulty": "medium",
      "question": "In refraction, light bends because its ___.",
      "options": [
        "speed changes",
        "frequency changes",
        "wavelength stays same",
        "amplitude becomes zero"
      ],
      "answer": 0,
      "explanation": "Speed change causes bending.",
      "id": 135
    },
    {
      "topic": "Optics",
      "difficulty": "easy",
      "question": "A plane mirror produces an image that is ___.",
      "options": [
        "larger",
        "same size",
        "smaller",
        "inverted only"
      ],
      "answer": 1,
      "explanation": "Plane mirror gives same size.",
      "id": 136
    },
    {
      "topic": "Optics",
      "difficulty": "medium",
      "question": "Total internal reflection occurs when light moves from ___.",
      "options": [
        "rarer to denser",
        "air to glass",
        "denser to rarer medium",
        "vacuum to air"
      ],
      "answer": 2,
      "explanation": "TIR needs denser to rarer.",
      "id": 137
    },
    {
      "topic": "Optics",
      "difficulty": "hard",
      "question": "If f = 15 cm and u = 30 cm for a convex lens, v = ___.",
      "options": [
        "15 cm",
        "10 cm",
        "45 cm",
        "30 cm"
      ],
      "answer": 3,
      "explanation": "1/f = 1/u + 1/v.",
      "id": 138
    },
    {
      "topic": "Optics",
      "difficulty": "easy",
      "question": "The power of a lens is measured in ___.",
      "options": [
        "diopters",
        "newtons",
        "watts",
        "ohms"
      ],
      "answer": 0,
      "explanation": "Power is in diopters.",
      "id": 139
    },
    {
      "topic": "Optics",
      "difficulty": "medium",
      "question": "A prism disperses white light because different colors have different ___.",
      "options": [
        "masses",
        "speeds",
        "charges",
        "intensities"
      ],
      "answer": 1,
      "explanation": "Different speeds cause dispersion.",
      "id": 140
    },
    {
      "topic": "Heat",
      "difficulty": "easy",
      "question": "Specific heat capacity is the heat needed to raise 1 kg by ___.",
      "options": [
        "1 K",
        "10 deg C",
        "1 deg C",
        "100 deg C"
      ],
      "answer": 2,
      "explanation": "Definition of specific heat capacity.",
      "id": 141
    },
    {
      "topic": "Heat",
      "difficulty": "medium",
      "question": "If 2 kg of water rises by 10 deg C, heat gained is (c=4200) ___.",
      "options": [
        "4200 J",
        "42000 J",
        "168000 J",
        "84000 J"
      ],
      "answer": 3,
      "explanation": "Q = mc delta T.",
      "id": 142
    },
    {
      "topic": "Heat",
      "difficulty": "easy",
      "question": "The unit of heat energy is ___.",
      "options": [
        "joule",
        "watt",
        "newton",
        "pascal"
      ],
      "answer": 0,
      "explanation": "Heat is energy.",
      "id": 143
    },
    {
      "topic": "Heat",
      "difficulty": "easy",
      "question": "When a gas is heated at constant pressure, its volume ___.",
      "options": [
        "decreases",
        "increases",
        "stays same",
        "becomes zero"
      ],
      "answer": 1,
      "explanation": "Charles' law.",
      "id": 144
    },
    {
      "topic": "Heat",
      "difficulty": "easy",
      "question": "During melting, temperature remains ___.",
      "options": [
        "increases",
        "decreases",
        "constant",
        "random"
      ],
      "answer": 2,
      "explanation": "Latent heat phase change.",
      "id": 145
    },
    {
      "topic": "Heat",
      "difficulty": "hard",
      "question": "Linear expansion is given by delta L = ___.",
      "options": [
        "L/delta T",
        "alpha delta T",
        "alpha /L",
        "alpha Ldelta T"
      ],
      "answer": 3,
      "explanation": "Formula for linear expansion.",
      "id": 146
    },
    {
      "topic": "Heat",
      "difficulty": "medium",
      "question": "The boiling point of water increases when pressure ___.",
      "options": [
        "increases",
        "decreases",
        "stays same",
        "becomes zero"
      ],
      "answer": 0,
      "explanation": "Higher pressure raises boiling point.",
      "id": 147
    },
    {
      "topic": "Heat",
      "difficulty": "easy",
      "question": "Heat transfer by direct contact is ___.",
      "options": [
        "convection",
        "conduction",
        "radiation",
        "evaporation"
      ],
      "answer": 1,
      "explanation": "Conduction needs contact.",
      "id": 148
    },
    {
      "topic": "Heat",
      "difficulty": "easy",
      "question": "The temperature scale with absolute zero is ___.",
      "options": [
        "Celsius",
        "Fahrenheit",
        "Kelvin",
        "Rankine"
      ],
      "answer": 2,
      "explanation": "Kelvin starts at absolute zero.",
      "id": 149
    },
    {
      "topic": "Heat",
      "difficulty": "medium",
      "question": "A thermos flask reduces heat loss mainly by ___.",
      "options": [
        "conduction",
        "wet cloth",
        "metallic coating only",
        "vacuum insulation"
      ],
      "answer": 3,
      "explanation": "Vacuum reduces conduction and convection.",
      "id": 150
    }
  ],
  "chemistry": [
    {
      "topic": "Atomic Structure",
      "difficulty": "easy",
      "question": "The atomic number of an element equals the number of ___.",
      "options": [
        "neutrons",
        "electrons + neutrons",
        "nucleons",
        "protons"
      ],
      "answer": 3,
      "explanation": "Atomic number is protons.",
      "id": 1
    },
    {
      "topic": "Atomic Structure",
      "difficulty": "easy",
      "question": "Atoms with the same atomic number but different mass numbers are called ___.",
      "options": [
        "isotopes",
        "isobars",
        "ions",
        "allotropes"
      ],
      "answer": 0,
      "explanation": "Isotopes have same Z, different A.",
      "id": 2
    },
    {
      "topic": "Atomic Structure",
      "difficulty": "easy",
      "question": "What is the electronic configuration of sodium (atomic number 11)?",
      "options": [
        "2,7,2",
        "2,8,1",
        "2,8,2",
        "2,6,3"
      ],
      "answer": 1,
      "explanation": "Sodium has 11 electrons.",
      "id": 3
    },
    {
      "topic": "Atomic Structure",
      "difficulty": "easy",
      "question": "Elements in Group 17 are called ___.",
      "options": [
        "alkali metals",
        "alkaline earth metals",
        "halogens",
        "noble gases"
      ],
      "answer": 2,
      "explanation": "Group 17 are halogens.",
      "id": 4
    },
    {
      "topic": "Atomic Structure",
      "difficulty": "easy",
      "question": "Elements in Group 1 are called ___.",
      "options": [
        "halogens",
        "transition metals",
        "noble gases",
        "alkali metals"
      ],
      "answer": 3,
      "explanation": "Group 1 are alkali metals.",
      "id": 5
    },
    {
      "topic": "Atomic Structure",
      "difficulty": "easy",
      "question": "The period number of an element equals the number of ___.",
      "options": [
        "electron shells",
        "valence electrons",
        "neutrons",
        "protons"
      ],
      "answer": 0,
      "explanation": "Period indicates shells.",
      "id": 6
    },
    {
      "topic": "Atomic Structure",
      "difficulty": "medium",
      "question": "Across a period, atomic radius generally ___.",
      "options": [
        "increases",
        "decreases",
        "remains the same",
        "doubles"
      ],
      "answer": 1,
      "explanation": "Effective nuclear charge increases.",
      "id": 7
    },
    {
      "topic": "Atomic Structure",
      "difficulty": "medium",
      "question": "Down a group, metallic character generally ___.",
      "options": [
        "decreases",
        "remains the same",
        "increases",
        "becomes zero"
      ],
      "answer": 2,
      "explanation": "Atoms lose electrons more easily.",
      "id": 8
    },
    {
      "topic": "Atomic Structure",
      "difficulty": "easy",
      "question": "The maximum number of electrons in the first shell is ___.",
      "options": [
        "4",
        "6",
        "8",
        "2"
      ],
      "answer": 3,
      "explanation": "First shell holds 2 electrons.",
      "id": 9
    },
    {
      "topic": "Atomic Structure",
      "difficulty": "easy",
      "question": "Neon is placed in Group 18 because it has ___.",
      "options": [
        "a full outer shell",
        "one electron",
        "two outer shells",
        "high density"
      ],
      "answer": 0,
      "explanation": "Group 18 elements have full valence shells.",
      "id": 10
    },
    {
      "topic": "Atomic Structure",
      "difficulty": "easy",
      "question": "An atom that has lost an electron becomes a ___.",
      "options": [
        "negative ion",
        "positive ion",
        "neutral atom",
        "molecule"
      ],
      "answer": 1,
      "explanation": "Loss of electron gives cation.",
      "id": 11
    },
    {
      "topic": "Atomic Structure",
      "difficulty": "easy",
      "question": "The mass number is the number of ___.",
      "options": [
        "protons only",
        "electrons only",
        "protons and neutrons",
        "neutrons only"
      ],
      "answer": 2,
      "explanation": "Mass number = protons + neutrons.",
      "id": 12
    },
    {
      "topic": "Chemical Bonding",
      "difficulty": "easy",
      "question": "A covalent bond is formed by the ___.",
      "options": [
        "transfer of electrons",
        "attraction of ions",
        "sea of electrons",
        "sharing of electrons"
      ],
      "answer": 3,
      "explanation": "Covalent bonds share electrons.",
      "id": 13
    },
    {
      "topic": "Chemical Bonding",
      "difficulty": "easy",
      "question": "An ionic bond is formed by ___.",
      "options": [
        "transfer of electrons between a metal and a non-metal",
        "sharing electrons between two non-metals",
        "sharing electrons between two metals",
        "overlap of orbitals"
      ],
      "answer": 0,
      "explanation": "Ionic bonds involve electron transfer.",
      "id": 14
    },
    {
      "topic": "Chemical Bonding",
      "difficulty": "medium",
      "question": "The bonding in metals is described as ___.",
      "options": [
        "ionic bonding",
        "a sea of delocalized electrons",
        "covalent bonding",
        "hydrogen bonding"
      ],
      "answer": 1,
      "explanation": "Metallic bonding has delocalized electrons.",
      "id": 15
    },
    {
      "topic": "Chemical Bonding",
      "difficulty": "easy",
      "question": "Which compound has covalent bonding?",
      "options": [
        "NaCl",
        "MgO",
        "H2O",
        "CaCl2"
      ],
      "answer": 2,
      "explanation": "Water is covalent.",
      "id": 16
    },
    {
      "topic": "Chemical Bonding",
      "difficulty": "easy",
      "question": "Which compound is ionic?",
      "options": [
        "CO2",
        "CH4",
        "NH3",
        "NaCl"
      ],
      "answer": 3,
      "explanation": "NaCl is ionic.",
      "id": 17
    },
    {
      "topic": "Chemical Bonding",
      "difficulty": "medium",
      "question": "Hydrogen bonding occurs in ___.",
      "options": [
        "water",
        "sodium chloride",
        "ethane",
        "carbon dioxide"
      ],
      "answer": 0,
      "explanation": "Water forms hydrogen bonds.",
      "id": 18
    },
    {
      "topic": "Chemical Bonding",
      "difficulty": "hard",
      "question": "A coordinate bond is formed when ___.",
      "options": [
        "each atom shares one electron",
        "both electrons come from one atom",
        "electrons are transferred",
        "protons are shared"
      ],
      "answer": 1,
      "explanation": "Dative bond uses lone pair donation.",
      "id": 19
    },
    {
      "topic": "Chemical Bonding",
      "difficulty": "hard",
      "question": "Which substance is a giant covalent structure?",
      "options": [
        "sugar",
        "sodium chloride",
        "diamond",
        "ammonia"
      ],
      "answer": 2,
      "explanation": "Diamond is giant covalent.",
      "id": 20
    },
    {
      "topic": "Mole Concept",
      "difficulty": "medium",
      "question": "How many moles are in 11 g of CO2 (Mr = 44)?",
      "options": [
        "0.5 mol",
        "1 mol",
        "2 mol",
        "0.25 mol"
      ],
      "answer": 3,
      "explanation": "Moles = mass/Mr.",
      "id": 21
    },
    {
      "topic": "Mole Concept",
      "difficulty": "medium",
      "question": "Find the concentration of a solution containing 0.2 mol in 0.5 L.",
      "options": [
        "0.4 mol/dm^3",
        "0.1 mol/dm^3",
        "0.5 mol/dm^3",
        "2.0 mol/dm^3"
      ],
      "answer": 0,
      "explanation": "Concentration = moles/volume.",
      "id": 22
    },
    {
      "topic": "Mole Concept",
      "difficulty": "medium",
      "question": "What volume will 0.5 mol of a gas occupy at STP (molar volume = 22.4 L)?",
      "options": [
        "5.6 L",
        "11.2 L",
        "22.4 L",
        "44.8 L"
      ],
      "answer": 1,
      "explanation": "Volume = 0.5 x 22.4.",
      "id": 23
    },
    {
      "topic": "Mole Concept",
      "difficulty": "medium",
      "question": "For the reaction 2H2 + O2 -> 2H2O, how many moles of O2 are needed to react with 4 moles of H2?",
      "options": [
        "1 mol",
        "3 mol",
        "2 mol",
        "4 mol"
      ],
      "answer": 2,
      "explanation": "H2:O2 is 2:1.",
      "id": 24
    },
    {
      "topic": "Mole Concept",
      "difficulty": "medium",
      "question": "How many grams are in 2 moles of NaCl (Mr = 58.5)?",
      "options": [
        "58.5 g",
        "87 g",
        "234 g",
        "117 g"
      ],
      "answer": 3,
      "explanation": "Mass = moles x Mr.",
      "id": 25
    },
    {
      "topic": "Mole Concept",
      "difficulty": "medium",
      "question": "A solution has 0.1 mol in 0.25 L. The concentration is ___.",
      "options": [
        "0.4 mol/dm^3",
        "0.2 mol/dm^3",
        "0.5 mol/dm^3",
        "0.8 mol/dm^3"
      ],
      "answer": 0,
      "explanation": "Concentration = 0.1/0.25.",
      "id": 26
    },
    {
      "topic": "Mole Concept",
      "difficulty": "easy",
      "question": "Which contains the greatest number of particles?",
      "options": [
        "0.5 mole of any substance",
        "1 mole of any substance",
        "2 g of H2",
        "10 g of O2"
      ],
      "answer": 1,
      "explanation": "One mole has Avogadro's number.",
      "id": 27
    },
    {
      "topic": "Mole Concept",
      "difficulty": "easy",
      "question": "Calculate the molar mass of H2SO4.",
      "options": [
        "96",
        "100",
        "98",
        "102"
      ],
      "answer": 2,
      "explanation": "2(1) + 32 + 4(16).",
      "id": 28
    },
    {
      "topic": "Mole Concept",
      "difficulty": "easy",
      "question": "How many moles are in 18 g of water (Mr = 18)?",
      "options": [
        "0.5 mol",
        "2 mol",
        "3 mol",
        "1 mol"
      ],
      "answer": 3,
      "explanation": "Moles = 18/18.",
      "id": 29
    },
    {
      "topic": "Mole Concept",
      "difficulty": "hard",
      "question": "The empirical formula of a compound with 12 g C and 2 g H is ___.",
      "options": [
        "CH2",
        "CH",
        "C2H",
        "C2H2"
      ],
      "answer": 0,
      "explanation": "Moles: C=1, H=2.",
      "id": 30
    },
    {
      "topic": "Mole Concept",
      "difficulty": "easy",
      "question": "How many molecules are in 1 mole of a substance?",
      "options": [
        "6.02 x 10^22",
        "6.02 x 10^23",
        "6.02 x 10^21",
        "6.02 x 10^24"
      ],
      "answer": 1,
      "explanation": "Avogadro's number.",
      "id": 31
    },
    {
      "topic": "Mole Concept",
      "difficulty": "easy",
      "question": "If 4 g of H2 reacts, moles of H2 are ___.",
      "options": [
        "1 mol",
        "4 mol",
        "2 mol",
        "0.5 mol"
      ],
      "answer": 2,
      "explanation": "Mr of H2 is 2.",
      "id": 32
    },
    {
      "topic": "Mole Concept",
      "difficulty": "medium",
      "question": "A compound has 2 mol of carbon and 6 mol of hydrogen. Its empirical formula is ___.",
      "options": [
        "CH2",
        "C2H3",
        "C2H6",
        "CH3"
      ],
      "answer": 3,
      "explanation": "Ratio 2:6 simplifies to 1:3.",
      "id": 33
    },
    {
      "topic": "Mole Concept",
      "difficulty": "easy",
      "question": "At STP, the volume of 2 mol of gas is ___.",
      "options": [
        "44.8 L",
        "22.4 L",
        "11.2 L",
        "33.6 L"
      ],
      "answer": 0,
      "explanation": "2 x 22.4 L.",
      "id": 34
    },
    {
      "topic": "Gas Laws",
      "difficulty": "easy",
      "question": "At constant temperature, if the pressure of a gas doubles, its volume ___.",
      "options": [
        "doubles",
        "halves",
        "remains the same",
        "quadruples"
      ],
      "answer": 1,
      "explanation": "Boyle's law.",
      "id": 35
    },
    {
      "topic": "Gas Laws",
      "difficulty": "medium",
      "question": "A gas at 300 K occupies 2 L. At constant pressure, what volume will it occupy at 450 K?",
      "options": [
        "2.5 L",
        "3.5 L",
        "3.0 L",
        "4.0 L"
      ],
      "answer": 2,
      "explanation": "Charles' law.",
      "id": 36
    },
    {
      "topic": "Gas Laws",
      "difficulty": "medium",
      "question": "Which gas law relates pressure and temperature at constant volume?",
      "options": [
        "Boyle's law",
        "Charles' law",
        "Avogadro's law",
        "Gay-Lussac's law"
      ],
      "answer": 3,
      "explanation": "Pressure proportional to temperature.",
      "id": 37
    },
    {
      "topic": "Gas Laws",
      "difficulty": "medium",
      "question": "A gas occupies 4 L at 100 kPa. At 200 kPa, its volume is ___.",
      "options": [
        "2 L",
        "1 L",
        "4 L",
        "8 L"
      ],
      "answer": 0,
      "explanation": "P1V1 = P2V2.",
      "id": 38
    },
    {
      "topic": "Gas Laws",
      "difficulty": "easy",
      "question": "At STP, 1 mol of gas occupies ___.",
      "options": [
        "11.2 L",
        "22.4 L",
        "24.0 L",
        "44.8 L"
      ],
      "answer": 1,
      "explanation": "Molar volume at STP.",
      "id": 39
    },
    {
      "topic": "Gas Laws",
      "difficulty": "easy",
      "question": "If temperature increases at constant pressure, gas volume ___.",
      "options": [
        "decreases",
        "remains the same",
        "increases",
        "becomes zero"
      ],
      "answer": 2,
      "explanation": "Charles' law.",
      "id": 40
    },
    {
      "topic": "Acids and Bases",
      "difficulty": "easy",
      "question": "A solution with pH 3 is ___.",
      "options": [
        "neutral",
        "basic",
        "alkaline",
        "acidic"
      ],
      "answer": 3,
      "explanation": "pH less than 7 is acidic.",
      "id": 41
    },
    {
      "topic": "Acids and Bases",
      "difficulty": "easy",
      "question": "A solution with pH 8 is ___.",
      "options": [
        "basic",
        "acidic",
        "neutral",
        "salty"
      ],
      "answer": 0,
      "explanation": "pH greater than 7 is basic.",
      "id": 42
    },
    {
      "topic": "Acids and Bases",
      "difficulty": "medium",
      "question": "Which is a strong acid?",
      "options": [
        "CH3COOH",
        "HCl",
        "H2CO3",
        "NH3"
      ],
      "answer": 1,
      "explanation": "HCl is a strong acid.",
      "id": 43
    },
    {
      "topic": "Acids and Bases",
      "difficulty": "easy",
      "question": "Which is a base?",
      "options": [
        "HCl",
        "HNO3",
        "NaOH",
        "H2SO4"
      ],
      "answer": 2,
      "explanation": "NaOH is a base.",
      "id": 44
    },
    {
      "topic": "Acids and Bases",
      "difficulty": "easy",
      "question": "Neutralization is the reaction between ___.",
      "options": [
        "two acids",
        "two bases",
        "salt and water",
        "an acid and a base"
      ],
      "answer": 3,
      "explanation": "Neutralization forms salt and water.",
      "id": 45
    },
    {
      "topic": "Acids and Bases",
      "difficulty": "easy",
      "question": "Which substance turns blue litmus red?",
      "options": [
        "acid",
        "base",
        "salt",
        "water"
      ],
      "answer": 0,
      "explanation": "Acids turn blue litmus red.",
      "id": 46
    },
    {
      "topic": "Acids and Bases",
      "difficulty": "medium",
      "question": "Which indicator is commonly used in acid-base titration?",
      "options": [
        "litmus",
        "phenolphthalein",
        "bromine water",
        "limewater"
      ],
      "answer": 1,
      "explanation": "Phenolphthalein is common.",
      "id": 47
    },
    {
      "topic": "Acids and Bases",
      "difficulty": "medium",
      "question": "A salt formed from a strong acid and strong base is ___.",
      "options": [
        "acidic",
        "basic",
        "neutral",
        "amphoteric"
      ],
      "answer": 2,
      "explanation": "Strong + strong gives neutral.",
      "id": 48
    },
    {
      "topic": "Acids and Bases",
      "difficulty": "easy",
      "question": "A base that dissolves in water is called an ___.",
      "options": [
        "acid",
        "salt",
        "oxide",
        "alkali"
      ],
      "answer": 3,
      "explanation": "Alkalis are soluble bases.",
      "id": 49
    },
    {
      "topic": "Acids and Bases",
      "difficulty": "easy",
      "question": "Which substance turns red litmus blue?",
      "options": [
        "alkali",
        "acid",
        "salt",
        "water"
      ],
      "answer": 0,
      "explanation": "Alkalis turn red litmus blue.",
      "id": 50
    },
    {
      "topic": "Redox",
      "difficulty": "medium",
      "question": "What is the oxidation number of sulfur in H2SO4?",
      "options": [
        "+4",
        "+6",
        "-2",
        "+2"
      ],
      "answer": 1,
      "explanation": "2(+1) + S + 4(-2) = 0.",
      "id": 51
    },
    {
      "topic": "Redox",
      "difficulty": "easy",
      "question": "Oxidation can be defined as the ___.",
      "options": [
        "gain of electrons",
        "gain of protons",
        "loss of electrons",
        "loss of protons"
      ],
      "answer": 2,
      "explanation": "Oxidation is loss of electrons.",
      "id": 52
    },
    {
      "topic": "Redox",
      "difficulty": "easy",
      "question": "Reduction can be defined as the ___.",
      "options": [
        "loss of electrons",
        "gain of oxygen",
        "loss of hydrogen",
        "gain of electrons"
      ],
      "answer": 3,
      "explanation": "Reduction is gain of electrons.",
      "id": 53
    },
    {
      "topic": "Redox",
      "difficulty": "medium",
      "question": "In the electrolysis of CuSO4 using copper electrodes, copper is deposited at the ___.",
      "options": [
        "cathode",
        "anode",
        "electrolyte",
        "both electrodes"
      ],
      "answer": 0,
      "explanation": "Cu2+ gains electrons at cathode.",
      "id": 54
    },
    {
      "topic": "Redox",
      "difficulty": "easy",
      "question": "The anode in electrolysis is ___.",
      "options": [
        "negative",
        "positive",
        "neutral",
        "insulating"
      ],
      "answer": 1,
      "explanation": "Anode is positive.",
      "id": 55
    },
    {
      "topic": "Redox",
      "difficulty": "easy",
      "question": "Which ion is attracted to the cathode?",
      "options": [
        "anion",
        "neutral atom",
        "cation",
        "molecule"
      ],
      "answer": 2,
      "explanation": "Cations move to cathode.",
      "id": 56
    },
    {
      "topic": "Redox",
      "difficulty": "medium",
      "question": "In redox, the oxidizing agent is ___.",
      "options": [
        "electron donor",
        "acid",
        "base",
        "the electron acceptor"
      ],
      "answer": 3,
      "explanation": "Oxidizing agent gains electrons.",
      "id": 57
    },
    {
      "topic": "Redox",
      "difficulty": "medium",
      "question": "In electrolysis, oxidation occurs at the ___.",
      "options": [
        "anode",
        "cathode",
        "electrolyte",
        "solution"
      ],
      "answer": 0,
      "explanation": "Oxidation is at anode.",
      "id": 58
    },
    {
      "topic": "Redox",
      "difficulty": "hard",
      "question": "A substance that prevents rusting by being oxidized first is called a ___.",
      "options": [
        "catalyst",
        "sacrificial metal",
        "solvent",
        "electrolyte"
      ],
      "answer": 1,
      "explanation": "Sacrificial metal oxidizes instead.",
      "id": 59
    },
    {
      "topic": "Redox",
      "difficulty": "easy",
      "question": "Electroplating is used to ___.",
      "options": [
        "remove rust",
        "purify water",
        "coat a metal with another metal",
        "produce gas"
      ],
      "answer": 2,
      "explanation": "Electroplating coats surfaces.",
      "id": 60
    },
    {
      "topic": "Reaction Rates",
      "difficulty": "medium",
      "question": "A catalyst increases the rate of a reaction by ___.",
      "options": [
        "increasing activation energy",
        "raising the equilibrium constant",
        "changing products",
        "lowering activation energy"
      ],
      "answer": 3,
      "explanation": "Catalysts lower activation energy.",
      "id": 61
    },
    {
      "topic": "Reaction Rates",
      "difficulty": "easy",
      "question": "Increasing temperature generally ___ reaction rate.",
      "options": [
        "increases",
        "decreases",
        "does not affect",
        "stops"
      ],
      "answer": 0,
      "explanation": "Higher temperature increases collisions.",
      "id": 62
    },
    {
      "topic": "Reaction Rates",
      "difficulty": "medium",
      "question": "For a gaseous equilibrium, increasing pressure shifts the equilibrium to the side with ___.",
      "options": [
        "more moles of gas",
        "fewer moles of gas",
        "no moles of gas",
        "higher temperature"
      ],
      "answer": 1,
      "explanation": "Le Chatelier's principle.",
      "id": 63
    },
    {
      "topic": "Reaction Rates",
      "difficulty": "medium",
      "question": "A reaction is at equilibrium when ___.",
      "options": [
        "products stop forming",
        "reactants are used up",
        "forward and reverse rates are equal",
        "temperature is zero"
      ],
      "answer": 2,
      "explanation": "Rates are equal at equilibrium.",
      "id": 64
    },
    {
      "topic": "Reaction Rates",
      "difficulty": "easy",
      "question": "Increasing concentration of reactants generally shifts equilibrium ___.",
      "options": [
        "to the left",
        "no change",
        "to the top",
        "to the right"
      ],
      "answer": 3,
      "explanation": "More reactants favor products.",
      "id": 65
    },
    {
      "topic": "Reaction Rates",
      "difficulty": "easy",
      "question": "Which factor does NOT affect reaction rate?",
      "options": [
        "color of reactants",
        "temperature",
        "concentration",
        "surface area"
      ],
      "answer": 0,
      "explanation": "Color does not change collisions.",
      "id": 66
    },
    {
      "topic": "Reaction Rates",
      "difficulty": "easy",
      "question": "An exothermic reaction has ___.",
      "options": [
        "positive delta H",
        "negative delta H",
        "no heat change",
        "zero entropy"
      ],
      "answer": 1,
      "explanation": "Exothermic releases heat.",
      "id": 67
    },
    {
      "topic": "Reaction Rates",
      "difficulty": "hard",
      "question": "Increasing temperature in an exothermic equilibrium shifts it ___.",
      "options": [
        "to the right",
        "no change",
        "to the left",
        "to the top"
      ],
      "answer": 2,
      "explanation": "Heat is a product.",
      "id": 68
    },
    {
      "topic": "Reaction Rates",
      "difficulty": "medium",
      "question": "A catalyst affects equilibrium by ___.",
      "options": [
        "shifting equilibrium",
        "changing products",
        "stopping reaction",
        "reaching equilibrium faster"
      ],
      "answer": 3,
      "explanation": "Catalysts speed up both directions.",
      "id": 69
    },
    {
      "topic": "Reaction Rates",
      "difficulty": "easy",
      "question": "Rate of reaction is measured as change in ___.",
      "options": [
        "concentration per time",
        "temperature per time",
        "pressure per time",
        "volume per time"
      ],
      "answer": 0,
      "explanation": "Rate is change in concentration per time.",
      "id": 70
    },
    {
      "topic": "Organic Chemistry",
      "difficulty": "easy",
      "question": "The general formula of alkanes is ___.",
      "options": [
        "CnH2n",
        "CnH2n+2",
        "CnH2n-2",
        "CnHn"
      ],
      "answer": 1,
      "explanation": "Alkanes are saturated hydrocarbons.",
      "id": 71
    },
    {
      "topic": "Organic Chemistry",
      "difficulty": "easy",
      "question": "The molecular formula of ethene is ___.",
      "options": [
        "C2H2",
        "C2H6",
        "C2H4",
        "C3H6"
      ],
      "answer": 2,
      "explanation": "Ethene is an alkene.",
      "id": 72
    },
    {
      "topic": "Organic Chemistry",
      "difficulty": "medium",
      "question": "Bromine water is decolorized by ___.",
      "options": [
        "alkanes",
        "alcohols",
        "acids",
        "alkenes"
      ],
      "answer": 3,
      "explanation": "Alkenes add bromine.",
      "id": 73
    },
    {
      "topic": "Organic Chemistry",
      "difficulty": "medium",
      "question": "Esters are produced by the reaction between ___.",
      "options": [
        "an alcohol and a carboxylic acid",
        "an alkane and an alkene",
        "an alcohol and a base",
        "an acid and a salt"
      ],
      "answer": 0,
      "explanation": "Esterification uses alcohols and acids.",
      "id": 74
    },
    {
      "topic": "Organic Chemistry",
      "difficulty": "medium",
      "question": "Saponification is the reaction of ___.",
      "options": [
        "alkanes with chlorine",
        "fats/oils with alkali",
        "alcohols with acids",
        "salts with water"
      ],
      "answer": 1,
      "explanation": "It produces soap and glycerol.",
      "id": 75
    },
    {
      "topic": "Organic Chemistry",
      "difficulty": "easy",
      "question": "Which compound is an alcohol?",
      "options": [
        "ethene",
        "ethyne",
        "ethanol",
        "ethane"
      ],
      "answer": 2,
      "explanation": "Alcohols contain -OH group.",
      "id": 76
    },
    {
      "topic": "Organic Chemistry",
      "difficulty": "easy",
      "question": "The functional group of carboxylic acids is ___.",
      "options": [
        "-OH",
        "-CHO",
        "-NH2",
        "-COOH"
      ],
      "answer": 3,
      "explanation": "Carboxyl group is -COOH.",
      "id": 77
    },
    {
      "topic": "Organic Chemistry",
      "difficulty": "easy",
      "question": "A hydrocarbon with only single bonds is a(n) ___.",
      "options": [
        "alkane",
        "alkene",
        "alkyne",
        "arene"
      ],
      "answer": 0,
      "explanation": "Single bonds = alkane.",
      "id": 78
    },
    {
      "topic": "Organic Chemistry",
      "difficulty": "hard",
      "question": "The process of converting alkenes to alkanes is ___.",
      "options": [
        "oxidation",
        "hydrogenation",
        "polymerization",
        "fermentation"
      ],
      "answer": 1,
      "explanation": "Hydrogenation adds hydrogen.",
      "id": 79
    },
    {
      "topic": "Organic Chemistry",
      "difficulty": "easy",
      "question": "Ethanol can be produced by ___.",
      "options": [
        "electrolysis",
        "fractional distillation",
        "fermentation",
        "saponification"
      ],
      "answer": 2,
      "explanation": "Fermentation of sugars yields ethanol.",
      "id": 80
    },
    {
      "topic": "Qualitative Analysis",
      "difficulty": "easy",
      "question": "Temporary hardness of water is mainly due to ___.",
      "options": [
        "chlorides",
        "sulfates",
        "nitrates",
        "bicarbonates"
      ],
      "answer": 3,
      "explanation": "Temporary hardness comes from bicarbonates.",
      "id": 81
    },
    {
      "topic": "Qualitative Analysis",
      "difficulty": "easy",
      "question": "Which gas turns limewater milky?",
      "options": [
        "CO2",
        "NH3",
        "SO2",
        "H2"
      ],
      "answer": 0,
      "explanation": "CO2 forms CaCO3.",
      "id": 82
    },
    {
      "topic": "Qualitative Analysis",
      "difficulty": "easy",
      "question": "Ammonia turns moist red litmus paper ___.",
      "options": [
        "red",
        "blue",
        "colorless",
        "black"
      ],
      "answer": 1,
      "explanation": "Ammonia is basic.",
      "id": 83
    },
    {
      "topic": "Qualitative Analysis",
      "difficulty": "easy",
      "question": "Rusting of iron requires ___.",
      "options": [
        "oxygen only",
        "water only",
        "oxygen and water",
        "carbon dioxide only"
      ],
      "answer": 2,
      "explanation": "Both oxygen and water are needed.",
      "id": 84
    },
    {
      "topic": "Qualitative Analysis",
      "difficulty": "medium",
      "question": "A white precipitate with AgNO3 indicates ___.",
      "options": [
        "sulfate ion",
        "carbonate ion",
        "nitrate ion",
        "chloride ion"
      ],
      "answer": 3,
      "explanation": "AgCl is white.",
      "id": 85
    },
    {
      "topic": "Qualitative Analysis",
      "difficulty": "medium",
      "question": "A white precipitate with BaCl2 indicates ___.",
      "options": [
        "sulfate ion",
        "chloride ion",
        "nitrate ion",
        "carbonate ion"
      ],
      "answer": 0,
      "explanation": "BaSO4 is white.",
      "id": 86
    },
    {
      "topic": "Qualitative Analysis",
      "difficulty": "easy",
      "question": "Carbon dioxide can be identified by ___.",
      "options": [
        "popping sound",
        "turning limewater milky",
        "blue litmus",
        "brown fumes"
      ],
      "answer": 1,
      "explanation": "CO2 forms CaCO3 with limewater.",
      "id": 87
    },
    {
      "topic": "Qualitative Analysis",
      "difficulty": "easy",
      "question": "A gas that relights a glowing splint is ___.",
      "options": [
        "hydrogen",
        "carbon dioxide",
        "oxygen",
        "chlorine"
      ],
      "answer": 2,
      "explanation": "Oxygen supports combustion.",
      "id": 88
    },
    {
      "topic": "Qualitative Analysis",
      "difficulty": "easy",
      "question": "A gas that gives a pop sound with a lighted splint is ___.",
      "options": [
        "oxygen",
        "carbon dioxide",
        "chlorine",
        "hydrogen"
      ],
      "answer": 3,
      "explanation": "Hydrogen burns with a pop.",
      "id": 89
    },
    {
      "topic": "Qualitative Analysis",
      "difficulty": "hard",
      "question": "Chlorine gas bleaches damp litmus paper by ___.",
      "options": [
        "oxidation",
        "reduction",
        "neutralization",
        "precipitation"
      ],
      "answer": 0,
      "explanation": "Chlorine is an oxidizing agent.",
      "id": 90
    },
    {
      "topic": "Metals",
      "difficulty": "easy",
      "question": "A more reactive metal can ___.",
      "options": [
        "be displaced by a less reactive metal",
        "displace a less reactive metal from its salt solution",
        "not react in solution",
        "only form alloys"
      ],
      "answer": 1,
      "explanation": "Reactive metals displace less reactive ones.",
      "id": 91
    },
    {
      "topic": "Metals",
      "difficulty": "easy",
      "question": "Which metal is most reactive?",
      "options": [
        "copper",
        "silver",
        "potassium",
        "gold"
      ],
      "answer": 2,
      "explanation": "Potassium is very reactive.",
      "id": 92
    },
    {
      "topic": "Metals",
      "difficulty": "easy",
      "question": "The process of extracting a metal from its ore is called ___.",
      "options": [
        "polymerization",
        "fermentation",
        "saponification",
        "metallurgy"
      ],
      "answer": 3,
      "explanation": "Metallurgy deals with extraction.",
      "id": 93
    },
    {
      "topic": "Metals",
      "difficulty": "easy",
      "question": "Corrosion of iron is called ___.",
      "options": [
        "rusting",
        "tarnishing",
        "galvanizing",
        "smelting"
      ],
      "answer": 0,
      "explanation": "Corrosion of iron is rusting.",
      "id": 94
    },
    {
      "topic": "Metals",
      "difficulty": "medium",
      "question": "Stainless steel resists rust because it contains ___.",
      "options": [
        "sodium",
        "chromium",
        "zinc",
        "lead"
      ],
      "answer": 1,
      "explanation": "Chromium forms a protective oxide.",
      "id": 95
    },
    {
      "topic": "Metals",
      "difficulty": "easy",
      "question": "An alloy of copper and zinc is ___.",
      "options": [
        "bronze",
        "steel",
        "brass",
        "duralumin"
      ],
      "answer": 2,
      "explanation": "Brass is Cu + Zn.",
      "id": 96
    },
    {
      "topic": "Metals",
      "difficulty": "easy",
      "question": "An alloy of copper and tin is ___.",
      "options": [
        "brass",
        "steel",
        "solder",
        "bronze"
      ],
      "answer": 3,
      "explanation": "Bronze is Cu + Sn.",
      "id": 97
    },
    {
      "topic": "Metals",
      "difficulty": "medium",
      "question": "Galvanizing iron involves coating it with ___.",
      "options": [
        "zinc",
        "copper",
        "tin",
        "silver"
      ],
      "answer": 0,
      "explanation": "Zinc protects iron.",
      "id": 98
    },
    {
      "topic": "Metals",
      "difficulty": "easy",
      "question": "The main ore of aluminum is ___.",
      "options": [
        "haematite",
        "bauxite",
        "galena",
        "chalcopyrite"
      ],
      "answer": 1,
      "explanation": "Bauxite is aluminum ore.",
      "id": 99
    },
    {
      "topic": "Metals",
      "difficulty": "easy",
      "question": "The main ore of iron is ___.",
      "options": [
        "bauxite",
        "galena",
        "haematite",
        "cassiterite"
      ],
      "answer": 2,
      "explanation": "Haematite is iron ore.",
      "id": 100
    },
    {
      "topic": "Periodic Table",
      "difficulty": "medium",
      "question": "Across a period, electronegativity generally ___.",
      "options": [
        "decreases",
        "stays same",
        "becomes zero",
        "increases"
      ],
      "answer": 3,
      "explanation": "Effective nuclear charge increases.",
      "id": 101
    },
    {
      "topic": "Periodic Table",
      "difficulty": "easy",
      "question": "Down a group, atomic size generally ___.",
      "options": [
        "increases",
        "decreases",
        "stays same",
        "becomes zero"
      ],
      "answer": 0,
      "explanation": "More electron shells.",
      "id": 102
    },
    {
      "topic": "Periodic Table",
      "difficulty": "easy",
      "question": "Group 0 elements are also called ___.",
      "options": [
        "alkali metals",
        "noble gases",
        "halogens",
        "transition metals"
      ],
      "answer": 1,
      "explanation": "They are inert.",
      "id": 103
    },
    {
      "topic": "Periodic Table",
      "difficulty": "easy",
      "question": "The valency of Group 2 elements is ___.",
      "options": [
        "1",
        "3",
        "2",
        "4"
      ],
      "answer": 2,
      "explanation": "Group 2 has two outer electrons.",
      "id": 104
    },
    {
      "topic": "Periodic Table",
      "difficulty": "easy",
      "question": "Elements in the same group have the same number of ___.",
      "options": [
        "neutrons",
        "protons",
        "shells",
        "valence electrons"
      ],
      "answer": 3,
      "explanation": "Valence electrons define group.",
      "id": 105
    },
    {
      "topic": "Periodic Table",
      "difficulty": "easy",
      "question": "Ionic bonding involves ___.",
      "options": [
        "transfer of electrons",
        "sharing of electrons",
        "sharing of protons",
        "sharing of neutrons"
      ],
      "answer": 0,
      "explanation": "Ions form by transfer.",
      "id": 106
    },
    {
      "topic": "Periodic Table",
      "difficulty": "easy",
      "question": "Covalent bonding involves ___.",
      "options": [
        "transfer of electrons",
        "sharing of electrons",
        "loss of electrons",
        "gain of protons"
      ],
      "answer": 1,
      "explanation": "Covalent uses shared pairs.",
      "id": 107
    },
    {
      "topic": "Periodic Table",
      "difficulty": "medium",
      "question": "The element with atomic number 17 is ___.",
      "options": [
        "sodium",
        "argon",
        "chlorine",
        "calcium"
      ],
      "answer": 2,
      "explanation": "Atomic number 17 is Cl.",
      "id": 108
    },
    {
      "topic": "Periodic Table",
      "difficulty": "medium",
      "question": "Down a group, reactivity of alkali metals generally ___.",
      "options": [
        "decreases",
        "stays same",
        "becomes zero",
        "increases"
      ],
      "answer": 3,
      "explanation": "Outer electron is lost more easily.",
      "id": 109
    },
    {
      "topic": "Periodic Table",
      "difficulty": "easy",
      "question": "Which particle has a negative charge?",
      "options": [
        "electron",
        "proton",
        "neutron",
        "nucleus"
      ],
      "answer": 0,
      "explanation": "Electrons are negative.",
      "id": 110
    },
    {
      "topic": "Stoichiometry",
      "difficulty": "easy",
      "question": "How many moles are in 9 g of water (Mr = 18)?",
      "options": [
        "1 mol",
        "0.5 mol",
        "2 mol",
        "0.25 mol"
      ],
      "answer": 1,
      "explanation": "Moles = mass/Mr.",
      "id": 111
    },
    {
      "topic": "Stoichiometry",
      "difficulty": "easy",
      "question": "Find the mass of 0.25 mol of NaOH (Mr=40).",
      "options": [
        "5 g",
        "20 g",
        "10 g",
        "40 g"
      ],
      "answer": 2,
      "explanation": "Mass = moles x Mr.",
      "id": 112
    },
    {
      "topic": "Stoichiometry",
      "difficulty": "easy",
      "question": "A solution has 0.5 mol in 1 L. Concentration is ___.",
      "options": [
        "1.0 mol/dm^3",
        "0.25 mol/dm^3",
        "2.0 mol/dm^3",
        "0.5 mol/dm^3"
      ],
      "answer": 3,
      "explanation": "Concentration = moles/volume.",
      "id": 113
    },
    {
      "topic": "Stoichiometry",
      "difficulty": "medium",
      "question": "At STP, 0.25 mol of gas occupies ___.",
      "options": [
        "5.6 L",
        "2.8 L",
        "11.2 L",
        "22.4 L"
      ],
      "answer": 0,
      "explanation": "0.25 x 22.4.",
      "id": 114
    },
    {
      "topic": "Stoichiometry",
      "difficulty": "medium",
      "question": "If 5 g of CaCO3 (Mr=100) reacts, moles are ___.",
      "options": [
        "0.5 mol",
        "0.05 mol",
        "0.1 mol",
        "0.02 mol"
      ],
      "answer": 1,
      "explanation": "Moles = 5/100.",
      "id": 115
    },
    {
      "topic": "Stoichiometry",
      "difficulty": "easy",
      "question": "A compound has 1 mol C and 2 mol O. Empirical formula is ___.",
      "options": [
        "CO",
        "C2O",
        "CO2",
        "C2O2"
      ],
      "answer": 2,
      "explanation": "Ratio 1:2.",
      "id": 116
    },
    {
      "topic": "Stoichiometry",
      "difficulty": "medium",
      "question": "How many molecules are in 0.5 mol?",
      "options": [
        "6.02 x 10^23",
        "1.2 x 10^23",
        "12.0 x 10^23",
        "3.01 x 10^23"
      ],
      "answer": 3,
      "explanation": "Half of Avogadro's number.",
      "id": 117
    },
    {
      "topic": "Stoichiometry",
      "difficulty": "easy",
      "question": "Find the molar mass of NH3.",
      "options": [
        "17",
        "14",
        "16",
        "18"
      ],
      "answer": 0,
      "explanation": "14 + 3(1).",
      "id": 118
    },
    {
      "topic": "Stoichiometry",
      "difficulty": "medium",
      "question": "If 2 mol of H2 react, moles of H2O formed are ___.",
      "options": [
        "1 mol",
        "2 mol",
        "3 mol",
        "4 mol"
      ],
      "answer": 1,
      "explanation": "2H2 -> 2H2O.",
      "id": 119
    },
    {
      "topic": "Stoichiometry",
      "difficulty": "hard",
      "question": "The percentage of oxygen in H2O is ___.",
      "options": [
        "11.1%",
        "50%",
        "88.9%",
        "66.7%"
      ],
      "answer": 2,
      "explanation": "O=16/18.",
      "id": 120
    },
    {
      "topic": "Acids and Bases",
      "difficulty": "easy",
      "question": "A solution with pH 7 is ___.",
      "options": [
        "acidic",
        "basic",
        "alkaline",
        "neutral"
      ],
      "answer": 3,
      "explanation": "pH 7 is neutral.",
      "id": 121
    },
    {
      "topic": "Acids and Bases",
      "difficulty": "medium",
      "question": "Which is a weak acid?",
      "options": [
        "CH3COOH",
        "HCl",
        "HNO3",
        "H2SO4"
      ],
      "answer": 0,
      "explanation": "Ethanoic acid is weak.",
      "id": 122
    },
    {
      "topic": "Acids and Bases",
      "difficulty": "easy",
      "question": "Which salt is formed by HCl and NaOH?",
      "options": [
        "Na2SO4",
        "NaCl",
        "KCl",
        "Na2CO3"
      ],
      "answer": 1,
      "explanation": "Neutralization gives NaCl.",
      "id": 123
    },
    {
      "topic": "Acids and Bases",
      "difficulty": "easy",
      "question": "Limewater turns milky in the presence of ___.",
      "options": [
        "NH3",
        "H2",
        "CO2",
        "O2"
      ],
      "answer": 2,
      "explanation": "CO2 forms CaCO3.",
      "id": 124
    },
    {
      "topic": "Acids and Bases",
      "difficulty": "easy",
      "question": "A basic solution turns red litmus ___.",
      "options": [
        "red",
        "colorless",
        "yellow",
        "blue"
      ],
      "answer": 3,
      "explanation": "Bases turn red litmus blue.",
      "id": 125
    },
    {
      "topic": "Acids and Bases",
      "difficulty": "hard",
      "question": "Which substance is amphoteric?",
      "options": [
        "Al2O3",
        "Na2O",
        "CO2",
        "HCl"
      ],
      "answer": 0,
      "explanation": "Al2O3 is amphoteric.",
      "id": 126
    },
    {
      "topic": "Acids and Bases",
      "difficulty": "medium",
      "question": "A strong base is ___.",
      "options": [
        "NH3",
        "KOH",
        "CH3COOH",
        "H2CO3"
      ],
      "answer": 1,
      "explanation": "KOH is strong.",
      "id": 127
    },
    {
      "topic": "Acids and Bases",
      "difficulty": "hard",
      "question": "A salt formed from strong acid and weak base is ___.",
      "options": [
        "basic",
        "neutral",
        "acidic",
        "amphoteric"
      ],
      "answer": 2,
      "explanation": "Strong acid + weak base gives acidic salt.",
      "id": 128
    },
    {
      "topic": "Acids and Bases",
      "difficulty": "medium",
      "question": "Which indicator turns pink in alkali?",
      "options": [
        "methyl orange",
        "litmus",
        "iodine",
        "phenolphthalein"
      ],
      "answer": 3,
      "explanation": "Phenolphthalein turns pink.",
      "id": 129
    },
    {
      "topic": "Acids and Bases",
      "difficulty": "easy",
      "question": "Neutralization produces ___.",
      "options": [
        "salt and water",
        "acid and base",
        "gas and water",
        "salt and gas"
      ],
      "answer": 0,
      "explanation": "Neutralization yields salt and water.",
      "id": 130
    },
    {
      "topic": "Organic Chemistry",
      "difficulty": "easy",
      "question": "The general formula of alkenes is ___.",
      "options": [
        "CnH2n+2",
        "CnH2n",
        "CnH2n-2",
        "CnHn"
      ],
      "answer": 1,
      "explanation": "Alkenes have double bonds.",
      "id": 131
    },
    {
      "topic": "Organic Chemistry",
      "difficulty": "easy",
      "question": "The functional group of alcohols is ___.",
      "options": [
        "-COOH",
        "-CHO",
        "-OH",
        "-NH2"
      ],
      "answer": 2,
      "explanation": "Alcohols contain hydroxyl.",
      "id": 132
    },
    {
      "topic": "Organic Chemistry",
      "difficulty": "medium",
      "question": "Ethanoic acid is also called ___.",
      "options": [
        "formic acid",
        "propionic acid",
        "butanoic acid",
        "acetic acid"
      ],
      "answer": 3,
      "explanation": "Ethanoic acid is acetic acid.",
      "id": 133
    },
    {
      "topic": "Organic Chemistry",
      "difficulty": "medium",
      "question": "An alkane undergoes ___.",
      "options": [
        "substitution reactions",
        "addition reactions",
        "polymerization",
        "esterification"
      ],
      "answer": 0,
      "explanation": "Alkanes substitute.",
      "id": 134
    },
    {
      "topic": "Organic Chemistry",
      "difficulty": "hard",
      "question": "A compound with two double bonds is a(n) ___.",
      "options": [
        "alkane",
        "diene",
        "alkyne",
        "arene"
      ],
      "answer": 1,
      "explanation": "Two double bonds = diene.",
      "id": 135
    },
    {
      "topic": "Organic Chemistry",
      "difficulty": "easy",
      "question": "Polymerization of ethene gives ___.",
      "options": [
        "ethanol",
        "ethanoic acid",
        "polyethene",
        "propene"
      ],
      "answer": 2,
      "explanation": "Ethene forms polyethene.",
      "id": 136
    },
    {
      "topic": "Organic Chemistry",
      "difficulty": "medium",
      "question": "The functional group of aldehydes is ___.",
      "options": [
        "-COOH",
        "-OH",
        "-NH2",
        "-CHO"
      ],
      "answer": 3,
      "explanation": "Aldehydes contain -CHO.",
      "id": 137
    },
    {
      "topic": "Organic Chemistry",
      "difficulty": "medium",
      "question": "Cracking is used to produce ___.",
      "options": [
        "shorter hydrocarbons",
        "longer hydrocarbons",
        "alcohols",
        "acids"
      ],
      "answer": 0,
      "explanation": "Cracking breaks large molecules.",
      "id": 138
    },
    {
      "topic": "Organic Chemistry",
      "difficulty": "easy",
      "question": "Soap is formed by reaction of fats with ___.",
      "options": [
        "acid",
        "alkali",
        "salt",
        "water"
      ],
      "answer": 1,
      "explanation": "Saponification uses alkali.",
      "id": 139
    },
    {
      "topic": "Organic Chemistry",
      "difficulty": "easy",
      "question": "A saturated hydrocarbon contains only ___.",
      "options": [
        "double bonds",
        "triple bonds",
        "single bonds",
        "ionic bonds"
      ],
      "answer": 2,
      "explanation": "Saturated means single bonds.",
      "id": 140
    },
    {
      "topic": "Industrial Chemistry",
      "difficulty": "medium",
      "question": "The Haber process produces ___.",
      "options": [
        "sulfuric acid",
        "nitric acid",
        "chlorine",
        "ammonia"
      ],
      "answer": 3,
      "explanation": "Haber makes ammonia.",
      "id": 141
    },
    {
      "topic": "Industrial Chemistry",
      "difficulty": "medium",
      "question": "The Contact process produces ___.",
      "options": [
        "sulfuric acid",
        "ammonia",
        "nitric acid",
        "hydrochloric acid"
      ],
      "answer": 0,
      "explanation": "Contact makes sulfuric acid.",
      "id": 142
    },
    {
      "topic": "Industrial Chemistry",
      "difficulty": "easy",
      "question": "Fractional distillation of crude oil separates components based on ___.",
      "options": [
        "density",
        "boiling points",
        "color",
        "viscosity"
      ],
      "answer": 1,
      "explanation": "Different boiling points.",
      "id": 143
    },
    {
      "topic": "Industrial Chemistry",
      "difficulty": "medium",
      "question": "Catalytic cracking produces more ___.",
      "options": [
        "diesel only",
        "water",
        "petrol and alkenes",
        "oxygen"
      ],
      "answer": 2,
      "explanation": "Cracking yields petrol and alkenes.",
      "id": 144
    },
    {
      "topic": "Industrial Chemistry",
      "difficulty": "easy",
      "question": "Greenhouse gas mainly responsible for global warming is ___.",
      "options": [
        "O2",
        "N2",
        "He",
        "CO2"
      ],
      "answer": 3,
      "explanation": "CO2 is the main gas.",
      "id": 145
    },
    {
      "topic": "Industrial Chemistry",
      "difficulty": "medium",
      "question": "Acid rain is mainly caused by ___.",
      "options": [
        "SO2 and NOx",
        "CO2 and O2",
        "H2 and O2",
        "N2 and O2"
      ],
      "answer": 0,
      "explanation": "SO2/NOx form acids.",
      "id": 146
    },
    {
      "topic": "Industrial Chemistry",
      "difficulty": "easy",
      "question": "The pH of pure water is ___.",
      "options": [
        "5",
        "7",
        "9",
        "10"
      ],
      "answer": 1,
      "explanation": "Neutral water pH 7.",
      "id": 147
    },
    {
      "topic": "Industrial Chemistry",
      "difficulty": "easy",
      "question": "Bleaching powder is used for ___.",
      "options": [
        "rusting",
        "fertilizer",
        "disinfection",
        "fuel"
      ],
      "answer": 2,
      "explanation": "Bleaching powder disinfects.",
      "id": 148
    },
    {
      "topic": "Industrial Chemistry",
      "difficulty": "easy",
      "question": "The main component of natural gas is ___.",
      "options": [
        "ethane",
        "propane",
        "butane",
        "methane"
      ],
      "answer": 3,
      "explanation": "Natural gas is mostly methane.",
      "id": 149
    },
    {
      "topic": "Industrial Chemistry",
      "difficulty": "medium",
      "question": "Chlorofluorocarbons damage the ___.",
      "options": [
        "ozone layer",
        "soil",
        "lithosphere",
        "core"
      ],
      "answer": 0,
      "explanation": "CFCs deplete ozone.",
      "id": 150
    }
  ],
  "biology": [
    {
      "topic": "Cell Biology",
      "difficulty": "easy",
      "question": "Which organelle is the site of cellular respiration?",
      "options": [
        "mitochondrion",
        "ribosome",
        "nucleus",
        "chloroplast"
      ],
      "answer": 0,
      "explanation": "Mitochondria produce ATP.",
      "id": 1
    },
    {
      "topic": "Cell Biology",
      "difficulty": "easy",
      "question": "Photosynthesis takes place in the ___.",
      "options": [
        "mitochondrion",
        "nucleus",
        "chloroplast",
        "cell wall"
      ],
      "answer": 2,
      "explanation": "Chloroplasts contain chlorophyll.",
      "id": 2
    },
    {
      "topic": "Cell Biology",
      "difficulty": "easy",
      "question": "The cell membrane is ___.",
      "options": [
        "completely permeable",
        "selectively permeable",
        "rigid",
        "non-living"
      ],
      "answer": 1,
      "explanation": "It controls movement of substances.",
      "id": 3
    },
    {
      "topic": "Cell Biology",
      "difficulty": "easy",
      "question": "Ribosomes are responsible for ___.",
      "options": [
        "energy production",
        "cell division",
        "transport",
        "protein synthesis"
      ],
      "answer": 3,
      "explanation": "Ribosomes make proteins.",
      "id": 4
    },
    {
      "topic": "Cell Biology",
      "difficulty": "easy",
      "question": "The nucleus controls ___.",
      "options": [
        "cell activities",
        "digestion",
        "excretion",
        "movement"
      ],
      "answer": 0,
      "explanation": "The nucleus controls cell activities.",
      "id": 5
    },
    {
      "topic": "Cell Biology",
      "difficulty": "easy",
      "question": "Plant cells have a cell wall made of ___.",
      "options": [
        "protein",
        "glycogen",
        "cellulose",
        "lipid"
      ],
      "answer": 2,
      "explanation": "Cell wall is cellulose.",
      "id": 6
    },
    {
      "topic": "Cell Biology",
      "difficulty": "easy",
      "question": "The fluid in which cell organelles are suspended is ___.",
      "options": [
        "nucleus",
        "cytoplasm",
        "membrane",
        "cell wall"
      ],
      "answer": 1,
      "explanation": "Organelles are in cytoplasm.",
      "id": 7
    },
    {
      "topic": "Cell Biology",
      "difficulty": "medium",
      "question": "A cell that lacks a nucleus is ___.",
      "options": [
        "nerve cell",
        "liver cell",
        "egg cell",
        "red blood cell"
      ],
      "answer": 3,
      "explanation": "Mature RBCs lack nucleus.",
      "id": 8
    },
    {
      "topic": "Cell Biology",
      "difficulty": "easy",
      "question": "Which structure controls movement of substances in and out of cell?",
      "options": [
        "cell membrane",
        "cell wall",
        "nucleus",
        "vacuole"
      ],
      "answer": 0,
      "explanation": "Membrane is selective barrier.",
      "id": 9
    },
    {
      "topic": "Cell Biology",
      "difficulty": "easy",
      "question": "The large central vacuole in plant cells is used for ___.",
      "options": [
        "respiration",
        "photosynthesis",
        "storage",
        "movement"
      ],
      "answer": 2,
      "explanation": "Vacuole stores substances.",
      "id": 10
    },
    {
      "topic": "Nutrition",
      "difficulty": "easy",
      "question": "Salivary amylase acts on ___.",
      "options": [
        "protein",
        "starch",
        "fat",
        "glucose"
      ],
      "answer": 1,
      "explanation": "Amylase breaks down starch.",
      "id": 11
    },
    {
      "topic": "Nutrition",
      "difficulty": "easy",
      "question": "The end product of protein digestion is ___.",
      "options": [
        "fatty acids",
        "glucose",
        "starch",
        "amino acids"
      ],
      "answer": 3,
      "explanation": "Proteins break down to amino acids.",
      "id": 12
    },
    {
      "topic": "Nutrition",
      "difficulty": "easy",
      "question": "Bile is produced by the ___.",
      "options": [
        "liver",
        "pancreas",
        "stomach",
        "kidney"
      ],
      "answer": 0,
      "explanation": "Bile is produced in the liver.",
      "id": 13
    },
    {
      "topic": "Nutrition",
      "difficulty": "easy",
      "question": "Which vitamin is produced in the skin by sunlight?",
      "options": [
        "vitamin A",
        "vitamin C",
        "vitamin D",
        "vitamin K"
      ],
      "answer": 2,
      "explanation": "Sunlight enables vitamin D synthesis.",
      "id": 14
    },
    {
      "topic": "Nutrition",
      "difficulty": "easy",
      "question": "The main function of carbohydrates is to provide ___.",
      "options": [
        "growth",
        "energy",
        "immunity",
        "water"
      ],
      "answer": 1,
      "explanation": "Carbohydrates are primary energy sources.",
      "id": 15
    },
    {
      "topic": "Nutrition",
      "difficulty": "easy",
      "question": "The enzyme pepsin acts in the ___.",
      "options": [
        "mouth",
        "small intestine",
        "large intestine",
        "stomach"
      ],
      "answer": 3,
      "explanation": "Pepsin works in the stomach.",
      "id": 16
    },
    {
      "topic": "Nutrition",
      "difficulty": "medium",
      "question": "The enzyme that digests fats is ___.",
      "options": [
        "lipase",
        "amylase",
        "pepsin",
        "trypsin"
      ],
      "answer": 0,
      "explanation": "Lipase digests fats.",
      "id": 17
    },
    {
      "topic": "Nutrition",
      "difficulty": "easy",
      "question": "Absorption of digested food occurs mainly in the ___.",
      "options": [
        "stomach",
        "large intestine",
        "small intestine",
        "mouth"
      ],
      "answer": 2,
      "explanation": "Small intestine absorbs nutrients.",
      "id": 18
    },
    {
      "topic": "Nutrition",
      "difficulty": "easy",
      "question": "The product of starch digestion is ___.",
      "options": [
        "amino acids",
        "glucose",
        "fatty acids",
        "glycerol"
      ],
      "answer": 1,
      "explanation": "Starch ultimately becomes glucose.",
      "id": 19
    },
    {
      "topic": "Nutrition",
      "difficulty": "easy",
      "question": "Which mineral is needed for hemoglobin formation?",
      "options": [
        "calcium",
        "iodine",
        "potassium",
        "iron"
      ],
      "answer": 3,
      "explanation": "Iron is needed for hemoglobin.",
      "id": 20
    },
    {
      "topic": "Transport",
      "difficulty": "easy",
      "question": "Which blood component is responsible for clotting?",
      "options": [
        "platelets",
        "red blood cells",
        "white blood cells",
        "plasma"
      ],
      "answer": 0,
      "explanation": "Platelets help in clotting.",
      "id": 21
    },
    {
      "topic": "Transport",
      "difficulty": "easy",
      "question": "Arteries carry blood ___.",
      "options": [
        "towards the heart",
        "to the lungs only",
        "away from the heart",
        "only to the brain"
      ],
      "answer": 2,
      "explanation": "Arteries carry blood away.",
      "id": 22
    },
    {
      "topic": "Transport",
      "difficulty": "easy",
      "question": "Veins carry blood ___.",
      "options": [
        "away from the heart",
        "towards the heart",
        "only to the lungs",
        "only to the brain"
      ],
      "answer": 1,
      "explanation": "Veins return blood.",
      "id": 23
    },
    {
      "topic": "Transport",
      "difficulty": "easy",
      "question": "Capillaries are important for ___.",
      "options": [
        "pumping blood",
        "producing blood cells",
        "storing oxygen",
        "exchange of materials"
      ],
      "answer": 3,
      "explanation": "Capillaries allow exchange.",
      "id": 24
    },
    {
      "topic": "Transport",
      "difficulty": "easy",
      "question": "The fluid part of blood is ___.",
      "options": [
        "plasma",
        "serum",
        "platelets",
        "hemoglobin"
      ],
      "answer": 0,
      "explanation": "Plasma is the liquid component.",
      "id": 25
    },
    {
      "topic": "Transport",
      "difficulty": "easy",
      "question": "White blood cells are important for ___.",
      "options": [
        "carrying oxygen",
        "clotting",
        "defense against disease",
        "digestion"
      ],
      "answer": 2,
      "explanation": "They fight infections.",
      "id": 26
    },
    {
      "topic": "Transport",
      "difficulty": "easy",
      "question": "The main function of red blood cells is to ___.",
      "options": [
        "fight infection",
        "carry oxygen",
        "clot blood",
        "digest food"
      ],
      "answer": 1,
      "explanation": "RBCs carry oxygen.",
      "id": 27
    },
    {
      "topic": "Transport",
      "difficulty": "easy",
      "question": "The pulse is caused by ___.",
      "options": [
        "breathing",
        "digestion",
        "excretion",
        "heartbeat"
      ],
      "answer": 3,
      "explanation": "Pulse is due to heartbeats.",
      "id": 28
    },
    {
      "topic": "Transport",
      "difficulty": "medium",
      "question": "The blood vessel with the thickest wall is the ___.",
      "options": [
        "artery",
        "vein",
        "capillary",
        "venule"
      ],
      "answer": 0,
      "explanation": "Arteries have thick walls.",
      "id": 29
    },
    {
      "topic": "Transport",
      "difficulty": "medium",
      "question": "Lymph is returned to the blood through the ___.",
      "options": [
        "arteries",
        "veins",
        "lymphatic vessels",
        "capillaries"
      ],
      "answer": 2,
      "explanation": "Lymphatic vessels return lymph.",
      "id": 30
    },
    {
      "topic": "Plant Physiology",
      "difficulty": "easy",
      "question": "Xylem transports ___.",
      "options": [
        "food",
        "water and mineral salts",
        "oxygen",
        "carbon dioxide"
      ],
      "answer": 1,
      "explanation": "Xylem carries water and minerals.",
      "id": 31
    },
    {
      "topic": "Plant Physiology",
      "difficulty": "easy",
      "question": "Phloem transports ___.",
      "options": [
        "water only",
        "minerals only",
        "gases",
        "manufactured food"
      ],
      "answer": 3,
      "explanation": "Phloem carries sugars.",
      "id": 32
    },
    {
      "topic": "Plant Physiology",
      "difficulty": "easy",
      "question": "Transpiration is the ___.",
      "options": [
        "loss of water vapor from leaves",
        "absorption of water by roots",
        "movement of food in phloem",
        "release of oxygen at night"
      ],
      "answer": 0,
      "explanation": "Transpiration is water loss.",
      "id": 33
    },
    {
      "topic": "Plant Physiology",
      "difficulty": "easy",
      "question": "Which of the following is NOT required for seed germination?",
      "options": [
        "water",
        "oxygen",
        "light",
        "suitable temperature"
      ],
      "answer": 2,
      "explanation": "Most seeds do not require light.",
      "id": 34
    },
    {
      "topic": "Plant Physiology",
      "difficulty": "easy",
      "question": "Stomata are found mainly on the ___.",
      "options": [
        "upper surface",
        "lower surface of leaves",
        "roots",
        "flowers"
      ],
      "answer": 1,
      "explanation": "Stomata are mostly on lower surface.",
      "id": 35
    },
    {
      "topic": "Plant Physiology",
      "difficulty": "easy",
      "question": "The main function of chlorophyll is to ___.",
      "options": [
        "produce oxygen",
        "store starch",
        "transport water",
        "absorb light energy"
      ],
      "answer": 3,
      "explanation": "Chlorophyll absorbs light.",
      "id": 36
    },
    {
      "topic": "Plant Physiology",
      "difficulty": "medium",
      "question": "Translocation occurs in the ___.",
      "options": [
        "phloem",
        "xylem",
        "root hair",
        "stomata"
      ],
      "answer": 0,
      "explanation": "Phloem translocates food.",
      "id": 37
    },
    {
      "topic": "Plant Physiology",
      "difficulty": "medium",
      "question": "Root pressure helps in ___.",
      "options": [
        "absorbing light",
        "making food",
        "pushing water up",
        "pollination"
      ],
      "answer": 2,
      "explanation": "Root pressure pushes water upward.",
      "id": 38
    },
    {
      "topic": "Respiration",
      "difficulty": "easy",
      "question": "Gas exchange in humans occurs in the ___.",
      "options": [
        "bronchi",
        "alveoli",
        "trachea",
        "larynx"
      ],
      "answer": 1,
      "explanation": "Alveoli provide large surface area.",
      "id": 39
    },
    {
      "topic": "Respiration",
      "difficulty": "easy",
      "question": "The functional unit of the kidney is the ___.",
      "options": [
        "neuron",
        "alveolus",
        "villus",
        "nephron"
      ],
      "answer": 3,
      "explanation": "Nephrons filter blood.",
      "id": 40
    },
    {
      "topic": "Respiration",
      "difficulty": "easy",
      "question": "Urea is formed in the ___.",
      "options": [
        "liver",
        "kidney",
        "lungs",
        "heart"
      ],
      "answer": 0,
      "explanation": "Urea is produced in the liver.",
      "id": 41
    },
    {
      "topic": "Respiration",
      "difficulty": "medium",
      "question": "Breathing is controlled by the ___.",
      "options": [
        "cerebrum",
        "cerebellum",
        "medulla oblongata",
        "spinal cord"
      ],
      "answer": 2,
      "explanation": "Medulla controls breathing.",
      "id": 42
    },
    {
      "topic": "Respiration",
      "difficulty": "medium",
      "question": "Anaerobic respiration in humans produces ___.",
      "options": [
        "ethanol",
        "lactic acid",
        "carbon dioxide only",
        "water"
      ],
      "answer": 1,
      "explanation": "Anaerobic respiration yields lactic acid.",
      "id": 43
    },
    {
      "topic": "Respiration",
      "difficulty": "easy",
      "question": "The main excretory product in humans is ___.",
      "options": [
        "glucose",
        "starch",
        "fat",
        "urea"
      ],
      "answer": 3,
      "explanation": "Urea is the main nitrogenous waste.",
      "id": 44
    },
    {
      "topic": "Respiration",
      "difficulty": "easy",
      "question": "The organ that removes CO2 from the body is the ___.",
      "options": [
        "lungs",
        "liver",
        "kidney",
        "skin"
      ],
      "answer": 0,
      "explanation": "Lungs remove CO2.",
      "id": 45
    },
    {
      "topic": "Respiration",
      "difficulty": "easy",
      "question": "The process of breathing in is called ___.",
      "options": [
        "exhalation",
        "digestion",
        "inhalation",
        "circulation"
      ],
      "answer": 2,
      "explanation": "Breathing in is inhalation.",
      "id": 46
    },
    {
      "topic": "Respiration",
      "difficulty": "medium",
      "question": "During inhalation, the diaphragm ___.",
      "options": [
        "relaxes",
        "contracts",
        "expands upward",
        "stops moving"
      ],
      "answer": 1,
      "explanation": "Diaphragm contracts and flattens.",
      "id": 47
    },
    {
      "topic": "Respiration",
      "difficulty": "hard",
      "question": "Excretion differs from egestion because excretion removes ___.",
      "options": [
        "undigested food",
        "water only",
        "excess heat",
        "metabolic waste"
      ],
      "answer": 3,
      "explanation": "Excretion removes metabolic waste.",
      "id": 48
    },
    {
      "topic": "Reproduction",
      "difficulty": "easy",
      "question": "Fertilization in humans normally occurs in the ___.",
      "options": [
        "oviduct",
        "uterus",
        "cervix",
        "vagina"
      ],
      "answer": 0,
      "explanation": "Fertilization occurs in oviduct.",
      "id": 49
    },
    {
      "topic": "Reproduction",
      "difficulty": "easy",
      "question": "The male gamete is the ___.",
      "options": [
        "ovum",
        "zygote",
        "sperm cell",
        "embryo"
      ],
      "answer": 2,
      "explanation": "Male gamete is sperm.",
      "id": 50
    },
    {
      "topic": "Reproduction",
      "difficulty": "easy",
      "question": "The female reproductive cell is the ___.",
      "options": [
        "sperm",
        "ovum",
        "zygote",
        "foetus"
      ],
      "answer": 1,
      "explanation": "Ovum is female gamete.",
      "id": 51
    },
    {
      "topic": "Reproduction",
      "difficulty": "easy",
      "question": "The placenta connects the ___.",
      "options": [
        "foetus and cervix",
        "ovary and uterus",
        "mother and ovary",
        "mother and foetus"
      ],
      "answer": 3,
      "explanation": "Placenta connects mother and foetus.",
      "id": 52
    },
    {
      "topic": "Reproduction",
      "difficulty": "medium",
      "question": "Pollination is the transfer of pollen from ___.",
      "options": [
        "anther to stigma",
        "stigma to ovary",
        "ovule to anther",
        "leaf to stem"
      ],
      "answer": 0,
      "explanation": "Pollination is anther to stigma.",
      "id": 53
    },
    {
      "topic": "Reproduction",
      "difficulty": "medium",
      "question": "Self-pollination occurs within the same ___.",
      "options": [
        "plant family",
        "species only",
        "flower",
        "fruit"
      ],
      "answer": 2,
      "explanation": "Self-pollination is within same flower.",
      "id": 54
    },
    {
      "topic": "Reproduction",
      "difficulty": "easy",
      "question": "Asexual reproduction produces offspring that are ___.",
      "options": [
        "genetically different",
        "genetically identical",
        "half the genes",
        "always weaker"
      ],
      "answer": 1,
      "explanation": "Asexual reproduction yields clones.",
      "id": 55
    },
    {
      "topic": "Reproduction",
      "difficulty": "easy",
      "question": "The fusion of gametes is called ___.",
      "options": [
        "germination",
        "pollination",
        "mutation",
        "fertilization"
      ],
      "answer": 3,
      "explanation": "Fusion of gametes is fertilization.",
      "id": 56
    },
    {
      "topic": "Genetics",
      "difficulty": "easy",
      "question": "The chromosome number in a normal human somatic cell is ___.",
      "options": [
        "46",
        "23",
        "92",
        "44"
      ],
      "answer": 0,
      "explanation": "Somatic cells have 46 chromosomes.",
      "id": 57
    },
    {
      "topic": "Genetics",
      "difficulty": "easy",
      "question": "Which of the following represents a heterozygous genotype?",
      "options": [
        "TT",
        "tt",
        "Tt",
        "t"
      ],
      "answer": 2,
      "explanation": "Heterozygous has two different alleles.",
      "id": 58
    },
    {
      "topic": "Genetics",
      "difficulty": "easy",
      "question": "An example of continuous variation is ___.",
      "options": [
        "blood group",
        "human height",
        "tongue rolling",
        "attached earlobe"
      ],
      "answer": 1,
      "explanation": "Height varies continuously.",
      "id": 59
    },
    {
      "topic": "Genetics",
      "difficulty": "medium",
      "question": "Which of the following is a sex-linked trait?",
      "options": [
        "blood group",
        "tongue rolling",
        "height",
        "color blindness"
      ],
      "answer": 3,
      "explanation": "Color blindness is sex-linked.",
      "id": 60
    },
    {
      "topic": "Genetics",
      "difficulty": "hard",
      "question": "Crossing over occurs during ___.",
      "options": [
        "meiosis",
        "mitosis",
        "fertilization",
        "germination"
      ],
      "answer": 0,
      "explanation": "Crossing over occurs in meiosis.",
      "id": 61
    },
    {
      "topic": "Genetics",
      "difficulty": "easy",
      "question": "Mitosis results in ___.",
      "options": [
        "four haploid cells",
        "two haploid cells",
        "two identical diploid cells",
        "four identical diploid cells"
      ],
      "answer": 2,
      "explanation": "Mitosis produces identical cells.",
      "id": 62
    },
    {
      "topic": "Genetics",
      "difficulty": "easy",
      "question": "Meiosis results in ___.",
      "options": [
        "two diploid cells",
        "four haploid gametes",
        "two haploid cells",
        "four diploid cells"
      ],
      "answer": 1,
      "explanation": "Meiosis produces haploid gametes.",
      "id": 63
    },
    {
      "topic": "Genetics",
      "difficulty": "medium",
      "question": "A trait controlled by many genes shows ___.",
      "options": [
        "discontinuous variation",
        "no variation",
        "sex linkage",
        "continuous variation"
      ],
      "answer": 3,
      "explanation": "Polygenic traits show continuous variation.",
      "id": 64
    },
    {
      "topic": "Genetics",
      "difficulty": "easy",
      "question": "The unit of heredity is the ___.",
      "options": [
        "gene",
        "cell",
        "tissue",
        "organelle"
      ],
      "answer": 0,
      "explanation": "Genes carry hereditary information.",
      "id": 65
    },
    {
      "topic": "Genetics",
      "difficulty": "medium",
      "question": "A recessive trait is expressed when ___.",
      "options": [
        "one recessive allele is present",
        "only dominant allele is present",
        "two recessive alleles are present",
        "no allele is present"
      ],
      "answer": 2,
      "explanation": "Recessive shows in homozygous condition.",
      "id": 66
    },
    {
      "topic": "Genetics",
      "difficulty": "easy",
      "question": "The phenotype refers to the ___.",
      "options": [
        "genetic makeup",
        "observable traits",
        "chromosome number",
        "cell type"
      ],
      "answer": 1,
      "explanation": "Phenotype is observable characteristics.",
      "id": 67
    },
    {
      "topic": "Genetics",
      "difficulty": "easy",
      "question": "The genotype refers to the ___.",
      "options": [
        "observable traits",
        "environment",
        "diet",
        "genetic makeup"
      ],
      "answer": 3,
      "explanation": "Genotype is genetic constitution.",
      "id": 68
    },
    {
      "topic": "Ecology",
      "difficulty": "easy",
      "question": "In the food chain grass -> grasshopper -> frog -> snake, the grasshopper is a ___.",
      "options": [
        "primary consumer",
        "secondary consumer",
        "producer",
        "decomposer"
      ],
      "answer": 0,
      "explanation": "Grasshopper feeds on grass.",
      "id": 69
    },
    {
      "topic": "Ecology",
      "difficulty": "easy",
      "question": "Green plants are called ___.",
      "options": [
        "consumers",
        "decomposers",
        "producers",
        "parasites"
      ],
      "answer": 2,
      "explanation": "They produce food by photosynthesis.",
      "id": 70
    },
    {
      "topic": "Ecology",
      "difficulty": "medium",
      "question": "Nitrifying bacteria convert ___.",
      "options": [
        "nitrates to nitrogen gas",
        "ammonia to nitrates",
        "nitrogen gas to ammonia",
        "proteins to amino acids"
      ],
      "answer": 1,
      "explanation": "Nitrifying bacteria form nitrates.",
      "id": 71
    },
    {
      "topic": "Ecology",
      "difficulty": "medium",
      "question": "The oxygen released during photosynthesis comes from ___.",
      "options": [
        "carbon dioxide",
        "glucose",
        "chlorophyll",
        "water"
      ],
      "answer": 3,
      "explanation": "Water is split in photosynthesis.",
      "id": 72
    },
    {
      "topic": "Ecology",
      "difficulty": "easy",
      "question": "The relationship in which both organisms benefit is called ___.",
      "options": [
        "mutualism",
        "parasitism",
        "commensalism",
        "predation"
      ],
      "answer": 0,
      "explanation": "Mutualism benefits both.",
      "id": 73
    },
    {
      "topic": "Ecology",
      "difficulty": "easy",
      "question": "The total number of organisms in a habitat is the ___.",
      "options": [
        "community",
        "ecosystem",
        "population",
        "biome"
      ],
      "answer": 2,
      "explanation": "Population is one species count.",
      "id": 74
    },
    {
      "topic": "Ecology",
      "difficulty": "easy",
      "question": "An organism that breaks down dead matter is a ___.",
      "options": [
        "producer",
        "decomposer",
        "primary consumer",
        "predator"
      ],
      "answer": 1,
      "explanation": "Decomposers break down dead matter.",
      "id": 75
    },
    {
      "topic": "Ecology",
      "difficulty": "easy",
      "question": "Overgrazing can lead to ___.",
      "options": [
        "increased fertility",
        "flood control",
        "more rainfall",
        "soil erosion"
      ],
      "answer": 3,
      "explanation": "Overgrazing removes cover.",
      "id": 76
    },
    {
      "topic": "Ecology",
      "difficulty": "medium",
      "question": "A habitat with many different species has high ___.",
      "options": [
        "biodiversity",
        "pollution",
        "salinity",
        "density"
      ],
      "answer": 0,
      "explanation": "Biodiversity is species variety.",
      "id": 77
    },
    {
      "topic": "Ecology",
      "difficulty": "medium",
      "question": "The cycling of nutrients in nature is called ___.",
      "options": [
        "photosynthesis",
        "digestion",
        "nutrient cycle",
        "respiration"
      ],
      "answer": 2,
      "explanation": "Nutrients cycle through ecosystems.",
      "id": 78
    },
    {
      "topic": "Ecology",
      "difficulty": "medium",
      "question": "A group of organisms of different species in the same area is a ___.",
      "options": [
        "population",
        "community",
        "ecosystem",
        "biome"
      ],
      "answer": 1,
      "explanation": "Community is multiple species.",
      "id": 79
    },
    {
      "topic": "Ecology",
      "difficulty": "easy",
      "question": "An ecosystem includes ___.",
      "options": [
        "living components only",
        "plants only",
        "animals only",
        "living and non-living components"
      ],
      "answer": 3,
      "explanation": "Ecosystem includes biotic and abiotic.",
      "id": 80
    },
    {
      "topic": "Nervous System",
      "difficulty": "medium",
      "question": "In a reflex arc, the neuron that connects the sensory and motor neurons is the ___.",
      "options": [
        "relay neuron",
        "sensory neuron",
        "motor neuron",
        "receptor"
      ],
      "answer": 0,
      "explanation": "Relay neuron links sensory and motor neurons.",
      "id": 81
    },
    {
      "topic": "Nervous System",
      "difficulty": "easy",
      "question": "Insulin is produced by the ___.",
      "options": [
        "liver",
        "thyroid",
        "pancreas",
        "adrenal gland"
      ],
      "answer": 2,
      "explanation": "Pancreas produces insulin.",
      "id": 82
    },
    {
      "topic": "Nervous System",
      "difficulty": "easy",
      "question": "Adrenaline is secreted by the ___.",
      "options": [
        "thyroid",
        "adrenal gland",
        "pancreas",
        "pituitary"
      ],
      "answer": 1,
      "explanation": "Adrenal glands release adrenaline.",
      "id": 83
    },
    {
      "topic": "Nervous System",
      "difficulty": "easy",
      "question": "The brain part responsible for balance is the ___.",
      "options": [
        "cerebrum",
        "medulla",
        "spinal cord",
        "cerebellum"
      ],
      "answer": 3,
      "explanation": "Cerebellum controls balance.",
      "id": 84
    },
    {
      "topic": "Nervous System",
      "difficulty": "easy",
      "question": "The hormone that regulates blood sugar is ___.",
      "options": [
        "insulin",
        "adrenaline",
        "thyroxine",
        "growth hormone"
      ],
      "answer": 0,
      "explanation": "Insulin lowers blood sugar.",
      "id": 85
    },
    {
      "topic": "Nervous System",
      "difficulty": "easy",
      "question": "Nerves transmit impulses as ___.",
      "options": [
        "sound waves",
        "light waves",
        "electrical signals",
        "chemical fumes"
      ],
      "answer": 2,
      "explanation": "Nerve impulses are electrical.",
      "id": 86
    },
    {
      "topic": "Nervous System",
      "difficulty": "medium",
      "question": "The pituitary gland is called the ___.",
      "options": [
        "digestive gland",
        "master gland",
        "excretory gland",
        "salivary gland"
      ],
      "answer": 1,
      "explanation": "Pituitary controls other glands.",
      "id": 87
    },
    {
      "topic": "Nervous System",
      "difficulty": "medium",
      "question": "Homeostasis is the maintenance of a ___.",
      "options": [
        "constant external environment",
        "high temperature",
        "low pressure",
        "constant internal environment"
      ],
      "answer": 3,
      "explanation": "Homeostasis keeps internal conditions stable.",
      "id": 88
    },
    {
      "topic": "Nervous System",
      "difficulty": "medium",
      "question": "The hormone that controls metabolism is ___.",
      "options": [
        "thyroxine",
        "insulin",
        "adrenaline",
        "estrogen"
      ],
      "answer": 0,
      "explanation": "Thyroxine regulates metabolism.",
      "id": 89
    },
    {
      "topic": "Nervous System",
      "difficulty": "easy",
      "question": "The receptor for light in the eye is the ___.",
      "options": [
        "lens",
        "iris",
        "retina",
        "cornea"
      ],
      "answer": 2,
      "explanation": "Retina contains photoreceptors.",
      "id": 90
    },
    {
      "topic": "Microbiology",
      "difficulty": "easy",
      "question": "Viruses can reproduce only inside ___.",
      "options": [
        "water",
        "living cells",
        "air",
        "dead tissue"
      ],
      "answer": 1,
      "explanation": "Viruses are obligate intracellular parasites.",
      "id": 91
    },
    {
      "topic": "Microbiology",
      "difficulty": "medium",
      "question": "Vaccination provides ___ immunity.",
      "options": [
        "natural active",
        "artificial passive",
        "natural passive",
        "artificial active"
      ],
      "answer": 3,
      "explanation": "Vaccines stimulate antibody production.",
      "id": 92
    },
    {
      "topic": "Microbiology",
      "difficulty": "easy",
      "question": "The organism that causes malaria is ___.",
      "options": [
        "Plasmodium",
        "Trypanosoma",
        "Amoeba",
        "Bacteria"
      ],
      "answer": 0,
      "explanation": "Plasmodium causes malaria.",
      "id": 93
    },
    {
      "topic": "Microbiology",
      "difficulty": "easy",
      "question": "Antibiotics are effective against ___.",
      "options": [
        "viruses",
        "fungi",
        "bacteria",
        "worms"
      ],
      "answer": 2,
      "explanation": "Antibiotics target bacteria.",
      "id": 94
    },
    {
      "topic": "Microbiology",
      "difficulty": "easy",
      "question": "A disease that can be transmitted is called ___.",
      "options": [
        "genetic",
        "communicable",
        "non-infectious",
        "deficiency"
      ],
      "answer": 1,
      "explanation": "Communicable diseases spread.",
      "id": 95
    },
    {
      "topic": "Microbiology",
      "difficulty": "easy",
      "question": "The vector of malaria is the ___.",
      "options": [
        "housefly",
        "tsetse fly",
        "cockroach",
        "female Anopheles mosquito"
      ],
      "answer": 3,
      "explanation": "Anopheles mosquito transmits malaria.",
      "id": 96
    },
    {
      "topic": "Microbiology",
      "difficulty": "medium",
      "question": "Immunity developed after recovering from a disease is ___.",
      "options": [
        "natural active",
        "artificial active",
        "natural passive",
        "artificial passive"
      ],
      "answer": 0,
      "explanation": "Recovery gives natural active immunity.",
      "id": 97
    },
    {
      "topic": "Microbiology",
      "difficulty": "easy",
      "question": "HIV affects the body's ___.",
      "options": [
        "digestive system",
        "skeletal system",
        "immune system",
        "circulatory system"
      ],
      "answer": 2,
      "explanation": "HIV attacks immune system.",
      "id": 98
    },
    {
      "topic": "Microbiology",
      "difficulty": "easy",
      "question": "The vaccine that prevents tuberculosis is ___.",
      "options": [
        "OPV",
        "BCG",
        "DPT",
        "Measles"
      ],
      "answer": 1,
      "explanation": "BCG prevents TB.",
      "id": 99
    },
    {
      "topic": "Microbiology",
      "difficulty": "medium",
      "question": "A disease caused by lack of vitamin C is ___.",
      "options": [
        "rickets",
        "goiter",
        "beriberi",
        "scurvy"
      ],
      "answer": 3,
      "explanation": "Vitamin C deficiency causes scurvy.",
      "id": 100
    },
    {
      "topic": "Ecology",
      "difficulty": "medium",
      "question": "A stable climax community is reached after ___.",
      "options": [
        "succession",
        "germination",
        "pollination",
        "transpiration"
      ],
      "answer": 0,
      "explanation": "Succession leads to climax.",
      "id": 101
    },
    {
      "topic": "Ecology",
      "difficulty": "hard",
      "question": "Biomagnification is the increase of toxins along a ___.",
      "options": [
        "water cycle",
        "carbon cycle",
        "food chain",
        "nitrogen cycle"
      ],
      "answer": 2,
      "explanation": "Toxins build up in food chains.",
      "id": 102
    },
    {
      "topic": "Ecology",
      "difficulty": "medium",
      "question": "The maximum population an environment can support is its ___.",
      "options": [
        "density",
        "carrying capacity",
        "niche",
        "biomass"
      ],
      "answer": 1,
      "explanation": "Carrying capacity limits growth.",
      "id": 103
    },
    {
      "topic": "Ecology",
      "difficulty": "easy",
      "question": "Organisms that make their own food are ___.",
      "options": [
        "heterotrophs",
        "parasites",
        "saprophytes",
        "autotrophs"
      ],
      "answer": 3,
      "explanation": "Autotrophs produce food.",
      "id": 104
    },
    {
      "topic": "Ecology",
      "difficulty": "easy",
      "question": "An organism that feeds on dead organic matter is a ___.",
      "options": [
        "saprophyte",
        "producer",
        "herbivore",
        "omnivore"
      ],
      "answer": 0,
      "explanation": "Saprophytes feed on dead matter.",
      "id": 105
    },
    {
      "topic": "Ecology",
      "difficulty": "easy",
      "question": "The transfer of energy between organisms is a ___.",
      "options": [
        "habitat",
        "ecosystem",
        "food chain",
        "biome"
      ],
      "answer": 2,
      "explanation": "Food chain shows energy flow.",
      "id": 106
    },
    {
      "topic": "Ecology",
      "difficulty": "easy",
      "question": "The organism that eats both plants and animals is ___.",
      "options": [
        "herbivore",
        "omnivore",
        "carnivore",
        "producer"
      ],
      "answer": 1,
      "explanation": "Omnivores eat both.",
      "id": 107
    },
    {
      "topic": "Ecology",
      "difficulty": "easy",
      "question": "Conservation is important to prevent ___.",
      "options": [
        "mutation",
        "pollination",
        "photosynthesis",
        "extinction"
      ],
      "answer": 3,
      "explanation": "Conservation protects species.",
      "id": 108
    },
    {
      "topic": "Ecology",
      "difficulty": "easy",
      "question": "Rainfall and temperature are ___ factors in an ecosystem.",
      "options": [
        "abiotic",
        "biotic",
        "parasitic",
        "symbiotic"
      ],
      "answer": 0,
      "explanation": "Abiotic = non-living.",
      "id": 109
    },
    {
      "topic": "Ecology",
      "difficulty": "easy",
      "question": "A group of similar organisms that can interbreed is a ___.",
      "options": [
        "population",
        "community",
        "species",
        "habitat"
      ],
      "answer": 2,
      "explanation": "Species interbreed.",
      "id": 110
    },
    {
      "topic": "Genetics",
      "difficulty": "hard",
      "question": "Human blood group AB is an example of ___.",
      "options": [
        "incomplete dominance",
        "codominance",
        "linkage",
        "mutation"
      ],
      "answer": 1,
      "explanation": "A and B alleles are both expressed.",
      "id": 111
    },
    {
      "topic": "Genetics",
      "difficulty": "medium",
      "question": "A sudden change in genetic material is a ___.",
      "options": [
        "variation",
        "selection",
        "hybrid",
        "mutation"
      ],
      "answer": 3,
      "explanation": "Mutation alters DNA.",
      "id": 112
    },
    {
      "topic": "Genetics",
      "difficulty": "medium",
      "question": "DNA stands for ___.",
      "options": [
        "deoxyribonucleic acid",
        "dideoxyribonucleic acid",
        "deoxyribose acid",
        "dinitrogen acid"
      ],
      "answer": 0,
      "explanation": "DNA full name.",
      "id": 113
    },
    {
      "topic": "Genetics",
      "difficulty": "medium",
      "question": "The molecule that carries genetic code to ribosomes is ___.",
      "options": [
        "tRNA",
        "rRNA",
        "mRNA",
        "DNA"
      ],
      "answer": 2,
      "explanation": "mRNA carries code.",
      "id": 114
    },
    {
      "topic": "Genetics",
      "difficulty": "hard",
      "question": "The process of making mRNA from DNA is ___.",
      "options": [
        "translation",
        "transcription",
        "replication",
        "mutation"
      ],
      "answer": 1,
      "explanation": "Transcription makes RNA.",
      "id": 115
    },
    {
      "topic": "Genetics",
      "difficulty": "hard",
      "question": "The process of making proteins from mRNA is ___.",
      "options": [
        "transcription",
        "replication",
        "mutation",
        "translation"
      ],
      "answer": 3,
      "explanation": "Translation makes proteins.",
      "id": 116
    },
    {
      "topic": "Genetics",
      "difficulty": "medium",
      "question": "The set of all genes in an organism is its ___.",
      "options": [
        "genome",
        "phenotype",
        "chromatid",
        "nucleus"
      ],
      "answer": 0,
      "explanation": "Genome is total genetic material.",
      "id": 117
    },
    {
      "topic": "Genetics",
      "difficulty": "easy",
      "question": "A dominant allele is represented by a ___.",
      "options": [
        "small letter",
        "number",
        "capital letter",
        "symbol"
      ],
      "answer": 2,
      "explanation": "Dominant allele uses capital.",
      "id": 118
    },
    {
      "topic": "Genetics",
      "difficulty": "easy",
      "question": "Chromosomes are found in the ___.",
      "options": [
        "cytoplasm",
        "nucleus",
        "cell wall",
        "ribosome"
      ],
      "answer": 1,
      "explanation": "Chromosomes are nuclear.",
      "id": 119
    },
    {
      "topic": "Genetics",
      "difficulty": "medium",
      "question": "Sex-linked traits are carried on the ___.",
      "options": [
        "Y chromosome only",
        "autosome",
        "mitochondrion",
        "X chromosome"
      ],
      "answer": 3,
      "explanation": "Most sex-linked traits are on X.",
      "id": 120
    },
    {
      "topic": "Reproduction",
      "difficulty": "medium",
      "question": "Cross-pollination occurs between ___.",
      "options": [
        "different plants",
        "same flower",
        "same plant only",
        "same ovary"
      ],
      "answer": 0,
      "explanation": "Cross-pollination involves different plants.",
      "id": 121
    },
    {
      "topic": "Reproduction",
      "difficulty": "easy",
      "question": "Asexual reproduction in yeast is by ___.",
      "options": [
        "fragmentation",
        "spores",
        "budding",
        "fusion"
      ],
      "answer": 2,
      "explanation": "Yeast reproduces by budding.",
      "id": 122
    },
    {
      "topic": "Reproduction",
      "difficulty": "easy",
      "question": "Asexual reproduction in spirogyra is by ___.",
      "options": [
        "budding",
        "fragmentation",
        "spores",
        "conjugation"
      ],
      "answer": 1,
      "explanation": "Spirogyra fragments.",
      "id": 123
    },
    {
      "topic": "Reproduction",
      "difficulty": "medium",
      "question": "Vegetative propagation using stem cuttings is common in ___.",
      "options": [
        "maize",
        "rice",
        "wheat",
        "cassava"
      ],
      "answer": 3,
      "explanation": "Cassava is propagated by cuttings.",
      "id": 124
    },
    {
      "topic": "Reproduction",
      "difficulty": "easy",
      "question": "The period of pregnancy in humans is about ___.",
      "options": [
        "9 months",
        "6 months",
        "12 months",
        "3 months"
      ],
      "answer": 0,
      "explanation": "Human gestation is about 9 months.",
      "id": 125
    },
    {
      "topic": "Reproduction",
      "difficulty": "hard",
      "question": "The female reproductive hormone that maintains pregnancy is ___.",
      "options": [
        "estrogen",
        "testosterone",
        "progesterone",
        "insulin"
      ],
      "answer": 2,
      "explanation": "Progesterone maintains pregnancy.",
      "id": 126
    },
    {
      "topic": "Reproduction",
      "difficulty": "easy",
      "question": "The male reproductive hormone is ___.",
      "options": [
        "estrogen",
        "testosterone",
        "progesterone",
        "insulin"
      ],
      "answer": 1,
      "explanation": "Testosterone is male hormone.",
      "id": 127
    },
    {
      "topic": "Reproduction",
      "difficulty": "easy",
      "question": "The ovum is released during ___.",
      "options": [
        "fertilization",
        "menstruation",
        "implantation",
        "ovulation"
      ],
      "answer": 3,
      "explanation": "Ovum release is ovulation.",
      "id": 128
    },
    {
      "topic": "Reproduction",
      "difficulty": "medium",
      "question": "The embryo attaches to the uterus during ___.",
      "options": [
        "implantation",
        "ovulation",
        "pollination",
        "germination"
      ],
      "answer": 0,
      "explanation": "Implantation anchors embryo.",
      "id": 129
    },
    {
      "topic": "Reproduction",
      "difficulty": "easy",
      "question": "The placenta develops in the ___.",
      "options": [
        "ovary",
        "oviduct",
        "uterus",
        "vagina"
      ],
      "answer": 2,
      "explanation": "Placenta forms in uterus.",
      "id": 130
    },
    {
      "topic": "Human Physiology",
      "difficulty": "medium",
      "question": "The largest artery in the body is the ___.",
      "options": [
        "vena cava",
        "aorta",
        "capillary",
        "pulmonary vein"
      ],
      "answer": 1,
      "explanation": "Aorta carries blood from heart.",
      "id": 131
    },
    {
      "topic": "Human Physiology",
      "difficulty": "easy",
      "question": "The enzyme that digests protein in the stomach is ___.",
      "options": [
        "amylase",
        "lipase",
        "maltase",
        "pepsin"
      ],
      "answer": 3,
      "explanation": "Pepsin digests proteins.",
      "id": 132
    },
    {
      "topic": "Human Physiology",
      "difficulty": "easy",
      "question": "Bile is stored in the ___.",
      "options": [
        "gall bladder",
        "pancreas",
        "stomach",
        "kidney"
      ],
      "answer": 0,
      "explanation": "Gall bladder stores bile.",
      "id": 133
    },
    {
      "topic": "Human Physiology",
      "difficulty": "easy",
      "question": "The organ that filters blood and produces urine is the ___.",
      "options": [
        "liver",
        "heart",
        "kidney",
        "lung"
      ],
      "answer": 2,
      "explanation": "Kidney filters blood.",
      "id": 134
    },
    {
      "topic": "Human Physiology",
      "difficulty": "easy",
      "question": "The smallest blood vessels are ___.",
      "options": [
        "arteries",
        "capillaries",
        "veins",
        "aorta"
      ],
      "answer": 1,
      "explanation": "Capillaries are smallest.",
      "id": 135
    },
    {
      "topic": "Human Physiology",
      "difficulty": "easy",
      "question": "The bone that protects the brain is the ___.",
      "options": [
        "rib",
        "femur",
        "humerus",
        "skull"
      ],
      "answer": 3,
      "explanation": "Skull protects brain.",
      "id": 136
    },
    {
      "topic": "Human Physiology",
      "difficulty": "easy",
      "question": "The white blood cells are responsible for ___.",
      "options": [
        "defense",
        "oxygen transport",
        "blood clotting",
        "energy storage"
      ],
      "answer": 0,
      "explanation": "WBCs defend the body.",
      "id": 137
    },
    {
      "topic": "Human Physiology",
      "difficulty": "hard",
      "question": "The valve between the left atrium and left ventricle is the ___.",
      "options": [
        "tricuspid valve",
        "aortic valve",
        "bicuspid valve",
        "pulmonary valve"
      ],
      "answer": 2,
      "explanation": "Bicuspid is on left side.",
      "id": 138
    },
    {
      "topic": "Human Physiology",
      "difficulty": "medium",
      "question": "The part of the ear responsible for balance is the ___.",
      "options": [
        "cochlea",
        "semicircular canals",
        "eardrum",
        "pinna"
      ],
      "answer": 1,
      "explanation": "Semicircular canals control balance.",
      "id": 139
    },
    {
      "topic": "Human Physiology",
      "difficulty": "medium",
      "question": "The main function of the large intestine is ___.",
      "options": [
        "digestion of protein",
        "bile production",
        "gas exchange",
        "water absorption"
      ],
      "answer": 3,
      "explanation": "Large intestine absorbs water.",
      "id": 140
    },
    {
      "topic": "Plant Physiology",
      "difficulty": "easy",
      "question": "A plant response to gravity is called ___.",
      "options": [
        "geotropism",
        "phototropism",
        "hydrotropism",
        "thigmotropism"
      ],
      "answer": 0,
      "explanation": "Gravity response is geotropism.",
      "id": 141
    },
    {
      "topic": "Plant Physiology",
      "difficulty": "medium",
      "question": "A plant response to touch is called ___.",
      "options": [
        "phototropism",
        "geotropism",
        "thigmotropism",
        "hydrotropism"
      ],
      "answer": 2,
      "explanation": "Touch response is thigmotropism.",
      "id": 142
    },
    {
      "topic": "Plant Physiology",
      "difficulty": "easy",
      "question": "Seeds require ___ for germination.",
      "options": [
        "light only",
        "water and oxygen",
        "carbon dioxide",
        "mineral salts only"
      ],
      "answer": 1,
      "explanation": "Water and oxygen are essential.",
      "id": 143
    },
    {
      "topic": "Plant Physiology",
      "difficulty": "easy",
      "question": "The opening in a leaf for gas exchange is the ___.",
      "options": [
        "lenticel",
        "xylem",
        "phloem",
        "stomata"
      ],
      "answer": 3,
      "explanation": "Stomata allow gas exchange.",
      "id": 144
    },
    {
      "topic": "Plant Physiology",
      "difficulty": "medium",
      "question": "A plant that grows in water is a ___.",
      "options": [
        "hydrophyte",
        "xerophyte",
        "mesophyte",
        "epiphyte"
      ],
      "answer": 0,
      "explanation": "Hydrophytes live in water.",
      "id": 145
    },
    {
      "topic": "Plant Physiology",
      "difficulty": "medium",
      "question": "A plant that grows in dry areas is a ___.",
      "options": [
        "hydrophyte",
        "mesophyte",
        "xerophyte",
        "epiphyte"
      ],
      "answer": 2,
      "explanation": "Xerophytes survive dry areas.",
      "id": 146
    },
    {
      "topic": "Plant Physiology",
      "difficulty": "easy",
      "question": "The process of making food in plants is ___.",
      "options": [
        "respiration",
        "photosynthesis",
        "transpiration",
        "germination"
      ],
      "answer": 1,
      "explanation": "Photosynthesis makes food.",
      "id": 147
    },
    {
      "topic": "Plant Physiology",
      "difficulty": "easy",
      "question": "The pigment that absorbs light for photosynthesis is ___.",
      "options": [
        "hemoglobin",
        "melanin",
        "keratin",
        "chlorophyll"
      ],
      "answer": 3,
      "explanation": "Chlorophyll absorbs light.",
      "id": 148
    },
    {
      "topic": "Plant Physiology",
      "difficulty": "medium",
      "question": "Closing of stomata reduces ___.",
      "options": [
        "water loss",
        "food production",
        "oxygen release",
        "root growth"
      ],
      "answer": 0,
      "explanation": "Stomata control transpiration.",
      "id": 149
    },
    {
      "topic": "Plant Physiology",
      "difficulty": "hard",
      "question": "The movement of water through xylem is driven by ___.",
      "options": [
        "root pressure only",
        "diffusion of sugar",
        "transpiration pull",
        "gravity only"
      ],
      "answer": 2,
      "explanation": "Transpiration pull lifts water.",
      "id": 150
    }
  ],
  "economics": [
    {
      "topic": "Basic Concepts",
      "difficulty": "easy",
      "question": "The term 'Scarcity' refers to ___.",
      "options": [
        "the next best alternative forgone",
        "limited resources relative to unlimited wants",
        "land, labor, capital and enterprise",
        "willingness and ability to buy at a given price"
      ],
      "answer": 1,
      "explanation": "Scarcity means limited resources relative to unlimited wants.",
      "id": 1
    },
    {
      "topic": "Basic Concepts",
      "difficulty": "easy",
      "question": "The term 'Opportunity cost' refers to ___.",
      "options": [
        "the next best alternative forgone",
        "land, labor, capital and enterprise",
        "willingness and ability to buy at a given price",
        "quantity offered for sale at various prices"
      ],
      "answer": 0,
      "explanation": "Opportunity cost means the next best alternative forgone.",
      "id": 2
    },
    {
      "topic": "Basic Concepts",
      "difficulty": "easy",
      "question": "The term 'Factors of production' refers to ___.",
      "options": [
        "willingness and ability to buy at a given price",
        "quantity offered for sale at various prices",
        "land, labor, capital and enterprise",
        "where quantity demanded equals quantity supplied"
      ],
      "answer": 2,
      "explanation": "Factors of production means land, labor, capital and enterprise.",
      "id": 3
    },
    {
      "topic": "Demand and Supply",
      "difficulty": "easy",
      "question": "The term 'Demand' refers to ___.",
      "options": [
        "quantity offered for sale at various prices",
        "where quantity demanded equals quantity supplied",
        "responsiveness of quantity demanded to price changes",
        "willingness and ability to buy at a given price"
      ],
      "answer": 3,
      "explanation": "Demand means willingness and ability to buy at a given price.",
      "id": 4
    },
    {
      "topic": "Demand and Supply",
      "difficulty": "easy",
      "question": "The term 'Supply' refers to ___.",
      "options": [
        "where quantity demanded equals quantity supplied",
        "quantity offered for sale at various prices",
        "responsiveness of quantity demanded to price changes",
        "a good whose demand falls as income rises"
      ],
      "answer": 1,
      "explanation": "Supply means quantity offered for sale at various prices.",
      "id": 5
    },
    {
      "topic": "Demand and Supply",
      "difficulty": "medium",
      "question": "The term 'Equilibrium' refers to ___.",
      "options": [
        "where quantity demanded equals quantity supplied",
        "responsiveness of quantity demanded to price changes",
        "a good whose demand falls as income rises",
        "a good that can replace another"
      ],
      "answer": 0,
      "explanation": "Equilibrium means where quantity demanded equals quantity supplied.",
      "id": 6
    },
    {
      "topic": "Demand and Supply",
      "difficulty": "medium",
      "question": "The term 'Elasticity of demand' refers to ___.",
      "options": [
        "a good whose demand falls as income rises",
        "a good that can replace another",
        "responsiveness of quantity demanded to price changes",
        "a good used together with another"
      ],
      "answer": 2,
      "explanation": "Elasticity of demand means responsiveness of quantity demanded to price changes.",
      "id": 7
    },
    {
      "topic": "Demand and Supply",
      "difficulty": "medium",
      "question": "The term 'Inferior good' refers to ___.",
      "options": [
        "a good that can replace another",
        "a good used together with another",
        "cost of producing one extra unit",
        "a good whose demand falls as income rises"
      ],
      "answer": 3,
      "explanation": "Inferior good means a good whose demand falls as income rises.",
      "id": 8
    },
    {
      "topic": "Demand and Supply",
      "difficulty": "easy",
      "question": "The term 'Substitute' refers to ___.",
      "options": [
        "a good used together with another",
        "a good that can replace another",
        "cost of producing one extra unit",
        "total cost divided by output"
      ],
      "answer": 1,
      "explanation": "Substitute means a good that can replace another.",
      "id": 9
    },
    {
      "topic": "Demand and Supply",
      "difficulty": "easy",
      "question": "The term 'Complement' refers to ___.",
      "options": [
        "a good used together with another",
        "cost of producing one extra unit",
        "total cost divided by output",
        "cost that does not change with output"
      ],
      "answer": 0,
      "explanation": "Complement means a good used together with another.",
      "id": 10
    },
    {
      "topic": "Production",
      "difficulty": "medium",
      "question": "The term 'Marginal cost' refers to ___.",
      "options": [
        "total cost divided by output",
        "cost that does not change with output",
        "cost of producing one extra unit",
        "cost that changes with output"
      ],
      "answer": 2,
      "explanation": "Marginal cost means cost of producing one extra unit.",
      "id": 11
    },
    {
      "topic": "Production",
      "difficulty": "medium",
      "question": "The term 'Average cost' refers to ___.",
      "options": [
        "cost that does not change with output",
        "cost that changes with output",
        "cost advantages from large-scale production",
        "total cost divided by output"
      ],
      "answer": 3,
      "explanation": "Average cost means total cost divided by output.",
      "id": 12
    },
    {
      "topic": "Production",
      "difficulty": "easy",
      "question": "The term 'Fixed cost' refers to ___.",
      "options": [
        "cost that changes with output",
        "cost that does not change with output",
        "cost advantages from large-scale production",
        "cost disadvantages from too large a scale"
      ],
      "answer": 1,
      "explanation": "Fixed cost means cost that does not change with output.",
      "id": 13
    },
    {
      "topic": "Production",
      "difficulty": "easy",
      "question": "The term 'Variable cost' refers to ___.",
      "options": [
        "cost that changes with output",
        "cost advantages from large-scale production",
        "cost disadvantages from too large a scale",
        "market with a single seller"
      ],
      "answer": 0,
      "explanation": "Variable cost means cost that changes with output.",
      "id": 14
    },
    {
      "topic": "Production",
      "difficulty": "medium",
      "question": "The term 'Economies of scale' refers to ___.",
      "options": [
        "cost disadvantages from too large a scale",
        "market with a single seller",
        "cost advantages from large-scale production",
        "market with many sellers and identical products"
      ],
      "answer": 2,
      "explanation": "Economies of scale means cost advantages from large-scale production.",
      "id": 15
    },
    {
      "topic": "Production",
      "difficulty": "medium",
      "question": "The term 'Diseconomies of scale' refers to ___.",
      "options": [
        "market with a single seller",
        "market with many sellers and identical products",
        "market with a few dominant firms",
        "cost disadvantages from too large a scale"
      ],
      "answer": 3,
      "explanation": "Diseconomies of scale means cost disadvantages from too large a scale.",
      "id": 16
    },
    {
      "topic": "Market Structures",
      "difficulty": "easy",
      "question": "The term 'Monopoly' refers to ___.",
      "options": [
        "market with many sellers and identical products",
        "market with a single seller",
        "market with a few dominant firms",
        "total value of goods and services produced within a country"
      ],
      "answer": 1,
      "explanation": "Monopoly means market with a single seller.",
      "id": 17
    },
    {
      "topic": "Market Structures",
      "difficulty": "easy",
      "question": "The term 'Perfect competition' refers to ___.",
      "options": [
        "market with many sellers and identical products",
        "market with a few dominant firms",
        "total value of goods and services produced within a country",
        "GDP plus net income from abroad"
      ],
      "answer": 0,
      "explanation": "Perfect competition means market with many sellers and identical products.",
      "id": 18
    },
    {
      "topic": "Market Structures",
      "difficulty": "medium",
      "question": "The term 'Oligopoly' refers to ___.",
      "options": [
        "total value of goods and services produced within a country",
        "GDP plus net income from abroad",
        "market with a few dominant firms",
        "general rise in price levels"
      ],
      "answer": 2,
      "explanation": "Oligopoly means market with a few dominant firms.",
      "id": 19
    },
    {
      "topic": "Macroeconomics",
      "difficulty": "easy",
      "question": "The term 'GDP' refers to ___.",
      "options": [
        "GDP plus net income from abroad",
        "general rise in price levels",
        "general fall in price levels",
        "total value of goods and services produced within a country"
      ],
      "answer": 3,
      "explanation": "GDP means total value of goods and services produced within a country.",
      "id": 20
    },
    {
      "topic": "Macroeconomics",
      "difficulty": "medium",
      "question": "The term 'GNP' refers to ___.",
      "options": [
        "general rise in price levels",
        "GDP plus net income from abroad",
        "general fall in price levels",
        "willing and able workers without jobs"
      ],
      "answer": 1,
      "explanation": "GNP means GDP plus net income from abroad.",
      "id": 21
    },
    {
      "topic": "Macroeconomics",
      "difficulty": "easy",
      "question": "The term 'Inflation' refers to ___.",
      "options": [
        "general rise in price levels",
        "general fall in price levels",
        "willing and able workers without jobs",
        "measure of changes in average prices"
      ],
      "answer": 0,
      "explanation": "Inflation means general rise in price levels.",
      "id": 22
    },
    {
      "topic": "Macroeconomics",
      "difficulty": "easy",
      "question": "The term 'Deflation' refers to ___.",
      "options": [
        "willing and able workers without jobs",
        "measure of changes in average prices",
        "general fall in price levels",
        "use of taxation and government spending"
      ],
      "answer": 2,
      "explanation": "Deflation means general fall in price levels.",
      "id": 23
    },
    {
      "topic": "Macroeconomics",
      "difficulty": "easy",
      "question": "The term 'Unemployment' refers to ___.",
      "options": [
        "measure of changes in average prices",
        "use of taxation and government spending",
        "control of money supply and interest rates",
        "willing and able workers without jobs"
      ],
      "answer": 3,
      "explanation": "Unemployment means willing and able workers without jobs.",
      "id": 24
    },
    {
      "topic": "Macroeconomics",
      "difficulty": "medium",
      "question": "The term 'CPI' refers to ___.",
      "options": [
        "use of taxation and government spending",
        "measure of changes in average prices",
        "control of money supply and interest rates",
        "bank that regulates monetary policy"
      ],
      "answer": 1,
      "explanation": "CPI means measure of changes in average prices.",
      "id": 25
    },
    {
      "topic": "Public Finance",
      "difficulty": "medium",
      "question": "The term 'Fiscal policy' refers to ___.",
      "options": [
        "use of taxation and government spending",
        "control of money supply and interest rates",
        "bank that regulates monetary policy",
        "bank that accepts deposits and lends"
      ],
      "answer": 0,
      "explanation": "Fiscal policy means use of taxation and government spending.",
      "id": 26
    },
    {
      "topic": "Public Finance",
      "difficulty": "medium",
      "question": "The term 'Monetary policy' refers to ___.",
      "options": [
        "bank that regulates monetary policy",
        "bank that accepts deposits and lends",
        "control of money supply and interest rates",
        "total amount of money in circulation"
      ],
      "answer": 2,
      "explanation": "Monetary policy means control of money supply and interest rates.",
      "id": 27
    },
    {
      "topic": "Money and Banking",
      "difficulty": "easy",
      "question": "The term 'Central bank' refers to ___.",
      "options": [
        "bank that accepts deposits and lends",
        "total amount of money in circulation",
        "government spending exceeds revenue",
        "bank that regulates monetary policy"
      ],
      "answer": 3,
      "explanation": "Central bank means bank that regulates monetary policy.",
      "id": 28
    },
    {
      "topic": "Money and Banking",
      "difficulty": "easy",
      "question": "The term 'Commercial bank' refers to ___.",
      "options": [
        "total amount of money in circulation",
        "bank that accepts deposits and lends",
        "government spending exceeds revenue",
        "government revenue exceeds spending"
      ],
      "answer": 1,
      "explanation": "Commercial bank means bank that accepts deposits and lends.",
      "id": 29
    },
    {
      "topic": "Money and Banking",
      "difficulty": "medium",
      "question": "The term 'Money supply' refers to ___.",
      "options": [
        "total amount of money in circulation",
        "government spending exceeds revenue",
        "government revenue exceeds spending",
        "difference between exports and imports of goods"
      ],
      "answer": 0,
      "explanation": "Money supply means total amount of money in circulation.",
      "id": 30
    },
    {
      "topic": "Public Finance",
      "difficulty": "easy",
      "question": "The term 'Budget deficit' refers to ___.",
      "options": [
        "government revenue exceeds spending",
        "difference between exports and imports of goods",
        "government spending exceeds revenue",
        "record of all transactions with the rest of the world"
      ],
      "answer": 2,
      "explanation": "Budget deficit means government spending exceeds revenue.",
      "id": 31
    },
    {
      "topic": "Public Finance",
      "difficulty": "easy",
      "question": "The term 'Budget surplus' refers to ___.",
      "options": [
        "difference between exports and imports of goods",
        "record of all transactions with the rest of the world",
        "official reduction in the value of a currency",
        "government revenue exceeds spending"
      ],
      "answer": 3,
      "explanation": "Budget surplus means government revenue exceeds spending.",
      "id": 32
    },
    {
      "topic": "International Trade",
      "difficulty": "medium",
      "question": "The term 'Balance of trade' refers to ___.",
      "options": [
        "record of all transactions with the rest of the world",
        "difference between exports and imports of goods",
        "official reduction in the value of a currency",
        "price of one currency in terms of another"
      ],
      "answer": 1,
      "explanation": "Balance of trade means difference between exports and imports of goods.",
      "id": 33
    },
    {
      "topic": "International Trade",
      "difficulty": "hard",
      "question": "The term 'Balance of payments' refers to ___.",
      "options": [
        "record of all transactions with the rest of the world",
        "official reduction in the value of a currency",
        "price of one currency in terms of another",
        "tax on imported goods"
      ],
      "answer": 0,
      "explanation": "Balance of payments means record of all transactions with the rest of the world.",
      "id": 34
    },
    {
      "topic": "International Trade",
      "difficulty": "hard",
      "question": "The term 'Devaluation' refers to ___.",
      "options": [
        "price of one currency in terms of another",
        "tax on imported goods",
        "official reduction in the value of a currency",
        "financial assistance to producers"
      ],
      "answer": 2,
      "explanation": "Devaluation means official reduction in the value of a currency.",
      "id": 35
    },
    {
      "topic": "International Trade",
      "difficulty": "medium",
      "question": "The term 'Exchange rate' refers to ___.",
      "options": [
        "tax on imported goods",
        "financial assistance to producers",
        "good that is non-rival and non-excludable",
        "price of one currency in terms of another"
      ],
      "answer": 3,
      "explanation": "Exchange rate means price of one currency in terms of another.",
      "id": 36
    },
    {
      "topic": "International Trade",
      "difficulty": "easy",
      "question": "The term 'Tariff' refers to ___.",
      "options": [
        "financial assistance to producers",
        "tax on imported goods",
        "good that is non-rival and non-excludable",
        "cost or benefit imposed on third parties"
      ],
      "answer": 1,
      "explanation": "Tariff means tax on imported goods.",
      "id": 37
    },
    {
      "topic": "Public Finance",
      "difficulty": "medium",
      "question": "The term 'Subsidy' refers to ___.",
      "options": [
        "financial assistance to producers",
        "good that is non-rival and non-excludable",
        "cost or benefit imposed on third parties",
        "increase in real output over time"
      ],
      "answer": 0,
      "explanation": "Subsidy means financial assistance to producers.",
      "id": 38
    },
    {
      "topic": "Basic Concepts",
      "difficulty": "hard",
      "question": "The term 'Public good' refers to ___.",
      "options": [
        "cost or benefit imposed on third parties",
        "increase in real output over time",
        "good that is non-rival and non-excludable",
        "improvement in standard of living and welfare"
      ],
      "answer": 2,
      "explanation": "Public good means good that is non-rival and non-excludable.",
      "id": 39
    },
    {
      "topic": "Basic Concepts",
      "difficulty": "hard",
      "question": "The term 'Externality' refers to ___.",
      "options": [
        "increase in real output over time",
        "improvement in standard of living and welfare",
        "national income divided by population",
        "cost or benefit imposed on third parties"
      ],
      "answer": 3,
      "explanation": "Externality means cost or benefit imposed on third parties.",
      "id": 40
    },
    {
      "topic": "Development",
      "difficulty": "medium",
      "question": "The term 'Economic growth' refers to ___.",
      "options": [
        "improvement in standard of living and welfare",
        "increase in real output over time",
        "national income divided by population",
        "income not spent on consumption"
      ],
      "answer": 1,
      "explanation": "Economic growth means increase in real output over time.",
      "id": 41
    },
    {
      "topic": "Development",
      "difficulty": "medium",
      "question": "The term 'Development' refers to ___.",
      "options": [
        "improvement in standard of living and welfare",
        "national income divided by population",
        "income not spent on consumption",
        "purchase of capital goods"
      ],
      "answer": 0,
      "explanation": "Development means improvement in standard of living and welfare.",
      "id": 42
    },
    {
      "topic": "Development",
      "difficulty": "easy",
      "question": "The term 'Per capita income' refers to ___.",
      "options": [
        "income not spent on consumption",
        "purchase of capital goods",
        "national income divided by population",
        "consumers determine what is produced"
      ],
      "answer": 2,
      "explanation": "Per capita income means national income divided by population.",
      "id": 43
    },
    {
      "topic": "Money and Banking",
      "difficulty": "easy",
      "question": "The term 'Savings' refers to ___.",
      "options": [
        "purchase of capital goods",
        "consumers determine what is produced",
        "maximum legal price",
        "income not spent on consumption"
      ],
      "answer": 3,
      "explanation": "Savings means income not spent on consumption.",
      "id": 44
    },
    {
      "topic": "Money and Banking",
      "difficulty": "medium",
      "question": "The term 'Investment' refers to ___.",
      "options": [
        "consumers determine what is produced",
        "purchase of capital goods",
        "maximum legal price",
        "minimum legal price"
      ],
      "answer": 1,
      "explanation": "Investment means purchase of capital goods.",
      "id": 45
    },
    {
      "topic": "Basic Concepts",
      "difficulty": "medium",
      "question": "The term 'Consumer sovereignty' refers to ___.",
      "options": [
        "consumers determine what is produced",
        "maximum legal price",
        "minimum legal price",
        "transfer of public enterprises to private ownership"
      ],
      "answer": 0,
      "explanation": "Consumer sovereignty means consumers determine what is produced.",
      "id": 46
    },
    {
      "topic": "Demand and Supply",
      "difficulty": "medium",
      "question": "The term 'Price ceiling' refers to ___.",
      "options": [
        "minimum legal price",
        "transfer of public enterprises to private ownership",
        "maximum legal price",
        "inefficient allocation of resources by the market"
      ],
      "answer": 2,
      "explanation": "Price ceiling means maximum legal price.",
      "id": 47
    },
    {
      "topic": "Demand and Supply",
      "difficulty": "medium",
      "question": "The term 'Price floor' refers to ___.",
      "options": [
        "transfer of public enterprises to private ownership",
        "inefficient allocation of resources by the market",
        "responsiveness of quantity supplied to price changes",
        "minimum legal price"
      ],
      "answer": 3,
      "explanation": "Price floor means minimum legal price.",
      "id": 48
    },
    {
      "topic": "Development",
      "difficulty": "hard",
      "question": "The term 'Privatization' refers to ___.",
      "options": [
        "inefficient allocation of resources by the market",
        "transfer of public enterprises to private ownership",
        "responsiveness of quantity supplied to price changes",
        "extra satisfaction from one more unit consumed"
      ],
      "answer": 1,
      "explanation": "Privatization means transfer of public enterprises to private ownership.",
      "id": 49
    },
    {
      "topic": "Basic Concepts",
      "difficulty": "hard",
      "question": "The term 'Market failure' refers to ___.",
      "options": [
        "inefficient allocation of resources by the market",
        "responsiveness of quantity supplied to price changes",
        "extra satisfaction from one more unit consumed",
        "overall satisfaction from consumption"
      ],
      "answer": 0,
      "explanation": "Market failure means inefficient allocation of resources by the market.",
      "id": 50
    },
    {
      "topic": "Demand and Supply",
      "difficulty": "medium",
      "question": "The term 'Price elasticity of supply' refers to ___.",
      "options": [
        "extra satisfaction from one more unit consumed",
        "overall satisfaction from consumption",
        "responsiveness of quantity supplied to price changes",
        "output rises at a decreasing rate when one input increases"
      ],
      "answer": 2,
      "explanation": "Price elasticity of supply means responsiveness of quantity supplied to price changes.",
      "id": 51
    },
    {
      "topic": "Consumer Behavior",
      "difficulty": "medium",
      "question": "The term 'Marginal utility' refers to ___.",
      "options": [
        "overall satisfaction from consumption",
        "output rises at a decreasing rate when one input increases",
        "specialization of tasks in production",
        "extra satisfaction from one more unit consumed"
      ],
      "answer": 3,
      "explanation": "Marginal utility means extra satisfaction from one more unit consumed.",
      "id": 52
    },
    {
      "topic": "Consumer Behavior",
      "difficulty": "easy",
      "question": "The term 'Total utility' refers to ___.",
      "options": [
        "output rises at a decreasing rate when one input increases",
        "overall satisfaction from consumption",
        "specialization of tasks in production",
        "government spending on goods and services"
      ],
      "answer": 1,
      "explanation": "Total utility means overall satisfaction from consumption.",
      "id": 53
    },
    {
      "topic": "Production",
      "difficulty": "hard",
      "question": "The term 'Law of diminishing returns' refers to ___.",
      "options": [
        "output rises at a decreasing rate when one input increases",
        "specialization of tasks in production",
        "government spending on goods and services",
        "total money owed by the government"
      ],
      "answer": 0,
      "explanation": "Law of diminishing returns means output rises at a decreasing rate when one input increases.",
      "id": 54
    },
    {
      "topic": "Production",
      "difficulty": "easy",
      "question": "The term 'Division of labor' refers to ___.",
      "options": [
        "government spending on goods and services",
        "total money owed by the government",
        "specialization of tasks in production",
        "funding government deficit by borrowing"
      ],
      "answer": 2,
      "explanation": "Division of labor means specialization of tasks in production.",
      "id": 55
    },
    {
      "topic": "Public Finance",
      "difficulty": "easy",
      "question": "The term 'Public expenditure' refers to ___.",
      "options": [
        "total money owed by the government",
        "funding government deficit by borrowing",
        "ease of converting assets to cash",
        "government spending on goods and services"
      ],
      "answer": 3,
      "explanation": "Public expenditure means government spending on goods and services.",
      "id": 56
    },
    {
      "topic": "Public Finance",
      "difficulty": "medium",
      "question": "The term 'Public debt' refers to ___.",
      "options": [
        "funding government deficit by borrowing",
        "total money owed by the government",
        "ease of converting assets to cash",
        "money accepted by law for payments"
      ],
      "answer": 1,
      "explanation": "Public debt means total money owed by the government.",
      "id": 57
    },
    {
      "topic": "Public Finance",
      "difficulty": "hard",
      "question": "The term 'Deficit financing' refers to ___.",
      "options": [
        "funding government deficit by borrowing",
        "ease of converting assets to cash",
        "money accepted by law for payments",
        "market for long-term funds"
      ],
      "answer": 0,
      "explanation": "Deficit financing means funding government deficit by borrowing.",
      "id": 58
    },
    {
      "topic": "Money and Banking",
      "difficulty": "medium",
      "question": "The term 'Liquidity' refers to ___.",
      "options": [
        "money accepted by law for payments",
        "market for long-term funds",
        "ease of converting assets to cash",
        "excess demand at full employment"
      ],
      "answer": 2,
      "explanation": "Liquidity means ease of converting assets to cash.",
      "id": 59
    },
    {
      "topic": "Money and Banking",
      "difficulty": "easy",
      "question": "The term 'Legal tender' refers to ___.",
      "options": [
        "market for long-term funds",
        "excess demand at full employment",
        "period of declining economic activity",
        "money accepted by law for payments"
      ],
      "answer": 3,
      "explanation": "Legal tender means money accepted by law for payments.",
      "id": 60
    },
    {
      "topic": "Money and Banking",
      "difficulty": "medium",
      "question": "The term 'Capital market' refers to ___.",
      "options": [
        "excess demand at full employment",
        "market for long-term funds",
        "period of declining economic activity",
        "replacing imports with local production"
      ],
      "answer": 1,
      "explanation": "Capital market means market for long-term funds.",
      "id": 61
    },
    {
      "topic": "Macroeconomics",
      "difficulty": "hard",
      "question": "The term 'Inflationary gap' refers to ___.",
      "options": [
        "excess demand at full employment",
        "period of declining economic activity",
        "replacing imports with local production",
        "ratio of export prices to import prices"
      ],
      "answer": 0,
      "explanation": "Inflationary gap means excess demand at full employment.",
      "id": 62
    },
    {
      "topic": "Macroeconomics",
      "difficulty": "medium",
      "question": "The term 'Recession' refers to ___.",
      "options": [
        "replacing imports with local production",
        "ratio of export prices to import prices",
        "period of declining economic activity",
        "government regulation of foreign exchange"
      ],
      "answer": 2,
      "explanation": "Recession means period of declining economic activity.",
      "id": 63
    },
    {
      "topic": "Development",
      "difficulty": "medium",
      "question": "The term 'Import substitution' refers to ___.",
      "options": [
        "ratio of export prices to import prices",
        "government regulation of foreign exchange",
        "receipts exceed payments",
        "replacing imports with local production"
      ],
      "answer": 3,
      "explanation": "Import substitution means replacing imports with local production.",
      "id": 64
    },
    {
      "topic": "International Trade",
      "difficulty": "medium",
      "question": "The term 'Terms of trade' refers to ___.",
      "options": [
        "government regulation of foreign exchange",
        "ratio of export prices to import prices",
        "receipts exceed payments",
        "employed and unemployed working-age people"
      ],
      "answer": 1,
      "explanation": "Terms of trade means ratio of export prices to import prices.",
      "id": 65
    },
    {
      "topic": "International Trade",
      "difficulty": "hard",
      "question": "The term 'Exchange control' refers to ___.",
      "options": [
        "government regulation of foreign exchange",
        "receipts exceed payments",
        "employed and unemployed working-age people",
        "lowest legal wage rate"
      ],
      "answer": 0,
      "explanation": "Exchange control means government regulation of foreign exchange.",
      "id": 66
    },
    {
      "topic": "International Trade",
      "difficulty": "medium",
      "question": "The term 'Balance of payments surplus' refers to ___.",
      "options": [
        "employed and unemployed working-age people",
        "lowest legal wage rate",
        "receipts exceed payments",
        "output per unit of input"
      ],
      "answer": 2,
      "explanation": "Balance of payments surplus means receipts exceed payments.",
      "id": 67
    },
    {
      "topic": "Labor",
      "difficulty": "easy",
      "question": "The term 'Labor force' refers to ___.",
      "options": [
        "lowest legal wage rate",
        "output per unit of input",
        "limited resources relative to unlimited wants",
        "employed and unemployed working-age people"
      ],
      "answer": 3,
      "explanation": "Labor force means employed and unemployed working-age people.",
      "id": 68
    },
    {
      "topic": "Labor",
      "difficulty": "medium",
      "question": "The term 'Minimum wage' refers to ___.",
      "options": [
        "output per unit of input",
        "lowest legal wage rate",
        "limited resources relative to unlimited wants",
        "the next best alternative forgone"
      ],
      "answer": 1,
      "explanation": "Minimum wage means lowest legal wage rate.",
      "id": 69
    },
    {
      "topic": "Production",
      "difficulty": "medium",
      "question": "The term 'Productivity' refers to ___.",
      "options": [
        "output per unit of input",
        "limited resources relative to unlimited wants",
        "the next best alternative forgone",
        "land, labor, capital and enterprise"
      ],
      "answer": 0,
      "explanation": "Productivity means output per unit of input.",
      "id": 70
    },
    {
      "topic": "Basic Concepts",
      "difficulty": "easy",
      "question": "Which term describes: limited resources relative to unlimited wants?",
      "options": [
        "Opportunity cost",
        "Factors of production",
        "Scarcity",
        "Demand"
      ],
      "answer": 2,
      "explanation": "That description matches Scarcity.",
      "id": 71
    },
    {
      "topic": "Basic Concepts",
      "difficulty": "easy",
      "question": "Which term describes: the next best alternative forgone?",
      "options": [
        "Factors of production",
        "Demand",
        "Supply",
        "Opportunity cost"
      ],
      "answer": 3,
      "explanation": "That description matches Opportunity cost.",
      "id": 72
    },
    {
      "topic": "Basic Concepts",
      "difficulty": "easy",
      "question": "Which term describes: land, labor, capital and enterprise?",
      "options": [
        "Demand",
        "Factors of production",
        "Supply",
        "Equilibrium"
      ],
      "answer": 1,
      "explanation": "That description matches Factors of production.",
      "id": 73
    },
    {
      "topic": "Demand and Supply",
      "difficulty": "easy",
      "question": "Which term describes: willingness and ability to buy at a given price?",
      "options": [
        "Demand",
        "Supply",
        "Equilibrium",
        "Elasticity of demand"
      ],
      "answer": 0,
      "explanation": "That description matches Demand.",
      "id": 74
    },
    {
      "topic": "Demand and Supply",
      "difficulty": "easy",
      "question": "Which term describes: quantity offered for sale at various prices?",
      "options": [
        "Equilibrium",
        "Elasticity of demand",
        "Supply",
        "Inferior good"
      ],
      "answer": 2,
      "explanation": "That description matches Supply.",
      "id": 75
    },
    {
      "topic": "Demand and Supply",
      "difficulty": "medium",
      "question": "Which term describes: where quantity demanded equals quantity supplied?",
      "options": [
        "Elasticity of demand",
        "Inferior good",
        "Substitute",
        "Equilibrium"
      ],
      "answer": 3,
      "explanation": "That description matches Equilibrium.",
      "id": 76
    },
    {
      "topic": "Demand and Supply",
      "difficulty": "medium",
      "question": "Which term describes: responsiveness of quantity demanded to price changes?",
      "options": [
        "Inferior good",
        "Elasticity of demand",
        "Substitute",
        "Complement"
      ],
      "answer": 1,
      "explanation": "That description matches Elasticity of demand.",
      "id": 77
    },
    {
      "topic": "Demand and Supply",
      "difficulty": "medium",
      "question": "Which term describes: a good whose demand falls as income rises?",
      "options": [
        "Inferior good",
        "Substitute",
        "Complement",
        "Marginal cost"
      ],
      "answer": 0,
      "explanation": "That description matches Inferior good.",
      "id": 78
    },
    {
      "topic": "Demand and Supply",
      "difficulty": "easy",
      "question": "Which term describes: a good that can replace another?",
      "options": [
        "Complement",
        "Marginal cost",
        "Substitute",
        "Average cost"
      ],
      "answer": 2,
      "explanation": "That description matches Substitute.",
      "id": 79
    },
    {
      "topic": "Demand and Supply",
      "difficulty": "easy",
      "question": "Which term describes: a good used together with another?",
      "options": [
        "Marginal cost",
        "Average cost",
        "Fixed cost",
        "Complement"
      ],
      "answer": 3,
      "explanation": "That description matches Complement.",
      "id": 80
    },
    {
      "topic": "Production",
      "difficulty": "medium",
      "question": "Which term describes: cost of producing one extra unit?",
      "options": [
        "Average cost",
        "Marginal cost",
        "Fixed cost",
        "Variable cost"
      ],
      "answer": 1,
      "explanation": "That description matches Marginal cost.",
      "id": 81
    },
    {
      "topic": "Production",
      "difficulty": "medium",
      "question": "Which term describes: total cost divided by output?",
      "options": [
        "Average cost",
        "Fixed cost",
        "Variable cost",
        "Economies of scale"
      ],
      "answer": 0,
      "explanation": "That description matches Average cost.",
      "id": 82
    },
    {
      "topic": "Production",
      "difficulty": "easy",
      "question": "Which term describes: cost that does not change with output?",
      "options": [
        "Variable cost",
        "Economies of scale",
        "Fixed cost",
        "Diseconomies of scale"
      ],
      "answer": 2,
      "explanation": "That description matches Fixed cost.",
      "id": 83
    },
    {
      "topic": "Production",
      "difficulty": "easy",
      "question": "Which term describes: cost that changes with output?",
      "options": [
        "Economies of scale",
        "Diseconomies of scale",
        "Monopoly",
        "Variable cost"
      ],
      "answer": 3,
      "explanation": "That description matches Variable cost.",
      "id": 84
    },
    {
      "topic": "Production",
      "difficulty": "medium",
      "question": "Which term describes: cost advantages from large-scale production?",
      "options": [
        "Diseconomies of scale",
        "Economies of scale",
        "Monopoly",
        "Perfect competition"
      ],
      "answer": 1,
      "explanation": "That description matches Economies of scale.",
      "id": 85
    },
    {
      "topic": "Production",
      "difficulty": "medium",
      "question": "Which term describes: cost disadvantages from too large a scale?",
      "options": [
        "Diseconomies of scale",
        "Monopoly",
        "Perfect competition",
        "Oligopoly"
      ],
      "answer": 0,
      "explanation": "That description matches Diseconomies of scale.",
      "id": 86
    },
    {
      "topic": "Market Structures",
      "difficulty": "easy",
      "question": "Which term describes: market with a single seller?",
      "options": [
        "Perfect competition",
        "Oligopoly",
        "Monopoly",
        "GDP"
      ],
      "answer": 2,
      "explanation": "That description matches Monopoly.",
      "id": 87
    },
    {
      "topic": "Market Structures",
      "difficulty": "easy",
      "question": "Which term describes: market with many sellers and identical products?",
      "options": [
        "Oligopoly",
        "GDP",
        "GNP",
        "Perfect competition"
      ],
      "answer": 3,
      "explanation": "That description matches Perfect competition.",
      "id": 88
    },
    {
      "topic": "Market Structures",
      "difficulty": "medium",
      "question": "Which term describes: market with a few dominant firms?",
      "options": [
        "GDP",
        "Oligopoly",
        "GNP",
        "Inflation"
      ],
      "answer": 1,
      "explanation": "That description matches Oligopoly.",
      "id": 89
    },
    {
      "topic": "Macroeconomics",
      "difficulty": "easy",
      "question": "Which term describes: total value of goods and services produced within a country?",
      "options": [
        "GDP",
        "GNP",
        "Inflation",
        "Deflation"
      ],
      "answer": 0,
      "explanation": "That description matches GDP.",
      "id": 90
    },
    {
      "topic": "Macroeconomics",
      "difficulty": "medium",
      "question": "Which term describes: GDP plus net income from abroad?",
      "options": [
        "Inflation",
        "Deflation",
        "GNP",
        "Unemployment"
      ],
      "answer": 2,
      "explanation": "That description matches GNP.",
      "id": 91
    },
    {
      "topic": "Macroeconomics",
      "difficulty": "easy",
      "question": "Which term describes: general rise in price levels?",
      "options": [
        "Deflation",
        "Unemployment",
        "CPI",
        "Inflation"
      ],
      "answer": 3,
      "explanation": "That description matches Inflation.",
      "id": 92
    },
    {
      "topic": "Macroeconomics",
      "difficulty": "easy",
      "question": "Which term describes: general fall in price levels?",
      "options": [
        "Unemployment",
        "Deflation",
        "CPI",
        "Fiscal policy"
      ],
      "answer": 1,
      "explanation": "That description matches Deflation.",
      "id": 93
    },
    {
      "topic": "Macroeconomics",
      "difficulty": "easy",
      "question": "Which term describes: willing and able workers without jobs?",
      "options": [
        "Unemployment",
        "CPI",
        "Fiscal policy",
        "Monetary policy"
      ],
      "answer": 0,
      "explanation": "That description matches Unemployment.",
      "id": 94
    },
    {
      "topic": "Macroeconomics",
      "difficulty": "medium",
      "question": "Which term describes: measure of changes in average prices?",
      "options": [
        "Fiscal policy",
        "Monetary policy",
        "CPI",
        "Central bank"
      ],
      "answer": 2,
      "explanation": "That description matches CPI.",
      "id": 95
    },
    {
      "topic": "Public Finance",
      "difficulty": "medium",
      "question": "Which term describes: use of taxation and government spending?",
      "options": [
        "Monetary policy",
        "Central bank",
        "Commercial bank",
        "Fiscal policy"
      ],
      "answer": 3,
      "explanation": "That description matches Fiscal policy.",
      "id": 96
    },
    {
      "topic": "Public Finance",
      "difficulty": "medium",
      "question": "Which term describes: control of money supply and interest rates?",
      "options": [
        "Central bank",
        "Monetary policy",
        "Commercial bank",
        "Money supply"
      ],
      "answer": 1,
      "explanation": "That description matches Monetary policy.",
      "id": 97
    },
    {
      "topic": "Money and Banking",
      "difficulty": "easy",
      "question": "Which term describes: bank that regulates monetary policy?",
      "options": [
        "Central bank",
        "Commercial bank",
        "Money supply",
        "Budget deficit"
      ],
      "answer": 0,
      "explanation": "That description matches Central bank.",
      "id": 98
    },
    {
      "topic": "Money and Banking",
      "difficulty": "easy",
      "question": "Which term describes: bank that accepts deposits and lends?",
      "options": [
        "Money supply",
        "Budget deficit",
        "Commercial bank",
        "Budget surplus"
      ],
      "answer": 2,
      "explanation": "That description matches Commercial bank.",
      "id": 99
    },
    {
      "topic": "Money and Banking",
      "difficulty": "medium",
      "question": "Which term describes: total amount of money in circulation?",
      "options": [
        "Budget deficit",
        "Budget surplus",
        "Balance of trade",
        "Money supply"
      ],
      "answer": 3,
      "explanation": "That description matches Money supply.",
      "id": 100
    },
    {
      "topic": "Public Finance",
      "difficulty": "easy",
      "question": "Which term describes: government spending exceeds revenue?",
      "options": [
        "Budget surplus",
        "Budget deficit",
        "Balance of trade",
        "Balance of payments"
      ],
      "answer": 1,
      "explanation": "That description matches Budget deficit.",
      "id": 101
    },
    {
      "topic": "Public Finance",
      "difficulty": "easy",
      "question": "Which term describes: government revenue exceeds spending?",
      "options": [
        "Budget surplus",
        "Balance of trade",
        "Balance of payments",
        "Devaluation"
      ],
      "answer": 0,
      "explanation": "That description matches Budget surplus.",
      "id": 102
    },
    {
      "topic": "International Trade",
      "difficulty": "medium",
      "question": "Which term describes: difference between exports and imports of goods?",
      "options": [
        "Balance of payments",
        "Devaluation",
        "Balance of trade",
        "Exchange rate"
      ],
      "answer": 2,
      "explanation": "That description matches Balance of trade.",
      "id": 103
    },
    {
      "topic": "International Trade",
      "difficulty": "hard",
      "question": "Which term describes: record of all transactions with the rest of the world?",
      "options": [
        "Devaluation",
        "Exchange rate",
        "Tariff",
        "Balance of payments"
      ],
      "answer": 3,
      "explanation": "That description matches Balance of payments.",
      "id": 104
    },
    {
      "topic": "International Trade",
      "difficulty": "hard",
      "question": "Which term describes: official reduction in the value of a currency?",
      "options": [
        "Exchange rate",
        "Devaluation",
        "Tariff",
        "Subsidy"
      ],
      "answer": 1,
      "explanation": "That description matches Devaluation.",
      "id": 105
    },
    {
      "topic": "International Trade",
      "difficulty": "medium",
      "question": "Which term describes: price of one currency in terms of another?",
      "options": [
        "Exchange rate",
        "Tariff",
        "Subsidy",
        "Public good"
      ],
      "answer": 0,
      "explanation": "That description matches Exchange rate.",
      "id": 106
    },
    {
      "topic": "International Trade",
      "difficulty": "easy",
      "question": "Which term describes: tax on imported goods?",
      "options": [
        "Subsidy",
        "Public good",
        "Tariff",
        "Externality"
      ],
      "answer": 2,
      "explanation": "That description matches Tariff.",
      "id": 107
    },
    {
      "topic": "Public Finance",
      "difficulty": "medium",
      "question": "Which term describes: financial assistance to producers?",
      "options": [
        "Public good",
        "Externality",
        "Economic growth",
        "Subsidy"
      ],
      "answer": 3,
      "explanation": "That description matches Subsidy.",
      "id": 108
    },
    {
      "topic": "Basic Concepts",
      "difficulty": "hard",
      "question": "Which term describes: good that is non-rival and non-excludable?",
      "options": [
        "Externality",
        "Public good",
        "Economic growth",
        "Development"
      ],
      "answer": 1,
      "explanation": "That description matches Public good.",
      "id": 109
    },
    {
      "topic": "Basic Concepts",
      "difficulty": "hard",
      "question": "Which term describes: cost or benefit imposed on third parties?",
      "options": [
        "Externality",
        "Economic growth",
        "Development",
        "Per capita income"
      ],
      "answer": 0,
      "explanation": "That description matches Externality.",
      "id": 110
    },
    {
      "topic": "Development",
      "difficulty": "medium",
      "question": "Which term describes: increase in real output over time?",
      "options": [
        "Development",
        "Per capita income",
        "Economic growth",
        "Savings"
      ],
      "answer": 2,
      "explanation": "That description matches Economic growth.",
      "id": 111
    },
    {
      "topic": "Development",
      "difficulty": "medium",
      "question": "Which term describes: improvement in standard of living and welfare?",
      "options": [
        "Per capita income",
        "Savings",
        "Investment",
        "Development"
      ],
      "answer": 3,
      "explanation": "That description matches Development.",
      "id": 112
    },
    {
      "topic": "Development",
      "difficulty": "easy",
      "question": "Which term describes: national income divided by population?",
      "options": [
        "Savings",
        "Per capita income",
        "Investment",
        "Consumer sovereignty"
      ],
      "answer": 1,
      "explanation": "That description matches Per capita income.",
      "id": 113
    },
    {
      "topic": "Money and Banking",
      "difficulty": "easy",
      "question": "Which term describes: income not spent on consumption?",
      "options": [
        "Savings",
        "Investment",
        "Consumer sovereignty",
        "Price ceiling"
      ],
      "answer": 0,
      "explanation": "That description matches Savings.",
      "id": 114
    },
    {
      "topic": "Money and Banking",
      "difficulty": "medium",
      "question": "Which term describes: purchase of capital goods?",
      "options": [
        "Consumer sovereignty",
        "Price ceiling",
        "Investment",
        "Price floor"
      ],
      "answer": 2,
      "explanation": "That description matches Investment.",
      "id": 115
    },
    {
      "topic": "Basic Concepts",
      "difficulty": "medium",
      "question": "Which term describes: consumers determine what is produced?",
      "options": [
        "Price ceiling",
        "Price floor",
        "Privatization",
        "Consumer sovereignty"
      ],
      "answer": 3,
      "explanation": "That description matches Consumer sovereignty.",
      "id": 116
    },
    {
      "topic": "Demand and Supply",
      "difficulty": "medium",
      "question": "Which term describes: maximum legal price?",
      "options": [
        "Price floor",
        "Price ceiling",
        "Privatization",
        "Market failure"
      ],
      "answer": 1,
      "explanation": "That description matches Price ceiling.",
      "id": 117
    },
    {
      "topic": "Demand and Supply",
      "difficulty": "medium",
      "question": "Which term describes: minimum legal price?",
      "options": [
        "Price floor",
        "Privatization",
        "Market failure",
        "Price elasticity of supply"
      ],
      "answer": 0,
      "explanation": "That description matches Price floor.",
      "id": 118
    },
    {
      "topic": "Development",
      "difficulty": "hard",
      "question": "Which term describes: transfer of public enterprises to private ownership?",
      "options": [
        "Market failure",
        "Price elasticity of supply",
        "Privatization",
        "Marginal utility"
      ],
      "answer": 2,
      "explanation": "That description matches Privatization.",
      "id": 119
    },
    {
      "topic": "Basic Concepts",
      "difficulty": "hard",
      "question": "Which term describes: inefficient allocation of resources by the market?",
      "options": [
        "Price elasticity of supply",
        "Marginal utility",
        "Total utility",
        "Market failure"
      ],
      "answer": 3,
      "explanation": "That description matches Market failure.",
      "id": 120
    },
    {
      "topic": "Demand and Supply",
      "difficulty": "medium",
      "question": "Which term describes: responsiveness of quantity supplied to price changes?",
      "options": [
        "Marginal utility",
        "Price elasticity of supply",
        "Total utility",
        "Law of diminishing returns"
      ],
      "answer": 1,
      "explanation": "That description matches Price elasticity of supply.",
      "id": 121
    },
    {
      "topic": "Consumer Behavior",
      "difficulty": "medium",
      "question": "Which term describes: extra satisfaction from one more unit consumed?",
      "options": [
        "Marginal utility",
        "Total utility",
        "Law of diminishing returns",
        "Division of labor"
      ],
      "answer": 0,
      "explanation": "That description matches Marginal utility.",
      "id": 122
    },
    {
      "topic": "Consumer Behavior",
      "difficulty": "easy",
      "question": "Which term describes: overall satisfaction from consumption?",
      "options": [
        "Law of diminishing returns",
        "Division of labor",
        "Total utility",
        "Public expenditure"
      ],
      "answer": 2,
      "explanation": "That description matches Total utility.",
      "id": 123
    },
    {
      "topic": "Production",
      "difficulty": "hard",
      "question": "Which term describes: output rises at a decreasing rate when one input increases?",
      "options": [
        "Division of labor",
        "Public expenditure",
        "Public debt",
        "Law of diminishing returns"
      ],
      "answer": 3,
      "explanation": "That description matches Law of diminishing returns.",
      "id": 124
    },
    {
      "topic": "Production",
      "difficulty": "easy",
      "question": "Which term describes: specialization of tasks in production?",
      "options": [
        "Public expenditure",
        "Division of labor",
        "Public debt",
        "Deficit financing"
      ],
      "answer": 1,
      "explanation": "That description matches Division of labor.",
      "id": 125
    },
    {
      "topic": "Public Finance",
      "difficulty": "easy",
      "question": "Which term describes: government spending on goods and services?",
      "options": [
        "Public expenditure",
        "Public debt",
        "Deficit financing",
        "Liquidity"
      ],
      "answer": 0,
      "explanation": "That description matches Public expenditure.",
      "id": 126
    },
    {
      "topic": "Public Finance",
      "difficulty": "medium",
      "question": "Which term describes: total money owed by the government?",
      "options": [
        "Deficit financing",
        "Liquidity",
        "Public debt",
        "Legal tender"
      ],
      "answer": 2,
      "explanation": "That description matches Public debt.",
      "id": 127
    },
    {
      "topic": "Public Finance",
      "difficulty": "hard",
      "question": "Which term describes: funding government deficit by borrowing?",
      "options": [
        "Liquidity",
        "Legal tender",
        "Capital market",
        "Deficit financing"
      ],
      "answer": 3,
      "explanation": "That description matches Deficit financing.",
      "id": 128
    },
    {
      "topic": "Money and Banking",
      "difficulty": "medium",
      "question": "Which term describes: ease of converting assets to cash?",
      "options": [
        "Legal tender",
        "Liquidity",
        "Capital market",
        "Inflationary gap"
      ],
      "answer": 1,
      "explanation": "That description matches Liquidity.",
      "id": 129
    },
    {
      "topic": "Money and Banking",
      "difficulty": "easy",
      "question": "Which term describes: money accepted by law for payments?",
      "options": [
        "Legal tender",
        "Capital market",
        "Inflationary gap",
        "Recession"
      ],
      "answer": 0,
      "explanation": "That description matches Legal tender.",
      "id": 130
    },
    {
      "topic": "Money and Banking",
      "difficulty": "medium",
      "question": "Which term describes: market for long-term funds?",
      "options": [
        "Inflationary gap",
        "Recession",
        "Capital market",
        "Import substitution"
      ],
      "answer": 2,
      "explanation": "That description matches Capital market.",
      "id": 131
    },
    {
      "topic": "Macroeconomics",
      "difficulty": "hard",
      "question": "Which term describes: excess demand at full employment?",
      "options": [
        "Recession",
        "Import substitution",
        "Terms of trade",
        "Inflationary gap"
      ],
      "answer": 3,
      "explanation": "That description matches Inflationary gap.",
      "id": 132
    },
    {
      "topic": "Macroeconomics",
      "difficulty": "medium",
      "question": "Which term describes: period of declining economic activity?",
      "options": [
        "Import substitution",
        "Recession",
        "Terms of trade",
        "Exchange control"
      ],
      "answer": 1,
      "explanation": "That description matches Recession.",
      "id": 133
    },
    {
      "topic": "Development",
      "difficulty": "medium",
      "question": "Which term describes: replacing imports with local production?",
      "options": [
        "Import substitution",
        "Terms of trade",
        "Exchange control",
        "Balance of payments surplus"
      ],
      "answer": 0,
      "explanation": "That description matches Import substitution.",
      "id": 134
    },
    {
      "topic": "International Trade",
      "difficulty": "medium",
      "question": "Which term describes: ratio of export prices to import prices?",
      "options": [
        "Exchange control",
        "Balance of payments surplus",
        "Terms of trade",
        "Labor force"
      ],
      "answer": 2,
      "explanation": "That description matches Terms of trade.",
      "id": 135
    },
    {
      "topic": "International Trade",
      "difficulty": "hard",
      "question": "Which term describes: government regulation of foreign exchange?",
      "options": [
        "Balance of payments surplus",
        "Labor force",
        "Minimum wage",
        "Exchange control"
      ],
      "answer": 3,
      "explanation": "That description matches Exchange control.",
      "id": 136
    },
    {
      "topic": "International Trade",
      "difficulty": "medium",
      "question": "Which term describes: receipts exceed payments?",
      "options": [
        "Labor force",
        "Balance of payments surplus",
        "Minimum wage",
        "Productivity"
      ],
      "answer": 1,
      "explanation": "That description matches Balance of payments surplus.",
      "id": 137
    },
    {
      "topic": "Labor",
      "difficulty": "easy",
      "question": "Which term describes: employed and unemployed working-age people?",
      "options": [
        "Labor force",
        "Minimum wage",
        "Productivity",
        "Scarcity"
      ],
      "answer": 0,
      "explanation": "That description matches Labor force.",
      "id": 138
    },
    {
      "topic": "Labor",
      "difficulty": "medium",
      "question": "Which term describes: lowest legal wage rate?",
      "options": [
        "Productivity",
        "Scarcity",
        "Minimum wage",
        "Opportunity cost"
      ],
      "answer": 2,
      "explanation": "That description matches Minimum wage.",
      "id": 139
    },
    {
      "topic": "Production",
      "difficulty": "medium",
      "question": "Which term describes: output per unit of input?",
      "options": [
        "Scarcity",
        "Opportunity cost",
        "Factors of production",
        "Productivity"
      ],
      "answer": 3,
      "explanation": "That description matches Productivity.",
      "id": 140
    },
    {
      "topic": "Demand and Supply",
      "difficulty": "medium",
      "question": "A market has Qd and Qs as follows: Price 100 -> Qd 80, Qs 20; Price 150 -> Qd 60, Qs 60; Price 200 -> Qd 40, Qs 100. What is the equilibrium price?",
      "options": [
        "100",
        "150",
        "200",
        "250"
      ],
      "answer": 1,
      "explanation": "Equilibrium is where Qd equals Qs.",
      "id": 141
    },
    {
      "topic": "Macroeconomics",
      "difficulty": "easy",
      "question": "If the CPI rises from 200 to 220, the inflation rate is ___.",
      "options": [
        "10%",
        "5%",
        "20%",
        "15%"
      ],
      "answer": 0,
      "explanation": "Inflation rate = (220-200)/200 x 100%.",
      "id": 142
    },
    {
      "topic": "Macroeconomics",
      "difficulty": "easy",
      "question": "GDP increases from 500 billion to 550 billion. The growth rate is ___.",
      "options": [
        "5%",
        "12%",
        "10%",
        "15%"
      ],
      "answer": 2,
      "explanation": "Growth rate = 50/500 x 100%.",
      "id": 143
    },
    {
      "topic": "Basic Concepts",
      "difficulty": "medium",
      "question": "A student can study Economics or Mathematics in the evening but not both. Choosing Economics means giving up Mathematics. This is an example of ___.",
      "options": [
        "marginal cost",
        "inflation",
        "deflation",
        "opportunity cost"
      ],
      "answer": 3,
      "explanation": "The next best alternative forgone is opportunity cost.",
      "id": 144
    },
    {
      "topic": "Labor",
      "difficulty": "medium",
      "question": "A country has 5 million employed and 1 million unemployed people. The unemployment rate is ___.",
      "options": [
        "10%",
        "16.7%",
        "20%",
        "25%"
      ],
      "answer": 1,
      "explanation": "Unemployment rate = 1/(5+1) x 100%.",
      "id": 145
    },
    {
      "topic": "Public Finance",
      "difficulty": "easy",
      "question": "Government revenue is 800 billion and expenditure is 950 billion. This results in a ___.",
      "options": [
        "budget deficit",
        "budget surplus",
        "balanced budget",
        "trade surplus"
      ],
      "answer": 0,
      "explanation": "Expenditure exceeds revenue.",
      "id": 146
    },
    {
      "topic": "International Trade",
      "difficulty": "medium",
      "question": "If a country's currency depreciates, its exports become ___.",
      "options": [
        "more expensive to foreigners",
        "unchanged",
        "cheaper to foreigners",
        "illegal to sell"
      ],
      "answer": 2,
      "explanation": "Depreciation lowers foreign price of exports.",
      "id": 147
    },
    {
      "topic": "Demand and Supply",
      "difficulty": "hard",
      "question": "Price of a good rises from 100 to 110, while quantity demanded falls from 50 to 49. Demand is ___.",
      "options": [
        "elastic",
        "unitary",
        "perfectly elastic",
        "inelastic"
      ],
      "answer": 3,
      "explanation": "Small quantity change relative to price change implies inelastic demand.",
      "id": 148
    },
    {
      "topic": "International Trade",
      "difficulty": "medium",
      "question": "If exports are 300 million and imports are 250 million, the balance of trade is ___.",
      "options": [
        "50 million deficit",
        "50 million surplus",
        "0",
        "250 million surplus"
      ],
      "answer": 1,
      "explanation": "Exports minus imports = 50 million.",
      "id": 149
    },
    {
      "topic": "Macroeconomics",
      "difficulty": "medium",
      "question": "When prices rise, the purchasing power of money ___.",
      "options": [
        "falls",
        "rises",
        "stays the same",
        "doubles"
      ],
      "answer": 0,
      "explanation": "Inflation reduces purchasing power.",
      "id": 150
    }
  ],
  "government": [
    {
      "topic": "Basic Concepts",
      "difficulty": "easy",
      "question": "The term 'Constitution' refers to ___.",
      "options": [
        "the supreme law of a country",
        "everyone is subject to the law",
        "division of government into three arms",
        "power shared between central and regional governments"
      ],
      "answer": 0,
      "explanation": "Constitution means the supreme law of a country.",
      "id": 1
    },
    {
      "topic": "Basic Concepts",
      "difficulty": "easy",
      "question": "The term 'Rule of law' refers to ___.",
      "options": [
        "division of government into three arms",
        "power shared between central and regional governments",
        "power concentrated at the center",
        "everyone is subject to the law"
      ],
      "answer": 3,
      "explanation": "Rule of law means everyone is subject to the law.",
      "id": 2
    },
    {
      "topic": "Basic Concepts",
      "difficulty": "easy",
      "question": "The term 'Separation of powers' refers to ___.",
      "options": [
        "power shared between central and regional governments",
        "division of government into three arms",
        "power concentrated at the center",
        "executive is separate from legislature"
      ],
      "answer": 1,
      "explanation": "Separation of powers means division of government into three arms.",
      "id": 3
    },
    {
      "topic": "Federalism",
      "difficulty": "medium",
      "question": "The term 'Federalism' refers to ___.",
      "options": [
        "power concentrated at the center",
        "executive is separate from legislature",
        "power shared between central and regional governments",
        "executive is drawn from legislature"
      ],
      "answer": 2,
      "explanation": "Federalism means power shared between central and regional governments.",
      "id": 4
    },
    {
      "topic": "Federalism",
      "difficulty": "easy",
      "question": "The term 'Unitary system' refers to ___.",
      "options": [
        "power concentrated at the center",
        "executive is separate from legislature",
        "executive is drawn from legislature",
        "arm of government that makes laws"
      ],
      "answer": 0,
      "explanation": "Unitary system means power concentrated at the center.",
      "id": 5
    },
    {
      "topic": "Systems of Government",
      "difficulty": "medium",
      "question": "The term 'Presidential system' refers to ___.",
      "options": [
        "executive is drawn from legislature",
        "arm of government that makes laws",
        "arm of government that implements laws",
        "executive is separate from legislature"
      ],
      "answer": 3,
      "explanation": "Presidential system means executive is separate from legislature.",
      "id": 6
    },
    {
      "topic": "Systems of Government",
      "difficulty": "medium",
      "question": "The term 'Parliamentary system' refers to ___.",
      "options": [
        "arm of government that makes laws",
        "executive is drawn from legislature",
        "arm of government that implements laws",
        "arm of government that interprets laws"
      ],
      "answer": 1,
      "explanation": "Parliamentary system means executive is drawn from legislature.",
      "id": 7
    },
    {
      "topic": "Arms of Government",
      "difficulty": "easy",
      "question": "The term 'Legislature' refers to ___.",
      "options": [
        "arm of government that implements laws",
        "arm of government that interprets laws",
        "arm of government that makes laws",
        "legislature with two chambers"
      ],
      "answer": 2,
      "explanation": "Legislature means arm of government that makes laws.",
      "id": 8
    },
    {
      "topic": "Arms of Government",
      "difficulty": "easy",
      "question": "The term 'Executive' refers to ___.",
      "options": [
        "arm of government that implements laws",
        "arm of government that interprets laws",
        "legislature with two chambers",
        "legislature with one chamber"
      ],
      "answer": 0,
      "explanation": "Executive means arm of government that implements laws.",
      "id": 9
    },
    {
      "topic": "Arms of Government",
      "difficulty": "easy",
      "question": "The term 'Judiciary' refers to ___.",
      "options": [
        "legislature with two chambers",
        "legislature with one chamber",
        "direct vote by citizens on an issue",
        "arm of government that interprets laws"
      ],
      "answer": 3,
      "explanation": "Judiciary means arm of government that interprets laws.",
      "id": 10
    },
    {
      "topic": "Arms of Government",
      "difficulty": "easy",
      "question": "The term 'Bicameral' refers to ___.",
      "options": [
        "legislature with one chamber",
        "legislature with two chambers",
        "direct vote by citizens on an issue",
        "the right to vote"
      ],
      "answer": 1,
      "explanation": "Bicameral means legislature with two chambers.",
      "id": 11
    },
    {
      "topic": "Arms of Government",
      "difficulty": "easy",
      "question": "The term 'Unicameral' refers to ___.",
      "options": [
        "direct vote by citizens on an issue",
        "the right to vote",
        "legislature with one chamber",
        "organization formed to contest elections"
      ],
      "answer": 2,
      "explanation": "Unicameral means legislature with one chamber.",
      "id": 12
    },
    {
      "topic": "Elections",
      "difficulty": "medium",
      "question": "The term 'Referendum' refers to ___.",
      "options": [
        "direct vote by citizens on an issue",
        "the right to vote",
        "organization formed to contest elections",
        "organization that influences government policy"
      ],
      "answer": 0,
      "explanation": "Referendum means direct vote by citizens on an issue.",
      "id": 13
    },
    {
      "topic": "Elections",
      "difficulty": "easy",
      "question": "The term 'Franchise' refers to ___.",
      "options": [
        "organization formed to contest elections",
        "organization that influences government policy",
        "policy program of a political party",
        "the right to vote"
      ],
      "answer": 3,
      "explanation": "Franchise means the right to vote.",
      "id": 14
    },
    {
      "topic": "Elections",
      "difficulty": "easy",
      "question": "The term 'Political party' refers to ___.",
      "options": [
        "organization that influences government policy",
        "organization formed to contest elections",
        "policy program of a political party",
        "alliance of parties to form government"
      ],
      "answer": 1,
      "explanation": "Political party means organization formed to contest elections.",
      "id": 15
    },
    {
      "topic": "Pressure Groups",
      "difficulty": "medium",
      "question": "The term 'Pressure group' refers to ___.",
      "options": [
        "policy program of a political party",
        "alliance of parties to form government",
        "organization that influences government policy",
        "body that organizes elections"
      ],
      "answer": 2,
      "explanation": "Pressure group means organization that influences government policy.",
      "id": 16
    },
    {
      "topic": "Elections",
      "difficulty": "easy",
      "question": "The term 'Manifesto' refers to ___.",
      "options": [
        "policy program of a political party",
        "alliance of parties to form government",
        "body that organizes elections",
        "area represented by an elected official"
      ],
      "answer": 0,
      "explanation": "Manifesto means policy program of a political party.",
      "id": 17
    },
    {
      "topic": "Elections",
      "difficulty": "medium",
      "question": "The term 'Coalition' refers to ___.",
      "options": [
        "body that organizes elections",
        "area represented by an elected official",
        "process of removing a public officer",
        "alliance of parties to form government"
      ],
      "answer": 3,
      "explanation": "Coalition means alliance of parties to form government.",
      "id": 18
    },
    {
      "topic": "Elections",
      "difficulty": "medium",
      "question": "The term 'Electoral commission' refers to ___.",
      "options": [
        "area represented by an elected official",
        "body that organizes elections",
        "process of removing a public officer",
        "public officer who investigates complaints"
      ],
      "answer": 1,
      "explanation": "Electoral commission means body that organizes elections.",
      "id": 19
    },
    {
      "topic": "Elections",
      "difficulty": "easy",
      "question": "The term 'Constituency' refers to ___.",
      "options": [
        "process of removing a public officer",
        "public officer who investigates complaints",
        "area represented by an elected official",
        "permanent staff that implement policies"
      ],
      "answer": 2,
      "explanation": "Constituency means area represented by an elected official.",
      "id": 20
    },
    {
      "topic": "Arms of Government",
      "difficulty": "medium",
      "question": "The term 'Impeachment' refers to ___.",
      "options": [
        "process of removing a public officer",
        "public officer who investigates complaints",
        "permanent staff that implement policies",
        "administration by appointed officials"
      ],
      "answer": 0,
      "explanation": "Impeachment means process of removing a public officer.",
      "id": 21
    },
    {
      "topic": "Public Administration",
      "difficulty": "hard",
      "question": "The term 'Ombudsman' refers to ___.",
      "options": [
        "permanent staff that implement policies",
        "administration by appointed officials",
        "government-owned enterprise",
        "public officer who investigates complaints"
      ],
      "answer": 3,
      "explanation": "Ombudsman means public officer who investigates complaints.",
      "id": 22
    },
    {
      "topic": "Public Administration",
      "difficulty": "easy",
      "question": "The term 'Civil service' refers to ___.",
      "options": [
        "administration by appointed officials",
        "permanent staff that implement policies",
        "government-owned enterprise",
        "third tier of government"
      ],
      "answer": 1,
      "explanation": "Civil service means permanent staff that implement policies.",
      "id": 23
    },
    {
      "topic": "Public Administration",
      "difficulty": "medium",
      "question": "The term 'Bureaucracy' refers to ___.",
      "options": [
        "government-owned enterprise",
        "third tier of government",
        "administration by appointed officials",
        "system that prevents abuse of power"
      ],
      "answer": 2,
      "explanation": "Bureaucracy means administration by appointed officials.",
      "id": 24
    },
    {
      "topic": "Public Administration",
      "difficulty": "medium",
      "question": "The term 'Public corporation' refers to ___.",
      "options": [
        "government-owned enterprise",
        "third tier of government",
        "system that prevents abuse of power",
        "basic rights guaranteed by constitution"
      ],
      "answer": 0,
      "explanation": "Public corporation means government-owned enterprise.",
      "id": 25
    },
    {
      "topic": "Federalism",
      "difficulty": "easy",
      "question": "The term 'Local government' refers to ___.",
      "options": [
        "system that prevents abuse of power",
        "basic rights guaranteed by constitution",
        "legal membership of a state",
        "third tier of government"
      ],
      "answer": 3,
      "explanation": "Local government means third tier of government.",
      "id": 26
    },
    {
      "topic": "Basic Concepts",
      "difficulty": "medium",
      "question": "The term 'Checks and balances' refers to ___.",
      "options": [
        "basic rights guaranteed by constitution",
        "system that prevents abuse of power",
        "legal membership of a state",
        "loyalty and devotion to a nation"
      ],
      "answer": 1,
      "explanation": "Checks and balances means system that prevents abuse of power.",
      "id": 27
    },
    {
      "topic": "Citizenship",
      "difficulty": "easy",
      "question": "The term 'Fundamental rights' refers to ___.",
      "options": [
        "legal membership of a state",
        "loyalty and devotion to a nation",
        "basic rights guaranteed by constitution",
        "state control of key sectors"
      ],
      "answer": 2,
      "explanation": "Fundamental rights means basic rights guaranteed by constitution.",
      "id": 28
    },
    {
      "topic": "Citizenship",
      "difficulty": "easy",
      "question": "The term 'Citizenship' refers to ___.",
      "options": [
        "legal membership of a state",
        "loyalty and devotion to a nation",
        "state control of key sectors",
        "private ownership and profit motive"
      ],
      "answer": 0,
      "explanation": "Citizenship means legal membership of a state.",
      "id": 29
    },
    {
      "topic": "Ideologies",
      "difficulty": "medium",
      "question": "The term 'Nationalism' refers to ___.",
      "options": [
        "state control of key sectors",
        "private ownership and profit motive",
        "public ownership of major resources",
        "loyalty and devotion to a nation"
      ],
      "answer": 3,
      "explanation": "Nationalism means loyalty and devotion to a nation.",
      "id": 30
    },
    {
      "topic": "Ideologies",
      "difficulty": "hard",
      "question": "The term 'Socialism' refers to ___.",
      "options": [
        "private ownership and profit motive",
        "state control of key sectors",
        "public ownership of major resources",
        "absolute control by the state"
      ],
      "answer": 1,
      "explanation": "Socialism means state control of key sectors.",
      "id": 31
    },
    {
      "topic": "Ideologies",
      "difficulty": "medium",
      "question": "The term 'Capitalism' refers to ___.",
      "options": [
        "public ownership of major resources",
        "absolute control by the state",
        "private ownership and profit motive",
        "government based on popular participation"
      ],
      "answer": 2,
      "explanation": "Capitalism means private ownership and profit motive.",
      "id": 32
    },
    {
      "topic": "Ideologies",
      "difficulty": "hard",
      "question": "The term 'Communism' refers to ___.",
      "options": [
        "public ownership of major resources",
        "absolute control by the state",
        "government based on popular participation",
        "government by one person"
      ],
      "answer": 0,
      "explanation": "Communism means public ownership of major resources.",
      "id": 33
    },
    {
      "topic": "Ideologies",
      "difficulty": "hard",
      "question": "The term 'Totalitarianism' refers to ___.",
      "options": [
        "government based on popular participation",
        "government by one person",
        "government by the armed forces",
        "absolute control by the state"
      ],
      "answer": 3,
      "explanation": "Totalitarianism means absolute control by the state.",
      "id": 34
    },
    {
      "topic": "Basic Concepts",
      "difficulty": "easy",
      "question": "The term 'Democracy' refers to ___.",
      "options": [
        "government by one person",
        "government based on popular participation",
        "government by the armed forces",
        "unfair practices during elections"
      ],
      "answer": 1,
      "explanation": "Democracy means government based on popular participation.",
      "id": 35
    },
    {
      "topic": "Basic Concepts",
      "difficulty": "medium",
      "question": "The term 'Autocracy' refers to ___.",
      "options": [
        "government by the armed forces",
        "unfair practices during elections",
        "government by one person",
        "election to fill a vacant seat"
      ],
      "answer": 2,
      "explanation": "Autocracy means government by one person.",
      "id": 36
    },
    {
      "topic": "Basic Concepts",
      "difficulty": "easy",
      "question": "The term 'Military rule' refers to ___.",
      "options": [
        "government by the armed forces",
        "unfair practices during elections",
        "election to fill a vacant seat",
        "power to reject a bill"
      ],
      "answer": 0,
      "explanation": "Military rule means government by the armed forces.",
      "id": 37
    },
    {
      "topic": "Elections",
      "difficulty": "medium",
      "question": "The term 'Electoral malpractice' refers to ___.",
      "options": [
        "election to fill a vacant seat",
        "power to reject a bill",
        "minimum members needed to conduct meeting",
        "unfair practices during elections"
      ],
      "answer": 3,
      "explanation": "Electoral malpractice means unfair practices during elections.",
      "id": 38
    },
    {
      "topic": "Elections",
      "difficulty": "easy",
      "question": "The term 'By-election' refers to ___.",
      "options": [
        "power to reject a bill",
        "election to fill a vacant seat",
        "minimum members needed to conduct meeting",
        "formal expression of disapproval"
      ],
      "answer": 1,
      "explanation": "By-election means election to fill a vacant seat.",
      "id": 39
    },
    {
      "topic": "Arms of Government",
      "difficulty": "medium",
      "question": "The term 'Veto' refers to ___.",
      "options": [
        "minimum members needed to conduct meeting",
        "formal expression of disapproval",
        "power to reject a bill",
        "views held by the public"
      ],
      "answer": 2,
      "explanation": "Veto means power to reject a bill.",
      "id": 40
    },
    {
      "topic": "Arms of Government",
      "difficulty": "medium",
      "question": "The term 'Quorum' refers to ___.",
      "options": [
        "minimum members needed to conduct meeting",
        "formal expression of disapproval",
        "views held by the public",
        "means of communication to many people"
      ],
      "answer": 0,
      "explanation": "Quorum means minimum members needed to conduct meeting.",
      "id": 41
    },
    {
      "topic": "Arms of Government",
      "difficulty": "hard",
      "question": "The term 'Censure' refers to ___.",
      "options": [
        "views held by the public",
        "means of communication to many people",
        "persuading decision makers",
        "formal expression of disapproval"
      ],
      "answer": 3,
      "explanation": "Censure means formal expression of disapproval.",
      "id": 42
    },
    {
      "topic": "Pressure Groups",
      "difficulty": "easy",
      "question": "The term 'Public opinion' refers to ___.",
      "options": [
        "means of communication to many people",
        "views held by the public",
        "persuading decision makers",
        "supreme authority of a state"
      ],
      "answer": 1,
      "explanation": "Public opinion means views held by the public.",
      "id": 43
    },
    {
      "topic": "Pressure Groups",
      "difficulty": "easy",
      "question": "The term 'Mass media' refers to ___.",
      "options": [
        "persuading decision makers",
        "supreme authority of a state",
        "means of communication to many people",
        "lack of interest in politics"
      ],
      "answer": 2,
      "explanation": "Mass media means means of communication to many people.",
      "id": 44
    },
    {
      "topic": "Pressure Groups",
      "difficulty": "medium",
      "question": "The term 'Lobbying' refers to ___.",
      "options": [
        "persuading decision makers",
        "supreme authority of a state",
        "lack of interest in politics",
        "transfer of power to lower levels"
      ],
      "answer": 0,
      "explanation": "Lobbying means persuading decision makers.",
      "id": 45
    },
    {
      "topic": "Basic Concepts",
      "difficulty": "medium",
      "question": "The term 'Sovereignty' refers to ___.",
      "options": [
        "lack of interest in politics",
        "transfer of power to lower levels",
        "revenue and expenditure sharing in a federation",
        "supreme authority of a state"
      ],
      "answer": 3,
      "explanation": "Sovereignty means supreme authority of a state.",
      "id": 46
    },
    {
      "topic": "Citizenship",
      "difficulty": "easy",
      "question": "The term 'Political apathy' refers to ___.",
      "options": [
        "transfer of power to lower levels",
        "lack of interest in politics",
        "revenue and expenditure sharing in a federation",
        "process of learning political values and attitudes"
      ],
      "answer": 1,
      "explanation": "Political apathy means lack of interest in politics.",
      "id": 47
    },
    {
      "topic": "Federalism",
      "difficulty": "medium",
      "question": "The term 'Decentralization' refers to ___.",
      "options": [
        "revenue and expenditure sharing in a federation",
        "process of learning political values and attitudes",
        "transfer of power to lower levels",
        "government limited by the constitution"
      ],
      "answer": 2,
      "explanation": "Decentralization means transfer of power to lower levels.",
      "id": 48
    },
    {
      "topic": "Federalism",
      "difficulty": "hard",
      "question": "The term 'Fiscal federalism' refers to ___.",
      "options": [
        "revenue and expenditure sharing in a federation",
        "process of learning political values and attitudes",
        "government limited by the constitution",
        "group of senior ministers advising the executive"
      ],
      "answer": 0,
      "explanation": "Fiscal federalism means revenue and expenditure sharing in a federation.",
      "id": 49
    },
    {
      "topic": "Citizenship",
      "difficulty": "medium",
      "question": "The term 'Political socialization' refers to ___.",
      "options": [
        "government limited by the constitution",
        "group of senior ministers advising the executive",
        "personal freedoms guaranteed by law",
        "process of learning political values and attitudes"
      ],
      "answer": 3,
      "explanation": "Political socialization means process of learning political values and attitudes.",
      "id": 50
    },
    {
      "topic": "Basic Concepts",
      "difficulty": "hard",
      "question": "The term 'Constitutionalism' refers to ___.",
      "options": [
        "group of senior ministers advising the executive",
        "government limited by the constitution",
        "personal freedoms guaranteed by law",
        "right of adults to vote"
      ],
      "answer": 1,
      "explanation": "Constitutionalism means government limited by the constitution.",
      "id": 51
    },
    {
      "topic": "Public Administration",
      "difficulty": "medium",
      "question": "The term 'Cabinet' refers to ___.",
      "options": [
        "personal freedoms guaranteed by law",
        "right of adults to vote",
        "group of senior ministers advising the executive",
        "body that elects leaders"
      ],
      "answer": 2,
      "explanation": "Cabinet means group of senior ministers advising the executive.",
      "id": 52
    },
    {
      "topic": "Citizenship",
      "difficulty": "medium",
      "question": "The term 'Civil liberties' refers to ___.",
      "options": [
        "personal freedoms guaranteed by law",
        "right of adults to vote",
        "body that elects leaders",
        "laws made by authorized bodies"
      ],
      "answer": 0,
      "explanation": "Civil liberties means personal freedoms guaranteed by law.",
      "id": 53
    },
    {
      "topic": "Elections",
      "difficulty": "medium",
      "question": "The term 'Adult suffrage' refers to ___.",
      "options": [
        "body that elects leaders",
        "laws made by authorized bodies",
        "court power to interpret or invalidate laws",
        "right of adults to vote"
      ],
      "answer": 3,
      "explanation": "Adult suffrage means right of adults to vote.",
      "id": 54
    },
    {
      "topic": "Elections",
      "difficulty": "hard",
      "question": "The term 'Electoral college' refers to ___.",
      "options": [
        "laws made by authorized bodies",
        "body that elects leaders",
        "court power to interpret or invalidate laws",
        "policy ensuring representation of groups"
      ],
      "answer": 1,
      "explanation": "Electoral college means body that elects leaders.",
      "id": 55
    },
    {
      "topic": "Arms of Government",
      "difficulty": "hard",
      "question": "The term 'Delegated legislation' refers to ___.",
      "options": [
        "court power to interpret or invalidate laws",
        "policy ensuring representation of groups",
        "laws made by authorized bodies",
        "teaching citizens their rights and duties"
      ],
      "answer": 2,
      "explanation": "Delegated legislation means laws made by authorized bodies.",
      "id": 56
    },
    {
      "topic": "Arms of Government",
      "difficulty": "hard",
      "question": "The term 'Judicial review' refers to ___.",
      "options": [
        "court power to interpret or invalidate laws",
        "policy ensuring representation of groups",
        "teaching citizens their rights and duties",
        "citizen involvement in politics"
      ],
      "answer": 0,
      "explanation": "Judicial review means court power to interpret or invalidate laws.",
      "id": 57
    },
    {
      "topic": "Federalism",
      "difficulty": "medium",
      "question": "The term 'Federal character' refers to ___.",
      "options": [
        "teaching citizens their rights and duties",
        "citizen involvement in politics",
        "person who seeks to influence policy",
        "policy ensuring representation of groups"
      ],
      "answer": 3,
      "explanation": "Federal character means policy ensuring representation of groups.",
      "id": 58
    },
    {
      "topic": "Citizenship",
      "difficulty": "easy",
      "question": "The term 'Civic education' refers to ___.",
      "options": [
        "citizen involvement in politics",
        "teaching citizens their rights and duties",
        "person who seeks to influence policy",
        "temporary government before elections"
      ],
      "answer": 1,
      "explanation": "Civic education means teaching citizens their rights and duties.",
      "id": 59
    },
    {
      "topic": "Citizenship",
      "difficulty": "easy",
      "question": "The term 'Political participation' refers to ___.",
      "options": [
        "person who seeks to influence policy",
        "temporary government before elections",
        "citizen involvement in politics",
        "system dominated by two major parties"
      ],
      "answer": 2,
      "explanation": "Political participation means citizen involvement in politics.",
      "id": 60
    },
    {
      "topic": "Pressure Groups",
      "difficulty": "medium",
      "question": "The term 'Lobbyist' refers to ___.",
      "options": [
        "person who seeks to influence policy",
        "temporary government before elections",
        "system dominated by two major parties",
        "system with a single legal party"
      ],
      "answer": 0,
      "explanation": "Lobbyist means person who seeks to influence policy.",
      "id": 61
    },
    {
      "topic": "Systems of Government",
      "difficulty": "medium",
      "question": "The term 'Interim government' refers to ___.",
      "options": [
        "system dominated by two major parties",
        "system with a single legal party",
        "direct vote on an issue",
        "temporary government before elections"
      ],
      "answer": 3,
      "explanation": "Interim government means temporary government before elections.",
      "id": 62
    },
    {
      "topic": "Systems of Government",
      "difficulty": "medium",
      "question": "The term 'Two-party system' refers to ___.",
      "options": [
        "system with a single legal party",
        "system dominated by two major parties",
        "direct vote on an issue",
        "drawing electoral boundaries"
      ],
      "answer": 1,
      "explanation": "Two-party system means system dominated by two major parties.",
      "id": 63
    },
    {
      "topic": "Systems of Government",
      "difficulty": "medium",
      "question": "The term 'One-party system' refers to ___.",
      "options": [
        "direct vote on an issue",
        "drawing electoral boundaries",
        "system with a single legal party",
        "low voter interest or turnout"
      ],
      "answer": 2,
      "explanation": "One-party system means system with a single legal party.",
      "id": 64
    },
    {
      "topic": "Elections",
      "difficulty": "medium",
      "question": "The term 'Plebiscite' refers to ___.",
      "options": [
        "direct vote on an issue",
        "drawing electoral boundaries",
        "low voter interest or turnout",
        "refusal to obey unjust laws"
      ],
      "answer": 0,
      "explanation": "Plebiscite means direct vote on an issue.",
      "id": 65
    },
    {
      "topic": "Elections",
      "difficulty": "hard",
      "question": "The term 'Constituency delimitation' refers to ___.",
      "options": [
        "low voter interest or turnout",
        "refusal to obey unjust laws",
        "federal legislature",
        "drawing electoral boundaries"
      ],
      "answer": 3,
      "explanation": "Constituency delimitation means drawing electoral boundaries.",
      "id": 66
    },
    {
      "topic": "Elections",
      "difficulty": "easy",
      "question": "The term 'Voter apathy' refers to ___.",
      "options": [
        "refusal to obey unjust laws",
        "low voter interest or turnout",
        "federal legislature",
        "constitution is the highest law"
      ],
      "answer": 1,
      "explanation": "Voter apathy means low voter interest or turnout.",
      "id": 67
    },
    {
      "topic": "Citizenship",
      "difficulty": "hard",
      "question": "The term 'Civil disobedience' refers to ___.",
      "options": [
        "federal legislature",
        "constitution is the highest law",
        "refusal to obey unjust laws",
        "the supreme law of a country"
      ],
      "answer": 2,
      "explanation": "Civil disobedience means refusal to obey unjust laws.",
      "id": 68
    },
    {
      "topic": "Arms of Government",
      "difficulty": "easy",
      "question": "The term 'National assembly' refers to ___.",
      "options": [
        "federal legislature",
        "constitution is the highest law",
        "the supreme law of a country",
        "everyone is subject to the law"
      ],
      "answer": 0,
      "explanation": "National assembly means federal legislature.",
      "id": 69
    },
    {
      "topic": "Basic Concepts",
      "difficulty": "easy",
      "question": "The term 'Supremacy of constitution' refers to ___.",
      "options": [
        "the supreme law of a country",
        "everyone is subject to the law",
        "division of government into three arms",
        "constitution is the highest law"
      ],
      "answer": 3,
      "explanation": "Supremacy of constitution means constitution is the highest law.",
      "id": 70
    },
    {
      "topic": "Basic Concepts",
      "difficulty": "easy",
      "question": "Which term describes: the supreme law of a country?",
      "options": [
        "Rule of law",
        "Constitution",
        "Separation of powers",
        "Federalism"
      ],
      "answer": 1,
      "explanation": "That description matches Constitution.",
      "id": 71
    },
    {
      "topic": "Basic Concepts",
      "difficulty": "easy",
      "question": "Which term describes: everyone is subject to the law?",
      "options": [
        "Separation of powers",
        "Federalism",
        "Rule of law",
        "Unitary system"
      ],
      "answer": 2,
      "explanation": "That description matches Rule of law.",
      "id": 72
    },
    {
      "topic": "Basic Concepts",
      "difficulty": "easy",
      "question": "Which term describes: division of government into three arms?",
      "options": [
        "Separation of powers",
        "Federalism",
        "Unitary system",
        "Presidential system"
      ],
      "answer": 0,
      "explanation": "That description matches Separation of powers.",
      "id": 73
    },
    {
      "topic": "Federalism",
      "difficulty": "medium",
      "question": "Which term describes: power shared between central and regional governments?",
      "options": [
        "Unitary system",
        "Presidential system",
        "Parliamentary system",
        "Federalism"
      ],
      "answer": 3,
      "explanation": "That description matches Federalism.",
      "id": 74
    },
    {
      "topic": "Federalism",
      "difficulty": "easy",
      "question": "Which term describes: power concentrated at the center?",
      "options": [
        "Presidential system",
        "Unitary system",
        "Parliamentary system",
        "Legislature"
      ],
      "answer": 1,
      "explanation": "That description matches Unitary system.",
      "id": 75
    },
    {
      "topic": "Systems of Government",
      "difficulty": "medium",
      "question": "Which term describes: executive is separate from legislature?",
      "options": [
        "Parliamentary system",
        "Legislature",
        "Presidential system",
        "Executive"
      ],
      "answer": 2,
      "explanation": "That description matches Presidential system.",
      "id": 76
    },
    {
      "topic": "Systems of Government",
      "difficulty": "medium",
      "question": "Which term describes: executive is drawn from legislature?",
      "options": [
        "Parliamentary system",
        "Legislature",
        "Executive",
        "Judiciary"
      ],
      "answer": 0,
      "explanation": "That description matches Parliamentary system.",
      "id": 77
    },
    {
      "topic": "Arms of Government",
      "difficulty": "easy",
      "question": "Which term describes: arm of government that makes laws?",
      "options": [
        "Executive",
        "Judiciary",
        "Bicameral",
        "Legislature"
      ],
      "answer": 3,
      "explanation": "That description matches Legislature.",
      "id": 78
    },
    {
      "topic": "Arms of Government",
      "difficulty": "easy",
      "question": "Which term describes: arm of government that implements laws?",
      "options": [
        "Judiciary",
        "Executive",
        "Bicameral",
        "Unicameral"
      ],
      "answer": 1,
      "explanation": "That description matches Executive.",
      "id": 79
    },
    {
      "topic": "Arms of Government",
      "difficulty": "easy",
      "question": "Which term describes: arm of government that interprets laws?",
      "options": [
        "Bicameral",
        "Unicameral",
        "Judiciary",
        "Referendum"
      ],
      "answer": 2,
      "explanation": "That description matches Judiciary.",
      "id": 80
    },
    {
      "topic": "Arms of Government",
      "difficulty": "easy",
      "question": "Which term describes: legislature with two chambers?",
      "options": [
        "Bicameral",
        "Unicameral",
        "Referendum",
        "Franchise"
      ],
      "answer": 0,
      "explanation": "That description matches Bicameral.",
      "id": 81
    },
    {
      "topic": "Arms of Government",
      "difficulty": "easy",
      "question": "Which term describes: legislature with one chamber?",
      "options": [
        "Referendum",
        "Franchise",
        "Political party",
        "Unicameral"
      ],
      "answer": 3,
      "explanation": "That description matches Unicameral.",
      "id": 82
    },
    {
      "topic": "Elections",
      "difficulty": "medium",
      "question": "Which term describes: direct vote by citizens on an issue?",
      "options": [
        "Franchise",
        "Referendum",
        "Political party",
        "Pressure group"
      ],
      "answer": 1,
      "explanation": "That description matches Referendum.",
      "id": 83
    },
    {
      "topic": "Elections",
      "difficulty": "easy",
      "question": "Which term describes: the right to vote?",
      "options": [
        "Political party",
        "Pressure group",
        "Franchise",
        "Manifesto"
      ],
      "answer": 2,
      "explanation": "That description matches Franchise.",
      "id": 84
    },
    {
      "topic": "Elections",
      "difficulty": "easy",
      "question": "Which term describes: organization formed to contest elections?",
      "options": [
        "Political party",
        "Pressure group",
        "Manifesto",
        "Coalition"
      ],
      "answer": 0,
      "explanation": "That description matches Political party.",
      "id": 85
    },
    {
      "topic": "Pressure Groups",
      "difficulty": "medium",
      "question": "Which term describes: organization that influences government policy?",
      "options": [
        "Manifesto",
        "Coalition",
        "Electoral commission",
        "Pressure group"
      ],
      "answer": 3,
      "explanation": "That description matches Pressure group.",
      "id": 86
    },
    {
      "topic": "Elections",
      "difficulty": "easy",
      "question": "Which term describes: policy program of a political party?",
      "options": [
        "Coalition",
        "Manifesto",
        "Electoral commission",
        "Constituency"
      ],
      "answer": 1,
      "explanation": "That description matches Manifesto.",
      "id": 87
    },
    {
      "topic": "Elections",
      "difficulty": "medium",
      "question": "Which term describes: alliance of parties to form government?",
      "options": [
        "Electoral commission",
        "Constituency",
        "Coalition",
        "Impeachment"
      ],
      "answer": 2,
      "explanation": "That description matches Coalition.",
      "id": 88
    },
    {
      "topic": "Elections",
      "difficulty": "medium",
      "question": "Which term describes: body that organizes elections?",
      "options": [
        "Electoral commission",
        "Constituency",
        "Impeachment",
        "Ombudsman"
      ],
      "answer": 0,
      "explanation": "That description matches Electoral commission.",
      "id": 89
    },
    {
      "topic": "Elections",
      "difficulty": "easy",
      "question": "Which term describes: area represented by an elected official?",
      "options": [
        "Impeachment",
        "Ombudsman",
        "Civil service",
        "Constituency"
      ],
      "answer": 3,
      "explanation": "That description matches Constituency.",
      "id": 90
    },
    {
      "topic": "Arms of Government",
      "difficulty": "medium",
      "question": "Which term describes: process of removing a public officer?",
      "options": [
        "Ombudsman",
        "Impeachment",
        "Civil service",
        "Bureaucracy"
      ],
      "answer": 1,
      "explanation": "That description matches Impeachment.",
      "id": 91
    },
    {
      "topic": "Public Administration",
      "difficulty": "hard",
      "question": "Which term describes: public officer who investigates complaints?",
      "options": [
        "Civil service",
        "Bureaucracy",
        "Ombudsman",
        "Public corporation"
      ],
      "answer": 2,
      "explanation": "That description matches Ombudsman.",
      "id": 92
    },
    {
      "topic": "Public Administration",
      "difficulty": "easy",
      "question": "Which term describes: permanent staff that implement policies?",
      "options": [
        "Civil service",
        "Bureaucracy",
        "Public corporation",
        "Local government"
      ],
      "answer": 0,
      "explanation": "That description matches Civil service.",
      "id": 93
    },
    {
      "topic": "Public Administration",
      "difficulty": "medium",
      "question": "Which term describes: administration by appointed officials?",
      "options": [
        "Public corporation",
        "Local government",
        "Checks and balances",
        "Bureaucracy"
      ],
      "answer": 3,
      "explanation": "That description matches Bureaucracy.",
      "id": 94
    },
    {
      "topic": "Public Administration",
      "difficulty": "medium",
      "question": "Which term describes: government-owned enterprise?",
      "options": [
        "Local government",
        "Public corporation",
        "Checks and balances",
        "Fundamental rights"
      ],
      "answer": 1,
      "explanation": "That description matches Public corporation.",
      "id": 95
    },
    {
      "topic": "Federalism",
      "difficulty": "easy",
      "question": "Which term describes: third tier of government?",
      "options": [
        "Checks and balances",
        "Fundamental rights",
        "Local government",
        "Citizenship"
      ],
      "answer": 2,
      "explanation": "That description matches Local government.",
      "id": 96
    },
    {
      "topic": "Basic Concepts",
      "difficulty": "medium",
      "question": "Which term describes: system that prevents abuse of power?",
      "options": [
        "Checks and balances",
        "Fundamental rights",
        "Citizenship",
        "Nationalism"
      ],
      "answer": 0,
      "explanation": "That description matches Checks and balances.",
      "id": 97
    },
    {
      "topic": "Citizenship",
      "difficulty": "easy",
      "question": "Which term describes: basic rights guaranteed by constitution?",
      "options": [
        "Citizenship",
        "Nationalism",
        "Socialism",
        "Fundamental rights"
      ],
      "answer": 3,
      "explanation": "That description matches Fundamental rights.",
      "id": 98
    },
    {
      "topic": "Citizenship",
      "difficulty": "easy",
      "question": "Which term describes: legal membership of a state?",
      "options": [
        "Nationalism",
        "Citizenship",
        "Socialism",
        "Capitalism"
      ],
      "answer": 1,
      "explanation": "That description matches Citizenship.",
      "id": 99
    },
    {
      "topic": "Ideologies",
      "difficulty": "medium",
      "question": "Which term describes: loyalty and devotion to a nation?",
      "options": [
        "Socialism",
        "Capitalism",
        "Nationalism",
        "Communism"
      ],
      "answer": 2,
      "explanation": "That description matches Nationalism.",
      "id": 100
    },
    {
      "topic": "Ideologies",
      "difficulty": "hard",
      "question": "Which term describes: state control of key sectors?",
      "options": [
        "Socialism",
        "Capitalism",
        "Communism",
        "Totalitarianism"
      ],
      "answer": 0,
      "explanation": "That description matches Socialism.",
      "id": 101
    },
    {
      "topic": "Ideologies",
      "difficulty": "medium",
      "question": "Which term describes: private ownership and profit motive?",
      "options": [
        "Communism",
        "Totalitarianism",
        "Democracy",
        "Capitalism"
      ],
      "answer": 3,
      "explanation": "That description matches Capitalism.",
      "id": 102
    },
    {
      "topic": "Ideologies",
      "difficulty": "hard",
      "question": "Which term describes: public ownership of major resources?",
      "options": [
        "Totalitarianism",
        "Communism",
        "Democracy",
        "Autocracy"
      ],
      "answer": 1,
      "explanation": "That description matches Communism.",
      "id": 103
    },
    {
      "topic": "Ideologies",
      "difficulty": "hard",
      "question": "Which term describes: absolute control by the state?",
      "options": [
        "Democracy",
        "Autocracy",
        "Totalitarianism",
        "Military rule"
      ],
      "answer": 2,
      "explanation": "That description matches Totalitarianism.",
      "id": 104
    },
    {
      "topic": "Basic Concepts",
      "difficulty": "easy",
      "question": "Which term describes: government based on popular participation?",
      "options": [
        "Democracy",
        "Autocracy",
        "Military rule",
        "Electoral malpractice"
      ],
      "answer": 0,
      "explanation": "That description matches Democracy.",
      "id": 105
    },
    {
      "topic": "Basic Concepts",
      "difficulty": "medium",
      "question": "Which term describes: government by one person?",
      "options": [
        "Military rule",
        "Electoral malpractice",
        "By-election",
        "Autocracy"
      ],
      "answer": 3,
      "explanation": "That description matches Autocracy.",
      "id": 106
    },
    {
      "topic": "Basic Concepts",
      "difficulty": "easy",
      "question": "Which term describes: government by the armed forces?",
      "options": [
        "Electoral malpractice",
        "Military rule",
        "By-election",
        "Veto"
      ],
      "answer": 1,
      "explanation": "That description matches Military rule.",
      "id": 107
    },
    {
      "topic": "Elections",
      "difficulty": "medium",
      "question": "Which term describes: unfair practices during elections?",
      "options": [
        "By-election",
        "Veto",
        "Electoral malpractice",
        "Quorum"
      ],
      "answer": 2,
      "explanation": "That description matches Electoral malpractice.",
      "id": 108
    },
    {
      "topic": "Elections",
      "difficulty": "easy",
      "question": "Which term describes: election to fill a vacant seat?",
      "options": [
        "By-election",
        "Veto",
        "Quorum",
        "Censure"
      ],
      "answer": 0,
      "explanation": "That description matches By-election.",
      "id": 109
    },
    {
      "topic": "Arms of Government",
      "difficulty": "medium",
      "question": "Which term describes: power to reject a bill?",
      "options": [
        "Quorum",
        "Censure",
        "Public opinion",
        "Veto"
      ],
      "answer": 3,
      "explanation": "That description matches Veto.",
      "id": 110
    },
    {
      "topic": "Arms of Government",
      "difficulty": "medium",
      "question": "Which term describes: minimum members needed to conduct meeting?",
      "options": [
        "Censure",
        "Quorum",
        "Public opinion",
        "Mass media"
      ],
      "answer": 1,
      "explanation": "That description matches Quorum.",
      "id": 111
    },
    {
      "topic": "Arms of Government",
      "difficulty": "hard",
      "question": "Which term describes: formal expression of disapproval?",
      "options": [
        "Public opinion",
        "Mass media",
        "Censure",
        "Lobbying"
      ],
      "answer": 2,
      "explanation": "That description matches Censure.",
      "id": 112
    },
    {
      "topic": "Pressure Groups",
      "difficulty": "easy",
      "question": "Which term describes: views held by the public?",
      "options": [
        "Public opinion",
        "Mass media",
        "Lobbying",
        "Sovereignty"
      ],
      "answer": 0,
      "explanation": "That description matches Public opinion.",
      "id": 113
    },
    {
      "topic": "Pressure Groups",
      "difficulty": "easy",
      "question": "Which term describes: means of communication to many people?",
      "options": [
        "Lobbying",
        "Sovereignty",
        "Political apathy",
        "Mass media"
      ],
      "answer": 3,
      "explanation": "That description matches Mass media.",
      "id": 114
    },
    {
      "topic": "Pressure Groups",
      "difficulty": "medium",
      "question": "Which term describes: persuading decision makers?",
      "options": [
        "Sovereignty",
        "Lobbying",
        "Political apathy",
        "Decentralization"
      ],
      "answer": 1,
      "explanation": "That description matches Lobbying.",
      "id": 115
    },
    {
      "topic": "Basic Concepts",
      "difficulty": "medium",
      "question": "Which term describes: supreme authority of a state?",
      "options": [
        "Political apathy",
        "Decentralization",
        "Sovereignty",
        "Fiscal federalism"
      ],
      "answer": 2,
      "explanation": "That description matches Sovereignty.",
      "id": 116
    },
    {
      "topic": "Citizenship",
      "difficulty": "easy",
      "question": "Which term describes: lack of interest in politics?",
      "options": [
        "Political apathy",
        "Decentralization",
        "Fiscal federalism",
        "Political socialization"
      ],
      "answer": 0,
      "explanation": "That description matches Political apathy.",
      "id": 117
    },
    {
      "topic": "Federalism",
      "difficulty": "medium",
      "question": "Which term describes: transfer of power to lower levels?",
      "options": [
        "Fiscal federalism",
        "Political socialization",
        "Constitutionalism",
        "Decentralization"
      ],
      "answer": 3,
      "explanation": "That description matches Decentralization.",
      "id": 118
    },
    {
      "topic": "Federalism",
      "difficulty": "hard",
      "question": "Which term describes: revenue and expenditure sharing in a federation?",
      "options": [
        "Political socialization",
        "Fiscal federalism",
        "Constitutionalism",
        "Cabinet"
      ],
      "answer": 1,
      "explanation": "That description matches Fiscal federalism.",
      "id": 119
    },
    {
      "topic": "Citizenship",
      "difficulty": "medium",
      "question": "Which term describes: process of learning political values and attitudes?",
      "options": [
        "Constitutionalism",
        "Cabinet",
        "Political socialization",
        "Civil liberties"
      ],
      "answer": 2,
      "explanation": "That description matches Political socialization.",
      "id": 120
    },
    {
      "topic": "Basic Concepts",
      "difficulty": "hard",
      "question": "Which term describes: government limited by the constitution?",
      "options": [
        "Constitutionalism",
        "Cabinet",
        "Civil liberties",
        "Adult suffrage"
      ],
      "answer": 0,
      "explanation": "That description matches Constitutionalism.",
      "id": 121
    },
    {
      "topic": "Public Administration",
      "difficulty": "medium",
      "question": "Which term describes: group of senior ministers advising the executive?",
      "options": [
        "Civil liberties",
        "Adult suffrage",
        "Electoral college",
        "Cabinet"
      ],
      "answer": 3,
      "explanation": "That description matches Cabinet.",
      "id": 122
    },
    {
      "topic": "Citizenship",
      "difficulty": "medium",
      "question": "Which term describes: personal freedoms guaranteed by law?",
      "options": [
        "Adult suffrage",
        "Civil liberties",
        "Electoral college",
        "Delegated legislation"
      ],
      "answer": 1,
      "explanation": "That description matches Civil liberties.",
      "id": 123
    },
    {
      "topic": "Elections",
      "difficulty": "medium",
      "question": "Which term describes: right of adults to vote?",
      "options": [
        "Electoral college",
        "Delegated legislation",
        "Adult suffrage",
        "Judicial review"
      ],
      "answer": 2,
      "explanation": "That description matches Adult suffrage.",
      "id": 124
    },
    {
      "topic": "Elections",
      "difficulty": "hard",
      "question": "Which term describes: body that elects leaders?",
      "options": [
        "Electoral college",
        "Delegated legislation",
        "Judicial review",
        "Federal character"
      ],
      "answer": 0,
      "explanation": "That description matches Electoral college.",
      "id": 125
    },
    {
      "topic": "Arms of Government",
      "difficulty": "hard",
      "question": "Which term describes: laws made by authorized bodies?",
      "options": [
        "Judicial review",
        "Federal character",
        "Civic education",
        "Delegated legislation"
      ],
      "answer": 3,
      "explanation": "That description matches Delegated legislation.",
      "id": 126
    },
    {
      "topic": "Arms of Government",
      "difficulty": "hard",
      "question": "Which term describes: court power to interpret or invalidate laws?",
      "options": [
        "Federal character",
        "Judicial review",
        "Civic education",
        "Political participation"
      ],
      "answer": 1,
      "explanation": "That description matches Judicial review.",
      "id": 127
    },
    {
      "topic": "Federalism",
      "difficulty": "medium",
      "question": "Which term describes: policy ensuring representation of groups?",
      "options": [
        "Civic education",
        "Political participation",
        "Federal character",
        "Lobbyist"
      ],
      "answer": 2,
      "explanation": "That description matches Federal character.",
      "id": 128
    },
    {
      "topic": "Citizenship",
      "difficulty": "easy",
      "question": "Which term describes: teaching citizens their rights and duties?",
      "options": [
        "Civic education",
        "Political participation",
        "Lobbyist",
        "Interim government"
      ],
      "answer": 0,
      "explanation": "That description matches Civic education.",
      "id": 129
    },
    {
      "topic": "Citizenship",
      "difficulty": "easy",
      "question": "Which term describes: citizen involvement in politics?",
      "options": [
        "Lobbyist",
        "Interim government",
        "Two-party system",
        "Political participation"
      ],
      "answer": 3,
      "explanation": "That description matches Political participation.",
      "id": 130
    },
    {
      "topic": "Pressure Groups",
      "difficulty": "medium",
      "question": "Which term describes: person who seeks to influence policy?",
      "options": [
        "Interim government",
        "Lobbyist",
        "Two-party system",
        "One-party system"
      ],
      "answer": 1,
      "explanation": "That description matches Lobbyist.",
      "id": 131
    },
    {
      "topic": "Systems of Government",
      "difficulty": "medium",
      "question": "Which term describes: temporary government before elections?",
      "options": [
        "Two-party system",
        "One-party system",
        "Interim government",
        "Plebiscite"
      ],
      "answer": 2,
      "explanation": "That description matches Interim government.",
      "id": 132
    },
    {
      "topic": "Systems of Government",
      "difficulty": "medium",
      "question": "Which term describes: system dominated by two major parties?",
      "options": [
        "Two-party system",
        "One-party system",
        "Plebiscite",
        "Constituency delimitation"
      ],
      "answer": 0,
      "explanation": "That description matches Two-party system.",
      "id": 133
    },
    {
      "topic": "Systems of Government",
      "difficulty": "medium",
      "question": "Which term describes: system with a single legal party?",
      "options": [
        "Plebiscite",
        "Constituency delimitation",
        "Voter apathy",
        "One-party system"
      ],
      "answer": 3,
      "explanation": "That description matches One-party system.",
      "id": 134
    },
    {
      "topic": "Elections",
      "difficulty": "medium",
      "question": "Which term describes: direct vote on an issue?",
      "options": [
        "Constituency delimitation",
        "Plebiscite",
        "Voter apathy",
        "Civil disobedience"
      ],
      "answer": 1,
      "explanation": "That description matches Plebiscite.",
      "id": 135
    },
    {
      "topic": "Elections",
      "difficulty": "hard",
      "question": "Which term describes: drawing electoral boundaries?",
      "options": [
        "Voter apathy",
        "Civil disobedience",
        "Constituency delimitation",
        "National assembly"
      ],
      "answer": 2,
      "explanation": "That description matches Constituency delimitation.",
      "id": 136
    },
    {
      "topic": "Elections",
      "difficulty": "easy",
      "question": "Which term describes: low voter interest or turnout?",
      "options": [
        "Voter apathy",
        "Civil disobedience",
        "National assembly",
        "Supremacy of constitution"
      ],
      "answer": 0,
      "explanation": "That description matches Voter apathy.",
      "id": 137
    },
    {
      "topic": "Citizenship",
      "difficulty": "hard",
      "question": "Which term describes: refusal to obey unjust laws?",
      "options": [
        "National assembly",
        "Supremacy of constitution",
        "Constitution",
        "Civil disobedience"
      ],
      "answer": 3,
      "explanation": "That description matches Civil disobedience.",
      "id": 138
    },
    {
      "topic": "Arms of Government",
      "difficulty": "easy",
      "question": "Which term describes: federal legislature?",
      "options": [
        "Supremacy of constitution",
        "National assembly",
        "Constitution",
        "Rule of law"
      ],
      "answer": 1,
      "explanation": "That description matches National assembly.",
      "id": 139
    },
    {
      "topic": "Basic Concepts",
      "difficulty": "easy",
      "question": "Which term describes: constitution is the highest law?",
      "options": [
        "Constitution",
        "Rule of law",
        "Supremacy of constitution",
        "Separation of powers"
      ],
      "answer": 2,
      "explanation": "That description matches Supremacy of constitution.",
      "id": 140
    },
    {
      "topic": "Arms of Government",
      "difficulty": "medium",
      "question": "A president refuses to sign a bill passed by parliament. This action is called ___.",
      "options": [
        "veto",
        "impeachment",
        "referendum",
        "censure"
      ],
      "answer": 0,
      "explanation": "Refusing to sign a bill is a veto.",
      "id": 141
    },
    {
      "topic": "Arms of Government",
      "difficulty": "hard",
      "question": "A court declares a law unconstitutional. This illustrates ___.",
      "options": [
        "delegated legislation",
        "bicameralism",
        "federal character",
        "judicial review"
      ],
      "answer": 3,
      "explanation": "Courts can invalidate unconstitutional laws.",
      "id": 142
    },
    {
      "topic": "Federalism",
      "difficulty": "easy",
      "question": "Power shared between central and state governments is known as ___.",
      "options": [
        "unitary system",
        "federalism",
        "autocracy",
        "oligarchy"
      ],
      "answer": 1,
      "explanation": "Federalism shares power across levels.",
      "id": 143
    },
    {
      "topic": "Elections",
      "difficulty": "medium",
      "question": "Citizens vote directly on a national issue. This is a ___.",
      "options": [
        "manifesto",
        "coalition",
        "referendum",
        "bureaucracy"
      ],
      "answer": 2,
      "explanation": "Referendum is a direct vote.",
      "id": 144
    },
    {
      "topic": "Pressure Groups",
      "difficulty": "easy",
      "question": "The media campaigns to change a public policy. This is an example of ___.",
      "options": [
        "pressure group influence",
        "military rule",
        "fiscal federalism",
        "autocracy"
      ],
      "answer": 0,
      "explanation": "Mass media can influence policy.",
      "id": 145
    },
    {
      "topic": "Elections",
      "difficulty": "medium",
      "question": "Ballot box stuffing during elections is an example of ___.",
      "options": [
        "franchise",
        "coalition",
        "civic education",
        "electoral malpractice"
      ],
      "answer": 3,
      "explanation": "Stuffing ballots is malpractice.",
      "id": 146
    },
    {
      "topic": "Citizenship",
      "difficulty": "hard",
      "question": "A citizen is detained for months without trial. This violates the right to ___.",
      "options": [
        "taxation",
        "personal liberty",
        "sovereignty",
        "federal character"
      ],
      "answer": 1,
      "explanation": "Unlawful detention violates liberty.",
      "id": 147
    },
    {
      "topic": "Arms of Government",
      "difficulty": "easy",
      "question": "A legislature with two chambers is described as ___.",
      "options": [
        "unicameral",
        "totalitarian",
        "bicameral",
        "unitary"
      ],
      "answer": 2,
      "explanation": "Two chambers = bicameral.",
      "id": 148
    },
    {
      "topic": "Systems of Government",
      "difficulty": "medium",
      "question": "When the executive is drawn from the legislature, the system is ___.",
      "options": [
        "parliamentary",
        "presidential",
        "military",
        "unitary"
      ],
      "answer": 0,
      "explanation": "Parliamentary system draws executive from legislature.",
      "id": 149
    },
    {
      "topic": "Systems of Government",
      "difficulty": "easy",
      "question": "A government run by the armed forces is called ___.",
      "options": [
        "democracy",
        "federalism",
        "socialism",
        "military rule"
      ],
      "answer": 3,
      "explanation": "Military rule is government by armed forces.",
      "id": 150
    }
  ],
  "literature": [
    {
      "topic": "Literary Devices",
      "difficulty": "easy",
      "question": "The term 'Alliteration' refers to ___.",
      "options": [
        "repetition of vowel sounds",
        "direct comparison without like/as",
        "repetition of initial consonant sounds",
        "comparison using like or as"
      ],
      "answer": 2,
      "explanation": "Alliteration means repetition of initial consonant sounds.",
      "id": 1
    },
    {
      "topic": "Literary Devices",
      "difficulty": "medium",
      "question": "The term 'Assonance' refers to ___.",
      "options": [
        "direct comparison without like/as",
        "repetition of vowel sounds",
        "comparison using like or as",
        "giving human qualities to non-human things"
      ],
      "answer": 1,
      "explanation": "Assonance means repetition of vowel sounds.",
      "id": 2
    },
    {
      "topic": "Literary Devices",
      "difficulty": "easy",
      "question": "The term 'Metaphor' refers to ___.",
      "options": [
        "direct comparison without like/as",
        "comparison using like or as",
        "giving human qualities to non-human things",
        "deliberate exaggeration"
      ],
      "answer": 0,
      "explanation": "Metaphor means direct comparison without like/as.",
      "id": 3
    },
    {
      "topic": "Literary Devices",
      "difficulty": "easy",
      "question": "The term 'Simile' refers to ___.",
      "options": [
        "giving human qualities to non-human things",
        "deliberate exaggeration",
        "contrast between expectation and reality",
        "comparison using like or as"
      ],
      "answer": 3,
      "explanation": "Simile means comparison using like or as.",
      "id": 4
    },
    {
      "topic": "Literary Devices",
      "difficulty": "easy",
      "question": "The term 'Personification' refers to ___.",
      "options": [
        "deliberate exaggeration",
        "contrast between expectation and reality",
        "giving human qualities to non-human things",
        "writing that criticizes with humor"
      ],
      "answer": 2,
      "explanation": "Personification means giving human qualities to non-human things.",
      "id": 5
    },
    {
      "topic": "Literary Devices",
      "difficulty": "easy",
      "question": "The term 'Hyperbole' refers to ___.",
      "options": [
        "contrast between expectation and reality",
        "deliberate exaggeration",
        "writing that criticizes with humor",
        "use of symbols to represent ideas"
      ],
      "answer": 1,
      "explanation": "Hyperbole means deliberate exaggeration.",
      "id": 6
    },
    {
      "topic": "Literary Devices",
      "difficulty": "medium",
      "question": "The term 'Irony' refers to ___.",
      "options": [
        "contrast between expectation and reality",
        "writing that criticizes with humor",
        "use of symbols to represent ideas",
        "reference to a known person or event"
      ],
      "answer": 0,
      "explanation": "Irony means contrast between expectation and reality.",
      "id": 7
    },
    {
      "topic": "Literary Devices",
      "difficulty": "medium",
      "question": "The term 'Satire' refers to ___.",
      "options": [
        "use of symbols to represent ideas",
        "reference to a known person or event",
        "combination of contradictory terms",
        "writing that criticizes with humor"
      ],
      "answer": 3,
      "explanation": "Satire means writing that criticizes with humor.",
      "id": 8
    },
    {
      "topic": "Literary Devices",
      "difficulty": "medium",
      "question": "The term 'Symbolism' refers to ___.",
      "options": [
        "reference to a known person or event",
        "combination of contradictory terms",
        "use of symbols to represent ideas",
        "use of words that imitate sounds"
      ],
      "answer": 2,
      "explanation": "Symbolism means use of symbols to represent ideas.",
      "id": 9
    },
    {
      "topic": "Literary Devices",
      "difficulty": "medium",
      "question": "The term 'Allusion' refers to ___.",
      "options": [
        "combination of contradictory terms",
        "reference to a known person or event",
        "use of words that imitate sounds",
        "short wise saying"
      ],
      "answer": 1,
      "explanation": "Allusion means reference to a known person or event.",
      "id": 10
    },
    {
      "topic": "Literary Devices",
      "difficulty": "medium",
      "question": "The term 'Oxymoron' refers to ___.",
      "options": [
        "combination of contradictory terms",
        "use of words that imitate sounds",
        "short wise saying",
        "central idea of a work"
      ],
      "answer": 0,
      "explanation": "Oxymoron means combination of contradictory terms.",
      "id": 11
    },
    {
      "topic": "Literary Devices",
      "difficulty": "easy",
      "question": "The term 'Onomatopoeia' refers to ___.",
      "options": [
        "short wise saying",
        "central idea of a work",
        "time and place of a story",
        "use of words that imitate sounds"
      ],
      "answer": 3,
      "explanation": "Onomatopoeia means use of words that imitate sounds.",
      "id": 12
    },
    {
      "topic": "Literary Devices",
      "difficulty": "easy",
      "question": "The term 'Proverb' refers to ___.",
      "options": [
        "central idea of a work",
        "time and place of a story",
        "short wise saying",
        "sequence of events in a story"
      ],
      "answer": 2,
      "explanation": "Proverb means short wise saying.",
      "id": 13
    },
    {
      "topic": "Elements",
      "difficulty": "easy",
      "question": "The term 'Theme' refers to ___.",
      "options": [
        "time and place of a story",
        "central idea of a work",
        "sequence of events in a story",
        "main character"
      ],
      "answer": 1,
      "explanation": "Theme means central idea of a work.",
      "id": 14
    },
    {
      "topic": "Elements",
      "difficulty": "easy",
      "question": "The term 'Setting' refers to ___.",
      "options": [
        "time and place of a story",
        "sequence of events in a story",
        "main character",
        "character opposing the protagonist"
      ],
      "answer": 0,
      "explanation": "Setting means time and place of a story.",
      "id": 15
    },
    {
      "topic": "Elements",
      "difficulty": "easy",
      "question": "The term 'Plot' refers to ___.",
      "options": [
        "main character",
        "character opposing the protagonist",
        "person who tells the story",
        "sequence of events in a story"
      ],
      "answer": 3,
      "explanation": "Plot means sequence of events in a story.",
      "id": 16
    },
    {
      "topic": "Elements",
      "difficulty": "easy",
      "question": "The term 'Protagonist' refers to ___.",
      "options": [
        "character opposing the protagonist",
        "person who tells the story",
        "main character",
        "highest point of tension"
      ],
      "answer": 2,
      "explanation": "Protagonist means main character.",
      "id": 17
    },
    {
      "topic": "Elements",
      "difficulty": "easy",
      "question": "The term 'Antagonist' refers to ___.",
      "options": [
        "person who tells the story",
        "character opposing the protagonist",
        "highest point of tension",
        "struggle between opposing forces"
      ],
      "answer": 1,
      "explanation": "Antagonist means character opposing the protagonist.",
      "id": 18
    },
    {
      "topic": "Elements",
      "difficulty": "easy",
      "question": "The term 'Narrator' refers to ___.",
      "options": [
        "person who tells the story",
        "highest point of tension",
        "struggle between opposing forces",
        "hint of future events"
      ],
      "answer": 0,
      "explanation": "Narrator means person who tells the story.",
      "id": 19
    },
    {
      "topic": "Elements",
      "difficulty": "medium",
      "question": "The term 'Climax' refers to ___.",
      "options": [
        "struggle between opposing forces",
        "hint of future events",
        "scene set in the past",
        "highest point of tension"
      ],
      "answer": 3,
      "explanation": "Climax means highest point of tension.",
      "id": 20
    },
    {
      "topic": "Elements",
      "difficulty": "easy",
      "question": "The term 'Conflict' refers to ___.",
      "options": [
        "hint of future events",
        "scene set in the past",
        "struggle between opposing forces",
        "emotional atmosphere"
      ],
      "answer": 2,
      "explanation": "Conflict means struggle between opposing forces.",
      "id": 21
    },
    {
      "topic": "Elements",
      "difficulty": "medium",
      "question": "The term 'Foreshadowing' refers to ___.",
      "options": [
        "scene set in the past",
        "hint of future events",
        "emotional atmosphere",
        "writer's attitude"
      ],
      "answer": 1,
      "explanation": "Foreshadowing means hint of future events.",
      "id": 22
    },
    {
      "topic": "Elements",
      "difficulty": "medium",
      "question": "The term 'Flashback' refers to ___.",
      "options": [
        "scene set in the past",
        "emotional atmosphere",
        "writer's attitude",
        "category of literature"
      ],
      "answer": 0,
      "explanation": "Flashback means scene set in the past.",
      "id": 23
    },
    {
      "topic": "Elements",
      "difficulty": "medium",
      "question": "The term 'Mood' refers to ___.",
      "options": [
        "writer's attitude",
        "category of literature",
        "long narrative poem",
        "emotional atmosphere"
      ],
      "answer": 3,
      "explanation": "Mood means emotional atmosphere.",
      "id": 24
    },
    {
      "topic": "Elements",
      "difficulty": "medium",
      "question": "The term 'Tone' refers to ___.",
      "options": [
        "category of literature",
        "long narrative poem",
        "writer's attitude",
        "poem of 14 lines"
      ],
      "answer": 2,
      "explanation": "Tone means writer's attitude.",
      "id": 25
    },
    {
      "topic": "Genres",
      "difficulty": "easy",
      "question": "The term 'Genre' refers to ___.",
      "options": [
        "long narrative poem",
        "category of literature",
        "poem of 14 lines",
        "lyrical poem of praise"
      ],
      "answer": 1,
      "explanation": "Genre means category of literature.",
      "id": 26
    },
    {
      "topic": "Genres",
      "difficulty": "medium",
      "question": "The term 'Epic' refers to ___.",
      "options": [
        "long narrative poem",
        "poem of 14 lines",
        "lyrical poem of praise",
        "poem of mourning"
      ],
      "answer": 0,
      "explanation": "Epic means long narrative poem.",
      "id": 27
    },
    {
      "topic": "Genres",
      "difficulty": "easy",
      "question": "The term 'Sonnet' refers to ___.",
      "options": [
        "lyrical poem of praise",
        "poem of mourning",
        "short narrative poem",
        "poem of 14 lines"
      ],
      "answer": 3,
      "explanation": "Sonnet means poem of 14 lines.",
      "id": 28
    },
    {
      "topic": "Genres",
      "difficulty": "medium",
      "question": "The term 'Ode' refers to ___.",
      "options": [
        "poem of mourning",
        "short narrative poem",
        "lyrical poem of praise",
        "play with serious theme and sad ending"
      ],
      "answer": 2,
      "explanation": "Ode means lyrical poem of praise.",
      "id": 29
    },
    {
      "topic": "Genres",
      "difficulty": "medium",
      "question": "The term 'Elegy' refers to ___.",
      "options": [
        "short narrative poem",
        "poem of mourning",
        "play with serious theme and sad ending",
        "play that amuses"
      ],
      "answer": 1,
      "explanation": "Elegy means poem of mourning.",
      "id": 30
    },
    {
      "topic": "Genres",
      "difficulty": "easy",
      "question": "The term 'Ballad' refers to ___.",
      "options": [
        "short narrative poem",
        "play with serious theme and sad ending",
        "play that amuses",
        "literature meant to be performed"
      ],
      "answer": 0,
      "explanation": "Ballad means short narrative poem.",
      "id": 31
    },
    {
      "topic": "Drama",
      "difficulty": "easy",
      "question": "The term 'Tragedy' refers to ___.",
      "options": [
        "play that amuses",
        "literature meant to be performed",
        "speech by a character alone",
        "play with serious theme and sad ending"
      ],
      "answer": 3,
      "explanation": "Tragedy means play with serious theme and sad ending.",
      "id": 32
    },
    {
      "topic": "Drama",
      "difficulty": "easy",
      "question": "The term 'Comedy' refers to ___.",
      "options": [
        "literature meant to be performed",
        "speech by a character alone",
        "play that amuses",
        "short remark to the audience"
      ],
      "answer": 2,
      "explanation": "Comedy means play that amuses.",
      "id": 33
    },
    {
      "topic": "Drama",
      "difficulty": "easy",
      "question": "The term 'Drama' refers to ___.",
      "options": [
        "speech by a character alone",
        "literature meant to be performed",
        "short remark to the audience",
        "long speech by one character"
      ],
      "answer": 1,
      "explanation": "Drama means literature meant to be performed.",
      "id": 34
    },
    {
      "topic": "Drama",
      "difficulty": "medium",
      "question": "The term 'Soliloquy' refers to ___.",
      "options": [
        "speech by a character alone",
        "short remark to the audience",
        "long speech by one character",
        "conversation between characters"
      ],
      "answer": 0,
      "explanation": "Soliloquy means speech by a character alone.",
      "id": 35
    },
    {
      "topic": "Drama",
      "difficulty": "medium",
      "question": "The term 'Aside' refers to ___.",
      "options": [
        "long speech by one character",
        "conversation between characters",
        "language that appeals to the senses",
        "short remark to the audience"
      ],
      "answer": 3,
      "explanation": "Aside means short remark to the audience.",
      "id": 36
    },
    {
      "topic": "Drama",
      "difficulty": "easy",
      "question": "The term 'Monologue' refers to ___.",
      "options": [
        "conversation between characters",
        "language that appeals to the senses",
        "long speech by one character",
        "repetition of similar sounds"
      ],
      "answer": 2,
      "explanation": "Monologue means long speech by one character.",
      "id": 37
    },
    {
      "topic": "Drama",
      "difficulty": "easy",
      "question": "The term 'Dialogue' refers to ___.",
      "options": [
        "language that appeals to the senses",
        "conversation between characters",
        "repetition of similar sounds",
        "group of lines in a poem"
      ],
      "answer": 1,
      "explanation": "Dialogue means conversation between characters.",
      "id": 38
    },
    {
      "topic": "Poetry",
      "difficulty": "medium",
      "question": "The term 'Imagery' refers to ___.",
      "options": [
        "language that appeals to the senses",
        "repetition of similar sounds",
        "group of lines in a poem",
        "pattern of stressed and unstressed syllables"
      ],
      "answer": 0,
      "explanation": "Imagery means language that appeals to the senses.",
      "id": 39
    },
    {
      "topic": "Poetry",
      "difficulty": "easy",
      "question": "The term 'Rhyme' refers to ___.",
      "options": [
        "group of lines in a poem",
        "pattern of stressed and unstressed syllables",
        "choice of words",
        "repetition of similar sounds"
      ],
      "answer": 3,
      "explanation": "Rhyme means repetition of similar sounds.",
      "id": 40
    },
    {
      "topic": "Poetry",
      "difficulty": "easy",
      "question": "The term 'Stanza' refers to ___.",
      "options": [
        "pattern of stressed and unstressed syllables",
        "choice of words",
        "group of lines in a poem",
        "distinctive way of writing"
      ],
      "answer": 2,
      "explanation": "Stanza means group of lines in a poem.",
      "id": 41
    },
    {
      "topic": "Poetry",
      "difficulty": "hard",
      "question": "The term 'Meter' refers to ___.",
      "options": [
        "choice of words",
        "pattern of stressed and unstressed syllables",
        "distinctive way of writing",
        "recurring element in a work"
      ],
      "answer": 1,
      "explanation": "Meter means pattern of stressed and unstressed syllables.",
      "id": 42
    },
    {
      "topic": "Style",
      "difficulty": "medium",
      "question": "The term 'Diction' refers to ___.",
      "options": [
        "choice of words",
        "distinctive way of writing",
        "recurring element in a work",
        "story with a hidden meaning"
      ],
      "answer": 0,
      "explanation": "Diction means choice of words.",
      "id": 43
    },
    {
      "topic": "Style",
      "difficulty": "medium",
      "question": "The term 'Style' refers to ___.",
      "options": [
        "recurring element in a work",
        "story with a hidden meaning",
        "statement that seems contradictory but is true",
        "distinctive way of writing"
      ],
      "answer": 3,
      "explanation": "Style means distinctive way of writing.",
      "id": 44
    },
    {
      "topic": "Style",
      "difficulty": "hard",
      "question": "The term 'Motif' refers to ___.",
      "options": [
        "story with a hidden meaning",
        "statement that seems contradictory but is true",
        "recurring element in a work",
        "substitution with a related term"
      ],
      "answer": 2,
      "explanation": "Motif means recurring element in a work.",
      "id": 45
    },
    {
      "topic": "Style",
      "difficulty": "hard",
      "question": "The term 'Allegory' refers to ___.",
      "options": [
        "statement that seems contradictory but is true",
        "story with a hidden meaning",
        "substitution with a related term",
        "perspective from which story is told"
      ],
      "answer": 1,
      "explanation": "Allegory means story with a hidden meaning.",
      "id": 46
    },
    {
      "topic": "Style",
      "difficulty": "hard",
      "question": "The term 'Paradox' refers to ___.",
      "options": [
        "statement that seems contradictory but is true",
        "substitution with a related term",
        "perspective from which story is told",
        "ordinary written language without meter"
      ],
      "answer": 0,
      "explanation": "Paradox means statement that seems contradictory but is true.",
      "id": 47
    },
    {
      "topic": "Style",
      "difficulty": "hard",
      "question": "The term 'Metonymy' refers to ___.",
      "options": [
        "perspective from which story is told",
        "ordinary written language without meter",
        "short story with a moral lesson",
        "substitution with a related term"
      ],
      "answer": 3,
      "explanation": "Metonymy means substitution with a related term.",
      "id": 48
    },
    {
      "topic": "Elements",
      "difficulty": "medium",
      "question": "The term 'Point of view' refers to ___.",
      "options": [
        "ordinary written language without meter",
        "short story with a moral lesson",
        "perspective from which story is told",
        "traditional story explaining origins"
      ],
      "answer": 2,
      "explanation": "Point of view means perspective from which story is told.",
      "id": 49
    },
    {
      "topic": "Genres",
      "difficulty": "easy",
      "question": "The term 'Prose' refers to ___.",
      "options": [
        "short story with a moral lesson",
        "ordinary written language without meter",
        "traditional story explaining origins",
        "traditional story passed orally"
      ],
      "answer": 1,
      "explanation": "Prose means ordinary written language without meter.",
      "id": 50
    },
    {
      "topic": "Genres",
      "difficulty": "easy",
      "question": "The term 'Fable' refers to ___.",
      "options": [
        "short story with a moral lesson",
        "traditional story explaining origins",
        "traditional story passed orally",
        "short poem expressing feelings"
      ],
      "answer": 0,
      "explanation": "Fable means short story with a moral lesson.",
      "id": 51
    },
    {
      "topic": "Genres",
      "difficulty": "medium",
      "question": "The term 'Myth' refers to ___.",
      "options": [
        "traditional story passed orally",
        "short poem expressing feelings",
        "poetry without regular meter or rhyme",
        "traditional story explaining origins"
      ],
      "answer": 3,
      "explanation": "Myth means traditional story explaining origins.",
      "id": 52
    },
    {
      "topic": "Genres",
      "difficulty": "easy",
      "question": "The term 'Folktale' refers to ___.",
      "options": [
        "short poem expressing feelings",
        "poetry without regular meter or rhyme",
        "traditional story passed orally",
        "unrhymed iambic pentameter"
      ],
      "answer": 2,
      "explanation": "Folktale means traditional story passed orally.",
      "id": 53
    },
    {
      "topic": "Genres",
      "difficulty": "medium",
      "question": "The term 'Lyric' refers to ___.",
      "options": [
        "poetry without regular meter or rhyme",
        "short poem expressing feelings",
        "unrhymed iambic pentameter",
        "pattern of rhymes in a poem"
      ],
      "answer": 1,
      "explanation": "Lyric means short poem expressing feelings.",
      "id": 54
    },
    {
      "topic": "Poetry",
      "difficulty": "medium",
      "question": "The term 'Free verse' refers to ___.",
      "options": [
        "poetry without regular meter or rhyme",
        "unrhymed iambic pentameter",
        "pattern of rhymes in a poem",
        "continuation of a sentence without a pause"
      ],
      "answer": 0,
      "explanation": "Free verse means poetry without regular meter or rhyme.",
      "id": 55
    },
    {
      "topic": "Poetry",
      "difficulty": "hard",
      "question": "The term 'Blank verse' refers to ___.",
      "options": [
        "pattern of rhymes in a poem",
        "continuation of a sentence without a pause",
        "audience knows more than a character",
        "unrhymed iambic pentameter"
      ],
      "answer": 3,
      "explanation": "Blank verse means unrhymed iambic pentameter.",
      "id": 56
    },
    {
      "topic": "Poetry",
      "difficulty": "medium",
      "question": "The term 'Rhyme scheme' refers to ___.",
      "options": [
        "continuation of a sentence without a pause",
        "audience knows more than a character",
        "pattern of rhymes in a poem",
        "character weakness causing downfall"
      ],
      "answer": 2,
      "explanation": "Rhyme scheme means pattern of rhymes in a poem.",
      "id": 57
    },
    {
      "topic": "Poetry",
      "difficulty": "hard",
      "question": "The term 'Enjambment' refers to ___.",
      "options": [
        "audience knows more than a character",
        "continuation of a sentence without a pause",
        "character weakness causing downfall",
        "emotional release in tragedy"
      ],
      "answer": 1,
      "explanation": "Enjambment means continuation of a sentence without a pause.",
      "id": 58
    },
    {
      "topic": "Literary Devices",
      "difficulty": "hard",
      "question": "The term 'Dramatic irony' refers to ___.",
      "options": [
        "audience knows more than a character",
        "character weakness causing downfall",
        "emotional release in tragedy",
        "method of developing characters"
      ],
      "answer": 0,
      "explanation": "Dramatic irony means audience knows more than a character.",
      "id": 59
    },
    {
      "topic": "Drama",
      "difficulty": "hard",
      "question": "The term 'Tragic flaw' refers to ___.",
      "options": [
        "emotional release in tragedy",
        "method of developing characters",
        "secondary plot within a story",
        "character weakness causing downfall"
      ],
      "answer": 3,
      "explanation": "Tragic flaw means character weakness causing downfall.",
      "id": 60
    },
    {
      "topic": "Drama",
      "difficulty": "hard",
      "question": "The term 'Catharsis' refers to ___.",
      "options": [
        "method of developing characters",
        "secondary plot within a story",
        "emotional release in tragedy",
        "resolution after the climax"
      ],
      "answer": 2,
      "explanation": "Catharsis means emotional release in tragedy.",
      "id": 61
    },
    {
      "topic": "Elements",
      "difficulty": "medium",
      "question": "The term 'Characterization' refers to ___.",
      "options": [
        "secondary plot within a story",
        "method of developing characters",
        "resolution after the climax",
        "story begins in the middle of events"
      ],
      "answer": 1,
      "explanation": "Characterization means method of developing characters.",
      "id": 62
    },
    {
      "topic": "Elements",
      "difficulty": "medium",
      "question": "The term 'Subplot' refers to ___.",
      "options": [
        "secondary plot within a story",
        "resolution after the climax",
        "story begins in the middle of events",
        "character who contrasts with another"
      ],
      "answer": 0,
      "explanation": "Subplot means secondary plot within a story.",
      "id": 63
    },
    {
      "topic": "Elements",
      "difficulty": "medium",
      "question": "The term 'Denouement' refers to ___.",
      "options": [
        "story begins in the middle of events",
        "character who contrasts with another",
        "distinct voice of the narrator",
        "resolution after the climax"
      ],
      "answer": 3,
      "explanation": "Denouement means resolution after the climax.",
      "id": 64
    },
    {
      "topic": "Style",
      "difficulty": "hard",
      "question": "The term 'In medias res' refers to ___.",
      "options": [
        "character who contrasts with another",
        "distinct voice of the narrator",
        "story begins in the middle of events",
        "narrator uses I or we"
      ],
      "answer": 2,
      "explanation": "In medias res means story begins in the middle of events.",
      "id": 65
    },
    {
      "topic": "Elements",
      "difficulty": "medium",
      "question": "The term 'Foil' refers to ___.",
      "options": [
        "distinct voice of the narrator",
        "character who contrasts with another",
        "narrator uses I or we",
        "narrator knows all characters' thoughts"
      ],
      "answer": 1,
      "explanation": "Foil means character who contrasts with another.",
      "id": 66
    },
    {
      "topic": "Style",
      "difficulty": "medium",
      "question": "The term 'Narrative voice' refers to ___.",
      "options": [
        "distinct voice of the narrator",
        "narrator uses I or we",
        "narrator knows all characters' thoughts",
        "narrative of continuous thoughts"
      ],
      "answer": 0,
      "explanation": "Narrative voice means distinct voice of the narrator.",
      "id": 67
    },
    {
      "topic": "Elements",
      "difficulty": "medium",
      "question": "The term 'First-person narration' refers to ___.",
      "options": [
        "narrator knows all characters' thoughts",
        "narrative of continuous thoughts",
        "repetition of initial consonant sounds",
        "narrator uses I or we"
      ],
      "answer": 3,
      "explanation": "First-person narration means narrator uses I or we.",
      "id": 68
    },
    {
      "topic": "Elements",
      "difficulty": "hard",
      "question": "The term 'Third-person omniscient' refers to ___.",
      "options": [
        "narrative of continuous thoughts",
        "repetition of initial consonant sounds",
        "narrator knows all characters' thoughts",
        "repetition of vowel sounds"
      ],
      "answer": 2,
      "explanation": "Third-person omniscient means narrator knows all characters' thoughts.",
      "id": 69
    },
    {
      "topic": "Style",
      "difficulty": "hard",
      "question": "The term 'Stream of consciousness' refers to ___.",
      "options": [
        "repetition of initial consonant sounds",
        "narrative of continuous thoughts",
        "repetition of vowel sounds",
        "direct comparison without like/as"
      ],
      "answer": 1,
      "explanation": "Stream of consciousness means narrative of continuous thoughts.",
      "id": 70
    },
    {
      "topic": "Literary Devices",
      "difficulty": "easy",
      "question": "Which term describes: repetition of initial consonant sounds?",
      "options": [
        "Alliteration",
        "Assonance",
        "Metaphor",
        "Simile"
      ],
      "answer": 0,
      "explanation": "That description matches Alliteration.",
      "id": 71
    },
    {
      "topic": "Literary Devices",
      "difficulty": "medium",
      "question": "Which term describes: repetition of vowel sounds?",
      "options": [
        "Metaphor",
        "Simile",
        "Personification",
        "Assonance"
      ],
      "answer": 3,
      "explanation": "That description matches Assonance.",
      "id": 72
    },
    {
      "topic": "Literary Devices",
      "difficulty": "easy",
      "question": "Which term describes: direct comparison without like/as?",
      "options": [
        "Simile",
        "Personification",
        "Metaphor",
        "Hyperbole"
      ],
      "answer": 2,
      "explanation": "That description matches Metaphor.",
      "id": 73
    },
    {
      "topic": "Literary Devices",
      "difficulty": "easy",
      "question": "Which term describes: comparison using like or as?",
      "options": [
        "Personification",
        "Simile",
        "Hyperbole",
        "Irony"
      ],
      "answer": 1,
      "explanation": "That description matches Simile.",
      "id": 74
    },
    {
      "topic": "Literary Devices",
      "difficulty": "easy",
      "question": "Which term describes: giving human qualities to non-human things?",
      "options": [
        "Personification",
        "Hyperbole",
        "Irony",
        "Satire"
      ],
      "answer": 0,
      "explanation": "That description matches Personification.",
      "id": 75
    },
    {
      "topic": "Literary Devices",
      "difficulty": "easy",
      "question": "Which term describes: deliberate exaggeration?",
      "options": [
        "Irony",
        "Satire",
        "Symbolism",
        "Hyperbole"
      ],
      "answer": 3,
      "explanation": "That description matches Hyperbole.",
      "id": 76
    },
    {
      "topic": "Literary Devices",
      "difficulty": "medium",
      "question": "Which term describes: contrast between expectation and reality?",
      "options": [
        "Satire",
        "Symbolism",
        "Irony",
        "Allusion"
      ],
      "answer": 2,
      "explanation": "That description matches Irony.",
      "id": 77
    },
    {
      "topic": "Literary Devices",
      "difficulty": "medium",
      "question": "Which term describes: writing that criticizes with humor?",
      "options": [
        "Symbolism",
        "Satire",
        "Allusion",
        "Oxymoron"
      ],
      "answer": 1,
      "explanation": "That description matches Satire.",
      "id": 78
    },
    {
      "topic": "Literary Devices",
      "difficulty": "medium",
      "question": "Which term describes: use of symbols to represent ideas?",
      "options": [
        "Symbolism",
        "Allusion",
        "Oxymoron",
        "Onomatopoeia"
      ],
      "answer": 0,
      "explanation": "That description matches Symbolism.",
      "id": 79
    },
    {
      "topic": "Literary Devices",
      "difficulty": "medium",
      "question": "Which term describes: reference to a known person or event?",
      "options": [
        "Oxymoron",
        "Onomatopoeia",
        "Proverb",
        "Allusion"
      ],
      "answer": 3,
      "explanation": "That description matches Allusion.",
      "id": 80
    },
    {
      "topic": "Literary Devices",
      "difficulty": "medium",
      "question": "Which term describes: combination of contradictory terms?",
      "options": [
        "Onomatopoeia",
        "Proverb",
        "Oxymoron",
        "Theme"
      ],
      "answer": 2,
      "explanation": "That description matches Oxymoron.",
      "id": 81
    },
    {
      "topic": "Literary Devices",
      "difficulty": "easy",
      "question": "Which term describes: use of words that imitate sounds?",
      "options": [
        "Proverb",
        "Onomatopoeia",
        "Theme",
        "Setting"
      ],
      "answer": 1,
      "explanation": "That description matches Onomatopoeia.",
      "id": 82
    },
    {
      "topic": "Literary Devices",
      "difficulty": "easy",
      "question": "Which term describes: short wise saying?",
      "options": [
        "Proverb",
        "Theme",
        "Setting",
        "Plot"
      ],
      "answer": 0,
      "explanation": "That description matches Proverb.",
      "id": 83
    },
    {
      "topic": "Elements",
      "difficulty": "easy",
      "question": "Which term describes: central idea of a work?",
      "options": [
        "Setting",
        "Plot",
        "Protagonist",
        "Theme"
      ],
      "answer": 3,
      "explanation": "That description matches Theme.",
      "id": 84
    },
    {
      "topic": "Elements",
      "difficulty": "easy",
      "question": "Which term describes: time and place of a story?",
      "options": [
        "Plot",
        "Protagonist",
        "Setting",
        "Antagonist"
      ],
      "answer": 2,
      "explanation": "That description matches Setting.",
      "id": 85
    },
    {
      "topic": "Elements",
      "difficulty": "easy",
      "question": "Which term describes: sequence of events in a story?",
      "options": [
        "Protagonist",
        "Plot",
        "Antagonist",
        "Narrator"
      ],
      "answer": 1,
      "explanation": "That description matches Plot.",
      "id": 86
    },
    {
      "topic": "Elements",
      "difficulty": "easy",
      "question": "Which term describes: main character?",
      "options": [
        "Protagonist",
        "Antagonist",
        "Narrator",
        "Climax"
      ],
      "answer": 0,
      "explanation": "That description matches Protagonist.",
      "id": 87
    },
    {
      "topic": "Elements",
      "difficulty": "easy",
      "question": "Which term describes: character opposing the protagonist?",
      "options": [
        "Narrator",
        "Climax",
        "Conflict",
        "Antagonist"
      ],
      "answer": 3,
      "explanation": "That description matches Antagonist.",
      "id": 88
    },
    {
      "topic": "Elements",
      "difficulty": "easy",
      "question": "Which term describes: person who tells the story?",
      "options": [
        "Climax",
        "Conflict",
        "Narrator",
        "Foreshadowing"
      ],
      "answer": 2,
      "explanation": "That description matches Narrator.",
      "id": 89
    },
    {
      "topic": "Elements",
      "difficulty": "medium",
      "question": "Which term describes: highest point of tension?",
      "options": [
        "Conflict",
        "Climax",
        "Foreshadowing",
        "Flashback"
      ],
      "answer": 1,
      "explanation": "That description matches Climax.",
      "id": 90
    },
    {
      "topic": "Elements",
      "difficulty": "easy",
      "question": "Which term describes: struggle between opposing forces?",
      "options": [
        "Conflict",
        "Foreshadowing",
        "Flashback",
        "Mood"
      ],
      "answer": 0,
      "explanation": "That description matches Conflict.",
      "id": 91
    },
    {
      "topic": "Elements",
      "difficulty": "medium",
      "question": "Which term describes: hint of future events?",
      "options": [
        "Flashback",
        "Mood",
        "Tone",
        "Foreshadowing"
      ],
      "answer": 3,
      "explanation": "That description matches Foreshadowing.",
      "id": 92
    },
    {
      "topic": "Elements",
      "difficulty": "medium",
      "question": "Which term describes: scene set in the past?",
      "options": [
        "Mood",
        "Tone",
        "Flashback",
        "Genre"
      ],
      "answer": 2,
      "explanation": "That description matches Flashback.",
      "id": 93
    },
    {
      "topic": "Elements",
      "difficulty": "medium",
      "question": "Which term describes: emotional atmosphere?",
      "options": [
        "Tone",
        "Mood",
        "Genre",
        "Epic"
      ],
      "answer": 1,
      "explanation": "That description matches Mood.",
      "id": 94
    },
    {
      "topic": "Elements",
      "difficulty": "medium",
      "question": "Which term describes: writer's attitude?",
      "options": [
        "Tone",
        "Genre",
        "Epic",
        "Sonnet"
      ],
      "answer": 0,
      "explanation": "That description matches Tone.",
      "id": 95
    },
    {
      "topic": "Genres",
      "difficulty": "easy",
      "question": "Which term describes: category of literature?",
      "options": [
        "Epic",
        "Sonnet",
        "Ode",
        "Genre"
      ],
      "answer": 3,
      "explanation": "That description matches Genre.",
      "id": 96
    },
    {
      "topic": "Genres",
      "difficulty": "medium",
      "question": "Which term describes: long narrative poem?",
      "options": [
        "Sonnet",
        "Ode",
        "Epic",
        "Elegy"
      ],
      "answer": 2,
      "explanation": "That description matches Epic.",
      "id": 97
    },
    {
      "topic": "Genres",
      "difficulty": "easy",
      "question": "Which term describes: poem of 14 lines?",
      "options": [
        "Ode",
        "Sonnet",
        "Elegy",
        "Ballad"
      ],
      "answer": 1,
      "explanation": "That description matches Sonnet.",
      "id": 98
    },
    {
      "topic": "Genres",
      "difficulty": "medium",
      "question": "Which term describes: lyrical poem of praise?",
      "options": [
        "Ode",
        "Elegy",
        "Ballad",
        "Tragedy"
      ],
      "answer": 0,
      "explanation": "That description matches Ode.",
      "id": 99
    },
    {
      "topic": "Genres",
      "difficulty": "medium",
      "question": "Which term describes: poem of mourning?",
      "options": [
        "Ballad",
        "Tragedy",
        "Comedy",
        "Elegy"
      ],
      "answer": 3,
      "explanation": "That description matches Elegy.",
      "id": 100
    },
    {
      "topic": "Genres",
      "difficulty": "easy",
      "question": "Which term describes: short narrative poem?",
      "options": [
        "Tragedy",
        "Comedy",
        "Ballad",
        "Drama"
      ],
      "answer": 2,
      "explanation": "That description matches Ballad.",
      "id": 101
    },
    {
      "topic": "Drama",
      "difficulty": "easy",
      "question": "Which term describes: play with serious theme and sad ending?",
      "options": [
        "Comedy",
        "Tragedy",
        "Drama",
        "Soliloquy"
      ],
      "answer": 1,
      "explanation": "That description matches Tragedy.",
      "id": 102
    },
    {
      "topic": "Drama",
      "difficulty": "easy",
      "question": "Which term describes: play that amuses?",
      "options": [
        "Comedy",
        "Drama",
        "Soliloquy",
        "Aside"
      ],
      "answer": 0,
      "explanation": "That description matches Comedy.",
      "id": 103
    },
    {
      "topic": "Drama",
      "difficulty": "easy",
      "question": "Which term describes: literature meant to be performed?",
      "options": [
        "Soliloquy",
        "Aside",
        "Monologue",
        "Drama"
      ],
      "answer": 3,
      "explanation": "That description matches Drama.",
      "id": 104
    },
    {
      "topic": "Drama",
      "difficulty": "medium",
      "question": "Which term describes: speech by a character alone?",
      "options": [
        "Aside",
        "Monologue",
        "Soliloquy",
        "Dialogue"
      ],
      "answer": 2,
      "explanation": "That description matches Soliloquy.",
      "id": 105
    },
    {
      "topic": "Drama",
      "difficulty": "medium",
      "question": "Which term describes: short remark to the audience?",
      "options": [
        "Monologue",
        "Aside",
        "Dialogue",
        "Imagery"
      ],
      "answer": 1,
      "explanation": "That description matches Aside.",
      "id": 106
    },
    {
      "topic": "Drama",
      "difficulty": "easy",
      "question": "Which term describes: long speech by one character?",
      "options": [
        "Monologue",
        "Dialogue",
        "Imagery",
        "Rhyme"
      ],
      "answer": 0,
      "explanation": "That description matches Monologue.",
      "id": 107
    },
    {
      "topic": "Drama",
      "difficulty": "easy",
      "question": "Which term describes: conversation between characters?",
      "options": [
        "Imagery",
        "Rhyme",
        "Stanza",
        "Dialogue"
      ],
      "answer": 3,
      "explanation": "That description matches Dialogue.",
      "id": 108
    },
    {
      "topic": "Poetry",
      "difficulty": "medium",
      "question": "Which term describes: language that appeals to the senses?",
      "options": [
        "Rhyme",
        "Stanza",
        "Imagery",
        "Meter"
      ],
      "answer": 2,
      "explanation": "That description matches Imagery.",
      "id": 109
    },
    {
      "topic": "Poetry",
      "difficulty": "easy",
      "question": "Which term describes: repetition of similar sounds?",
      "options": [
        "Stanza",
        "Rhyme",
        "Meter",
        "Diction"
      ],
      "answer": 1,
      "explanation": "That description matches Rhyme.",
      "id": 110
    },
    {
      "topic": "Poetry",
      "difficulty": "easy",
      "question": "Which term describes: group of lines in a poem?",
      "options": [
        "Stanza",
        "Meter",
        "Diction",
        "Style"
      ],
      "answer": 0,
      "explanation": "That description matches Stanza.",
      "id": 111
    },
    {
      "topic": "Poetry",
      "difficulty": "hard",
      "question": "Which term describes: pattern of stressed and unstressed syllables?",
      "options": [
        "Diction",
        "Style",
        "Motif",
        "Meter"
      ],
      "answer": 3,
      "explanation": "That description matches Meter.",
      "id": 112
    },
    {
      "topic": "Style",
      "difficulty": "medium",
      "question": "Which term describes: choice of words?",
      "options": [
        "Style",
        "Motif",
        "Diction",
        "Allegory"
      ],
      "answer": 2,
      "explanation": "That description matches Diction.",
      "id": 113
    },
    {
      "topic": "Style",
      "difficulty": "medium",
      "question": "Which term describes: distinctive way of writing?",
      "options": [
        "Motif",
        "Style",
        "Allegory",
        "Paradox"
      ],
      "answer": 1,
      "explanation": "That description matches Style.",
      "id": 114
    },
    {
      "topic": "Style",
      "difficulty": "hard",
      "question": "Which term describes: recurring element in a work?",
      "options": [
        "Motif",
        "Allegory",
        "Paradox",
        "Metonymy"
      ],
      "answer": 0,
      "explanation": "That description matches Motif.",
      "id": 115
    },
    {
      "topic": "Style",
      "difficulty": "hard",
      "question": "Which term describes: story with a hidden meaning?",
      "options": [
        "Paradox",
        "Metonymy",
        "Point of view",
        "Allegory"
      ],
      "answer": 3,
      "explanation": "That description matches Allegory.",
      "id": 116
    },
    {
      "topic": "Style",
      "difficulty": "hard",
      "question": "Which term describes: statement that seems contradictory but is true?",
      "options": [
        "Metonymy",
        "Point of view",
        "Paradox",
        "Prose"
      ],
      "answer": 2,
      "explanation": "That description matches Paradox.",
      "id": 117
    },
    {
      "topic": "Style",
      "difficulty": "hard",
      "question": "Which term describes: substitution with a related term?",
      "options": [
        "Point of view",
        "Metonymy",
        "Prose",
        "Fable"
      ],
      "answer": 1,
      "explanation": "That description matches Metonymy.",
      "id": 118
    },
    {
      "topic": "Elements",
      "difficulty": "medium",
      "question": "Which term describes: perspective from which story is told?",
      "options": [
        "Point of view",
        "Prose",
        "Fable",
        "Myth"
      ],
      "answer": 0,
      "explanation": "That description matches Point of view.",
      "id": 119
    },
    {
      "topic": "Genres",
      "difficulty": "easy",
      "question": "Which term describes: ordinary written language without meter?",
      "options": [
        "Fable",
        "Myth",
        "Folktale",
        "Prose"
      ],
      "answer": 3,
      "explanation": "That description matches Prose.",
      "id": 120
    },
    {
      "topic": "Genres",
      "difficulty": "easy",
      "question": "Which term describes: short story with a moral lesson?",
      "options": [
        "Myth",
        "Folktale",
        "Fable",
        "Lyric"
      ],
      "answer": 2,
      "explanation": "That description matches Fable.",
      "id": 121
    },
    {
      "topic": "Genres",
      "difficulty": "medium",
      "question": "Which term describes: traditional story explaining origins?",
      "options": [
        "Folktale",
        "Myth",
        "Lyric",
        "Free verse"
      ],
      "answer": 1,
      "explanation": "That description matches Myth.",
      "id": 122
    },
    {
      "topic": "Genres",
      "difficulty": "easy",
      "question": "Which term describes: traditional story passed orally?",
      "options": [
        "Folktale",
        "Lyric",
        "Free verse",
        "Blank verse"
      ],
      "answer": 0,
      "explanation": "That description matches Folktale.",
      "id": 123
    },
    {
      "topic": "Genres",
      "difficulty": "medium",
      "question": "Which term describes: short poem expressing feelings?",
      "options": [
        "Free verse",
        "Blank verse",
        "Rhyme scheme",
        "Lyric"
      ],
      "answer": 3,
      "explanation": "That description matches Lyric.",
      "id": 124
    },
    {
      "topic": "Poetry",
      "difficulty": "medium",
      "question": "Which term describes: poetry without regular meter or rhyme?",
      "options": [
        "Blank verse",
        "Rhyme scheme",
        "Free verse",
        "Enjambment"
      ],
      "answer": 2,
      "explanation": "That description matches Free verse.",
      "id": 125
    },
    {
      "topic": "Poetry",
      "difficulty": "hard",
      "question": "Which term describes: unrhymed iambic pentameter?",
      "options": [
        "Rhyme scheme",
        "Blank verse",
        "Enjambment",
        "Dramatic irony"
      ],
      "answer": 1,
      "explanation": "That description matches Blank verse.",
      "id": 126
    },
    {
      "topic": "Poetry",
      "difficulty": "medium",
      "question": "Which term describes: pattern of rhymes in a poem?",
      "options": [
        "Rhyme scheme",
        "Enjambment",
        "Dramatic irony",
        "Tragic flaw"
      ],
      "answer": 0,
      "explanation": "That description matches Rhyme scheme.",
      "id": 127
    },
    {
      "topic": "Poetry",
      "difficulty": "hard",
      "question": "Which term describes: continuation of a sentence without a pause?",
      "options": [
        "Dramatic irony",
        "Tragic flaw",
        "Catharsis",
        "Enjambment"
      ],
      "answer": 3,
      "explanation": "That description matches Enjambment.",
      "id": 128
    },
    {
      "topic": "Literary Devices",
      "difficulty": "hard",
      "question": "Which term describes: audience knows more than a character?",
      "options": [
        "Tragic flaw",
        "Catharsis",
        "Dramatic irony",
        "Characterization"
      ],
      "answer": 2,
      "explanation": "That description matches Dramatic irony.",
      "id": 129
    },
    {
      "topic": "Drama",
      "difficulty": "hard",
      "question": "Which term describes: character weakness causing downfall?",
      "options": [
        "Catharsis",
        "Tragic flaw",
        "Characterization",
        "Subplot"
      ],
      "answer": 1,
      "explanation": "That description matches Tragic flaw.",
      "id": 130
    },
    {
      "topic": "Drama",
      "difficulty": "hard",
      "question": "Which term describes: emotional release in tragedy?",
      "options": [
        "Catharsis",
        "Characterization",
        "Subplot",
        "Denouement"
      ],
      "answer": 0,
      "explanation": "That description matches Catharsis.",
      "id": 131
    },
    {
      "topic": "Elements",
      "difficulty": "medium",
      "question": "Which term describes: method of developing characters?",
      "options": [
        "Subplot",
        "Denouement",
        "In medias res",
        "Characterization"
      ],
      "answer": 3,
      "explanation": "That description matches Characterization.",
      "id": 132
    },
    {
      "topic": "Elements",
      "difficulty": "medium",
      "question": "Which term describes: secondary plot within a story?",
      "options": [
        "Denouement",
        "In medias res",
        "Subplot",
        "Foil"
      ],
      "answer": 2,
      "explanation": "That description matches Subplot.",
      "id": 133
    },
    {
      "topic": "Elements",
      "difficulty": "medium",
      "question": "Which term describes: resolution after the climax?",
      "options": [
        "In medias res",
        "Denouement",
        "Foil",
        "Narrative voice"
      ],
      "answer": 1,
      "explanation": "That description matches Denouement.",
      "id": 134
    },
    {
      "topic": "Style",
      "difficulty": "hard",
      "question": "Which term describes: story begins in the middle of events?",
      "options": [
        "In medias res",
        "Foil",
        "Narrative voice",
        "First-person narration"
      ],
      "answer": 0,
      "explanation": "That description matches In medias res.",
      "id": 135
    },
    {
      "topic": "Elements",
      "difficulty": "medium",
      "question": "Which term describes: character who contrasts with another?",
      "options": [
        "Narrative voice",
        "First-person narration",
        "Third-person omniscient",
        "Foil"
      ],
      "answer": 3,
      "explanation": "That description matches Foil.",
      "id": 136
    },
    {
      "topic": "Style",
      "difficulty": "medium",
      "question": "Which term describes: distinct voice of the narrator?",
      "options": [
        "First-person narration",
        "Third-person omniscient",
        "Narrative voice",
        "Stream of consciousness"
      ],
      "answer": 2,
      "explanation": "That description matches Narrative voice.",
      "id": 137
    },
    {
      "topic": "Elements",
      "difficulty": "medium",
      "question": "Which term describes: narrator uses I or we?",
      "options": [
        "Third-person omniscient",
        "First-person narration",
        "Stream of consciousness",
        "Alliteration"
      ],
      "answer": 1,
      "explanation": "That description matches First-person narration.",
      "id": 138
    },
    {
      "topic": "Elements",
      "difficulty": "hard",
      "question": "Which term describes: narrator knows all characters' thoughts?",
      "options": [
        "Third-person omniscient",
        "Stream of consciousness",
        "Alliteration",
        "Assonance"
      ],
      "answer": 0,
      "explanation": "That description matches Third-person omniscient.",
      "id": 139
    },
    {
      "topic": "Style",
      "difficulty": "hard",
      "question": "Which term describes: narrative of continuous thoughts?",
      "options": [
        "Alliteration",
        "Assonance",
        "Metaphor",
        "Stream of consciousness"
      ],
      "answer": 3,
      "explanation": "That description matches Stream of consciousness.",
      "id": 140
    },
    {
      "topic": "Literary Devices",
      "difficulty": "easy",
      "question": "Identify the device: \"The thunder grumbled angrily.\"",
      "options": [
        "simile",
        "metaphor",
        "personification",
        "hyperbole"
      ],
      "answer": 2,
      "explanation": "Giving human traits to thunder is personification.",
      "id": 141
    },
    {
      "topic": "Literary Devices",
      "difficulty": "easy",
      "question": "Identify the device: \"Her smile was a sunrise.\"",
      "options": [
        "simile",
        "metaphor",
        "alliteration",
        "irony"
      ],
      "answer": 1,
      "explanation": "Direct comparison without like/as is metaphor.",
      "id": 142
    },
    {
      "topic": "Literary Devices",
      "difficulty": "medium",
      "question": "Identify the device: \"The silence was loud.\"",
      "options": [
        "oxymoron",
        "paradox",
        "symbolism",
        "allusion"
      ],
      "answer": 0,
      "explanation": "Contradictory terms make an oxymoron.",
      "id": 143
    },
    {
      "topic": "Literary Devices",
      "difficulty": "easy",
      "question": "Identify the device: \"I waited a thousand years.\"",
      "options": [
        "irony",
        "metonymy",
        "simile",
        "hyperbole"
      ],
      "answer": 3,
      "explanation": "Deliberate exaggeration is hyperbole.",
      "id": 144
    },
    {
      "topic": "Literary Devices",
      "difficulty": "easy",
      "question": "Identify the device: \"He is as brave as a lion.\"",
      "options": [
        "metaphor",
        "alliteration",
        "simile",
        "irony"
      ],
      "answer": 2,
      "explanation": "Comparison using 'as' is simile.",
      "id": 145
    },
    {
      "topic": "Literary Devices",
      "difficulty": "medium",
      "question": "Identify the device: \"The flag stood for freedom.\"",
      "options": [
        "alliteration",
        "symbolism",
        "satire",
        "personification"
      ],
      "answer": 1,
      "explanation": "A symbol represents an idea.",
      "id": 146
    },
    {
      "topic": "Elements",
      "difficulty": "medium",
      "question": "A writer hints that a character will soon leave home. This is ___.",
      "options": [
        "foreshadowing",
        "flashback",
        "climax",
        "resolution"
      ],
      "answer": 0,
      "explanation": "Foreshadowing hints at future events.",
      "id": 147
    },
    {
      "topic": "Style",
      "difficulty": "hard",
      "question": "A story that opens in the middle of action uses ___.",
      "options": [
        "denouement",
        "subplot",
        "flashback",
        "in medias res"
      ],
      "answer": 3,
      "explanation": "In medias res starts mid-action.",
      "id": 148
    },
    {
      "topic": "Elements",
      "difficulty": "medium",
      "question": "A narrator who uses \"I\" and knows only their own thoughts is ___.",
      "options": [
        "third-person omniscient",
        "stream of consciousness",
        "first-person narration",
        "dramatic irony"
      ],
      "answer": 2,
      "explanation": "First-person uses 'I' perspective.",
      "id": 149
    },
    {
      "topic": "Drama",
      "difficulty": "hard",
      "question": "A hero's mistake that leads to downfall is called a ___.",
      "options": [
        "climax",
        "tragic flaw",
        "genre",
        "mood"
      ],
      "answer": 1,
      "explanation": "Tragic flaw causes the downfall.",
      "id": 150
    }
  ],
  "geography": [
    {
      "topic": "Map Reading",
      "difficulty": "easy",
      "question": "The term 'Latitude' refers to ___.",
      "options": [
        "angular distance north or south of the equator",
        "angular distance east or west of the prime meridian",
        "ratio between map distance and ground distance",
        "line joining points of equal height"
      ],
      "answer": 0,
      "explanation": "Latitude means angular distance north or south of the equator.",
      "id": 1
    },
    {
      "topic": "Map Reading",
      "difficulty": "easy",
      "question": "The term 'Longitude' refers to ___.",
      "options": [
        "ratio between map distance and ground distance",
        "angular distance east or west of the prime meridian",
        "line joining points of equal height",
        "variation in height of land"
      ],
      "answer": 1,
      "explanation": "Longitude means angular distance east or west of the prime meridian.",
      "id": 2
    },
    {
      "topic": "Map Reading",
      "difficulty": "easy",
      "question": "The term 'Scale' refers to ___.",
      "options": [
        "line joining points of equal height",
        "variation in height of land",
        "ratio between map distance and ground distance",
        "daily state of the atmosphere"
      ],
      "answer": 2,
      "explanation": "Scale means ratio between map distance and ground distance.",
      "id": 3
    },
    {
      "topic": "Map Reading",
      "difficulty": "medium",
      "question": "The term 'Contour' refers to ___.",
      "options": [
        "variation in height of land",
        "daily state of the atmosphere",
        "average weather over long period",
        "line joining points of equal height"
      ],
      "answer": 3,
      "explanation": "Contour means line joining points of equal height.",
      "id": 4
    },
    {
      "topic": "Map Reading",
      "difficulty": "easy",
      "question": "The term 'Relief' refers to ___.",
      "options": [
        "variation in height of land",
        "daily state of the atmosphere",
        "average weather over long period",
        "amount of water vapor in air"
      ],
      "answer": 0,
      "explanation": "Relief means variation in height of land.",
      "id": 5
    },
    {
      "topic": "Climate",
      "difficulty": "easy",
      "question": "The term 'Weather' refers to ___.",
      "options": [
        "average weather over long period",
        "daily state of the atmosphere",
        "amount of water vapor in air",
        "force exerted by air per unit area"
      ],
      "answer": 1,
      "explanation": "Weather means daily state of the atmosphere.",
      "id": 6
    },
    {
      "topic": "Climate",
      "difficulty": "easy",
      "question": "The term 'Climate' refers to ___.",
      "options": [
        "amount of water vapor in air",
        "force exerted by air per unit area",
        "average weather over long period",
        "movement of air from high to low pressure"
      ],
      "answer": 2,
      "explanation": "Climate means average weather over long period.",
      "id": 7
    },
    {
      "topic": "Climate",
      "difficulty": "easy",
      "question": "The term 'Humidity' refers to ___.",
      "options": [
        "force exerted by air per unit area",
        "movement of air from high to low pressure",
        "rain caused by rising warm air",
        "amount of water vapor in air"
      ],
      "answer": 3,
      "explanation": "Humidity means amount of water vapor in air.",
      "id": 8
    },
    {
      "topic": "Climate",
      "difficulty": "medium",
      "question": "The term 'Pressure' refers to ___.",
      "options": [
        "force exerted by air per unit area",
        "movement of air from high to low pressure",
        "rain caused by rising warm air",
        "rain caused by air rising over mountains"
      ],
      "answer": 0,
      "explanation": "Pressure means force exerted by air per unit area.",
      "id": 9
    },
    {
      "topic": "Climate",
      "difficulty": "easy",
      "question": "The term 'Wind' refers to ___.",
      "options": [
        "rain caused by rising warm air",
        "movement of air from high to low pressure",
        "rain caused by air rising over mountains",
        "rocks formed from cooled magma"
      ],
      "answer": 1,
      "explanation": "Wind means movement of air from high to low pressure.",
      "id": 10
    },
    {
      "topic": "Climate",
      "difficulty": "medium",
      "question": "The term 'Convectional rainfall' refers to ___.",
      "options": [
        "rain caused by air rising over mountains",
        "rocks formed from cooled magma",
        "rain caused by rising warm air",
        "rocks formed from deposited sediments"
      ],
      "answer": 2,
      "explanation": "Convectional rainfall means rain caused by rising warm air.",
      "id": 11
    },
    {
      "topic": "Climate",
      "difficulty": "medium",
      "question": "The term 'Orographic rainfall' refers to ___.",
      "options": [
        "rocks formed from cooled magma",
        "rocks formed from deposited sediments",
        "rocks changed by heat and pressure",
        "rain caused by air rising over mountains"
      ],
      "answer": 3,
      "explanation": "Orographic rainfall means rain caused by air rising over mountains.",
      "id": 12
    },
    {
      "topic": "Rocks",
      "difficulty": "easy",
      "question": "The term 'Igneous rocks' refers to ___.",
      "options": [
        "rocks formed from cooled magma",
        "rocks formed from deposited sediments",
        "rocks changed by heat and pressure",
        "wearing away of the earth's surface"
      ],
      "answer": 0,
      "explanation": "Igneous rocks means rocks formed from cooled magma.",
      "id": 13
    },
    {
      "topic": "Rocks",
      "difficulty": "easy",
      "question": "The term 'Sedimentary rocks' refers to ___.",
      "options": [
        "rocks changed by heat and pressure",
        "rocks formed from deposited sediments",
        "wearing away of the earth's surface",
        "laying down of eroded materials"
      ],
      "answer": 1,
      "explanation": "Sedimentary rocks means rocks formed from deposited sediments.",
      "id": 14
    },
    {
      "topic": "Rocks",
      "difficulty": "easy",
      "question": "The term 'Metamorphic rocks' refers to ___.",
      "options": [
        "wearing away of the earth's surface",
        "laying down of eroded materials",
        "rocks changed by heat and pressure",
        "landform at river mouth from deposition"
      ],
      "answer": 2,
      "explanation": "Metamorphic rocks means rocks changed by heat and pressure.",
      "id": 15
    },
    {
      "topic": "Landforms",
      "difficulty": "easy",
      "question": "The term 'Erosion' refers to ___.",
      "options": [
        "laying down of eroded materials",
        "landform at river mouth from deposition",
        "area drained by a river and its tributaries",
        "wearing away of the earth's surface"
      ],
      "answer": 3,
      "explanation": "Erosion means wearing away of the earth's surface.",
      "id": 16
    },
    {
      "topic": "Landforms",
      "difficulty": "easy",
      "question": "The term 'Deposition' refers to ___.",
      "options": [
        "laying down of eroded materials",
        "landform at river mouth from deposition",
        "area drained by a river and its tributaries",
        "pattern of river channels"
      ],
      "answer": 0,
      "explanation": "Deposition means laying down of eroded materials.",
      "id": 17
    },
    {
      "topic": "Landforms",
      "difficulty": "medium",
      "question": "The term 'Delta' refers to ___.",
      "options": [
        "area drained by a river and its tributaries",
        "landform at river mouth from deposition",
        "pattern of river channels",
        "number of people per unit area"
      ],
      "answer": 1,
      "explanation": "Delta means landform at river mouth from deposition.",
      "id": 18
    },
    {
      "topic": "Hydrology",
      "difficulty": "medium",
      "question": "The term 'River basin' refers to ___.",
      "options": [
        "pattern of river channels",
        "number of people per unit area",
        "area drained by a river and its tributaries",
        "movement of people from one place to another"
      ],
      "answer": 2,
      "explanation": "River basin means area drained by a river and its tributaries.",
      "id": 19
    },
    {
      "topic": "Hydrology",
      "difficulty": "medium",
      "question": "The term 'Drainage' refers to ___.",
      "options": [
        "number of people per unit area",
        "movement of people from one place to another",
        "increase in urban population",
        "pattern of river channels"
      ],
      "answer": 3,
      "explanation": "Drainage means pattern of river channels.",
      "id": 20
    },
    {
      "topic": "Population",
      "difficulty": "easy",
      "question": "The term 'Population density' refers to ___.",
      "options": [
        "number of people per unit area",
        "movement of people from one place to another",
        "increase in urban population",
        "place where people live"
      ],
      "answer": 0,
      "explanation": "Population density means number of people per unit area.",
      "id": 21
    },
    {
      "topic": "Population",
      "difficulty": "easy",
      "question": "The term 'Migration' refers to ___.",
      "options": [
        "increase in urban population",
        "movement of people from one place to another",
        "place where people live",
        "ways land is utilized"
      ],
      "answer": 1,
      "explanation": "Migration means movement of people from one place to another.",
      "id": 22
    },
    {
      "topic": "Population",
      "difficulty": "medium",
      "question": "The term 'Urbanization' refers to ___.",
      "options": [
        "place where people live",
        "ways land is utilized",
        "increase in urban population",
        "spread of desert conditions"
      ],
      "answer": 2,
      "explanation": "Urbanization means increase in urban population.",
      "id": 23
    },
    {
      "topic": "Population",
      "difficulty": "easy",
      "question": "The term 'Settlement' refers to ___.",
      "options": [
        "ways land is utilized",
        "spread of desert conditions",
        "removal of forest cover",
        "place where people live"
      ],
      "answer": 3,
      "explanation": "Settlement means place where people live.",
      "id": 24
    },
    {
      "topic": "Population",
      "difficulty": "easy",
      "question": "The term 'Land use' refers to ___.",
      "options": [
        "ways land is utilized",
        "spread of desert conditions",
        "removal of forest cover",
        "interaction of living and non-living components"
      ],
      "answer": 0,
      "explanation": "Land use means ways land is utilized.",
      "id": 25
    },
    {
      "topic": "Environment",
      "difficulty": "medium",
      "question": "The term 'Desertification' refers to ___.",
      "options": [
        "removal of forest cover",
        "spread of desert conditions",
        "interaction of living and non-living components",
        "plant life of a region"
      ],
      "answer": 1,
      "explanation": "Desertification means spread of desert conditions.",
      "id": 26
    },
    {
      "topic": "Environment",
      "difficulty": "easy",
      "question": "The term 'Deforestation' refers to ___.",
      "options": [
        "interaction of living and non-living components",
        "plant life of a region",
        "removal of forest cover",
        "tropical grassland with scattered trees"
      ],
      "answer": 2,
      "explanation": "Deforestation means removal of forest cover.",
      "id": 27
    },
    {
      "topic": "Environment",
      "difficulty": "medium",
      "question": "The term 'Ecosystem' refers to ___.",
      "options": [
        "plant life of a region",
        "tropical grassland with scattered trees",
        "dense tropical forest with high rainfall",
        "interaction of living and non-living components"
      ],
      "answer": 3,
      "explanation": "Ecosystem means interaction of living and non-living components.",
      "id": 28
    },
    {
      "topic": "Environment",
      "difficulty": "easy",
      "question": "The term 'Vegetation' refers to ___.",
      "options": [
        "plant life of a region",
        "tropical grassland with scattered trees",
        "dense tropical forest with high rainfall",
        "cultivation of crops and rearing of animals"
      ],
      "answer": 0,
      "explanation": "Vegetation means plant life of a region.",
      "id": 29
    },
    {
      "topic": "Vegetation",
      "difficulty": "medium",
      "question": "The term 'Savanna' refers to ___.",
      "options": [
        "dense tropical forest with high rainfall",
        "tropical grassland with scattered trees",
        "cultivation of crops and rearing of animals",
        "extraction of minerals from the earth"
      ],
      "answer": 1,
      "explanation": "Savanna means tropical grassland with scattered trees.",
      "id": 30
    },
    {
      "topic": "Vegetation",
      "difficulty": "easy",
      "question": "The term 'Rainforest' refers to ___.",
      "options": [
        "cultivation of crops and rearing of animals",
        "extraction of minerals from the earth",
        "dense tropical forest with high rainfall",
        "manufacturing or processing of goods"
      ],
      "answer": 2,
      "explanation": "Rainforest means dense tropical forest with high rainfall.",
      "id": 31
    },
    {
      "topic": "Economic Activities",
      "difficulty": "easy",
      "question": "The term 'Agriculture' refers to ___.",
      "options": [
        "extraction of minerals from the earth",
        "manufacturing or processing of goods",
        "movement of goods and people",
        "cultivation of crops and rearing of animals"
      ],
      "answer": 3,
      "explanation": "Agriculture means cultivation of crops and rearing of animals.",
      "id": 32
    },
    {
      "topic": "Economic Activities",
      "difficulty": "easy",
      "question": "The term 'Mining' refers to ___.",
      "options": [
        "extraction of minerals from the earth",
        "manufacturing or processing of goods",
        "movement of goods and people",
        "continuous movement of water on Earth"
      ],
      "answer": 0,
      "explanation": "Mining means extraction of minerals from the earth.",
      "id": 33
    },
    {
      "topic": "Economic Activities",
      "difficulty": "easy",
      "question": "The term 'Industry' refers to ___.",
      "options": [
        "movement of goods and people",
        "manufacturing or processing of goods",
        "continuous movement of water on Earth",
        "elevated flat land"
      ],
      "answer": 1,
      "explanation": "Industry means manufacturing or processing of goods.",
      "id": 34
    },
    {
      "topic": "Economic Activities",
      "difficulty": "easy",
      "question": "The term 'Transport' refers to ___.",
      "options": [
        "continuous movement of water on Earth",
        "elevated flat land",
        "movement of goods and people",
        "high elevated land with steep slopes"
      ],
      "answer": 2,
      "explanation": "Transport means movement of goods and people.",
      "id": 35
    },
    {
      "topic": "Hydrology",
      "difficulty": "medium",
      "question": "The term 'Hydrological cycle' refers to ___.",
      "options": [
        "elevated flat land",
        "high elevated land with steep slopes",
        "low area between hills",
        "continuous movement of water on Earth"
      ],
      "answer": 3,
      "explanation": "Hydrological cycle means continuous movement of water on Earth.",
      "id": 36
    },
    {
      "topic": "Landforms",
      "difficulty": "easy",
      "question": "The term 'Plateau' refers to ___.",
      "options": [
        "elevated flat land",
        "high elevated land with steep slopes",
        "low area between hills",
        "fracture in the Earth's crust"
      ],
      "answer": 0,
      "explanation": "Plateau means elevated flat land.",
      "id": 37
    },
    {
      "topic": "Landforms",
      "difficulty": "easy",
      "question": "The term 'Mountain' refers to ___.",
      "options": [
        "low area between hills",
        "high elevated land with steep slopes",
        "fracture in the Earth's crust",
        "sudden movement of the Earth's crust"
      ],
      "answer": 1,
      "explanation": "Mountain means high elevated land with steep slopes.",
      "id": 38
    },
    {
      "topic": "Landforms",
      "difficulty": "easy",
      "question": "The term 'Valley' refers to ___.",
      "options": [
        "fracture in the Earth's crust",
        "sudden movement of the Earth's crust",
        "low area between hills",
        "opening through which magma erupts"
      ],
      "answer": 2,
      "explanation": "Valley means low area between hills.",
      "id": 39
    },
    {
      "topic": "Landforms",
      "difficulty": "hard",
      "question": "The term 'Fault' refers to ___.",
      "options": [
        "sudden movement of the Earth's crust",
        "opening through which magma erupts",
        "contamination of the environment",
        "fracture in the Earth's crust"
      ],
      "answer": 3,
      "explanation": "Fault means fracture in the Earth's crust.",
      "id": 40
    },
    {
      "topic": "Landforms",
      "difficulty": "medium",
      "question": "The term 'Earthquake' refers to ___.",
      "options": [
        "sudden movement of the Earth's crust",
        "opening through which magma erupts",
        "contamination of the environment",
        "excess nutrients in water causing algal bloom"
      ],
      "answer": 0,
      "explanation": "Earthquake means sudden movement of the Earth's crust.",
      "id": 41
    },
    {
      "topic": "Landforms",
      "difficulty": "medium",
      "question": "The term 'Volcano' refers to ___.",
      "options": [
        "contamination of the environment",
        "opening through which magma erupts",
        "excess nutrients in water causing algal bloom",
        "warming due to trapped heat"
      ],
      "answer": 1,
      "explanation": "Volcano means opening through which magma erupts.",
      "id": 42
    },
    {
      "topic": "Environment",
      "difficulty": "easy",
      "question": "The term 'Pollution' refers to ___.",
      "options": [
        "excess nutrients in water causing algal bloom",
        "warming due to trapped heat",
        "contamination of the environment",
        "rise in average global temperatures"
      ],
      "answer": 2,
      "explanation": "Pollution means contamination of the environment.",
      "id": 43
    },
    {
      "topic": "Environment",
      "difficulty": "hard",
      "question": "The term 'Eutrophication' refers to ___.",
      "options": [
        "warming due to trapped heat",
        "rise in average global temperatures",
        "region with same standard time",
        "excess nutrients in water causing algal bloom"
      ],
      "answer": 3,
      "explanation": "Eutrophication means excess nutrients in water causing algal bloom.",
      "id": 44
    },
    {
      "topic": "Environment",
      "difficulty": "medium",
      "question": "The term 'Greenhouse effect' refers to ___.",
      "options": [
        "warming due to trapped heat",
        "rise in average global temperatures",
        "region with same standard time",
        "line of longitude"
      ],
      "answer": 0,
      "explanation": "Greenhouse effect means warming due to trapped heat.",
      "id": 45
    },
    {
      "topic": "Environment",
      "difficulty": "medium",
      "question": "The term 'Global warming' refers to ___.",
      "options": [
        "region with same standard time",
        "rise in average global temperatures",
        "line of longitude",
        "parallels"
      ],
      "answer": 1,
      "explanation": "Global warming means rise in average global temperatures.",
      "id": 46
    },
    {
      "topic": "Map Reading",
      "difficulty": "medium",
      "question": "The term 'Time zone' refers to ___.",
      "options": [
        "line of longitude",
        "parallels",
        "region with same standard time",
        "method to locate a point on a map"
      ],
      "answer": 2,
      "explanation": "Time zone means region with same standard time.",
      "id": 47
    },
    {
      "topic": "Map Reading",
      "difficulty": "easy",
      "question": "The term 'Meridian' refers to ___.",
      "options": [
        "parallels",
        "method to locate a point on a map",
        "breakdown of rocks at the Earth's surface",
        "line of longitude"
      ],
      "answer": 3,
      "explanation": "Meridian means line of longitude.",
      "id": 48
    },
    {
      "topic": "Map Reading",
      "difficulty": "easy",
      "question": "The term 'Latitude lines' refers to ___.",
      "options": [
        "parallels",
        "method to locate a point on a map",
        "breakdown of rocks at the Earth's surface",
        "breakdown of rocks without chemical change"
      ],
      "answer": 0,
      "explanation": "Latitude lines means parallels.",
      "id": 49
    },
    {
      "topic": "Map Reading",
      "difficulty": "medium",
      "question": "The term 'Grid reference' refers to ___.",
      "options": [
        "breakdown of rocks at the Earth's surface",
        "method to locate a point on a map",
        "breakdown of rocks without chemical change",
        "decomposition of rocks by chemical action"
      ],
      "answer": 1,
      "explanation": "Grid reference means method to locate a point on a map.",
      "id": 50
    },
    {
      "topic": "Landforms",
      "difficulty": "easy",
      "question": "The term 'Weathering' refers to ___.",
      "options": [
        "breakdown of rocks without chemical change",
        "decomposition of rocks by chemical action",
        "breakdown of rocks at the Earth's surface",
        "downslope movement of soil and rock"
      ],
      "answer": 2,
      "explanation": "Weathering means breakdown of rocks at the Earth's surface.",
      "id": 51
    },
    {
      "topic": "Landforms",
      "difficulty": "medium",
      "question": "The term 'Physical weathering' refers to ___.",
      "options": [
        "decomposition of rocks by chemical action",
        "downslope movement of soil and rock",
        "bend in a river's course",
        "breakdown of rocks without chemical change"
      ],
      "answer": 3,
      "explanation": "Physical weathering means breakdown of rocks without chemical change.",
      "id": 52
    },
    {
      "topic": "Landforms",
      "difficulty": "medium",
      "question": "The term 'Chemical weathering' refers to ___.",
      "options": [
        "decomposition of rocks by chemical action",
        "downslope movement of soil and rock",
        "bend in a river's course",
        "cut-off meander forming a lake"
      ],
      "answer": 0,
      "explanation": "Chemical weathering means decomposition of rocks by chemical action.",
      "id": 53
    },
    {
      "topic": "Landforms",
      "difficulty": "hard",
      "question": "The term 'Mass wasting' refers to ___.",
      "options": [
        "bend in a river's course",
        "downslope movement of soil and rock",
        "cut-off meander forming a lake",
        "highland dividing drainage basins"
      ],
      "answer": 1,
      "explanation": "Mass wasting means downslope movement of soil and rock.",
      "id": 54
    },
    {
      "topic": "Hydrology",
      "difficulty": "easy",
      "question": "The term 'Meander' refers to ___.",
      "options": [
        "cut-off meander forming a lake",
        "highland dividing drainage basins",
        "bend in a river's course",
        "upper level of groundwater"
      ],
      "answer": 2,
      "explanation": "Meander means bend in a river's course.",
      "id": 55
    },
    {
      "topic": "Hydrology",
      "difficulty": "medium",
      "question": "The term 'Ox-bow lake' refers to ___.",
      "options": [
        "highland dividing drainage basins",
        "upper level of groundwater",
        "line joining points of equal pressure",
        "cut-off meander forming a lake"
      ],
      "answer": 3,
      "explanation": "Ox-bow lake means cut-off meander forming a lake.",
      "id": 56
    },
    {
      "topic": "Hydrology",
      "difficulty": "medium",
      "question": "The term 'Watershed' refers to ___.",
      "options": [
        "highland dividing drainage basins",
        "upper level of groundwater",
        "line joining points of equal pressure",
        "line joining points of equal temperature"
      ],
      "answer": 0,
      "explanation": "Watershed means highland dividing drainage basins.",
      "id": 57
    },
    {
      "topic": "Hydrology",
      "difficulty": "medium",
      "question": "The term 'Water table' refers to ___.",
      "options": [
        "line joining points of equal pressure",
        "upper level of groundwater",
        "line joining points of equal temperature",
        "line joining points of equal rainfall"
      ],
      "answer": 1,
      "explanation": "Water table means upper level of groundwater.",
      "id": 58
    },
    {
      "topic": "Climate",
      "difficulty": "easy",
      "question": "The term 'Isobar' refers to ___.",
      "options": [
        "line joining points of equal temperature",
        "line joining points of equal rainfall",
        "line joining points of equal pressure",
        "dry dusty trade wind in West Africa"
      ],
      "answer": 2,
      "explanation": "Isobar means line joining points of equal pressure.",
      "id": 59
    },
    {
      "topic": "Climate",
      "difficulty": "easy",
      "question": "The term 'Isotherm' refers to ___.",
      "options": [
        "line joining points of equal rainfall",
        "dry dusty trade wind in West Africa",
        "seasonal wind bringing heavy rain",
        "line joining points of equal temperature"
      ],
      "answer": 3,
      "explanation": "Isotherm means line joining points of equal temperature.",
      "id": 60
    },
    {
      "topic": "Climate",
      "difficulty": "medium",
      "question": "The term 'Isohyet' refers to ___.",
      "options": [
        "line joining points of equal rainfall",
        "dry dusty trade wind in West Africa",
        "seasonal wind bringing heavy rain",
        "intense low-pressure storm"
      ],
      "answer": 0,
      "explanation": "Isohyet means line joining points of equal rainfall.",
      "id": 61
    },
    {
      "topic": "Climate",
      "difficulty": "medium",
      "question": "The term 'Harmattan' refers to ___.",
      "options": [
        "seasonal wind bringing heavy rain",
        "dry dusty trade wind in West Africa",
        "intense low-pressure storm",
        "spread of city into rural areas"
      ],
      "answer": 1,
      "explanation": "Harmattan means dry dusty trade wind in West Africa.",
      "id": 62
    },
    {
      "topic": "Climate",
      "difficulty": "medium",
      "question": "The term 'Monsoon' refers to ___.",
      "options": [
        "intense low-pressure storm",
        "spread of city into rural areas",
        "seasonal wind bringing heavy rain",
        "movement from rural to urban areas"
      ],
      "answer": 2,
      "explanation": "Monsoon means seasonal wind bringing heavy rain.",
      "id": 63
    },
    {
      "topic": "Climate",
      "difficulty": "hard",
      "question": "The term 'Tropical cyclone' refers to ___.",
      "options": [
        "spread of city into rural areas",
        "movement from rural to urban areas",
        "population exceeding available resources",
        "intense low-pressure storm"
      ],
      "answer": 3,
      "explanation": "Tropical cyclone means intense low-pressure storm.",
      "id": 64
    },
    {
      "topic": "Population",
      "difficulty": "medium",
      "question": "The term 'Urban sprawl' refers to ___.",
      "options": [
        "spread of city into rural areas",
        "movement from rural to urban areas",
        "population exceeding available resources",
        "resource that can be replenished"
      ],
      "answer": 0,
      "explanation": "Urban sprawl means spread of city into rural areas.",
      "id": 65
    },
    {
      "topic": "Population",
      "difficulty": "easy",
      "question": "The term 'Rural-urban migration' refers to ___.",
      "options": [
        "population exceeding available resources",
        "movement from rural to urban areas",
        "resource that can be replenished",
        "resource that cannot be quickly replaced"
      ],
      "answer": 1,
      "explanation": "Rural-urban migration means movement from rural to urban areas.",
      "id": 66
    },
    {
      "topic": "Population",
      "difficulty": "medium",
      "question": "The term 'Overpopulation' refers to ___.",
      "options": [
        "resource that can be replenished",
        "resource that cannot be quickly replaced",
        "population exceeding available resources",
        "severe erosion forming channels"
      ],
      "answer": 2,
      "explanation": "Overpopulation means population exceeding available resources.",
      "id": 67
    },
    {
      "topic": "Environment",
      "difficulty": "easy",
      "question": "The term 'Renewable resource' refers to ___.",
      "options": [
        "resource that cannot be quickly replaced",
        "severe erosion forming channels",
        "angular distance north or south of the equator",
        "resource that can be replenished"
      ],
      "answer": 3,
      "explanation": "Renewable resource means resource that can be replenished.",
      "id": 68
    },
    {
      "topic": "Environment",
      "difficulty": "easy",
      "question": "The term 'Non-renewable resource' refers to ___.",
      "options": [
        "resource that cannot be quickly replaced",
        "severe erosion forming channels",
        "angular distance north or south of the equator",
        "angular distance east or west of the prime meridian"
      ],
      "answer": 0,
      "explanation": "Non-renewable resource means resource that cannot be quickly replaced.",
      "id": 69
    },
    {
      "topic": "Environment",
      "difficulty": "hard",
      "question": "The term 'Gully erosion' refers to ___.",
      "options": [
        "angular distance north or south of the equator",
        "severe erosion forming channels",
        "angular distance east or west of the prime meridian",
        "ratio between map distance and ground distance"
      ],
      "answer": 1,
      "explanation": "Gully erosion means severe erosion forming channels.",
      "id": 70
    },
    {
      "topic": "Map Reading",
      "difficulty": "easy",
      "question": "Which term describes: angular distance north or south of the equator?",
      "options": [
        "Longitude",
        "Scale",
        "Latitude",
        "Contour"
      ],
      "answer": 2,
      "explanation": "That description matches Latitude.",
      "id": 71
    },
    {
      "topic": "Map Reading",
      "difficulty": "easy",
      "question": "Which term describes: angular distance east or west of the prime meridian?",
      "options": [
        "Scale",
        "Contour",
        "Relief",
        "Longitude"
      ],
      "answer": 3,
      "explanation": "That description matches Longitude.",
      "id": 72
    },
    {
      "topic": "Map Reading",
      "difficulty": "easy",
      "question": "Which term describes: ratio between map distance and ground distance?",
      "options": [
        "Scale",
        "Contour",
        "Relief",
        "Weather"
      ],
      "answer": 0,
      "explanation": "That description matches Scale.",
      "id": 73
    },
    {
      "topic": "Map Reading",
      "difficulty": "medium",
      "question": "Which term describes: line joining points of equal height?",
      "options": [
        "Relief",
        "Contour",
        "Weather",
        "Climate"
      ],
      "answer": 1,
      "explanation": "That description matches Contour.",
      "id": 74
    },
    {
      "topic": "Map Reading",
      "difficulty": "easy",
      "question": "Which term describes: variation in height of land?",
      "options": [
        "Weather",
        "Climate",
        "Relief",
        "Humidity"
      ],
      "answer": 2,
      "explanation": "That description matches Relief.",
      "id": 75
    },
    {
      "topic": "Climate",
      "difficulty": "easy",
      "question": "Which term describes: daily state of the atmosphere?",
      "options": [
        "Climate",
        "Humidity",
        "Pressure",
        "Weather"
      ],
      "answer": 3,
      "explanation": "That description matches Weather.",
      "id": 76
    },
    {
      "topic": "Climate",
      "difficulty": "easy",
      "question": "Which term describes: average weather over long period?",
      "options": [
        "Climate",
        "Humidity",
        "Pressure",
        "Wind"
      ],
      "answer": 0,
      "explanation": "That description matches Climate.",
      "id": 77
    },
    {
      "topic": "Climate",
      "difficulty": "easy",
      "question": "Which term describes: amount of water vapor in air?",
      "options": [
        "Pressure",
        "Humidity",
        "Wind",
        "Convectional rainfall"
      ],
      "answer": 1,
      "explanation": "That description matches Humidity.",
      "id": 78
    },
    {
      "topic": "Climate",
      "difficulty": "medium",
      "question": "Which term describes: force exerted by air per unit area?",
      "options": [
        "Wind",
        "Convectional rainfall",
        "Pressure",
        "Orographic rainfall"
      ],
      "answer": 2,
      "explanation": "That description matches Pressure.",
      "id": 79
    },
    {
      "topic": "Climate",
      "difficulty": "easy",
      "question": "Which term describes: movement of air from high to low pressure?",
      "options": [
        "Convectional rainfall",
        "Orographic rainfall",
        "Igneous rocks",
        "Wind"
      ],
      "answer": 3,
      "explanation": "That description matches Wind.",
      "id": 80
    },
    {
      "topic": "Climate",
      "difficulty": "medium",
      "question": "Which term describes: rain caused by rising warm air?",
      "options": [
        "Convectional rainfall",
        "Orographic rainfall",
        "Igneous rocks",
        "Sedimentary rocks"
      ],
      "answer": 0,
      "explanation": "That description matches Convectional rainfall.",
      "id": 81
    },
    {
      "topic": "Climate",
      "difficulty": "medium",
      "question": "Which term describes: rain caused by air rising over mountains?",
      "options": [
        "Igneous rocks",
        "Orographic rainfall",
        "Sedimentary rocks",
        "Metamorphic rocks"
      ],
      "answer": 1,
      "explanation": "That description matches Orographic rainfall.",
      "id": 82
    },
    {
      "topic": "Rocks",
      "difficulty": "easy",
      "question": "Which term describes: rocks formed from cooled magma?",
      "options": [
        "Sedimentary rocks",
        "Metamorphic rocks",
        "Igneous rocks",
        "Erosion"
      ],
      "answer": 2,
      "explanation": "That description matches Igneous rocks.",
      "id": 83
    },
    {
      "topic": "Rocks",
      "difficulty": "easy",
      "question": "Which term describes: rocks formed from deposited sediments?",
      "options": [
        "Metamorphic rocks",
        "Erosion",
        "Deposition",
        "Sedimentary rocks"
      ],
      "answer": 3,
      "explanation": "That description matches Sedimentary rocks.",
      "id": 84
    },
    {
      "topic": "Rocks",
      "difficulty": "easy",
      "question": "Which term describes: rocks changed by heat and pressure?",
      "options": [
        "Metamorphic rocks",
        "Erosion",
        "Deposition",
        "Delta"
      ],
      "answer": 0,
      "explanation": "That description matches Metamorphic rocks.",
      "id": 85
    },
    {
      "topic": "Landforms",
      "difficulty": "easy",
      "question": "Which term describes: wearing away of the earth's surface?",
      "options": [
        "Deposition",
        "Erosion",
        "Delta",
        "River basin"
      ],
      "answer": 1,
      "explanation": "That description matches Erosion.",
      "id": 86
    },
    {
      "topic": "Landforms",
      "difficulty": "easy",
      "question": "Which term describes: laying down of eroded materials?",
      "options": [
        "Delta",
        "River basin",
        "Deposition",
        "Drainage"
      ],
      "answer": 2,
      "explanation": "That description matches Deposition.",
      "id": 87
    },
    {
      "topic": "Landforms",
      "difficulty": "medium",
      "question": "Which term describes: landform at river mouth from deposition?",
      "options": [
        "River basin",
        "Drainage",
        "Population density",
        "Delta"
      ],
      "answer": 3,
      "explanation": "That description matches Delta.",
      "id": 88
    },
    {
      "topic": "Hydrology",
      "difficulty": "medium",
      "question": "Which term describes: area drained by a river and its tributaries?",
      "options": [
        "River basin",
        "Drainage",
        "Population density",
        "Migration"
      ],
      "answer": 0,
      "explanation": "That description matches River basin.",
      "id": 89
    },
    {
      "topic": "Hydrology",
      "difficulty": "medium",
      "question": "Which term describes: pattern of river channels?",
      "options": [
        "Population density",
        "Drainage",
        "Migration",
        "Urbanization"
      ],
      "answer": 1,
      "explanation": "That description matches Drainage.",
      "id": 90
    },
    {
      "topic": "Population",
      "difficulty": "easy",
      "question": "Which term describes: number of people per unit area?",
      "options": [
        "Migration",
        "Urbanization",
        "Population density",
        "Settlement"
      ],
      "answer": 2,
      "explanation": "That description matches Population density.",
      "id": 91
    },
    {
      "topic": "Population",
      "difficulty": "easy",
      "question": "Which term describes: movement of people from one place to another?",
      "options": [
        "Urbanization",
        "Settlement",
        "Land use",
        "Migration"
      ],
      "answer": 3,
      "explanation": "That description matches Migration.",
      "id": 92
    },
    {
      "topic": "Population",
      "difficulty": "medium",
      "question": "Which term describes: increase in urban population?",
      "options": [
        "Urbanization",
        "Settlement",
        "Land use",
        "Desertification"
      ],
      "answer": 0,
      "explanation": "That description matches Urbanization.",
      "id": 93
    },
    {
      "topic": "Population",
      "difficulty": "easy",
      "question": "Which term describes: place where people live?",
      "options": [
        "Land use",
        "Settlement",
        "Desertification",
        "Deforestation"
      ],
      "answer": 1,
      "explanation": "That description matches Settlement.",
      "id": 94
    },
    {
      "topic": "Population",
      "difficulty": "easy",
      "question": "Which term describes: ways land is utilized?",
      "options": [
        "Desertification",
        "Deforestation",
        "Land use",
        "Ecosystem"
      ],
      "answer": 2,
      "explanation": "That description matches Land use.",
      "id": 95
    },
    {
      "topic": "Environment",
      "difficulty": "medium",
      "question": "Which term describes: spread of desert conditions?",
      "options": [
        "Deforestation",
        "Ecosystem",
        "Vegetation",
        "Desertification"
      ],
      "answer": 3,
      "explanation": "That description matches Desertification.",
      "id": 96
    },
    {
      "topic": "Environment",
      "difficulty": "easy",
      "question": "Which term describes: removal of forest cover?",
      "options": [
        "Deforestation",
        "Ecosystem",
        "Vegetation",
        "Savanna"
      ],
      "answer": 0,
      "explanation": "That description matches Deforestation.",
      "id": 97
    },
    {
      "topic": "Environment",
      "difficulty": "medium",
      "question": "Which term describes: interaction of living and non-living components?",
      "options": [
        "Vegetation",
        "Ecosystem",
        "Savanna",
        "Rainforest"
      ],
      "answer": 1,
      "explanation": "That description matches Ecosystem.",
      "id": 98
    },
    {
      "topic": "Environment",
      "difficulty": "easy",
      "question": "Which term describes: plant life of a region?",
      "options": [
        "Savanna",
        "Rainforest",
        "Vegetation",
        "Agriculture"
      ],
      "answer": 2,
      "explanation": "That description matches Vegetation.",
      "id": 99
    },
    {
      "topic": "Vegetation",
      "difficulty": "medium",
      "question": "Which term describes: tropical grassland with scattered trees?",
      "options": [
        "Rainforest",
        "Agriculture",
        "Mining",
        "Savanna"
      ],
      "answer": 3,
      "explanation": "That description matches Savanna.",
      "id": 100
    },
    {
      "topic": "Vegetation",
      "difficulty": "easy",
      "question": "Which term describes: dense tropical forest with high rainfall?",
      "options": [
        "Rainforest",
        "Agriculture",
        "Mining",
        "Industry"
      ],
      "answer": 0,
      "explanation": "That description matches Rainforest.",
      "id": 101
    },
    {
      "topic": "Economic Activities",
      "difficulty": "easy",
      "question": "Which term describes: cultivation of crops and rearing of animals?",
      "options": [
        "Mining",
        "Agriculture",
        "Industry",
        "Transport"
      ],
      "answer": 1,
      "explanation": "That description matches Agriculture.",
      "id": 102
    },
    {
      "topic": "Economic Activities",
      "difficulty": "easy",
      "question": "Which term describes: extraction of minerals from the earth?",
      "options": [
        "Industry",
        "Transport",
        "Mining",
        "Hydrological cycle"
      ],
      "answer": 2,
      "explanation": "That description matches Mining.",
      "id": 103
    },
    {
      "topic": "Economic Activities",
      "difficulty": "easy",
      "question": "Which term describes: manufacturing or processing of goods?",
      "options": [
        "Transport",
        "Hydrological cycle",
        "Plateau",
        "Industry"
      ],
      "answer": 3,
      "explanation": "That description matches Industry.",
      "id": 104
    },
    {
      "topic": "Economic Activities",
      "difficulty": "easy",
      "question": "Which term describes: movement of goods and people?",
      "options": [
        "Transport",
        "Hydrological cycle",
        "Plateau",
        "Mountain"
      ],
      "answer": 0,
      "explanation": "That description matches Transport.",
      "id": 105
    },
    {
      "topic": "Hydrology",
      "difficulty": "medium",
      "question": "Which term describes: continuous movement of water on Earth?",
      "options": [
        "Plateau",
        "Hydrological cycle",
        "Mountain",
        "Valley"
      ],
      "answer": 1,
      "explanation": "That description matches Hydrological cycle.",
      "id": 106
    },
    {
      "topic": "Landforms",
      "difficulty": "easy",
      "question": "Which term describes: elevated flat land?",
      "options": [
        "Mountain",
        "Valley",
        "Plateau",
        "Fault"
      ],
      "answer": 2,
      "explanation": "That description matches Plateau.",
      "id": 107
    },
    {
      "topic": "Landforms",
      "difficulty": "easy",
      "question": "Which term describes: high elevated land with steep slopes?",
      "options": [
        "Valley",
        "Fault",
        "Earthquake",
        "Mountain"
      ],
      "answer": 3,
      "explanation": "That description matches Mountain.",
      "id": 108
    },
    {
      "topic": "Landforms",
      "difficulty": "easy",
      "question": "Which term describes: low area between hills?",
      "options": [
        "Valley",
        "Fault",
        "Earthquake",
        "Volcano"
      ],
      "answer": 0,
      "explanation": "That description matches Valley.",
      "id": 109
    },
    {
      "topic": "Landforms",
      "difficulty": "hard",
      "question": "Which term describes: fracture in the Earth's crust?",
      "options": [
        "Earthquake",
        "Fault",
        "Volcano",
        "Pollution"
      ],
      "answer": 1,
      "explanation": "That description matches Fault.",
      "id": 110
    },
    {
      "topic": "Landforms",
      "difficulty": "medium",
      "question": "Which term describes: sudden movement of the Earth's crust?",
      "options": [
        "Volcano",
        "Pollution",
        "Earthquake",
        "Eutrophication"
      ],
      "answer": 2,
      "explanation": "That description matches Earthquake.",
      "id": 111
    },
    {
      "topic": "Landforms",
      "difficulty": "medium",
      "question": "Which term describes: opening through which magma erupts?",
      "options": [
        "Pollution",
        "Eutrophication",
        "Greenhouse effect",
        "Volcano"
      ],
      "answer": 3,
      "explanation": "That description matches Volcano.",
      "id": 112
    },
    {
      "topic": "Environment",
      "difficulty": "easy",
      "question": "Which term describes: contamination of the environment?",
      "options": [
        "Pollution",
        "Eutrophication",
        "Greenhouse effect",
        "Global warming"
      ],
      "answer": 0,
      "explanation": "That description matches Pollution.",
      "id": 113
    },
    {
      "topic": "Environment",
      "difficulty": "hard",
      "question": "Which term describes: excess nutrients in water causing algal bloom?",
      "options": [
        "Greenhouse effect",
        "Eutrophication",
        "Global warming",
        "Time zone"
      ],
      "answer": 1,
      "explanation": "That description matches Eutrophication.",
      "id": 114
    },
    {
      "topic": "Environment",
      "difficulty": "medium",
      "question": "Which term describes: warming due to trapped heat?",
      "options": [
        "Global warming",
        "Time zone",
        "Greenhouse effect",
        "Meridian"
      ],
      "answer": 2,
      "explanation": "That description matches Greenhouse effect.",
      "id": 115
    },
    {
      "topic": "Environment",
      "difficulty": "medium",
      "question": "Which term describes: rise in average global temperatures?",
      "options": [
        "Time zone",
        "Meridian",
        "Latitude lines",
        "Global warming"
      ],
      "answer": 3,
      "explanation": "That description matches Global warming.",
      "id": 116
    },
    {
      "topic": "Map Reading",
      "difficulty": "medium",
      "question": "Which term describes: region with same standard time?",
      "options": [
        "Time zone",
        "Meridian",
        "Latitude lines",
        "Grid reference"
      ],
      "answer": 0,
      "explanation": "That description matches Time zone.",
      "id": 117
    },
    {
      "topic": "Map Reading",
      "difficulty": "easy",
      "question": "Which term describes: line of longitude?",
      "options": [
        "Latitude lines",
        "Meridian",
        "Grid reference",
        "Weathering"
      ],
      "answer": 1,
      "explanation": "That description matches Meridian.",
      "id": 118
    },
    {
      "topic": "Map Reading",
      "difficulty": "easy",
      "question": "Which term describes: parallels?",
      "options": [
        "Grid reference",
        "Weathering",
        "Latitude lines",
        "Physical weathering"
      ],
      "answer": 2,
      "explanation": "That description matches Latitude lines.",
      "id": 119
    },
    {
      "topic": "Map Reading",
      "difficulty": "medium",
      "question": "Which term describes: method to locate a point on a map?",
      "options": [
        "Weathering",
        "Physical weathering",
        "Chemical weathering",
        "Grid reference"
      ],
      "answer": 3,
      "explanation": "That description matches Grid reference.",
      "id": 120
    },
    {
      "topic": "Landforms",
      "difficulty": "easy",
      "question": "Which term describes: breakdown of rocks at the Earth's surface?",
      "options": [
        "Weathering",
        "Physical weathering",
        "Chemical weathering",
        "Mass wasting"
      ],
      "answer": 0,
      "explanation": "That description matches Weathering.",
      "id": 121
    },
    {
      "topic": "Landforms",
      "difficulty": "medium",
      "question": "Which term describes: breakdown of rocks without chemical change?",
      "options": [
        "Chemical weathering",
        "Physical weathering",
        "Mass wasting",
        "Meander"
      ],
      "answer": 1,
      "explanation": "That description matches Physical weathering.",
      "id": 122
    },
    {
      "topic": "Landforms",
      "difficulty": "medium",
      "question": "Which term describes: decomposition of rocks by chemical action?",
      "options": [
        "Mass wasting",
        "Meander",
        "Chemical weathering",
        "Ox-bow lake"
      ],
      "answer": 2,
      "explanation": "That description matches Chemical weathering.",
      "id": 123
    },
    {
      "topic": "Landforms",
      "difficulty": "hard",
      "question": "Which term describes: downslope movement of soil and rock?",
      "options": [
        "Meander",
        "Ox-bow lake",
        "Watershed",
        "Mass wasting"
      ],
      "answer": 3,
      "explanation": "That description matches Mass wasting.",
      "id": 124
    },
    {
      "topic": "Hydrology",
      "difficulty": "easy",
      "question": "Which term describes: bend in a river's course?",
      "options": [
        "Meander",
        "Ox-bow lake",
        "Watershed",
        "Water table"
      ],
      "answer": 0,
      "explanation": "That description matches Meander.",
      "id": 125
    },
    {
      "topic": "Hydrology",
      "difficulty": "medium",
      "question": "Which term describes: cut-off meander forming a lake?",
      "options": [
        "Watershed",
        "Ox-bow lake",
        "Water table",
        "Isobar"
      ],
      "answer": 1,
      "explanation": "That description matches Ox-bow lake.",
      "id": 126
    },
    {
      "topic": "Hydrology",
      "difficulty": "medium",
      "question": "Which term describes: highland dividing drainage basins?",
      "options": [
        "Water table",
        "Isobar",
        "Watershed",
        "Isotherm"
      ],
      "answer": 2,
      "explanation": "That description matches Watershed.",
      "id": 127
    },
    {
      "topic": "Hydrology",
      "difficulty": "medium",
      "question": "Which term describes: upper level of groundwater?",
      "options": [
        "Isobar",
        "Isotherm",
        "Isohyet",
        "Water table"
      ],
      "answer": 3,
      "explanation": "That description matches Water table.",
      "id": 128
    },
    {
      "topic": "Climate",
      "difficulty": "easy",
      "question": "Which term describes: line joining points of equal pressure?",
      "options": [
        "Isobar",
        "Isotherm",
        "Isohyet",
        "Harmattan"
      ],
      "answer": 0,
      "explanation": "That description matches Isobar.",
      "id": 129
    },
    {
      "topic": "Climate",
      "difficulty": "easy",
      "question": "Which term describes: line joining points of equal temperature?",
      "options": [
        "Isohyet",
        "Isotherm",
        "Harmattan",
        "Monsoon"
      ],
      "answer": 1,
      "explanation": "That description matches Isotherm.",
      "id": 130
    },
    {
      "topic": "Climate",
      "difficulty": "medium",
      "question": "Which term describes: line joining points of equal rainfall?",
      "options": [
        "Harmattan",
        "Monsoon",
        "Isohyet",
        "Tropical cyclone"
      ],
      "answer": 2,
      "explanation": "That description matches Isohyet.",
      "id": 131
    },
    {
      "topic": "Climate",
      "difficulty": "medium",
      "question": "Which term describes: dry dusty trade wind in West Africa?",
      "options": [
        "Monsoon",
        "Tropical cyclone",
        "Urban sprawl",
        "Harmattan"
      ],
      "answer": 3,
      "explanation": "That description matches Harmattan.",
      "id": 132
    },
    {
      "topic": "Climate",
      "difficulty": "medium",
      "question": "Which term describes: seasonal wind bringing heavy rain?",
      "options": [
        "Monsoon",
        "Tropical cyclone",
        "Urban sprawl",
        "Rural-urban migration"
      ],
      "answer": 0,
      "explanation": "That description matches Monsoon.",
      "id": 133
    },
    {
      "topic": "Climate",
      "difficulty": "hard",
      "question": "Which term describes: intense low-pressure storm?",
      "options": [
        "Urban sprawl",
        "Tropical cyclone",
        "Rural-urban migration",
        "Overpopulation"
      ],
      "answer": 1,
      "explanation": "That description matches Tropical cyclone.",
      "id": 134
    },
    {
      "topic": "Population",
      "difficulty": "medium",
      "question": "Which term describes: spread of city into rural areas?",
      "options": [
        "Rural-urban migration",
        "Overpopulation",
        "Urban sprawl",
        "Renewable resource"
      ],
      "answer": 2,
      "explanation": "That description matches Urban sprawl.",
      "id": 135
    },
    {
      "topic": "Population",
      "difficulty": "easy",
      "question": "Which term describes: movement from rural to urban areas?",
      "options": [
        "Overpopulation",
        "Renewable resource",
        "Non-renewable resource",
        "Rural-urban migration"
      ],
      "answer": 3,
      "explanation": "That description matches Rural-urban migration.",
      "id": 136
    },
    {
      "topic": "Population",
      "difficulty": "medium",
      "question": "Which term describes: population exceeding available resources?",
      "options": [
        "Overpopulation",
        "Renewable resource",
        "Non-renewable resource",
        "Gully erosion"
      ],
      "answer": 0,
      "explanation": "That description matches Overpopulation.",
      "id": 137
    },
    {
      "topic": "Environment",
      "difficulty": "easy",
      "question": "Which term describes: resource that can be replenished?",
      "options": [
        "Non-renewable resource",
        "Renewable resource",
        "Gully erosion",
        "Latitude"
      ],
      "answer": 1,
      "explanation": "That description matches Renewable resource.",
      "id": 138
    },
    {
      "topic": "Environment",
      "difficulty": "easy",
      "question": "Which term describes: resource that cannot be quickly replaced?",
      "options": [
        "Gully erosion",
        "Latitude",
        "Non-renewable resource",
        "Longitude"
      ],
      "answer": 2,
      "explanation": "That description matches Non-renewable resource.",
      "id": 139
    },
    {
      "topic": "Environment",
      "difficulty": "hard",
      "question": "Which term describes: severe erosion forming channels?",
      "options": [
        "Latitude",
        "Longitude",
        "Scale",
        "Gully erosion"
      ],
      "answer": 3,
      "explanation": "That description matches Gully erosion.",
      "id": 140
    },
    {
      "topic": "Map Reading",
      "difficulty": "medium",
      "question": "A map scale is 1:50,000. If two towns are 4 cm apart on the map, the actual distance is ___.",
      "options": [
        "2 km",
        "4 km",
        "8 km",
        "0.5 km"
      ],
      "answer": 0,
      "explanation": "1 cm represents 0.5 km.",
      "id": 141
    },
    {
      "topic": "Map Reading",
      "difficulty": "medium",
      "question": "A place at 15 degE is when it is 12 noon at 0 deg. Local time at 30 degE is ___.",
      "options": [
        "1:00 pm",
        "2:00 pm",
        "3:00 pm",
        "10:00 am"
      ],
      "answer": 1,
      "explanation": "Every 15 deg is 1 hour; 30 degE is +2 hours.",
      "id": 142
    },
    {
      "topic": "Climate",
      "difficulty": "easy",
      "question": "Rainfall data: Jan 20 mm, Feb 45 mm, Mar 70 mm, Apr 110 mm. The wettest month is ___.",
      "options": [
        "January",
        "February",
        "April",
        "March"
      ],
      "answer": 2,
      "explanation": "April has the highest rainfall.",
      "id": 143
    },
    {
      "topic": "Population",
      "difficulty": "easy",
      "question": "A town has 200,000 people and an area of 500 km^2. Population density is ___.",
      "options": [
        "250 per km^2",
        "500 per km^2",
        "100 per km^2",
        "400 per km^2"
      ],
      "answer": 3,
      "explanation": "Density = population / area.",
      "id": 144
    },
    {
      "topic": "Settlement",
      "difficulty": "medium",
      "question": "Houses built in a long line along a major road show a ___ settlement pattern.",
      "options": [
        "linear",
        "nucleated",
        "dispersed",
        "radial"
      ],
      "answer": 0,
      "explanation": "Linear settlements follow transport routes.",
      "id": 145
    },
    {
      "topic": "Environment",
      "difficulty": "easy",
      "question": "Large-scale tree cutting without replacement often leads to ___.",
      "options": [
        "increased rainfall",
        "soil erosion",
        "urbanization",
        "lower temperature"
      ],
      "answer": 1,
      "explanation": "Deforestation increases erosion.",
      "id": 146
    },
    {
      "topic": "Climate",
      "difficulty": "easy",
      "question": "Wind generally blows from areas of ___ pressure to ___ pressure.",
      "options": [
        "low to high",
        "warm to cold",
        "high to low",
        "east to west"
      ],
      "answer": 2,
      "explanation": "Air moves from high to low pressure.",
      "id": 147
    },
    {
      "topic": "Hydrology",
      "difficulty": "medium",
      "question": "A meander that is cut off from the main river forms a ___.",
      "options": [
        "delta",
        "waterfall",
        "gorge",
        "ox-bow lake"
      ],
      "answer": 3,
      "explanation": "Cut-off meanders form ox-bow lakes.",
      "id": 148
    },
    {
      "topic": "Map Reading",
      "difficulty": "medium",
      "question": "Closely spaced contour lines indicate a ___ slope.",
      "options": [
        "steep",
        "gentle",
        "flat",
        "convex"
      ],
      "answer": 0,
      "explanation": "Close contours mean steep gradient.",
      "id": 149
    },
    {
      "topic": "Climate",
      "difficulty": "medium",
      "question": "A coastal town with small annual temperature range and high humidity has a ___ climate.",
      "options": [
        "continental",
        "maritime",
        "desert",
        "tundra"
      ],
      "answer": 1,
      "explanation": "Maritime climates are moderated by the sea.",
      "id": 150
    }
  ],
  "commerce": [
    {
      "topic": "Trade",
      "difficulty": "easy",
      "question": "The term 'Trade' refers to ___.",
      "options": [
        "direct exchange of goods without money",
        "buying and selling of goods and services",
        "selling goods in small quantities to consumers",
        "buying in bulk and selling in smaller quantities"
      ],
      "answer": 1,
      "explanation": "Trade means buying and selling of goods and services.",
      "id": 1
    },
    {
      "topic": "Trade",
      "difficulty": "easy",
      "question": "The term 'Barter' refers to ___.",
      "options": [
        "selling goods in small quantities to consumers",
        "buying in bulk and selling in smaller quantities",
        "direct exchange of goods without money",
        "importing and re-exporting goods"
      ],
      "answer": 2,
      "explanation": "Barter means direct exchange of goods without money.",
      "id": 2
    },
    {
      "topic": "Trade",
      "difficulty": "easy",
      "question": "The term 'Retailing' refers to ___.",
      "options": [
        "buying in bulk and selling in smaller quantities",
        "importing and re-exporting goods",
        "activities that move goods from producer to consumer",
        "selling goods in small quantities to consumers"
      ],
      "answer": 3,
      "explanation": "Retailing means selling goods in small quantities to consumers.",
      "id": 3
    },
    {
      "topic": "Trade",
      "difficulty": "easy",
      "question": "The term 'Wholesaling' refers to ___.",
      "options": [
        "buying in bulk and selling in smaller quantities",
        "importing and re-exporting goods",
        "activities that move goods from producer to consumer",
        "giving a product a name or symbol"
      ],
      "answer": 0,
      "explanation": "Wholesaling means buying in bulk and selling in smaller quantities.",
      "id": 4
    },
    {
      "topic": "Trade",
      "difficulty": "medium",
      "question": "The term 'Entrepot trade' refers to ___.",
      "options": [
        "activities that move goods from producer to consumer",
        "importing and re-exporting goods",
        "giving a product a name or symbol",
        "paid communication to promote products"
      ],
      "answer": 1,
      "explanation": "Entrepot trade means importing and re-exporting goods.",
      "id": 5
    },
    {
      "topic": "Marketing",
      "difficulty": "easy",
      "question": "The term 'Marketing' refers to ___.",
      "options": [
        "giving a product a name or symbol",
        "paid communication to promote products",
        "activities that move goods from producer to consumer",
        "protection against financial loss"
      ],
      "answer": 2,
      "explanation": "Marketing means activities that move goods from producer to consumer.",
      "id": 6
    },
    {
      "topic": "Marketing",
      "difficulty": "easy",
      "question": "The term 'Branding' refers to ___.",
      "options": [
        "paid communication to promote products",
        "protection against financial loss",
        "payment made for insurance coverage",
        "giving a product a name or symbol"
      ],
      "answer": 3,
      "explanation": "Branding means giving a product a name or symbol.",
      "id": 7
    },
    {
      "topic": "Marketing",
      "difficulty": "easy",
      "question": "The term 'Advertising' refers to ___.",
      "options": [
        "paid communication to promote products",
        "protection against financial loss",
        "payment made for insurance coverage",
        "principle of restoring the insured to original position"
      ],
      "answer": 0,
      "explanation": "Advertising means paid communication to promote products.",
      "id": 8
    },
    {
      "topic": "Insurance",
      "difficulty": "easy",
      "question": "The term 'Insurance' refers to ___.",
      "options": [
        "payment made for insurance coverage",
        "protection against financial loss",
        "principle of restoring the insured to original position",
        "insurer takes over rights after compensation"
      ],
      "answer": 1,
      "explanation": "Insurance means protection against financial loss.",
      "id": 9
    },
    {
      "topic": "Insurance",
      "difficulty": "easy",
      "question": "The term 'Premium' refers to ___.",
      "options": [
        "principle of restoring the insured to original position",
        "insurer takes over rights after compensation",
        "payment made for insurance coverage",
        "movement of goods and people"
      ],
      "answer": 2,
      "explanation": "Premium means payment made for insurance coverage.",
      "id": 10
    },
    {
      "topic": "Insurance",
      "difficulty": "medium",
      "question": "The term 'Indemnity' refers to ___.",
      "options": [
        "insurer takes over rights after compensation",
        "movement of goods and people",
        "storage of goods for future use",
        "principle of restoring the insured to original position"
      ],
      "answer": 3,
      "explanation": "Indemnity means principle of restoring the insured to original position.",
      "id": 11
    },
    {
      "topic": "Insurance",
      "difficulty": "hard",
      "question": "The term 'Subrogation' refers to ___.",
      "options": [
        "insurer takes over rights after compensation",
        "movement of goods and people",
        "storage of goods for future use",
        "goods held for sale"
      ],
      "answer": 0,
      "explanation": "Subrogation means insurer takes over rights after compensation.",
      "id": 12
    },
    {
      "topic": "Aids to Trade",
      "difficulty": "easy",
      "question": "The term 'Transport' refers to ___.",
      "options": [
        "storage of goods for future use",
        "movement of goods and people",
        "goods held for sale",
        "organizing factors of production"
      ],
      "answer": 1,
      "explanation": "Transport means movement of goods and people.",
      "id": 13
    },
    {
      "topic": "Aids to Trade",
      "difficulty": "easy",
      "question": "The term 'Warehousing' refers to ___.",
      "options": [
        "goods held for sale",
        "organizing factors of production",
        "storage of goods for future use",
        "business owned by two or more persons"
      ],
      "answer": 2,
      "explanation": "Warehousing means storage of goods for future use.",
      "id": 14
    },
    {
      "topic": "Aids to Trade",
      "difficulty": "easy",
      "question": "The term 'Stock' refers to ___.",
      "options": [
        "organizing factors of production",
        "business owned by two or more persons",
        "business with separate legal identity",
        "goods held for sale"
      ],
      "answer": 3,
      "explanation": "Stock means goods held for sale.",
      "id": 15
    },
    {
      "topic": "Business",
      "difficulty": "medium",
      "question": "The term 'Entrepreneurship' refers to ___.",
      "options": [
        "organizing factors of production",
        "business owned by two or more persons",
        "business with separate legal identity",
        "business owned by members for mutual benefit"
      ],
      "answer": 0,
      "explanation": "Entrepreneurship means organizing factors of production.",
      "id": 16
    },
    {
      "topic": "Business",
      "difficulty": "easy",
      "question": "The term 'Partnership' refers to ___.",
      "options": [
        "business with separate legal identity",
        "business owned by two or more persons",
        "business owned by members for mutual benefit",
        "right to sell a company's products"
      ],
      "answer": 1,
      "explanation": "Partnership means business owned by two or more persons.",
      "id": 17
    },
    {
      "topic": "Business",
      "difficulty": "medium",
      "question": "The term 'Company' refers to ___.",
      "options": [
        "business owned by members for mutual benefit",
        "right to sell a company's products",
        "business with separate legal identity",
        "buying and selling over the internet"
      ],
      "answer": 2,
      "explanation": "Company means business with separate legal identity.",
      "id": 18
    },
    {
      "topic": "Business",
      "difficulty": "medium",
      "question": "The term 'Cooperative' refers to ___.",
      "options": [
        "right to sell a company's products",
        "buying and selling over the internet",
        "written order to a bank to pay",
        "business owned by members for mutual benefit"
      ],
      "answer": 3,
      "explanation": "Cooperative means business owned by members for mutual benefit.",
      "id": 19
    },
    {
      "topic": "Business",
      "difficulty": "hard",
      "question": "The term 'Franchise' refers to ___.",
      "options": [
        "right to sell a company's products",
        "buying and selling over the internet",
        "written order to a bank to pay",
        "order to pay issued by a bank"
      ],
      "answer": 0,
      "explanation": "Franchise means right to sell a company's products.",
      "id": 20
    },
    {
      "topic": "Business",
      "difficulty": "easy",
      "question": "The term 'E-commerce' refers to ___.",
      "options": [
        "written order to a bank to pay",
        "buying and selling over the internet",
        "order to pay issued by a bank",
        "bank account for saving with interest"
      ],
      "answer": 1,
      "explanation": "E-commerce means buying and selling over the internet.",
      "id": 21
    },
    {
      "topic": "Banking",
      "difficulty": "easy",
      "question": "The term 'Cheque' refers to ___.",
      "options": [
        "order to pay issued by a bank",
        "bank account for saving with interest",
        "written order to a bank to pay",
        "bank account for frequent transactions"
      ],
      "answer": 2,
      "explanation": "Cheque means written order to a bank to pay.",
      "id": 22
    },
    {
      "topic": "Banking",
      "difficulty": "medium",
      "question": "The term 'Draft' refers to ___.",
      "options": [
        "bank account for saving with interest",
        "bank account for frequent transactions",
        "withdrawal beyond account balance",
        "order to pay issued by a bank"
      ],
      "answer": 3,
      "explanation": "Draft means order to pay issued by a bank.",
      "id": 23
    },
    {
      "topic": "Banking",
      "difficulty": "easy",
      "question": "The term 'Savings account' refers to ___.",
      "options": [
        "bank account for saving with interest",
        "bank account for frequent transactions",
        "withdrawal beyond account balance",
        "charge for borrowing money"
      ],
      "answer": 0,
      "explanation": "Savings account means bank account for saving with interest.",
      "id": 24
    },
    {
      "topic": "Banking",
      "difficulty": "easy",
      "question": "The term 'Current account' refers to ___.",
      "options": [
        "withdrawal beyond account balance",
        "bank account for frequent transactions",
        "charge for borrowing money",
        "interest rate charged by central bank"
      ],
      "answer": 1,
      "explanation": "Current account means bank account for frequent transactions.",
      "id": 25
    },
    {
      "topic": "Banking",
      "difficulty": "medium",
      "question": "The term 'Overdraft' refers to ___.",
      "options": [
        "charge for borrowing money",
        "interest rate charged by central bank",
        "withdrawal beyond account balance",
        "market for buying and selling securities"
      ],
      "answer": 2,
      "explanation": "Overdraft means withdrawal beyond account balance.",
      "id": 26
    },
    {
      "topic": "Banking",
      "difficulty": "easy",
      "question": "The term 'Interest' refers to ___.",
      "options": [
        "interest rate charged by central bank",
        "market for buying and selling securities",
        "tax on imports",
        "charge for borrowing money"
      ],
      "answer": 3,
      "explanation": "Interest means charge for borrowing money.",
      "id": 27
    },
    {
      "topic": "Banking",
      "difficulty": "medium",
      "question": "The term 'Bank rate' refers to ___.",
      "options": [
        "interest rate charged by central bank",
        "market for buying and selling securities",
        "tax on imports",
        "limit on quantity of imports"
      ],
      "answer": 0,
      "explanation": "Bank rate means interest rate charged by central bank.",
      "id": 28
    },
    {
      "topic": "Finance",
      "difficulty": "medium",
      "question": "The term 'Stock exchange' refers to ___.",
      "options": [
        "tax on imports",
        "market for buying and selling securities",
        "limit on quantity of imports",
        "document acknowledging shipment of goods"
      ],
      "answer": 1,
      "explanation": "Stock exchange means market for buying and selling securities.",
      "id": 29
    },
    {
      "topic": "International Trade",
      "difficulty": "easy",
      "question": "The term 'Tariff' refers to ___.",
      "options": [
        "limit on quantity of imports",
        "document acknowledging shipment of goods",
        "tax on imports",
        "bill showing goods sold and amount due"
      ],
      "answer": 2,
      "explanation": "Tariff means tax on imports.",
      "id": 30
    },
    {
      "topic": "International Trade",
      "difficulty": "medium",
      "question": "The term 'Quota' refers to ___.",
      "options": [
        "document acknowledging shipment of goods",
        "bill showing goods sold and amount due",
        "proof of payment",
        "limit on quantity of imports"
      ],
      "answer": 3,
      "explanation": "Quota means limit on quantity of imports.",
      "id": 31
    },
    {
      "topic": "International Trade",
      "difficulty": "hard",
      "question": "The term 'Bill of lading' refers to ___.",
      "options": [
        "document acknowledging shipment of goods",
        "bill showing goods sold and amount due",
        "proof of payment",
        "document showing goods deposited in warehouse"
      ],
      "answer": 0,
      "explanation": "Bill of lading means document acknowledging shipment of goods.",
      "id": 32
    },
    {
      "topic": "Trade",
      "difficulty": "easy",
      "question": "The term 'Invoice' refers to ___.",
      "options": [
        "proof of payment",
        "bill showing goods sold and amount due",
        "document showing goods deposited in warehouse",
        "goods sent to an agent for sale"
      ],
      "answer": 1,
      "explanation": "Invoice means bill showing goods sold and amount due.",
      "id": 33
    },
    {
      "topic": "Trade",
      "difficulty": "easy",
      "question": "The term 'Receipt' refers to ___.",
      "options": [
        "document showing goods deposited in warehouse",
        "goods sent to an agent for sale",
        "proof of payment",
        "person who acts on behalf of another"
      ],
      "answer": 2,
      "explanation": "Receipt means proof of payment.",
      "id": 34
    },
    {
      "topic": "Aids to Trade",
      "difficulty": "hard",
      "question": "The term 'Warehouse warrant' refers to ___.",
      "options": [
        "goods sent to an agent for sale",
        "person who acts on behalf of another",
        "measures to safeguard buyers",
        "document showing goods deposited in warehouse"
      ],
      "answer": 3,
      "explanation": "Warehouse warrant means document showing goods deposited in warehouse.",
      "id": 35
    },
    {
      "topic": "Trade",
      "difficulty": "medium",
      "question": "The term 'Consignment' refers to ___.",
      "options": [
        "goods sent to an agent for sale",
        "person who acts on behalf of another",
        "measures to safeguard buyers",
        "support provided after purchase"
      ],
      "answer": 0,
      "explanation": "Consignment means goods sent to an agent for sale.",
      "id": 36
    },
    {
      "topic": "Trade",
      "difficulty": "easy",
      "question": "The term 'Agent' refers to ___.",
      "options": [
        "measures to safeguard buyers",
        "person who acts on behalf of another",
        "support provided after purchase",
        "wrapping goods for protection and appeal"
      ],
      "answer": 1,
      "explanation": "Agent means person who acts on behalf of another.",
      "id": 37
    },
    {
      "topic": "Consumer",
      "difficulty": "easy",
      "question": "The term 'Consumer protection' refers to ___.",
      "options": [
        "support provided after purchase",
        "wrapping goods for protection and appeal",
        "measures to safeguard buyers",
        "information written on product packaging"
      ],
      "answer": 2,
      "explanation": "Consumer protection means measures to safeguard buyers.",
      "id": 38
    },
    {
      "topic": "Marketing",
      "difficulty": "medium",
      "question": "The term 'After-sales service' refers to ___.",
      "options": [
        "wrapping goods for protection and appeal",
        "information written on product packaging",
        "intermediaries between producers and consumers",
        "support provided after purchase"
      ],
      "answer": 3,
      "explanation": "After-sales service means support provided after purchase.",
      "id": 39
    },
    {
      "topic": "Marketing",
      "difficulty": "easy",
      "question": "The term 'Packaging' refers to ___.",
      "options": [
        "wrapping goods for protection and appeal",
        "information written on product packaging",
        "intermediaries between producers and consumers",
        "goods brought into a country"
      ],
      "answer": 0,
      "explanation": "Packaging means wrapping goods for protection and appeal.",
      "id": 40
    },
    {
      "topic": "Marketing",
      "difficulty": "easy",
      "question": "The term 'Labeling' refers to ___.",
      "options": [
        "intermediaries between producers and consumers",
        "information written on product packaging",
        "goods brought into a country",
        "goods sold to another country"
      ],
      "answer": 1,
      "explanation": "Labeling means information written on product packaging.",
      "id": 41
    },
    {
      "topic": "Trade",
      "difficulty": "medium",
      "question": "The term 'Middlemen' refers to ___.",
      "options": [
        "goods brought into a country",
        "goods sold to another country",
        "intermediaries between producers and consumers",
        "person who handles customs procedures"
      ],
      "answer": 2,
      "explanation": "Middlemen means intermediaries between producers and consumers.",
      "id": 42
    },
    {
      "topic": "International Trade",
      "difficulty": "easy",
      "question": "The term 'Import' refers to ___.",
      "options": [
        "goods sold to another country",
        "person who handles customs procedures",
        "charging different prices for the same product",
        "goods brought into a country"
      ],
      "answer": 3,
      "explanation": "Import means goods brought into a country.",
      "id": 43
    },
    {
      "topic": "International Trade",
      "difficulty": "easy",
      "question": "The term 'Export' refers to ___.",
      "options": [
        "goods sold to another country",
        "person who handles customs procedures",
        "charging different prices for the same product",
        "tangible items produced for sale"
      ],
      "answer": 0,
      "explanation": "Export means goods sold to another country.",
      "id": 44
    },
    {
      "topic": "International Trade",
      "difficulty": "hard",
      "question": "The term 'Clearing agent' refers to ___.",
      "options": [
        "charging different prices for the same product",
        "person who handles customs procedures",
        "tangible items produced for sale",
        "intangible activities performed for consumers"
      ],
      "answer": 1,
      "explanation": "Clearing agent means person who handles customs procedures.",
      "id": 45
    },
    {
      "topic": "Marketing",
      "difficulty": "hard",
      "question": "The term 'Price discrimination' refers to ___.",
      "options": [
        "tangible items produced for sale",
        "intangible activities performed for consumers",
        "charging different prices for the same product",
        "buying and selling to profit from price differences"
      ],
      "answer": 2,
      "explanation": "Price discrimination means charging different prices for the same product.",
      "id": 46
    },
    {
      "topic": "Trade",
      "difficulty": "easy",
      "question": "The term 'Goods' refers to ___.",
      "options": [
        "intangible activities performed for consumers",
        "buying and selling to profit from price differences",
        "reduction on list price offered to traders",
        "tangible items produced for sale"
      ],
      "answer": 3,
      "explanation": "Goods means tangible items produced for sale.",
      "id": 47
    },
    {
      "topic": "Trade",
      "difficulty": "easy",
      "question": "The term 'Services' refers to ___.",
      "options": [
        "intangible activities performed for consumers",
        "buying and selling to profit from price differences",
        "reduction on list price offered to traders",
        "reduction for prompt payment"
      ],
      "answer": 0,
      "explanation": "Services means intangible activities performed for consumers.",
      "id": 48
    },
    {
      "topic": "Finance",
      "difficulty": "hard",
      "question": "The term 'Arbitrage' refers to ___.",
      "options": [
        "reduction on list price offered to traders",
        "buying and selling to profit from price differences",
        "reduction for prompt payment",
        "permission to pay later for goods"
      ],
      "answer": 1,
      "explanation": "Arbitrage means buying and selling to profit from price differences.",
      "id": 49
    },
    {
      "topic": "Trade",
      "difficulty": "medium",
      "question": "The term 'Trade discount' refers to ___.",
      "options": [
        "reduction for prompt payment",
        "permission to pay later for goods",
        "reduction on list price offered to traders",
        "agent who sells goods on behalf of owner"
      ],
      "answer": 2,
      "explanation": "Trade discount means reduction on list price offered to traders.",
      "id": 50
    },
    {
      "topic": "Trade",
      "difficulty": "medium",
      "question": "The term 'Cash discount' refers to ___.",
      "options": [
        "permission to pay later for goods",
        "agent who sells goods on behalf of owner",
        "owner who sends goods to an agent",
        "reduction for prompt payment"
      ],
      "answer": 3,
      "explanation": "Cash discount means reduction for prompt payment.",
      "id": 51
    },
    {
      "topic": "Trade",
      "difficulty": "medium",
      "question": "The term 'Trade credit' refers to ___.",
      "options": [
        "permission to pay later for goods",
        "agent who sells goods on behalf of owner",
        "owner who sends goods to an agent",
        "paying in installments before ownership"
      ],
      "answer": 0,
      "explanation": "Trade credit means permission to pay later for goods.",
      "id": 52
    },
    {
      "topic": "Trade",
      "difficulty": "hard",
      "question": "The term 'Consignee' refers to ___.",
      "options": [
        "owner who sends goods to an agent",
        "agent who sells goods on behalf of owner",
        "paying in installments before ownership",
        "sale with deferred payment"
      ],
      "answer": 1,
      "explanation": "Consignee means agent who sells goods on behalf of owner.",
      "id": 53
    },
    {
      "topic": "Trade",
      "difficulty": "hard",
      "question": "The term 'Consignor' refers to ___.",
      "options": [
        "paying in installments before ownership",
        "sale with deferred payment",
        "owner who sends goods to an agent",
        "excess of revenue over cost"
      ],
      "answer": 2,
      "explanation": "Consignor means owner who sends goods to an agent.",
      "id": 54
    },
    {
      "topic": "Business",
      "difficulty": "medium",
      "question": "The term 'Hire purchase' refers to ___.",
      "options": [
        "sale with deferred payment",
        "excess of revenue over cost",
        "costs exceed revenue",
        "paying in installments before ownership"
      ],
      "answer": 3,
      "explanation": "Hire purchase means paying in installments before ownership.",
      "id": 55
    },
    {
      "topic": "Trade",
      "difficulty": "easy",
      "question": "The term 'Credit sale' refers to ___.",
      "options": [
        "sale with deferred payment",
        "excess of revenue over cost",
        "costs exceed revenue",
        "non-paid promotion of goods"
      ],
      "answer": 0,
      "explanation": "Credit sale means sale with deferred payment.",
      "id": 56
    },
    {
      "topic": "Business",
      "difficulty": "easy",
      "question": "The term 'Profit' refers to ___.",
      "options": [
        "costs exceed revenue",
        "excess of revenue over cost",
        "non-paid promotion of goods",
        "assistance given to customers"
      ],
      "answer": 1,
      "explanation": "Profit means excess of revenue over cost.",
      "id": 57
    },
    {
      "topic": "Business",
      "difficulty": "easy",
      "question": "The term 'Loss' refers to ___.",
      "options": [
        "non-paid promotion of goods",
        "assistance given to customers",
        "costs exceed revenue",
        "promise of product quality"
      ],
      "answer": 2,
      "explanation": "Loss means costs exceed revenue.",
      "id": 58
    },
    {
      "topic": "Marketing",
      "difficulty": "medium",
      "question": "The term 'Publicity' refers to ___.",
      "options": [
        "assistance given to customers",
        "promise of product quality",
        "written guarantee for a product",
        "non-paid promotion of goods"
      ],
      "answer": 3,
      "explanation": "Publicity means non-paid promotion of goods.",
      "id": 59
    },
    {
      "topic": "Marketing",
      "difficulty": "easy",
      "question": "The term 'Customer service' refers to ___.",
      "options": [
        "assistance given to customers",
        "promise of product quality",
        "written guarantee for a product",
        "movement to protect consumers"
      ],
      "answer": 0,
      "explanation": "Customer service means assistance given to customers.",
      "id": 60
    },
    {
      "topic": "Consumer",
      "difficulty": "medium",
      "question": "The term 'Guarantee' refers to ___.",
      "options": [
        "written guarantee for a product",
        "promise of product quality",
        "movement to protect consumers",
        "possibility of loss"
      ],
      "answer": 1,
      "explanation": "Guarantee means promise of product quality.",
      "id": 61
    },
    {
      "topic": "Consumer",
      "difficulty": "medium",
      "question": "The term 'Warranty' refers to ___.",
      "options": [
        "movement to protect consumers",
        "possibility of loss",
        "written guarantee for a product",
        "insurer who accepts risk"
      ],
      "answer": 2,
      "explanation": "Warranty means written guarantee for a product.",
      "id": 62
    },
    {
      "topic": "Consumer",
      "difficulty": "hard",
      "question": "The term 'Consumerism' refers to ___.",
      "options": [
        "possibility of loss",
        "insurer who accepts risk",
        "written order to pay at a future date",
        "movement to protect consumers"
      ],
      "answer": 3,
      "explanation": "Consumerism means movement to protect consumers.",
      "id": 63
    },
    {
      "topic": "Insurance",
      "difficulty": "easy",
      "question": "The term 'Risk' refers to ___.",
      "options": [
        "possibility of loss",
        "insurer who accepts risk",
        "written order to pay at a future date",
        "automated teller machine for banking services"
      ],
      "answer": 0,
      "explanation": "Risk means possibility of loss.",
      "id": 64
    },
    {
      "topic": "Insurance",
      "difficulty": "hard",
      "question": "The term 'Underwriter' refers to ___.",
      "options": [
        "written order to pay at a future date",
        "insurer who accepts risk",
        "automated teller machine for banking services",
        "card that allows borrowing for purchases"
      ],
      "answer": 1,
      "explanation": "Underwriter means insurer who accepts risk.",
      "id": 65
    },
    {
      "topic": "Banking",
      "difficulty": "medium",
      "question": "The term 'Bill of exchange' refers to ___.",
      "options": [
        "automated teller machine for banking services",
        "card that allows borrowing for purchases",
        "written order to pay at a future date",
        "apex bank that controls monetary policy"
      ],
      "answer": 2,
      "explanation": "Bill of exchange means written order to pay at a future date.",
      "id": 66
    },
    {
      "topic": "Banking",
      "difficulty": "easy",
      "question": "The term 'ATM' refers to ___.",
      "options": [
        "card that allows borrowing for purchases",
        "apex bank that controls monetary policy",
        "bank promise to pay exporter",
        "automated teller machine for banking services"
      ],
      "answer": 3,
      "explanation": "ATM means automated teller machine for banking services.",
      "id": 67
    },
    {
      "topic": "Banking",
      "difficulty": "easy",
      "question": "The term 'Credit card' refers to ___.",
      "options": [
        "card that allows borrowing for purchases",
        "apex bank that controls monetary policy",
        "bank promise to pay exporter",
        "buying and selling of goods and services"
      ],
      "answer": 0,
      "explanation": "Credit card means card that allows borrowing for purchases.",
      "id": 68
    },
    {
      "topic": "Banking",
      "difficulty": "medium",
      "question": "The term 'Central bank' refers to ___.",
      "options": [
        "bank promise to pay exporter",
        "apex bank that controls monetary policy",
        "buying and selling of goods and services",
        "direct exchange of goods without money"
      ],
      "answer": 1,
      "explanation": "Central bank means apex bank that controls monetary policy.",
      "id": 69
    },
    {
      "topic": "International Trade",
      "difficulty": "hard",
      "question": "The term 'Letter of credit' refers to ___.",
      "options": [
        "buying and selling of goods and services",
        "direct exchange of goods without money",
        "bank promise to pay exporter",
        "selling goods in small quantities to consumers"
      ],
      "answer": 2,
      "explanation": "Letter of credit means bank promise to pay exporter.",
      "id": 70
    },
    {
      "topic": "Trade",
      "difficulty": "easy",
      "question": "Which term describes: buying and selling of goods and services?",
      "options": [
        "Barter",
        "Retailing",
        "Wholesaling",
        "Trade"
      ],
      "answer": 3,
      "explanation": "That description matches Trade.",
      "id": 71
    },
    {
      "topic": "Trade",
      "difficulty": "easy",
      "question": "Which term describes: direct exchange of goods without money?",
      "options": [
        "Barter",
        "Retailing",
        "Wholesaling",
        "Entrepot trade"
      ],
      "answer": 0,
      "explanation": "That description matches Barter.",
      "id": 72
    },
    {
      "topic": "Trade",
      "difficulty": "easy",
      "question": "Which term describes: selling goods in small quantities to consumers?",
      "options": [
        "Wholesaling",
        "Retailing",
        "Entrepot trade",
        "Marketing"
      ],
      "answer": 1,
      "explanation": "That description matches Retailing.",
      "id": 73
    },
    {
      "topic": "Trade",
      "difficulty": "easy",
      "question": "Which term describes: buying in bulk and selling in smaller quantities?",
      "options": [
        "Entrepot trade",
        "Marketing",
        "Wholesaling",
        "Branding"
      ],
      "answer": 2,
      "explanation": "That description matches Wholesaling.",
      "id": 74
    },
    {
      "topic": "Trade",
      "difficulty": "medium",
      "question": "Which term describes: importing and re-exporting goods?",
      "options": [
        "Marketing",
        "Branding",
        "Advertising",
        "Entrepot trade"
      ],
      "answer": 3,
      "explanation": "That description matches Entrepot trade.",
      "id": 75
    },
    {
      "topic": "Marketing",
      "difficulty": "easy",
      "question": "Which term describes: activities that move goods from producer to consumer?",
      "options": [
        "Marketing",
        "Branding",
        "Advertising",
        "Insurance"
      ],
      "answer": 0,
      "explanation": "That description matches Marketing.",
      "id": 76
    },
    {
      "topic": "Marketing",
      "difficulty": "easy",
      "question": "Which term describes: giving a product a name or symbol?",
      "options": [
        "Advertising",
        "Branding",
        "Insurance",
        "Premium"
      ],
      "answer": 1,
      "explanation": "That description matches Branding.",
      "id": 77
    },
    {
      "topic": "Marketing",
      "difficulty": "easy",
      "question": "Which term describes: paid communication to promote products?",
      "options": [
        "Insurance",
        "Premium",
        "Advertising",
        "Indemnity"
      ],
      "answer": 2,
      "explanation": "That description matches Advertising.",
      "id": 78
    },
    {
      "topic": "Insurance",
      "difficulty": "easy",
      "question": "Which term describes: protection against financial loss?",
      "options": [
        "Premium",
        "Indemnity",
        "Subrogation",
        "Insurance"
      ],
      "answer": 3,
      "explanation": "That description matches Insurance.",
      "id": 79
    },
    {
      "topic": "Insurance",
      "difficulty": "easy",
      "question": "Which term describes: payment made for insurance coverage?",
      "options": [
        "Premium",
        "Indemnity",
        "Subrogation",
        "Transport"
      ],
      "answer": 0,
      "explanation": "That description matches Premium.",
      "id": 80
    },
    {
      "topic": "Insurance",
      "difficulty": "medium",
      "question": "Which term describes: principle of restoring the insured to original position?",
      "options": [
        "Subrogation",
        "Indemnity",
        "Transport",
        "Warehousing"
      ],
      "answer": 1,
      "explanation": "That description matches Indemnity.",
      "id": 81
    },
    {
      "topic": "Insurance",
      "difficulty": "hard",
      "question": "Which term describes: insurer takes over rights after compensation?",
      "options": [
        "Transport",
        "Warehousing",
        "Subrogation",
        "Stock"
      ],
      "answer": 2,
      "explanation": "That description matches Subrogation.",
      "id": 82
    },
    {
      "topic": "Aids to Trade",
      "difficulty": "easy",
      "question": "Which term describes: movement of goods and people?",
      "options": [
        "Warehousing",
        "Stock",
        "Entrepreneurship",
        "Transport"
      ],
      "answer": 3,
      "explanation": "That description matches Transport.",
      "id": 83
    },
    {
      "topic": "Aids to Trade",
      "difficulty": "easy",
      "question": "Which term describes: storage of goods for future use?",
      "options": [
        "Warehousing",
        "Stock",
        "Entrepreneurship",
        "Partnership"
      ],
      "answer": 0,
      "explanation": "That description matches Warehousing.",
      "id": 84
    },
    {
      "topic": "Aids to Trade",
      "difficulty": "easy",
      "question": "Which term describes: goods held for sale?",
      "options": [
        "Entrepreneurship",
        "Stock",
        "Partnership",
        "Company"
      ],
      "answer": 1,
      "explanation": "That description matches Stock.",
      "id": 85
    },
    {
      "topic": "Business",
      "difficulty": "medium",
      "question": "Which term describes: organizing factors of production?",
      "options": [
        "Partnership",
        "Company",
        "Entrepreneurship",
        "Cooperative"
      ],
      "answer": 2,
      "explanation": "That description matches Entrepreneurship.",
      "id": 86
    },
    {
      "topic": "Business",
      "difficulty": "easy",
      "question": "Which term describes: business owned by two or more persons?",
      "options": [
        "Company",
        "Cooperative",
        "Franchise",
        "Partnership"
      ],
      "answer": 3,
      "explanation": "That description matches Partnership.",
      "id": 87
    },
    {
      "topic": "Business",
      "difficulty": "medium",
      "question": "Which term describes: business with separate legal identity?",
      "options": [
        "Company",
        "Cooperative",
        "Franchise",
        "E-commerce"
      ],
      "answer": 0,
      "explanation": "That description matches Company.",
      "id": 88
    },
    {
      "topic": "Business",
      "difficulty": "medium",
      "question": "Which term describes: business owned by members for mutual benefit?",
      "options": [
        "Franchise",
        "Cooperative",
        "E-commerce",
        "Cheque"
      ],
      "answer": 1,
      "explanation": "That description matches Cooperative.",
      "id": 89
    },
    {
      "topic": "Business",
      "difficulty": "hard",
      "question": "Which term describes: right to sell a company's products?",
      "options": [
        "E-commerce",
        "Cheque",
        "Franchise",
        "Draft"
      ],
      "answer": 2,
      "explanation": "That description matches Franchise.",
      "id": 90
    },
    {
      "topic": "Business",
      "difficulty": "easy",
      "question": "Which term describes: buying and selling over the internet?",
      "options": [
        "Cheque",
        "Draft",
        "Savings account",
        "E-commerce"
      ],
      "answer": 3,
      "explanation": "That description matches E-commerce.",
      "id": 91
    },
    {
      "topic": "Banking",
      "difficulty": "easy",
      "question": "Which term describes: written order to a bank to pay?",
      "options": [
        "Cheque",
        "Draft",
        "Savings account",
        "Current account"
      ],
      "answer": 0,
      "explanation": "That description matches Cheque.",
      "id": 92
    },
    {
      "topic": "Banking",
      "difficulty": "medium",
      "question": "Which term describes: order to pay issued by a bank?",
      "options": [
        "Savings account",
        "Draft",
        "Current account",
        "Overdraft"
      ],
      "answer": 1,
      "explanation": "That description matches Draft.",
      "id": 93
    },
    {
      "topic": "Banking",
      "difficulty": "easy",
      "question": "Which term describes: bank account for saving with interest?",
      "options": [
        "Current account",
        "Overdraft",
        "Savings account",
        "Interest"
      ],
      "answer": 2,
      "explanation": "That description matches Savings account.",
      "id": 94
    },
    {
      "topic": "Banking",
      "difficulty": "easy",
      "question": "Which term describes: bank account for frequent transactions?",
      "options": [
        "Overdraft",
        "Interest",
        "Bank rate",
        "Current account"
      ],
      "answer": 3,
      "explanation": "That description matches Current account.",
      "id": 95
    },
    {
      "topic": "Banking",
      "difficulty": "medium",
      "question": "Which term describes: withdrawal beyond account balance?",
      "options": [
        "Overdraft",
        "Interest",
        "Bank rate",
        "Stock exchange"
      ],
      "answer": 0,
      "explanation": "That description matches Overdraft.",
      "id": 96
    },
    {
      "topic": "Banking",
      "difficulty": "easy",
      "question": "Which term describes: charge for borrowing money?",
      "options": [
        "Bank rate",
        "Interest",
        "Stock exchange",
        "Tariff"
      ],
      "answer": 1,
      "explanation": "That description matches Interest.",
      "id": 97
    },
    {
      "topic": "Banking",
      "difficulty": "medium",
      "question": "Which term describes: interest rate charged by central bank?",
      "options": [
        "Stock exchange",
        "Tariff",
        "Bank rate",
        "Quota"
      ],
      "answer": 2,
      "explanation": "That description matches Bank rate.",
      "id": 98
    },
    {
      "topic": "Finance",
      "difficulty": "medium",
      "question": "Which term describes: market for buying and selling securities?",
      "options": [
        "Tariff",
        "Quota",
        "Bill of lading",
        "Stock exchange"
      ],
      "answer": 3,
      "explanation": "That description matches Stock exchange.",
      "id": 99
    },
    {
      "topic": "International Trade",
      "difficulty": "easy",
      "question": "Which term describes: tax on imports?",
      "options": [
        "Tariff",
        "Quota",
        "Bill of lading",
        "Invoice"
      ],
      "answer": 0,
      "explanation": "That description matches Tariff.",
      "id": 100
    },
    {
      "topic": "International Trade",
      "difficulty": "medium",
      "question": "Which term describes: limit on quantity of imports?",
      "options": [
        "Bill of lading",
        "Quota",
        "Invoice",
        "Receipt"
      ],
      "answer": 1,
      "explanation": "That description matches Quota.",
      "id": 101
    },
    {
      "topic": "International Trade",
      "difficulty": "hard",
      "question": "Which term describes: document acknowledging shipment of goods?",
      "options": [
        "Invoice",
        "Receipt",
        "Bill of lading",
        "Warehouse warrant"
      ],
      "answer": 2,
      "explanation": "That description matches Bill of lading.",
      "id": 102
    },
    {
      "topic": "Trade",
      "difficulty": "easy",
      "question": "Which term describes: bill showing goods sold and amount due?",
      "options": [
        "Receipt",
        "Warehouse warrant",
        "Consignment",
        "Invoice"
      ],
      "answer": 3,
      "explanation": "That description matches Invoice.",
      "id": 103
    },
    {
      "topic": "Trade",
      "difficulty": "easy",
      "question": "Which term describes: proof of payment?",
      "options": [
        "Receipt",
        "Warehouse warrant",
        "Consignment",
        "Agent"
      ],
      "answer": 0,
      "explanation": "That description matches Receipt.",
      "id": 104
    },
    {
      "topic": "Aids to Trade",
      "difficulty": "hard",
      "question": "Which term describes: document showing goods deposited in warehouse?",
      "options": [
        "Consignment",
        "Warehouse warrant",
        "Agent",
        "Consumer protection"
      ],
      "answer": 1,
      "explanation": "That description matches Warehouse warrant.",
      "id": 105
    },
    {
      "topic": "Trade",
      "difficulty": "medium",
      "question": "Which term describes: goods sent to an agent for sale?",
      "options": [
        "Agent",
        "Consumer protection",
        "Consignment",
        "After-sales service"
      ],
      "answer": 2,
      "explanation": "That description matches Consignment.",
      "id": 106
    },
    {
      "topic": "Trade",
      "difficulty": "easy",
      "question": "Which term describes: person who acts on behalf of another?",
      "options": [
        "Consumer protection",
        "After-sales service",
        "Packaging",
        "Agent"
      ],
      "answer": 3,
      "explanation": "That description matches Agent.",
      "id": 107
    },
    {
      "topic": "Consumer",
      "difficulty": "easy",
      "question": "Which term describes: measures to safeguard buyers?",
      "options": [
        "Consumer protection",
        "After-sales service",
        "Packaging",
        "Labeling"
      ],
      "answer": 0,
      "explanation": "That description matches Consumer protection.",
      "id": 108
    },
    {
      "topic": "Marketing",
      "difficulty": "medium",
      "question": "Which term describes: support provided after purchase?",
      "options": [
        "Packaging",
        "After-sales service",
        "Labeling",
        "Middlemen"
      ],
      "answer": 1,
      "explanation": "That description matches After-sales service.",
      "id": 109
    },
    {
      "topic": "Marketing",
      "difficulty": "easy",
      "question": "Which term describes: wrapping goods for protection and appeal?",
      "options": [
        "Labeling",
        "Middlemen",
        "Packaging",
        "Import"
      ],
      "answer": 2,
      "explanation": "That description matches Packaging.",
      "id": 110
    },
    {
      "topic": "Marketing",
      "difficulty": "easy",
      "question": "Which term describes: information written on product packaging?",
      "options": [
        "Middlemen",
        "Import",
        "Export",
        "Labeling"
      ],
      "answer": 3,
      "explanation": "That description matches Labeling.",
      "id": 111
    },
    {
      "topic": "Trade",
      "difficulty": "medium",
      "question": "Which term describes: intermediaries between producers and consumers?",
      "options": [
        "Middlemen",
        "Import",
        "Export",
        "Clearing agent"
      ],
      "answer": 0,
      "explanation": "That description matches Middlemen.",
      "id": 112
    },
    {
      "topic": "International Trade",
      "difficulty": "easy",
      "question": "Which term describes: goods brought into a country?",
      "options": [
        "Export",
        "Import",
        "Clearing agent",
        "Price discrimination"
      ],
      "answer": 1,
      "explanation": "That description matches Import.",
      "id": 113
    },
    {
      "topic": "International Trade",
      "difficulty": "easy",
      "question": "Which term describes: goods sold to another country?",
      "options": [
        "Clearing agent",
        "Price discrimination",
        "Export",
        "Goods"
      ],
      "answer": 2,
      "explanation": "That description matches Export.",
      "id": 114
    },
    {
      "topic": "International Trade",
      "difficulty": "hard",
      "question": "Which term describes: person who handles customs procedures?",
      "options": [
        "Price discrimination",
        "Goods",
        "Services",
        "Clearing agent"
      ],
      "answer": 3,
      "explanation": "That description matches Clearing agent.",
      "id": 115
    },
    {
      "topic": "Marketing",
      "difficulty": "hard",
      "question": "Which term describes: charging different prices for the same product?",
      "options": [
        "Price discrimination",
        "Goods",
        "Services",
        "Arbitrage"
      ],
      "answer": 0,
      "explanation": "That description matches Price discrimination.",
      "id": 116
    },
    {
      "topic": "Trade",
      "difficulty": "easy",
      "question": "Which term describes: tangible items produced for sale?",
      "options": [
        "Services",
        "Goods",
        "Arbitrage",
        "Trade discount"
      ],
      "answer": 1,
      "explanation": "That description matches Goods.",
      "id": 117
    },
    {
      "topic": "Trade",
      "difficulty": "easy",
      "question": "Which term describes: intangible activities performed for consumers?",
      "options": [
        "Arbitrage",
        "Trade discount",
        "Services",
        "Cash discount"
      ],
      "answer": 2,
      "explanation": "That description matches Services.",
      "id": 118
    },
    {
      "topic": "Finance",
      "difficulty": "hard",
      "question": "Which term describes: buying and selling to profit from price differences?",
      "options": [
        "Trade discount",
        "Cash discount",
        "Trade credit",
        "Arbitrage"
      ],
      "answer": 3,
      "explanation": "That description matches Arbitrage.",
      "id": 119
    },
    {
      "topic": "Trade",
      "difficulty": "medium",
      "question": "Which term describes: reduction on list price offered to traders?",
      "options": [
        "Trade discount",
        "Cash discount",
        "Trade credit",
        "Consignee"
      ],
      "answer": 0,
      "explanation": "That description matches Trade discount.",
      "id": 120
    },
    {
      "topic": "Trade",
      "difficulty": "medium",
      "question": "Which term describes: reduction for prompt payment?",
      "options": [
        "Trade credit",
        "Cash discount",
        "Consignee",
        "Consignor"
      ],
      "answer": 1,
      "explanation": "That description matches Cash discount.",
      "id": 121
    },
    {
      "topic": "Trade",
      "difficulty": "medium",
      "question": "Which term describes: permission to pay later for goods?",
      "options": [
        "Consignee",
        "Consignor",
        "Trade credit",
        "Hire purchase"
      ],
      "answer": 2,
      "explanation": "That description matches Trade credit.",
      "id": 122
    },
    {
      "topic": "Trade",
      "difficulty": "hard",
      "question": "Which term describes: agent who sells goods on behalf of owner?",
      "options": [
        "Consignor",
        "Hire purchase",
        "Credit sale",
        "Consignee"
      ],
      "answer": 3,
      "explanation": "That description matches Consignee.",
      "id": 123
    },
    {
      "topic": "Trade",
      "difficulty": "hard",
      "question": "Which term describes: owner who sends goods to an agent?",
      "options": [
        "Consignor",
        "Hire purchase",
        "Credit sale",
        "Profit"
      ],
      "answer": 0,
      "explanation": "That description matches Consignor.",
      "id": 124
    },
    {
      "topic": "Business",
      "difficulty": "medium",
      "question": "Which term describes: paying in installments before ownership?",
      "options": [
        "Credit sale",
        "Hire purchase",
        "Profit",
        "Loss"
      ],
      "answer": 1,
      "explanation": "That description matches Hire purchase.",
      "id": 125
    },
    {
      "topic": "Trade",
      "difficulty": "easy",
      "question": "Which term describes: sale with deferred payment?",
      "options": [
        "Profit",
        "Loss",
        "Credit sale",
        "Publicity"
      ],
      "answer": 2,
      "explanation": "That description matches Credit sale.",
      "id": 126
    },
    {
      "topic": "Business",
      "difficulty": "easy",
      "question": "Which term describes: excess of revenue over cost?",
      "options": [
        "Loss",
        "Publicity",
        "Customer service",
        "Profit"
      ],
      "answer": 3,
      "explanation": "That description matches Profit.",
      "id": 127
    },
    {
      "topic": "Business",
      "difficulty": "easy",
      "question": "Which term describes: costs exceed revenue?",
      "options": [
        "Loss",
        "Publicity",
        "Customer service",
        "Guarantee"
      ],
      "answer": 0,
      "explanation": "That description matches Loss.",
      "id": 128
    },
    {
      "topic": "Marketing",
      "difficulty": "medium",
      "question": "Which term describes: non-paid promotion of goods?",
      "options": [
        "Customer service",
        "Publicity",
        "Guarantee",
        "Warranty"
      ],
      "answer": 1,
      "explanation": "That description matches Publicity.",
      "id": 129
    },
    {
      "topic": "Marketing",
      "difficulty": "easy",
      "question": "Which term describes: assistance given to customers?",
      "options": [
        "Guarantee",
        "Warranty",
        "Customer service",
        "Consumerism"
      ],
      "answer": 2,
      "explanation": "That description matches Customer service.",
      "id": 130
    },
    {
      "topic": "Consumer",
      "difficulty": "medium",
      "question": "Which term describes: promise of product quality?",
      "options": [
        "Warranty",
        "Consumerism",
        "Risk",
        "Guarantee"
      ],
      "answer": 3,
      "explanation": "That description matches Guarantee.",
      "id": 131
    },
    {
      "topic": "Consumer",
      "difficulty": "medium",
      "question": "Which term describes: written guarantee for a product?",
      "options": [
        "Warranty",
        "Consumerism",
        "Risk",
        "Underwriter"
      ],
      "answer": 0,
      "explanation": "That description matches Warranty.",
      "id": 132
    },
    {
      "topic": "Consumer",
      "difficulty": "hard",
      "question": "Which term describes: movement to protect consumers?",
      "options": [
        "Risk",
        "Consumerism",
        "Underwriter",
        "Bill of exchange"
      ],
      "answer": 1,
      "explanation": "That description matches Consumerism.",
      "id": 133
    },
    {
      "topic": "Insurance",
      "difficulty": "easy",
      "question": "Which term describes: possibility of loss?",
      "options": [
        "Underwriter",
        "Bill of exchange",
        "Risk",
        "ATM"
      ],
      "answer": 2,
      "explanation": "That description matches Risk.",
      "id": 134
    },
    {
      "topic": "Insurance",
      "difficulty": "hard",
      "question": "Which term describes: insurer who accepts risk?",
      "options": [
        "Bill of exchange",
        "ATM",
        "Credit card",
        "Underwriter"
      ],
      "answer": 3,
      "explanation": "That description matches Underwriter.",
      "id": 135
    },
    {
      "topic": "Banking",
      "difficulty": "medium",
      "question": "Which term describes: written order to pay at a future date?",
      "options": [
        "Bill of exchange",
        "ATM",
        "Credit card",
        "Central bank"
      ],
      "answer": 0,
      "explanation": "That description matches Bill of exchange.",
      "id": 136
    },
    {
      "topic": "Banking",
      "difficulty": "easy",
      "question": "Which term describes: automated teller machine for banking services?",
      "options": [
        "Credit card",
        "ATM",
        "Central bank",
        "Letter of credit"
      ],
      "answer": 1,
      "explanation": "That description matches ATM.",
      "id": 137
    },
    {
      "topic": "Banking",
      "difficulty": "easy",
      "question": "Which term describes: card that allows borrowing for purchases?",
      "options": [
        "Central bank",
        "Letter of credit",
        "Credit card",
        "Trade"
      ],
      "answer": 2,
      "explanation": "That description matches Credit card.",
      "id": 138
    },
    {
      "topic": "Banking",
      "difficulty": "medium",
      "question": "Which term describes: apex bank that controls monetary policy?",
      "options": [
        "Letter of credit",
        "Trade",
        "Barter",
        "Central bank"
      ],
      "answer": 3,
      "explanation": "That description matches Central bank.",
      "id": 139
    },
    {
      "topic": "International Trade",
      "difficulty": "hard",
      "question": "Which term describes: bank promise to pay exporter?",
      "options": [
        "Letter of credit",
        "Trade",
        "Barter",
        "Retailing"
      ],
      "answer": 0,
      "explanation": "That description matches Letter of credit.",
      "id": 140
    },
    {
      "topic": "Trade",
      "difficulty": "medium",
      "question": "A wholesaler offers a 10% trade discount on a list price of 2000. The invoice price is ___.",
      "options": [
        "1900",
        "1800",
        "2000",
        "2200"
      ],
      "answer": 1,
      "explanation": "Trade discount = 10% of 2000.",
      "id": 141
    },
    {
      "topic": "Trade",
      "difficulty": "medium",
      "question": "A seller gives 5% cash discount for prompt payment on 10000. The discount is ___.",
      "options": [
        "250",
        "750",
        "500",
        "1000"
      ],
      "answer": 2,
      "explanation": "Cash discount = 5% of 10000.",
      "id": 142
    },
    {
      "topic": "International Trade",
      "difficulty": "hard",
      "question": "The document issued by a shipper acknowledging receipt of goods for shipment is the ___.",
      "options": [
        "invoice",
        "consignment note",
        "cheque",
        "bill of lading"
      ],
      "answer": 3,
      "explanation": "Bill of lading is a shipping document.",
      "id": 143
    },
    {
      "topic": "Insurance",
      "difficulty": "medium",
      "question": "Insurance aims to restore the insured to their original position. This is the principle of ___.",
      "options": [
        "indemnity",
        "subrogation",
        "premium",
        "risk"
      ],
      "answer": 0,
      "explanation": "Indemnity prevents profit from loss.",
      "id": 144
    },
    {
      "topic": "Business",
      "difficulty": "medium",
      "question": "Under hire purchase, ownership of goods passes to the buyer ___.",
      "options": [
        "immediately",
        "after final payment",
        "after first installment",
        "before delivery"
      ],
      "answer": 1,
      "explanation": "Ownership transfers after final installment.",
      "id": 145
    },
    {
      "topic": "Aids to Trade",
      "difficulty": "hard",
      "question": "A document showing goods stored in a warehouse and used as security is a ___.",
      "options": [
        "invoice",
        "receipt",
        "warehouse warrant",
        "cheque"
      ],
      "answer": 2,
      "explanation": "Warehouse warrant can be used as collateral.",
      "id": 146
    },
    {
      "topic": "Banking",
      "difficulty": "easy",
      "question": "A customer who withdraws more than their account balance uses an ___.",
      "options": [
        "saving account",
        "fixed deposit",
        "ledger",
        "overdraft"
      ],
      "answer": 3,
      "explanation": "Overdraft allows negative balance.",
      "id": 147
    },
    {
      "topic": "International Trade",
      "difficulty": "hard",
      "question": "A bank's promise to pay an exporter once documents are presented is a ___.",
      "options": [
        "letter of credit",
        "bill of exchange",
        "invoice",
        "receipt"
      ],
      "answer": 0,
      "explanation": "Letter of credit guarantees payment.",
      "id": 148
    },
    {
      "topic": "Marketing",
      "difficulty": "medium",
      "question": "Paid promotion by a company is ___.",
      "options": [
        "publicity",
        "advertising",
        "barter",
        "insurance"
      ],
      "answer": 1,
      "explanation": "Advertising is paid promotion.",
      "id": 149
    },
    {
      "topic": "Trade",
      "difficulty": "easy",
      "question": "Buying in bulk and selling in smaller quantities is the work of a ___.",
      "options": [
        "retailer",
        "consumer",
        "wholesaler",
        "producer"
      ],
      "answer": 2,
      "explanation": "Wholesalers buy in bulk.",
      "id": 150
    }
  ],
  "accounting": [
    {
      "topic": "Principles",
      "difficulty": "easy",
      "question": "The term 'Business entity concept' refers to ___.",
      "options": [
        "assumption that business will continue",
        "recording income and expenses when incurred",
        "business is separate from owner",
        "do not overstate profits or assets"
      ],
      "answer": 2,
      "explanation": "Business entity concept means business is separate from owner.",
      "id": 1
    },
    {
      "topic": "Principles",
      "difficulty": "medium",
      "question": "The term 'Going concern' refers to ___.",
      "options": [
        "recording income and expenses when incurred",
        "assumption that business will continue",
        "do not overstate profits or assets",
        "use same accounting methods over time"
      ],
      "answer": 1,
      "explanation": "Going concern means assumption that business will continue.",
      "id": 2
    },
    {
      "topic": "Principles",
      "difficulty": "medium",
      "question": "The term 'Accrual' refers to ___.",
      "options": [
        "recording income and expenses when incurred",
        "do not overstate profits or assets",
        "use same accounting methods over time",
        "every transaction affects two accounts"
      ],
      "answer": 0,
      "explanation": "Accrual means recording income and expenses when incurred.",
      "id": 3
    },
    {
      "topic": "Principles",
      "difficulty": "medium",
      "question": "The term 'Prudence' refers to ___.",
      "options": [
        "use same accounting methods over time",
        "every transaction affects two accounts",
        "left side of an account",
        "do not overstate profits or assets"
      ],
      "answer": 3,
      "explanation": "Prudence means do not overstate profits or assets.",
      "id": 4
    },
    {
      "topic": "Principles",
      "difficulty": "easy",
      "question": "The term 'Consistency' refers to ___.",
      "options": [
        "every transaction affects two accounts",
        "left side of an account",
        "use same accounting methods over time",
        "right side of an account"
      ],
      "answer": 2,
      "explanation": "Consistency means use same accounting methods over time.",
      "id": 5
    },
    {
      "topic": "Principles",
      "difficulty": "easy",
      "question": "The term 'Double entry' refers to ___.",
      "options": [
        "left side of an account",
        "every transaction affects two accounts",
        "right side of an account",
        "book of final accounts"
      ],
      "answer": 1,
      "explanation": "Double entry means every transaction affects two accounts.",
      "id": 6
    },
    {
      "topic": "Ledger",
      "difficulty": "easy",
      "question": "The term 'Debit' refers to ___.",
      "options": [
        "left side of an account",
        "right side of an account",
        "book of final accounts",
        "book of original entry"
      ],
      "answer": 0,
      "explanation": "Debit means left side of an account.",
      "id": 7
    },
    {
      "topic": "Ledger",
      "difficulty": "easy",
      "question": "The term 'Credit' refers to ___.",
      "options": [
        "book of final accounts",
        "book of original entry",
        "list of balances to check arithmetic",
        "right side of an account"
      ],
      "answer": 3,
      "explanation": "Credit means right side of an account.",
      "id": 8
    },
    {
      "topic": "Ledger",
      "difficulty": "easy",
      "question": "The term 'Ledger' refers to ___.",
      "options": [
        "book of original entry",
        "list of balances to check arithmetic",
        "book of final accounts",
        "record of cash and bank transactions"
      ],
      "answer": 2,
      "explanation": "Ledger means book of final accounts.",
      "id": 9
    },
    {
      "topic": "Ledger",
      "difficulty": "easy",
      "question": "The term 'Journal' refers to ___.",
      "options": [
        "list of balances to check arithmetic",
        "book of original entry",
        "record of cash and bank transactions",
        "small cash used for minor expenses"
      ],
      "answer": 1,
      "explanation": "Journal means book of original entry.",
      "id": 10
    },
    {
      "topic": "Ledger",
      "difficulty": "easy",
      "question": "The term 'Trial balance' refers to ___.",
      "options": [
        "list of balances to check arithmetic",
        "record of cash and bank transactions",
        "small cash used for minor expenses",
        "statement explaining difference between cash book and bank"
      ],
      "answer": 0,
      "explanation": "Trial balance means list of balances to check arithmetic.",
      "id": 11
    },
    {
      "topic": "Cash Book",
      "difficulty": "easy",
      "question": "The term 'Cash book' refers to ___.",
      "options": [
        "small cash used for minor expenses",
        "statement explaining difference between cash book and bank",
        "reduction in value of a fixed asset",
        "record of cash and bank transactions"
      ],
      "answer": 3,
      "explanation": "Cash book means record of cash and bank transactions.",
      "id": 12
    },
    {
      "topic": "Cash Book",
      "difficulty": "easy",
      "question": "The term 'Petty cash' refers to ___.",
      "options": [
        "statement explaining difference between cash book and bank",
        "reduction in value of a fixed asset",
        "small cash used for minor expenses",
        "equal amount charged each period"
      ],
      "answer": 2,
      "explanation": "Petty cash means small cash used for minor expenses.",
      "id": 13
    },
    {
      "topic": "Cash Book",
      "difficulty": "medium",
      "question": "The term 'Bank reconciliation' refers to ___.",
      "options": [
        "reduction in value of a fixed asset",
        "statement explaining difference between cash book and bank",
        "equal amount charged each period",
        "depreciation on net book value"
      ],
      "answer": 1,
      "explanation": "Bank reconciliation means statement explaining difference between cash book and bank.",
      "id": 14
    },
    {
      "topic": "Depreciation",
      "difficulty": "easy",
      "question": "The term 'Depreciation' refers to ___.",
      "options": [
        "reduction in value of a fixed asset",
        "equal amount charged each period",
        "depreciation on net book value",
        "amount set aside for bad debts"
      ],
      "answer": 0,
      "explanation": "Depreciation means reduction in value of a fixed asset.",
      "id": 15
    },
    {
      "topic": "Depreciation",
      "difficulty": "medium",
      "question": "The term 'Straight-line depreciation' refers to ___.",
      "options": [
        "depreciation on net book value",
        "amount set aside for bad debts",
        "debt that cannot be recovered",
        "equal amount charged each period"
      ],
      "answer": 3,
      "explanation": "Straight-line depreciation means equal amount charged each period.",
      "id": 16
    },
    {
      "topic": "Depreciation",
      "difficulty": "medium",
      "question": "The term 'Reducing balance' refers to ___.",
      "options": [
        "amount set aside for bad debts",
        "debt that cannot be recovered",
        "depreciation on net book value",
        "owner's investment in the business"
      ],
      "answer": 2,
      "explanation": "Reducing balance means depreciation on net book value.",
      "id": 17
    },
    {
      "topic": "Final Accounts",
      "difficulty": "medium",
      "question": "The term 'Provision for doubtful debts' refers to ___.",
      "options": [
        "debt that cannot be recovered",
        "amount set aside for bad debts",
        "owner's investment in the business",
        "income from normal operations"
      ],
      "answer": 1,
      "explanation": "Provision for doubtful debts means amount set aside for bad debts.",
      "id": 18
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "The term 'Bad debt' refers to ___.",
      "options": [
        "debt that cannot be recovered",
        "owner's investment in the business",
        "income from normal operations",
        "withdrawals by owner"
      ],
      "answer": 0,
      "explanation": "Bad debt means debt that cannot be recovered.",
      "id": 19
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "The term 'Capital' refers to ___.",
      "options": [
        "income from normal operations",
        "withdrawals by owner",
        "sales minus cost of goods sold",
        "owner's investment in the business"
      ],
      "answer": 3,
      "explanation": "Capital means owner's investment in the business.",
      "id": 20
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "The term 'Revenue' refers to ___.",
      "options": [
        "withdrawals by owner",
        "sales minus cost of goods sold",
        "income from normal operations",
        "profit after all expenses"
      ],
      "answer": 2,
      "explanation": "Revenue means income from normal operations.",
      "id": 21
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "The term 'Drawings' refers to ___.",
      "options": [
        "sales minus cost of goods sold",
        "withdrawals by owner",
        "profit after all expenses",
        "statement of assets and liabilities"
      ],
      "answer": 1,
      "explanation": "Drawings means withdrawals by owner.",
      "id": 22
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "The term 'Gross profit' refers to ___.",
      "options": [
        "sales minus cost of goods sold",
        "profit after all expenses",
        "statement of assets and liabilities",
        "statement showing profit or loss"
      ],
      "answer": 0,
      "explanation": "Gross profit means sales minus cost of goods sold.",
      "id": 23
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "The term 'Net profit' refers to ___.",
      "options": [
        "statement of assets and liabilities",
        "statement showing profit or loss",
        "summary account for debtors or creditors",
        "profit after all expenses"
      ],
      "answer": 3,
      "explanation": "Net profit means profit after all expenses.",
      "id": 24
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "The term 'Balance sheet' refers to ___.",
      "options": [
        "statement showing profit or loss",
        "summary account for debtors or creditors",
        "statement of assets and liabilities",
        "temporary account for errors"
      ],
      "answer": 2,
      "explanation": "Balance sheet means statement of assets and liabilities.",
      "id": 25
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "The term 'Income statement' refers to ___.",
      "options": [
        "summary account for debtors or creditors",
        "statement showing profit or loss",
        "temporary account for errors",
        "wrong classification of item"
      ],
      "answer": 1,
      "explanation": "Income statement means statement showing profit or loss.",
      "id": 26
    },
    {
      "topic": "Control Accounts",
      "difficulty": "hard",
      "question": "The term 'Control account' refers to ___.",
      "options": [
        "summary account for debtors or creditors",
        "temporary account for errors",
        "wrong classification of item",
        "correct amount in wrong account"
      ],
      "answer": 0,
      "explanation": "Control account means summary account for debtors or creditors.",
      "id": 27
    },
    {
      "topic": "Errors",
      "difficulty": "medium",
      "question": "The term 'Suspense account' refers to ___.",
      "options": [
        "wrong classification of item",
        "correct amount in wrong account",
        "transaction completely left out",
        "temporary account for errors"
      ],
      "answer": 3,
      "explanation": "Suspense account means temporary account for errors.",
      "id": 28
    },
    {
      "topic": "Errors",
      "difficulty": "medium",
      "question": "The term 'Error of principle' refers to ___.",
      "options": [
        "correct amount in wrong account",
        "transaction completely left out",
        "wrong classification of item",
        "wrong amount recorded"
      ],
      "answer": 2,
      "explanation": "Error of principle means wrong classification of item.",
      "id": 29
    },
    {
      "topic": "Errors",
      "difficulty": "medium",
      "question": "The term 'Error of commission' refers to ___.",
      "options": [
        "transaction completely left out",
        "correct amount in wrong account",
        "wrong amount recorded",
        "account showing gross profit"
      ],
      "answer": 1,
      "explanation": "Error of commission means correct amount in wrong account.",
      "id": 30
    },
    {
      "topic": "Errors",
      "difficulty": "medium",
      "question": "The term 'Error of omission' refers to ___.",
      "options": [
        "transaction completely left out",
        "wrong amount recorded",
        "account showing gross profit",
        "account showing net profit"
      ],
      "answer": 0,
      "explanation": "Error of omission means transaction completely left out.",
      "id": 31
    },
    {
      "topic": "Errors",
      "difficulty": "medium",
      "question": "The term 'Error of original entry' refers to ___.",
      "options": [
        "account showing gross profit",
        "account showing net profit",
        "business owned by two or more partners",
        "wrong amount recorded"
      ],
      "answer": 3,
      "explanation": "Error of original entry means wrong amount recorded.",
      "id": 32
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "The term 'Trading account' refers to ___.",
      "options": [
        "account showing net profit",
        "business owned by two or more partners",
        "account showing gross profit",
        "account showing partner's capital"
      ],
      "answer": 2,
      "explanation": "Trading account means account showing gross profit.",
      "id": 33
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "The term 'Profit and loss account' refers to ___.",
      "options": [
        "business owned by two or more partners",
        "account showing net profit",
        "account showing partner's capital",
        "account showing partner's drawings and interest"
      ],
      "answer": 1,
      "explanation": "Profit and loss account means account showing net profit.",
      "id": 34
    },
    {
      "topic": "Partnership",
      "difficulty": "easy",
      "question": "The term 'Partnership' refers to ___.",
      "options": [
        "business owned by two or more partners",
        "account showing partner's capital",
        "account showing partner's drawings and interest",
        "intangible asset representing reputation"
      ],
      "answer": 0,
      "explanation": "Partnership means business owned by two or more partners.",
      "id": 35
    },
    {
      "topic": "Partnership",
      "difficulty": "medium",
      "question": "The term 'Capital account' refers to ___.",
      "options": [
        "account showing partner's drawings and interest",
        "intangible asset representing reputation",
        "negative bank balance",
        "account showing partner's capital"
      ],
      "answer": 3,
      "explanation": "Capital account means account showing partner's capital.",
      "id": 36
    },
    {
      "topic": "Partnership",
      "difficulty": "medium",
      "question": "The term 'Current account' refers to ___.",
      "options": [
        "intangible asset representing reputation",
        "negative bank balance",
        "account showing partner's drawings and interest",
        "spending on fixed assets"
      ],
      "answer": 2,
      "explanation": "Current account means account showing partner's drawings and interest.",
      "id": 37
    },
    {
      "topic": "Partnership",
      "difficulty": "hard",
      "question": "The term 'Goodwill' refers to ___.",
      "options": [
        "negative bank balance",
        "intangible asset representing reputation",
        "spending on fixed assets",
        "spending on day-to-day operations"
      ],
      "answer": 1,
      "explanation": "Goodwill means intangible asset representing reputation.",
      "id": 38
    },
    {
      "topic": "Cash Book",
      "difficulty": "easy",
      "question": "The term 'Bank overdraft' refers to ___.",
      "options": [
        "negative bank balance",
        "spending on fixed assets",
        "spending on day-to-day operations",
        "record of transactions for a specific item"
      ],
      "answer": 0,
      "explanation": "Bank overdraft means negative bank balance.",
      "id": 39
    },
    {
      "topic": "Principles",
      "difficulty": "medium",
      "question": "The term 'Capital expenditure' refers to ___.",
      "options": [
        "spending on day-to-day operations",
        "record of transactions for a specific item",
        "document used to record transactions",
        "spending on fixed assets"
      ],
      "answer": 3,
      "explanation": "Capital expenditure means spending on fixed assets.",
      "id": 40
    },
    {
      "topic": "Principles",
      "difficulty": "medium",
      "question": "The term 'Revenue expenditure' refers to ___.",
      "options": [
        "record of transactions for a specific item",
        "document used to record transactions",
        "spending on day-to-day operations",
        "document showing amount owed"
      ],
      "answer": 2,
      "explanation": "Revenue expenditure means spending on day-to-day operations.",
      "id": 41
    },
    {
      "topic": "Ledger",
      "difficulty": "easy",
      "question": "The term 'Ledger account' refers to ___.",
      "options": [
        "document used to record transactions",
        "record of transactions for a specific item",
        "document showing amount owed",
        "document acknowledging payment"
      ],
      "answer": 1,
      "explanation": "Ledger account means record of transactions for a specific item.",
      "id": 42
    },
    {
      "topic": "Ledger",
      "difficulty": "easy",
      "question": "The term 'Source document' refers to ___.",
      "options": [
        "document used to record transactions",
        "document showing amount owed",
        "document acknowledging payment",
        "document for goods returned by buyer"
      ],
      "answer": 0,
      "explanation": "Source document means document used to record transactions.",
      "id": 43
    },
    {
      "topic": "Ledger",
      "difficulty": "easy",
      "question": "The term 'Invoice' refers to ___.",
      "options": [
        "document acknowledging payment",
        "document for goods returned by buyer",
        "document for goods returned to seller",
        "document showing amount owed"
      ],
      "answer": 3,
      "explanation": "Invoice means document showing amount owed.",
      "id": 44
    },
    {
      "topic": "Ledger",
      "difficulty": "easy",
      "question": "The term 'Receipt' refers to ___.",
      "options": [
        "document for goods returned by buyer",
        "document for goods returned to seller",
        "document acknowledging payment",
        "difference between debit and credit"
      ],
      "answer": 2,
      "explanation": "Receipt means document acknowledging payment.",
      "id": 45
    },
    {
      "topic": "Ledger",
      "difficulty": "medium",
      "question": "The term 'Debit note' refers to ___.",
      "options": [
        "document for goods returned to seller",
        "document for goods returned by buyer",
        "difference between debit and credit",
        "goods available for sale"
      ],
      "answer": 1,
      "explanation": "Debit note means document for goods returned by buyer.",
      "id": 46
    },
    {
      "topic": "Ledger",
      "difficulty": "medium",
      "question": "The term 'Credit note' refers to ___.",
      "options": [
        "document for goods returned to seller",
        "difference between debit and credit",
        "goods available for sale",
        "ability to meet short-term obligations"
      ],
      "answer": 0,
      "explanation": "Credit note means document for goods returned to seller.",
      "id": 47
    },
    {
      "topic": "Ledger",
      "difficulty": "easy",
      "question": "The term 'Ledger balance' refers to ___.",
      "options": [
        "goods available for sale",
        "ability to meet short-term obligations",
        "assets convertible to cash within a year",
        "difference between debit and credit"
      ],
      "answer": 3,
      "explanation": "Ledger balance means difference between debit and credit.",
      "id": 48
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "The term 'Stock' refers to ___.",
      "options": [
        "ability to meet short-term obligations",
        "assets convertible to cash within a year",
        "goods available for sale",
        "obligations due within a year"
      ],
      "answer": 2,
      "explanation": "Stock means goods available for sale.",
      "id": 49
    },
    {
      "topic": "Final Accounts",
      "difficulty": "medium",
      "question": "The term 'Liquidity' refers to ___.",
      "options": [
        "assets convertible to cash within a year",
        "ability to meet short-term obligations",
        "obligations due within a year",
        "long-term assets used in the business"
      ],
      "answer": 1,
      "explanation": "Liquidity means ability to meet short-term obligations.",
      "id": 50
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "The term 'Current assets' refers to ___.",
      "options": [
        "assets convertible to cash within a year",
        "obligations due within a year",
        "long-term assets used in the business",
        "reserve not available for distribution"
      ],
      "answer": 0,
      "explanation": "Current assets means assets convertible to cash within a year.",
      "id": 51
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "The term 'Current liabilities' refers to ___.",
      "options": [
        "long-term assets used in the business",
        "reserve not available for distribution",
        "reserve created from profits",
        "obligations due within a year"
      ],
      "answer": 3,
      "explanation": "Current liabilities means obligations due within a year.",
      "id": 52
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "The term 'Non-current assets' refers to ___.",
      "options": [
        "reserve not available for distribution",
        "reserve created from profits",
        "long-term assets used in the business",
        "expenses paid in advance"
      ],
      "answer": 2,
      "explanation": "Non-current assets means long-term assets used in the business.",
      "id": 53
    },
    {
      "topic": "Final Accounts",
      "difficulty": "hard",
      "question": "The term 'Capital reserve' refers to ___.",
      "options": [
        "reserve created from profits",
        "reserve not available for distribution",
        "expenses paid in advance",
        "expense incurred but not yet paid"
      ],
      "answer": 1,
      "explanation": "Capital reserve means reserve not available for distribution.",
      "id": 54
    },
    {
      "topic": "Final Accounts",
      "difficulty": "medium",
      "question": "The term 'Revenue reserve' refers to ___.",
      "options": [
        "reserve created from profits",
        "expenses paid in advance",
        "expense incurred but not yet paid",
        "debt written off but later collected"
      ],
      "answer": 0,
      "explanation": "Revenue reserve means reserve created from profits.",
      "id": 55
    },
    {
      "topic": "Final Accounts",
      "difficulty": "medium",
      "question": "The term 'Prepayment' refers to ___.",
      "options": [
        "expense incurred but not yet paid",
        "debt written off but later collected",
        "fees charged by the bank",
        "expenses paid in advance"
      ],
      "answer": 3,
      "explanation": "Prepayment means expenses paid in advance.",
      "id": 56
    },
    {
      "topic": "Final Accounts",
      "difficulty": "medium",
      "question": "The term 'Accrued expense' refers to ___.",
      "options": [
        "debt written off but later collected",
        "fees charged by the bank",
        "expense incurred but not yet paid",
        "cheque returned unpaid by the bank"
      ],
      "answer": 2,
      "explanation": "Accrued expense means expense incurred but not yet paid.",
      "id": 57
    },
    {
      "topic": "Final Accounts",
      "difficulty": "medium",
      "question": "The term 'Bad debt recovered' refers to ___.",
      "options": [
        "fees charged by the bank",
        "debt written off but later collected",
        "cheque returned unpaid by the bank",
        "record of bank transactions"
      ],
      "answer": 1,
      "explanation": "Bad debt recovered means debt written off but later collected.",
      "id": 58
    },
    {
      "topic": "Cash Book",
      "difficulty": "easy",
      "question": "The term 'Bank charges' refers to ___.",
      "options": [
        "fees charged by the bank",
        "cheque returned unpaid by the bank",
        "record of bank transactions",
        "amounts owed by customers"
      ],
      "answer": 0,
      "explanation": "Bank charges means fees charged by the bank.",
      "id": 59
    },
    {
      "topic": "Cash Book",
      "difficulty": "medium",
      "question": "The term 'Dishonoured cheque' refers to ___.",
      "options": [
        "record of bank transactions",
        "amounts owed by customers",
        "amounts owed to suppliers",
        "cheque returned unpaid by the bank"
      ],
      "answer": 3,
      "explanation": "Dishonoured cheque means cheque returned unpaid by the bank.",
      "id": 60
    },
    {
      "topic": "Cash Book",
      "difficulty": "easy",
      "question": "The term 'Bank statement' refers to ___.",
      "options": [
        "amounts owed by customers",
        "amounts owed to suppliers",
        "record of bank transactions",
        "entry affecting both cash and bank"
      ],
      "answer": 2,
      "explanation": "Bank statement means record of bank transactions.",
      "id": 61
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "The term 'Receivables' refers to ___.",
      "options": [
        "amounts owed to suppliers",
        "amounts owed by customers",
        "entry affecting both cash and bank",
        "equality of debit and credit totals"
      ],
      "answer": 1,
      "explanation": "Receivables means amounts owed by customers.",
      "id": 62
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "The term 'Payables' refers to ___.",
      "options": [
        "amounts owed to suppliers",
        "entry affecting both cash and bank",
        "equality of debit and credit totals",
        "unsold goods at period end"
      ],
      "answer": 0,
      "explanation": "Payables means amounts owed to suppliers.",
      "id": 63
    },
    {
      "topic": "Cash Book",
      "difficulty": "medium",
      "question": "The term 'Contra entry' refers to ___.",
      "options": [
        "equality of debit and credit totals",
        "unsold goods at period end",
        "goods at the start of the period",
        "entry affecting both cash and bank"
      ],
      "answer": 3,
      "explanation": "Contra entry means entry affecting both cash and bank.",
      "id": 64
    },
    {
      "topic": "Ledger",
      "difficulty": "easy",
      "question": "The term 'Trial balance agreement' refers to ___.",
      "options": [
        "unsold goods at period end",
        "goods at the start of the period",
        "equality of debit and credit totals",
        "cost of sales exceeds sales"
      ],
      "answer": 2,
      "explanation": "Trial balance agreement means equality of debit and credit totals.",
      "id": 65
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "The term 'Closing stock' refers to ___.",
      "options": [
        "goods at the start of the period",
        "unsold goods at period end",
        "cost of sales exceeds sales",
        "expenses exceed gross profit"
      ],
      "answer": 1,
      "explanation": "Closing stock means unsold goods at period end.",
      "id": 66
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "The term 'Opening stock' refers to ___.",
      "options": [
        "goods at the start of the period",
        "cost of sales exceeds sales",
        "expenses exceed gross profit",
        "movement of cash in and out of a business"
      ],
      "answer": 0,
      "explanation": "Opening stock means goods at the start of the period.",
      "id": 67
    },
    {
      "topic": "Final Accounts",
      "difficulty": "medium",
      "question": "The term 'Gross loss' refers to ___.",
      "options": [
        "expenses exceed gross profit",
        "movement of cash in and out of a business",
        "business is separate from owner",
        "cost of sales exceeds sales"
      ],
      "answer": 3,
      "explanation": "Gross loss means cost of sales exceeds sales.",
      "id": 68
    },
    {
      "topic": "Final Accounts",
      "difficulty": "medium",
      "question": "The term 'Net loss' refers to ___.",
      "options": [
        "movement of cash in and out of a business",
        "business is separate from owner",
        "expenses exceed gross profit",
        "assumption that business will continue"
      ],
      "answer": 2,
      "explanation": "Net loss means expenses exceed gross profit.",
      "id": 69
    },
    {
      "topic": "Final Accounts",
      "difficulty": "medium",
      "question": "The term 'Cash flow' refers to ___.",
      "options": [
        "business is separate from owner",
        "movement of cash in and out of a business",
        "assumption that business will continue",
        "recording income and expenses when incurred"
      ],
      "answer": 1,
      "explanation": "Cash flow means movement of cash in and out of a business.",
      "id": 70
    },
    {
      "topic": "Principles",
      "difficulty": "easy",
      "question": "Which term describes: business is separate from owner?",
      "options": [
        "Business entity concept",
        "Going concern",
        "Accrual",
        "Prudence"
      ],
      "answer": 0,
      "explanation": "That description matches Business entity concept.",
      "id": 71
    },
    {
      "topic": "Principles",
      "difficulty": "medium",
      "question": "Which term describes: assumption that business will continue?",
      "options": [
        "Accrual",
        "Prudence",
        "Consistency",
        "Going concern"
      ],
      "answer": 3,
      "explanation": "That description matches Going concern.",
      "id": 72
    },
    {
      "topic": "Principles",
      "difficulty": "medium",
      "question": "Which term describes: recording income and expenses when incurred?",
      "options": [
        "Prudence",
        "Consistency",
        "Accrual",
        "Double entry"
      ],
      "answer": 2,
      "explanation": "That description matches Accrual.",
      "id": 73
    },
    {
      "topic": "Principles",
      "difficulty": "medium",
      "question": "Which term describes: do not overstate profits or assets?",
      "options": [
        "Consistency",
        "Prudence",
        "Double entry",
        "Debit"
      ],
      "answer": 1,
      "explanation": "That description matches Prudence.",
      "id": 74
    },
    {
      "topic": "Principles",
      "difficulty": "easy",
      "question": "Which term describes: use same accounting methods over time?",
      "options": [
        "Consistency",
        "Double entry",
        "Debit",
        "Credit"
      ],
      "answer": 0,
      "explanation": "That description matches Consistency.",
      "id": 75
    },
    {
      "topic": "Principles",
      "difficulty": "easy",
      "question": "Which term describes: every transaction affects two accounts?",
      "options": [
        "Debit",
        "Credit",
        "Ledger",
        "Double entry"
      ],
      "answer": 3,
      "explanation": "That description matches Double entry.",
      "id": 76
    },
    {
      "topic": "Ledger",
      "difficulty": "easy",
      "question": "Which term describes: left side of an account?",
      "options": [
        "Credit",
        "Ledger",
        "Debit",
        "Journal"
      ],
      "answer": 2,
      "explanation": "That description matches Debit.",
      "id": 77
    },
    {
      "topic": "Ledger",
      "difficulty": "easy",
      "question": "Which term describes: right side of an account?",
      "options": [
        "Ledger",
        "Credit",
        "Journal",
        "Trial balance"
      ],
      "answer": 1,
      "explanation": "That description matches Credit.",
      "id": 78
    },
    {
      "topic": "Ledger",
      "difficulty": "easy",
      "question": "Which term describes: book of final accounts?",
      "options": [
        "Ledger",
        "Journal",
        "Trial balance",
        "Cash book"
      ],
      "answer": 0,
      "explanation": "That description matches Ledger.",
      "id": 79
    },
    {
      "topic": "Ledger",
      "difficulty": "easy",
      "question": "Which term describes: book of original entry?",
      "options": [
        "Trial balance",
        "Cash book",
        "Petty cash",
        "Journal"
      ],
      "answer": 3,
      "explanation": "That description matches Journal.",
      "id": 80
    },
    {
      "topic": "Ledger",
      "difficulty": "easy",
      "question": "Which term describes: list of balances to check arithmetic?",
      "options": [
        "Cash book",
        "Petty cash",
        "Trial balance",
        "Bank reconciliation"
      ],
      "answer": 2,
      "explanation": "That description matches Trial balance.",
      "id": 81
    },
    {
      "topic": "Cash Book",
      "difficulty": "easy",
      "question": "Which term describes: record of cash and bank transactions?",
      "options": [
        "Petty cash",
        "Cash book",
        "Bank reconciliation",
        "Depreciation"
      ],
      "answer": 1,
      "explanation": "That description matches Cash book.",
      "id": 82
    },
    {
      "topic": "Cash Book",
      "difficulty": "easy",
      "question": "Which term describes: small cash used for minor expenses?",
      "options": [
        "Petty cash",
        "Bank reconciliation",
        "Depreciation",
        "Straight-line depreciation"
      ],
      "answer": 0,
      "explanation": "That description matches Petty cash.",
      "id": 83
    },
    {
      "topic": "Cash Book",
      "difficulty": "medium",
      "question": "Which term describes: statement explaining difference between cash book and bank?",
      "options": [
        "Depreciation",
        "Straight-line depreciation",
        "Reducing balance",
        "Bank reconciliation"
      ],
      "answer": 3,
      "explanation": "That description matches Bank reconciliation.",
      "id": 84
    },
    {
      "topic": "Depreciation",
      "difficulty": "easy",
      "question": "Which term describes: reduction in value of a fixed asset?",
      "options": [
        "Straight-line depreciation",
        "Reducing balance",
        "Depreciation",
        "Provision for doubtful debts"
      ],
      "answer": 2,
      "explanation": "That description matches Depreciation.",
      "id": 85
    },
    {
      "topic": "Depreciation",
      "difficulty": "medium",
      "question": "Which term describes: equal amount charged each period?",
      "options": [
        "Reducing balance",
        "Straight-line depreciation",
        "Provision for doubtful debts",
        "Bad debt"
      ],
      "answer": 1,
      "explanation": "That description matches Straight-line depreciation.",
      "id": 86
    },
    {
      "topic": "Depreciation",
      "difficulty": "medium",
      "question": "Which term describes: depreciation on net book value?",
      "options": [
        "Reducing balance",
        "Provision for doubtful debts",
        "Bad debt",
        "Capital"
      ],
      "answer": 0,
      "explanation": "That description matches Reducing balance.",
      "id": 87
    },
    {
      "topic": "Final Accounts",
      "difficulty": "medium",
      "question": "Which term describes: amount set aside for bad debts?",
      "options": [
        "Bad debt",
        "Capital",
        "Revenue",
        "Provision for doubtful debts"
      ],
      "answer": 3,
      "explanation": "That description matches Provision for doubtful debts.",
      "id": 88
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "Which term describes: debt that cannot be recovered?",
      "options": [
        "Capital",
        "Revenue",
        "Bad debt",
        "Drawings"
      ],
      "answer": 2,
      "explanation": "That description matches Bad debt.",
      "id": 89
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "Which term describes: owner's investment in the business?",
      "options": [
        "Revenue",
        "Capital",
        "Drawings",
        "Gross profit"
      ],
      "answer": 1,
      "explanation": "That description matches Capital.",
      "id": 90
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "Which term describes: income from normal operations?",
      "options": [
        "Revenue",
        "Drawings",
        "Gross profit",
        "Net profit"
      ],
      "answer": 0,
      "explanation": "That description matches Revenue.",
      "id": 91
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "Which term describes: withdrawals by owner?",
      "options": [
        "Gross profit",
        "Net profit",
        "Balance sheet",
        "Drawings"
      ],
      "answer": 3,
      "explanation": "That description matches Drawings.",
      "id": 92
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "Which term describes: sales minus cost of goods sold?",
      "options": [
        "Net profit",
        "Balance sheet",
        "Gross profit",
        "Income statement"
      ],
      "answer": 2,
      "explanation": "That description matches Gross profit.",
      "id": 93
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "Which term describes: profit after all expenses?",
      "options": [
        "Balance sheet",
        "Net profit",
        "Income statement",
        "Control account"
      ],
      "answer": 1,
      "explanation": "That description matches Net profit.",
      "id": 94
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "Which term describes: statement of assets and liabilities?",
      "options": [
        "Balance sheet",
        "Income statement",
        "Control account",
        "Suspense account"
      ],
      "answer": 0,
      "explanation": "That description matches Balance sheet.",
      "id": 95
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "Which term describes: statement showing profit or loss?",
      "options": [
        "Control account",
        "Suspense account",
        "Error of principle",
        "Income statement"
      ],
      "answer": 3,
      "explanation": "That description matches Income statement.",
      "id": 96
    },
    {
      "topic": "Control Accounts",
      "difficulty": "hard",
      "question": "Which term describes: summary account for debtors or creditors?",
      "options": [
        "Suspense account",
        "Error of principle",
        "Control account",
        "Error of commission"
      ],
      "answer": 2,
      "explanation": "That description matches Control account.",
      "id": 97
    },
    {
      "topic": "Errors",
      "difficulty": "medium",
      "question": "Which term describes: temporary account for errors?",
      "options": [
        "Error of principle",
        "Suspense account",
        "Error of commission",
        "Error of omission"
      ],
      "answer": 1,
      "explanation": "That description matches Suspense account.",
      "id": 98
    },
    {
      "topic": "Errors",
      "difficulty": "medium",
      "question": "Which term describes: wrong classification of item?",
      "options": [
        "Error of principle",
        "Error of commission",
        "Error of omission",
        "Error of original entry"
      ],
      "answer": 0,
      "explanation": "That description matches Error of principle.",
      "id": 99
    },
    {
      "topic": "Errors",
      "difficulty": "medium",
      "question": "Which term describes: correct amount in wrong account?",
      "options": [
        "Error of omission",
        "Error of original entry",
        "Trading account",
        "Error of commission"
      ],
      "answer": 3,
      "explanation": "That description matches Error of commission.",
      "id": 100
    },
    {
      "topic": "Errors",
      "difficulty": "medium",
      "question": "Which term describes: transaction completely left out?",
      "options": [
        "Error of original entry",
        "Trading account",
        "Error of omission",
        "Profit and loss account"
      ],
      "answer": 2,
      "explanation": "That description matches Error of omission.",
      "id": 101
    },
    {
      "topic": "Errors",
      "difficulty": "medium",
      "question": "Which term describes: wrong amount recorded?",
      "options": [
        "Trading account",
        "Error of original entry",
        "Profit and loss account",
        "Partnership"
      ],
      "answer": 1,
      "explanation": "That description matches Error of original entry.",
      "id": 102
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "Which term describes: account showing gross profit?",
      "options": [
        "Trading account",
        "Profit and loss account",
        "Partnership",
        "Capital account"
      ],
      "answer": 0,
      "explanation": "That description matches Trading account.",
      "id": 103
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "Which term describes: account showing net profit?",
      "options": [
        "Partnership",
        "Capital account",
        "Current account",
        "Profit and loss account"
      ],
      "answer": 3,
      "explanation": "That description matches Profit and loss account.",
      "id": 104
    },
    {
      "topic": "Partnership",
      "difficulty": "easy",
      "question": "Which term describes: business owned by two or more partners?",
      "options": [
        "Capital account",
        "Current account",
        "Partnership",
        "Goodwill"
      ],
      "answer": 2,
      "explanation": "That description matches Partnership.",
      "id": 105
    },
    {
      "topic": "Partnership",
      "difficulty": "medium",
      "question": "Which term describes: account showing partner's capital?",
      "options": [
        "Current account",
        "Capital account",
        "Goodwill",
        "Bank overdraft"
      ],
      "answer": 1,
      "explanation": "That description matches Capital account.",
      "id": 106
    },
    {
      "topic": "Partnership",
      "difficulty": "medium",
      "question": "Which term describes: account showing partner's drawings and interest?",
      "options": [
        "Current account",
        "Goodwill",
        "Bank overdraft",
        "Capital expenditure"
      ],
      "answer": 0,
      "explanation": "That description matches Current account.",
      "id": 107
    },
    {
      "topic": "Partnership",
      "difficulty": "hard",
      "question": "Which term describes: intangible asset representing reputation?",
      "options": [
        "Bank overdraft",
        "Capital expenditure",
        "Revenue expenditure",
        "Goodwill"
      ],
      "answer": 3,
      "explanation": "That description matches Goodwill.",
      "id": 108
    },
    {
      "topic": "Cash Book",
      "difficulty": "easy",
      "question": "Which term describes: negative bank balance?",
      "options": [
        "Capital expenditure",
        "Revenue expenditure",
        "Bank overdraft",
        "Ledger account"
      ],
      "answer": 2,
      "explanation": "That description matches Bank overdraft.",
      "id": 109
    },
    {
      "topic": "Principles",
      "difficulty": "medium",
      "question": "Which term describes: spending on fixed assets?",
      "options": [
        "Revenue expenditure",
        "Capital expenditure",
        "Ledger account",
        "Source document"
      ],
      "answer": 1,
      "explanation": "That description matches Capital expenditure.",
      "id": 110
    },
    {
      "topic": "Principles",
      "difficulty": "medium",
      "question": "Which term describes: spending on day-to-day operations?",
      "options": [
        "Revenue expenditure",
        "Ledger account",
        "Source document",
        "Invoice"
      ],
      "answer": 0,
      "explanation": "That description matches Revenue expenditure.",
      "id": 111
    },
    {
      "topic": "Ledger",
      "difficulty": "easy",
      "question": "Which term describes: record of transactions for a specific item?",
      "options": [
        "Source document",
        "Invoice",
        "Receipt",
        "Ledger account"
      ],
      "answer": 3,
      "explanation": "That description matches Ledger account.",
      "id": 112
    },
    {
      "topic": "Ledger",
      "difficulty": "easy",
      "question": "Which term describes: document used to record transactions?",
      "options": [
        "Invoice",
        "Receipt",
        "Source document",
        "Debit note"
      ],
      "answer": 2,
      "explanation": "That description matches Source document.",
      "id": 113
    },
    {
      "topic": "Ledger",
      "difficulty": "easy",
      "question": "Which term describes: document showing amount owed?",
      "options": [
        "Receipt",
        "Invoice",
        "Debit note",
        "Credit note"
      ],
      "answer": 1,
      "explanation": "That description matches Invoice.",
      "id": 114
    },
    {
      "topic": "Ledger",
      "difficulty": "easy",
      "question": "Which term describes: document acknowledging payment?",
      "options": [
        "Receipt",
        "Debit note",
        "Credit note",
        "Ledger balance"
      ],
      "answer": 0,
      "explanation": "That description matches Receipt.",
      "id": 115
    },
    {
      "topic": "Ledger",
      "difficulty": "medium",
      "question": "Which term describes: document for goods returned by buyer?",
      "options": [
        "Credit note",
        "Ledger balance",
        "Stock",
        "Debit note"
      ],
      "answer": 3,
      "explanation": "That description matches Debit note.",
      "id": 116
    },
    {
      "topic": "Ledger",
      "difficulty": "medium",
      "question": "Which term describes: document for goods returned to seller?",
      "options": [
        "Ledger balance",
        "Stock",
        "Credit note",
        "Liquidity"
      ],
      "answer": 2,
      "explanation": "That description matches Credit note.",
      "id": 117
    },
    {
      "topic": "Ledger",
      "difficulty": "easy",
      "question": "Which term describes: difference between debit and credit?",
      "options": [
        "Stock",
        "Ledger balance",
        "Liquidity",
        "Current assets"
      ],
      "answer": 1,
      "explanation": "That description matches Ledger balance.",
      "id": 118
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "Which term describes: goods available for sale?",
      "options": [
        "Stock",
        "Liquidity",
        "Current assets",
        "Current liabilities"
      ],
      "answer": 0,
      "explanation": "That description matches Stock.",
      "id": 119
    },
    {
      "topic": "Final Accounts",
      "difficulty": "medium",
      "question": "Which term describes: ability to meet short-term obligations?",
      "options": [
        "Current assets",
        "Current liabilities",
        "Non-current assets",
        "Liquidity"
      ],
      "answer": 3,
      "explanation": "That description matches Liquidity.",
      "id": 120
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "Which term describes: assets convertible to cash within a year?",
      "options": [
        "Current liabilities",
        "Non-current assets",
        "Current assets",
        "Capital reserve"
      ],
      "answer": 2,
      "explanation": "That description matches Current assets.",
      "id": 121
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "Which term describes: obligations due within a year?",
      "options": [
        "Non-current assets",
        "Current liabilities",
        "Capital reserve",
        "Revenue reserve"
      ],
      "answer": 1,
      "explanation": "That description matches Current liabilities.",
      "id": 122
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "Which term describes: long-term assets used in the business?",
      "options": [
        "Non-current assets",
        "Capital reserve",
        "Revenue reserve",
        "Prepayment"
      ],
      "answer": 0,
      "explanation": "That description matches Non-current assets.",
      "id": 123
    },
    {
      "topic": "Final Accounts",
      "difficulty": "hard",
      "question": "Which term describes: reserve not available for distribution?",
      "options": [
        "Revenue reserve",
        "Prepayment",
        "Accrued expense",
        "Capital reserve"
      ],
      "answer": 3,
      "explanation": "That description matches Capital reserve.",
      "id": 124
    },
    {
      "topic": "Final Accounts",
      "difficulty": "medium",
      "question": "Which term describes: reserve created from profits?",
      "options": [
        "Prepayment",
        "Accrued expense",
        "Revenue reserve",
        "Bad debt recovered"
      ],
      "answer": 2,
      "explanation": "That description matches Revenue reserve.",
      "id": 125
    },
    {
      "topic": "Final Accounts",
      "difficulty": "medium",
      "question": "Which term describes: expenses paid in advance?",
      "options": [
        "Accrued expense",
        "Prepayment",
        "Bad debt recovered",
        "Bank charges"
      ],
      "answer": 1,
      "explanation": "That description matches Prepayment.",
      "id": 126
    },
    {
      "topic": "Final Accounts",
      "difficulty": "medium",
      "question": "Which term describes: expense incurred but not yet paid?",
      "options": [
        "Accrued expense",
        "Bad debt recovered",
        "Bank charges",
        "Dishonoured cheque"
      ],
      "answer": 0,
      "explanation": "That description matches Accrued expense.",
      "id": 127
    },
    {
      "topic": "Final Accounts",
      "difficulty": "medium",
      "question": "Which term describes: debt written off but later collected?",
      "options": [
        "Bank charges",
        "Dishonoured cheque",
        "Bank statement",
        "Bad debt recovered"
      ],
      "answer": 3,
      "explanation": "That description matches Bad debt recovered.",
      "id": 128
    },
    {
      "topic": "Cash Book",
      "difficulty": "easy",
      "question": "Which term describes: fees charged by the bank?",
      "options": [
        "Dishonoured cheque",
        "Bank statement",
        "Bank charges",
        "Receivables"
      ],
      "answer": 2,
      "explanation": "That description matches Bank charges.",
      "id": 129
    },
    {
      "topic": "Cash Book",
      "difficulty": "medium",
      "question": "Which term describes: cheque returned unpaid by the bank?",
      "options": [
        "Bank statement",
        "Dishonoured cheque",
        "Receivables",
        "Payables"
      ],
      "answer": 1,
      "explanation": "That description matches Dishonoured cheque.",
      "id": 130
    },
    {
      "topic": "Cash Book",
      "difficulty": "easy",
      "question": "Which term describes: record of bank transactions?",
      "options": [
        "Bank statement",
        "Receivables",
        "Payables",
        "Contra entry"
      ],
      "answer": 0,
      "explanation": "That description matches Bank statement.",
      "id": 131
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "Which term describes: amounts owed by customers?",
      "options": [
        "Payables",
        "Contra entry",
        "Trial balance agreement",
        "Receivables"
      ],
      "answer": 3,
      "explanation": "That description matches Receivables.",
      "id": 132
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "Which term describes: amounts owed to suppliers?",
      "options": [
        "Contra entry",
        "Trial balance agreement",
        "Payables",
        "Closing stock"
      ],
      "answer": 2,
      "explanation": "That description matches Payables.",
      "id": 133
    },
    {
      "topic": "Cash Book",
      "difficulty": "medium",
      "question": "Which term describes: entry affecting both cash and bank?",
      "options": [
        "Trial balance agreement",
        "Contra entry",
        "Closing stock",
        "Opening stock"
      ],
      "answer": 1,
      "explanation": "That description matches Contra entry.",
      "id": 134
    },
    {
      "topic": "Ledger",
      "difficulty": "easy",
      "question": "Which term describes: equality of debit and credit totals?",
      "options": [
        "Trial balance agreement",
        "Closing stock",
        "Opening stock",
        "Gross loss"
      ],
      "answer": 0,
      "explanation": "That description matches Trial balance agreement.",
      "id": 135
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "Which term describes: unsold goods at period end?",
      "options": [
        "Opening stock",
        "Gross loss",
        "Net loss",
        "Closing stock"
      ],
      "answer": 3,
      "explanation": "That description matches Closing stock.",
      "id": 136
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "Which term describes: goods at the start of the period?",
      "options": [
        "Gross loss",
        "Net loss",
        "Opening stock",
        "Cash flow"
      ],
      "answer": 2,
      "explanation": "That description matches Opening stock.",
      "id": 137
    },
    {
      "topic": "Final Accounts",
      "difficulty": "medium",
      "question": "Which term describes: cost of sales exceeds sales?",
      "options": [
        "Net loss",
        "Gross loss",
        "Cash flow",
        "Business entity concept"
      ],
      "answer": 1,
      "explanation": "That description matches Gross loss.",
      "id": 138
    },
    {
      "topic": "Final Accounts",
      "difficulty": "medium",
      "question": "Which term describes: expenses exceed gross profit?",
      "options": [
        "Net loss",
        "Cash flow",
        "Business entity concept",
        "Going concern"
      ],
      "answer": 0,
      "explanation": "That description matches Net loss.",
      "id": 139
    },
    {
      "topic": "Final Accounts",
      "difficulty": "medium",
      "question": "Which term describes: movement of cash in and out of a business?",
      "options": [
        "Business entity concept",
        "Going concern",
        "Accrual",
        "Cash flow"
      ],
      "answer": 3,
      "explanation": "That description matches Cash flow.",
      "id": 140
    },
    {
      "topic": "Depreciation",
      "difficulty": "medium",
      "question": "A machine costs 10000 and has a scrap value of 1000 after 5 years. Annual straight-line depreciation is ___.",
      "options": [
        "2000",
        "1500",
        "1800",
        "2200"
      ],
      "answer": 2,
      "explanation": "Depreciation = (10000-1000)/5.",
      "id": 141
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "Sales are 50000 and cost of sales is 35000. Gross profit is ___.",
      "options": [
        "20000",
        "15000",
        "14000",
        "12000"
      ],
      "answer": 1,
      "explanation": "Gross profit = sales - cost of sales.",
      "id": 142
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "Gross profit is 15000 and expenses are 6000. Net profit is ___.",
      "options": [
        "9000",
        "6000",
        "12000",
        "21000"
      ],
      "answer": 0,
      "explanation": "Net profit = gross profit - expenses.",
      "id": 143
    },
    {
      "topic": "Ledger",
      "difficulty": "medium",
      "question": "A business buys goods on credit from Okon. The account to credit is ___.",
      "options": [
        "Purchases account",
        "Cash account",
        "Sales account",
        "Okon's account"
      ],
      "answer": 3,
      "explanation": "Credit supplier's account for credit purchase.",
      "id": 144
    },
    {
      "topic": "Errors",
      "difficulty": "medium",
      "question": "If total debits are 120000 and total credits are 119000, the suspense account has ___.",
      "options": [
        "1000 credit balance",
        "1000 debit balance",
        "2000 debit balance",
        "2000 credit balance"
      ],
      "answer": 0,
      "explanation": "Difference is 1000; suspense is credited to balance.",
      "id": 145
    },
    {
      "topic": "Final Accounts",
      "difficulty": "medium",
      "question": "Current assets are 40000 and current liabilities are 20000. The current ratio is ___.",
      "options": [
        "1:2",
        "2:1",
        "3:1",
        "1:1"
      ],
      "answer": 1,
      "explanation": "Current ratio = 40000/20000.",
      "id": 146
    },
    {
      "topic": "Final Accounts",
      "difficulty": "medium",
      "question": "Electricity expense of 2000 is unpaid at year end. This should be ___.",
      "options": [
        "added to expenses as accrual",
        "deducted from expenses",
        "ignored",
        "treated as prepaid"
      ],
      "answer": 0,
      "explanation": "Unpaid expense is an accrual.",
      "id": 147
    },
    {
      "topic": "Ledger",
      "difficulty": "hard",
      "question": "A bad debt of 1500 was written off and later recovered in cash. The correct treatment is to ___.",
      "options": [
        "debit bad debt and credit cash",
        "debit sales and credit cash",
        "debit purchases and credit cash",
        "debit cash and credit bad debt recovered"
      ],
      "answer": 3,
      "explanation": "Recovery increases cash and income.",
      "id": 148
    },
    {
      "topic": "Cash Book",
      "difficulty": "medium",
      "question": "A cheque issued but not yet presented will make the bank balance in the cash book ___.",
      "options": [
        "higher than the bank statement",
        "equal to the bank statement",
        "lower than the bank statement",
        "unaffected"
      ],
      "answer": 2,
      "explanation": "Unpresented cheques reduce cash book balance.",
      "id": 149
    },
    {
      "topic": "Final Accounts",
      "difficulty": "easy",
      "question": "Owner's capital is 50000 and drawings are 3000. Closing capital is ___.",
      "options": [
        "53000",
        "47000",
        "50000",
        "48000"
      ],
      "answer": 1,
      "explanation": "Drawings reduce capital.",
      "id": 150
    }
  ],
  "agricultural_science": [
    {
      "topic": "Soil Science",
      "difficulty": "easy",
      "question": "The term 'Soil texture' refers to ___.",
      "options": [
        "arrangement of soil particles",
        "proportion of sand, silt and clay in soil",
        "decayed organic matter in soil",
        "measure of acidity or alkalinity of soil"
      ],
      "answer": 1,
      "explanation": "Soil texture means proportion of sand, silt and clay in soil.",
      "id": 1
    },
    {
      "topic": "Soil Science",
      "difficulty": "easy",
      "question": "The term 'Soil structure' refers to ___.",
      "options": [
        "decayed organic matter in soil",
        "measure of acidity or alkalinity of soil",
        "substance that supplies plant nutrients",
        "arrangement of soil particles"
      ],
      "answer": 3,
      "explanation": "Soil structure means arrangement of soil particles.",
      "id": 2
    },
    {
      "topic": "Soil Science",
      "difficulty": "easy",
      "question": "The term 'Humus' refers to ___.",
      "options": [
        "decayed organic matter in soil",
        "measure of acidity or alkalinity of soil",
        "substance that supplies plant nutrients",
        "organic waste used to improve soil"
      ],
      "answer": 0,
      "explanation": "Humus means decayed organic matter in soil.",
      "id": 3
    },
    {
      "topic": "Soil Science",
      "difficulty": "medium",
      "question": "The term 'Soil pH' refers to ___.",
      "options": [
        "substance that supplies plant nutrients",
        "organic waste used to improve soil",
        "measure of acidity or alkalinity of soil",
        "decomposed organic matter used as fertilizer"
      ],
      "answer": 2,
      "explanation": "Soil pH means measure of acidity or alkalinity of soil.",
      "id": 4
    },
    {
      "topic": "Soil Science",
      "difficulty": "easy",
      "question": "The term 'Fertilizer' refers to ___.",
      "options": [
        "organic waste used to improve soil",
        "substance that supplies plant nutrients",
        "decomposed organic matter used as fertilizer",
        "artificial application of water to crops"
      ],
      "answer": 1,
      "explanation": "Fertilizer means substance that supplies plant nutrients.",
      "id": 5
    },
    {
      "topic": "Soil Science",
      "difficulty": "easy",
      "question": "The term 'Manure' refers to ___.",
      "options": [
        "decomposed organic matter used as fertilizer",
        "artificial application of water to crops",
        "growing different crops in sequence",
        "organic waste used to improve soil"
      ],
      "answer": 3,
      "explanation": "Manure means organic waste used to improve soil.",
      "id": 6
    },
    {
      "topic": "Soil Science",
      "difficulty": "easy",
      "question": "The term 'Compost' refers to ___.",
      "options": [
        "decomposed organic matter used as fertilizer",
        "artificial application of water to crops",
        "growing different crops in sequence",
        "growing two or more crops on same land"
      ],
      "answer": 0,
      "explanation": "Compost means decomposed organic matter used as fertilizer.",
      "id": 7
    },
    {
      "topic": "Crop Production",
      "difficulty": "easy",
      "question": "The term 'Irrigation' refers to ___.",
      "options": [
        "growing different crops in sequence",
        "growing two or more crops on same land",
        "artificial application of water to crops",
        "growing a single crop on land"
      ],
      "answer": 2,
      "explanation": "Irrigation means artificial application of water to crops.",
      "id": 8
    },
    {
      "topic": "Crop Production",
      "difficulty": "medium",
      "question": "The term 'Crop rotation' refers to ___.",
      "options": [
        "growing two or more crops on same land",
        "growing different crops in sequence",
        "growing a single crop on land",
        "removal of unwanted plants"
      ],
      "answer": 1,
      "explanation": "Crop rotation means growing different crops in sequence.",
      "id": 9
    },
    {
      "topic": "Crop Production",
      "difficulty": "medium",
      "question": "The term 'Mixed cropping' refers to ___.",
      "options": [
        "growing a single crop on land",
        "removal of unwanted plants",
        "gathering mature crops",
        "growing two or more crops on same land"
      ],
      "answer": 3,
      "explanation": "Mixed cropping means growing two or more crops on same land.",
      "id": 10
    },
    {
      "topic": "Crop Production",
      "difficulty": "easy",
      "question": "The term 'Monocropping' refers to ___.",
      "options": [
        "growing a single crop on land",
        "removal of unwanted plants",
        "gathering mature crops",
        "animal with a four-chambered stomach"
      ],
      "answer": 0,
      "explanation": "Monocropping means growing a single crop on land.",
      "id": 11
    },
    {
      "topic": "Crop Production",
      "difficulty": "easy",
      "question": "The term 'Weeding' refers to ___.",
      "options": [
        "gathering mature crops",
        "animal with a four-chambered stomach",
        "removal of unwanted plants",
        "domestic birds kept for meat or eggs"
      ],
      "answer": 2,
      "explanation": "Weeding means removal of unwanted plants.",
      "id": 12
    },
    {
      "topic": "Crop Production",
      "difficulty": "easy",
      "question": "The term 'Harvesting' refers to ___.",
      "options": [
        "animal with a four-chambered stomach",
        "gathering mature crops",
        "domestic birds kept for meat or eggs",
        "chicken raised for meat"
      ],
      "answer": 1,
      "explanation": "Harvesting means gathering mature crops.",
      "id": 13
    },
    {
      "topic": "Livestock",
      "difficulty": "medium",
      "question": "The term 'Ruminant' refers to ___.",
      "options": [
        "domestic birds kept for meat or eggs",
        "chicken raised for meat",
        "chicken raised for eggs",
        "animal with a four-chambered stomach"
      ],
      "answer": 3,
      "explanation": "Ruminant means animal with a four-chambered stomach.",
      "id": 14
    },
    {
      "topic": "Livestock",
      "difficulty": "easy",
      "question": "The term 'Poultry' refers to ___.",
      "options": [
        "domestic birds kept for meat or eggs",
        "chicken raised for meat",
        "chicken raised for eggs",
        "administration of vaccine to prevent disease"
      ],
      "answer": 0,
      "explanation": "Poultry means domestic birds kept for meat or eggs.",
      "id": 15
    },
    {
      "topic": "Livestock",
      "difficulty": "easy",
      "question": "The term 'Broiler' refers to ___.",
      "options": [
        "chicken raised for eggs",
        "administration of vaccine to prevent disease",
        "chicken raised for meat",
        "introducing semen into female without mating"
      ],
      "answer": 2,
      "explanation": "Broiler means chicken raised for meat.",
      "id": 16
    },
    {
      "topic": "Livestock",
      "difficulty": "easy",
      "question": "The term 'Layer' refers to ___.",
      "options": [
        "administration of vaccine to prevent disease",
        "chicken raised for eggs",
        "introducing semen into female without mating",
        "selective mating to improve traits"
      ],
      "answer": 1,
      "explanation": "Layer means chicken raised for eggs.",
      "id": 17
    },
    {
      "topic": "Livestock",
      "difficulty": "medium",
      "question": "The term 'Vaccination' refers to ___.",
      "options": [
        "introducing semen into female without mating",
        "selective mating to improve traits",
        "organism that damages crops or livestock",
        "administration of vaccine to prevent disease"
      ],
      "answer": 3,
      "explanation": "Vaccination means administration of vaccine to prevent disease.",
      "id": 18
    },
    {
      "topic": "Livestock",
      "difficulty": "hard",
      "question": "The term 'Artificial insemination' refers to ___.",
      "options": [
        "introducing semen into female without mating",
        "selective mating to improve traits",
        "organism that damages crops or livestock",
        "abnormal condition affecting an organism"
      ],
      "answer": 0,
      "explanation": "Artificial insemination means introducing semen into female without mating.",
      "id": 19
    },
    {
      "topic": "Livestock",
      "difficulty": "medium",
      "question": "The term 'Breeding' refers to ___.",
      "options": [
        "organism that damages crops or livestock",
        "abnormal condition affecting an organism",
        "selective mating to improve traits",
        "chemical used to kill weeds"
      ],
      "answer": 2,
      "explanation": "Breeding means selective mating to improve traits.",
      "id": 20
    },
    {
      "topic": "Pests",
      "difficulty": "easy",
      "question": "The term 'Pest' refers to ___.",
      "options": [
        "abnormal condition affecting an organism",
        "organism that damages crops or livestock",
        "chemical used to kill weeds",
        "chemical used to kill insects"
      ],
      "answer": 1,
      "explanation": "Pest means organism that damages crops or livestock.",
      "id": 21
    },
    {
      "topic": "Pests",
      "difficulty": "easy",
      "question": "The term 'Disease' refers to ___.",
      "options": [
        "chemical used to kill weeds",
        "chemical used to kill insects",
        "chemical used to control fungi",
        "abnormal condition affecting an organism"
      ],
      "answer": 3,
      "explanation": "Disease means abnormal condition affecting an organism.",
      "id": 22
    },
    {
      "topic": "Pests",
      "difficulty": "medium",
      "question": "The term 'Herbicide' refers to ___.",
      "options": [
        "chemical used to kill weeds",
        "chemical used to kill insects",
        "chemical used to control fungi",
        "simple implements used in farming"
      ],
      "answer": 0,
      "explanation": "Herbicide means chemical used to kill weeds.",
      "id": 23
    },
    {
      "topic": "Pests",
      "difficulty": "medium",
      "question": "The term 'Insecticide' refers to ___.",
      "options": [
        "chemical used to control fungi",
        "simple implements used in farming",
        "chemical used to kill insects",
        "machine used to pull farm implements"
      ],
      "answer": 2,
      "explanation": "Insecticide means chemical used to kill insects.",
      "id": 24
    },
    {
      "topic": "Pests",
      "difficulty": "medium",
      "question": "The term 'Fungicide' refers to ___.",
      "options": [
        "simple implements used in farming",
        "chemical used to control fungi",
        "machine used to pull farm implements",
        "machine used to harvest crops"
      ],
      "answer": 1,
      "explanation": "Fungicide means chemical used to control fungi.",
      "id": 25
    },
    {
      "topic": "Farm Tools",
      "difficulty": "easy",
      "question": "The term 'Farm tools' refers to ___.",
      "options": [
        "machine used to pull farm implements",
        "machine used to harvest crops",
        "tool used to turn the soil",
        "simple implements used in farming"
      ],
      "answer": 3,
      "explanation": "Farm tools means simple implements used in farming.",
      "id": 26
    },
    {
      "topic": "Farm Tools",
      "difficulty": "easy",
      "question": "The term 'Tractor' refers to ___.",
      "options": [
        "machine used to pull farm implements",
        "machine used to harvest crops",
        "tool used to turn the soil",
        "tool used to break soil clods"
      ],
      "answer": 0,
      "explanation": "Tractor means machine used to pull farm implements.",
      "id": 27
    },
    {
      "topic": "Farm Tools",
      "difficulty": "medium",
      "question": "The term 'Harvester' refers to ___.",
      "options": [
        "tool used to turn the soil",
        "tool used to break soil clods",
        "machine used to harvest crops",
        "food given to animals"
      ],
      "answer": 2,
      "explanation": "Harvester means machine used to harvest crops.",
      "id": 28
    },
    {
      "topic": "Farm Tools",
      "difficulty": "easy",
      "question": "The term 'Plough' refers to ___.",
      "options": [
        "tool used to break soil clods",
        "tool used to turn the soil",
        "food given to animals",
        "land covered with grass for grazing"
      ],
      "answer": 1,
      "explanation": "Plough means tool used to turn the soil.",
      "id": 29
    },
    {
      "topic": "Farm Tools",
      "difficulty": "easy",
      "question": "The term 'Harrow' refers to ___.",
      "options": [
        "food given to animals",
        "land covered with grass for grazing",
        "preserved green fodder",
        "tool used to break soil clods"
      ],
      "answer": 3,
      "explanation": "Harrow means tool used to break soil clods.",
      "id": 30
    },
    {
      "topic": "Livestock",
      "difficulty": "easy",
      "question": "The term 'Livestock feed' refers to ___.",
      "options": [
        "food given to animals",
        "land covered with grass for grazing",
        "preserved green fodder",
        "documents showing farm operations"
      ],
      "answer": 0,
      "explanation": "Livestock feed means food given to animals.",
      "id": 31
    },
    {
      "topic": "Livestock",
      "difficulty": "easy",
      "question": "The term 'Pasture' refers to ___.",
      "options": [
        "preserved green fodder",
        "documents showing farm operations",
        "land covered with grass for grazing",
        "plan of expected farm income and expenses"
      ],
      "answer": 2,
      "explanation": "Pasture means land covered with grass for grazing.",
      "id": 32
    },
    {
      "topic": "Livestock",
      "difficulty": "medium",
      "question": "The term 'Silage' refers to ___.",
      "options": [
        "documents showing farm operations",
        "preserved green fodder",
        "plan of expected farm income and expenses",
        "advisory service to farmers"
      ],
      "answer": 1,
      "explanation": "Silage means preserved green fodder.",
      "id": 33
    },
    {
      "topic": "Farm Management",
      "difficulty": "medium",
      "question": "The term 'Farm records' refers to ___.",
      "options": [
        "plan of expected farm income and expenses",
        "advisory service to farmers",
        "movement of produce to consumers",
        "documents showing farm operations"
      ],
      "answer": 3,
      "explanation": "Farm records means documents showing farm operations.",
      "id": 34
    },
    {
      "topic": "Farm Management",
      "difficulty": "hard",
      "question": "The term 'Farm budget' refers to ___.",
      "options": [
        "plan of expected farm income and expenses",
        "advisory service to farmers",
        "movement of produce to consumers",
        "removal of topsoil by wind or water"
      ],
      "answer": 0,
      "explanation": "Farm budget means plan of expected farm income and expenses.",
      "id": 35
    },
    {
      "topic": "Farm Management",
      "difficulty": "medium",
      "question": "The term 'Extension service' refers to ___.",
      "options": [
        "movement of produce to consumers",
        "removal of topsoil by wind or water",
        "advisory service to farmers",
        "covering soil to conserve moisture"
      ],
      "answer": 2,
      "explanation": "Extension service means advisory service to farmers.",
      "id": 36
    },
    {
      "topic": "Farm Management",
      "difficulty": "medium",
      "question": "The term 'Agricultural marketing' refers to ___.",
      "options": [
        "removal of topsoil by wind or water",
        "movement of produce to consumers",
        "covering soil to conserve moisture",
        "joining parts of two plants"
      ],
      "answer": 1,
      "explanation": "Agricultural marketing means movement of produce to consumers.",
      "id": 37
    },
    {
      "topic": "Soil Science",
      "difficulty": "medium",
      "question": "The term 'Erosion' refers to ___.",
      "options": [
        "covering soil to conserve moisture",
        "joining parts of two plants",
        "treating seeds before planting",
        "removal of topsoil by wind or water"
      ],
      "answer": 3,
      "explanation": "Erosion means removal of topsoil by wind or water.",
      "id": 38
    },
    {
      "topic": "Crop Production",
      "difficulty": "medium",
      "question": "The term 'Mulching' refers to ___.",
      "options": [
        "covering soil to conserve moisture",
        "joining parts of two plants",
        "treating seeds before planting",
        "place where seedlings are raised"
      ],
      "answer": 0,
      "explanation": "Mulching means covering soil to conserve moisture.",
      "id": 39
    },
    {
      "topic": "Crop Production",
      "difficulty": "hard",
      "question": "The term 'Grafting' refers to ___.",
      "options": [
        "treating seeds before planting",
        "place where seedlings are raised",
        "joining parts of two plants",
        "plant that fixes nitrogen"
      ],
      "answer": 2,
      "explanation": "Grafting means joining parts of two plants.",
      "id": 40
    },
    {
      "topic": "Crop Production",
      "difficulty": "medium",
      "question": "The term 'Seed dressing' refers to ___.",
      "options": [
        "place where seedlings are raised",
        "treating seeds before planting",
        "plant that fixes nitrogen",
        "crop grown to improve soil fertility"
      ],
      "answer": 1,
      "explanation": "Seed dressing means treating seeds before planting.",
      "id": 41
    },
    {
      "topic": "Crop Production",
      "difficulty": "easy",
      "question": "The term 'Nursery' refers to ___.",
      "options": [
        "plant that fixes nitrogen",
        "crop grown to improve soil fertility",
        "artificial enclosure for fish culture",
        "place where seedlings are raised"
      ],
      "answer": 3,
      "explanation": "Nursery means place where seedlings are raised.",
      "id": 42
    },
    {
      "topic": "Crop Production",
      "difficulty": "medium",
      "question": "The term 'Legume' refers to ___.",
      "options": [
        "plant that fixes nitrogen",
        "crop grown to improve soil fertility",
        "artificial enclosure for fish culture",
        "young fish used for stocking"
      ],
      "answer": 0,
      "explanation": "Legume means plant that fixes nitrogen.",
      "id": 43
    },
    {
      "topic": "Soil Science",
      "difficulty": "medium",
      "question": "The term 'Green manure' refers to ___.",
      "options": [
        "artificial enclosure for fish culture",
        "young fish used for stocking",
        "crop grown to improve soil fertility",
        "management of forest resources"
      ],
      "answer": 2,
      "explanation": "Green manure means crop grown to improve soil fertility.",
      "id": 44
    },
    {
      "topic": "Fisheries",
      "difficulty": "easy",
      "question": "The term 'Fish pond' refers to ___.",
      "options": [
        "young fish used for stocking",
        "artificial enclosure for fish culture",
        "management of forest resources",
        "planting trees in non-forest areas"
      ],
      "answer": 1,
      "explanation": "Fish pond means artificial enclosure for fish culture.",
      "id": 45
    },
    {
      "topic": "Fisheries",
      "difficulty": "medium",
      "question": "The term 'Fingerlings' refers to ___.",
      "options": [
        "management of forest resources",
        "planting trees in non-forest areas",
        "removal of forest cover",
        "young fish used for stocking"
      ],
      "answer": 3,
      "explanation": "Fingerlings means young fish used for stocking.",
      "id": 46
    },
    {
      "topic": "Forestry",
      "difficulty": "medium",
      "question": "The term 'Forestry' refers to ___.",
      "options": [
        "management of forest resources",
        "planting trees in non-forest areas",
        "removal of forest cover",
        "practices to prevent soil loss"
      ],
      "answer": 0,
      "explanation": "Forestry means management of forest resources.",
      "id": 47
    },
    {
      "topic": "Forestry",
      "difficulty": "medium",
      "question": "The term 'Afforestation' refers to ___.",
      "options": [
        "removal of forest cover",
        "practices to prevent soil loss",
        "planting trees in non-forest areas",
        "vertical section showing soil horizons"
      ],
      "answer": 2,
      "explanation": "Afforestation means planting trees in non-forest areas.",
      "id": 48
    },
    {
      "topic": "Forestry",
      "difficulty": "medium",
      "question": "The term 'Deforestation' refers to ___.",
      "options": [
        "practices to prevent soil loss",
        "removal of forest cover",
        "vertical section showing soil horizons",
        "uppermost fertile layer of soil"
      ],
      "answer": 1,
      "explanation": "Deforestation means removal of forest cover.",
      "id": 49
    },
    {
      "topic": "Soil Science",
      "difficulty": "medium",
      "question": "The term 'Soil conservation' refers to ___.",
      "options": [
        "vertical section showing soil horizons",
        "uppermost fertile layer of soil",
        "layer of soil beneath topsoil",
        "practices to prevent soil loss"
      ],
      "answer": 3,
      "explanation": "Soil conservation means practices to prevent soil loss.",
      "id": 50
    },
    {
      "topic": "Soil Science",
      "difficulty": "medium",
      "question": "The term 'Soil profile' refers to ___.",
      "options": [
        "vertical section showing soil horizons",
        "uppermost fertile layer of soil",
        "layer of soil beneath topsoil",
        "distinct layer within the soil"
      ],
      "answer": 0,
      "explanation": "Soil profile means vertical section showing soil horizons.",
      "id": 51
    },
    {
      "topic": "Soil Science",
      "difficulty": "easy",
      "question": "The term 'Topsoil' refers to ___.",
      "options": [
        "layer of soil beneath topsoil",
        "distinct layer within the soil",
        "uppermost fertile layer of soil",
        "ability of soil to support plant growth"
      ],
      "answer": 2,
      "explanation": "Topsoil means uppermost fertile layer of soil.",
      "id": 52
    },
    {
      "topic": "Soil Science",
      "difficulty": "easy",
      "question": "The term 'Subsoil' refers to ___.",
      "options": [
        "distinct layer within the soil",
        "layer of soil beneath topsoil",
        "ability of soil to support plant growth",
        "plowing along contours to reduce erosion"
      ],
      "answer": 1,
      "explanation": "Subsoil means layer of soil beneath topsoil.",
      "id": 53
    },
    {
      "topic": "Soil Science",
      "difficulty": "medium",
      "question": "The term 'Soil horizon' refers to ___.",
      "options": [
        "ability of soil to support plant growth",
        "plowing along contours to reduce erosion",
        "distance between plants in a field",
        "distinct layer within the soil"
      ],
      "answer": 3,
      "explanation": "Soil horizon means distinct layer within the soil.",
      "id": 54
    },
    {
      "topic": "Soil Science",
      "difficulty": "easy",
      "question": "The term 'Soil fertility' refers to ___.",
      "options": [
        "ability of soil to support plant growth",
        "plowing along contours to reduce erosion",
        "distance between plants in a field",
        "removal of excess seedlings"
      ],
      "answer": 0,
      "explanation": "Soil fertility means ability of soil to support plant growth.",
      "id": 55
    },
    {
      "topic": "Soil Science",
      "difficulty": "medium",
      "question": "The term 'Contour plowing' refers to ___.",
      "options": [
        "distance between plants in a field",
        "removal of excess seedlings",
        "plowing along contours to reduce erosion",
        "cutting plant parts to improve growth"
      ],
      "answer": 2,
      "explanation": "Contour plowing means plowing along contours to reduce erosion.",
      "id": 56
    },
    {
      "topic": "Crop Production",
      "difficulty": "easy",
      "question": "The term 'Crop spacing' refers to ___.",
      "options": [
        "removal of excess seedlings",
        "distance between plants in a field",
        "cutting plant parts to improve growth",
        "separating young animals from their mothers"
      ],
      "answer": 1,
      "explanation": "Crop spacing means distance between plants in a field.",
      "id": 57
    },
    {
      "topic": "Crop Production",
      "difficulty": "easy",
      "question": "The term 'Thinning' refers to ___.",
      "options": [
        "cutting plant parts to improve growth",
        "separating young animals from their mothers",
        "period of pregnancy in animals",
        "removal of excess seedlings"
      ],
      "answer": 3,
      "explanation": "Thinning means removal of excess seedlings.",
      "id": 58
    },
    {
      "topic": "Crop Production",
      "difficulty": "medium",
      "question": "The term 'Pruning' refers to ___.",
      "options": [
        "cutting plant parts to improve growth",
        "separating young animals from their mothers",
        "period of pregnancy in animals",
        "removal of unproductive animals"
      ],
      "answer": 0,
      "explanation": "Pruning means cutting plant parts to improve growth.",
      "id": 59
    },
    {
      "topic": "Livestock",
      "difficulty": "medium",
      "question": "The term 'Weaning' refers to ___.",
      "options": [
        "period of pregnancy in animals",
        "removal of unproductive animals",
        "separating young animals from their mothers",
        "trimming beaks of poultry to reduce pecking"
      ],
      "answer": 2,
      "explanation": "Weaning means separating young animals from their mothers.",
      "id": 60
    },
    {
      "topic": "Livestock",
      "difficulty": "medium",
      "question": "The term 'Gestation' refers to ___.",
      "options": [
        "removal of unproductive animals",
        "period of pregnancy in animals",
        "trimming beaks of poultry to reduce pecking",
        "rearing livestock on large grazing areas"
      ],
      "answer": 1,
      "explanation": "Gestation means period of pregnancy in animals.",
      "id": 61
    },
    {
      "topic": "Livestock",
      "difficulty": "medium",
      "question": "The term 'Culling' refers to ___.",
      "options": [
        "trimming beaks of poultry to reduce pecking",
        "rearing livestock on large grazing areas",
        "mating animals of different breeds",
        "removal of unproductive animals"
      ],
      "answer": 3,
      "explanation": "Culling means removal of unproductive animals.",
      "id": 62
    },
    {
      "topic": "Livestock",
      "difficulty": "hard",
      "question": "The term 'Debeaking' refers to ___.",
      "options": [
        "trimming beaks of poultry to reduce pecking",
        "rearing livestock on large grazing areas",
        "mating animals of different breeds",
        "isolating animals to prevent disease spread"
      ],
      "answer": 0,
      "explanation": "Debeaking means trimming beaks of poultry to reduce pecking.",
      "id": 63
    },
    {
      "topic": "Livestock",
      "difficulty": "medium",
      "question": "The term 'Ranching' refers to ___.",
      "options": [
        "mating animals of different breeds",
        "isolating animals to prevent disease spread",
        "rearing livestock on large grazing areas",
        "farming of aquatic organisms"
      ],
      "answer": 2,
      "explanation": "Ranching means rearing livestock on large grazing areas.",
      "id": 64
    },
    {
      "topic": "Livestock",
      "difficulty": "medium",
      "question": "The term 'Crossbreeding' refers to ___.",
      "options": [
        "isolating animals to prevent disease spread",
        "mating animals of different breeds",
        "farming of aquatic organisms",
        "introducing fish into a pond"
      ],
      "answer": 1,
      "explanation": "Crossbreeding means mating animals of different breeds.",
      "id": 65
    },
    {
      "topic": "Livestock",
      "difficulty": "hard",
      "question": "The term 'Quarantine' refers to ___.",
      "options": [
        "farming of aquatic organisms",
        "introducing fish into a pond",
        "irrigation using slow water droplets",
        "isolating animals to prevent disease spread"
      ],
      "answer": 3,
      "explanation": "Quarantine means isolating animals to prevent disease spread.",
      "id": 66
    },
    {
      "topic": "Fisheries",
      "difficulty": "medium",
      "question": "The term 'Aquaculture' refers to ___.",
      "options": [
        "farming of aquatic organisms",
        "introducing fish into a pond",
        "irrigation using slow water droplets",
        "irrigation by spraying water"
      ],
      "answer": 0,
      "explanation": "Aquaculture means farming of aquatic organisms.",
      "id": 67
    },
    {
      "topic": "Fisheries",
      "difficulty": "medium",
      "question": "The term 'Stocking' refers to ___.",
      "options": [
        "irrigation using slow water droplets",
        "irrigation by spraying water",
        "introducing fish into a pond",
        "proportion of sand, silt and clay in soil"
      ],
      "answer": 2,
      "explanation": "Stocking means introducing fish into a pond.",
      "id": 68
    },
    {
      "topic": "Crop Production",
      "difficulty": "hard",
      "question": "The term 'Drip irrigation' refers to ___.",
      "options": [
        "irrigation by spraying water",
        "irrigation using slow water droplets",
        "proportion of sand, silt and clay in soil",
        "arrangement of soil particles"
      ],
      "answer": 1,
      "explanation": "Drip irrigation means irrigation using slow water droplets.",
      "id": 69
    },
    {
      "topic": "Crop Production",
      "difficulty": "medium",
      "question": "The term 'Sprinkler irrigation' refers to ___.",
      "options": [
        "proportion of sand, silt and clay in soil",
        "arrangement of soil particles",
        "decayed organic matter in soil",
        "irrigation by spraying water"
      ],
      "answer": 3,
      "explanation": "Sprinkler irrigation means irrigation by spraying water.",
      "id": 70
    },
    {
      "topic": "Soil Science",
      "difficulty": "easy",
      "question": "Which term describes: proportion of sand, silt and clay in soil?",
      "options": [
        "Soil texture",
        "Soil structure",
        "Humus",
        "Soil pH"
      ],
      "answer": 0,
      "explanation": "That description matches Soil texture.",
      "id": 71
    },
    {
      "topic": "Soil Science",
      "difficulty": "easy",
      "question": "Which term describes: arrangement of soil particles?",
      "options": [
        "Humus",
        "Soil pH",
        "Soil structure",
        "Fertilizer"
      ],
      "answer": 2,
      "explanation": "That description matches Soil structure.",
      "id": 72
    },
    {
      "topic": "Soil Science",
      "difficulty": "easy",
      "question": "Which term describes: decayed organic matter in soil?",
      "options": [
        "Soil pH",
        "Humus",
        "Fertilizer",
        "Manure"
      ],
      "answer": 1,
      "explanation": "That description matches Humus.",
      "id": 73
    },
    {
      "topic": "Soil Science",
      "difficulty": "medium",
      "question": "Which term describes: measure of acidity or alkalinity of soil?",
      "options": [
        "Fertilizer",
        "Manure",
        "Compost",
        "Soil pH"
      ],
      "answer": 3,
      "explanation": "That description matches Soil pH.",
      "id": 74
    },
    {
      "topic": "Soil Science",
      "difficulty": "easy",
      "question": "Which term describes: substance that supplies plant nutrients?",
      "options": [
        "Fertilizer",
        "Manure",
        "Compost",
        "Irrigation"
      ],
      "answer": 0,
      "explanation": "That description matches Fertilizer.",
      "id": 75
    },
    {
      "topic": "Soil Science",
      "difficulty": "easy",
      "question": "Which term describes: organic waste used to improve soil?",
      "options": [
        "Compost",
        "Irrigation",
        "Manure",
        "Crop rotation"
      ],
      "answer": 2,
      "explanation": "That description matches Manure.",
      "id": 76
    },
    {
      "topic": "Soil Science",
      "difficulty": "easy",
      "question": "Which term describes: decomposed organic matter used as fertilizer?",
      "options": [
        "Irrigation",
        "Compost",
        "Crop rotation",
        "Mixed cropping"
      ],
      "answer": 1,
      "explanation": "That description matches Compost.",
      "id": 77
    },
    {
      "topic": "Crop Production",
      "difficulty": "easy",
      "question": "Which term describes: artificial application of water to crops?",
      "options": [
        "Crop rotation",
        "Mixed cropping",
        "Monocropping",
        "Irrigation"
      ],
      "answer": 3,
      "explanation": "That description matches Irrigation.",
      "id": 78
    },
    {
      "topic": "Crop Production",
      "difficulty": "medium",
      "question": "Which term describes: growing different crops in sequence?",
      "options": [
        "Crop rotation",
        "Mixed cropping",
        "Monocropping",
        "Weeding"
      ],
      "answer": 0,
      "explanation": "That description matches Crop rotation.",
      "id": 79
    },
    {
      "topic": "Crop Production",
      "difficulty": "medium",
      "question": "Which term describes: growing two or more crops on same land?",
      "options": [
        "Monocropping",
        "Weeding",
        "Mixed cropping",
        "Harvesting"
      ],
      "answer": 2,
      "explanation": "That description matches Mixed cropping.",
      "id": 80
    },
    {
      "topic": "Crop Production",
      "difficulty": "easy",
      "question": "Which term describes: growing a single crop on land?",
      "options": [
        "Weeding",
        "Monocropping",
        "Harvesting",
        "Ruminant"
      ],
      "answer": 1,
      "explanation": "That description matches Monocropping.",
      "id": 81
    },
    {
      "topic": "Crop Production",
      "difficulty": "easy",
      "question": "Which term describes: removal of unwanted plants?",
      "options": [
        "Harvesting",
        "Ruminant",
        "Poultry",
        "Weeding"
      ],
      "answer": 3,
      "explanation": "That description matches Weeding.",
      "id": 82
    },
    {
      "topic": "Crop Production",
      "difficulty": "easy",
      "question": "Which term describes: gathering mature crops?",
      "options": [
        "Harvesting",
        "Ruminant",
        "Poultry",
        "Broiler"
      ],
      "answer": 0,
      "explanation": "That description matches Harvesting.",
      "id": 83
    },
    {
      "topic": "Livestock",
      "difficulty": "medium",
      "question": "Which term describes: animal with a four-chambered stomach?",
      "options": [
        "Poultry",
        "Broiler",
        "Ruminant",
        "Layer"
      ],
      "answer": 2,
      "explanation": "That description matches Ruminant.",
      "id": 84
    },
    {
      "topic": "Livestock",
      "difficulty": "easy",
      "question": "Which term describes: domestic birds kept for meat or eggs?",
      "options": [
        "Broiler",
        "Poultry",
        "Layer",
        "Vaccination"
      ],
      "answer": 1,
      "explanation": "That description matches Poultry.",
      "id": 85
    },
    {
      "topic": "Livestock",
      "difficulty": "easy",
      "question": "Which term describes: chicken raised for meat?",
      "options": [
        "Layer",
        "Vaccination",
        "Artificial insemination",
        "Broiler"
      ],
      "answer": 3,
      "explanation": "That description matches Broiler.",
      "id": 86
    },
    {
      "topic": "Livestock",
      "difficulty": "easy",
      "question": "Which term describes: chicken raised for eggs?",
      "options": [
        "Layer",
        "Vaccination",
        "Artificial insemination",
        "Breeding"
      ],
      "answer": 0,
      "explanation": "That description matches Layer.",
      "id": 87
    },
    {
      "topic": "Livestock",
      "difficulty": "medium",
      "question": "Which term describes: administration of vaccine to prevent disease?",
      "options": [
        "Artificial insemination",
        "Breeding",
        "Vaccination",
        "Pest"
      ],
      "answer": 2,
      "explanation": "That description matches Vaccination.",
      "id": 88
    },
    {
      "topic": "Livestock",
      "difficulty": "hard",
      "question": "Which term describes: introducing semen into female without mating?",
      "options": [
        "Breeding",
        "Artificial insemination",
        "Pest",
        "Disease"
      ],
      "answer": 1,
      "explanation": "That description matches Artificial insemination.",
      "id": 89
    },
    {
      "topic": "Livestock",
      "difficulty": "medium",
      "question": "Which term describes: selective mating to improve traits?",
      "options": [
        "Pest",
        "Disease",
        "Herbicide",
        "Breeding"
      ],
      "answer": 3,
      "explanation": "That description matches Breeding.",
      "id": 90
    },
    {
      "topic": "Pests",
      "difficulty": "easy",
      "question": "Which term describes: organism that damages crops or livestock?",
      "options": [
        "Pest",
        "Disease",
        "Herbicide",
        "Insecticide"
      ],
      "answer": 0,
      "explanation": "That description matches Pest.",
      "id": 91
    },
    {
      "topic": "Pests",
      "difficulty": "easy",
      "question": "Which term describes: abnormal condition affecting an organism?",
      "options": [
        "Herbicide",
        "Insecticide",
        "Disease",
        "Fungicide"
      ],
      "answer": 2,
      "explanation": "That description matches Disease.",
      "id": 92
    },
    {
      "topic": "Pests",
      "difficulty": "medium",
      "question": "Which term describes: chemical used to kill weeds?",
      "options": [
        "Insecticide",
        "Herbicide",
        "Fungicide",
        "Farm tools"
      ],
      "answer": 1,
      "explanation": "That description matches Herbicide.",
      "id": 93
    },
    {
      "topic": "Pests",
      "difficulty": "medium",
      "question": "Which term describes: chemical used to kill insects?",
      "options": [
        "Fungicide",
        "Farm tools",
        "Tractor",
        "Insecticide"
      ],
      "answer": 3,
      "explanation": "That description matches Insecticide.",
      "id": 94
    },
    {
      "topic": "Pests",
      "difficulty": "medium",
      "question": "Which term describes: chemical used to control fungi?",
      "options": [
        "Fungicide",
        "Farm tools",
        "Tractor",
        "Harvester"
      ],
      "answer": 0,
      "explanation": "That description matches Fungicide.",
      "id": 95
    },
    {
      "topic": "Farm Tools",
      "difficulty": "easy",
      "question": "Which term describes: simple implements used in farming?",
      "options": [
        "Tractor",
        "Harvester",
        "Farm tools",
        "Plough"
      ],
      "answer": 2,
      "explanation": "That description matches Farm tools.",
      "id": 96
    },
    {
      "topic": "Farm Tools",
      "difficulty": "easy",
      "question": "Which term describes: machine used to pull farm implements?",
      "options": [
        "Harvester",
        "Tractor",
        "Plough",
        "Harrow"
      ],
      "answer": 1,
      "explanation": "That description matches Tractor.",
      "id": 97
    },
    {
      "topic": "Farm Tools",
      "difficulty": "medium",
      "question": "Which term describes: machine used to harvest crops?",
      "options": [
        "Plough",
        "Harrow",
        "Livestock feed",
        "Harvester"
      ],
      "answer": 3,
      "explanation": "That description matches Harvester.",
      "id": 98
    },
    {
      "topic": "Farm Tools",
      "difficulty": "easy",
      "question": "Which term describes: tool used to turn the soil?",
      "options": [
        "Plough",
        "Harrow",
        "Livestock feed",
        "Pasture"
      ],
      "answer": 0,
      "explanation": "That description matches Plough.",
      "id": 99
    },
    {
      "topic": "Farm Tools",
      "difficulty": "easy",
      "question": "Which term describes: tool used to break soil clods?",
      "options": [
        "Livestock feed",
        "Pasture",
        "Harrow",
        "Silage"
      ],
      "answer": 2,
      "explanation": "That description matches Harrow.",
      "id": 100
    },
    {
      "topic": "Livestock",
      "difficulty": "easy",
      "question": "Which term describes: food given to animals?",
      "options": [
        "Pasture",
        "Livestock feed",
        "Silage",
        "Farm records"
      ],
      "answer": 1,
      "explanation": "That description matches Livestock feed.",
      "id": 101
    },
    {
      "topic": "Livestock",
      "difficulty": "easy",
      "question": "Which term describes: land covered with grass for grazing?",
      "options": [
        "Silage",
        "Farm records",
        "Farm budget",
        "Pasture"
      ],
      "answer": 3,
      "explanation": "That description matches Pasture.",
      "id": 102
    },
    {
      "topic": "Livestock",
      "difficulty": "medium",
      "question": "Which term describes: preserved green fodder?",
      "options": [
        "Silage",
        "Farm records",
        "Farm budget",
        "Extension service"
      ],
      "answer": 0,
      "explanation": "That description matches Silage.",
      "id": 103
    },
    {
      "topic": "Farm Management",
      "difficulty": "medium",
      "question": "Which term describes: documents showing farm operations?",
      "options": [
        "Farm budget",
        "Extension service",
        "Farm records",
        "Agricultural marketing"
      ],
      "answer": 2,
      "explanation": "That description matches Farm records.",
      "id": 104
    },
    {
      "topic": "Farm Management",
      "difficulty": "hard",
      "question": "Which term describes: plan of expected farm income and expenses?",
      "options": [
        "Extension service",
        "Farm budget",
        "Agricultural marketing",
        "Erosion"
      ],
      "answer": 1,
      "explanation": "That description matches Farm budget.",
      "id": 105
    },
    {
      "topic": "Farm Management",
      "difficulty": "medium",
      "question": "Which term describes: advisory service to farmers?",
      "options": [
        "Agricultural marketing",
        "Erosion",
        "Mulching",
        "Extension service"
      ],
      "answer": 3,
      "explanation": "That description matches Extension service.",
      "id": 106
    },
    {
      "topic": "Farm Management",
      "difficulty": "medium",
      "question": "Which term describes: movement of produce to consumers?",
      "options": [
        "Agricultural marketing",
        "Erosion",
        "Mulching",
        "Grafting"
      ],
      "answer": 0,
      "explanation": "That description matches Agricultural marketing.",
      "id": 107
    },
    {
      "topic": "Soil Science",
      "difficulty": "medium",
      "question": "Which term describes: removal of topsoil by wind or water?",
      "options": [
        "Mulching",
        "Grafting",
        "Erosion",
        "Seed dressing"
      ],
      "answer": 2,
      "explanation": "That description matches Erosion.",
      "id": 108
    },
    {
      "topic": "Crop Production",
      "difficulty": "medium",
      "question": "Which term describes: covering soil to conserve moisture?",
      "options": [
        "Grafting",
        "Mulching",
        "Seed dressing",
        "Nursery"
      ],
      "answer": 1,
      "explanation": "That description matches Mulching.",
      "id": 109
    },
    {
      "topic": "Crop Production",
      "difficulty": "hard",
      "question": "Which term describes: joining parts of two plants?",
      "options": [
        "Seed dressing",
        "Nursery",
        "Legume",
        "Grafting"
      ],
      "answer": 3,
      "explanation": "That description matches Grafting.",
      "id": 110
    },
    {
      "topic": "Crop Production",
      "difficulty": "medium",
      "question": "Which term describes: treating seeds before planting?",
      "options": [
        "Seed dressing",
        "Nursery",
        "Legume",
        "Green manure"
      ],
      "answer": 0,
      "explanation": "That description matches Seed dressing.",
      "id": 111
    },
    {
      "topic": "Crop Production",
      "difficulty": "easy",
      "question": "Which term describes: place where seedlings are raised?",
      "options": [
        "Legume",
        "Green manure",
        "Nursery",
        "Fish pond"
      ],
      "answer": 2,
      "explanation": "That description matches Nursery.",
      "id": 112
    },
    {
      "topic": "Crop Production",
      "difficulty": "medium",
      "question": "Which term describes: plant that fixes nitrogen?",
      "options": [
        "Green manure",
        "Legume",
        "Fish pond",
        "Fingerlings"
      ],
      "answer": 1,
      "explanation": "That description matches Legume.",
      "id": 113
    },
    {
      "topic": "Soil Science",
      "difficulty": "medium",
      "question": "Which term describes: crop grown to improve soil fertility?",
      "options": [
        "Fish pond",
        "Fingerlings",
        "Forestry",
        "Green manure"
      ],
      "answer": 3,
      "explanation": "That description matches Green manure.",
      "id": 114
    },
    {
      "topic": "Fisheries",
      "difficulty": "easy",
      "question": "Which term describes: artificial enclosure for fish culture?",
      "options": [
        "Fish pond",
        "Fingerlings",
        "Forestry",
        "Afforestation"
      ],
      "answer": 0,
      "explanation": "That description matches Fish pond.",
      "id": 115
    },
    {
      "topic": "Fisheries",
      "difficulty": "medium",
      "question": "Which term describes: young fish used for stocking?",
      "options": [
        "Forestry",
        "Afforestation",
        "Fingerlings",
        "Deforestation"
      ],
      "answer": 2,
      "explanation": "That description matches Fingerlings.",
      "id": 116
    },
    {
      "topic": "Forestry",
      "difficulty": "medium",
      "question": "Which term describes: management of forest resources?",
      "options": [
        "Afforestation",
        "Forestry",
        "Deforestation",
        "Soil conservation"
      ],
      "answer": 1,
      "explanation": "That description matches Forestry.",
      "id": 117
    },
    {
      "topic": "Forestry",
      "difficulty": "medium",
      "question": "Which term describes: planting trees in non-forest areas?",
      "options": [
        "Deforestation",
        "Soil conservation",
        "Soil profile",
        "Afforestation"
      ],
      "answer": 3,
      "explanation": "That description matches Afforestation.",
      "id": 118
    },
    {
      "topic": "Forestry",
      "difficulty": "medium",
      "question": "Which term describes: removal of forest cover?",
      "options": [
        "Deforestation",
        "Soil conservation",
        "Soil profile",
        "Topsoil"
      ],
      "answer": 0,
      "explanation": "That description matches Deforestation.",
      "id": 119
    },
    {
      "topic": "Soil Science",
      "difficulty": "medium",
      "question": "Which term describes: practices to prevent soil loss?",
      "options": [
        "Soil profile",
        "Topsoil",
        "Soil conservation",
        "Subsoil"
      ],
      "answer": 2,
      "explanation": "That description matches Soil conservation.",
      "id": 120
    },
    {
      "topic": "Soil Science",
      "difficulty": "medium",
      "question": "Which term describes: vertical section showing soil horizons?",
      "options": [
        "Topsoil",
        "Soil profile",
        "Subsoil",
        "Soil horizon"
      ],
      "answer": 1,
      "explanation": "That description matches Soil profile.",
      "id": 121
    },
    {
      "topic": "Soil Science",
      "difficulty": "easy",
      "question": "Which term describes: uppermost fertile layer of soil?",
      "options": [
        "Subsoil",
        "Soil horizon",
        "Soil fertility",
        "Topsoil"
      ],
      "answer": 3,
      "explanation": "That description matches Topsoil.",
      "id": 122
    },
    {
      "topic": "Soil Science",
      "difficulty": "easy",
      "question": "Which term describes: layer of soil beneath topsoil?",
      "options": [
        "Subsoil",
        "Soil horizon",
        "Soil fertility",
        "Contour plowing"
      ],
      "answer": 0,
      "explanation": "That description matches Subsoil.",
      "id": 123
    },
    {
      "topic": "Soil Science",
      "difficulty": "medium",
      "question": "Which term describes: distinct layer within the soil?",
      "options": [
        "Soil fertility",
        "Contour plowing",
        "Soil horizon",
        "Crop spacing"
      ],
      "answer": 2,
      "explanation": "That description matches Soil horizon.",
      "id": 124
    },
    {
      "topic": "Soil Science",
      "difficulty": "easy",
      "question": "Which term describes: ability of soil to support plant growth?",
      "options": [
        "Contour plowing",
        "Soil fertility",
        "Crop spacing",
        "Thinning"
      ],
      "answer": 1,
      "explanation": "That description matches Soil fertility.",
      "id": 125
    },
    {
      "topic": "Soil Science",
      "difficulty": "medium",
      "question": "Which term describes: plowing along contours to reduce erosion?",
      "options": [
        "Crop spacing",
        "Thinning",
        "Pruning",
        "Contour plowing"
      ],
      "answer": 3,
      "explanation": "That description matches Contour plowing.",
      "id": 126
    },
    {
      "topic": "Crop Production",
      "difficulty": "easy",
      "question": "Which term describes: distance between plants in a field?",
      "options": [
        "Crop spacing",
        "Thinning",
        "Pruning",
        "Weaning"
      ],
      "answer": 0,
      "explanation": "That description matches Crop spacing.",
      "id": 127
    },
    {
      "topic": "Crop Production",
      "difficulty": "easy",
      "question": "Which term describes: removal of excess seedlings?",
      "options": [
        "Pruning",
        "Weaning",
        "Thinning",
        "Gestation"
      ],
      "answer": 2,
      "explanation": "That description matches Thinning.",
      "id": 128
    },
    {
      "topic": "Crop Production",
      "difficulty": "medium",
      "question": "Which term describes: cutting plant parts to improve growth?",
      "options": [
        "Weaning",
        "Pruning",
        "Gestation",
        "Culling"
      ],
      "answer": 1,
      "explanation": "That description matches Pruning.",
      "id": 129
    },
    {
      "topic": "Livestock",
      "difficulty": "medium",
      "question": "Which term describes: separating young animals from their mothers?",
      "options": [
        "Gestation",
        "Culling",
        "Debeaking",
        "Weaning"
      ],
      "answer": 3,
      "explanation": "That description matches Weaning.",
      "id": 130
    },
    {
      "topic": "Livestock",
      "difficulty": "medium",
      "question": "Which term describes: period of pregnancy in animals?",
      "options": [
        "Gestation",
        "Culling",
        "Debeaking",
        "Ranching"
      ],
      "answer": 0,
      "explanation": "That description matches Gestation.",
      "id": 131
    },
    {
      "topic": "Livestock",
      "difficulty": "medium",
      "question": "Which term describes: removal of unproductive animals?",
      "options": [
        "Debeaking",
        "Ranching",
        "Culling",
        "Crossbreeding"
      ],
      "answer": 2,
      "explanation": "That description matches Culling.",
      "id": 132
    },
    {
      "topic": "Livestock",
      "difficulty": "hard",
      "question": "Which term describes: trimming beaks of poultry to reduce pecking?",
      "options": [
        "Ranching",
        "Debeaking",
        "Crossbreeding",
        "Quarantine"
      ],
      "answer": 1,
      "explanation": "That description matches Debeaking.",
      "id": 133
    },
    {
      "topic": "Livestock",
      "difficulty": "medium",
      "question": "Which term describes: rearing livestock on large grazing areas?",
      "options": [
        "Crossbreeding",
        "Quarantine",
        "Aquaculture",
        "Ranching"
      ],
      "answer": 3,
      "explanation": "That description matches Ranching.",
      "id": 134
    },
    {
      "topic": "Livestock",
      "difficulty": "medium",
      "question": "Which term describes: mating animals of different breeds?",
      "options": [
        "Crossbreeding",
        "Quarantine",
        "Aquaculture",
        "Stocking"
      ],
      "answer": 0,
      "explanation": "That description matches Crossbreeding.",
      "id": 135
    },
    {
      "topic": "Livestock",
      "difficulty": "hard",
      "question": "Which term describes: isolating animals to prevent disease spread?",
      "options": [
        "Aquaculture",
        "Stocking",
        "Quarantine",
        "Drip irrigation"
      ],
      "answer": 2,
      "explanation": "That description matches Quarantine.",
      "id": 136
    },
    {
      "topic": "Fisheries",
      "difficulty": "medium",
      "question": "Which term describes: farming of aquatic organisms?",
      "options": [
        "Stocking",
        "Aquaculture",
        "Drip irrigation",
        "Sprinkler irrigation"
      ],
      "answer": 1,
      "explanation": "That description matches Aquaculture.",
      "id": 137
    },
    {
      "topic": "Fisheries",
      "difficulty": "medium",
      "question": "Which term describes: introducing fish into a pond?",
      "options": [
        "Drip irrigation",
        "Sprinkler irrigation",
        "Soil texture",
        "Stocking"
      ],
      "answer": 3,
      "explanation": "That description matches Stocking.",
      "id": 138
    },
    {
      "topic": "Crop Production",
      "difficulty": "hard",
      "question": "Which term describes: irrigation using slow water droplets?",
      "options": [
        "Drip irrigation",
        "Sprinkler irrigation",
        "Soil texture",
        "Soil structure"
      ],
      "answer": 0,
      "explanation": "That description matches Drip irrigation.",
      "id": 139
    },
    {
      "topic": "Crop Production",
      "difficulty": "medium",
      "question": "Which term describes: irrigation by spraying water?",
      "options": [
        "Soil texture",
        "Soil structure",
        "Sprinkler irrigation",
        "Humus"
      ],
      "answer": 2,
      "explanation": "That description matches Sprinkler irrigation.",
      "id": 140
    },
    {
      "topic": "Soil Science",
      "difficulty": "easy",
      "question": "A farmer applies fertilizer at 50 kg per hectare on 2 hectares. Total fertilizer needed is ___.",
      "options": [
        "50 kg",
        "100 kg",
        "75 kg",
        "150 kg"
      ],
      "answer": 1,
      "explanation": "Multiply rate by area.",
      "id": 141
    },
    {
      "topic": "Crop Production",
      "difficulty": "medium",
      "question": "Growing legumes in rotation helps to ___.",
      "options": [
        "increase soil acidity",
        "reduce rainfall",
        "kill all pests",
        "improve soil nitrogen"
      ],
      "answer": 3,
      "explanation": "Legumes fix nitrogen.",
      "id": 142
    },
    {
      "topic": "Livestock",
      "difficulty": "medium",
      "question": "A vaccine given to prevent Newcastle disease is used in ___ farming.",
      "options": [
        "poultry",
        "fish",
        "cattle",
        "goat"
      ],
      "answer": 0,
      "explanation": "Newcastle disease affects poultry.",
      "id": 143
    },
    {
      "topic": "Pests",
      "difficulty": "easy",
      "question": "A chemical used specifically to control weeds is a ___.",
      "options": [
        "insecticide",
        "fungicide",
        "herbicide",
        "fertilizer"
      ],
      "answer": 2,
      "explanation": "Herbicides target weeds.",
      "id": 144
    },
    {
      "topic": "Livestock",
      "difficulty": "medium",
      "question": "Silage is mainly used to feed animals during the ___.",
      "options": [
        "rainy season",
        "dry season",
        "harvest season",
        "planting season"
      ],
      "answer": 1,
      "explanation": "Silage is preserved feed for dry months.",
      "id": 145
    },
    {
      "topic": "Soil Science",
      "difficulty": "medium",
      "question": "Ploughing along contour lines helps to reduce ___.",
      "options": [
        "soil fertility",
        "crop yield",
        "irrigation",
        "soil erosion"
      ],
      "answer": 3,
      "explanation": "Contour ploughing reduces runoff.",
      "id": 146
    },
    {
      "topic": "Fisheries",
      "difficulty": "medium",
      "question": "Young fish introduced into a new pond are called ___.",
      "options": [
        "fingerlings",
        "broilers",
        "calves",
        "layers"
      ],
      "answer": 0,
      "explanation": "Fingerlings are young fish.",
      "id": 147
    },
    {
      "topic": "Farm Management",
      "difficulty": "medium",
      "question": "A document showing expected income and expenses is a ___.",
      "options": [
        "farm record",
        "cash book",
        "farm budget",
        "invoice"
      ],
      "answer": 2,
      "explanation": "Budgets show expected income and costs.",
      "id": 148
    },
    {
      "topic": "Livestock",
      "difficulty": "medium",
      "question": "Crossbreeding is used mainly to ___.",
      "options": [
        "reduce fertility",
        "improve desirable traits",
        "increase pests",
        "reduce yields"
      ],
      "answer": 1,
      "explanation": "Crossbreeding improves performance.",
      "id": 149
    },
    {
      "topic": "Crop Production",
      "difficulty": "hard",
      "question": "Supplying water through small tubes directly to plant roots is ___.",
      "options": [
        "sprinkler irrigation",
        "flood irrigation",
        "mulching",
        "drip irrigation"
      ],
      "answer": 3,
      "explanation": "Drip irrigation delivers water at roots.",
      "id": 150
    }
  ]
}

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