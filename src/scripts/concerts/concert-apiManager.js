const concertUrl = `https://app.ticketmaster.com/discovery/v2/events?apikey=${concertKey}&unit=miles&locale=*&size=10&city=Nashville&countryCode=US&stateCode=TN&segmentName=Music&preferredCountry=us`;

const APIManager = {
    searchConcertGenre(genreId) {
        const url = concertUrl + `${genreId}&page=0`;
        console.log(url);
        return fetch(url)
            .then(response => response.json())
            .catch((error) => {
                alert("searchConcertGenre " + error);
                document.getElementById('search-results').innerHTML = `Sorry, our concert genre search is currently down. Try our other searches.`;
            });
    },
    searchConcertKeyword(searchCriteria) {
        const criteria = encodeURIComponent(searchCriteria);
        const url = concertUrl + `&keyword=${criteria}&page=0`;
        return fetch(url)
            .then(response => response.json())
            .catch((error) => {
                alert("searchConcertKeyword " + error);
                document.getElementById('search-results').innerHTML = `Sorry, our concert keyword search is currently down. Try our other searches.`;
            });

    },
    searchConcertKeywordPage(searchCriteria, page) {
        const criteria = encodeURIComponent(searchCriteria);
        const url = concertUrl + `&keyword=${criteria}&page=${page}`;
        return fetch(url)
            .then(response => response.json())
            .catch((error) => {
                alert("searchConcertKeywordPage " + error);
                document.getElementById('search-results').innerHTML = `Sorry, our concert keyword pagination is down. Try our other searches.`;
            });
    },
    searchConcertGenrePage(genreId, page) {
        const url = concertUrl + `&genreId=${genreId}&page=${page}`;
        return fetch(url)
            .then(response => response.json())
            .catch((error) => {
                alert("searchConcertGenrePage " + error);
                document.getElementById('search-results').innerHTML = `Sorry, our concert genre pagination is down. Try our other searches.`;
            });
    },
};