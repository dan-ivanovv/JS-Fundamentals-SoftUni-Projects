function ages(digit) {
    if (digit >= 0 && digit <= 2) {
        console.log(`baby`);
    } else if (digit > 2 && digit <= 13) {
        console.log(`child`);
    } else if (digit > 13 && digit <= 19) {
        console.log(`teenager`);
    } else if (digit > 19 && digit <= 65) {
        console.log(`adult`);
    } else if (digit > 65) {
        console.log(`elder`);
    } else {
        console.log(`out of bounds`);
    }
}