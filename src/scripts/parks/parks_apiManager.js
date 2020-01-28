const apiBaseUrl = "https://data.nashville.gov/resource/74d7-b74t.json";

const parks_apiManager = {
    searchParks(searchCriteria) {
        // console.log(searchCriteria);
        const url = apiBaseUrl + `?${searchCriteria}=Yes`;
        return fetch(url).then(resp => resp.json());
    }
};