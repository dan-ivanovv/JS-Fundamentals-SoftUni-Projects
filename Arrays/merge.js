function merge(arr1, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        let digit1 = arr1[i];
        let digit2 = arr2[i];
        if (i % 2 === 0) {
            let sum = Number(digit1) + Number(digit2);
            arr3.push(sum);
        } else {
            let result = digit1 + digit2;
            arr3.push(result);
        }
    }
    let resultString = arr3.join(' - ');
    console.log(resultString);
}