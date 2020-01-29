document.querySelector('body').addEventListener('click', function(event) {
    //console.log("event.target", event.target.id);
    if (event.target.id === 'rest__saveBtn') {
        const itinerarySection = document.getElementById("restaurant__itin");
        const restaurantName = document.getElementById("restaurant-name").innerHTML;
        // console.log("restaurantName: ", restaurantName);
        itinerarySection.innerHTML = `Restaurant: ${restaurantName}`;
    }
  });
