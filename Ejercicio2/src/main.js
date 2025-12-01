import Task from "../models/task.js";
import { generarIdUnico } from './utils/ids.js'; 

console.log("Creando una nueva tarea...");
let nuevaTarea = new Task("Aprender Estructuras de Datos");
console.log(`Tarea creada con ID: ${nuevaTarea.id} y estado completada: ${nuevaTarea.completed}`);