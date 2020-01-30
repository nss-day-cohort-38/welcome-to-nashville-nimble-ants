const eventManager = {
    itinerarySaveEvent() {
        document.getElementById("itinerary-btn").addEventListener("click", () => {
            i++;
            const itineraryHTML = document.getElementById("itinerary");
            const itineraryTextwSpaces = itineraryHTML.textContent.split("\n");
            const itineraryText = itineraryTextwSpaces.filter(element => {
                if (/\S/.test(element)) {
                    return element;
                }
            });
            itineraryText.pop();

            const itineraryArray = itineraryText.map(element => {
                const newElement = element.split(": ");
                return newElement.slice(1, newElement.length);


            });

            const iteneraryObj = {
                Park: itineraryArray[0].toString(),
                Concert: itineraryArray[1].toString(),
                Restaurant: itineraryArray[2].toString(),
                Arts: itineraryArray[3].toString()
            }

            apiManager.postDataIt(iteneraryObj) /* post */
                /* .then(get) */
                // .then((thing) => {
                //     console.log(iteneraryObj);
                // });
            // return itineraryArray;
        });
    }
}