# 🛠️ Taller Práctico: Modularización y Objetos en JavaScript

## 📋 Antes de Empezar

### ¿Qué vas a practicar?
- Organizar tu código en diferentes archivos
- Usar `import` y `export` para comunicar módulos
- Trabajar con objetos, clases y funciones
- Estructurar proyectos de forma profesional

### Configuración Importante
Para que `import` y `export` funcionen en el navegador, tu archivo HTML debe cargar el script principal así:

```html
<script type="module" src="./src/main.js"></script>
```

**Nota:** Cada ejercicio debe tener su propia carpeta independiente
**Nota:** Cada ejercicio debe tener su propio commit

---

## Ejercicio 1: Sistema de Inventario

**Tema:** Exportar datos y funciones entre módulos

### Estructura de Carpetas
```
ejercicio-01/
├── index.html
└── src/
    ├── main.js
    └── modules/
        ├── products.js
        └── calculator.js
```

### Pasos a seguir

1. **En `products.js`:**
   - Crea tres objetos literales: `producto1`, `producto2` y `producto3`
   - Cada objeto debe tener: `id`, `nombre` y `precio`
   - Crea una constante `IVA` con valor `0.19`
   - Exporta los tres productos y la constante

2. **En `calculator.js`:**
   - Importa la constante `IVA`
   - Crea una función `calcularTotal(precio)` que sume el IVA al precio
   - Exporta la función

3. **En `main.js`:**
   - Importa los tres productos y `calcularTotal`
   - Calcula el precio con impuesto de cada producto
   - Muestra en consola: `"El producto [nombre] cuesta $[total] con impuesto"`

**Ejemplo de salida esperada:**
```
El producto Laptop cuesta $1190 con impuesto
El producto Mouse cuesta $35.7 con impuesto
El producto Teclado cuesta $89.25 con impuesto
```

---

## Ejercicio 2: Gestor de Tareas

**Tema:** Clases y export default

### Estructura de Carpetas
```
ejercicio-02/
├── index.html
└── src/
    ├── main.js
    ├── utils/
    │   └── ids.js
    └── models/
        └── Task.js
```

### Pasos a seguir

1. **En `ids.js`:**
   - Crea una función `generarID()` que retorne `Date.now()` o un número aleatorio
   - Exporta la función

2. **En `Task.js`:**
   - Importa `generarID`
   - Crea una clase `Task` con:
     - Constructor que reciba `titulo`
     - Propiedad `id` (usa `generarID()`)
     - Propiedad `completada` iniciada en `false`
     - Método `marcarCompletada()` que cambie `completada` a `true`
   - Usa `export default` para exportar la clase

3. **En `main.js`:**
   - Importa la clase `Task`
   - Crea una tarea nueva
   - Muéstrala en consola
   - Marca la tarea como completada
   - Muéstrala nuevamente para ver el cambio

---

## Ejercicio 3: Calculadora Geométrica

**Tema:** Múltiples exports nombrados

### Estructura de Carpetas
```
ejercicio-03/
├── index.html
└── src/
    ├── main.js
    └── utils/
        └── geometry.js
```

### Pasos a seguir

1. **En `geometry.js`:**
   - Crea estas funciones:
     - `areaCirculo(radio)` - usa `Math.PI`
     - `areaCuadrado(lado)`
     - `areaTriangulo(base, altura)`
   - Exporta las tres funciones

2. **En `main.js`:**
   - Importa las tres funciones
   - Calcula y muestra en consola:
     - Área de un círculo con radio 10
     - Área de un cuadrado con lado 5
     - Área de un triángulo con base 10 y altura 20

---

## Ejercicio 4: Perfiles de Usuario

**Tema:** Objetos de configuración y valores por defecto

### Estructura de Carpetas
```
ejercicio-04/
├── index.html
└── src/
    ├── main.js
    ├── config/
    │   └── roles.js
    └── models/
        └── User.js
```

### Pasos a seguir

1. **En `roles.js`:**
   - Crea un objeto `ROLES` con estas propiedades:
     - `ADMIN: 'admin'`
     - `USER: 'user'`
     - `GUEST: 'guest'`
   - Exporta el objeto

2. **En `User.js`:**
   - Importa `ROLES`
   - Crea una clase `User` con:
     - Constructor que reciba `nombre` y `rol`
     - Si no se pasa `rol`, usa `ROLES.GUEST` por defecto
   - Exporta la clase

3. **En `main.js`:**
   - Importa `User` y `ROLES`
   - Crea un usuario administrador (pasa `ROLES.ADMIN`)
   - Crea un usuario invitado (no pases rol)
   - Muestra ambos en consola

---

## Ejercicio 5: Conversor de Unidades

**Tema:** Cadena de dependencias entre módulos

### Estructura de Carpetas
```
ejercicio-05/
├── index.html
└── src/
    ├── main.js
    └── utils/
        ├── constants.js
        └── converter.js
```

### Pasos a seguir

1. **En `constants.js`:**
   - Exporta la constante `LIBRAS_POR_KILO` con valor `2.2046`

2. **En `converter.js`:**
   - Importa `LIBRAS_POR_KILO`
   - Crea la función `kilosALibras(kilos)` que haga la conversión
   - Exporta la función

