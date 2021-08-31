function party(list) {

    let index = list.indexOf('PARTY');
    let check = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    let vip = [];
    let regular = [];

    for (let i = 0; i < index; i++) {
        let guest = list[i];
        if (check.includes(guest[0])) {
            vip.push(guest);
        } else {
            regular.push(guest);
        }
    }

    for (let i = index + 1; i < list.length; i++) {
        let guest = list[i];
        if (vip.includes(guest)) {
            vip.splice(vip.indexOf(guest), 1);
        } else if (regular.includes(guest)) {
            regular.splice(regular.indexOf(guest), 1);
        }
    }

    let total = vip.length + regular.length;
    console.log(total);

    console.log(vip.join(`\n`));
    console.log(regular.join(`\n`));
}