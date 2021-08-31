function occurances(list) {

    let listed = {};
    let listOfStr = list.split(' ');

    for (let el of listOfStr) {
        let lower = el.toLowerCase();
        if (!Object.keys(listed).includes(lower)) {
            listed[lower] = 0;
        }
        listed[lower]++;
    }

    let resultStr = '';

    for (let [key, value] of Object.entries(listed)) {
        if (value % 2 !== 0) {
            resultStr += `${key} `;
        }
    }
    console.log(resultStr);
}