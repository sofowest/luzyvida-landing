# Luz y Vida Landing Page

Página creada con React y TailwindCSS (entre otras librerias y plugins mismos de ESLint).

## Ejecución de entorno de desarrollo

Para ejecutar el proyecto luego clonado el repositorio, hay que tener instalado Node.js, un instalador de paquetes. En caso tal que no lo tengas, instalalo en [este link.](https://nodejs.org/en/download)

Ya instalado Node.js:

### 1. Abre la consola

Usa tu consola de confianza, yo en mi caso uso Git Bash o Warp. Para evitar problemas, ejecuta la consola en modo administrador.

### 2. Ir al repositorio

Ve al directorio donde tengas clonado el repositorio, en mi caso es la carpeta `dev`.

```sh
cd c
cd dev
cd luzyvida-landing
```

### 3. Instalar las Dependencias

```sh
npm install
```

o

```sh
pnpm install
```

Depende cuál versión tengas instalada (pnpm es una alternativa más rápida).


### 4. Correr el entorno de desarrollo

```sh
npm run dev
```

o

```sh
pnpm run dev
```


### 5. Ir al puerto mostrado

En consola aparecerá un mensaje similar al siguiente 

<p align="left">
    <img src="https://i.imgur.com/3txyhw0.png" width="300px" alt="Consol log de npm run dev">
</p>

Iremos al puerto que indique la consola.

La forma de detener la ejecución es apretando `CTRL + C` en la consola donde se esté mostrando.

## Auxiliares

### Revisión de dependencias

Por si querés ver qué dependencias tiene el proyecto y en que versión están, ejecuta el siguiente comando en la consola:

```sh
npm list
```

o

```sh
pnpm list
```

Te dará una lista detallada de version de los paquetes instalados.

### Log de cambios in real time

Si ves la consola donde corriste el entorno de desarrollo, se imprimirán los cambios que hagas en los archivos del repositorio local.