//task no 1
var num = parseFloat(prompt("Enter positive number"))
document.write("number: " + num)
document.write("<br> round off value: " + Math.round(num))
document.write("<br> floor value: " + Math.floor(num))
document.write("<br> ceil value: " + Math.ceil(num))


//task no 2
var num1 = parseFloat(prompt("Enter negative floating number"))
document.write("<br> <br> <br>")
document.write("number: " + num1)
document.write("<br> round off value: " + Math.round(num1))
document.write("<br> floor value: " + Math.floor(num1))
document.write("<br> ceil value: " + Math.ceil(num1))


//task no 3
var absoluteNum = +prompt("Enter number")
document.write("<br> <br> <br>")
document.write("The absolute value of " + absoluteNum + " is " + Math.abs(absoluteNum))


//task no 4
var randomNum = Math.random() * 6
document.write("<br> <br> <br>")
document.write("random dice value is: "+ Math.ceil(randomNum))


//task no 5
var toss = Math.random() * 2
toss = Math.ceil(toss)
document.write("<br> <br> <br>")
if (toss === 1){
    document.write("random coin value is: Tails")
}
else{
    document.write("random coin value is : Heads")
}


//task no 6
var randomNum = Math.random() * 100
randomNum = Math.ceil(randomNum)
document.write("<br> <br> <br>")
document.write("random number between 1 and 100: " + randomNum)


//task no 7
var weight = parseFloat(prompt("Enter your weight"))
document.write("<br> <br> <br>")
document.write("The weight of user is " + weight + " kilograms")



//task no 8
var randomNum = Math.random() * 10
randomNum = Math.ceil(randomNum)
var userInput = +prompt("Enter random secret number")
if (userInput === randomNum){
    alert("Congratulations! You have entered same number")
}
else {
    alert("Try again")
}

