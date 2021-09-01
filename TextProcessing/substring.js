function substring(word, text) {

    let splited = text.split(' ');

    for (let curr of splited) {
        let isFound = false;
        if (curr.toLocaleLowerCase() === word.toLocaleLowerCase()) {
            isFound = true;
            return console.log(`${word.toLocaleLowerCase()}`);
        }
    }

    console.log(`${word.toLocaleLowerCase()} not found!`);


}