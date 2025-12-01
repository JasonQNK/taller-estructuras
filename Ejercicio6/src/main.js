import { info as imprimirMensaje, error as imprimirFallo } from "./services/logger.js";

imprimirMensaje("El sistema ha iniciado correctamente.");
imprimirFallo("Se ha producido un error crítico.");