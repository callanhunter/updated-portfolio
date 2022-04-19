// making button work

var cmButton = document.querySelector("#signup");
var cmModalBackground = document.querySelector(".modal-background");
var cmModal = document.querySelector(".modal")

cmButton.addEventListener("click", () => {
    cmModal.classList.add("is-active");
})

cmModalBackground.addEventListener("click", () => {
    cmModal.classList.remove("is-active")
})