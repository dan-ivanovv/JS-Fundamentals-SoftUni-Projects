function hashtag(input) {

    let asArr = input.split(' ');

    let newArr = [];

    for (let token of asArr) {
        if (token[0] === '#' && token.length > 1) {
            let valid = true;
            for (let char of token.substring(1)) {
                let code = char.charCodeAt(0);
                if (code < 65 || code > 122 || code >= 91 && code <= 96) {
                    valid = false;
                    break;
                }
            }
            if (valid) {
                newArr.push(token.substring(1));
            }
        }
    }

    console.log(newArr.join('\n'));

}