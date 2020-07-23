//task no 1
var input = prompt("Enter a character(number or string)")
if (input.charCodeAt() >= 65 && input.charCodeAt() <= 90){
    alert("Uppercase Letter")
}
else if (input.charCodeAt() >= 97 && input.charCodeAt() <= 122){
    alert("Lowercase Letter")
}
else if (input.charCodeAt() >= 48 && input.charCodeAt() <= 57){
    alert("Number")
}


//task no 2
var int1 = +prompt("Enter 1st Number")
var int2 = +prompt("Enter 2nd Number")
if (int1 > int2) {
    alert(int1 + " is greater than " + int2)
}
else if (int2 > int1) {
    alert(int2 + " is greater than " + int1)
}
else {
    alert(int1 + " is equal to " + int2)
}


//tsk no 3
var num = +prompt("Enter a Number")
if (num > 0) {
    alert(num + " is positive")
}
else if (num < 0) {
    alert(num + " is negative")
}
else {
    alert(num + " is zero")
}


//task no 4
var str = prompt("Enter One Character")
if (str.length === 1) {
    if (str === "a" || str === "e" || str === "i" || str === "o" || str === "u") {
        alert("True")
    }
    else {
        alert("False")
    }
}
else {
    alert("Please input one character")
}


//task no 5
var pass = "correct"
var userPass = prompt("Enter Your Password")
if (userPass.length >= 0) {
    if (pass === userPass) {
        alert("Correct! The password you entered matches the original password")
    }
    else {
        alert("Incorrect password")
    }
}
else {
    alert("Please enter your password")
}


//task no 6

// var greeting;
// var hour = 13;
// if(hour<18){
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var greeting
var hour = 13
if (hour < 18){
    greeting = "Good day"
    alert(greeting)
}
else {
    greeting = "Good evening"
    alert(greeting)
}


//tqask no 7
var time = +prompt("Enter time", "Example 1900")
if (time >= 0000 && time < 1200){
    alert("Good morning")
}
else if (time >= 1200 && time < 1700){
    alert("Good afternoon")
} 
else if (time >= 1700 && time < 2100){
    alert("Good evening")
}
else if (time >= 2100 && time <=2359){
    alert("Good night")
}