3. **En `main.js`:**
   - Importa `kilosALibras`
   - Convierte 80 kilos a libras
   - Muestra: `"80 kilos equivalen a X libras"`

---

## Ejercicio 6: Sistema de Logs

**Tema:** Renombrar imports con `as`

### Estructura de Carpetas
```
ejercicio-06/
├── index.html
└── src/
    ├── main.js
    └── services/
        └── logger.js
```

### Pasos a seguir

1. **En `logger.js`:**
   - Crea `info(msg)` que haga `console.log` con prefijo `[INFO]:`
   - Crea `error(msg)` que haga `console.error` con prefijo `[ERROR]:`
   - Exporta ambas funciones

2. **En `main.js`:**
   - Importa `info` **renombrada como** `imprimirMensaje`
   - Importa `error` **renombrada como** `imprimirFallo`
   - Usa `imprimirMensaje("El sistema inició correctamente")`
   - Usa `imprimirFallo("Hubo un error de conexión")`

---

## Ejercicio 7: Ranking de Jugadores

**Tema:** Métodos estáticos en clases

### Estructura de Carpetas
```
ejercicio-07/
├── index.html
└── src/
    ├── main.js
    ├── logic/
    │   └── ScoreLogic.js
    └── models/
        └── Player.js
```

### Pasos a seguir

1. **En `ScoreLogic.js`:**
   - Crea una clase `ScoreLogic`
   - Añade un método **estático** `calcularPuntos(monedas, vidas)`
   - La fórmula es: `(monedas * 10) + (vidas * 50)`
   - Exporta la clase

2. **En `Player.js`:**
   - Importa `ScoreLogic`
   - Crea la clase `Player` con:
     - Constructor que reciba `nombre`, `monedas` y `vidas`
     - Propiedad `puntajeFinal` calculada con `ScoreLogic.calcularPuntos()`
   - Exporta la clase

3. **En `main.js`:**
   - Crea dos jugadores con diferentes valores
   - Compara sus puntajes y muestra quién ganó

---

## Ejercicio 8: Configuración Global

**Tema:** Mutabilidad de objetos importados

### Estructura de Carpetas
```
ejercicio-08/
├── index.html
└── src/
    ├── main.js
    ├── config/
    │   └── settings.js
    └── modules/
        └── themeSwitcher.js
```

### Pasos a seguir

1. **En `settings.js`:**
   - Exporta un objeto `CONFIG` con la propiedad `tema: 'claro'`

2. **En `themeSwitcher.js`:**
   - Importa `CONFIG`
   - Crea la función `cambiarTema()` que:
     - Si `tema` es `'claro'`, lo cambia a `'oscuro'`
     - Si es `'oscuro'`, lo cambia a `'claro'`
   - Exporta la función

3. **En `main.js`:**
   - Importa `CONFIG` y `cambiarTema`
   - Imprime `CONFIG.tema` (verás 'claro')
   - Llama a `cambiarTema()`
   - Vuelve a imprimir `CONFIG.tema` (verás 'oscuro')
   - **Observa cómo el objeto original cambió**

---

## Ejercicio 9: Buscador de Colores

**Tema:** Objetos literales y búsqueda por propiedad

### Estructura de Carpetas
```
ejercicio-09/
├── index.html
└── src/
    ├── main.js
    ├── data/
    │   └── colors.js
    └── utils/
        └── search.js
```

### Pasos a seguir

1. **En `colors.js`:**
   - Crea cuatro objetos de colores: `color1`, `color2`, `color3` y `color4`
   - Cada objeto debe tener: `nombre` (ej: 'rojo') y `hex` (ej: '#FF0000')
   - Exporta los cuatro objetos

2. **En `search.js`:**
   - Importa los cuatro objetos de colores
   - Crea la función `buscarHex(nombreColor)` que:
     - Compare el `nombreColor` con la propiedad `nombre` de cada objeto
     - Retorne el código `hex` si encuentra coincidencia
     - Retorne `null` si no encuentra ninguna coincidencia
   - Exporta la función

3. **En `main.js`:**
   - Define una variable con el nombre de un color (ej: 'azul')
   - Usa `buscarHex()` para buscarlo
   - Muestra el código hexadecimal o "Color no encontrado"

---

## Ejercicio 10: Validador de Mensajes

**Tema:** Validación en constructores

### Estructura de Carpetas
```
ejercicio-10/
├── index.html
└── src/
    ├── main.js
    ├── validators/
    │   └── textValidator.js
    └── components/
        └── Message.js
```

### Pasos a seguir

1. **En `textValidator.js`:**
   - Exporta la función `esValido(texto)` que retorne `true` si:
     - El texto tiene menos de 50 caracteres
     - El texto no está vacío
   - Si no cumple, retorna `false`

2. **En `Message.js`:**
   - Importa `esValido`
   - Crea la clase `Message` con:
     - Constructor que reciba `contenido`
     - Si `esValido(contenido)` es `true`, guarda el contenido
     - Si es `false`, guarda `"Mensaje inválido"`
   - Exporta la clase

3. **En `main.js`:**
   - Crea un mensaje con texto largo (más de 50 caracteres)
   - Crea un mensaje con "Hola mundo"
   - Muestra ambos en consola

**¡Recuerda:** Este taller es para practicar, no para evaluar. 