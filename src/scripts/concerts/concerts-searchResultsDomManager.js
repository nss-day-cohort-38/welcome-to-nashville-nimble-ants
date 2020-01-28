const concertsDOMManager = {
    resultHTML(concert, i) {
        const noteProp = "pleaseNote";
        const note = noteProp in concert ? concert.pleaseNote : "";
        let addressLine1 = "address" in concert._embedded.venues[0] ? concert._embedded.venues[0].address.line1 : "No Address Listed";

        let concertHTML = `
        <div id="concert-${i}">
            <p id="concert-name-${i}">${concert.name} @ ${concert._embedded.venues[0].name}</p>
            <p>${addressLine1} | ${concert._embedded.venues[0].city.name}, ${concert._embedded.venues[0].state.stateCode} ${concert._embedded.venues[0].postalCode}</p>
            <p style="font-size: 12px;">${note}</p>
            <p><a href="${concert.url}">Buy Tickets</a></p>
            <button type="submit" id="concert-btn-${i}">Save</button>
            <hr>
        </div>
        `;

        return concertHTML;
        // <!-- <img src="${concert.images[0].url}" alt=""> -->
    },
    renderResults(concerts, pages, searchType, searchText) {
        let i = 0;
        const resultContainer = document.querySelector("#search-results");
        resultContainer.innerHTML = "";
        if (typeof concerts == "string") {
            resultContainer.innerHTML = `<p>${concerts}</p>`;
        } else {
            concerts.forEach(concert => {
                i++;
                resultContainer.innerHTML += this.resultHTML(concert, i, pages);
            });

            i = 0;

            const pageContainer = document.createElement(`div`);
            pageContainer.id = "page-container";

            const searchTitle = document.createElement(`div`);
            searchTitle.id = "search-title";
            searchTitle.innerHTML = `<h3>Searching for concerts with "${searchText}" as a ${searchType}</h3>`;
            resultContainer.prepend(searchTitle, pageContainer);
    
            
            // let pageContainer = document.getElementById("page-container");
            for (let j = 0; j < pages; j++) {
                let pageButtonHTML = `<button type="submit" id="page-${j + 1}">${j + 1}</button>`;
                pageContainer.innerHTML += pageButtonHTML;
            }


            for (let j = 0; j < pages; j++) { 
                searchEventManager.addPagesButtonEvents(document.getElementById(`page-${j + 1}`), j, searchType);
            }

            concerts.forEach(() => {
                i++;
                searchEventManager.addSaveButtonEvent(i);
            });
            
        }

    },
    renderItinerary(name){
        const concertItinContainer = document.getElementById("concert__itin");
        concertItinContainer.innerHTML = `Concert: ${name}`;

    }
};