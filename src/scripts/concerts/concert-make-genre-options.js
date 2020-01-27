const makeOptions = {
    makeConcertOptions() {
        const genreOptions = document.querySelector("#genre-options");
        genreOptions.innerHTML = "";
        genresObj.forEach(element => {
            console.log(element.name);
            genreOptions.innerHTML += `<option value="${element.name}">`;
        });
        // console.log(genreOptions);
        searchEventManager.addButtonEventListener();
        concertsDOMManager.

    },
}

makeOptions.makeConcertOptions();