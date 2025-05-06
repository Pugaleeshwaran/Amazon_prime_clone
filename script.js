// --------------searchbar-------------

var search_btn = document.getElementById("search_btn")
var searchbar = document.querySelector(".searchbar")

search_btn.addEventListener("click", function () {
    searchbar.classList.toggle("hide")
})

document.addEventListener("click", function (e) {
    if (!searchbar.contains(e.target) && !search_btn.contains(e.target)) {
        searchbar.classList.add("hide")
    }
})

// -----------------genres----------
var app = document.getElementById("app")
var genres = document.querySelector(".genres")

app.addEventListener("click", function () {
    genres.classList.toggle("hide")
})
document.addEventListener("click", function (e) {
    if (!genres.contains(e.target) && !app.contains(e.target)) {
        genres.classList.add("hide")
    }
})


// --------------------save-------------
var save = document.getElementById("save")
var save_box = document.querySelector(".save_box")

save.addEventListener("click", function () {
    save_box.classList.toggle("hide")
})
document.addEventListener("click", function (e) {
    if (!save_box.contains(event.target) && !save.contains(event.target)) {
        save_box.classList.add("hide")
    }
})

// -----------------profile----------
var profile = document.getElementById("profile")
var profile_box = document.querySelector(".profile_box")

profile.addEventListener("click", function () {
    profile_box.classList.toggle("hide")
})

document.addEventListener("click", function (e) {
    if (!profile_box.contains(e.target) && !profile.contains(e.target)) {
        profile_box.classList.add("hide")
    }
})

//----------------------hide menu-------------------

var menu = document.querySelector(".header_name_hide")
var slide = document.querySelector(".header_hide_menu")

menu.addEventListener("click", function () {
    slide.classList.toggle("hide")
})
document.addEventListener("click", function (e) {
    if (!slide.contains(e.target) && !menu.contains(e.target)) {
        slide.classList.add("hide")
    }
})

// ---------bg video mute-----------

var video1 = document.querySelector("#my_videos1")
var mute1 = document.querySelector("#mute1")
var unmute1 = document.querySelector("#unmute1")
mute1.addEventListener("click", function () {
    console.log("cll")
    video1.muted = !video1.muted
    mute1.style.display = "none"
    unmute1.style.display = "block"

})
unmute1.addEventListener("click", function () {
    video1.muted = !video1.muted
    mute1.style.display = "block"
    unmute1.style.display = "none"
})

var video2 = document.querySelector("#my_videos2")
var mute2 = document.querySelector("#mute2")
var unmute2 = document.querySelector("#unmute2")
mute2.addEventListener("click", function () {
    console.log("cll")
    video2.muted = !video2.muted
    mute2.style.display = "none"
    unmute2.style.display = "block"

})
unmute2.addEventListener("click", function () {
    video2.muted = !video2.muted
    mute2.style.display = "block"
    unmute2.style.display = "none"
})

var video3 = document.querySelector("#my_videos3")
var mute3 = document.querySelector("#mute3")
var unmute3 = document.querySelector("#unmute3")
mute3.addEventListener("click", function () {
    console.log("cll")
    video3.muted = !video3.muted
    mute3.style.display = "none"
    unmute3.style.display = "block"

})
unmute3.addEventListener("click", function () {
    video3.muted = !video3.muted
    mute3.style.display = "block"
    unmute3.style.display = "none"
})



var video4 = document.querySelector("#my_videos4")
var mute4 = document.querySelector("#mute4")
var unmute4 = document.querySelector("#unmute4")
mute4.addEventListener("click", function () {
    console.log("cll")
    video4.muted = !video4.muted
    mute4.style.display = "none"
    unmute4.style.display = "block"

})
unmute4.addEventListener("click", function () {
    video4.muted = !video4.muted
    mute4.style.display = "block"
    unmute4.style.display = "none"
})


// ------------swiper-----------
const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    loop: true,



    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});

// -----------web series scroll------------------
window.addEventListener("scroll",function(){
    var elements=this.document.querySelectorAll(".webseries_section")
})

// ----------------movie scroll----------/

window.addEventListener("scroll",function(){
    var movieele=this.document.querySelectorAll(".movie_container")
})