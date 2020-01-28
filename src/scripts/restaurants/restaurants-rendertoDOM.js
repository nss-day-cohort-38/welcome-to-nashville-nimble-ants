
const userInput = "1138";
const URL = `https://developers.zomato.com/api/v2.1/search?entity_id=${userInput}&entity_type=city&start=first&sort=rating&apikey=c460f1e9d15428b644335618a7e14819`;

const renderComponents = restaurantData => {
    const userValue = document.getElementById("search-restaurants").value;
    const filteredRestaurantList = restaurantData.filter((restaurant) => {
      return restaurant.name === userValue;
    });

    let restaurantDataComponents = [];
    filteredRestaurantList.forEach(restaurant => {
      restaurantDataComponents.push(restaurantFactory(restaurant));
    });

    restaurantDataComponents.forEach(component => {
     renderRestaurant(component);
    });
};
