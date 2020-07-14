# ml-frontend-challenge

## Iniciar la aplicación.

Para correr esta aplicación es necesario arrancar, en orden, primero el servidor y luego el cliente.

1. Iniciar el servidor.

```sh
 cd api
 yarn install
 node index.js
```

2. Iniciar el cliente.

```sh
 cd client
 yarn install
 yarn start
```

3. Crear archivo .env.local con el contenido del archivo .env.test

4. Correr tests sobre el cliente, mostrando la cobertura de código.

```sh
 yarn test --coverage
```
