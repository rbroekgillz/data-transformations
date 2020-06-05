const { oldestSoFar } = require('./oldestPerson');

const people = [
    {name: 'Don', age: 23},
    {name: 'Adam', age: 33},
    {name: 'Steve', age: 14},
    {name: 'Rachel', age: 56},
    {name: 'Maud', age: 46},
    {name: 'Hermien', age: 28}
];

it('Should return the oldest person', () => {
    const oldestPerson = oldestSoFar(people);
    expect(oldestPerson).toEqual(people[3]);
});