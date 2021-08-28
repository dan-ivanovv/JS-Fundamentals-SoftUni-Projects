function oddEven(digit) {
    let digitAsString = digit.toString();

    let sumOdd = 0;
    let sumEven = 0;

    for (number of digitAsString) {

        if (Number(number) % 2 === 0) {
            sumEven += Number(number);
        } else {
            sumOdd += Number(number);
        }
    }
    let finalResult = `Odd sum = ${sumOdd}, Even sum = ${sumEven}`;
    return finalResult;
}