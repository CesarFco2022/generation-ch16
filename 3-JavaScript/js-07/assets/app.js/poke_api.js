const urlpoke="https://pokeapi.co/api/v2/pokemon/150";


const imgPokemon =document.getElementById("img-Pokemon");
const idPokemon = document.getElementById("id-pokemon");
const nombrepokemon=document.getElementById("nombre-pokemon");



 async function obtenerporkemon(url) {

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
}

obtenerporkemon(urlpoke);