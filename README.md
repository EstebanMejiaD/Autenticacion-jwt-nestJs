<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


# Autenticacion en Nest con JWT 



Necesitas tener instalado 

<li>
NodeJs 
</li>
<li>
NPM 
</li>
<li>
Git
</li>

1. Instala el CLI de NestJs

```
npm i -g @nestjs/cli
```
2. <p>Puedes clonar el repositorio de ésta manera en la ruta que tu quieras hasta en el escritorio si se te hace cómodo</p>

En la linea de comandos pega la siguiente linea.
```
git clone https://github.com/EstebanMejiaD/Autenticacion-jwt-nestJs.git
```
3. luego de clonar el repositorio debes instalar los modulos de node que necesita el servidor para funcionar.
Nota: si abres una terminar ya sea cmd PoowerShell o el de tu preferencia, debes ubicarte en la ruta de tu carpeta que acabas de clonar.
allí puede pegar el comando
```
npm install
```

4. Ya teniendo los modulos instalados puedes iniciar el servidor de ésta manera:

si usas yarn:
```
yarn start: dev
```
si usas npm:
```
npm run start:dev
```
5. Ahora puedes probar el "Login" ó inicio de sesion utilizando tu cliente favorito como Postman o Thunder Client y en la url agregas:

Nota: Recuerda que debes seleccionar el metodo POST 
```
http://localhost:3000/auth
```

En el body: debes ingresar un username y un password
Especificamente hay uno preestablecido para que sea más facil

Solo usa un json de esta forma

```
{
  "username": "Esteban.mejia",
  "password": "123456"
}
```
Si le das a Send luego de verificar que todo lo hallas hecho como te pedí, encontrarás que la respuesta del servidor te da un token de acceso: como éste: 

{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJzdWIiOjEsImlhdCI6MTY3ODQ3OTg1MCwiZXhwIjoxNjc5MzQzODUwfQ.9_0DxzaAziZl7cylghN1kCWLVVL6oX2C-t4REbj1uOc"
}

6. Bueno con éste token podrás acceder a los diferentes endpoints de la aplicacion

Existre un endpoint llamado "products". A éste endpoint solo tienen acceso los usuarios reciban un token de autorizacion. 

ya que tu tienes el token(tu token es unico), te sugiero que lo copies, y lo uses para provar las otras rutas.

Créate una nueva pestaña en tu cliente favorito e ingresa la siguiente url:
```
http://localhost:3000/products
```

¡USA EL METODO GET!

y busca el apartado de Auth luego que entres a Auth luego selecciona Bearer Token y  podrás ingresar el token que te generó en ese campo que te aparece debajo.
simplemente si le das send y si me seguiste el ritmo. 
te debe retornar un mensaje como éste 

"This action returns all products"

Y significa que si tienes autorizacion y te dejo ejecutar la funcion que te muesta éso.

Para finalizar, también puedes probar el CRUD completo como GET(id) para buscar un producto, PATCH(id) para actualizar o DELETE(id) para eliminar, hasta POST para crear. 

Todo esto es con ejemplos pero ya entienden mi punto. que es probar que funciona la autenticacion por Json Web Token.



