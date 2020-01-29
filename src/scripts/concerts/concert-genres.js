 const genresObjPromise = fetch("https://app.ticketmaster.com/discovery/v2/classifications/segments/KZFzniwnSyZfZ7v7nJ.json?id=KnvZfZ7vAv6&apikey=ArKbxIOYorCETHOefzvorroVnAxnWCtG")
     .then(results => results.json())
     .catch((error) => alert("genresObjPromise " + error))
     .then(data => {
         let genreObj = [];
         data._embedded.genres.forEach(element => {
             genreObj.push({
                 name: element.name,
                 id: element.id
             });
         });
         makeOptions.makeConcertOptions(genreObj);

     });