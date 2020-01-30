let number = 0;
// Search results container and HTML Skeloton to be placed on the DOM
const createRestaurantComponent = {
  restaurantFactory({ name, address, cuisines }) {
    number++;
    return `
      <section id="result-blocks${number}">
      <div id="restaurant-name-${number}">${name}</div>
      <div>${address}</div>
      <div>Cuisine: ${cuisines}</div>
      <button id=${number} class="rest-classSave-btn">Save</button></<button>
      </section>
      `;
  },
  renderRestaurant(restaurantHTML) {
    const container = document.getElementById("search-results");
    container.innerHTML += restaurantHTML
  }
};
// button just has ID. so that we can select button. might need class and d
