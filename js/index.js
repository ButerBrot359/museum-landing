
let videoPlayer = document.querySelector('.swiper-slide.video-slide.swiper-slide-active');
let video = videoPlayer.querySelector('.main_video');
let playBtn = videoPlayer.querySelector('.play-button');
let volume = videoPlayer.querySelector('.slider');
let slider = videoPlayer.querySelector(".myRange");
let progressBar = videoPlayer.querySelector('.video-progress-filled')
let progress = videoPlayer.querySelector('.video-progress');
let mute = videoPlayer.querySelector('.sound-off-button');
let fullScreen = videoPlayer.querySelector('.fullscreen-button');

let bigButton = videoPlayer.querySelector('.big_button_play');

let arrows = document.querySelectorAll('.scroll_wrap_arrows')
let bullets = document.querySelectorAll(".scroll_wrap_circles_pagination span")

setNewVideo()
//stop keydone events 
let buy_btn_push = document.querySelector(".buy_btn")
buy_btn_push.addEventListener('click', function() {
    window.removeEventListener('keydown', a)
})

let popup_area_close = document.querySelector(".popup__area")
popup_area_close.addEventListener("click", function(){
    window.addEventListener('keydown', a)
})
let popup_link_close = document.querySelector(".popup__close")
popup_link_close.addEventListener('click', function() {
    window.addEventListener('keydown', a)
})

function remover(arr) {
    arr.forEach(elem=>{
        // console.log(elem)
        elem.replaceWith(elem.cloneNode(true));
    })
}
function removeEventListeners() {
    // console.log(1)
    let playButtons = document.querySelectorAll(".swiper-slide.video-slide .player-controls .play-button")
    let volumes = document.querySelectorAll(".swiper-slide.video-slide .player-controls .play-button .slider")
    let sliders = document.querySelectorAll(".swiper-slide.video-slide .player-controls .play-button .myRange")
    let videos = document.querySelectorAll(".swiper-slide.video-slide .player-controls .play-button .main_video")
    let progresses = document.querySelectorAll(".swiper-slide.video-slide .player-controls .play-button .video-progress")
    let mutes = document.querySelectorAll(".swiper-slide.video-slide .player-controls .play-button .sound-off-button")
    let fullScreens = document.querySelectorAll(".swiper-slide.video-slide .player-controls .play-button .fullscreen-button")
    let big_buttons = document.querySelectorAll(".swiper-slide.video-slide .big_button_play")
    remover(big_buttons)
    remover(mutes)
    remover(fullScreens)
    remover(progresses)
    remover(videos)
    remover(volumes)
    remover(sliders)
    remover(playButtons)

}
function stopAllVideo() {
    let videos = document.querySelectorAll('.swiper-slide.video-slide .main_video');
    let playButtons = document.querySelectorAll(".swiper-slide.video-slide .player-controls .play-button")
    let big_buttons = document.querySelectorAll(".swiper-slide.video-slide .big_button_play")
    big_buttons.forEach(b=>{
        // console.log(b)
        b.classList.remove('hide')
    })
    playButtons.forEach(btn=>{
        btn.classList.remove('play')
        btn.classList.remove('pause')
    })
    videos.forEach(a=>{
        if (a.play) {
            video.pause()
        }
        
    })
    
}
function setNewVideo() {
    

    videoPlayer = document.querySelector('.swiper-slide.video-slide.swiper-slide-active');
    video = videoPlayer.querySelector('.main_video');
    playBtn = videoPlayer.querySelector('.play-button');
    volume = videoPlayer.querySelector('.slider');
    slider = videoPlayer.querySelector(".myRange");
    progressBar = videoPlayer.querySelector('.video-progress-filled')
    progress = videoPlayer.querySelector('.video-progress');
    mute = videoPlayer.querySelector('.sound-off-button');
    fullScreen = videoPlayer.querySelector('.fullscreen-button');
    bigButton = videoPlayer.querySelector('.big_button_play');
    
    // let a = window.addEventListener('keypress')
    video.addEventListener("keyup", (e)=>{
        if(e.keyCode == 32){
            console.log("asdasdawdqwqw")
        }
    })

    video.addEventListener('ended', ()=> {
        playBtn.classList.add('play')
        playBtn.classList.remove('pause')
        bigButton.classList.remove('hide')
    })
    video.addEventListener('click', ()=> {
        if(video.paused) {
            video.play()
            playBtn.classList.add('pause')
            playBtn.classList.remove('play')
            bigButton.classList.add('hide')
        } else {
            video.pause()
            playBtn.classList.add('play')
            playBtn.classList.remove('pause')
            bigButton.classList.remove('hide')
    
        }
    })
    bigButton.addEventListener('click', ()=> {
        video.play()
        playBtn.classList.add('pause')
        playBtn.classList.remove('play')
        bigButton.classList.add('hide')
    })
    fullScreen.addEventListener('click', ()=> {
        video.requestFullscreen()
    })

    mute.addEventListener('click', function() {
        video.muted = !video.muted;
        mute.classList.toggle('muted')
        if(video.muted) {
            // mute.className = 'muted'
            mute.classList.add('muted')
            mute.classList.remove('unmuted')
        } else {
            // mute.className = 'unmuted'
            mute.classList.add('unmuted')
            mute.classList.remove('muted')
    
        }
    })
    
    progress.addEventListener('click', (e) => {
        const progressTime = (e.offsetX / progress.offsetWidth) * video.duration;
        video.currentTime = progressTime
    })

    video.addEventListener('timeupdate', ()=> {
        const percentage = (video.currentTime / video.duration) * 100;
        progressBar.style.width = `${percentage}%`
    })

    slider.addEventListener("mousemove", function() {
        console.log(11)
        let x = slider.value;
        var color =`linear-gradient(90deg, rgb(113, 7, 7) ${x*100}%, rgb(196, 196, 196) ${x*100}%)`;
        slider.style.background = color;
    })

    volume.addEventListener('mousemove', (e)=>{
        video.volume = e.target.value
        if (video.volume == 0) {
            mute.classList.add('muted')
            mute.classList.remove('unmuted')
        } else {
            mute.classList.add('unmuted')
            mute.classList.remove('muted')
        }
    })

    playBtn.addEventListener('click', () => {
       
        if(video.paused) {
            video.play()
            playBtn.classList.add('pause')
            playBtn.classList.remove('play')
            bigButton.classList.add('hide')
        } else {
            video.pause()
            playBtn.classList.add('play')
            playBtn.classList.remove('pause')
            bigButton.classList.remove('hide')
    
        }
    })

    video.addEventListener('timeupdate', ()=> {
        const percentage = (video.currentTime / video.duration) * 100;
        progressBar.style.width = `${percentage}%`
    })
}

