function equalSums(list) {
    let hasFound = false;
    for (let i = 0; i < list.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let left = 0; left < i; left++) {
            let currentN = list[left];
            leftSum += currentN;
        }
        for (let right = i + 1; right < list.length; right++) {
            let currentN = list[right];
            rightSum += currentN;
        }
        if (leftSum === rightSum) {
            console.log(i);
            hasFound = true;
            break;
        }
    }
    if (!hasFound) {
        console.log('no');
    }
}