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