function convert(symbol1, symbol2) {
    let min = symbol1.charCodeAt(0);
    let max = symbol2.charCodeAt(0);

    let one = symbol1.charCodeAt(0);
    let two = symbol2.charCodeAt(0);

    if (one > two) {
        min = symbol2.charCodeAt(0);
        max = symbol1.charCodeAt(0);
    }

    let result = '';

    for (let i = min + 1; i < max; i++) {
        let currentSymbol = String.fromCharCode(i);
        result += currentSymbol + ' ';
    }

    return result;
}