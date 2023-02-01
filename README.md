# Robots

El proyecto consiste en crear un frontend en React (con Redux) que permita al usuario gestionar un listado con sus robots. El usuario debe poder listar, crear, modificar y borrar robots. Cada robot debe mostrar un nombre, una imagen (URL de internet) y unas características:

-   Velocidad (0-10)
-   Resistencia (0-10)
-   Fecha de creación

Tendrás que crear una base de datos MongoDB para almacenar los robots, en Atlas.

Tendrás que crear una API REST con Express, con los siguientes endpoints:

[GET] /robots -> devuelve un array con todos los robots de la BD

[GET] /robots/:idRobot -> devuelve un robot de la BD por id

[POST*] /robots/create -> recibe un robot (sin id), lo crea en la BD y devuelve el robot recién creado

[PATCH*] /robots/update -> recibe un robot, modifica en la BD el robot con la misma id que el recibido, y devuelve el robot modificado

[DELETE*] /robots/delete/:idRobot -> elimina de la BD un robot por id y devuelve un objeto con la id
