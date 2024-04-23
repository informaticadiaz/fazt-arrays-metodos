import { students } from "./data/sample_data.js";

console.log(students)

/* // usando un bucle for para filtrar datos
// usando la forma imperativa
// escribo mas codigo
const webdev = []

for (let i = 0; i < students.length; i++) {
  if (students[i].course === "Web Development") {
    webdev.push(students[i])
   }
}

console.log(webdev)
 */

/* // utilizando el metodo filter
// escribo menos codigo
// filter retorna 
// todo lo que cumplio con la condición
console.log("usando filter")
const webdev2 = students.filter(function (student) {
  if (student.course === "Web Development") {
    return true
  }
})

console.log(webdev2) */

// usando filter y arrow function 
// para tener menos codigo
// mejorar la legibilidad
// tener una sintaxis concisa
// mayor expresividad
const webdev3 = students.filter(student => student.course === "Web Development")
console.log(webdev3)

// utilizo !== para negar la condición
// devulve todos los estudiantes 
// que sean no cumplan con la condicion
const notwebdev = students.filter(student => student.course !== "Web Development")
console.log(notwebdev)

