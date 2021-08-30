function movies(list) {

    let newList = [];

    for (let element of list) {
        if (element.includes('addMovie')) {
            let [_, ...movie] = element.split(' ');
            let movieName = movie.join(' ');
            let movieObject = {
                name: movieName
            };
            newList.push(movieObject);

        } else if (element.includes('directedBy')) {
            let tokens = element.split(' ');
            let movieNameTokens = [];
            let directorNameTokens = [];

            let index = tokens.findIndex(x => x === 'directedBy');

            for (let i = 0; i < index; i++) {
                movieNameTokens.push(tokens[i]);
            }

            for (let i = index + 1; i < tokens.length; i++) {
                directorNameTokens.push(tokens[i]);
            }
            let name = movieNameTokens.join(' ');
            let director = directorNameTokens.join(' ');


            let movie = newList.find(x => x.name === name);

            if (movie) {
                movie.director = director;
            }

        } else {
            let tokens = element.split(' ');
            let date = tokens.pop();
            tokens.pop();
            let name = tokens.join(' ');

            let movie = newList.find(x => x.name === name);
            if (movie) {
                movie.date = date;
            }
        }
    }
    for (let movie of newList) {
        if (movie.director && movie.date && movie.name) {
            console.log(JSON.stringify(movie));
        }
    }

}