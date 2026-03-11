// while, do-while, for

const pantalla = document.getElementById("pantalla");

// let contador = 1;

// while( contador <= 50){
//     //aqui agregar todas las lineas de codigo que quiero repetir 50 veces
//     pantalla.innerHTML += `<p>Fila ${contador}</p>`
//     contador++ //contador = contador + 1
// }

// do {
//   pantalla.innerHTML += `<p>Fila ${contador}</p>`;
//   contador++; //contador = contador + 1
// } while (contador <= 50);


// for(let contador=1; contador <=50; contador++ ){
//   // aqui agrego todas las lineas de codigo que queremos repetir varias veces
//   pantalla.innerHTML += `<p>Fila ${contador}</p>`
// }

// const prueba = confirm('¿Queres realizar esta operación nuevamente?')
// console.log(prueba)

while(confirm('¿Queres realizar esta operación?')){
pantalla.innerHTML += `<p>Fila creada con confirm</p>`
console.log('prueba de confirm')
}