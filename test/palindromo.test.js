//const { default: test } = require('node:test');
const { palindromo } = require('../utils/for_testing');

test.skip('palindromo de lamina', () => {
    const result = palindromo('lamina')

    expect(result).toBe('animal')
});

test.skip('palindrome de string vacio', () => {
    const result = palindromo('')

    expect(result).toBe('')
});