/* n=parseInt( prompt("Ingrese valor a sumar: "));
a=0;
let r=0
while (a<n) {
    a ++;
    r=r+a;
    //console.log(a);
  // console.log(r);
}
console.log("N = " + n + "  La suma es: "+r); */

n=parseInt( prompt("Ingrese valor: "));
a =1;
let B=[];
let C=[];
while (a<=n) {
    B=[a];
   C.splice(a,0,B);
    a ++
} //console.log(B); 
console.log(C);




/* let max=100;
let min=1;

while (min<max) {
console.log(/n);
min+=2;
console.log(min);
    
}
 */

/* let xValue=parseInt(prompt("Ingrese el numero: "));

while (xValue>0) {
    console.log(xValue);
    xValue -=0.5;
    console.log("\n");
}  */
