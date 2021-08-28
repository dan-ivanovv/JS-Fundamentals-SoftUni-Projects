function sequence(list) {
    let max = [];
    for (let i = 0; i < list.length; i++) {
        let element = [list[i]];
        for (let n = i + 1; n < list.length; n++) {
            if (list[i] === list[n]) {
                element.push(list[n]);
            } else {
                break;
            }
        }
        if (element.length > max.length) {
            max = element;
        }
    }
    console.log(max.join(" "));
}