/*Define una variable con el nombre de un color (ej: 'azul')
 Usa `buscarHex()` para buscarlo
Muestra el código hexadecimal o "Color no encontrado"*/

import { buscarHexadecimal } from "./utils/search.js";

let nombreColor = "Violeta";
let codigoHex = buscarHexadecimal(nombreColor); 
if (codigoHex) {
    console.log(`El código hexadecimal de ${nombreColor} es ${codigoHex}`);
} else {
    console.log("Color no encontrado");
}