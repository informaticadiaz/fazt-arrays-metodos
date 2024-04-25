# Set

`Set` es una estructura de datos que representa una colección de valores únicos, lo que significa que no puede haber elementos duplicados dentro del conjunto. Los conjuntos son una forma eficiente de almacenar elementos únicos y ofrecen métodos para agregar, eliminar y verificar la existencia de elementos.

Aquí un ejemplo de uso:

```javascript
const mySet = new Set();

// Agregar elementos al conjunto
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1); // No se agregará porque 1 ya está en el conjunto

// Verificar la existencia de un elemento
console.log(mySet.has(2)); // Output: true
console.log(mySet.has(4)); // Output: false

// Eliminar un elemento
mySet.delete(3);

// Iterar sobre los elementos del conjunto
mySet.forEach(element => {
  console.log(element);
});

// Tamaño del conjunto
console.log(mySet.size); // Output: 2
```

En este ejemplo:

- Se crea un nuevo conjunto llamado `mySet`.
- Se agregan elementos al conjunto utilizando el método `add()`.
- Se utiliza el método `has()` para verificar si un elemento existe en el conjunto.
- Se elimina un elemento del conjunto con el método `delete()`.
- Se itera sobre los elementos del conjunto utilizando el método `forEach()`.
- Se obtiene el tamaño del conjunto con la propiedad `size`.

Los conjuntos son útiles cuando necesitas almacenar una colección de elementos únicos y no te importa el orden en que se almacenan. Además, los conjuntos tienen métodos y propiedades eficientes para operaciones comunes como agregar, eliminar y verificar la existencia de elementos.
