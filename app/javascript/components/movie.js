const results = document.querySelector("#results");


  const searchMovies = (word) => {
    fetch(`https://www.omdbapi.com/?s=${word}&apikey=adf1f2d7`)
      .then(response => response.json())
      .then((data) => {
        data.Search.forEach((movie) => {
          const newMovie = `<li class='col'>
            <img src="${movie.Poster}" height="200" />
          </li>`
          results.insertAdjacentHTML('beforeend', newMovie)
        });
      });
  }

const searchForm = document.querySelector("#search-movies")


    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      results.innerHTML = "";
      const word = document.querySelector("#keyword").value;
      searchMovies(word);
    });

export { searchMovies };
