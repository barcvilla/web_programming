// este es un comentario corto
/*
este comentario es mas largo
cualquier cosa aqui sera ingnorado
este tipo de comentario es util para
poner notas
*/
function mensaje()
{
    const message = "Hello world!";
    alert(message);
}

function declarandoVariables()
{
    // const : se utiliza cuando la variable no se le asignara otro valor
    // let: se utiliza si la variable puede reasignarse mas adelante en el programa.
    const name = "Alexa"; // no se le asignara otra cadena a esta variable inmutable
    let length = 0; // este valor puede cambiar a lo largo del programa
    length = name.length;
    console.log(length);
    console.log(name.toUpperCase());
    console.log(name.toLowerCase());
    /* obtenemos el elemento de una posicion indicada */
    console.log(name.charAt(2));
    /* obtenemos saber cual es el indice de un elemento de la cadena */
    console.log(name.indexOf('x'));
    /* obtenemos la ultima aparicion de un caracter */
    console.log(name.lastIndexOf('a'));
    /* queremos saber si una cadena contiene cierto caracter */
    console.log(name.includes('t'));
    /* verificamos si una cadena comienza con un cierto caracter */
    console.log(name.startsWith('A'));
    /* verificamos si una cadena termina con un cierto caracter */
    console.log(name.endsWith('g'));
    /* concatenamos dos cadenas */
    console.log(name.concat(' y John'));
    /* otra forma de concatenar cadenas */
    console.log(name + ' y ' + 'John');
    /* repetir la cadena n veces */
    console.log(name.repeat(3));
}

function usingTemplateLiterals()
{
    const name = `Siri`;
    console.log(`Hello ${name}`);

    const age = 39;
    console.log(`I will be ${age + 1} next year`);
}

function main()
{
    declarandoVariables();
    usingTemplateLiterals();
}

main();