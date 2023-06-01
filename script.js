// ! Preliminary operations

//  recupero prev e next
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');


// Preparing Index
let currentIndex = 0;

// setting up the first image as active 
images[currentIndex].classList.add('active');

// ! Reasoning logic

// i set next to listen
nextButton.addEventListener('click', function() {

    // I remove the active cklass from the image that corresponds to currentIndex
    images[currentIndex].classList.remove('active');

    // incrementing the current index
    currentIndex++;

    // I add the class active to the corresponding newIndex image
    images[currentIndex].classList.add('active');
});

// setting prev to listen
prevButton.addEventListener('click', function(){
    // I remove the active class from the corresponding currentIndex image
    images[currentIndex].classList.remove('active');

    // decrementig current index
    currentIndex--;

    // I add the active class to the corresponding currentIndex image
    images[currentIndex].classList.add('active');
});