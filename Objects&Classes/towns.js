function towns(data) {

    for (let info of data) {
        let current = info.split(' | ');
        let town = current[0];
        let latitude = Number(current[1]).toFixed(2);
        let longitude = Number(current[2]).toFixed(2);

        let final = {
            town,
            latitude,
            longitude
        };
        console.log(final);
    }
}