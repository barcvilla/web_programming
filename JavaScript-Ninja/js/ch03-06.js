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

function main()
{
    whileLoop();
    doWhileLoop();
    forLoopI();
    forLoopII();
}

main();