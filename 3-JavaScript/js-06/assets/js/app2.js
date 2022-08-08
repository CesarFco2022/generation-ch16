// crear elemento
const imagen =document.createElement("img");
console.log(imagen);

//modificar los atriburos html del elemento 

imagen.src= "https://placeimg.com/200/200/animals";
imagen.alt="Imagen aleatorias de animales";


// lo insertamos en un elemento padre
document.body.appendChild(imagen);
document.body.insertAdjacentElement("afterbegin",imagen);
document.body.insertAdjacentElement("afterend",imagen);

// forma correcta de crear un elemento
// 1- crear un elemento padre
// 2- seleccionar elemento padre
const padreimg=document.getElementById("padreimg");

// 3-crear el elemento
const imagen2 = document.createElement("img");

//4- modificamos los atributos del elemento
imagen2.src ="https://placeimg.com/200/200/nature";
imagen.alt ="Imagenes de naturaleza";

//5-insertar elemento
padreimg.appendChild(imagen2);



// Utilizar forEach para pintar datos
const frutas =["Toronja", "Manzana", "Mandarina", "Limon", "Granada", "Melon"];

const List=document.getElementById("Frutas");


// forma 1 y mas comun
/* frutas.forEach((element)=>{
    const li = document.createElement('li');
    li.textContent = element
    List.appendChild(li);

}); */

// forma 2

frutas.forEach ((el)=>{
    List.innerHTML+=`<li> ${el} </li>`;
});















