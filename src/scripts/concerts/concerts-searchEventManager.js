const searchEventManager = {
    addButtonEventListener(genreObj) {
        const concertBtn = document.getElementById("search-concerts-btn");
        console.log(concertBtn);
        concertBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const input = document.getElementById("search-concerts");
            const searchText = input.value;
            const genreId = getId.getGenreId(searchText, genreObj);
            const concertResults = APIManager.searchConcertGenre(genreId);
            concertResults.then(data => {
                // console.log(data);
                if ("_embedded" in data) {
                    console.log();
                    concertsDOMManager.renderResults(data._embedded.events, data.page.totalPages);
                    
                } else {
                    concertsDOMManager.renderResults("There are no concerts of this genre at this time");
                }
            });
        });
    },
    addSaveButtonEvent(id){
        const saveButtons = document.getElementById(`concert-btn-${id}`);
        saveButtons.addEventListener("click", (e) => {
            // Addtoitenerary(e.target.parentNode.innerHTML);
            console.log(e.target.parentNode);
        });
    },
    addPagesButtonEvents(){
        
    }
};