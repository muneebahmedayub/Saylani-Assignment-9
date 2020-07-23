//task no 1
var cityName = prompt("Enter Your City")
if (cityName === "Karachi") {
    alert("Welcome city of lights")
}


//task no 2
var gender = prompt("Enter Your Gender")
if (gender === "male") {
    alert("Good Morning Sir")
}
else if (gender === "female") {
    alert("Good Morning Ma’am")
}
else {
    alert("Wrong Input")
}

//task no 3
var trafficSignal = prompt("Enter traffic Signal")
if (trafficSignal === "Red") {
    alert("Must Stop")
}
else if (trafficSignal === "Yellow") {
    alert("Ready to move")
}
else if (trafficSignal === "Green") {
    alert("Move now")
}
else {
    alert("Wrong Input")
}


//task no 4
var remainingFuel = +prompt("Enter fuel in liters")
if (remainingFuel === 0.25) {
    alert("Please refill the fuel in your car")
}
else {
    alert("Have a safe Journey")
}


//task no 5
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}


//task no 6
var obtainedMarks = +prompt("Enter Obtained Marks")
var totalMarks = +prompt("Enter total Marks")
var percent = (obtainedMarks / totalMarks) * 100 + "%"

document.write("<h1> Marks Sheet </h1>")
document.write("<br> <br> Total Marks : " + totalMarks)
document.write("<br> Marks Obtained : " + obtainedMarks)
document.write("<br> Percentage : " + percent)

if (percent >= 80 && percent <= 100) {
    document.write("<br> Grade : A-1 <br> Remarks : Excellent")
}
else if (percent >= 70) {
    document.write("<br> Grade : A <br> Remarks : Good")
}
else if (percent >= 60) {
    document.write("<br> Grade : B <br> Remarks : You need to improve")
}
else if (percent < 60) {
    document.write("<br> Grade : Fail <br> Remarks : Sorry")
}
else {
    document.write("Wrong Input")
}


//task no 7
var secretNum = 6
var userGuess = +prompt("Enter A number ranging from 1 to 10")
if (userGuess === secretNum){
    alert("Bingo! Correct answer")
}
else if(userGuess === secretNum +1){
    alert("Close enough to the correct answer")
}
else{
    alert("Not Correct")
}


//task no 8
var givenNum = +prompt("Enter a Number")
if(givenNum % 3 === 0){
    alert("Congratulation! It is divisible by 3")
}
else{
    alert("Sorry! It is not divisible by 3")
}


//task no 9
var num = +prompt("Enter a number to check whether it is even or odd")
if (num % 2 === 0 && num === 0){
    alert(num + " is an even number")
}
else {
    alert(num + " is an odd number")
}


//task no 10
var temp = +prompt("Enter Tempareture")
if(temp > 40){
    alert("It is too hot outside")
}
else if(temp > 30){
    alert("The Waether today is normal")
}
else if(temp > 20){
    alert("Today's Weather is cool")
}
else if(temp > 10){
    alert("OMG! Today's weather is so cool")
}


//task no 11
var firstNum = +prompt("Enter first number")
var secondNum = +prompt("Enter second number")
var operation = prompt("Enter Operator")

if (operation === "+"){
    alert(firstNum + secondNum)
}
else if (operation === "-"){
    alert(firstNum - secondNum)
}
else if (operation === "*"){
    alert(firstNum * secondNum)
}
else if (operation === "/"){
    alert(firstNum / secondNum)
}
else if (operation === "%"){
    alert(firstNum % secondNum)
}
else {
    alert("Wrong Operator")
}
