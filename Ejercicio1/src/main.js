import { producto1, producto2, producto3 } from "../modules/products.js";
import { calcularPrecioConIVA } from "../modules/calculator.js";


/* Importa los tres productos y `calcularTotal`
Calcula el precio con impuesto de cada producto
Muestra en consola: `"El producto [nombre] cuesta $[total] con impuesto */

let productos = [producto1, producto2, producto3];

productos.forEach( producto => {
    let precioConIVA = calcularPrecioConIVA(producto.precio);
    console.log(`El producto ${producto.nombre} cuesta $${precioConIVA} con impuesto`);
});