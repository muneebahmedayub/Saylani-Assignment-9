// Chapter 43-48 Starts //

// task no 1
// See index.html


// task no 2
// See index.html


//task no 3
const index = document.querySelectorAll(".index")
const del = document.querySelectorAll(".delete-btn")

for (var btn of del) {
    btn.addEventListener("click", function () {
        var btnRow = this.parentNode.parentNode
        btnRow.remove()
        for (i = 0; i < index.length; i++) {
            index[i].innerHTML = index[i].parentNode.rowIndex
        }
    })
}   
for (i = 0; i < index.length; i++) {
    index[i].innerHTML = index[i].parentNode.rowIndex
}




// task no 4
// See index.html


// task no 5
var count = 0
function counterIncrease(){
    var counter = document.getElementById("counter")
    count ++
    counter.innerHTML = count
}
function counterDecrease() {
    var counter = document.getElementById("counter")
    count --
    counter.innerHTML = count
}