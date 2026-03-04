//Tenemos una variable con la cantidad de productos en stock. Si el stock es mayor a 0, mostrar "Disponible"; de lo contrario, mostrar "Sin stock" en color rojo.

const stock = parseInt(prompt("Ingresa el valor del stock"));
const pantalla = document.getElementById("pantalla");
console.log(pantalla);

if (stock > 0) {
  //   alert("Disponible");
  pantalla.innerHTML = "Disponible";
} else {
  // alert("Sin stock")
  pantalla.innerHTML = "<span class ='text-danger'>Sin stock</span>";
}
