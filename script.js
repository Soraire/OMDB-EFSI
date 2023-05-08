function SearchForMovie() {
    console.log()
    var typeholder = document.getElementById('Type').value
    var yearholder = document.getElementById('Year').value
    var placeholder = document.getElementById('Title').value
    var linkholder = 'http://www.omdbapi.com/?t=' + placeholder + '&apikey=4ebe4b10';
    if(typeholder!="None"&&yearholder!=null)
    {
        linkholder = 'http://www.omdbapi.com/?t=' + placeholder + '&y=' + yearholder + '&type=' + typeholder + '&apikey=4ebe4b10';
    }
    else if (typeholder!="None")
    {
        linkholder = 'http://www.omdbapi.com/?t=' + placeholder + '&type=' + typeholder + '&apikey=4ebe4b10';
    }
    else if (yearholder!=null)
    {
        linkholder = 'http://www.omdbapi.com/?t=' + placeholder + '&y=' + yearholder + '&apikey=4ebe4b10';
    }
    fetch(linkholder)
    .then(res => res.json())
    .then(res => {
        console.log("Obtuve respuesta", res);
        
                    const movieElement = document.createElement("div");
                    movieElement.innerHTML = `Title: ${res.Title}, Type: ${res.Type}, Year: ${res.Year}`;
                    NameType.appendChild(movieElement);
                })
    .catch(err => console.error("Error", err));
    console.log("Fin consulta - fetch");
}
