function travel(input) {

    let destinations = {};

    for (let element of input) {
        let [country, town, cost] = element.split(' > ');

        if (!Object.keys(destinations).includes(country)) {
            destinations[country] = {};

        }

        if (!Object.keys(destinations[country]).includes(town)) {
            destinations[country][town] = Number(cost);
        }

        if (Number(cost) < destinations[country][town]) {
            destinations[country][town] = Number(cost);
        }
    }

    let sorted = Object.entries(destinations).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [country, towns] of sorted) {
        let townsEntried = Object.entries(towns).map(x => `${x[0]} -> ${x[1]}`);
        console.log(`${country} -> ${townsEntried.join(' ')}`);
    }

}