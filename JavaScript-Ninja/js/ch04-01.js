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

/**Trabajando con parametros Rest. Todos los argumentos ingresan en un array llamado values */
function mean(...values)
{
    let total = 0;
    for(const value of values)
    {
        total = total + value;
    }
    return total / values.length;
}

/**Parametros por defecto. Para un parametro por defecto, simplemente asignamos un default value en la definicion 
 * de la funcion
 */
function hello(name="World!")
{
    console.log(`Hello ${name}`);
}

/**Default Parameters deben ir simpre despues de un parametro non default */
function discount(price, amount = 10)
{
    return price * ((100 - amount) / 100);
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
    console.log(mean(2,8,13,11,4,2));
    hello();
    console.log(discount(20));
    /**proveemos un descuento diferente al parametro por defecto */
    console.log(discount(15, 20));
}

main();