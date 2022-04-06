
   function clickBtnCalcular() {
        let txtPeso = document.getElementById("txtPeso");
        let peso = txtPeso.value;

        let txtAltura = document.getElementById("txtAltura");
        let altura = txtAltura.value;

        let imc = peso / (altura * altura)

        swal({
            title: "Tu Indice de Masa Corporal es: ",
            text: `${Math.round(imc)}`,
            button: "Ok",
            timer: 5000
          });
    }

    const btnCalcular = document.querySelector("#btnCalcular");

    btnCalcular.addEventListener("click", (e) => {
        e.preventDefault();
    })

 

   
   

