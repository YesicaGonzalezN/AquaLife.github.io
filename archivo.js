const saludar = nombre => {
    let bienvenida = `¡Hola ${nombre}, bienvenido/a a AquaLife! A continuación calcularemos la cantidad de agua que debes tomar en función de tu peso y estatura."`
    alert(bienvenida);
}

saludar(prompt("¿Cual es tu nombre?"))


let pesoIngresado = prompt("¿Cual es tu peso actual?");
let alturaIngresada = prompt("¿Cual es tu altura actual?");

const calcularAgua = () => {
    if (pesoIngresado <= 65 && alturaIngresada <= 1.75) {
        alert("Tenes que tomar 2lts de agua diarios.")
    } else if (pesoIngresado >= 65 && alturaIngresada >= 1.60) {
        alert("Tenes que tomar 3lts de agua diarios.")
    } else {
        alert("Los datos ingresados son inválidos.")
    }
}

calcularAgua()



class Usuario {
    constructor(nombre, apellido, edad, genero) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
    }
}
    
let usuarios = [];
    
let nombre = prompt(`¿Cual es tu Nombre?`);
let apellido = prompt("¿Cual es tu Apellido?");
let edad = prompt("¿Cual es tu Edad?");
let genero = prompt("¿Cual es tu Género?");
usuarios.push(new Usuario(nombre, apellido, edad, genero));
    
console.log(usuarios);