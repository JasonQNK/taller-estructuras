import { Message } from "./components/Message.js";
import { esValidoTexto } from "./validators/textValidator.js";

let mensajeLargo = new Message("Este mensaje tiene más de cincuenta caracteres para validar la funcionalidad del validador.");
console.log(mensajeLargo.contenido);