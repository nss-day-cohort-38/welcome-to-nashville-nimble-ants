const restaurantFactory = ({ name, address }) => {
    return `
      <div class="result-blocks">
      <section id="restaurant-name">${name}</section>
      <section>${address}</section>
      <button id="rest__saveBtn">Save</button></<button>
      </div>
      `;
  };

  const renderRestaurant = restaurantHTML => {
    const searchResultsContainer = document.getElementById("search-results");
    searchResultsContainer.innerHTML += restaurantHTML;
  };
