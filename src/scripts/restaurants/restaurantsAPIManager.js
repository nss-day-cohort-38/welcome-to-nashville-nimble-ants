let loader = `<div class="boxLoading">Loading Searches...</div>`;
document.getElementById("search-results").innerHTML = loader;

document
  .getElementById("search-restaurants-btn")
  .addEventListener("click", () => {
    const URL = `https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating&apikey=c460f1e9d15428b644335618a7e14819`;
    fetch(URL)
      .then(response => response.json())
      .then(restaurants => {
        const restaurantList = restaurants.restaurants;
        // console.log(restaurantList);
        const restaurantData = restaurantList.map(({ restaurant }) => {
          return {
            name: restaurant.name,
            address: restaurant.location.address
          };
        });
        renderComponents(restaurantData);
        const restaurantSearchInput = document.getElementById("search-restaurants");
        restaurantSearchInput.value = "";  // clears search box after we render the results aka the restaurant component
        //console.log(restaurantData); // the array drilled down to name and address
      });
    //.catch(err => {
    // instead of calling renderComponents write a message something like
    // const searchResultsContainer = document.getElementById("search-results");
    // searchResultsContainer.innerHTML = "No Restaurants Found";
  });
