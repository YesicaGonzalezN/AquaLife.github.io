let calcular = alert("¡Bienvenido a AquaLife! A continuación calcularemos la cantidad de agua que debes beber por día en función de tu peso y altura.")
let pesoIngresado = prompt("¿Cual es tu peso actual?")
let alturaIngresada = prompt("¿Cual es tu altura actual?")

function calcularAgua() {
    if (pesoIngresado <= 65 && alturaIngresada <= 1.75) {
        alert ("Tenes que tomar 2lts de agua diarios.")
    } else if (pesoIngresado >= 65 && alturaIngresada >= 1.60) {
        alert ("Tenes que tomar 3lts de agua diarios.")
    } else {
        alert ("Los datos ingresados son inválidos.")
    }
}

calcularAgua()


class Usuario {
    constructor(name,informacion) {
       this.name = name
       this.informacion = informacion
    } 
}


let datos = ['Nombre', 'Apellido', 'Edad', 'Genero']
let usuarios = []

for (const dato of datos) {
    let informacion= prompt(`¿Cual es tu ${dato}?`)
    usuarios.push(new Usuario(dato, informacion))
}

console.log(usuarios);