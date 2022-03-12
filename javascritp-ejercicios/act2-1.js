// Manipula la siguiente cita de Richard Stallman: “Compartir el conocimiento es el acto más fundamental de la amistad. Porque es una forma de dar algo sin perder nada.”

// Guarda el texto en una variable.
// Transfórmalo en mayúsculas.
// Imprímelo por consola (console.log).
// Transfórmalo en minúsculas.
// Imprímelo por consola (console.log).



// Pro:
// ¿Por cuantos carácteres?
// ¿Y sin espacios?


var texto = "Compartir el conocimiento es el acto más fundamental de la amistad. Porque es una forma de dar algo sin perder nada."
var mayuscula = texto.toUpperCase();
var minuscula = texto.toLowerCase();
var espaciosBlancos = (texto.split(" ").length-1)

var textoSinEspacios = texto.length - espaciosBlancos;

console.log(mayuscula);
console.log(minuscula);
console.log(texto.length);
console.log(textoSinEspacios);
