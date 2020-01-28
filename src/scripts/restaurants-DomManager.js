/*
const renderRestaurant = (restaurantHTML) => {
  const searchResultsContainer = document.getElementById("search-results");
  searchResultsContainer.innerHTML += restaurantHTML;
};
*/
const userInput = "1138";
const URL = `https://developers.zomato.com/api/v2.1/search?entity_id=${userInput}&entity_type=city&start=first&sort=rating&apikey=c460f1e9d15428b644335618a7e14819`;

const renderRestaurant = restaurantHTML => {
  const searchResultsContainer = document.getElementById("search-results");
  searchResultsContainer.innerHTML += restaurantHTML;
};

const restaurantFactory = ({ name, address }) => {
  return `
    <div class="result-blocks">
    <section>${name}</section>
    <section>${address}</section>
    </div>
    `;
};

document.getElementById("clickme").addEventListener("click", () => {
  fetch(URL)
    .then(response => response.json())
    .then(resturants => {
      const resturantList = resturants.restaurants;
      const restaurantData = resturantList.map(({ restaurant }) => {
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
