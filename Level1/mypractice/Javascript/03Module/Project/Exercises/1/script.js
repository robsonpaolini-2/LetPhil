/*
🧭 Decision Maker — 

GOAL:
Learn how JavaScript "chooses a path" using:
- if
- if...else
- && (AND) and || (OR)
- ternary operator (one-line if/else)

RULES:
- Write code under each step.
- Use console.log() to prove your logic works.
- Pay attention to:
  - ( ) parentheses for conditions
  - { } curly braces for code blocks
*/

/* -----------------------------------------
   STEP 1 — Create your main variable
   -----------------------------------------
   1) Create a number called score
      Example: 85
   2) console.log("score:", score)
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE

    // let score = 90;

    // console.log("Score: ", score);

/* -----------------------------------------
   STEP 2 — Basic if statement
   -----------------------------------------
   Use an if statement:
   - If score is greater than 70
     console.log("Passed")
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE

    // if (score >= 90){
    //     console.log("Grade A");
    // // }
    // else if (score >= 80){
    //     console.log("Grade B");
    // }
    // else if (score >= 70) {
    //     console.log("Grade C");
    // }
    // else {
    //     console.log("Grade D")
    // }

/* -----------------------------------------
   STEP 3 — if...else statement
   -----------------------------------------
   Use if...else:
   - If score is 90 or higher → console.log("Excellent")
   - Else → console.log("Keep practicing")
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE

    // if (score >= 90){
    //     console.log("Grade A");
    // }
    // else if (score >= 80){
    //     console.log("Grade B");
    // }
    // else if (score >= 70) {
    //     console.log("Grade C");
    // }
    // else {
    //     console.log("Grade D")
    // }
/* -----------------------------------------
   STEP 4 — Multiple conditions with &&
   -----------------------------------------
   Create a boolean variable named between70and100
   It should be true ONLY if score is between 70 and 100.

   Hint:
   score >= 70 && score <= 100
   Then console.log it.
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE

    // let score = 100;

    // if (score >= 70 && score <=100) {
    //     console.log("You are Aproved! Congratulations!")
    // }
    // else {
    //     console.log("You need study more. See you next year");
    // }
/* -----------------------------------------
   STEP 5 — Multiple conditions with ||
   -----------------------------------------
   Create a boolean variable named veryLowOrHigh
   It should be true if:
   - score is less than 50 OR score is greater than 95

   Then console.log it.
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE
    // let veryLowOrHigh = 95;

    // if (veryLowOrHigh <= 50 || veryLowOrHigh >= 95) {
    //     console.log(true);
    // }
    // else {
    //     console.log(false);
    // }
/* -----------------------------------------
   STEP 6 — Ternary operator (one-line if/else)
   -----------------------------------------
   Create a variable called label using a ternary operator:
   - If score >= 90 → "Top student"
   - Else → "Student"

   Then console.log("Ternary label:", label)
*/

// ✅ WRITE YOUR CODE UNDER THIS LINE 

let score = 95;

if (score >= 90) {
    label = true;
}
else {
    label = false;
}

 const msg = label ? "Top Student!" : "Student" ;
 console.log(msg);

