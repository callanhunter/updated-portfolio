// making button work

var cmButton = document.querySelector("#cm-button");
var cmModalBackground = document.querySelector("#cm-background");
var cmModal = document.querySelector("#celebrity-matchmaker")

cmButton.addEventListener("click", () => {
    cmModal.classList.add("is-active");
})

cmModalBackground.addEventListener("click", () => {
    cmModal.classList.remove("is-active")
})



var wdButton = document.querySelector("#wd-button");
var wdModalBackground = document.querySelector("#wd-background");
var wdModal = document.querySelector("#weather-dashboard")

wdButton.addEventListener("click", () => {
    cmModal.classList.add("is-active");
})

cmModalBackground.addEventListener("click", () => {
    cmModal.classList.remove("is-active")
})

var pgButton = document.querySelector("#pg-button");
var pgModalBackground = document.querySelector("#pg-background");
var pgModal = document.querySelector("password-generator")

pgButton.addEventListener("click", () => {
    pgModal.classList.add("is-active");
})

pgModalBackground.addEventListener("click", () => {
    pgModal.classList.remove("is-active")
})