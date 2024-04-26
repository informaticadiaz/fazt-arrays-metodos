# Operador Ternario

El operador ternario, también conocido como operador condicional, es un operador que se utiliza para tomar decisiones en una sola línea de código, basándose en una condición booleana. Su sintaxis general es la siguiente:

```JS
condición ? expresión_si_verdadero : expresión_si_falso
```

La condición es evaluada primero. Si la condición es verdadera, se ejecuta la expresión después del signo de interrogación (`?`). Si la condición es falsa, se ejecuta la expresión después de los dos puntos (`:`).

Aquí tienes un ejemplo de cómo se utiliza el operador ternario en JavaScript:

```javascript
const edad = 20;
const esMayorDeEdad = edad >= 18 ? "Mayor de edad" : "Menor de edad";

console.log(esMayorDeEdad); // Output: Mayor de edad
```

En este ejemplo, `edad >= 18` es la condición. Si la edad es mayor o igual a 18, la expresión `"Mayor de edad"` se asigna a la variable `esMayorDeEdad`. De lo contrario, se asigna la expresión `"Menor de edad"`.

El operador ternario es útil para escribir condicionales simples y expresiones compactas en lugar de utilizar un bloque `if...else`. Sin embargo, su abuso puede hacer que el código sea menos legible, especialmente cuando las expresiones se vuelven muy complejas. Es importante utilizarlo con moderación y en situaciones donde la lógica es clara y fácil de entender.
