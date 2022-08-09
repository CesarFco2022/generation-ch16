const saludo = "Hola mundo";
const datos = [{
            nombre: "Cesar",
            apellido:"Mata"
        },
        {
            nombre: "Cesar",
            apellido:"Mata"
        },
        {
            nombre: "Cesar",
            apellido:"Mata"
        }
]

// funcion para simular una peticion
function obtenerDatos (){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {

            if(true){

                resolve(datos);

            } else{

                reject ("No se pudo obtener datos");

            }

        }, 2000)
    })
}



obtenerDatos().then((da)=>{
        console.log(da);

})


// FORM#2
//Forma 2 - Funciones asíncronas - async await
async function funcionAsincrona() {
    try {
        
        const datos = await obtenerDatos()
        console.log(datos);
    
    } catch (error) {
        console.log(error);
    }
}




