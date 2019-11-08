document.addEventListener('DOMContentLoaded', function() { 
       
        var watchlistJSON = localStorage.getItem('watchlist')
        var watchlist = JSON.parse(watchlistJSON)
  
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
        renderMovies(watchlist)
})

