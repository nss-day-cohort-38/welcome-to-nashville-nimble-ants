let number = 0;

const createRestaurantComponent = {
  restaurantFactory({ name, address }) {
    number++;
    return `
      <section id="result-blocks-${number}">
      <div id="${number}">${name}</div>
      <div>${address}</div>
      <button id="rest__saveBtn_${number}">Save</button></<button>
      </section>
      `;
  },
  renderRestaurant(restaurantHTML) {
    const container = document.getElementById("search-results");
    container.innerHTML = "";
    container.innerHTML += restaurantHTML
  }
};
