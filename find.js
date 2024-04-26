import { students } from "./data/sample_data.js";

// nos devuelve el primer objeto que cumple la condición
const ryan = students.find(function (student) {
  if (student.name === "Ryan") {
    return 1
  }
})

// aqui podemos ver que aunque dos objetos
// cumplen con la funcion
// nos devuelve solo uno
const veinte = students.find(function (student) {
  if (student.age === 20) {
    return 1
  }
})

console.log(ryan)