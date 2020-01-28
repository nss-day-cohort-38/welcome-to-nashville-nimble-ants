const validateData = {
    validateGenre(input, genreObj) {
        for (prop in genreObj){
            if (input == genreObj[prop].name) {
                return true;
            }
        }
    }
};