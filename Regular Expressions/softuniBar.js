function solve(input) {

    let command = input.shift();
    let pattern = /^%(?<customer>[A-Z][a-z]*)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+\.*\d*)\$$/;
    let income = 0;
    while (command !== 'end of shift') {
        let match = pattern.exec(command);
        if (match !== null) {
            let { customer, product, count, price } = match.groups;
            let totalPrice = Number(count) * Number(price);
            income += totalPrice;
            console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);
        }
        command = input.shift();
    }
    console.log(`Total income: ${income.toFixed(2)}`);
}