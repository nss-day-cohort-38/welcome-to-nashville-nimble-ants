
let num = 0;

  const restaurantFactory = ({ name, address }) => {
    num++;
    return `
      <section id="result-blocks-${num}">
      <section id="restaurant-name">${name}</section>
      <section>${address}</section>
      <button id="rest__saveBtn_${num}">Save</button></<button>
      </div>
      `;
  };

   const renderSearchResults = (restaurantHTML) => {
    const container = document.getElementById("search-results");
    container.innerHTML = "";
      container.innerHTML += restaurantHTML
    };
