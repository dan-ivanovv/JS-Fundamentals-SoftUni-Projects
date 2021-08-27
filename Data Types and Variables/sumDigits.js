function sumDigit(digit) {
    let result = digit.toString();
    let summer = 0;

    for (let total of result) {
        summer += Number(total);
    }
    console.log(summer);

}