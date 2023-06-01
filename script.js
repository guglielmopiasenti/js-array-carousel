// ! Preliminary operations

//  I get prev and next
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// I get the images from the DOM
const images = document.querySelectorAll('#carousel img');

// I get the gallery from the DOM
const gallery = document.querySelector('.gallery');

// preparing the images
const sources = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

// preparing HTML for the images
let imageElements = '';

//for every source i create a tag img
for (let i = 0; i < sources.length; i++) {
    imageElements += `<img src=" ${sources[i]}" alt="Videogame ${i + 1}"> `;
}

// I insert the images into the DOM
gallery.innerHTML = imageElements;


// Preparing Index
let currentIndex = 0;
console.log (currentIndex);

// setting up the first image as active 
images[currentIndex].classList.add('active');
console.log ('immagini');
// ! Reasoning logic

// i set next to listen
nextButton.addEventListener('click', function() {
    // if at last image i stop the function
    if (!currentIndex) return;
    
    // I remove the active class from the image that corresponds to currentIndex
    images[currentIndex].classList.remove('active');

    // incrementing the current index
    currentIndex++;

    // I add the class active to the corresponding newIndex image
    images[currentIndex].classList.add('active');
});

// setting prev to listen
prevButton.addEventListener('click', function(){    
    // if at last image i block the function
    if (!currentIndex) return;

    // I remove the active class from the corresponding currentIndex image
    images[currentIndex].classList.remove('active');

    // decrementig current index
    currentIndex--;

    // I add the active class to the corresponding currentIndex image
    images[currentIndex].classList.add('active');
});