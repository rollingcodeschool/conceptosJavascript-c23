// ejercicio 9
// Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

// const prueba = 'hola'
// console.log(prueba.length)
// console.log(prueba.substring(0,1))
// console.log(prueba.charAt(0))
//hola
//azul
const frase = prompt("Ingresa una frase").toLowerCase();
const pantalla = document.getElementById("pantalla");

pantalla.innerHTML = `vocales de la palabra ${frase}: `;
console.log(frase.length);
console.log(frase.toLowerCase()); //esto transforma el texto a minuscula
console.log(frase.toUpperCase()); //esto transforma el texto a mayuscula

for(let caracter=0; caracter < frase.length; caracter++){
 if (
    frase.charAt(caracter) === "a" ||
    frase.charAt(caracter) === "e" ||
    frase.charAt(caracter) === "i" ||
    frase.charAt(caracter) === "o" ||
    frase.charAt(caracter) === "u" ||
    frase.charAt(caracter) === "á"
  ) {
    pantalla.innerHTML += frase.charAt(caracter);
  }
}

