let num = 0;

const createRestaurantComponent = ({ name, address }) => {
  num++;
  return `
      <div id="result-blocks-${num}">
      <section id="restaurant-name">${name}</section>
      <section>${address}</section>
      <button id="rest__saveBtn_${num}">Save</button></<button>
      </div>
      `;
};

const renderRestaurant = restaurantHTML => {
  const searchResultsContainer = document.getElementById("search-results");
  searchResultsContainer.innerHTML = "";
  searchResultsContainer.innerHTML += restaurantHTML;
};
/*
let num = 0;

const createRestaurantComponent = {
  restaurantFactory= ({ name, address }) {
    const address = JSON.parse(park.mapped_location.human_address);
    num++;
    rreturn `
      <div class="result-blocks-${num}">
      <section id="restaurant-name">${name}</section>
      <section>${address}</section>
      <button id="rest__saveBtn_${num}">Save</button></<button>
      </div>
      `;
  },
  renderSearchResults(searchResults) {
    const container = document.getElementById("search-results");
    container.innerHTML = "";
    searchResults.forEach(park => {
      container.innerHTML += this.parksFactory(park);
    });
  }
};
*/
