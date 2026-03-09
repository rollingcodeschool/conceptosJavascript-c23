// Cree un programa al estilo de un cajero automatico con las siguientes opciones:
// 1- consultar el saldo
// 2- ingresar dinero
// 3- extraer dinero

const opcion = prompt(
  "Ingresa una opción: 1-consultar el saldo - 2-ingresar dinero - 3-extraer dinero ",
);
let saldo = 10000;

// if (opcion === "1") {
//   alert("consultar el saldo");
// } else if (opcion === "2") {
//   alert("Aqui tengo que ingresar el dinero");
// } else if (opcion === "3") {
//   alert("Aqui tengo que extraer el dinero");
// } else {
//   alert("Ingresaste una opción erronea");
// }

switch (opcion) {
  case "saldo":
  case "1":
  case 1:
    //aqui agrego todas las lineas de codigo que necesito si la opción ingresada por el usuario es1
    alert("Tu saldo actual es $" + saldo);
    break;
  case "2":
  case 2:
  case "deposito":
    //aqui agrego todas las lineas de codigo que necesito si la opción ingresada por el usuario es 2
    const deposito = parseFloat(
      prompt("Ingresa el monto que deseas depositar"),
    );
    saldo = saldo + deposito; // saldo += deposito
    alert(`Ingresaste $${deposito}, tu saldo actual es $${saldo}`);
    break;
  case "3":
  case "extraer":
    //aqui agrego todas las lineas de codigo que necesito si la opción ingresada por el usuario es 3
    const extraccion = parseFloat(prompt("Ingresa el monto a extraer"));
    //verificar si el usuario puede extraer el monto solicitado
    if (extraccion <= saldo) {
      saldo = saldo - extraccion;
      alert(`Retiraste $${extraccion}, tu saldo actual es $${saldo}`);
    } else {
      alert("Fondos insuficientes");
    }
    break;
  default:
    //aqui agrego todas las lineas de codigo que necesito si la opción ingresada por el usuario es 3
    alert("Ingresaste una opción erronea");
}

console.log("aqui termino la ejecucion del switch");
