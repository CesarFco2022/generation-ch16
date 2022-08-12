/* let x=10;
console.log(x-length); */


let persona = new Object();
persona.nombre="Cesar";
persona.edad="25";
persona.correo_electronico="bbr.@gmail.com"

console.log(persona);


let otrapersona= {
nombre:"cesar",
apellido:"mata",
edad:25,
correolectronico:"bbr@gmail.com",
nombrecompleto: function () {
    return this.nombre+ "  " + this.apellido
}
}

console.log(otrapersona);
console.log(otrapersona.nombrecompleto());

