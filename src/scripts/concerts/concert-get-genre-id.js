const getId = {
    getGenreId(genre){
        const searchText = genre.toLowerCase();
        let genreId;
        genresObj.forEach(element => {
            if (element.name == searchText){
                genreId = element.id;
            }
        });
        return genreId;
    }
}