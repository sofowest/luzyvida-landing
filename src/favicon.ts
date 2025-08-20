// src/scripts/favicon.ts

// Usamos el tipo "HTMLLinkElement" para asegurar que 'faviconElement'
// es un elemento HTML de enlace.
const faviconElement = document.getElementById('favicon') as HTMLLinkElement | null;

// Usamos la API 'matchMedia' para detectar la preferencia del usuario.
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Define las rutas de los favicons.
const faviconLightPath = 'public/imgs/favicon-light.svg';
const faviconDarkPath = 'public/imgs/favicon-primary.svg';

/**
 * Función para actualizar el favicon.
 * @param isDark - Indica si el modo oscuro está activo.
 */
function updateFavicon(isDark: boolean): void {
    if (faviconElement) {
        if (isDark) {
            faviconElement.href = faviconDarkPath;
        } else {
            faviconElement.href = faviconLightPath;
        }
    }
}

// Llama a la función al cargar la página para establecer el favicon inicial.
updateFavicon(prefersDarkScheme.matches);

// Escucha los cambios en la preferencia del sistema.
prefersDarkScheme.addEventListener('change', (event: MediaQueryListEvent) => {
    updateFavicon(event.matches);
});