import { CONFIG } from "./settings.js";

export function cambiarTema() {
    if (CONFIG.Tema === "claro") {
        CONFIG.Tema = "oscuro";
    } else {
        CONFIG.Tema = "claro";
    }
}