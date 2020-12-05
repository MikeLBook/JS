const {capitalize, reverse, calculator, analyze} = require('./index');

test('capitalizes first character', () => {
    expect(capitalize('teddy')).toBe('Teddy');
});

test('reverses the string', () => {
    expect(reverse('teddy')).toBe('yddet');
});

test('calculator can add', () => {
    expect(calculator.add(2, 2)).toEqual(4);
});

test('calculator can substract', () => {
    expect(calculator.subtract(2, 2)).toEqual(0);
});

test('calculator can divide', () => {
    expect(calculator.divide(2, 2)).toEqual(1);
});

test('calculator can multiply', () => {
    expect(calculator.multiply(2, 2)).toEqual(4);
});

test('analyze works', () => {
    expect(analyze([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
});