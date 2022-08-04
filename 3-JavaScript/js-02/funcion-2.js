function miFunction(a,b) {
    return(a+b);
};
let resultado = miFunction(0,-3);
console.log("El resultado es: " + resultado);

//*************Funcion Expresion o Anonima */
let suma = function(a,c){
    return(a+c);
};
resultado=suma(2,3);


let caracteres = "La suma es : ";
console.log(caracteres + resultado);

let div = function(a,c){
    return((a / c));};
    resultado2=div(2,3);

console.log(caracteres + resultado2);

let mul = function(a,c){
    return(a * c);};
    resultado3=mul(2,3);

console.log(caracteres + resultado3);


(function (a,b) {
    console.log("El resultado es: "+ (a + b)); 
}(3,5))