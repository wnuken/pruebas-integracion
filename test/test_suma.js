const suma = (a, b) => {
    return a + b;
}

console.assert(
    suma(3,4) === 7,
    'La suma de 3 y 4 debería ser 7'
);

console.assert(
    suma(0,0) === 0,
    'La suma de 0 y 0 debería ser 0'
);