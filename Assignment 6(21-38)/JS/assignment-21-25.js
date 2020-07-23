//task no 1
var firstName = prompt("Enter first name")
var lastName = prompt("Enter last name")
fullName = firstName + " " + lastName
alert("Welcome " + fullName)


//task no 2
var favPhone = prompt("Enter your favorite mobile phone")
document.write("My favorite phone is: " + favPhone)
document.write("<br> String length is: " + favPhone.length)


//task no 3
var word = "Pakistani"
document.write("<br> <br> <br>")
document.write("String: " + word)
document.write("<br> Index of 'n': " + word.indexOf("n"))


//task no 4 
var word1 = "Hello World"
document.write("<br> <br> <br>")
document.write("String: " + word1)
document.write("<br> Last index of 'l': " + word1.lastIndexOf("l"))


//task no 5
var word2 = "Pakistani"
document.write("<br> <br> <br>")
document.write("String: " + word2)
document.write("<br> Character at index 3: " + word2.charAt(3))


//task no 6
alert("Welcome " + firstName.concat(" " + lastName))


//task no 7
var city = "Hyderabad"
var afterReplacement = city.slice(0, city.indexOf("Hyder")) + "Islam" + city.slice(city.indexOf("Hyder") + 5)
document.write("<br> <br> <br>")
document.write("City: " + city)
document.write("<br> After Replacement: " + afterReplacement)


//task no 8
var message = "Ali and Sami are best friends. They play cricket and football together."
document.write("<br> <br> <br>")
document.write("Message: " + message + "<br>")
document.write("After Replacement: " + message.replace("and", "&"))


//tas no 9
var str = "472"
document.write("<br> <br> <br>")
document.write("Value: " + str + "<br> Type: " + typeof(str))
num = parseInt(str)
document.write("<br> Value: " + num + "<br> Type: " + typeof(num))


//task no 10
var userInput = prompt("Enter String")
document.write("<br> <br> <br>")
document.write("User input: " + userInput)
document.write("<br> Upper case: " + userInput.toUpperCase())


//task no 11
var userInput1 = prompt("Enter input")
var titleCase = userInput1.slice(0, 1)
titleCase = titleCase.toUpperCase()
document.write("<br> <br> <br>")
document.write("User Input: " + userInput1)
document.write("<br> Title case: " + titleCase + userInput1.slice(1))


// task no 12
var num = 35.36
var str = num.toString()
document.write("<br> <br> <br>")
document.write("Number: " + num + "<br> Result: ")
for (var i = 0; i < str.length; i++){

    if (str[i] === "."){
        document.write(str.slice(0, i) + str.slice(i + 1))
    }
}


//task no 13
var userName = prompt("Enter username")
var matchFound = 0
for (i = 0; i < userName.length; i++) {
    if (userName.charCodeAt(i) === 33 || userName.charCodeAt(i) === 44 || userName.charCodeAt(i) === 46 || userName.charCodeAt(i) === 64) {
        alert("Please enter a valid username")
        matchFound = 1
        break
    }
}

if (matchFound !== 1) {
    alert("Your username is valid")
}


//task no 14
var A = ["cake", "apple pie", "cookie", "chips", "patties"]
var search = prompt("Enter item to search")
var lowerCase = search.toLowerCase()
var matchFound = 0
for (var i = 0; i < A.length; i++){
    if (lowerCase === A[i]){
        alert(search + "is available at index " + i + " of the bakery")
        matchFound = 1
        break
    }
}
if (matchFound !== 1){
    alert("We are sorry. " + search + " is available in our bakery")
}


//task no 15
var pass = prompt("Enter password")
var matchFound = 0
if (pass.charCodeAt(0) >= 48 && pass.charCodeAt(0) <= 57) {
    alert("Password cannot begin with a number")
}
if (pass.length < 6) {
    alert("password must at least contain 6 characters")
}
for (var i = 0; i < pass.length; i++) {
    if (((pass.charCodeAt(i) >= 65 && pass.charCodeAt(i) <= 90) || (pass.charCodeAt(i) >= 97 && pass.charCodeAt(i) <= 122))) {
        matchFound = 1
        break
    }
}
if (matchFound !== 1) {
    alert("Password must contain alphabets")
}
matchFound = 0
for (i = 0; i < pass.length; i++) {
    if (pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) <= 57) {
        matchFound = 1
        break
    }
}
if (matchFound !== 1) {
    alert("Password must contain numbers")
}


//task no 16
var university = "University of Karachi"
document.write("<br> <br> <br>")
uni = university.split("")
for (var i = 0; i < uni.length; i++){
    document.write(uni[i] + "<br>")
}



//task  no 17
var userInput = "Pakistan"
var lastChar = userInput.slice(userInput.length - 1)
document.write("<br> <br> <br>")
document.write("User Input: " + userInput)
document.write("<br> Last Character: " + lastChar)


//task no 18
var text = "The quick brown fox jumps over the lazy dog"
var matchFound = 0
for (var i = 0; i < text.length; i++){
    if (text.slice(i, i + 3) === "the"){
        matchFound ++
    }
}
document.write("<br> <br> <br>")
document.write("Text:" + text)
document.write("<br> There are " + matchFound + " occurrence(s) of the word 'the'")



