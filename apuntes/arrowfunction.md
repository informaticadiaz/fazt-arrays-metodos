# Arrow Functions

## Envolver al Objeto entre parentesis dentro de la arrow function

```js
const newStudents = students.map(student => ({
  ...student,
  course: "Web Development"
}))
```

En el código que proporcionaste, la arrow function envuelve el objeto entre paréntesis por dos razones principales:

1. **Objeto implícito de retorno**: Al usar llaves `{}` en una arrow function, JavaScript interpreta el bloque de código como un bloque de instrucciones en lugar de un objeto. Al envolver el objeto entre paréntesis `()` dentro de la arrow function, le estamos diciendo a JavaScript que queremos devolver un objeto explícitamente. Esto es importante para evitar confusiones en la sintaxis y garantizar que el objeto se devuelva correctamente.

2. **Objeto de una sola expresión**: En este caso, la arrow function solo tiene una expresión, que es un objeto creado a partir de la desestructuración del objeto `student` y la adición de una nueva propiedad `course`. Al envolver el objeto entre paréntesis, estamos indicando que esta es la única expresión que se evaluará y se devolverá como resultado de la función.

En resumen, envolver el objeto entre paréntesis en una arrow function es una convención común para asegurar que el objeto se devuelva correctamente y para indicar claramente que solo hay una expresión que se evalúa y devuelve.
