/*

    Un callback devuelve una función en los parámetros, cuando llamamos varias veces un callback, estaremos colocando muchas lineas de código y sería engorroso, por eso nacen las promesas, éstas optimizan y permiten leer mejor el código con pocas lineas.
    .
    🫱🏼‍🫲🏾 Las promesas son asíncronas, por lo que el código continuará su ejecución normalmente y luego dirá si la promesa se resolvió o se rechazó. Por lo que varias promesas pueden llegar a entrar en ejecución al mismo tiempo.
    .
    Las promesas pueden suceder:
    .

    Ahora
    En el futuro
    Nunca
    .
    🛠️ Para crear una promesa:
    .
    Utilizamos la palabra reservada new seguida de la palabra Promise que es el constructor de la promesa. Este constructor recibe un único parámetro que es una función, la cuál a su vez, recibe otros dos parámetros: resolve y reject.

    El parámetro resolve se utiliza para cuando la promesa devuelve el valor correctamente.
    El parámetro reject, se usa en el que caso de que no funcione.
    .
    📝 Ejemplo:
    const promise = new Promise(function (resolve, reject){
    resolve('hey!');
    });
    .
    🗃️ Una Promesa puede estar en uno de los siguientes estados:
    .

    Pendiente pending → Una promesa inicia en este estado: no cumplida, no rechazada:
    Una promesa inicialmente está pendiente.
    Cumplida fulfilled → Significa que la operación se completó satisfactoriamente, .then(va => …)
    Cuando llamamos a resolve entonces la promesa pasa a estar resuelta.
    Cuando una promesa se resuelve entonces se ejecuta la función que pasamos al método .then
    Rechazada rejected → significa que la operación falló, .catch(err => …)
    Si llamamos a reject pasa a estar rechazada (obtenemos un error que nos va a indicar la razón del rechazo).
    Si la promesa es rechazada entonces se ejecuta la función que pasamos a .catch
    .
    📝 Ejemplo con then y catch:
    .

    Para probar el código, en el proyecto se crea la carpeta llamada promise dentro de la carpeta src.
    Se crea el archivo index.js en la ruta: src/promise

*/
const promise = new Promise(function (resolve, reject) {
    resolve('Hey');
});

const cows = 15;
const countCows = new Promise(function (resolve,reject){
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`);
    } else {
        reject(`There is not cows on the farm`);
    }
})

countCows.then((result)=>{console.log(result);
}).catch((error)=>{console.log(error);
}).finally(()=>{console.log('Termino la ejecución')})