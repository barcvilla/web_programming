function workingWithArrays()
{
    const heroes = new Array();
    heroes[0] = 'Superman';
    heroes[1] = 'Batman';
    heroes[2] = 'Wonder woman';
    heroes[3] = 'Flash';
    heroes[4] = 'Aquaman';

    console.log(heroes);

    /*Literal Array*/
    let avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk'];

    /*Array con tipos de datos diferentes*/
    const mixedArray = [null, 1, [], 'two', true];

    /*Eliminando valores de un array*/
    console.log("Array Original: " + avengers)
    //delete avengers[3]; // el array mantiene el mismo numero de elementos, solo q el indice 3 es de tipo undefined
    //console.log("Array with deleted element: " + avengers);

    /*Propiedades y metodos del Array*/
    console.log("Cantidad elementos en Array: " + avengers.length);

    /*Obtenemos el ultimo elemento del array*/
    console.log("Ultimo elemento del array: " + heroes[heroes.length - 1]);

    /*Metodos: POP, PUSH, SHIFT, UNSHIFT*/
    console.log("Removemos el ultimo elemento: " + heroes.pop());
    console.log(heroes);

    console.log("Removemos el primer elemento del array: " + heroes.shift()); 
    console.log(heroes);

    console.log("Adicionamos un nuevo elemento: " + heroes.push('Captain America'));
    console.log(heroes);

    /*Merging Array*/
    avengers = avengers.concat(['Hawkeye', 'Black Widow']);
    console.log(avengers);

    /*Array.join - Retorna el contenido de un array en un string*/
    console.log("Array en string: " + avengers.join(' & '));

    /*Slicing and Splicing en Array */
    console.log(avengers);
    console.log("Slice Array(2,4) " + avengers.slice(2,4)); //empieza elemento 3 hasta 4

    /*Array.splice() - remueve items de un array e inserta uno nuevo en su lugar */
    console.log(avengers);
    
    // remueve el elemento indice 3, el parametro 1 indica cuantos elementos removemos del array
    avengers.splice(3, 1, 'Scarlet Witch');  
    console.log(avengers);

    //Podemos utilizar Array.splice() para adicionar un elemento en un array
    avengers.splice(4, 0, 'Quicksilver');
    console.log("Adicionamos un elemento al array: " + avengers);

    /**el metodo Splice() puede ser utilizado tambien para remover valores de un array. el operador delete tambien remueve
     * un elemento de un array pero este operador deja el valor como tipo undefined
     */
    avengers.splice(4, 1);
    console.log("Elimando un elemento de un array: " + avengers);

    /**el metodo reverse() permite revertir los elementos de un array */
    console.log(avengers.reverse());

    /**el metodo sort() - permite ordenar los elemento de un array */
    console.log("Array ordenado: " + avengers.sort());
}

function main()
{
    workingWithArrays();
}

main();