const { carsByBrand } = require('./carsByBrand');

const cars = [
    {brand: 'Toyota', model: 'Aygo'},
    {brand: 'Skoda', model: 'Octavia'},
    {brand: 'Volkswagen', model: 'Passat'},
    {brand: 'Mercedes', model: 'CLS'},
    {brand: 'Seat', model: 'Ibiza'}
]

it('Should return an object where all brands are properties and the values are arrays of cars', () => {
    const result = carsByBrand(cars);

    const expectation = {
        Toyota: ['Aygo'],
        Skoda: ['Octavia'],
        Volkswagen: ['Passat'],
        Mercedes: ['CLS'],
        Seat: ['Ibiza'],
    };

    expect(result).toEqual(expectation);
});