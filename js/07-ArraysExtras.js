const frutas = ['🍎', '🍏', '🍇']
const verduras = ['🥔', '🍅']
const copiaFrutas = frutas;

// operador SPREAD ...
copiaFrutas.push('🍉')
const listaCompras = [...frutas,...verduras, '🍐']

console.log(frutas)
console.log(copiaFrutas)
console.log(listaCompras)

// REDUCE
const carrito = [100, 250, 1000]

const total = carrito.reduce((acumulador, precioActual)=> acumulador + precioActual, 0)
console.log(total)


