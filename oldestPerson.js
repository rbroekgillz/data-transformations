const oldestSoFar = people => {
    return people.reduce((currentOldestPerson, person) =>
        person.age > currentOldestPerson.age ? person : currentOldestPerson);
}

module.exports = {oldestSoFar};