console.log(tempData);
import tempData from './tempData.js';

const tempData = tempData;

function crearTarjetaMovie(tempData) {
    const {title, year, director, duration, genre, rate, poster} = tempData;
    
    //Crear elementos HTML:
    //crear tarjeta = div
    const tarjetaMovie = document.createElement('div');
    //Asignar el valor correspondiente a la propiedad del elemento
    tarjetaMovie.classList.add('tarjetaMovie');

    //title = h3
    const titulo = document.createElement('h3')
    titulo.textContent = title;

    //year = 
    const año = document.createElement('p');
    año.textContent = year

    //director = 
    const directorMovie = document.createElement('p');
    directorMovie.textContent = director
   
    //duration =
    const duracion = document.createElement('p');
    duracion.textContent = duration

    //genre =  
    const genero = document.createElement('p');
    genero.textContent = genre

    //rate =
    const puntuacion = document.createElement('p');
    puntuacion.textContent = rate
    
    //poster =
    const imagenMovie = document.createElement('img');
    imagenMovie.src = poster
    imagenMovie.alt = title
    
}