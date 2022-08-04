//Scorpio
 let carreritas = ['Lucia', 'Roberto','Maria', 'Jesus', 'Andrea', 'Jose'];
console.log("Clasificación actual: ", carreritas);

carreritas.splice(4, 1);
carreritas.splice(2, 0, 'Andrea');
//console.log("Clasificación actual: ", carreritas);

carreritas.splice(5, 1);
carreritas.shift();
carreritas.unshift('Lucia', 'Cristobal', 'Fernanda', 'Armando');

carreritas.unshift('Federico');
console.log("Clasificación Final: ", carreritas); 

//cancer


/* function conv(a) {
let resul= (cel*(9/5)) + 32
k=273.15;
    let resul2= (cel + k)
    return alert("Los grados son: " resul + "°Farenheit"+"   "+ resul2+"° Kelvin" )   
}

let cel=parseInt (prompt("Ingresa grados Celcius: "));
conv(cel);
 */

//virgo
/* let pay=112;
let mun=75;


let num1=parseInt(prompt("Ingrese Numero de Payasos:  "));
let num2=parseInt(prompt("Ingrese Numero de Muñecas:  "));

let pes1= ((pay*num1) + (mun*num2));


if (pes1< 1000) {
    alert("El peso total es de: " + pes1+" Gramos")
}else {
    alert("El peso maximo por paquete es de 1kg")
} */


//Escorpio

/* numMag=Math.ceil((Math.random())*100);
        console.log(numMag);
let num1 =prompt("Ingrese Ok para iniciar");
if (num1==="Ok") {
    for (let i = 0; i <= 1;i=0 ){
        alert("Ingrese FIN en cualquier momento para finalizar");
        num2=parseInt(prompt("Adivina el numero del 1-100"));
        if (num2===numMag) {
            alert("Felicidades, adivinaste el número mágico")
            i=0;
            break;}
                else if (num2<numMag) {
                    alert("El número que ingresaste es menor al  número mágico");
                    i=0
                    break;}
                    else if (num2>numMag) {
                        alert("“El número que ingresaste es mayor al número mágico");
                        i=0;
                        break;}
                               else if (num2===FIN) {
                                i=0;
                               }
                               
    }
}else{
    alert("No entiendo, intente de nuevo")
    num1===Ok
} */
  

/* numMag=Math.ceil((Math.random())*100);
console.log(numMag);
let num1=prompt("Ingrese OK para iniciar");
    
    if (num1==="OK") {
        alert("Ingrese FIN en cualquier momento para finalizar");}
        for (let i = 0; i >= 1; ) {
        num2=parseInt(prompt("Adivina el numero del 1-100"));
            if (num2===numMag) {
                alert("Felicidades, adivinaste el número mágico")
                i=0;
                break;}
                    else if (num2<numMag) {
                        alert("El número que ingresaste es menor al  número mágico");
                        i=0
                        break;}
                        else if (num2>numMag) {
                            alert("“El número que ingresaste es mayor al número mágico");
                            i=0;
                            break;}
                                    else if(num2===FIN) {
                                    i=1;
                                    break;}
                                        else{
                                                alert("Intenta de Nuevo")
                                            }
            } 
     else {
        alert("No entiendo, intente de nuevo")
       i=0;
    }
  */





