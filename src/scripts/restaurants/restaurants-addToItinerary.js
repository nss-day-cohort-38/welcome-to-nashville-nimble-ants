const RestItinerary = document.getElementById("restaurant__itin");
const clickSaveRestaurant = document.getElementById("result-blocks");
const searchResults = document.getElementById("search-results");
const restSaveButton = document.getElementById('rest__saveBtn');


function handleHeaderMouseOver (event) {
    restSaveButton.innerHTML += event
}
restSaveButton.addEventListener("click", () => {
    console.log("Saved!")
});
