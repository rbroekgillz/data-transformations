const { daysUntilCake } = require('./daysUntilCake')

const cakeGivers = [
    {name: 'Fred', birthday: 'Feb 15, 1983'},
    {name: 'Wilma', birthday: 'Mar 01, 1994'},
    {name: 'Barney', birthday: 'Dec 20, 1990'},
    {name: 'Pebbles', birthday: 'Nov 17, 1985'},
    {name: 'Scooby', birthday: 'Aug 13, 1983'},
    {name: 'Shaggy', birthday: 'May 06, 1982'},
    {name: 'Daphne', birthday: 'Jan 04, 1995'},
    {name: 'Velma', birthday: 'Jul 27, 1999'},
    {name: 'Tom', birthday: 'Jun 26, 1989'}
];

it('Should give an object with even and odd numbers', () => {
    const result = daysUntilCake(cakeGivers);

    const expectation = [
        {name: 'Daphne', birthday: 'Jan 04, 1995', daysUntilNextPersonsBirthday: 42},
        {name: 'Fred', birthday: 'Feb 15, 1983', daysUntilNextPersonsBirthday: 14},
        {name: 'Wilma', birthday: 'Mar 01, 1994', daysUntilNextPersonsBirthday: 66},
        {name: 'Shaggy', birthday: 'May 06, 1982', daysUntilNextPersonsBirthday: 51, },
        {name: 'Tom', birthday: 'Jun 26, 1989', daysUntilNextPersonsBirthday: 31},
        {name: 'Velma', birthday: 'Jul 27, 1999', daysUntilNextPersonsBirthday: 17},
        {name: 'Scooby', birthday: 'Aug 13, 1983', daysUntilNextPersonsBirthday: 96},
        {name: 'Pebbles', birthday: 'Nov 17, 1985', daysUntilNextPersonsBirthday: 33},
        {name: 'Barney', birthday: 'Dec 20, 1990', daysUntilNextPersonsBirthday: 6}
    ];

    expect(result).toEqual(expectation);
});