function search(list1, list2) {

    let newList = [];

    newList = list1.slice(0, list2[0]);
    for (let i = 0; i < list2[1]; i++) {
        newList.shift();
    }
    let counter = 0;

    for (let i = 0; i < newList.length; i++) {
        if (newList[i] === list2[2]) {
            counter++;
        }
    }

    console.log(`Number ${list2[2]} occurs ${counter} times.`);
}