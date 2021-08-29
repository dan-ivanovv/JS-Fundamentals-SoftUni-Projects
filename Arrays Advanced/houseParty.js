function party(arr) {
    let guestList = [];
    for (string of arr) {
        let str = string.split(' ');
        if (!str.includes("not")) {
            if (guestList.includes(str[0])) {
                console.log(`${str[0]} is already in the list!`);
            } else {
                guestList.push(str[0]);
            }
        } else if (str.includes("not")) {
            if (guestList.includes(str[0])) {
                guestList.pop(str[0])
            } else if (!guestList.includes(str[0])) {
                console.log(`${str[0]} is not in the list!`)
            }
        }
    }
    console.log(guestList.join('\n'))
}