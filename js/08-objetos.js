// Usuario
//propiedades -> nombre, apellido, password, email, dni, tel, curso
//metodos -> cambiarPassword(nuevoPassword), actualizarEmail(nuevoEmail), InscribirCurso(curso), mostrarDatos()

//celular
//propiedas -> camara, marca, procesador, memoria, precio, estado
//metodos -> actualizarPrecio(nuevoPrecio), publicado(true)

// notacion literal
const pelicula = { 
    //propiedades
    titulo : 'super mario galaxy',
    duracion: '02:30',
    genero: 'Aventura',
    actores: ['actor 1', 'actor 2', 'actor 3','actor 3' ],
    anioEstreno: 2026,
    //metodos
    reproducir: function (){
        console.log('reproduciendo')
    },
    stop: ()=>{
         console.log('se detuvo la peli')
    }
}

console.log(pelicula)