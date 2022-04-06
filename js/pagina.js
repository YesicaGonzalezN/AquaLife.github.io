    const openModal = document.querySelector("#btnCalcular");
    const modal = document.querySelector(".modal__imc");
    const closeModal = document.querySelector(".imc__close");

    openModal.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add("imc--show");
    });

    closeModal.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.remove("imc--show");
    });


    function clickBtnCalcular() {
        let txtPeso = document.getElementById("txtPeso");
        let peso = txtPeso.value;

        let txtAltura = document.getElementById("txtAltura");
        let altura = txtAltura.value;

        let imc = peso / (altura * altura)
        document.querySelector(".imc__paragraph").innerHTML =
            Math.round(imc);
    }