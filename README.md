Comandos

- npm init -y : inicializamos package.json para el proyecto

- npm i prisma -D : instalamos prisma como dependencia de desarrollo (esto instala el binario prisma dentro de node_modules)

- npx primsa init --datasource-provider sqlite : ejecutamos binario de prisma para incializarlo y que lo configure con la base de datos SQLite

- (... creamos models en schema.prisma)

- npx prisma migrate dev : realiza la migracion de los modelos a .sql (e crea la base de datos) , instala prisma client como dependencia de produccion (con lo cual ya se puede usar en nuestro servidor).

  - npx prisma migrate dev --name nombre_migracion
    (por cada modificación en schema.prisma debemos hacer una nueva migración)

- PRISMA UI

  - npx prisma studio

- PRISMA Y TYPESCRIPT

  - npm i typescript ts-node-dev @types/node -D
  - npx tsc --init (crea archivo de tsconfig.json).
  - npm i prisma -D

- POSTGRESQL DEPLOY
