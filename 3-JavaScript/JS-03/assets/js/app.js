/* control de flujo */
/* CONDICIONALES */ 
// IF
/* 
let condicion= "A";
if (condicion==="A") {
    console.log("Entro en la condicion A");
    
    } else if (condicion==="B") {
        console.log("Entro en la condicion B");

        } else if (condicion==="C") {
              console.log("Entro en la condicion C");
            } else {

                    }

/*** Funciones como Objetos */

/* function miFuncion(a = 6, b = 7) {
    let res = 0; // propiedad, estado de inicio donde va a partir
    res = (a * b); //acción o proceso, reasigno el valor del resultado del proceso
    return res;
}

console.log(typeof miFuncion);
var miFuncionTexto = miFuncion.toString(); // Convierte la función en un texto
console.log(miFuncionTexto); */ 

let ans="Sumar"

switch (ans) {
    case "Sumar":
        console.log("Que hueva");
    break;
        case "Div":
                console.log("MAS HUEVA");
        break;
    default:
        console.log("No entiendo :(");
        break;
}



if(elegir === "sumar"){

    console.log("Vamos a sumar");

}else if(elegir == "restar"){

    console.log("Vamos a restar");

}else if(elegir == "dividir"){

    console.log("Vamos a dividir");

}else if(elegir == "multiplicar"){

    console.log("Vamos a multiplicar");

} else {

    console.log("No entiendo");

}

