function calc(first, operator, second) {
    let sum = 0;
    if (operator === '+') {
        sum = first + second;
    } else if (operator === '-') {
        sum = first - second;
    } else if (operator === '*') {
        sum = first * second;
    } else if (operator === "/") {
        sum = first / second;
    }
    console.log(sum.toFixed(2));
}