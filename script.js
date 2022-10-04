//#region

var Nombre = "Mateo";
let Apellido = 'Flores';
const Pais = `Argentina`;

let num1 = 10;
let num2 = 5;

let fin = 3;

//#endregion

//#region

console.log(Nombre);
console.log(Apellido);
console.log(Pais);

//#endregion

//#region

function Multiplicacion(num1, num2) {
    return num1 * num2;
}

mult = Multiplicacion(num1, num2);
console.log(mult);

function Resta(num1, num2) {
    return num1 - num2;
}

menos = Resta(num1, num2);
console.log(menos);

//#endregion

//#region

const Nombres = ["Mateo Flores", "Kamel Dayub", "Lionel Messi"];

for (i = 0; i < fin; i++) {
    console.log(Nombres[i]);
}

//#endregion