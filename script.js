// async function cargarPagina(pagina) {

//     const respuesta = await fetch(pagina);

//     const html = await respuesta.text();

//     document.getElementById("contenido").innerHTML = html;

//     window.scrollTo(0, 0);
// }

// /* CARGA INICIAL */

// cargarPagina("pages/inicio.html");

window.cargarPagina = async function(pagina) {

    const respuesta = await fetch(pagina);

    const html = await respuesta.text();

    document.getElementById("contenido").innerHTML = html;

    window.scrollTo(0, 0);
}

/* Página inicial */

cargarPagina("pages/inicio.html");