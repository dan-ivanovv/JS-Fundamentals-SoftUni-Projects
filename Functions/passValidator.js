function passwordValidator(password) {

    function passwordLength(string) {

        if (string.length >= 6 && string.length <= 10) {
            return true;
        } else {
            return false;

        }
    }
    function passwordLetterAndDigits(string) {
        for (let char of string) {
            let charCode = char.charCodeAt(0);

            if (!(charCode >= 48 && charCode <= 57) &&
                !(charCode >= 65 && charCode <= 90) &&
                !(charCode >= 97 && charCode <= 122)) {
                return false;
            }

        }
        return true;
    }
    function atLeastTwoDigits(string) {

        let counter = 0;

        for (let char of string) {
            let charCode = char.charCodeAt(0);

            if (charCode >= 48 && charCode <= 57) {
                counter++;
            }
        }
        if (counter >= 2) {
            return true;
        } else {
            return false;
        }
    }

    let isLengthValid = passwordLength(password);
    let containLettersAndDigits = passwordLetterAndDigits(password);
    let twoDigits = atLeastTwoDigits(password);

    if (isLengthValid && containLettersAndDigits && twoDigits) {
        console.log(`Password is valid`);
    }

    if (!isLengthValid) {
        console.log(`Password must be between 6 and 10 characters`);
    }

    if (!containLettersAndDigits) {
        console.log(`Password must consist only of letters and digits`);
    }

    if (!twoDigits) {
        console.log(`Password must have at least 2 digits`);
    }
}