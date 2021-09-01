function repeating(text) {

    let str = '';


    for (let i = 0; i < text.length; i++) {
        if (text[i] != text[i + 1]) {
            str += text[i];
        }

    }
    console.log(str);
}