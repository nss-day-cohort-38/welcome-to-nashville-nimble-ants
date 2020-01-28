let searchText;
let genreId;

const searchEventManager = {
    addButtonEventListener(genreObj) {
        const concertBtn = document.getElementById("search-concerts-btn");
        concertBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const input = document.getElementById("search-concerts");
            const searchText = input.value;
            genreId = getId.getGenreId(searchText, genreObj);
            const concertResults = APIManager.searchConcertGenre(genreId);
            concertResults.then(data => {
                if ("_embedded" in data) {
                    concertsDOMManager.renderResults(data._embedded.events, data.page.totalPages, "genre");

                } else {
                    concertsDOMManager.renderResults("There are no concerts of this genre at this time");
                }
            });
        });

    },
    addSaveButtonEvent(id) {
        const saveButtons = document.getElementById(`concert-btn-${id}`);
        saveButtons.addEventListener("click", (e) => {
            // Addtoitenerary(e.target.parentNode.innerHTML);
        });
    },
    addKeywordButtonEvent() {
        const concertKeyBtn = document.getElementById("search-concerts-keyword-btn");
        concertKeyBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const input = document.getElementById("search-concerts-keyword");
            searchText = input.value;
            const concertResults = APIManager.searchConcertKeyword(searchText);
            concertResults.then(data => {
                if ("_embedded" in data) {
                    concertsDOMManager.renderResults(data._embedded.events, data.page.totalPages, "keyword");
                } else {
                    concertsDOMManager.renderResults("There are no concerts of this genre at this time");
                }
            });
        });
    },
    addPagesButtonEvents(buttonNode, j, topic) {
        if (topic == "genre") {
            buttonNode.addEventListener("click", () => {
                let genrePromise = APIManager.searchConcertGenrePage(genreId, j);
                genrePromise.then(data => {
                    if ("_embedded" in data) {
                        concertsDOMManager.renderResults(data._embedded.events, data.page.totalPages, "genre");
                    } else {
                        concertsDOMManager.renderResults("There are no concerts of this genre at this time", data.page.totalPages, "genre");
                    }
                });
            });
        } else if (topic == "keyword") {
            buttonNode.addEventListener("click", () => {
                let keywordPromise = APIManager.searchConcertKeywordPage(searchText, j);
                keywordPromise.then(data => {
                    if ("_embedded" in data) {
                        concertsDOMManager.renderResults(data._embedded.events, data.page.totalPages, "keyword");
                    } else {
                        concertsDOMManager.renderResults("There are no concerts of this genre at this time", data.page.totalPages, "keyword");
                    }
                });
            });
        }
    }
};
searchEventManager.addKeywordButtonEvent();