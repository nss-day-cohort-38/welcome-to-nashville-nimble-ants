let searchText;
let genreId;

const searchEventManager = {
    addButtonEventListener(genreObj) {
        const concertBtn = document.getElementById("search-concerts-btn");
        concertBtn.addEventListener("click", () => {
            
            const input = document.getElementById("search-concerts");
            searchText = input.value;
            let isGenre = true;
            isGenre = validateData.validateGenre(searchText, genreObj);
            if (isGenre) {
                genreId = getId.getGenreId(searchText, genreObj);
                let loader = `<div class="boxLoading">Loading Searches...</div>`;
                document.getElementById('search-results').innerHTML = loader;
                const concertResults = APIManager.searchConcertGenre(genreId);
                concertResults.then(data => {
                    if ("_embedded" in data) {
                        concertsDOMManager.renderResults(data._embedded.events, data.page.totalPages, "genre", searchText);

                    } else {
                        concertsDOMManager.renderResults(`There are no concerts of the genre "${searchText}" at this time`);
                    }
                });
            } else {
                concertsDOMManager.renderResults(`There are no concerts of the genre "${searchText}" at this time. Please select one of the suggestions.`);
            }
            input.value = "";
        });

    },
    addSaveButtonEvent(id) {
        const saveButtons = document.getElementById(`concert-btn-${id}`);
        saveButtons.addEventListener("click", () => {
            concertsDOMManager.renderItinerary(document.getElementById(`concert-name-${id}`).innerHTML);
        });
    },
    addKeywordButtonEvent() {
        const concertKeyBtn = document.getElementById("search-concerts-keyword-btn");
        concertKeyBtn.addEventListener("click", () => {
            const input = document.getElementById("search-concerts-keyword");
            searchText = input.value;
            let loader = `<div class="boxLoading">Loading Searches...</div>`;
                document.getElementById('search-results').innerHTML = loader;
            const concertResults = APIManager.searchConcertKeyword(searchText);
            concertResults.then(data => {
                if ("_embedded" in data) {
                    concertsDOMManager.renderResults(data._embedded.events, data.page.totalPages, "keyword", searchText);
                } else {
                    concertsDOMManager.renderResults(`There are no concerts with the keyword "${searchText}" at this time`);
                }
            });
            input.value = "";
        });

    },
    addPagesButtonEvents(buttonNode, j, topic) {
        if (topic == "genre") {
            buttonNode.addEventListener("click", (e) => {
                let loader = `<div class="boxLoading">Loading Searches...</div>`;
                document.getElementById('search-results').innerHTML = loader;
                const currentID = `${e.target.id}`;
                // document.getElementById(`${currentID}`).style.backgroundColor = "red";
                console.log(document.getElementById("page-10"));
                let genrePromise = APIManager.searchConcertGenrePage(genreId, j);
                genrePromise.then(data => {
                    if ("_embedded" in data) {
                        concertsDOMManager.renderResults(data._embedded.events, data.page.totalPages, "genre", searchText, currentID);
                    } else {
                        concertsDOMManager.renderResults("There are no concerts of this genre at this time", data.page.totalPages, "genre");
                    }
                });
            });
        } else if (topic == "keyword") {
            buttonNode.addEventListener("click", () => {
                let loader = `<div class="boxLoading">Loading Searches...</div>`;
                document.getElementById('search-results').innerHTML = loader;
                let keywordPromise = APIManager.searchConcertKeywordPage(searchText, j);
                keywordPromise.then(data => {
                    if ("_embedded" in data) {
                        concertsDOMManager.renderResults(data._embedded.events, data.page.totalPages, "keyword", searchText);
                    } else {
                        concertsDOMManager.renderResults("There are no concerts of this genre at this time", data.page.totalPages, "keyword");
                    }
                });
            });
        }
    }
};
searchEventManager.addKeywordButtonEvent();