function reveal(word, text) {

    let specialWord = word.split(', ');
    let token = text.split(' ');
    let arr = [];

    for (let el of token) {
        let replaced = false;
        for (let word of specialWord) {
            if (el == '*'.repeat(word.length)) {
                arr.push(word)
                replaced = true;
            }
        }
        if (replaced == false) {
            arr.push(el)
        }
    }

    console.log(arr.join(' '));

}