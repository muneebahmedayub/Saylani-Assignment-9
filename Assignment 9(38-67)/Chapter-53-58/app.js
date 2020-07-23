const para = document.querySelector("p")
const zoomInBtn = document.querySelector(".zoom-in")
const zoomOutBtn = document.querySelector(".zoom-out")

function zoomIn () {
    fontSize = parseInt(getComputedStyle(para).fontSize)
    fontSize += 10
    para.style.fontSize = fontSize + "px"
}

function zoomOut () {
    fontSize = parseInt(getComputedStyle(para).fontSize)
    fontSize -= 10
    para.style.fontSize = fontSize + "px"
}