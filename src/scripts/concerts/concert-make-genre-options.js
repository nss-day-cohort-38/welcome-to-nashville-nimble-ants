const makeOptions = {
    makeConcertOptions(genresObj) {
        const genreOptions = document.querySelector("#genre-options");
        genreOptions.innerHTML = "";
        genresObj.forEach(element => {
            genreOptions.innerHTML += `<option value="${element.name}">`;
        });
        // console.log(genreOptions);
        searchEventManager.addButtonEventListener(genresObj);
        

    }
}

