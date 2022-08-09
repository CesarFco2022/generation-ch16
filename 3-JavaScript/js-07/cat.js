/*  

    Instrucciones:

    * Utilizar la API cat
        - https://api.thecatapi.com/v1/images/search

    * Con un boton se debe mostrar una imagen de un gato
    * Que las imagenes tengan un tamaño de 600x400 sin deformar la imagen

    Nota:
    Cuidado con el tipo de dato que se recibe

*/


/* URL A CONSUMIR */
const urlAleatorios = "https://api.thecatapi.com/v1/images/search"

/* Elementos del DOM */
const imagenPerrito= document.getElementById("img-cat");
/* console.log(imagenPerrito); */
const btn=document.getElementById("btn-cat");


btn.addEventListener("click", ()=>{
    console.log("se genero gatito");
    obtenerPerrito(urlAleatorios)
})

async function obtenerPerrito(url) {
    const respuesta = await fetch(url)
    const datos = await respuesta.json()

   // console.log(datos);
    console.log(datos[0]);
    console.log(datos[0].url);
    
        
    imagenPerrito.src = datos[0].url
}
//console.log(datos[0]);