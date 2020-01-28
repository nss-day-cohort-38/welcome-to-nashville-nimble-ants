const artsHTML = document.getElementById("search-arts");

const artsOptionsArray = ["Historic Metro Courthouse", "Nashville Farmers' Market", "Metro Office Building", "McCabe Park Community Center"]

const artsHtmlToDom = () => {
    let arts__HTML = `
    <div id="search__arts">
    Search For Art by Venue:
    <select name="artSelector" id="artSelector">`

    for (let i=0; i<artsOptionsArray.length; i++) {
        arts__HTML += `<option value="${artsOptionsArray[i]}">${artsOptionsArray[i]}</option>`
    }

    arts__HTML += `
    </select >
    <button id="search-arts-btn">Submit</button>
    </div >
    `
    artsHTML.innerHTML = arts__HTML;
}


