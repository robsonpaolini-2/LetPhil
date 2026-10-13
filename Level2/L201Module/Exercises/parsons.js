 
 
 
 
// A   const cartTotal = itemCount * itemPrice;
// B   const itemPrice = 15;
// C   console.log(`Cart: ${itemCount} items, total ${cartTotal}`);
// D   const itemCount = 2;
// X   const cartTotal = itemCount + itemPrice;
// Y   console.log(`Cart: ${itemCount} items, total ${itemCount * itemPrice}`);

// Goal output: `Cart: 2 items, total 30`


// `X` gives the wrong total. 
// `Y` actually works — it produces the right output — 
// but leaves `A` unused and skips the variable. If a mentee picks 
// `Y` and explains why, that's a good answer. If they pick it without noticing 
// `A` is left over, ask what `cartTotal` is for.

// 1

const itemPrice = 15;       // B
const itemCount = 2;        // D
const cartTotal = itemCount * itemPrice;   // A
console.log(`Cart: ${itemCount} items, total ${cartTotal}`);  // C



// 2 
const price = "4";
console.log(price * 2); // here the result will be 8, because the * operator convert the string "4" in a number
console.log(price + 2); // here the result will e 42, because the + operator will concatenate the string "4" and convert the number 2 to a string.

