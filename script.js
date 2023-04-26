function SearchForMovie() {
    console.log()
    var placeholder = document.getElementById('Title').value
    var linkholder = 'http://www.omdbapi.com/?t=' + placeholder + '&apikey=4ebe4b10';
    fetch(linkholder)
    .then(res => res.json())
    .then(res => {
        console.log("Obtuve respuesta", res);
        
                    const movieElement = document.createElement("div");
                    movieElement.innerHTML = `Titulo: ${placeholder}`;
                    valores.appendChild(movieElement);
                })
    .catch(err => console.error("Error", err));
    console.log("Fin consulta - fetch");
}
