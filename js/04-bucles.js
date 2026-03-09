// while, do-while, for

const pantalla = document.getElementById("pantalla");

let contador = 100;

// while( contador <= 50){
//     //aqui agregar todas las lineas de codigo que quiero repetir 50 veces
//     pantalla.innerHTML += `<p>Fila ${contador}</p>`
//     contador++ //contador = contador + 1
// }

do {
  pantalla.innerHTML += `<p>Fila ${contador}</p>`;
  contador++; //contador = contador + 1
} while (contador <= 50);
