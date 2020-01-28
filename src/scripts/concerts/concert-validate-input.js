const validateData = {
    validateGenre(input, genreObj) {
        console.log(genreObj);
        for (prop in genreObj){
            if (input == genreObj[prop].name) {
                return true;
            } else {
                return false;
            }
        }
    }
};