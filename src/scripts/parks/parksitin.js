const parksItin = document.getElementById("park__itin");
const button = document.getElementById("park__saveBtn");
const searchResults = document.getElementById("search-results");

const parksItinSave = {
    addClickEventListener() {
        button.addEventListener("click", () => {
            // console.log("SAVE CLICKED");
        });

    }
}

const reply_click = (event) => {
    // console.log(event.target.id);
    const saveItin = document.getElementById(`park__${event.target.id.split("__")[2]}`);
    if (saveItin !== null) {
        const save__parks__itin = saveItin.childNodes[1];
        const display__parks__itin = save__parks__itin.innerText;
        // console.log(display__parks__itin);
        parksItin.innerHTML = `<div id="park__itin">Park: ${display__parks__itin}</div>`
    } else {
        // console.log("OUCH! Please be careful where you click.")
    }
}

searchResults.addEventListener("click", reply_click);
