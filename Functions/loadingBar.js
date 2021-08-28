function loadingBar(percent) {
    let percentLeft = 100 - percent;
    let loadingBarPercent = '';

    for (let i = 1; i <= percent; i++) {
        if (i % 10 === 0) {
            loadingBarPercent += `${String.fromCharCode(37)}`;
        }
    }

    for (let x = 1; x <= percentLeft; x++) {
        if (x % 10 === 0) {
            loadingBarPercent += `${String.fromCharCode(46)}`
        }
    }

    if (percent === 100) {
        console.log(`${percent}% Complete!`);
        console.log(`[${loadingBarPercent}]`);

    } else {
        console.log(`${percent}% [${loadingBarPercent}]`);
        console.log(`Still loading...`);
    }



}