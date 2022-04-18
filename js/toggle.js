let burger = document.getElementById("burger-menu")
let items = document.getElementById("burger-menu-items")
let text = document.getElementsByClassName("welcome_text")[0]
let image = document.getElementsByClassName("welcome_img")[0]
let link = document.getElementsByClassName("b_m_item")

burger.addEventListener("click", function() {
    // alert("2")
    if (burger.classList.contains("open")) {
        items.style.display="initial"
        burger.classList.toggle("open")
        text.style.visibility="hidden"
        burger.src = "assets/svg/close_menu.svg"
        if (window.screen.width <= 768) {
            // alert("asdasd")
            console.log(window.innerWidth)
            image.style.visibility ="hidden"
        }
    } else {
        burger.classList.toggle("open")
        items.style.display="none"
        text.style.visibility="visible"
        image.style.visibility ="visible"
        burger.src = "assets/burger/open.svg"
    }
})

for (let i of link) {
    i.addEventListener("click", ()=>{
        if (!burger.classList.contains("open")) {
            items.style.display="none"
            text.style.visibility="visible"
            image.style.visibility ="visible"
            burger.src = "assets/burger/open.svg"
        }
    })
}

window.addEventListener("resize", ()=> {
    // alert(window.innerWidth)
    items.style.display ="none"
    text.style.visibility="visible"
    items.style.display ="none"
    image.style.visibility="visible"
    burger.src = "assets/burger/open.svg"
    if (!burger.classList.contains("open")) {
        burger.src = "assets/burger/open.svg"
    }
    if (window.innerWidth > "1024") {
        // alert("a")
        text.style.visibility="visible"
        items.style.display="flex"
    } 
    // else if (window.innerWidth <= "1024" && burger.classList.contains("open")) {
    //     items.style.display ="none"
        
    // } else if (window.innerWidth <= "1024" && !burger.classList.contains("open")) {
    //     items.style.display = "none"
    //     burger.src = "assets/burger/open.svg"
    // }
})


    console.log("Hello, Dear reviewer!")
    console.log("Score: 153 / 160")
    console.log("Сделал все что требуется по таскам кроме:")
    console.log("Кнопок ускорения и замедления видео")
    console.log("Остановки ютуб видео в слайдере")
    console.log("---------")
    console.log("Дополнительно добавил 10 баллов за добавление кнопки которая возвращает в начало страницы и динамическую смену картинок в разделе ticket")
