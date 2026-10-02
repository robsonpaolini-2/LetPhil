
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
    console.log("roll =", roll);
}

// rollDice();
// rollDice();
// rollDice();


for (let i = 0; i < 20; i++) {
    rollDice();
 }