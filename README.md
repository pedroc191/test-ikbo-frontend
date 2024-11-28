# Proyecto Frontend con Vue 2 y Nuxt

Este proyecto es una aplicación frontend desarrollada utilizando Vue 2 y Nuxt, con Node.js como entorno de ejecución. 

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu sistema:

- [Node.js](https://nodejs.org/) v20.14.0
- [Visual Studio Code](https://code.visualstudio.com/)

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto:

1. Clona el repositorio en tu máquina local:
   ```bash
   git clone <URL-del-repositorio>
   cd <nombre-del-proyecto>
   ```
2. Instala las dependencias del proyecto:
```bash
npm install
```
3. Inicia el servidor de desarrollo:
```bash
npm run dev
```
4. La aplicación estará disponible en el puerto 3000. Accede a la aplicación a través de la URL:

```bash
http://localhost:3000
```
## Credenciales de Acceso
Para ingresar a la aplicación, utiliza las siguientes credenciales:
```bash
Email: test@gmail.com
Contraseña: 123456789
```
## Estructura del Proyecto
El proyecto está organizado de la siguiente manera:
```bash
<nombre-del-proyecto>/
├── assets/            # Recursos estáticos (CSS, imágenes, etc.)
├── components/        # Componentes Vue reutilizables
├── layouts/           # Plantillas de diseño para la aplicación
├── pages/             # Páginas de la aplicación
├── plugins/           # Configuración de plugins y bibliotecas externas
├── static/            # Archivos estáticos accesibles directamente
├── store/             # Gestión del estado global con Vuex
├── nuxt.config.js     # Configuración principal de Nuxt
├── package.json       # Dependencias del proyecto
└── README.md          # Documentación del proyecto
```
## Scripts Disponibles
```bash
npm run dev: Inicia el servidor de desarrollo.
npm run build: Construye la aplicación para producción.
npm start: Inicia la aplicación en modo de producción.
```
## Herramientas Recomendadas

Editor de Código: Visual Studio Code es ideal para trabajar con este proyecto. Se recomienda instalar extensiones relacionadas con JavaScript, Vue.js y Nuxt para facilitar el desarrollo.