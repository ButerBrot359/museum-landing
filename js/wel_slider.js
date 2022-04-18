
new Swiper('.welcome_img_wrapper', {
    navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left'
    },
    pagination: {
        el: '.scroll_block',
        clickable: true,
    },
    loop: true,
    speed: 500,
})
let bullet = document.getElementsByClassName("swiper-pagination-bullet")
let number = document.getElementsByClassName("number_of_slide")[0]
let events = ['touchend', 'mousemove', 'click']
function getActiveBulletNumber() {
    for (let i in bullet) {
        if (bullet[i].classList.contains("swiper-pagination-bullet-active")) {
            return Number(i) + 1
        }
    }
}
events.forEach(a=>{
    window.addEventListener(a, function(){
        number.innerHTML = '0' + getActiveBulletNumber()
    })
})
new Swiper(".mini-video", {
    navigation: {
        nextEl: '.scroll_wrap_arrows.wrap_right',
        prevEl: '.scroll_wrap_arrows.wrap_left'
    },
    pagination: {
        el: '.scroll_wrap_circles_pagination',
        clickable: true,
    },
    simulateTouch: false,
    loop: true,
    slideToClickedSlide: true,
    breakpoints: {
        769: {
            slidesPerView: 3,
            simulateTouch: false,
        },
        320: {
            slidesPerView: 2,
            simulateTouch: false,
        }
    },
    
    spaceBetween: 40,
})

new Swiper('.video-player-div', {
    navigation: {
        nextEl: '.scroll_wrap_arrows.wrap_right',
        prevEl: '.scroll_wrap_arrows.wrap_left'
    },
    pagination: {
        el: '.scroll_wrap_circles_pagination',
        clickable: true,
    },
    loop:true,
    simulateTouch: false,
    noSwiping: true,
    followFinger: false,
})

