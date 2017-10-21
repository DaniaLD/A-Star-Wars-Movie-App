const moviesJson = require('../movies.json');

exports.home = function(req, res) {

    let movies = moviesJson.movies;

    res.render('home', {
        title: 'Star wars movies',
        movies: movies
    });
};

exports.notFound = function(req, res) {
    // build a nice 404 page and render it
    res.status(404).send("<h1>404, OOOPS!</h1><h2>Sorry, file not found.</h2>");
};