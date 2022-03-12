// Portero de discoteca automático

// Pide el año de nacimiento.
// Calcula la edad.
// Si es mayor de edad, dile que puede pasar dentro.
// Si es menor, tírale.
// (PRO) Obten el año del sistema.
// (PRO) Pide además el día y el mes de nacimiento para saber si ha complido el año actual.



const birthYear = prompt('Introduce tu año de nacimiento para ver si puedes entrar en la discoteca');
const birthMonth = prompt('También necesitamos tu mes de nacimiento, introducelo');
const birthDay = prompt('Y por último el día')

const birthDate = new Date(birthYear, birthMonth-1 , birthDay);
const currentDate = new Date;
console.log(birthDate);
console.log(currentDate);


const realDate = Math.abs(currentDate - birthDate);
const realDateFigure = realDate/(1000*3600*24);
console.log(realDateFigure);

const minAge = 365 * 18;
console.log(minAge);


if (realDateFigure >= minAge){
    alert('Puedes pasar!')
} else {
    alert('Lo siento, tendrás que esperar un tiempo.')
}