arrows.forEach(i=> {
    i.addEventListener('click', function(){
        removeEventListeners()
        stopAllVideo()
        setNewVideo()
    })
    i.onkeydown = function(e) { 
        return !(e.keyCode == 32);
    };
})

let inFullscreen = false 
let a = function(e) {
    let videoPlayer = document.querySelector('.swiper-slide.video-slide.swiper-slide-active');
    let video = videoPlayer.querySelector('.main_video');
    let playBtn = videoPlayer.querySelector('.play-button');
    let bigButton = videoPlayer.querySelector('.big_button_play');
    if (e.keyCode == 32) {
        if(video.paused) {
            video.play()
            playBtn.classList.add('pause')
            playBtn.classList.remove('play')
            bigButton.classList.add('hide')
        } else {
            video.pause()
            playBtn.classList.add('play')
            playBtn.classList.remove('pause')
            bigButton.classList.remove('hide')
    
        }
    } else if (e.keyCode == 70) {
        video.requestFullscreen()
    } else if (e.keyCode == 77) {
        video.muted = !video.muted;
        mute.classList.toggle('muted')
        if(video.muted) {
            // mute.className = 'muted'
            mute.classList.add('muted')
            mute.classList.remove('unmuted')
        } else {
            // mute.className = 'unmuted'
            mute.classList.add('unmuted')
            mute.classList.remove('muted')
    
        }
    }
}
window.addEventListener('keydown', a)

window.onkeydown = function(e) { 
    return !(e.keyCode == 32);
};
bullets.forEach(but=> {
    
    but.addEventListener('mouseup', function(){
        removeEventListeners()
        stopAllVideo()
        setTimeout(setNewVideo, 1)
    })
    
})
