// task no 1
// part 1
var mainContent = document.getElementById("main-content")

// part 2
console.log(mainContent.childNodes)

// part 3
var render = document.getElementsByClassName("render")

for (i = 0; i < render.length; i++) {
    document.write(render[i].innerHTML + "<br>")
}

// part 4
var firstName =  document.getElementById("first-name")
firstName.value = "Muneeb"

// part 5
var lastName = document.getElementById("last-name")
var email = document.getElementById("email")

lastName.value = "Ahmed"
email.value = "abc@gmail.com"


// task no 2
//part 1
var formContent = document.getElementById("form-content")
document.write("node type of element having id form-content is " + formContent.nodeType)

// part 2
var lastName = document.getElementById("last-name")
document.write("<br> node type of element having id last-name is " + lastName.nodeType)
console.log(lastName.childNodes)

// part 3
var mainContent = document.getElementById("main-content")
console.log(mainContent.firstChild)
console.log(mainContent.lastChild)

// part 4
var lastName = document.getElementById("last-name")
console.log(lastName.previousSibling)
console.log(lastName.nextSibling)

// part 5
var email = document.getElementById("email")
console.log(email.parentNode)
console.log(email.nodeType)