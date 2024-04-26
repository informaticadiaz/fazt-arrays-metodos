import { students } from "./data/sample_data.js";

// ordenando con sort
// ordenando segun edad
// de menor a mayor
const ageMenor = students.sort(function (first, second) {
  if (first.age > second.age) {
    return 1
  } else {
    return -1
  }
})

console.log("ordenando de menor a mayor")
console.log(ageMenor)

// ordenando segun edad de mayoy a menor 
const ageMayor = students.sort(function (first, second) {
  if (first.age < second.age) {
    return 1
  } else {
    return -1
  } 
})

console.log("ordenando de mayor a menor")
console.log(ageMayor)

// usando arrow functions y un operador ternario
const ageSort = students.sort((a, b) => a.age > b.age ? 1 : -1)
console.log("usando arrow functions y un operador ternario")
console.log(ageSort)

// ordenando numeros

const numbers = [10, 30, 1000, 100]

// ordena de maner a mayor alfabeticamente
const tartandoDeOrdenarNumeros = numbers.sort()

console.log(tartandoDeOrdenarNumeros)

// ordenando de menos a mayor de forma numerica
const ordenandoNumeros = numbers.sort((a, b) => a - b)

console.log(ordenandoNumeros)
