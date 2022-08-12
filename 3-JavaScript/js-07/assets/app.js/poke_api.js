const urlpoke="https://pokeapi.co/api/v2/pokemon/";


const imgPokemon =document.getElementById("img-Pokemon");
const idPokemon = document.getElementById("id-pokemon");
const nombrepokemon=document.getElementById("nombre-pokemon");
const ls=document.getElementById("list-habilidades");
const buscadorPokemon=document.getElementById("buscador")
                  
const tipos=document.getElementById("tipos-hab")



//Eventos

buscadorPokemon.addEventListener("submit",(e)=>{
    e.preventDefault()
    const inputPokemon=document.getElementById("busqueda");
    console.log(inputPokemon.value);

    const nuevaurl= urlpoke + inputPokemon.value;
    console.log(nuevaurl);

    obtenerporkemon(nuevaurl);
})



 async function obtenerporkemon(url) {
    try {

    const respuesta=await fetch(url);
    const datos=await respuesta.json();

    const pokemon = {
        nombre:datos.forms[0].name,
        habiliadad:datos.abilities,
        id:datos.id,
        tipo:datos.types,
        imagen:datos.sprites.other["official-artwork"].front_default
    }
    imgPokemon.src =pokemon.imagen;
    idPokemon.textContent=`ID: ${pokemon.id}`;
    nombrepokemon.textContent=pokemon.nombre;

    //Habilidades


    let temple =''
        for (let i = 0; i < pokemon.habiliadad.length; i++) {      
            const nombreHabilidad=pokemon.habiliadad[i].ability.name;
            
            temple+=`<li class="list-group-item">${nombreHabilidad}</li>`
            
        }            
   
    ls.innerHTML= temple;

        //Tipos 
let temple2=''
pokemon.tipo.forEach((tipos) => {
    const nombreTipo=tipos.type.name;
    console.log(nombreTipo);
    temple2 +=`<li class="list-group-item">${nombreTipo}</li>`
});

tipos.innerHTML=temple2;
    }catch(e){
        alert("Pokemon no encontrado")
    }

}

