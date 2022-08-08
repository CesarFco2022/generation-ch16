function saludar() {
    alert("Hola")
    
}


const boton = document.getElementById("boton");

boton.addEventListener("click", (event)=> {
alert("hola");
})

const formulario=document.getElementById("form");

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log(formulario[0].value);

})
