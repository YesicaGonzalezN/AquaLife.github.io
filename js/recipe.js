const openHummus = document.querySelector(".open-modal");
const modalHummus = document.querySelector(".recetas-modal");
const closeHummus = document.querySelector(".close-modal")

openHummus.addEventListener("click", (e) => {
    e.preventDefault();
    modalHummus.classList.add("modalhummus--show")
});

closeHummus.addEventListener("click", (e) => {
    e.preventDefault();
    modalHummus.classList.remove("modalhummus--show")
});

// termina modal hummus

const openRisotto = document.querySelector(".open-modal1");
const modalRisotto = document.querySelector(".recetas-modal1");
const closeRisotto = document.querySelector(".close-modal1")

openRisotto.addEventListener("click", (e) => {
    e.preventDefault();
    modalRisotto.classList.add("modalrisotto--show")
});

closeRisotto.addEventListener("click", (e) => {
    e.preventDefault();
    modalRisotto.classList.remove("modalrisotto--show")
});

// termina modal risotto

const openPollo = document.querySelector(".open-modal2");
const modalPollo = document.querySelector(".recetas-modal2");
const closePollo = document.querySelector(".close-modal2")

openPollo.addEventListener("click", (e) => {
    e.preventDefault();
    modalPollo.classList.add("modalpollo--show")
});

closePollo.addEventListener("click", (e) => {
    e.preventDefault();
    modalPollo.classList.remove("modalpollo--show")
});

// termina modal pollo

let searchButton = document.querySelector("#button-recipe");

searchButton.addEventListener("click", ()=> {
    console.log("Boton presionado")
    sendApiRequest()
})


async function sendApiRequest() {
    let APP_ID = "cd93eced";
    let API_KEY = "c3f9bf4235b020458764661a9a26e34e"
    let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=pizza`)
    console.log(response)
    let data = await response.json()
    console.log(data)
} 


