function train(arr) {

    let currentWagon = arr.shift().split(' ').map(Number);
    let maxCapacity = Number(arr.shift());

    for (let command of arr) {
        let tokens = command.split(' ');

        if (tokens[0] === 'Add') {
            let passengers = Number(tokens[1]);
            currentWagon.push(passengers);
        } else {
            let passengers = Number(tokens[0]);
            for (let i = 0; i < currentWagon.length; i++) {
                if (currentWagon[i] + passengers <= maxCapacity) {
                    currentWagon[i] += passengers;
                    break;
                }
            }
        }
    }

    console.log(currentWagon.join(' '));

}