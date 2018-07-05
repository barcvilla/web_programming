/**Basics Information about JavaScript */
/**
 * 1. JavaScript es caseSensitive
 */
function greeting()
{
    console.log("Hello world!");
}

/**Variables y constantes */
function workingWhitVariable()
{
    /**declaramos variables */
    let precio = 120;
    let impuesto = precio * 0.18;
    let descuento = precio * 0.1;
    let precio_final = precio + impuesto - descuento;

    console.log(precio_final);

    /**Uso constantes */
    const edYear = 2010;
}

/**
 * JavaScript entiende el tipo de datos a partir del valor asignado a la variable. Existen 2 tipos de datos:
 * Primitivos: Estos son string, number, boolean, undefined, null 
 * Objetos:  Estos son: arrays, objects, maps, sets, functions
 */
function workingWithDataTypesString()
{
    //Strings:
    let holaMundo = "Hola Mundo";
    //adicionamos comillas dentro del texto
    let message = "Hello \"World\"";
    console.log(holaMundo);
    console.log(message);

    //Concatenacion string
    let nombre = "Pedro";
    let saludo = "Bienvenido, " + nombre;
    console.log(saludo);

    //Usando Template string
    console.log(`Bienvenido, ${nombre}`);

    //Numbers
    let birth = 1982;
    let year = new Date().getFullYear();
    let age = year - birth;
    console.log(`Usted tiene la edad de: ${age}`);

    //booleans
    if('a' == 'b')
    {
        console.log('son iguales');
    }
    else
    {
        console.log('no son iguales');
    }

    //undefined: ocurre cuando no se le asigna un valor a una variable

    //null: Ocurre cuando no existe un valor

    //typeof: operador que nos retorna el tipo de dato de una variable, objeto
    console.log(`la variable birth es de tipo: ${typeof birth}`);
}

function main()
{
    greeting();
    workingWhitVariable();
    workingWithDataTypesString();
}

main();