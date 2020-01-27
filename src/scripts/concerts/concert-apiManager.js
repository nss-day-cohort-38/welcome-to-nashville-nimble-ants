const concertUrl = `https://app.ticketmaster.com/discovery/v2/events?apikey=${concertKey}&unit=miles&locale=*&size=10&city=Nashville&countryCode=US&stateCode=TN&segmentId=KZFzniwnSyZfZ7v7nJ&segmentName=Music&preferredCountry=us`;

const APIManager = {
    searchConcertGenre(genreId) {
        // const criteria = encodeURIComponent(searchCriteria);
        const url = concertUrl + `&genreId=${genreId}`;
        return fetch(url)
            .then(response => response.json());
    }
};


// let search = APIManager.searchConcertGenre(/* "Country" */);
// search.then(data => console.log(data));
// genre=Country&
// concerts_apiManager.js
// concerts_searchEventManaager.js
// concerts_searchResultsDomManager.js