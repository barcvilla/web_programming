//window.onload = change();

function change()
{   
    if(document.getElementById)
    {
        const btn = window.document.getElementById('button1');
        if(btn)
        {
            btn.onclick = behave();
        }
        else
        {
            console.log("no se encontro elemento " + btn);
        }    
    }
}

function behave()
{
    const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'rebeccapurple', 'violet'];    
    document.body.style.background = rainbow[Math.floor(7 * Math.random)];
}