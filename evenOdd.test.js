const { evenOdd } = require('./evenOdd')

const numbers = [0, 1, 4, 5, 6, 9];

it('Should give an object with even and odd numbers', () => {
    const result = evenOdd(numbers);

    const expectation = {
        even: [0, 4, 6],
        uneven: [1, 5, 9]
    };

    expect(result).toEqual(expectation);
});