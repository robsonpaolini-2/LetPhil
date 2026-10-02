// init students array

const students = [];

// add student
function addStudent(name, grade) {
 students.push({
    name,
    grade,
 })   
}


//function to remove student
function removeStudent(name) {
    const index = students.findIndex((student) => student.name === name);
    if (index !== -1) {
        students.splice(index, 1);
        console.log(name, "has been removed");
    } else {
        console.log(name, 'was not found');
    }
}


// function to filter Students
function filterTopStudents(minGrade) {
    return students.filter(student => student.grade >= minGrade);
}


//function to map students in formatted list
function formatStudentList() {
    return students.map(student => `${student.name} - Grade: ${student.grade}`);
}

//start
console.log("Students =", students);

// add students
addStudent("Alice", 98);
addStudent("Livia", 99);
addStudent("Damiana", 95);
addStudent("Robson", 94);
addStudent("Joao", 75);

console.log("Stdents =", students);
console.log(formatStudentList());

removeStudent(prompt("Remove this Student:"))
console.log(students);


console.log(filterTopStudents(prompt("Enter the grade:")));


