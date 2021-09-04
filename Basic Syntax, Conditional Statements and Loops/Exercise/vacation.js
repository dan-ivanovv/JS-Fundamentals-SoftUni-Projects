function vacation(count, type, day) {
    let price = 0;
    if (type === `Business` && count >= 100) {
        count -= 10;
    }
    if (type === `Students`) {
        switch (day) {
            case `Friday`: price = 8.45 * count; break;
            case `Saturday`: price = 9.8 * count; break;
            case `Sunday`: price = 10.46 * count; break;
        }
    } else if (type === `Business`) {
        switch (day) {
            case `Friday`: price = 10.9 * count; break;
            case `Saturday`: price = 15.6 * count; break;
            case `Sunday`: price = 16 * count; break;
        }
    } else if (type === `Regular`) {
        switch (day) {
            case `Friday`: price = 15 * count; break;
            case `Saturday`: price = 20 * count; break;
            case `Sunday`: price = 22.5 * count; break;
        }
    }
    if (type === `Students` && count >= 30) {
        price = price - price * 0.15;
    } else if (type === `Regular` && count >= 10 && count <= 20) {
        price = price - price * 0.05;
    } else {
        price = price;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}