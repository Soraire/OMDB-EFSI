let Movie={};
function SearchForMovie(){
    var MovieName;
    fetch(`https://'www.omdbapi.com/?i=tt3896198&apikey=4ebe4b10`)
    .then(res => res.json())
    .then(res => {
        console.log("obtuve respuesta")
        valores = document.getElementById("valores");
        res.forEach(actual => {
            if (actual.compra && actual.venta) {
                NameType.innerHTML = `Nombre: ${actual.nombre} - compra: ${actual.compra} - venta: ${actual.venta}`
                valores.appendChild(dolar)    
            }            
        })
    })
    .catch(err => console.error("error", err))
console.log("Fin consulta - fetch")
}
