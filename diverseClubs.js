const diverseClubs = (people, clubs) => {
    const getNationalityFromId = (people, id) => people[id - 1].nationality; // Ervan uitgaande dat de lijst altijd hetzelfde is genummerd :D
    const removeDuplicates = arr => Array.from(new Set(arr));
    const getDiversityScoreFrom = members => removeDuplicates(members.map(id => getNationalityFromId(people, id))).length;
    const filterMostDiverseClubs = (mostDiverseClubs, {name, members, diversity}) => {
        if (diversity > mostDiverseClubs.diversity) {
            return {diversity, list: [{name, members}]};
        }
        if (diversity === mostDiverseClubs.diversity) {
            return {diversity, list: mostDiverseClubs.list.concat([{name, members}])};
        }
        return mostDiverseClubs;
    }

    const clubsWithDiversityScores = clubs.map(({name, members}) => ({name, members, diversity: getDiversityScoreFrom(members)}));
    const listOfMostDiverseClubs = clubsWithDiversityScores.reduce(filterMostDiverseClubs, {diversity: 0, list: []}).list;

    return listOfMostDiverseClubs;
}

module.exports = {diverseClubs};