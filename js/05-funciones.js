// funcion tradicional sin parametros
function saludar() {
    const pantalla = document.getElementById('pantalla');
    pantalla.innerHTML += '<p>Hola mundo 🌎 </p>'
} 
// funcion con parametros
function saludarPersona(persona, edad = 20 ){
    const pantalla = document.getElementById('pantalla');
    pantalla.innerHTML += `<p>Hola ${persona} </p>`
    console.log('Edad: ' + edad)
}

//funciones que retornan un valor
// function aplicarDescuento(precio, descuento){
//     const precioFinal = precio - ((precio * descuento)/100)    
//     // let precioFinal = ((precio * descuento)/100)  
//     // precioFinal = precio - precioFinal  
//     console.log(precioFinal)
//     return precioFinal
//     // nunca se debe agregar una linea de codigo debajo del return dentro de la funcion
// }

// expresion de funcion
// const aplicarDescuento = function (precio, descuento){
//     const precioFinal = precio - ((precio * descuento)/100)    
//     return precioFinal
// }

// arrow functions
const aplicarDescuento = (precio, descuento) => precio - ((precio * descuento)/100);

console.log('hola')
// invocar o llamar a la funcion
saludar()

console.log('hola 1')
console.log('hola 2')

saludar()
saludar()
saludar()
saludar()
saludar()

while(confirm('¿Queres saludar una persona?')){
    const nombre = prompt('Ingresa tu nombre')
    console.log(nombre)
    saludarPersona(nombre)
}

saludarPersona('Rodrigo', 25)

const precio = Number(prompt('Ingresa un precio'))
const descuento = Number(prompt('Ingresa un descuento'))

const precioFinal = aplicarDescuento(precio, descuento)
const pantalla = document.getElementById('pantalla')
pantalla.innerHTML += `<p>El precio que ingresaste fue ${precio}, con el descuento de ${descuento}%, el precio final es ${precioFinal}</p>`


pantalla.innerHTML += `<p>El precio que ingresaste fue $2000, con el descuento de 15%, el precio final es ${aplicarDescuento(2000,15)}</p>`

