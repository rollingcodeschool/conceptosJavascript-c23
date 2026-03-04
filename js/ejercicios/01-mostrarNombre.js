//Como pedir un dato al usuario y mostrarlo por pantalla
const nombre = prompt('Ingresa tu nombre')
const apellido = prompt('Ingresa tu apellido')

console.log(nombre)
console.log(apellido)

//mostrar un mensaje al usuario
// alert('Tu nombre y apellido es: ' + nombre + ', ' + apellido)
// 1. Abrimos el documento para escribir
document.open();
//document.writeln('Tu nombre y apellido es: ' + nombre + ', ' + apellido)
document.writeln('<p>Tu nombre y apellido es: ' + nombre + ', ' + apellido + '</p>')
document.writeln(`Tu nombre y apellido es: ${nombre}, ${apellido} `)

// 3. Cerramos el documento
document.close();