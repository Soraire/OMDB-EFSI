function SearchForMovie() {
    fetch('https://www.omdbapi.com/?i=tt3896198&apikey=4ebe4b10')
    .then(res => res.json())
    .then(res => {
        console.log("Obtuve respuesta", res);
        // Make sure res is an array before using forEach()
        if (Array.isArray(res)) {
            const valores = document.getElementById("valores");
            res.forEach(actual => {
                if (actual.Title != null) {
                    const movieElement = document.createElement("div");
                    movieElement.innerHTML = `Nombre: ${actual.nombre} - compra: ${actual.compra} - venta: ${actual.venta}`;
                    valores.appendChild(movieElement);
                }
            });
        }
    })
    .catch(err => console.error("Error", err));
    console.log("Fin consulta - fetch");
}
