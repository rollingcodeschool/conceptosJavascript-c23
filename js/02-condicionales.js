//Determinar si un número es par o impar: Crear un algoritmo que permita al usuario ingresar un número y
//determinar si es par o impar. Mostrar el resultado.

// const numero1 = parseInt( prompt('Ingresa un número') )
const numero1 = Number(prompt("Ingresa un número"));
// const numero1 = +( prompt('Ingresa un número') )
const total = numero1 % 2;
console.log(total);

if (total === 0) {
  alert("El número es par");
} else {
  alert("El número es impar");
}
