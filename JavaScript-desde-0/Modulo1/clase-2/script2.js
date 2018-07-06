/**
 * Strings
 */
function workingWithStrings()
{
    let saludo = 'Bienvenidos a Escuela Digital';

    //Propiedades
    console.log(`Longitud de variable saludo: ${saludo.length}`);

    //Metodos sin parametros
    console.log(saludo);
    console.log(`Eliminando los espacios en blanco: ${saludo.trim()}`);
    console.log(`Conversion a mayusculas: ${saludo.trim().toUpperCase()}`);
    console.log(`Conversion a minusculas: ${saludo.trim().toLowerCase()}`);

    //Metodos con parametros
    //indexOf(string, i) permite buscar el indice un elemento dentro de una cadena
    console.log(saludo.indexOf('i'));

    //cuando no encuentra el elemento en el string retorna -1
    console.log(saludo.indexOf('EDU'));

    //lastIndexOf(string, i): empieza la busqueda desde el final hacia el principio.
    //retorna 1 ya que el segundo parametro establece el indice de la cadena, del indice 2 va hacia atras.
    console.log(saludo.lastIndexOf('i', 2));

    //Replace(oldString, newString): Reemplaza una porcion de un string por una nueva. El objeto string retornado es un nuevo objeto
    //no se modifica el string original.
    let newSaludo = saludo.replace('Escuela Digital', 'Bextlan');
    console.log(saludo);
    console.log(newSaludo);

    /**split('separador', N): Convierte un string en un array
     * 
    */
   let arrayFromSaludo = saludo.split(' '); //dividimos el array por medio del espacio en blanco.x  
   console.log(arrayFromSaludo);

   /**
    * substring(a,b-1), substr(a,b-1), slice(a,b-1)
    */
   let substring;
   let substr;
   let slice;
   substring = saludo.substring(4); // se ubica en el indice 4 del string saludo y extrae un nuevo string
   console.log(substring);
   substring  = saludo.substring(4, 7); //se ubica del indice 4 y extrae hasta el indice 7 - 1
   console.log(substring);
   substring = saludo.substring(4, -1); // se ubica en el indice 4 y extrae hacia atras
   console.log(substring);

   substr = saludo.substr(4, 5); // se ubica en el indice 4 y extrae 5 caracteres
   console.log(substr);
   substr = saludo.substr(-7, 5); // empieza desde el final del string, y selecciona segun el primer parametro y extrae segun segundo paramero
   console.log(substr);

   slice = saludo.slice(4, 7); // igual a substring(4,7)
   console.log(slice);

   /**
    * Se ubica en el indice 4 iniciando desde el 0 y extra toda la cadena excluyendo la parte del valor negativo
    *  si colocamos el segundo valor negativo, no tomara ese numero de elementos contado de atras
    */
   slice = saludo.slice(4, -7); 
   console.log(slice);

   slice = saludo.slice(-10, -7);// va desde atras, cuenta 10 posiciones, extrae los elemento quitando los primeros 7 desde atras
   console.log(slice);

   /**
    * Tres nuevos metodos con ECMAS6
    * .startsWith(), .endsWith(), .includes(): todos estos metodos retornan un valor boolean
    */
   console.log(`Variable saludo inicia con B? ${saludo.startsWith('B')}`);
   console.log(`Variable saludo termina en l? ${saludo.endsWith('l')}`);
   console.log(`Variable saludo incluye ${saludo.includes('Escuela')}`);

}

 function main()
 {
     workingWithStrings();
 }

 main();