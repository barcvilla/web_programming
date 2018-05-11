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
    const avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk'];

    /*Array con tipos de datos diferentes*/
    const mixedArray = [null, 1, [], 'two', true];

    /*Eliminando valores de un array*/
    console.log("Array Original: " + avengers)
    delete avengers[3]; // el array mantiene el mismo numero de elementos, solo q el indice 3 es de tipo undefined
    console.log("Array with deleted element: " + avengers);

    /*Propiedades y metodos del Array*/
    console.log("Cantidad elementos en Array: " + avengers.length);

    /*Obtenemos el ultimo elemento del array*/
    console.log("Ultimo elemento del array: " + heroes[heroes.length - 1]);
}

function main()
{
    workingWithArrays();
}

main();