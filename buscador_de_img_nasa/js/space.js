let contenedor = document.getElementById("contenedor");
let boton = document.getElementById("btnBuscar");

async function fetchProducts() {
    let busqueda = document.getElementById("inputBuscar").value;
    let API_URL = `https://images-api.nasa.gov/search?q=${busqueda}`;
    
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data.collection.items;
    } catch (error) {
        console.log(error);
    }
}

async function displayProducts( ) {
    let productos = await fetchProducts();
    contenedor.innerHTML = "";    
    productos.forEach(element => {
        contenedor.innerHTML += `<div>
            <img src=${element.links[0].href}></img>
            <h1>${element.data[0].title}</h1>
            <p>${element.data[0].description}</p>
        </div>`;
    });
}

boton.addEventListener("click", function(){
    displayProducts();
});