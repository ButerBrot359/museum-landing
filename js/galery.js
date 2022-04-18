let pictureInnerContainer = document.querySelector('.picture-inner-container');
let images =[`assets/img/galery/galery1.jpg`, `assets/img/galery/galery2.jpg`, `assets/img/galery/galery3.jpg`, `assets/img/galery/galery4.jpg`,
`assets/img/galery/galery5.jpg`,`assets/img/galery/galery6.jpg`,`assets/img/galery/galery7.jpg`,`assets/img/galery/galery8.jpg`,`assets/img/galery/galery9.jpg`,`assets/img/galery/galery10.jpg`,`assets/img/galery/galery11.jpg`,`assets/img/galery/galery12.jpg`,
`assets/img/galery/galery13.jpg`,`assets/img/galery/galery14.jpg`,`assets/img/galery/galery15.jpg`];
let shuf = images.sort((a,b)=> 0.5 - Math.random());
shuf.map((x,i)=> {
    let img = document.createElement('img');
    // console.log(i)
    img.src = x;
    img.alt = `stupid_image`;
    if(i == 0 || i == 10) {
        img.classList.add('first_galery_img')
    } 
    if (i%2 != 0) {
        img.classList.add('slide-in-more')
    }
    img.classList.add('image_galery_animation')
    img.classList.add('slide-in')
    pictureInnerContainer.appendChild(img)

})

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

const sliderImages = document.querySelectorAll('.slide-in')
// console.log(sliderImages)
function checkSlide(e) {
    // console.log(1)
    sliderImages.forEach(sliderImage => {
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height/4;

        // console.log(window.scrollY, "scrollY")
        // console.log(window.innerHeight, "innerHeight")

        // const imageBottom = getPosition(sliderImage) + sliderImage.height;
        const isHalfShown = slideInAt > getPosition(sliderImage);
        // const isNotScrollPast = window.scrollY < imageBottom;
        if (isHalfShown) {
            sliderImage.classList.add('active-image')
        } else {
            sliderImage.classList.remove('active-image')
        }
    })
}

window.addEventListener('scroll', debounce(checkSlide))

function getPosition(element) {
    var yPosition = 0;

    while(element) {
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return yPosition
}
const dropdown = document.getElementById("ticket-selection")

function getDropDown() {
    let image = document.querySelector("img.dropdown")
    image.src = "assets/svg/drop_arrow_up.svg"
}

function removeDropDown() {
    let image = document.querySelector("img.dropdown")
    image.src = "assets/svg/drop_arrow_down.svg"
}