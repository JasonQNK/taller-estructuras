import { Player } from "./models/Player.js";

let jugador = new Player("Carlos", 10, 3);
console.log(`Jugador: ${jugador.nombre}, Monedas: ${jugador.monedas}, Vidas: ${jugador.vidas}, Puntaje Final: ${jugador.puntajeFinal}`);

let jugador2 = new Player("Ana", 8, 2);
console.log(`Jugador: ${jugador2.nombre}, Monedas: ${jugador2.monedas}, Vidas: ${jugador2.vidas}, Puntaje Final: ${jugador2.puntajeFinal}`);


if (jugador.puntajeFinal > jugador2.puntajeFinal) {
    console.log(`${jugador.nombre} tiene un puntaje mayor.`);
}