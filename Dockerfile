# Establece la imagen base con la versión específica de Node.js
FROM node:18.17.0

# Crea el directorio de la aplicación
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Instala las dependencias de la aplicación
# Copia ambos archivos package.json y package-lock.json
COPY package*.json ./

RUN npm install

# Copia los archivos y directorios del proyecto al directorio de trabajo actual (.)
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Expone el puerto que la aplicación utilizará
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]