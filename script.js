// Seleccionamos todos los elementos con la clase '.Bands-item' (las bandas)
const bands = document.querySelectorAll('.Bands-item');
// Seleccionamos el contenedor donde se va a cambiar el fondo ('.Background-container')
const background = document.querySelector('.Background-container');

// Array con los nombres de las imágenes correspondientes a cada banda
const bandImages = [
    'arctic-monkeys.jpg',
    'bon-iver.jpg',
    '21-pilots.jpg',
    'linkin-park.jpg',
    'dua-lipa.jpg',
    'billie-eilish.jpg',
    'john-mayer.jpg',
    'tame-impala.jpg',
    'coldplay.jpg',
    'pink-floyd.jpg',
];

// Recorremos todas las bandas
bands.forEach((band, index) =>{
    // Agregamos un evento 'mouseover' a cada banda
    band.addEventListener('mouseover', () => {
        
        // Cambiar la imagen de fondo del contenedor '.Background-container'
        // Usamos el índice de la banda para seleccionar la imagen correspondiente
        background.style.backgroundImage = `url('./img/${bandImages[index]}')`;
        console.log(`url('./img/${bandImages[index]}')`); 

        // Para cada banda:
        bands.forEach(item => {
            // Si el item actual es la banda sobre la que estamos pasando el mouse
            // Añadimos la clase 'active' solo a esa banda
            item.classList.toggle('active', item === band);
            
            // Si el item no es la banda actual, añadimos la clase 'inactive' a los demás
            item.classList.toggle('inactive', item !== band);
        });
    });
});


