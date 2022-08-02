/*Tipos de Variable */
let a; // VARIABLE DE TIPO LOCAL
var b; // vARIABLE DE TIPO GLOBAL
const c=0; // VARIABLE CONSTANTE

/* Tipos de Datos */

//Strig = cadena de texto
let cadena = "Asi de declara";

//Number-- valor nuemrico
//null--valor "0"
//Boolean---True and false
//undefined--sin valor

// Plantilla Literales

console.log(`Esta es una cadena ${5+4}`);
console.log("Esta es una cadena ${5+4}");

let nombre = 'Raul';

//Let presentacion
console.log("Mi nombre es " + nombre);
console.log(`Mi nombre es ${nombre}`);


// Arreglos - matrices - arrays

let arr=[1, "A",null, undefined,[true,false]]
let arr2=new Array();
console.log(arr2);


/* Objects */
// Clave y valor 

const obj = {
    nombre: 'RAUL',
    edad:31,
    hobbies:["ver pelis","leer"],
    auto: { marca:"vw",
            modelo:2000,
            year: "pointer"

    },
    saludar: function(){
        console.log("Hola");
    }
};

console.log(obj);

