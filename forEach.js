import { students } from "./data/sample_data.js";

/* 
forma imperativa
for(let i =; i < students.length; i++) {
  console.log(students[i]);
}

forma declarativa
students.forEach(function(student, index, students) {
  console.log(student)
  console.log(index)
  console.log(students)
})
*/

// creo un arreglo
const fullnames = []

// recorro el array de objetos students
// y agrego a fullnames el nombre y el apellido
students.forEach((student) => {
  fullnames.push(student.name + ' ' + student.lastname)
})

// imprimo por consola el array fullnames
console.log(fullnames)