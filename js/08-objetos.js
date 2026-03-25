// Usuario
//propiedades -> nombre, apellido, password, email, dni, tel, curso
//metodos -> cambiarPassword(nuevoPassword), actualizarEmail(nuevoEmail), InscribirCurso(curso), mostrarDatos()

//celular
//propiedas -> camara, marca, procesador, memoria, precio, estado
//metodos -> actualizarPrecio(nuevoPrecio), publicado(true)

// notacion literal
const pelicula = {
  //propiedades clave: valor
  titulo: "super mario galaxy",
  duracion: "02:30",
  genero: "Aventura",
  actores: ["actor 1", "actor 2", "actor 3", "actor 3"],
  anioEstreno: 2026,
  //metodos
  reproducir: function (fghfg) {
    console.log(this)
    const texto = `<p class='lead'>Comenzo la reproducción de la pelicula ${this.titulo} ▶️</p>`;
    console.log("reproduciendo");
    return texto
  },
  stop: () => {
    console.log('Dentro de la funcion stop', this)
    console.log("se detuvo la peli");
  },
};

console.log(pelicula);
const pantalla = document.getElementById("pantalla");
pantalla.innerHTML = `<p>${pelicula}</p>`;

//mostrar las propiedades de un objeto
pantalla.innerHTML += `<p>Objeto pelicula:</p>`;
pantalla.innerHTML += `<p>Titulo: ${pelicula.titulo}</p>`;
pantalla.innerHTML += `<p>Duración: ${pelicula.duracion}</p>`;
pantalla.innerHTML += `<p>Año: ${pelicula["anioEstreno"]}</p>`;

//mostrar todas las propieades del objeto for ... in
console.log(typeof pelicula["anioEstreno"]);
console.log(typeof pelicula["reproducir"]);
console.log(typeof pelicula["stop"]);

let propiedadesPelicula = "<h2>Propiedades del objeto Pelicula: </h2>";
for (const propiedad in pelicula) {
  if (typeof pelicula[propiedad] !== "function") {
    const valor = pelicula[propiedad];
    propiedadesPelicula += `<p>${propiedad}: ${valor}</p>`;
  }
}
pantalla.innerHTML += `<p>Estado: ${pelicula.estado}</p>`;
pantalla.innerHTML += propiedadesPelicula;

// agregar propiedades al objeto
pelicula.estado = true;
pantalla.innerHTML += `<p>Estado fuera del bucle: ${pelicula.estado}</p>`;

//modificar propiedades del objeto
pelicula.estado = false;
pantalla.innerHTML += `<p>Estado fuera del bucle: ${pelicula.estado}</p>`;

//pelicula = true; //esto no puedo hacer si mi objeto es una constante

//eliminar una propiedad del objeto
delete pelicula.estado
pantalla.innerHTML += `<p>¿Estado eliminado?: ${pelicula.estado}</p>`;
console.log(pelicula)

// usando los métodos
pantalla.innerHTML += pelicula.reproducir()

pelicula.stop()
console.log(this)