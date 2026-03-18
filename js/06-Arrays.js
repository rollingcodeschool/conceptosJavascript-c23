function mostrarPeliculas(notas) {
  pantalla.innerHTML += `<h2>Lista de peliculas - elementos: ${peliculas.length}</h2>`;
  pantalla.innerHTML += `<p>Notas: ${notas}</p>`;

  let listaPeliculas = "<ul>";
  for (let i = 0; i < peliculas.length; i++) {
    listaPeliculas += `<li>${i} - ${peliculas[i]} </li>`;
  }
  listaPeliculas += "</ul>";

  pantalla.innerHTML += listaPeliculas;
}

// como declarar un array vacio
const colores = [];

// declarar un array con datos
const peliculas = [
  "star war: Episodio 1",
  "star war: Episodio 2",
  "F1",
  "El caballero de la noche",
  1,
  2026,
  true,
];

console.log(typeof colores);
//cuantos elementos tiene un array
const pantalla = document.getElementById("pantalla");
pantalla.innerHTML = `<p>El array de peliculas tiene ${peliculas.length} elementos</p>`;
console.log(peliculas);
console.log(colores);
// esta es la forma en la que no mostramos los elemenos de un array
pantalla.innerHTML += peliculas;

//mostrar los elementos del array en forma de lista
mostrarPeliculas('Arreglo original');
// Formas de acceder a un elemento del array
pantalla.innerHTML += `<p>Elemento 3 del array de peliculas: ${peliculas[2]}</p>`;

// Operaciones normales en un array
//Agregar elementos en un array

peliculas.unshift("Jurassic park", "Jurassic park II");
mostrarPeliculas('Agregamos dos elementos al principio del array');

peliculas.push('Interestelar')
mostrarPeliculas('Agregamos un elemento al final del array');

peliculas.splice(6,0, 'la vida es bella')
mostrarPeliculas('Agregamos un elemento el la posicion 6 del array');

//modificar elementos del array
peliculas[7] = 'black mirror'
mostrarPeliculas('Modificamos un elemento del array');

// Eliminar elementos del array
peliculas.shift()
mostrarPeliculas('Eliminamos el primer elemento del array');

peliculas.pop()
mostrarPeliculas('Eliminamos el ultimo elemento del array');

// peliculas.splice(7) // borra todos los elementos desde la posicion 7 inclusive
peliculas.splice(7,1)
mostrarPeliculas('Eliminamos un elemento del medio del array');

//filtrar las peliculas de star wars
console.log(peliculas[1].includes('star'))
console.log(peliculas[1].includes('STAR WAR'))
console.log(peliculas[1].includes('star war'))

// const sagaStarWar = peliculas.filter( pelicula => pelicula === 'Jurassic park II' )
console.log(peliculas[0].includes('star') )
// ! todo: verificar sintaxis del filtro
// const sagaStarWar = peliculas.filter( pelicula => pelicula.includes('star') )

const aniosEstreno = [2010, 2012 , 2010, 2020, 2010, 2015]
const anioFiltrado = aniosEstreno.filter((item)=> item >= 2012 )

console.log(anioFiltrado)

// quiero buscar un elemento particular en todo el array
// const peliculaBuscada = peliculas.find((peli)=> peli === 'Jurassic park II' )
const peliculaBuscada = peliculas.find((peli)=> peli.toLowerCase().includes('jurassic') )
const peliculaBuscada2 = peliculas.find((peli)=> peli === 'Interestelar' )
console.log('Ejemplo de find jurassic park:', peliculaBuscada)
console.log('Ejemplo de find interestelar:', peliculaBuscada2)

// como se en que posicion del array esta un elemento buscado
const indicePeliBuscada =  peliculas.findIndex((peli)=> peli.toLowerCase().includes('jurassic') )
const indicePeliBuscada2 =  peliculas.findIndex((peli)=> peli === 'Interestelar' )
console.log('Ejemplo de findIndex jurassic park:', indicePeliBuscada)
console.log('Ejemplo de findIndex interestelar:', indicePeliBuscada2)