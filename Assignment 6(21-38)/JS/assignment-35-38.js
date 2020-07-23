//task no 1
function time(){
    var currentDate = new Date()
    document.write(currentDate)
}
time()


//task no 2
function greeting(){
    var firstName = prompt("Enter your first name")
    var lastName = prompt("Enter your last name")
    alert("Welcome " + firstName + " " + lastName)
}
greeting()


//task no 3
function addition() {
    var a = +prompt("Enter first number")
    var b = +prompt("Enter second number")
    c = a + b
    alert(c)
}
addition()


//task no 4
function calc(num1, num2, operator){
    if (operator === " +"){
        return num1 + num2
    }
    else if (operator === "-"){
        return num1 - num2
    }
    else if (operator === " *"){
        return num1 * num2
    }
    else if (operator === "/"){
        return num1 / num2
    }
    else {
        return "Wrong Operator"
    }
}
alert(calc(+prompt("Enter first num"), +prompt("Enter second num"), prompt("Enter operator")))


//task no 5
function square(num){
    return num ** 2
}
alert(square(+prompt("Enter number")))


//task no 6
function factorial(num) {
    if (num <= 1) {
        return 1
    }
    else {
        return num * factorial(num - 1)
    }
}
alert(factorial(+prompt("Enter number")))


//task no 7
function counting(startNum, endNum){
    for (i = startNum; i <= endNum; i++){
        document.write(i + " ")
    }
}
counting(+prompt("Enetr starting value"), +prompt("Enter ending value"))


//task no 8
function square(num){
    return num * num
}
function squareRoot(num1){
    return Math.sqrt(num1)
}
function hypotenuse(base, perpendicular){
    var hypotenuse
    hypotenuse = square(base) + square(perpendicular)
    return squareRoot(hypotenuse)
}
alert(hypotenuse(+prompt("Enter base"), +prompt("Enter perpendicular")))


//task no 9
function area(width, height){
    return width * height
}
// i.
alert(area(4, 5))
// ii.
var x = 4
var y = 5
alert(area(x, y))


//task no 10
function palindrom(userInput){
    var toLowerCase = userInput.toLowerCase()
    var arr = toLowerCase.split("")
    var reverseArr = arr.reverse()
    var str = reverseArr.toString()
    str = str.replace(/,/g, "")
    if (str === toLowerCase){
        return "Its is palondrom"
    }
    else {
        return "It is not palindrom"
    }
}
alert(palindrom(prompt("Enter a word to check if it is Palindrom or not")))


//task no 11
function titleCase(userInput){
    var arr = userInput.split(" ")
    var arr1 = []
    for (i = 0; i < arr.length; i++){
        arr1[i] = arr[i][0].toUpperCase()
        arr1[i] = arr1[i] + arr[i].slice(1)
    }
    var str = arr1.toString()
    str = str.replace(/,/g, " ")
    return str
}

alert(titleCase("the quick brown fox"))


//task no 12
function findTheLongest(userInput){
    arr = userInput.split(" ")
    var longest = 0
    var word = ""
    for (i = 0; i < arr.length; i++){
        if (longest < arr[i].length){
            longest = arr[i].length
            word = arr[i]
        }
    }
    return word
}
alert(findTheLongest("Web Development Tutorial"))


//task no 13
function occurence(string, letter){
    var count = 0
    var str = string.toLowerCase()
    for (i = 0; i < str.length; i++){
        if (letter === str[i]){
            count ++
        }
    }
    return count
}
console.log(occurence("JSResourceS.com", "o"))


//task no 14
var pie = Math.PI
function calcCircumference(radius){
    return 2 * pie * radius
}
function calcArea(radius){
    return pie * radius ** 2
}
document.write("The circumference is " + calcCircumference(5).toFixed(2))
document.write("<br> The area is " + calcArea(5).toFixed(2))