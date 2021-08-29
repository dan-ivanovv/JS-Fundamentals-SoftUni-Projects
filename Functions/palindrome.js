function palidrome(list) {

    for (let number of list) {
        let numberAsString = number.toString();
        let reversedNumber = numberAsString.split('').reverse().join('');

        if (numberAsString === reversedNumber) {
            console.log(`true`);
        } else {
            console.log(`false`);
        }
    }
}