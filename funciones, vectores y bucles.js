function sumar(a, b) {
    return a + b;
}

function esPar(numero) {
    return numero % 2 === 0;
}

function sumaArray(array) {
    return array.reduce((total, elemento) => total + elemento, 0);
}

function longitudStringMasLargo(array) {
    let maxLongitud = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > maxLongitud) {
            maxLongitud = array[i].length;
        }
    }
    return maxLongitud;
}

function valoresDePropiedades(objeto) {
    return Object.values(objeto);
}

console.log(sumar(3, 5));
console.log(esPar(4));

console.log(sumaArray([1, 2, 3, 4]));

console.log(longitudStringMasLargo(["Hola", "Mundo",])); //

const miObjeto = {
    nombre: "Be Nito",
    edad: 70,
    ciudad: "Capiata"
};

console.log(valoresDePropiedades(miObjeto));

function encontrarNumeroMasGrande(array) {
    return Math.max(...array);
}

function ordenarDeMenorAMayor(array) {
    return array.slice().sort((a, b) => a - b);
}

function elementosComunes(array1, array2) {
    return array1.filter(valor => array2.includes(valor));
}

function convertirAMayusculas(array) {
    return array.map(string => string.toUpperCase());
}

function sumaAcumulativa(array) {
    let suma = 0;
    return array.map(elemento => suma += elemento);
}
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
let contador = 1;
while (contador <= 5) {
    console.log(contador);
    contador++;
}
const numeros = [1, 2, 3, 4, 5];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
function sumaHastaN(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }
    return suma;
}

const resultado = sumaHastaN(5);
console.log(resultado);

function sumaElementos(vector) {
    let suma = 0;
    let i = 0;

    while (i < vector.length) {
        suma += vector[i];
        i++;
    }

    return suma;
}

const números = [1, 2, 3, 4, 5];
const resultado = sumaElementos(numeros);
console.log(resultado);