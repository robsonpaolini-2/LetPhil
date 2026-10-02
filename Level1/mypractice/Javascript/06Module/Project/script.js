
const scoreTracker = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
};

// roll dice function get random number from 1 - 6

function rollDice() {
    const roll = Math.floor(Math.random() * 6) + 1;
    // console.log("roll =", roll);
    scoreTracker[roll]++; // increase count of rolled numbers
    console.log(`You rolled a ${roll}`);
}

// rollDice();
// rollDice();
// rollDice();


// for (let i = 0; i < 20; i++) {
//     rollDice();
//  }
rollDice();
console.log(scoreTracker);

function displayScrores() {
    console.log(`Dice Roll Score Tracker`);
    for (const roll in scoreTracker) {
        console.log(`${roll}: ${scoreTracker[roll]} times`);
    }
}

displayScrores();

// simulating dice rolls

for (let i = 0; i < 200; i++) {
    rollDice();
}

displayScrores();