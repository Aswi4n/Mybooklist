var popupoverlayer = document.querySelector(".popuplay")
var popupbox = document.querySelector(".popup")
var addpopbutton = document.getElementById("addpop")

addpopbutton.addEventListener("click",function(){
    popupoverlayer.style.display = "block"
    popupbox.style.display = "block"
})
var cancelbutton=document.getElementById("cancelbt")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlayer.style.display = "none"
    popupbox.style.display = "none"
})
var container=document.querySelector(".bookcontainer")
var addbutton=document.getElementById("addbt")
var booktitle=document.getElementById("bookip")
var authorname=document.getElementById("authorip")
var discription=document.getElementById("disip")

addbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","three")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h3>${authorname.value}</h3>
    <p>${discription.value}</p>
   <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlayer.style.display = "none"
    popupbox.style.display = "none"
})
function deletebook(event){
    event.target.parentElement.remove()

}