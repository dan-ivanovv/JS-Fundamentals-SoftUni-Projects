function piccolo(list) {

    let lot = [];

    for (let el of list) {
        let [direction, number] = el.split(', ');
        if (direction === 'IN') {
            if (!lot.includes(number))
                lot.push(number)
        } else if (direction === 'OUT' && lot.includes(number)) {
            let index = lot.indexOf(number);
            lot.splice(index, 1);
        }
    }

    let sorted = lot.sort((a, b) => a.localeCompare(b))

    if (lot.length < 1) {
        console.log(`Parking Lot is Empty`);
    } else {
        for (let n of sorted) {
            console.log(n);
        }
    }
}