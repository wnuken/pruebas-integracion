const { media } = require('../utils/for_testing');

describe.skip('media', () => {
    test('de un solo valor', () => {
        const result = media([1]);
        expect(result).toBe(1)
    })

    test('de algunos valores', () => {
        const result = media([1, 2, 3, 4, 5, 6]);
        expect(result).toBe(3.5)
    })

    test('de un array vacio', () => {
        const result = media([]);
        expect(result).toBe(0)
    })
})