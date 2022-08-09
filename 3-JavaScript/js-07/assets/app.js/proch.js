const url="https://dog.ceo/api/breeds/image/random"

// respuesta de peticion
/* fetch(url).then((respuesta)=>{
    console.log(respuesta);
})


fetch(url)
.then((rest)=> rest.json())
.then((datos)=>{
    console.log(datos);
}).cacht((error)=>{
    console.log(error);
})
 */


function obtenerPerrito() {
    const respuesta = await fetch(url);
    const datos = await respuesta.json()

    console.log(datos);
}