FROM node:12 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
EXPOSE 80

# Copia los archivos de la aplicación Angular
COPY --from=node /app/dist/Broidery-frontend /usr/share/nginx/html
