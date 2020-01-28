const artsItin = document.getElementById("art__itin");
const arts_button = document.getElementById("art__saveBtn");
const arts_searchResults = document.getElementById("search-results");

const artsItinSave = {
    addClickEventListener() {
        arts_button.addEventListener("click", () => {
            // console.log("SAVE CLICKED");
        });

    }
}

const arts_reply_click = (event) => {
    console.log(event.target.id);
    // const saveItin = document.getElementById(`art__${event.target.id.split("__")[2]}`);
    // if (saveItin !== null) {
    //     const save__parks__itin = saveItin.childNodes[1];
    //     const display__parks__itin = save__parks__itin.innerText;
    //     console.log(display__parks__itin);
    //     parksItin.innerHTML = `<div id="park__itin">Park: ${display__parks__itin}</div>`
    // } else {
    //     console.log("OUCH! Please be careful where you click.")
    // }
}

arts_searchResults.addEventListener("click", arts_reply_click);