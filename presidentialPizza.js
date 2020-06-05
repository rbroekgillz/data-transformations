const presidentialPizza = (names, ages, addresses, willDeliverPizza) => {
    const users = names.map(name => ({
        name, age: ages[name],
        address: addresses[name],
        willDeliverPizza: addresses[name] ? willDeliverPizza[addresses[name].split(', ')[0]] : 'Unknown'
    }));
    const ageValues = Object.values(ages);
    return { userData: users, highestAge: Math.max(...ageValues), lowestAge: Math.min(...ageValues) };
}

module.exports = {presidentialPizza};