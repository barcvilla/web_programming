/**Working with Loops */

function whileLoop()
{
    let bottles = 10;
    while(bottles > 0)
    {
        console.log(`habian ${bottles} botellas en la mesa. Si se cae una botella quedan ${bottles -1} botellas`);
        bottles--;
    }
}

function doWhileLoop()
{
    let items = 10;
    do
    {
        console.log(`habian ${items} items en la mesa. Si se pierde un item quedan ${items} items`);
        items--;
    }
    while(items > 0);
}

function forLoopI()
{
    /**for(initialization; condition; after) */
    for(let bread = 10; bread > 0; bread--)
    {
        console.log(`habian ${bread} panes en la mesa. Si me como un pan quedan ${bread} panes`);
    }
}

/**Cada parte dentro del loop for son opcionales */
function forLoopII()
{
    let coins = 10;
    for(; coins > 0;)
    {
        console.log(`Habian ${coins} monedas en la mesa. Si tomo una moneda queda ${coins} monedas`);
        coins--;
    }
}

/**Loop aninados: Colocamos un loop dentro de otro Loop */
function nestedLoop()
{
    let j = 0;
    for(let i = 1; i < 13; i++)
    {
        j = 1;
        for(; j < 13; j++ )
        {
            console.log(`${i} multiplicado por ${j} es ${i * j}`);
        }
    }
}

/**Looping sobre Array */
function loopOverArray()
{
    let avengers = ['Captian America', 'Iron Man', 'Thor', 'Hulk'];
    for(let i = 0, max = avengers.length; i < max; i++)
    {
        console.log(avengers[i]);
    }
}

/**For of looping */
function forOfLoop()
{
    let heroes = ['Captian America', 'Iron Man', 'Thor', 'Hulk'];
    for(const value of heroes)
    {
        console.log(value);
    }
}

/**Looping sobre Set: Set es enumerable, lo que significa que tiene metodos que nos permiten iterar sobre cada valor en el set.
 * La iteracion es en el mismo orden que ellos fueron adicionados en el set.
*/
function loopOverSets()
{
    let letters = new Set('hello');
    for(const letter of letters)
    {
        console.log(letter);
    }
}

/**Looping over Maps */
function loopOverMaps()
{
    let romanNumerals = new Map();
    romanNumerals.set(1, 'I',).set(2, 'II').set(3, 'III').set(4, 'IV').set(5, 'V');
    for(const key of romanNumerals.keys())
    {
        console.log(key);
    }

    /**el metodo value() nos permite iterar sobre los valores */
    for(const value of romanNumerals.values())
    {
        console.log(value);
    }

    /**Si queremos acceder a la clave/valor podemos usar el metodo entries() */
    for(const [key, value] of romanNumerals.entries())
    {
        console.log(`${key} in Roman numerals is ${value}`);
    }
}

function main()
{
    whileLoop();
    doWhileLoop();
    forLoopI();
    forLoopII();
    nestedLoop();
    loopOverArray();
    forOfLoop();
    loopOverSets();
    loopOverMaps();

}

main();