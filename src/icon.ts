const faviconElement = document.getElementById('favicon') as HTMLLinkElement | null;
const imageElement = document.getElementById('image-logo') as HTMLLinkElement | null;

const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

const faviconLightPath = '/imgs/icon-light.svg';
const faviconDarkPath = '/imgs/icon-primary.svg';

function updateFaviconAndLogo(isDark: boolean): void {
    if (faviconElement) {
        if (isDark) {
            faviconElement.href = faviconDarkPath;
            imageElement?.setAttribute('src', faviconDarkPath);
        } else {
            faviconElement.href = faviconLightPath;
            imageElement?.setAttribute('src', faviconLightPath);
        }
    }
}

// Llama a la función al cargar la página para establecer el favicon inicial.
updateFaviconAndLogo(prefersDarkScheme.matches);

// Escucha los cambios en la preferencia del sistema.
prefersDarkScheme.addEventListener('change', (event: MediaQueryListEvent) => {
    updateFaviconAndLogo(event.matches);
});