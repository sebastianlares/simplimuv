# SmipliMuv

Este proyecto es una aplicación web moderna construida con Next.js 14, aprovechando las últimas características como los Server Components para mejorar el rendimiento y la experiencia del usuario. Se utiliza Storybook para desarrollar y probar componentes UI de forma aislada, ESLint para mantener la calidad del código, Tailwind CSS para el diseño rápido y responsivo, y Docker para asegurar un entorno de desarrollo y despliegue consistente. Además, se integran pruebas automatizadas y workflows de GitHub para automatizar la integración y despliegue continuo.

## Características Principales

- **Next.js 14 con Server Components**: Utiliza la última versión de Next.js para aprovechar los Server Components, mejorando el rendimiento al reducir el JavaScript enviado al cliente.

- **Storybook**: Configurado para desarrollar y probar componentes de UI de manera aislada, facilitando la construcción de interfaces consistentes y reutilizables.

- **ESLint**: Configuración personalizada de ESLint para asegurar un código limpio y seguir las mejores prácticas de desarrollo.

- **Docker y Docker Compose**: Contenedores Docker configurados para simplificar el desarrollo y despliegue, asegurando un entorno consistente entre los desarrolladores y la producción.

- **Tailwind CSS**: Utiliza Tailwind CSS para un diseño rápido y responsivo, permitiendo construir interfaces de usuario con una experiencia de diseño coherente y mantenible.

- **Jest**: Se utiliza Jest para para pruebas automatizadas, asegurando la calidad y el correcto funcionamiento del código a través de tests unitarios y de integración.

- **Workflows de GitHub**: Workflows configurados para automatizar la integración y despliegue continuo, mejorando la eficiencia del proceso de desarrollo.

## Cómo Empezar

### Requisitos Previos

- Node.js (v18.17.0)
- Docker y Docker Compose

### Instalación

1. Clona el repositorio:

```bash
git clone <url-del-repositorio>
```

2. Instala las dependencias: npm install
Ejecutar en Desarrollo
Inicia el servidor de desarrollo de Next.js:  

```bash
 npm run dev 
 ```

- Para ver los componentes en Storybook:  

```bash
npm run  storybook 
```

- Docker
Para construir y ejecutar la aplicación usando Docker Compose: 

```bash
docker-compose up --build
```

Configuración
ESLint
La configuración de ESLint se encuentra en el archivo .eslintrc.json, personalizado para cumplir con las mejores prácticas y estilos de código específicos del proyecto.

Tailwind CSS
Tailwind CSS está configurado en tailwind.config.js, permitiendo personalizar temas, breakpoints y otras configuraciones para adaptarse a las necesidades del diseño.

Storybook
Storybook está configurado en la carpeta .storybook, donde puedes ajustar la configuración global, agregar plugins y modificar el comportamiento según sea necesario.

Workflows de GitHub
Los workflows de GitHub se definen en la carpeta .github/workflows, automatizando pruebas, construcción, y despliegue de la aplicación.

Pruebas
Las pruebas se encuentran en la carpeta __tests__, donde puedes agregar pruebas unitarias y de integración para tus componentes y páginas.
