function rotate(list, num) {
    for (let i = 0; i < num; i++) {
        let n = list[0];
        for (let j = 0; j < list.length - 1; j++) {
            list[j] = list[j + 1];
        }
        let lastIndex = list.length - 1;
        list[lastIndex] = n;
    }
    console.log(list.join(' '));
}