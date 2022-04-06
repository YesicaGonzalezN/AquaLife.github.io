document.querySelector("#show-calcula").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");
});
// abrir popup
document
    .querySelector(".popup .close-btn")
    .addEventListener("click", function () {
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

// peso -65 y -175 altura
function info() {
    let altura = parseInt(document.getElementById("altura").value);
    let peso = parseInt(document.getElementById("peso").value);

    if (peso <= 65 && altura <= 175) {//Agregue un condicional
        console.log(peso);
        console.log(altura);

        // apertura y cierre de modales
        const openModal = document.querySelector(".send");
        const modal = document.querySelector(".modal__calcula");
        const closeModal = document.querySelector(".modal__close");

        openModal.addEventListener("click", (e) => {
            e.preventDefault();
            modal.classList.add("modal--show");
        });

        closeModal.addEventListener("click", (e) => {
            e.preventDefault();
            modal.classList.remove("modal--show");
        });

        // peso +65 y +160 altura
    } else if(peso >= 65 && altura >= 160) {
        console.log(peso);
        console.log(altura);

        const openModalDos = document.querySelector(".send");
        const modalDos = document.querySelector(".modal__calcula1");
        const closeModalDos = document.querySelector(".modal__close1");

        openModalDos.addEventListener("click", (e) => {
            e.preventDefault();
            modalDos.classList.add("modal--show1");
        });

        closeModalDos.addEventListener("click", (e) => {
            e.preventDefault();
            modalDos.classList.remove("modal--show1");
        });
    }

}