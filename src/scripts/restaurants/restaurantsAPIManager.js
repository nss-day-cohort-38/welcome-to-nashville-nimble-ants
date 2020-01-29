document
  .getElementById("search-restaurants-btn")
  .addEventListener("click", () => {
    const URL = `https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating&apikey=c460f1e9d15428b644335618a7e14819`;
    fetch(URL)
      .then(response => response.json())
      .then(restaurants => {
        const restaurantList = restaurants.restaurants;
        const restaurantData = restaurantList.map(({ restaurant }) => {
          return {
            name: restaurant.name,
            address: restaurant.location.address
          };
        });
console.log(restaurantData);
        renderComponents(restaurantData);
      })
      .catch((err) => {
        // instead of calling renderComponents write a message something like
        // const searchResultsContainer = document.getElementById("search-results");
        // searchResultsContainer.innerHTML = "No Restaurants Found";
      });
  });
