const concertUrl = `https://app.ticketmaster.com/discovery/v2/events?apikey=${concertKey}&unit=miles&locale=*&size=10&city=Nashville&countryCode=US&stateCode=TN&segmentName=Music&preferredCountry=us`;

const APIManager = {
    searchConcertGenre(genreId) {
        const url = concertUrl + `&genreId=${genreId}`;
        return fetch(url)
            .then(response => response.json());
    },
    searchConcertKeyword(searchCriteria){
        const criteria = encodeURIComponent(searchCriteria);
        const url = concertUrl + `&keyword=${criteria}`;
        return fetch(url)
            .then(response => response.json());
        
    },
    searchConcertKeywordPage(searchCriteria, page){
        const criteria = encodeURIComponent(searchCriteria);
        const url = concertUrl + `&keyword=${criteria}&page=${page}`;
        console.log(criteria, "criteria");
        return fetch(url)
            .then(response => response.json());
    },
    searchConcertGenrePage(genreId, page) {
        const url = concertUrl + `&genreId=${genreId}&page=${page}`;
        return fetch(url)
            .then(response => response.json());
    },
};