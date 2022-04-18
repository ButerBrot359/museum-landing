// slide-sticky-active

function debounce(func, wait=20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args)
        };
        var callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    };
};

let button = document.querySelector('.pulsingButton')
function removeButton() {
    button.classList.remove('slide-sticky-active')
}
function checkSlide(e) {
    if (window.scrollY > 500) {
        button.classList.add('slide-sticky-active')
    } else {
        button.classList.remove('slide-sticky-active')
    }
    // console.log(window.scrollY)
}

window.addEventListener('scroll', debounce(checkSlide))


//Image Change

const imgLinks = [
    'assets/img/tickets/0.jpg',
    'assets/img/tickets/1.png',
    'assets/img/tickets/2.jpg',
    'assets/img/tickets/3.jpg',
    'assets/img/tickets/4.jpeg',
    'assets/img/tickets/Rectangle.png'
];
const delay = 5000;
let currentIndex = 0;
setInterval(function() {
    document.getElementById('image_for_ticket').src = imgLinks[currentIndex];
    currentIndex++;
    if(currentIndex >= imgLinks.length) {
        currentIndex = 0;
    }
}, delay);