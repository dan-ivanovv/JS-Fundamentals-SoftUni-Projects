function hard(input) {

    let fixed = [];

    let text = input.shift().split(' ');
    let unknown = input.shift();

    for (let curr of text) {
        if (!curr.includes('_')) {
            fixed.push(curr);
        } else {
            for (let word of unknown) {
                let current = word.length;
                if (curr.includes('.')) {
                    let index = curr.indexOf('.');
                    let updated = curr.substring(0, index);
                    if (updated.length === current) {
                        fixed.push(word + '.');
                        unknown.splice(unknown.indexOf(word), 1);
                        break;
                    }
                } else if (curr.includes(',')) {
                    let index = curr.indexOf(',');
                    let updated = curr.substring(0, index);
                    if (updated.length === current) {
                        fixed.push(word + ',');
                        unknown.splice(unknown.indexOf(word), 1);
                        break;
                    }
                }
                else {
                    if (curr.length === current) {
                        fixed.push(word);
                        unknown.splice(unknown.indexOf(word), 1);
                        break;
                    }
                }
            }

        }
    }

    console.log(fixed.join(' '));

}