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