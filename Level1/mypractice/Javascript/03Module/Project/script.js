const tasks = [] // init where todos will go

while(true) {
// asking for user input
let task = prompt("Entera task (or type 'done' to finish");

// check if user input is done or Done or DONE
if (task.toLowerCase()=== 'done') {
    break // if done breaking out of while loop
}

tasks.push(task) // addinguser input to tasks
}

// To display tasks
console.log("Your todo list:")

for (let i=0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks[i]}`);
}



// tasks.forEach((task, index) =>{
//     console.log(`${index +1}. ${task}`)
// })