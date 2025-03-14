// console.log(tempData);
// import tempData from './tempData.js';

function crearTarjetaMovie(movie) {
    const { title, year, director, duration, genre, rate, poster } = movie;

    //Crear elementos HTML:
    //crear tarjeta = div
    const tarjetaMovie = document.createElement('div');
    //Asignar el valor correspondiente a la propiedad del elemento
    // tarjetaMovie.classList.add('tarjetaMovie');
    tarjetaMovie.classList.add('card', 'text-light', 'bg-dark', 'shadow', 'p-3', 'mb-4');
    tarjetaMovie.style.width = '18rem';
    
    //title = h3
    const titulo = document.createElement('h3')
    //Asignar valor correspondiente a las propiedades del elemento 
    titulo.textContent = title;

    //year = 
    const año = document.createElement('p');
    //Asignar valor correspondiente a las propiedades del elemento 
    año.textContent = `Año: ${year}`

    //director = 
    const directorMovie = document.createElement('p');
    //Asignar valor correspondiente a las propiedades del elemento 
    directorMovie.textContent = `Director: ${director}`

    //duration =
    const duracion = document.createElement('p');
    //Asignar valor correspondiente a las propiedades del elemento 
    duracion.textContent = `Duración: ${duration}`

    //genre =  
    const genero = document.createElement('p');
    //Asignar valor correspondiente a las propiedades del elemento 
    genero.textContent = `Genero: ${genre.join(', ')}`

    //rate =
    const puntuacion = document.createElement('p');
    //Asignar valor correspondiente a las propiedades del elemento 
    puntuacion.textContent = `Puntuación: ⭐ ${rate}`

    //poster =
    const imagenMovie = document.createElement('img');
    //Asignar valor correspondiente a las propiedades del elemento 
    imagenMovie.classList.add('card-img-top');
    imagenMovie.src = poster
    imagenMovie.alt = `Poster de ${title}`;

    //Appendear los elementos html a la tarjeta 
    tarjetaMovie.appendChild(titulo)
    tarjetaMovie.appendChild(imagenMovie)
    tarjetaMovie.appendChild(año)
    tarjetaMovie.appendChild(directorMovie)
    tarjetaMovie.appendChild(duracion)
    tarjetaMovie.appendChild(genero)
    tarjetaMovie.appendChild(puntuacion)

    return tarjetaMovie
}

//funcion para renderizar todas las peliculas
function obtenerYRenderizarMovies() {
    const contenedor = document.getElementById('container-pelis')
    //Vaciar contenedor y evitar duplicados 
    contenedor.innerHTML = '';

    $.get(`https://students-api.up.railway.app/movies`,(data,status)=>{

        data.forEach((movie) =>{
            const tarjeta = crearTarjetaMovie(movie);
            const col = document.createElement('div');
            col.classList.add('col-md-4', 'd-flex', 'justify-content-center');
            col.appendChild(tarjeta);
            contenedor.appendChild(col);
        })
    })
}

//Ejecutar la función cuando la página cargue
document.addEventListener('DOMContentLoaded', obtenerYRenderizarMovies);