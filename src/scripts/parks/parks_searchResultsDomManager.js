let num = 0;

const parks_searchResultsDomManager = {
    parksFactory(park) {
        const address = JSON.parse(park.mapped_location.human_address);
        num++;
        return `
            <section id="park__${num}" class="park">
                <div class="park__name">${park.park_name}</div>
                <div class="park__location">${address.address} ${address.city}, ${address.state} ${address.zip}</div>
                <div id="park__saveBtn"><button id="park__saveBtn__${num}" class="btn save__${num}">Save</button></div>
            </section>
        `
    },
    renderSearchResults(searchResults) {
        const container = document.getElementById("search-results");
        container.innerHTML = "";
        searchResults.forEach(park => {
            container.innerHTML += this.parksFactory(park);
        })
    }
};