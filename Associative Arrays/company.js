function solve(arr) {
    let result = {};
    arr.forEach(line => {
        let [company, id] = line.split(' -> ');
        if (!result.hasOwnProperty(company)) result[company] = [];
        if (!result[company].includes(id)) result[company].push(id);
    })
    Object.entries(result)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(x => console.log(`${x[0]}\n-- ${x[1].join('\n-- ')}`));
}