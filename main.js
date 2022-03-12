// A partir del siguiente Array.

const miLista = ["Lisp", "Clojure", "Haskell", "Elm", "Racket", "Swift", "Erlang", "Scala"]
// Obtén el número de elementos que contienen una letra "s" en su valor (o una "s" en su texto).

// Si quieres subir el nivel, no uses "length".

const wordsContainS = (lista) => lista.filter((miLista) => miLista.toLowerCase().includes('s'));

console.log(wordsContainS(miLista));