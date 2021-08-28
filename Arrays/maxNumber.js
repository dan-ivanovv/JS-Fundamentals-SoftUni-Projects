function maxNumber(list) {
    let largest = [];
    for (let i = 0; i < list.length; i++) {
        let digit = list[i];
        let isTop = true;
        for (let y = i + 1; y < list.length; y++) {
            let digit2 = list[y];
            if (digit2 >= digit) {
                isTop = false;
                break;
            }
        }
        if (isTop) {
            largest.push(digit);
        }
    }
    console.log(largest.join(' '));
}