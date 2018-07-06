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

function workingWithOperators()
{
    // Operadores aritmeticos: +, -, *, /, %

    // Operadores Incremento (++) y Decremento (--)
    // PostIncremento
    let numero = 5;
    console.log(`variable post incremento: ${numero++}`);
    console.log(`Variable post incremento aplicado: ${numero}`);

    // PreIncremento
    let num = 5;
    console.log(`variable num = 5 pre incremento aplicado ${--num}`);

    // Operadores: +=, -=, *=, /=

    // Operadores de Comparacion (retornan un boolean): <, >, <=, >=
    let bcondicion = 5 < 10;
    console.log(bcondicion);

    /**
     * Operadores de Igualdad:
     * = asignador de valor ejemplo: let a = 2;
     * == comparador de igualdad ejemplo 5 == 5 (retorna true)
     * === comparador identico ejemplo: 5 === '5' (retorna false ya que el primero es number y el segundo string)
     */
}

function workingWithPropertiesMethods()
{
    /**
     * JavaScript es un lenguaje prototipado, es decir que los objetos que se crean heredan o reciben de prototipos ya definidos
     * una serie de metodos y propiedades.
     * Las propiedades no llevan parentesis: length
     * Los metodos o funciones si llevan parentesis: toUpperCase()
     */
    let texto = "Hola mundo";
    console.log(`Accedemos a los metodos de la variable texto: Longitud ${texto.length}`);
    console.log(`${texto.toUpperCase()}`);

    //Ejemplo 2
    let prof1 = 'alexys';
    let prof2 = 'Daniel';

    // evaluamos si el profesor inicia en A
    console.log(`Prof1 Alexys inicia con A o a? : ${prof1.toUpperCase().indexOf('A') == 0}`);
    console.log(`Prof2 Daniel inicia con A o a? : ${prof2.toUpperCase().indexOf('A') == 0}`);

    // Ejemploe 3 - numeros
    let pi = 3.141567;
    console.log(`PI a dos decimales: ${pi.toFixed(2)}`);
}

function main()
{
    greeting();
    workingWhitVariable();
    workingWithDataTypesString();
    workingWithOperators();
    workingWithPropertiesMethods();
}

main();