const carsByBrand = cars => {
    return cars.reduce((groupedCars, {brand, model}) =>
        brand in groupedCars ?
            {
                ...groupedCars,
                [brand]: groupedCars.brand.concat([model])
            }
            :
            {
                ...groupedCars,
                [brand]: [model]
            }, {});
}

module.exports = {carsByBrand};