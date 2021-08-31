function solve(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i += 2) {
        !result.hasOwnProperty(arr[i]) ? result[arr[i]] = Number(arr[i + 1]) : result[arr[i]] += Number(arr[i + 1]);
    }
    Object.entries(result).map(x => console.log(`${x[0]} -> ${x[1]}`))
}