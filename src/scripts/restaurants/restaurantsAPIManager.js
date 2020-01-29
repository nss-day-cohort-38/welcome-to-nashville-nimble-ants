document
  .getElementById("search-restaurants-btn")
  .addEventListener("click", event => {
    event.preventDefault();

    const URL = `https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating&apikey=c460f1e9d15428b644335618a7e14819`;
    fetch(URL)
      .then(response => response.json())
      .then(resturants => {
        const resturantList = resturants.restaurants;
        const restaurantData = resturantList.map(({ restaurant }) => {
          return {
            name: restaurant.name,
            address: restaurant.location.address
          };
        });

        renderComponents(restaurantData);
      });
  });
