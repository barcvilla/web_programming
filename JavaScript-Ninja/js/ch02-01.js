// este es un comentario corto
/*
este comentario es mas largo
cualquier cosa aqui sera ingnorado
este tipo de comentario es util para
poner notas
*/
function mensaje()
{
    const message = "Hello world!";
    alert(message);
}

function declarandoVariables()
{
    // const : se utiliza cuando la variable no se le asignara otro valor
    // let: se utiliza si la variable puede reasignarse mas adelante en el programa.
    const name = "Alexa"; // no se le asignara otra cadena a esta variable inmutable
    let score = 0; // este valor puede cambiar a lo largo del programa
}

function main()
{
    mensaje();
}

main();