const {presidentialPizza} = require('./presidentialPizza');

const names = ["George", "Richard", "Abraham", "Donald"]
const ages = {
    George: 55,
    Richard: 86,
    Abraham: 50,
    Donald: 65
}
const addresses = {
    George: "Fleet street, 121b",
    Richard: "Bermuda drive, 33",
    Abraham: "Cincinatti Av., 22a"
}
const willDeliverPizza = {
    "Fleet street": true,
    "Bermuda drive": false,
    "Cincinatti Av.": true
}

const expectation = {
    userData:
        [{
            name: 'George',
            age: 55,
            address: 'Fleet street, 121b',
            willDeliverPizza: true
        },
            {
                name: 'Richard',
                age: 86,
                address: 'Bermuda drive, 33',
                willDeliverPizza: false
            },
            {
                name: 'Abraham',
                age: 50,
                address: 'Cincinatti Av., 22a',
                willDeliverPizza: true
            },
            {
                name: 'Donald',
                age: 65,
                address: undefined,
                willDeliverPizza: 'Unknown'
            }],
    highestAge: 86,
    lowestAge: 50
};

it('Should return an object which combines loose datsets into userObjects who like pizza', () => {
    const result = presidentialPizza(names, ages, addresses, willDeliverPizza);

    expect(result).toEqual(expectation);
});