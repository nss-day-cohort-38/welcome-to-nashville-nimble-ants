const searchEventManager = {
    addButtonEventListener() {
        const concertBtn = document.getElementById("search-concerts-btn");
        concertBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const input = document.getElementById("search-concerts");
            const searchText = input.value;
            const genreId = getId.getGenreId(searchText);
            const concertResults = APIManager.searchConcertGenre(genreId);
            concertResults.then(data => console.log(data._embedded.events));
        });
    },
    addInputEventListener() {
        
    }

};

// searchEventManager.addEventListener();

// <option value="Blue Moon">