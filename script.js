// main carrossel
const buttonR = document.querySelector('.button-arrow.-right')
const elements = document.querySelector('.timeline-wrapper')
let pixels = 0

buttonR.addEventListener('click', function() {
    pixels = pixels + 100
    elements.style = `transform: translateX(${pixels}px)`;
})

const buttonL = document.querySelector('.button-arrow.-left')
const elementsl = document.querySelector('.timeline-wrapper')
let pixelsl = 0

buttonL.addEventListener('click', function() {
    pixelsl = pixelsl + 100
    elementsl.style = `transform: translateX(-${pixelsl}px)`;
})

