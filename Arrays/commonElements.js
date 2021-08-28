function common(list1, list2) {
    for (let i = 0; i < list1.length; i++) {
        let element1 = list1[i];
        for (let y = 0; y < list2.length; y++) {
            let element2 = list2[y];
            if (element1 === element2) {
                console.log(element1);
            }
        }
    }

}