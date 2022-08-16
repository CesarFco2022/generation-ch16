const palindromo = require('../js/palindromo.js')

describe('Pruebas de la funcion palindromo', () =>{
    test ('debe regresar "Es un palindromo" si ingresamos ojo', () => {
    let mensaje = "Es un palindromo";
    let palabra = 'ojo';

    expect(palindromo(palabra)).toBe (mensaje);
    })
})