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

// uso arrow functions para escribir menos codigo
// consigo el mismo resultado cambio la sintaxis
const result = students.find(student => student.name === "Ryan")

// si busco algo con el metodo find que no existe
// devuelve undefined

console.log("filtre por nombre:")
console.log(ryan)
console.log("filtre por edad:")
console.log(veinte)
console.log("desde arrowfunction:")
console.log(result)