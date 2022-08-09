
/* URL A CONSUMIR */
const urlAleatorios = "https://dog.ceo/api/breeds/image/random"

/* Elementos del DOM */
const imagenPerrito= document.getElementById("img-perrito");
/* console.log(imagenPerrito); */
const btn=document.getElementById("btn-Dog");


btn.addEventListener("click", ()=>{
    console.log("se genero perrito");
    obtenerPerrito(urlAleatorios)
})

async function obtenerPerrito(url) {
    const respuesta = await fetch(url)
    const datos = await respuesta.json()

    console.log(datos);
    console.log(datos.message);
    console.log(datos.status);    
    imagenPerrito.src = datos.message
}

//obtenerPerrito(urlAleatorios)