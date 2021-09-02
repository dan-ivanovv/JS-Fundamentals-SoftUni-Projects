function solve(input) {

    let nameRegex = /[A-Za-z]/g;
    let distanceReg = /\d/g;

    let racerNames = input.shift().split(', ');
    let racers = {};

    for (let name of racerNames) {
        racers[name] = 0;
    }

    while (input[0] != 'end of race') {
        let line = input.shift();

        let letter = line.match(nameRegex);
        let numbers = line.match(distanceReg);

        let name = letter.join('');
        let distance = numbers.map(Number);

        let totalDistance = 0;

        for (let x of distance) {
            totalDistance += x;
        }

        if (racers.hasOwnProperty(name)) {
            racers[name] += totalDistance;
        }
    }
    let result = Object.entries(racers).sort((a, b) => b[1] - a[1]);

    if (result[0]) {
        console.log(`1st place: ` + result[0][0]);
    }
    if (result[1]) {
        console.log(`2nd place: ` + result[1][0]);
    }
    if (result[2]) {
        console.log(`3rd place: ` + result[2][0]);
    }
}