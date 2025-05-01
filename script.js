// --------------searchbar-------------

var search_btn=document.getElementById("search_btn")
var searchbar=document.querySelector(".searchbar")

search_btn.addEventListener("click",function(){
searchbar.classList.toggle("hide")
})

document.addEventListener("click",function(e){
    if(!searchbar.contains(e.target) && !search_btn.contains(e.target)){
        searchbar.classList.add("hide")
    }
})

// -----------------genres----------
var app=document.getElementById("app")
var genres=document.querySelector(".genres")

app.addEventListener("click",function(){
    genres.classList.toggle("hide")
})
document.addEventListener("click",function(e){
    if(!genres.contains(e.target) && !app.contains(e.target)){
        genres.classList.add("hide")
    }
})


// --------------------save-------------
var save=document.getElementById("save")
var save_box=document.querySelector(".save_box")

save.addEventListener("click",function(){
    save_box.classList.toggle("hide")
})
document.addEventListener("click",function(e){
if(!save_box.contains(event.target) && !save.contains(event.target)  ){
    save_box.classList.add("hide")
}
})

// -----------------profile----------
var profile=document.getElementById("profile")
var profile_box=document.querySelector(".profile_box")

profile.addEventListener("click",function(){
    profile_box.classList.toggle("hide")
})

document.addEventListener("click",function(e){
    if(!profile_box.contains(e.target) && !profile.contains(e.target)){
        profile_box.classList.add("hide")
    }
})

//----------------------hide menu-------------------

var menu=document.querySelector(".header_name_hide")
var slide=document.querySelector(".header_hide_menu")

menu.addEventListener("click",function(){
    slide.classList.toggle("hide")
})
document.addEventListener("click",function(e){
    if(!slide.contains(e.target) && !menu.contains(e.target)){
        slide.classList.add("hide")
    }
})

// ---------bg video mute-----------

var video=document.querySelectorAll(".my_videos")
var mute=document.querySelectorAll(".mute")
var unmute=document.querySelectorAll(".unmute")
for(i=0;i<mute.length;i=i++)
    for(j=0;j<unmute.length;j++)
mute[i].addEventListener("click",function(){
    console.log("cll")
    video.muted=!video.muted
    mute.style.display="none"
    unmute.style.display="block"

})
unmute[j].addEventListener("click",function(){
    video.muted=!video.muted
    mute.style.display="block"
    unmute.style.display="none"
})
