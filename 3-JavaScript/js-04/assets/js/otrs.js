//sort()
//ordenar los elementos de un arreglo

const arr = ["X", "A", "H", "a", "W", "b"];

arr.sort();
//console.log(arr);


const arr3=[5, 1231, 567, 1, 80];
arr3.sort((a,b)=>a - b)// ordena de menor a mayor
//               b - a)   ordena de mayor a menor 
//console.log((arr3));

const arr4=[5, 1231, 567, 1, 80];
/* for (let i = 0; i < arr4.length; i++) {
    arr4[i]=arr4*2; 
} */
 arr4.forEach((elemento, index,arr)=> {console.log(elemento*=2);
    
 });


//console.log(arr4);

// function declarada
//hoisting
//un proceso de reacomodo automatico del codigo

function sumar(a,b) {
    return a + b;

}
//console.log(sumar(5,7));

let a=2;
//console.log(a);

// funcion expresada 

const multiplicar = function (a,b) {
    return a * b;
}
//console.log(multiplicar(3,5));

// FUNCION FLECHA
const dividir = (a,b)=>  a/b;    
//console.log(dividir(10,2));



