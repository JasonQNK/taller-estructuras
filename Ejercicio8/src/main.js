import { CONFIG } from "./config/settings.js";
import { cambiarTema } from "./config/themeSwitcher.js";

console.log(`Tema actual: ${CONFIG.Tema}`);
cambiarTema();
console.log(`Tema cambiado a: ${CONFIG.Tema}`);