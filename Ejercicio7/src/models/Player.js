import { ScoreLogic } from "../logic/ScoreLogic.js";

export class Player {
    constructor(nombre, monedas, vidas,) {
        this.nombre = nombre;
        this.monedas = monedas;
        this.vidas = vidas;
        this.puntajeFinal = ScoreLogic.calcularPuntos(monedas, vidas);
    }
}