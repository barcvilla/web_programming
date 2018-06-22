/* FUNCIOES */
/**Definicion de una funcion */
function hello()
{
    console.log('Hello World!');
}

/**Expresion de funcion anonima */
const goodbye = function(){
    console.log('Goodbye world!');
};

/**Expresion de una funcion nombrada */
const message = function greeting(){
    console.log('Hi guys!');
};

/*Retornando un Valor*/
function howdy()
{
    return 'Howdy World';
}

/**Parametros y Argumentos */
function square(x)
{
    return x * x;
}

/**Funciones con un numero variable de argumentos */
function numbers(...args)
{
    for(arg of args)
    {
        console.log(arg);
    }
}

function main()
{
    hello();
    console.log(goodbye());
    console.log(message());
    /**Llamando al nombre de la funcion */
    console.log(goodbye.name);
    console.log(message.name);
    console.log(howdy());
    const hi = howdy(); /**invocamos un funcion en una variable */
    console.log(hi); 
    console.log(square(9));
    console.log(numbers(1,2,3,4,5));
}

main();