import { esValidoTexto } from "../validators/textValidator.js";

export class Message {
    constructor(contenido) {
        if (esValidoTexto(contenido)) {
            this.contenido = contenido;
        } else {
            console.error("El mensaje debe tener entre 1 y 50 caracteres.");
            
        }
    }
}