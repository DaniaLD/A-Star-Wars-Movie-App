const moviesJson = require('../movies.json');

// --------- Home page ------------
exports.home = function(req, res) {

    let movies = moviesJson.movies;

    res.render('home', {
        title: 'Star wars movies',
        movies
    });
};

// --------- Moveis single page ------------
exports.movie_single = function(req, res) {
    
    let movies = moviesJson.movies;
    let episode_number = req.params.episode_number;
    
    if(episode_number >= 1 && episode_number <= 6){
        let movie = movies[ episode_number - 1 ];
        let title = movie.title;
        let main_characters = movie.main_characters;
        
        res.render('movie_single', {
            movies,
            title,
            movie,
            main_characters,
        });
    } else {
        res.render('notFound', {
            movies,
            title: "404, OOOPS! Sorry, page not found."
        });
    }
    
}

exports.notFound = function(req, res) {
    let movies = moviesJson.movies;

    res.status(404).render('notFound', {
        movies,
        title: "404, OOOPS! Sorry, page not found."
    });
};