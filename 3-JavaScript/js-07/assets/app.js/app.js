console.log(1);

console.log(2);

setTimeout(()=>{
    console.log("Hola");
},2000)

console.log(3);

setTimeout(()=>{
    console.log("Adios");
},0)

console.log(4);

for(let i=0; i<10000 ; i++){
    console.log("Estoy esperando");
}
console.log(5);