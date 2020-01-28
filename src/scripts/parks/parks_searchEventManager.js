const parks_searchEventManager = {
    addSearchClickEventListener() {
        const button = document.getElementById("search-parks-btn");
        button.addEventListener("click", () => {
            // console.log("HELLO");
            const option = document.getElementById("parkSelector");
            const searchCriteria = option.value;
            const searchResultPromise = parks_apiManager.searchParks(searchCriteria);
            searchResultPromise.then(searchResults => {
                // console.log(searchResults);
                parks_searchResultsDomManager.renderSearchResults(searchResults);
            });

        });
    }
};