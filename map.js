import { students } from "./data/sample_data.js";

// utilizando map
// esto es muy utilizado en framworks de JS
// como React, Vue, Angular
/*
const fullnames = students.map(function (student) {
  return student.name + " " + student.lastname
})

console.log(fullnames)
*/

/*
const names = students.map((student) => student.name + " " + student.lastname)

console.log(names)
*/

/*
// utilizo los datos de students
// y armo un nuevo array 
// combinando el nombre y el apellido
const newStudents = students.map((student) => {
  return {
    fullname: student.name + " " + student.lastname,
    age: student.age,
    course: student.course
  }
})

console.log(newStudents)
*/


// agrego un titulo a cada estudiante
// en este caso copia cada uno de los datos
/*
const addStudent = students.map(student => {
  return {
    name: student.name,
    lastname: student.lastname,
    age: student.age,
    course: student.course,
    title: `${student.name} - ${student.course}`
  }
})

console.log(addStudent)
*/

/*
// copio los datos de students
// uso spread operator
// para escribir menos lineas de codigo
const titleStudents = students.map(student => {
  return {
    ...student,
    title: `${student.name} - ${student.course}`
  }
})

console.log(titleStudents)
*/

// map no muta los datos del primer array

// utilizando otra sintaxis de map sin return
// la arrow function envuelve el objeto
// con parentesis
/*
const newStudents = students.map(student => ({
  ...student,
  course: "Web Development"
}))

console.log(newStudents)

const doubleage = newStudents.map(student => ({
  ...student,
  age: student.age * 2
}))

console.log(doubleage)
*/

// podemos encadenar metodos map
const doubleage = students.map(student => ({
  ...student,
  course: "Web Development",
})).map(student => ({
  ...student,
  age: student.age * 2
}))

console.log(doubleage)
