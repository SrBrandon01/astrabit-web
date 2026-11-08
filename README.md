# AstraBit — Sitio web oficial

**Eslogan:** Tecnología práctica para crecer.

Sitio web estático completo para AstraBit, listo para publicarse en **GitHub Pages**. Se adapta a celulares, tabletas y computadoras. No necesita Node, React, bases de datos, pagos, cuentas ni instalación de dependencias.

## Archivos del sitio

- `index.html`: el contenido completo (servicios, precios, paquetes, galería, información, preguntas y formulario).
- `styles.css`: el diseño azul, morado y neón, con versión móvil.
- `script.js`: menú móvil, filtros, cotizaciones por WhatsApp y año dinámico.
- `assets/`: imágenes de AstraBit y favicon.
- `.nojekyll`: indica que GitHub Pages sirva el contenido estático directamente.

## Verlo en tu computadora

Abre `index.html` con doble clic. Para probarlo con un servidor local (recomendado si usas VS Code):

```bash
python -m http.server 8000
```

Después, abre `http://localhost:8000`.

## Cómo publicarlo GRATIS en GitHub Pages

1. Regístrate o inicia sesión en [GitHub](https://github.com).
2. Crea un repositorio público llamado `astrabit-web` (puedes elegir otro nombre).
3. Sube **el contenido de esta carpeta** a la raíz del repositorio: `index.html`, `styles.css`, `script.js`, `.nojekyll` y la carpeta `assets` (no subas una carpeta adicional que envuelva todo).
4. Abre tu repositorio y entra en **Settings → Pages**.
5. En **Build and deployment → Source**, elige **Deploy from a branch**.
6. Selecciona la rama **main**, la carpeta **/(root)** y pulsa **Save**.
7. Una vez publicado, GitHub mostrará un enlace parecido a `https://TU-USUARIO.github.io/astrabit-web/` (reemplaza `TU-USUARIO` con tu cuenta real).
8. Copia **el enlace real** de tu sitio desde **Settings → Pages → Visit site** y pégalo en **WhatsApp Business → Perfil de empresa → Sitio web**. También puedes usarlo en Instagram y Facebook.

Consulta las [instrucciones oficiales de GitHub Pages](https://docs.github.com/es/pages/getting-started-with-github-pages/creating-a-github-pages-site).

**Importante:** La publicación la debes realizar desde tu cuenta de GitHub; los archivos incluidos aquí no están publicados en Internet. GitHub Pages requiere un repositorio público para GitHub Free. No incluyas contraseñas ni datos privados en el repositorio.

## Personalizar el sitio

### Cambiar precios y servicios

Abre `index.html` en VS Code, busca por ejemplo `Catálogos digitales` o `$250 MXN` y modifica sus textos. Los precios son tarifas orientativas **desde**, no precios finales. El formulario incluye los 12 servicios originales de la publicidad.

### Cambiar el número de WhatsApp

El número actual es **+52 220 471 1563** y en enlaces se escribe sin espacios ni `+` como `522204711563`.

Si alguna vez lo cambias, actualízalo en:
- `script.js`: constante `WHATSAPP_NUMBER`.
- `index.html`: todos los enlaces fijos a `wa.me/522204711563`, textos visibles y datos JSON-LD.

### Agregar redes sociales

Cuando tengas cuentas reales, puedes añadir enlaces a Facebook o Instagram en el pie de página. No se han inventado enlaces ni usuarios.

### Usar fotografías propias

La sección `Ejemplos` muestra **muestras de AstraBit, no trabajos realizados para clientes**. Reemplázalas en `assets/` cuando tengas portafolio real.

### Imagen al compartir por WhatsApp, Facebook u otras redes

Cuando ya tengas la URL definitiva, agrega en el `<head>` de `index.html` las etiquetas `og:url` y `og:image` con URL **absolutas**, por ejemplo:

```html
<meta property="og:url" content="https://TU-USUARIO.github.io/astrabit-web/">
<meta property="og:image" content="https://TU-USUARIO.github.io/astrabit-web/assets/publicidad-digital.webp">
```

No se configuraron con una dirección ficticia porque tu dominio todavía no existe.

## Cómo funciona la cotización

El formulario construye un mensaje con el servicio elegido, modalidad y la idea del cliente. Al enviarlo, abre la conversación en WhatsApp **para que el visitante confirme el envío**. No hay backend ni base de datos, y los mensajes no se almacenan en el sitio.

## Notas de alcance

- **Precios públicos:** desde $120 MXN; paquetes de $399, $499 y $1,699 MXN.
- **No se ofrece** reparación de impresoras, clases de programación o SQL, ni diseño de bases de datos.
- Los sistemas de registro se anuncian como **básicos**, sin prometer sistemas avanzados.
- Para formateo/respaldos, confirma siempre el alcance y la existencia de un respaldo antes de borrar archivos.
- Dominio propio, hospedaje de terceros, licencias de programas y traslados se cotizan por separado.
- Las fuentes se descargan desde Google Fonts si el dispositivo tiene conexión. Si no, se usan fuentes del sistema.

**Licencia de las imágenes:** las piezas gráficas incluidas fueron creadas para esta conversación y se usan como material de la marca AstraBit. Revisa antes de usar cualquier logotipo si existe una marca registrada similar.
