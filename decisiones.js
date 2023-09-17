var numero = prompt("Ingresa un número:");

if (numero > 10) {
    console.log(numero + " es mayor que 10.");
} else if (numero < 10) {
    console.log(numero + " es menor que 10.");
} else {
    console.log(numero + " es igual a 10.");
}
var numero = prompt("Ingresa un número:");

if (numero % 2 === 0) {
    console.log(numero + " es un número par.");
} else {
    console.log(numero + " es un número impar.");
}
var letra = prompt("Ingresa una letra:");

var esVocal = "aeiouAEIOU";

if (esVocal.includes(letra)) {
    console.log(letra + " es una vocal.");
} else {
    console.log(letra + " es una consonante.");
}
var edad = prompt("Ingresa tu edad:");

if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}
var numeroDia = prompt("Ingresa un número del 1 al 7:");

switch (parseInt(numeroDia)) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Lunes");
        break;
    case 3:
        console.log("Martes");
        break;
    case 4:
        console.log("Miércoles");
        break;
    case 5:
        console.log("Jueves");
        break;
    case 6:
        console.log("Viernes");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Número inválido. Ingresa un número del 1 al 7.");
}