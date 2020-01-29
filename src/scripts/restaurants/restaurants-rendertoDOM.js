// const userInput = "1138";
// const URL = `https://developers.zomato.com/api/v2.1/search?entity_id=${userInput}&entity_type=city&start=first&sort=rating&apikey=c460f1e9d15428b644335618a7e14819`;

const renderComponents = restaurantData => {
  const userValue = document.getElementById("search-restaurants").value;
      // console.log(restaurantData); // array if objects with name and objects
      const filteredRestaurantList = restaurantData.filter(restaurant => {
        return restaurant.name === userValue;
      });

      let restaurantDataComponents = [];
      filteredRestaurantList.forEach(restaurant => {
        restaurantDataComponents.push(
          createRestaurantComponent.restaurantFactory(restaurant)
        );
      });
      //console.log(restaurantDataComponents); // each of the divs
      restaurantDataComponents.forEach(component => {
        createRestaurantComponent.renderRestaurant(component);
      });
    }

//console.log(renderComponents());
// between line 18 and 19 .... else {
//const searchResultsContainer = document.getElementById("search-results");
//searchResultsContainer.innerHTML = "No Restaurants Found";
//};
