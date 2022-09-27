const suma = (a, b) => {
    return a + b;
}

const checks = [
    {a: 0, b: 0, result: 0},
    {a: 1, b: 3, result: 4},
    {a: -3, b: 3, result: 0},
    {a: 8, b: 5, result: 13}
]

checks.forEach(check => {
    const {a, b, result} = check;

    console.assert(
        suma(a,b) === result,
        `La suma de ${a} y ${b} debería ser ${result}`
    );
});

console.log(`${checks.length} test se han ejecutado`);