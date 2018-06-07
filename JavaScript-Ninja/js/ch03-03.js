function workingWithMaps()
{
    /**Creando un Map */
    let romanNumbers = new Map();
    /**adicionando entradas al Map */
    romanNumbers.set(1, 'I');
    console.log(romanNumbers);

    /**Multiples Items se pueden adicionar a un Map */
    romanNumbers.set(2, 'II').set(3, 'III').set(4, 'IV').set(5, 'V');
    console.log(romanNumbers);

    /**Map Methods */
    console.log('Obtenemos # Romanos 4: ' + romanNumbers.get(4));
    console.log('Map contiene elemento 5?: ' + romanNumbers.has(5));
    console.log('Map contiene elemento 10?: ' + romanNumbers.has(10));

    /**Map con multiples valores */
    let heroes = new Map([['Clark Kent', 'Superman'], ['Bruce Wayne', 'Batman']]);
    console.log(heroes);
    console.log('Elementos en Map Heroes: ' + heroes.size);

    /**Eliminando entrada en un Map */
    console.log('Eliminando Clark Kent del Map: ' + heroes.delete('Clark Kent'));
    console.log(heroes);

    /**Removemos todos los elementos de un Map */
    heroes.clear();
    console.log('Map heroes sin elementos: ' + heroes.size);

    /**Convirtiendo Map en Array */
    let romanArray = Array.from(romanNumbers);
    console.log('Convertimos Map en Array: ' + romanArray);

    /**Weak Maps: Funciona igual que Weak Sets. Weak Maps son iguales a Maps excepto que sus claves no pueden ser
     * primitivas, y el garbage collector automaticamente remueve alguna entrada muerta cuando la referencia al objeto
     * original esta eliminada.
     */
}

function main()
{
    workingWithMaps();
}

main();