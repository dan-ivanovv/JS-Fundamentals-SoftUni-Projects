function perfect(digit) {
    let sum = 0;

    for (let i = 0; i < digit; i++) {
        if (digit % i === 0) {
            sum += i;
        }
    }
    if (sum === digit) {
        return `We have a perfect number!`
    } else {
        return `It's not so perfect.`;
    }
}