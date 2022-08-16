const palindromo = (palabra) => {
    
     let palabrainvertida = palabra.split("").reverse().join("");

   /*  return (palabra === palabraInvertida) ? 'Es un palindromo' : 'No es un palindromo';  */


  if (palabra === palabrainvertida){
    return "es un palindromo"
   }else {
    return "no es un palindromo"
   }
}

