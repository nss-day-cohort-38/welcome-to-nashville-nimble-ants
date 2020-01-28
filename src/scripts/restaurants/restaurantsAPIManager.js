
document.getElementById("search-restaurants-btn").addEventListener("click", () => {
  fetch(URL)
    .then(response => response.json())
    .then(restaurants => {
      const restaurantList = restaurants.restaurants;
      const restaurantData = restaurantList.map(({ restaurant }) => {
        const name = restaurant.name;
        const address = restaurant.location.address;
        return {
          name,
          address
        };
      });
      console.log("restaurantData: ", restaurantData);
      let restaurantDataComponents = [];
      restaurantData.forEach(restaurant => {
        restaurantDataComponents.push(restaurantFactory(restaurant));
      });
      restaurantDataComponents.forEach(component => {
        renderRestaurant(component);
      });
    });
});
