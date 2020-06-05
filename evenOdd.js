const evenOdd = numbers => {
    return numbers.reduce(({even, uneven}, number) => number % 2 === 0 ? {
            uneven,
            even: even.concat([number])
        } :
        {
            even,
            uneven: uneven.concat([number])
        },
        {even: [], uneven: []});
}

module.exports = {evenOdd};