function spice(number) {
    let spice = number;
    let total = 0;
    let days = 0;
    let perDay = 0;


    while (spice > 99) {
        perDay = spice - 26;
        total += perDay;
        days++;

        spice -= 10;
    }
    if (total < 26) {
        total = total;
    } else {
        total -= 26;
    }
    console.log(days);
    console.log(total);
}