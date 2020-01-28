const concertsDOMManager = {
    resultHTML(concert, i, pages) {
        // console.log(concert);
        const noteProp = "pleaseNote";
        let note;

        if (noteProp in concert) {
            note = concert.pleaseNote;
        } else {
            note = "";
        }

        let concertHTML = `
        <div id="concert-${i}">
            <p>Artist: ${concert.name}</p>
            <p>Venue Name: ${concert._embedded.venues[0].name}</a></p>
            <p>${concert._embedded.venues[0].address.line1} | ${concert._embedded.venues[0].city.name}, ${concert._embedded.venues[0].state.stateCode} ${concert._embedded.venues[0].postalCode}</p>
            <p style="font-size: 12px;">${note}</p>
            <p><a href="${concert.url}">Buy Tickets</a></p>
            <button type="submit" id="concert-btn-${i}">Save</button>
            <hr>
        </div>
        `;

        if (i == 10) {
            console.log(pages);
            for (let j = 1; j <= pages; j++) {
                console.log(j);
                let pageButtonHTML = `
                <button type="submit" id="page-${j}">${j}</button>
                `;
                concertHTML += pageButtonHTML;
            }

        }

        return concertHTML;
        // <!-- <img src="${concert.images[0].url}" alt=""> -->
    },
    renderResults(concerts, pages) {
        let i = 0;
        // console.log(concerts);
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

            concerts.forEach(() => {
                i++;
                searchEventManager.addSaveButtonEvent(i);
            });


        }

    }
};