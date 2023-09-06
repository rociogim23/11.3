let API_URL = 'https://images-api.nasa.gov/search?q=';
let contenedor = document.getElementById('contenedor');
let boton = document.getElementById('btnBuscar');

async function fetchProducts(busqueda) {
  try {
    const response = await fetch(API_URL + busqueda);
    const data = await response.json();
    return data.collection.items; // Accede a la lista de imágenes
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function displayProducts() {
  const busqueda = document.getElementById('inputBuscar').value; // Obtiene el valor de búsqueda
  const productos = await fetchProducts(busqueda);

  contenedor.innerHTML = ''; // Limpia el contenedor antes de mostrar nuevas imágenes

  productos.forEach(element => {
    contenedor.innerHTML += `<div>
        <img src="${element.links[0].href}"></img>
        <h1>${element.data[0].title}</h1>
        <p>${element.data[0].description}</p>
    </div>`;
  });
}

boton.addEventListener('click', function () {
  displayProducts();
});