import { IVA } from "./products.js";   
export function calcularPrecioConIVA(precio) {
    return precio + (precio * IVA);
}