import { generarIdUnico } from "../src/utils/ids.js";

export default class Task {
    constructor(description) {
        this.id = generarIdUnico();
        this.completed = false;
        this.marcarCompletada = function() {
            this.completed = true;
        }
    }
}