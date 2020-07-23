// Chapter 48-52 Starts //

// task no 1
const loginDetails = document.querySelector(".login-details")
const email = document.getElementById("email")
const password = document.getElementById("password")
function submitLoginDetails() {
    var loginDetailsList = document.createElement("li")
    loginDetails.appendChild(loginDetailsList)
    loginDetailsList.innerHTML = email.value + "<br>" + password.value
}


// task no 2
const para = document.querySelector(".task2")
const seeMore = para.innerHTML.slice(0,)
const seeLess = para.innerHTML.slice(0, 200)
para.innerHTML = seeLess

function readMore() {
    para.innerHTML = seeMore
}


// task no 3
const name = document.querySelector(".form .name")
const clas = document.querySelector(".form .class")
const table = document.querySelector(".table table")

const editName = document.querySelector(".edit-form .name")
const editClas = document.querySelector(".edit-form .class")


function createRow() {
    var row = document.createElement("tr")
    table.appendChild(row)

    var col1 = document.createElement("td")
    row.appendChild(col1)

    var col2 = document.createElement("td")
    row.appendChild(col2)

    col1.innerHTML = name.value
    col2.innerHTML = clas.value

    name.value = ""
    clas.value = ""


    var col3 = document.createElement("td")
    row.appendChild(col3)
    window.del = document.createElement("button")
    col3.appendChild(del)
    del.innerHTML = "Delete"
    del.addEventListener("click", deleteRow())


    var col4 = document.createElement("td")
    row.appendChild(col4)
    window.edit = document.createElement("button")
    col4.appendChild(edit)
    edit.innerHTML = "Edit"
    edit.addEventListener("click", editRow())


    console.log(editName.value)
}

function deleteRow() {
    del.addEventListener("click", function () {
        var btnRow = this.parentNode.parentNode
        btnRow.remove()
    })
}

function editRow() {
    edit.addEventListener("click", function () {
        var row = this.parentNode.parentNode
        editName.value = row.childNodes[0].innerHTML
        editClas.value = row.childNodes[1].innerHTML

        document.getElementById("edit-form").style.display = "flex"
    })
}