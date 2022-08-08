// getElementById();
console.log(document.getElementById("parrafo1"));

const variable=document.getElementById("parrafo1");

console.log(variable.textContent);

variable.textContent="";

variable.textContent="un titulo que aun no tengo"

console.log(variable.textContent);

variable.style.color="red";
variable.style.background="yellow";

//querySelector()

const parrafos = document.querySelector('.parrafo')
console.log(parrafos.textContent);

parrafos.textContent += "?\n Modificando el titulo que no tienes "


// querySelectorALL /// LISTA DE NODOS 
const dosparrafo=document.querySelectorAll('p'); 
console.log(dosparrafo);
dosparrafo[2].style.fontSize="2rem";

const enlace=document.getElementById("link");
console.log(enlace.href);

enlace.href="https://www3.animeflv.net/";
enlace.target="_blank";
enlace.textContent="Enlace a lo rico"


const parrafo4_1=document.getElementById("parrafo4")

console.log(parrafo4_1.nodeName);
console.log(parrafo4_1.textContent);
console.log(parrafo4_1.innerHTML);

console.log(parrafo4_1.outerHTML);



//parrafo4_1.innerHTML='<div class="elemento"> Estes es un div</div>' /// cambia en contenido pero no el elemento en si 


//parrafo4_1.outerHTML='<div class="elemento"> Estes es un div</div>' /// cambia al elemento por completo 


// JS permite modificar las clases css
// utlizando css

console.log(parrafo4_1.classList.contains("elemento"));
parrafo4_1.classList.add("elemento");



