import { roles } from './config/roles.js';
import { User } from "./models/user.js";

console.log("Creando un nuevo usuario...");
let nuevoUsuario = new User("Juan Pérez", roles.ADMIN);
console.log(`Usuario creado: ${nuevoUsuario.nombre} con rol: ${nuevoUsuario.rol}`);