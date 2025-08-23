// icon.js

// Obtiene el elemento <link> con el ID 'favicon'.
const faviconElement = document.getElementById('favicon');

// Obtiene el elemento <img> del logo.
const mainLogoElement = document.getElementById('main-logo');

// Accede a las preferencias de color del sistema.
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Rutas a tus archivos de favicon.
const faviconLightPath = '/imgs/icon-light.svg';
const faviconDarkPath = '/imgs/icon-primary.svg';

// Rutas de las imágenes del logo.
const mainLogoLightPath = '/imgs/icon-light.svg';
const mainLogoDarkPath = '/imgs/icon-primary.svg';

/**
 * Actualiza la URL del favicon y la imagen del logo.
 * @param {boolean} isDark - Indica si el modo oscuro está activo.
 */
function updateFaviconAndLogo(isDark) {
  if (faviconElement) {
    if (isDark) {
      faviconElement.href = faviconDarkPath;
    } else {
      faviconElement.href = faviconLightPath;
    }
  }

  if (mainLogoElement) {
    if (isDark) {
      mainLogoElement.src = mainLogoDarkPath;
    } else {
      mainLogoElement.src = mainLogoLightPath;
    }
  }
}

// Llama a la función al cargar la página para establecer los elementos iniciales.
updateFaviconAndLogo(prefersDarkScheme.matches);

// Escucha los cambios del sistema en tiempo real.
prefersDarkScheme.addEventListener('change', (event) => {
  updateFaviconAndLogo(event.matches);
});