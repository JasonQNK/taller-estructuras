import { roles } from '../config/roles.js';

export class User {
    constructor(nombre, rol = roles.GUEST) {
        this.nombre = nombre;
        this.rol = rol;
    }
}