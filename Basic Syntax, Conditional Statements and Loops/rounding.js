function rounding(num, precision) {
    if (precision > 15) {
        precision = 15;
    }
    const roundedNum = num.toFixed(precision);
    const withoutZeros = parseFloat(roundedNum);
    console.log(withoutZeros);

}