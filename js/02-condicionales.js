//Determinar si un número es par o impar: Crear un algoritmo que permita al usuario ingresar un número y
//determinar si es par o impar. Mostrar el resultado.

// const numero1 = parseInt( prompt('Ingresa un número') )
const numero1 = Number(prompt("Ingresa un número"));
// const numero1 = +( prompt('Ingresa un número') )
console.log(numero1);
console.log(isNaN(numero1));
console.log(isNaN(4));

// el valor de numero1 es un numero?
// !false => true
// !true => false
if (!isNaN(numero1)) {
  const total = numero1 % 2;
  console.log(total);
  if (total === 0) {
    alert("El número es par");
  } else {
    alert("El número es impar");
  }
} else {
  alert("Ingresaste un valor erroneo");
}

