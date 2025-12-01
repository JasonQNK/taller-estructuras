import { kilosALibras } from "../utils/converter.js";

let pesoKilos = 80;
let pesoLibras = kilosALibras(pesoKilos);
console.log(`${pesoKilos} kilos son ${pesoLibras} libras.`);