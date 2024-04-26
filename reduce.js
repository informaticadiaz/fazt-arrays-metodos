import { students } from "./data/sample_data.js";

const developers = [
  {
    id: 1,
    name: 'John',
    skills: ['HTML', 'CSS', 'JavaScript', "Java"],
  },
  {
    id: 2,
    name: 'Jane',
    skills: ['HTML', 'CSS', 'JavaScript', "React", "Redux", "NodeJs"],
  },
  {
    id: 3,
    name: 'Jack',
    skills: ['HTML', 'CSS', 'JavaScript', "React", "Redux", "NodeJs"],
  }
]

let edadTotal = 0

// utilizo un bucle fot para sumar las edades
// las edades se suman
// y se aginan en la variable edadTotal
// forma imperativa
for (let i = 0; i < students.length; i++) {
  edadTotal += students[i].age
}

console.log(`esta suma viene del bucle for ${edadTotal}`)

// forma declarativa
const edadTotal2 = students.reduce(function (total, student) {
  return total + student.age
}, 0)
// usando reduce con arrow function
const edadTotal3 = students.reduce((total, student) => total + student.age, 0)

// usando reduce con un array de objetos
// en el return uso new Set 
// para no tener datos duplicados
// con new set uso un nuevo conjunto de datos
// tambien uso Array.from 
// para convertirlo en un array
const allSkills = developers.reduce(function (allSkills, student) {
  return Array.from(new Set([...allSkills, ...student.skills]))
}, [])

console.log(`esta suma viene del bucle for ${edadTotal}`)
console.log(`esta suma viene del metodo reduce ${edadTotal2}`)
console.log(`esta suma viene del metodo reduce con arrow function ${edadTotal3}`)
console.log("este array viene de reduce:")
console.log(allSkills)