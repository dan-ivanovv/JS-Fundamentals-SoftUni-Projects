function heroes(list) {
    let hero = [];

    for (let heroString of list) {
        let element = heroString.split(' / ');
        let name = element[0];
        let level = Number(element[1]);
        let items = element[2].split(', ');

        let heroData = {
            name,
            level,
            items
        };
        hero.push(heroData)
    }

    let sortedHeroes = hero.sort((a, b) => a.level - b.level);

    for (let her of sortedHeroes) {
        console.log(`Hero: ${her.name}`);
        console.log(`level => ${her.level}`);
        console.log(`items => ${her.items.sort((a, b) => a.localeCompare(b)).join(', ')}`);
    }

}