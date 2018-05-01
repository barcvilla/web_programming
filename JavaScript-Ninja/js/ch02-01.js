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

function workingWithNumbers()
{
    console.log("Numero 42 es de tipo: " + typeof(42));
    console.log("Numero 3.1415 es de tipo: " + typeof(3.1415));
    console.log("Numero 42 es entero? " + Number.isInteger(42));
    console.log("Numbero 3.1415 es entero? " + Number.isInteger(3.1415));

    /*Construyendo un numero */
    console.log("Construimos un nuevo numero: " + new Number(3));

    /*Metodos aplicados a Number */
    /*Al momento de llamar a un metodo de la clase Number debemos tener cuidado al usar la notacion de punto(5.isInteger()) 
      ya que JavaScripts puede confundirse como si fuese un decimal. Hay varias alternativas para manejar esta situacion*/
    console.log(5..toExponential()); // usamos dos puntos
    console.log(5 .toExponential()); // usamos un espacio antes del punto
    console.log(5.0.toExponential()); // siempre escribimos un integer como decimal
    console.log((5).toExponential()); // colocamos el entero entre parentesis

    /*Metodo toFixed() redondea un numero a numero de decimales fijos */
    const PI = 3.1415926;
    console.log("Constante PI redondeado a 3 posiciones decimales: " + PI.toFixed(3)); //el valor retornado es un string

    /*Incrementando una variable */
    let num1 = 5;
    let num2 = 5;
    console.log("Valor de num1: " + num1)
    console.log("operacion 7 - 5++ = " + (7 - num1++));
    console.log("nuevo valor de num1 - Post Increment = " + num1);

    console.log("operacion: 7 - ++5 = " + (7 - ++num2));
    console.log("numero valor de num1 - Pre Increment = " + num2);
}

function main()
{
    declarandoVariables();
    usingTemplateLiterals();
    workingWithNumbers();
}

main();