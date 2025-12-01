export function generarIdUnico() {
    const timestamp = Date.now().toString(36);
    return timestamp;
}