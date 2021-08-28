function addSubtract(digits) {
    let newSum = 0;
    let oldSum = 0;
    for (let i = 0; i < digits.length; i++) {
        let n = digits[i];
        let newNumber = 0;

        if (n % 2 === 0) {
            newNumber = n + i;
            digits[i] = newNumber;
        } else {
            newNumber = n - i;
            digits[i] = newNumber;
        }
        oldSum += n;
        newSum += newNumber;
    }
    console.log(digits);
    console.log(oldSum);
    console.log(newSum);

}