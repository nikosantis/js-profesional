// // boolean

// let muted: boolean = true;
// muted = false;

// //números
// let age= 6;
// let numerador: number = 42;
// let denominador: number = age;
// let resultado = numerador / denominador;


// //strings
// let nombre: string = "Nikolas"
// let saludo = `Me llamo ${nombre}`

// //arreglos
// let people: string[] = [];
// people = ["Angie", "Nikolas", "Copo"];
// // people.push("9000")

// let peopleAndNumbers: Array< string | number > = [];
// peopleAndNumbers.push("Nikolas");
// peopleAndNumbers.push(31);

// // enum
// enum Color {
//     Rojo = "Rojo",
//     Verde = "Verde",
//     Azul = "Verde",
//     Amarillo = "Amarillo"
// }
// let colorFavorito: Color = Color.Verde;
// console.log(`Mi color favorito es ${colorFavorito}`);

// //any
// let comodin: any = "Joker";
// comodin = { type: "Wildcard" };

// //object
// let someObject: object = { type: "Wildcard" };

//funciones

// function add(a: number, b:number): number {
//     return a + b;
// }
// const sum = add(4,6);

// function createAdder(a: number): (number) => number {
//     return function (b: number) {
//         return b + a;
//     }
// }

// const addFour = createAdder(4);
// const fourPlus6 = addFour(6);

// function fullName(firstName: string, lastName: string = 'Santis'): string {
//     return `${firstName} ${lastName}`
// }

// const niko = fullName('Nikolas');
// console.log(niko)


enum Color {
    Rojo = "Rojo",
    Verde = "Verde"
}

interface Rectangulo {
    ancho: number;
    alto: number;
    color?: Color;
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.Rojo
}

function area(r: Rectangulo) {
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function () {
    return this.color ? `Un rectángulo ${this.color}` : `Un Rectángulo`;
};

console.log(rect.toString());

