/**Trabajando con Estructuras de Datos Sets */
function workingWithSets()
{
    /**Set representa una lista de valores unicos */
    // creando un Set
    let list = new Set();
    list.add(1).add(2).add(3);
    console.log(list);

    /**Si se pasa como argumento un string, los elementos son adicionados por separado */
    let letters = new Set('hello');
    console.log(letters);

    /**si queremos adicionar palabras separadas utilizamos el metodo add() */
    let words = new Set().add('the').add('quick').add('brown').add('fox');
    console.log(words);

    /**Tipos de datos mezclados */
    let mixedTypes = new Set().add(2).add('T');
    console.log(mixedTypes);

    /**Metodos Set */
    let jla = new Set().add('Superman').add('Batman').add('Wonder Woman');
    console.log(jla);
    console.log("Set jla size: " + jla.size);

    /**has() verifica si un valor esta en el Set */
    console.log('is Superman in Set? ' + jla.has('Superman'));
    console.log('is Green Lantern in Set? ' + jla.has('Green Lantern'));

    /**delete() remueve un valor del Set */
    console.log('Eliminamos a Wonder Woman: ' + jla.delete('Wonder Woman'));
    console.log(jla);

    /**clear() remueve todos los valores de un Set */
    jla.clear;
    console.log('Eliminamos todos los elementos Set: ' + jla)
}

function main()
{
    workingWithSets();
}

main();