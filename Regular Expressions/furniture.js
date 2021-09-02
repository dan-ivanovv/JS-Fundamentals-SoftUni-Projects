function store(input) {

    let regex = />>(?<name>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)/;
    let furniture = [];
    let total = 0;

    while (input[0] != 'Purchase') {
        let line = input.shift();
        let match = regex.exec(line);
        if (match != null) {
            let { name, price, qty } = match.groups;
            price = Number(price);
            qty = Number(qty);
            total += price * qty;
            furniture.push(name);
        }
    }

    console.log(`Bought furniture:`);
    for (let item of furniture) {
        console.log(item);
    }
    console.log(`Total money spend: ` + total.toFixed(2));
}