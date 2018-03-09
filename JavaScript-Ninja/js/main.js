const rainbow = ['red','orange','yellow','green','blue','rebeccapurple','violet'];

function change() {
    document.body.style.background = rainbow[Math.floor(7*Math.random())];
  }

window.onload = function()
{
    const btn = document.getElementById('button');
    if(btn)
    {
        btn.addEventListener('click', change);
    }
}

  