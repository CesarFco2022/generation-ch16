/* funciones como objetos */
function miFunciton(a,b) {
    let res =0; //propiedad
    res = (a*b);
    return res;
}
console.log(typeof miFunciton);
var miFuncitonTexto = miFunciton.toString();
console.log(miFuncitonTexto);
