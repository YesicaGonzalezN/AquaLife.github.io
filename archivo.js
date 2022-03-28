document.querySelector("#show-calcula").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});  
// abrir popup
document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});
// cerrar popup

// capturar datos de popup
let send = document.getElementById("send");
let form = document.getElementById("formpopup");

form.addEventListener("submit", (event) => {
    event.preventDefault();
});

send.addEventListener("click", (event) => {
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let edad = document.getElementById("edad");
    let peso = document.getElementById("peso");
    let altura = document.getElementById("altura");

    nombre = nombre.value;
    localStorage.setItem("nombre", nombre);

    apellido = apellido.value;
    localStorage.setItem("apellido", apellido);

    edad = edad.value;
    localStorage.setItem("edad", edad);

    peso = peso.value;
    localStorage.setItem("peso", peso);

    altura = altura.value;
    localStorage.setItem("altura", altura);
});
// termina capturar datos de popup


// apertura y cierre de modales
const openModal = document.querySelector(".send");
const modal = document.querySelector(".modal__calcula");
const closeModal = document.querySelector(".modal__close");

openModal.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.add("modal--show");
})

closeModal.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.remove("modal--show");
})

const openModalDos = document.querySelector(".send");
const modalDos = document.querySelector(".modal__calcula1");
const closeModalDos = document.querySelector(".modal__close1");

openModalDos.addEventListener("click", (e)=>{
    e.preventDefault();
    modalDos.classList.add("modal--show1");
})

closeModalDos.addEventListener("click", (e)=>{
    e.preventDefault();
    modalDos.classList.remove("modal--show1");
})
// termina apertura y cierre de modales

// const calcularAgua = () => {
//     if (peso <= 65 && altura <= 175) {
//         openModal.addEventListener("click", (e)=>{
//             e.preventDefault();
//             modal.classList.add("modal--show");
//         })
        
//         closeModal.addEventListener("click", (e)=>{
//             e.preventDefault();
//             modal.classList.remove("modal--show");
//         })
//     } else if (peso >= 65 && altura >= 160){
//         openModalDos.addEventListener("click", (e)=>{
//             e.preventDefault();
//             modalDos.classList.add("modal--show1");
//         })
        
//         closeModalDos.addEventListener("click", (e)=>{
//             e.preventDefault();
//             modalDos.classList.remove("modal--show1");
//         })
//     }
// }







// document.querySelector("#show-calcula").addEventListener("click", function(){

// })

// const calcularAgua = () => {
//     if (peso <= 65 && altura <= 1.75) {
//         alert("Tenes que tomar 2lts de agua diarios.")
//     } else if (peso >= 65 && altura >= 1.60) {
//         alert("Tenes que tomar 3lts de agua diarios.")
//     } else {
//         alert("Los datos ingresados son inválidos.")
//     }
// }

// calcularAgua()



