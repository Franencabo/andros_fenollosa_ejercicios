// ¿Cuantos años tiene Madonna? Te doy un dato: nació en 1958.

// Calcula y guarda el resultado en una variable.
// Imprime la edad con un formato más adecuado: “Madonna tiene xx años”.


// Pro:
// Obtén el año actual con JavaScript.


var nacimiento = 1958;


//Hay que poner new porque Date es un objeto interno de JS y así lo instanciamos
var fecha = new Date();
var anyoActual = fecha.getFullYear();

console.log(`Madonna tiene ${anyoActual-nacimiento} años.`);
console.log(anyoActual);