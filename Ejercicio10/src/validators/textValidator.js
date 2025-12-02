export function esValidoTexto(texto) {
  if (texto.length > 0 || texto.length < 50) {
    return true;
  }

  return false;
}