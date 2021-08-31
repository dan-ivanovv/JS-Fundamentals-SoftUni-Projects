function words(list) {

    let obj = {};

    let toFind = list.shift().split(' ');

    for (let word of toFind) {
        obj[word] = 0;
    }

    for (let current of list) {
        if (Object.keys(obj).includes(current)) {
            obj[current]++;
        }
    }

    let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);

    for (let [key, value] of sorted) {
        console.log(`${key} - ${value}`);
    }

}