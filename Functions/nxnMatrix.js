function matrix(digit) {
    for (let i = 1; i <= digit; i++) {
        let row = '';
        for (let j = 1; j <= digit; j++) {
            row += `${digit} `;
        }
        console.log(row);
    }
}