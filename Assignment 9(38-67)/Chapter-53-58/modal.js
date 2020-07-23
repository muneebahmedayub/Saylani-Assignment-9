var img = document.querySelectorAll(".img-container img")
var closeBtn = document.querySelector(".modal span")
var modalImg = document.querySelector(".modal img")
var modal = document.querySelector(".modal")

function modalOpen(e) {
    modalImg.src = e.getAttribute("src")
    modal.classList.add("modal-open")
    modal.classList.remove("modal-close")
}

function modalClose() {
    modal.classList.add("modal-close")
    modal.classList.remove("modal-open")
}