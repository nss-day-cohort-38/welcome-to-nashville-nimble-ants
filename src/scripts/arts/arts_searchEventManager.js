const arts_searchEventManager = {
    addSearchClickEventListener() {
        const button = document.getElementById("search-arts-btn");
        button.addEventListener("click", () => {
            // console.log("HELLO");
            const option = document.getElementById("artSelector");
            const searchCriteria = option.value;
            // console.log(option.value);
            const searchResultPromise = arts_apiManager.searchArts(searchCriteria);
            searchResultPromise.then(searchResults => {
                // console.log(searchResults);
                arts_searchResultsDomManager.renderSearchResults(searchResults);
            });

        });
    }
};