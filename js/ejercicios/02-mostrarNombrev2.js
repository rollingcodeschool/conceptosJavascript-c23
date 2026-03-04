//Como pedir un dato al usuario y mostrarlo por pantalla
const nombre = prompt('Ingresa tu nombre')
const apellido = prompt('Ingresa tu apellido')

console.log(nombre)
console.log(apellido)
const pantalla = document.getElementById( 'pantalla' )
//mostrar un mensaje al usuario
// alert('Tu nombre y apellido es: ' + nombre + ', ' + apellido)

pantalla.innerHTML = '<p>Tu nombre y apellido es: ' + nombre + ', ' + apellido + '</p>'
//version larga
//pantalla.innerHTML = pantalla.innerHTML + `(v2) Tu nombre y apellido es: ${nombre}, ${apellido}`
pantalla.innerHTML += `(v2) Tu nombre y apellido es: ${nombre}, ${apellido}`