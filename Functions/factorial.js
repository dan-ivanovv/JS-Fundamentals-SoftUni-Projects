function factorials(num1, num2) {

    function firstFactorial(digit) {
        let total1 = 1;

        for (let i = digit; i >= 1; i--) {
            total1 *= i;
        }
        return total1;
    }

    function secondFactorial(digit) {
        let total2 = 1;

        for (let y = digit; y >= 1; y--) {
            total2 *= y;
        }
        return total2;

    }

    let firstTotal = firstFactorial(num1);
    let secondTotal = secondFactorial(num2);

    let total = firstTotal / secondTotal;

    return total.toFixed(2);


}