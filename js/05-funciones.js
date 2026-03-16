// funcion tradicional sin parametros
function saludar() {
    const pantalla = document.getElementById('pantalla');
    pantalla.innerHTML += '<p>Hola mundo 🌎 </p>'
} 

function saludarPersona(persona, edad = 20 ){
    const pantalla = document.getElementById('pantalla');
    pantalla.innerHTML += `<p>Hola ${persona} </p>`
    console.log('Edad: ' + edad)
}

// funcion con parametros


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

