function pascalito(text) {

    let str = text[0] + '';

    for (let i = 1; i < text.length; i++) {
        let curr = text[i];
        let curr2 = text[i].toUpperCase();
        if (curr === curr2) {
            str += ', ' + curr;
        } else {
            str += curr;
        }
    }
    console.log(str);
}