/** TRABAJANDO CON ESTRUCTURAS DE DATOS EN JAVASCRIPT */

//declaramos un array numerico
let arr = [1,'2',3,4,true,5,6];

function workingWithArrays()
{
    //metodos: tamano del array
    console.log(arr.length);

    //obtenemos el indice de un elemento. Valor positivo significa elemento encontrado, valor negativo (-1) elemento no existe
    console.log(`El indice del elemento 5 es: ${arr.indexOf(5)}`);

    //Agregar elementos a un array con .push() al final del array y .unshift() al inicio del array
    arr.push('JavaScript','desde','cero');
    arr.unshift('Jose','Alejandro');
    console.log(arr);

    //En JavaScript toda expresion es aquella que retorna un valor.

    /**
     * Eliminar un elemento del array. pop() y shift() retornan el elemento eliminado
     * .pop() al final
     * .shift()
     */
    arr.pop();
    console.log(arr);
    arr.shift();
    console.log(arr);

    //el metodo join() convierte un array en un string unido con un separador, el separador por defecto es ","
    console.log(arr.join("/"));

    //el metodo splice(startIndex, numItemGet, itemsInsert) adiciona o quita elemento en un array
    arr.splice(2,1); //desde el indice 2, eliminar 1 elemento
    console.log(arr);

    //Nos ubicamos en el indice 7, eliminar dos elemento e insertamos (1) elemento que es el valor 7
    arr.splice(7, 2, 7);
    console.log(arr);

    //Nos ubicamos en el indice 2, NO eliminamos elementos, e insertamos (1) elemento
    arr.splice(2, 0, "Pedro");
    console.log(arr);

    //el metodo slice() crea un nuevo array a parti de un array
    let arr2 = arr.slice(2,5); // obtenemos desde la posicion 2 hasta el elemento indice 5 excluyendo el mismo.
    console.log(arr2);

    //creamo un nuevo array
    let arr3 = arr.slice();
    console.log(arr3);
}


function main()
{
    workingWithArrays();
}

main();