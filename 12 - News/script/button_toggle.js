let carousel_1 = document.getElementById('carousel-item-1')
let carousel_2 = document.getElementById('carousel-item-2')
let carousel_3 = document.getElementById('carousel-item-3')
let carousel_4 = document.getElementById('carousel-item-4')

function choose(el) {
    carousel_1.classList.remove('clicked')
    carousel_2.classList.remove('clicked')
    carousel_3.classList.remove('clicked')
    carousel_4.classList.remove('clicked')

    el.classList.add('clicked')
}