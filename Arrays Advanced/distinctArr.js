function distinct(list) {

    let newList = [];

    for (let i = 0; i < list.length; i++) {
        let current = list[i];

        if (!newList.includes(current)) {
            newList.push(current);
        }
    }

    console.log(newList.join(' '));

}