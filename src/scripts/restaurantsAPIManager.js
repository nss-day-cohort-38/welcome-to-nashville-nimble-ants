/*
const userInput = "1138";
async function getRestaurants(userInput) {
  const restApiKey = `https://developers.zomato.com/api/v2.1/search?entity_id=${userInput}&entity_type=city&start=first&sort=rating&apikey=c460f1e9d15428b644335618a7e14819`;
  let response = await fetch(restApiKey); // The response returned by the fulfilled fetch() promise is assigned to the response variable when that response becomes available, and the parser pauses on this line until that occurs. Once the response is available, the parser moves to the next line,
  const results = await response.json();
  return results.restaurants;
}

// create a click handler
// once the user clicks submit you need to grab a reference to the input.value
// and the callback to that click handler will be the call to getRestaurants with the value of the input passed in.

getRestaurants(userInput).then(restaurants => {
  // console.log("restaurants", restaurants);
  const restaurantData = restaurants.map(({ restaurant }) => {
    // console.log(JSON.stringify(restaurant, null, 2));

    const name = restaurant.name;
    const address = restaurant.location.address;

    return {
      name,
      address
    };
    //const restaurantHTML = restaurantFactory(restaurant);
    //renderRestaurant(restaurantHTML);
  });
  console.log("STEP 1 - restaurantData: ", restaurantData);

  let restaurantDataComponents = [];
  restaurantData.forEach(restaurant => {
    restaurantDataComponents.push(restaurantFactory(restaurant));
  });
  console.log("STEP 2 - restaurantDataComponents: ", restaurantDataComponents);

  restaurantDataComponents.forEach(component => {
    renderRestaurant(component);
  });
});

data in format we wanted it (array of objects of name and address) the return statement
created array of strings (line 55)
fr ech of those components we did the +=
*/
