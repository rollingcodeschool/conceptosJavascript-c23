const carrito = [
  {nombre: "teclado", precio: 250000 },
  {nombre: "mouse", precio: 100000 },
  {nombre: "monitor", precio: 450000 },
];

const total = carrito.reduce((acumulador, producto)=> acumulador + producto.precio, 0)
console.log(carrito)
console.log(total)

