/**Sentencia Switch: Se utiliza cuando tenemos muchas condiciones que evaluar */
function usingSwitch()
{
    let n = 4;
    switch(n)
    {
        case 4:
        {
            console.log('el numero es 4');
            break;
        }
        case 5:
        {
            console.log('el numero es 5');
            break;
        }
        case 6:
        {
            console.log('el numero es 6');
            break;
        }
        default:
        {
            console.log('el numero es menos a 4');
            break;
        }
    }
}

function main()
{
    usingSwitch();
}

main();