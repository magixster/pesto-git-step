const {
    describe,
    it,
    expect,
    matchers 
} = require('./lib/testingLibrary');
const { add, subtract, divide, multiply } = require('./index');

console.log(describe);


describe('Addtion', () => {
    it('adds two numbers', () => {
        const result = add(1, 2)
        expect(result).toBe(3)
    })
})


describe('Subtraction', () => {
    it('subtract two numbers', () => {
        const result = subtract(5, 2)
        expect(result).toBe(3)
    })
})


describe('Multiplication', () => {
    it('multiply two numbers', () => {
        const result = multiply(5, 2)
        expect(result).toBe(10)
    })
})


describe('Divide', () => {
    it('Divivde two numbers', () => {
        const result = divide(10, 2)
        expect(result).toBe(5)
    })
})
