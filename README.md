# Página de inicio personalizada

Una página de inicio personalizada y funcional diseñada para ser tu punto de partida en la web. Incluye herramientas de búsqueda, historial, notas rápidas, reloj en tiempo real y un calendario interactivo con notas por día.

## Características

- **Búsqueda inteligente**: Busca en múltiples motores de búsqueda (Google, Stack Overflow, GitHub, YouTube, etc.) con un solo clic.
- **Historial de búsquedas**: Guarda y gestiona tu historial de búsquedas como etiquetas, con opciones para eliminar individuales o borrar todo.
- **Notas rápidas**: Permite añadir, visualizar y eliminar notas rápidas que se guardan localmente.
- **Reloj y fecha**: Muestra la hora y fecha actual en tiempo real.
- **Calendario interactivo**: Navega por meses, selecciona días y agrega notas específicas para cada fecha. Los días con notas se marcan con un asterisco (*).
- **Diseño responsivo**: Optimizado para dispositivos móviles y de escritorio.
- **Persistencia local**: Todas las notas, historial y texto editable se guardan en el navegador usando localStorage.

## Tecnologías utilizadas

- **HTML5**: Estructura semántica y elementos interactivos.
- **CSS3**: Estilos responsivos, animaciones y diseño moderno.
- **JavaScript (ES6+)**: Lógica interactiva, manipulación del DOM y gestión de localStorage.
- **FontAwesome**: Iconos para una interfaz más intuitiva.

## Instalación y uso

1. **Descarga o clona el repositorio**:
   ```bash
   git clone https://github.com/sapoclay/buscador.git
   cd Pagina-inicio
   ```

2. **Abre en tu navegador**:
   - Abre el archivo `index.html` directamente en tu navegador web (Chrome, Firefox, etc.).
   - No requiere servidor web ni instalación adicional, ya que es una aplicación cliente-side.

3. **Personalización**:
   - Edita `style.css` para cambiar colores, fuentes o layout.
   - Modifica `script.js` para agregar nuevas funcionalidades o motores de búsqueda.
   - Reemplaza las imágenes en `Img/` (favicon.ico, logo.png) con las tuyas.

## Estructura de archivos

```
Pagina-inicio/
├── index.html          # Archivo principal HTML
├── script.js           # Lógica JavaScript
├── style.css           # Estilos CSS
└── Img/
    ├── favicon.ico     # Icono de la pestaña
    └── logo.png        # Logo de la página
```

## Funcionalidades detalladas

### Búsqueda
- Selecciona un motor de búsqueda haciendo clic en los iconos de la barra lateral.
- Escribe tu consulta y presiona Enter o haz clic en el icono de búsqueda.
- El historial se guarda automáticamente y se muestra como etiquetas debajo del campo de búsqueda.

### Notas rápidas
- Agrega notas en el campo de texto y haz clic en "Agregar Nota".
- Las notas se muestran en una lista con opción de eliminar individualmente.
- Limita a 10 notas; las más antiguas se eliminan automáticamente.

### Calendario
- Haz clic en la fecha para abrir el modal del calendario.
- Navega entre meses con los botones de flecha.
- Haz clic en un día para ver/agregar notas específicas.
- Los días con notas se indican con un asterisco (*).

### Texto editable
- El texto en la parte superior es editable; los cambios se guardan automáticamente.

## Compatibilidad

- Navegadores modernos con soporte para ES6, localStorage y CSS Grid/Flexbox.
- Probado en Chrome, Firefox y Edge.

## Contribución

Si quieres contribuir:
1. Haz un fork del repositorio.
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`).
3. Haz commit de tus cambios (`git commit -am 'Agrega nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto es de código abierto y se distribuye bajo la Licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente.

## Autor

Creado por [entreunosyceros](https://github.com/sapoclay). Si tienes preguntas o sugerencias, abre un issue en el repositorio.