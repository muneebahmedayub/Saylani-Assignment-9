//task no 1
var firstNumber = 3
var secondNumber = 5
document.write("Sum of " + firstNumber + " and " + secondNumber + " is " + (firstNumber + secondNumber))


//task no 2
var firstNumber = 3
var secondNumber = 5
document.write("<br>" + "Difference of " + firstNumber + " and " + secondNumber + " is " + (firstNumber - secondNumber))

var firstNumber = 3
var secondNumber = 5
document.write("<br>" + "Product of " + firstNumber + " and " + secondNumber + " is " + (firstNumber * secondNumber))

var firstNumber = 3
var secondNumber = 5
document.write("<br>" + "Qouteint of " + firstNumber + " and " + secondNumber + " is " + (firstNumber / secondNumber))


//task no 3
var val
document.write("<br>" + "<br>" + "<br>" + "Value after variable declaration is: " + val)
val = 5
document.write("<br>" + "Initial value: " + val)
val++
document.write("<br>" + "Value after increment is: " + val)
val += 7
document.write("<br>" + "Value after addition is: " + val)
val--
document.write("<br>" + "Value after decrement is: " + val)
val = val%3
document.write("<br>" + "The Reminder is: " + val)


//task no 4
var ticketPrice = 600
document.write("<br>" + "<br>" + "<br>" + "Total cost of buying 5 tivkets is" + (ticketPrice * 5))


//task no 5
var num = 4
document.write("<br>" + "<br>" + "<br>" + "Table of 4 is" + "<br>")
for (var i = 1; i <= 10; i++){
    document.write("4 x " + i + "=" + (4 *i) + "<br>")
}


//task no 6
var celsius = 25
var fahrenheit = (celsius * 9/5) + 32
document.write("<br>" + "<br>" + "<br>" + celsius + "oC is" + fahrenheit + "oF" + "<br>")
fahrenheit = 70
celsius = (fahrenheit - 32) * 5/9
document.write(fahrenheit + "oF is " + celsius + "oC")


//task no 7
var price1 = 650
var quantity1 = 3
var price2 = 100
var quantity2 = 7
var shipCharges = 100
var totalCost = (price1 * quantity1) + (price2 * quantity2) + shipCharges
document.write("<br>" + "<br>" + "<br>" + "<h1> Shopping Cart </h1>" + "Total cost of your order is" + totalCost)


//task no 8
var totalMarks = 980
var obtMarks = 804
document.write("<br>" + "<br>" + "<br>" + "<h1> Mark Sheet </h1>" + "<br>" + "Total MArks:" + totalMarks)
document.write("<br>" + "Obtained Marks:" + obtMarks + "<br> Percentage: " + ((obtMarks/totalMarks) * 100) + "%")


//task no 9
var dollar = 10
var riyals = 25
document.write("<br>" + "<br>" + "<br>" + "<h1> Currency in Pakistan </h1>" + "<br> Total Currency in PKR: " + ((dollar * 104.80) + (riyals * 28)))


//task no 10
var val1 = 3
val1 = ((val1 + 3) * 10) / 2
document.write("<br>" + "<br>" + "<br>" + "Value: " + val1)


//task no 11
var currentYear = 2020
var birthYear = 2003
document.write("<br>" + "<br>" + "<br>")
document.write("<h1> Age Calculater </h1>" + "They are either " + (currentYear - birthYear) + " or " + (currentYear - birthYear - 1) + "years old")


//task no 12
var radius = 20
var circumference = 2 * 3.142 * radius
var area = 3.142 * radius ** 2
document.write("<br>" + "<br>" + "<br>")
document.write("<h1> The Geomatrizer </h1>" + "<br>" + "Radius of circle: " + radius)
document.write("<br>" + "Circumference of circle: " + circumference + "<bR>" + "Area of circle: " + area)


//task no 13
var snack = "chocolate chip"
var currentAge = 15
var maxAge = 65
var amount = 3
document.write("<br>" + "<br>" + "<br>")
document.write("<h1>  The Lifetime Supply Calculator </h1>" + "<br>" + "Favorite Snack: " + snack + "<br> Current Age: " + currentAge + "<br> Estimated Maximum Age: " + maxAge)
document.write("<br> Amount of snacks per day: " + amount + "<br>")
document.write("You will need " + ((maxAge - currentAge) * amount) + snack + "to last you until the ripe old age of" + maxAge )



