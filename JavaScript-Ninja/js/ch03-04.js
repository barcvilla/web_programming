/**JavaScript - Logic */
function IfStatementI()
{
    /**IF Statements */
    let age = 12;
    if(age < 18)
    {
        console.log("Sorry, you are not old enough to play this game")
    }
    else
    {
        console.log('Welcome, you are permitied to play this game');
    }
}

function IfStatementII()
{
    let n = 12;
    if(n % 2 === 0)
    {
        console.log('n es un numero par');
    }
    else
    {
        console.log('n es un numero impar');
    }
}

function operadorTernario()
{
    let n = 5;
    n % 2 === 0 ? console.log('n es un un numero par...') : console.log('n es un numero impar...');
}

function IfShorted()
{
    let n = 7;
    console.log(`n es un numero: ${(n % 2 === 0) ? 'par' : 'impar'}` );
}

function main()
{
    IfStatementI();
    IfStatementII();
    operadorTernario();
    IfShorted();
}

main();