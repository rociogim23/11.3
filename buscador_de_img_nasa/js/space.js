let busqueda = document.getElementById("btnBuscar").value;
let API_URL = `https://images-api.nasa.gov/search?q=${busqueda}`
let contenedor = document.getElementById("contenedor");
let boton = document.getElementById("btnBuscar");

async function fetchProducts(){
    try{ 
        await fetch(API_URL)
        .then(response => response.json())
        .then(data => {console.log(data)})
    }
    catch(error){
        console.log(error);
    }
}


async function displayProducts(){
    let productos = await fetchProducts();
        
    productos.forEach(element => {
        contenedor.innerHTML+=`<div>
            <img src=${element.href}></img>
            <h1>${element.title}</h1>
            <p>${element.description}</p>
        </div>
        `
    });
}

boton.addEventListener("click", function(){
    displayProducts();
});