function print(start, end) {
    let resultString = '';
    sum = 0;
    for (let i = start; i <= end; i++) {
        resultString += ` ${i}`
        sum += i;
    }
    console.log(resultString);
    console.log(`Sum: ${sum}`);
}