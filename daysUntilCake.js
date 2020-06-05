const moment = require('moment');

const daysUntilCake = cakeGivers => {
    const cakeGiversSortedByBirthdate = [...cakeGivers].sort((a, b) => moment(a.birthday.split(', ')[0]) - moment(b.birthday.split(', ')[0]));
    return cakeGiversSortedByBirthdate.map(({name, birthday}, index, source) => {
        const nextPerson = source[index + 1] || source[0];
        const currentBirthday = moment(birthday.split(', ')[0]);
        const nextPersonsBirthday = moment(nextPerson.birthday.split(', ')[0]);
        const daysUntilNextPersonsBirthday = nextPersonsBirthday.diff(currentBirthday, 'days');

        return {
            name,
            birthday,
            daysUntilNextPersonsBirthday: daysUntilNextPersonsBirthday < 0 ? 356 + daysUntilNextPersonsBirthday : daysUntilNextPersonsBirthday, // cheat!
        };
    })
}

module.exports = {daysUntilCake};