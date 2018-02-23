window.onload = change;

const btn = window.document.getElementById('button1');

const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'rebeccapurple', 'violet'];

function change()
{
    document.body.style.background = rainbow[Math.floor(7 * Math.random)];
}

if(btn)
{
   btn.addEventListener('click', change, false);
}
else
{
    console.log("error...");
}
    
