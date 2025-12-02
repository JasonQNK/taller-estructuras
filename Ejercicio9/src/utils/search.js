import { color1 } from "../data/colors.js";
import { color2 } from "../data/colors.js";
import { color3 } from "../data/colors.js";
import { color4 } from "../data/colors.js";

export function buscarHexadecimal(color) {
    switch(color) { 
        case 'Rojo':
            return color1; 
        case 'Verde':
            return color2;
        case 'Azul':
            return color3;
        default:
            return null;
    }
}