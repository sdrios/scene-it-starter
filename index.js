document.addEventListener('DOMContentLoaded', function() { 

  
    // RENDER MOVIES FUNCTION 
    function renderMovies(movies){ 
        movies.forEach(function(movie){
            $("#results").append(`<div class="movies-container card" style="width:18rem;">
                <div class="movie card-body">
                    <img class ="card-img-top" src="${movie.Poster}">
                    <p class="movie-title card-title">${movie.Title}</p>
                    <p class="movie-date card-text">${movie.Year}</p>
                    <button class="add-button btn btn-primary" onclick="saveToWatchlist('${movie.imdbID}')">Add</button>
                </div>
            </div>`)
        })
    }
    //SEARCH FORM FUNCTION
    document.getElementById('search-form').addEventListener('submit', function(e){
        e.preventDefault();
        renderMovies(movieData)//parameter is array of objects
    })
});

      //WATCHLIST FUNCTION
    function saveToWatchlist(movieID){
        console.log(movieID)
        var movie = movieData.find(function(currentMovie){
            return currentMovie.imdbID == movieID
        })
        console.log(movie)
        var watchlistJSON = localStorage.getItem('watchlist')
        var watchlist = JSON.parse(watchlistJSON)

        if (watchlist == null){
            watchlist = []
        } else{
            watchlist.push(movie)
            watchlistJSON = JSON.stringify(watchlist)
            localStorage.setItem('watchlist', watchlistJSON)
        }
    }