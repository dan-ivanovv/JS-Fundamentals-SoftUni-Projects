function sorting(list) {

    let sorted = [];
    let numbers = list.length;

    for (let i = 0; i < numbers; i++) {
        let current;
        if (i % 2 === 0) {
            current = Math.max(...list);
        } else {
            current = Math.min(...list);
        }
        sorted.push(current)

        list.splice(list.indexOf(current), 1);
    }
    console.log(sorted.join(' '));
}