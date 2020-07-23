//task no 1
var currentDate = new Date()
document.write(currentDate)


//task no 2
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
var currentMonth = months[currentDate.getMonth()]
document.write("<br> <br> <br>")
document.write("Current Month: " + currentMonth)


//task no 3
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var currentDay = days[currentDate.getDay()]
document.write("<br> <br> <br>")
document.write("Today is " + currentDay.slice(0, 3))


//task no 4
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var currentDay = days[currentDate.getDay()]
if (currentDay === "Saturaday" || currentDay === "Sunday"){
    document.write("It's Fun day")
}


//task no 5
var CurrentDate = currentDate.getDate()
document.write("<br> <br> <br>")
if (CurrentDate >= 1 && CurrentDate <=15){
    document.write("First fifteen days of the month")
}
else {
    document.write("Last days od the month")
}


//task no 6
document.write("<br> <br> <br>")
document.write("Current Date: " + currentDate)
document.write("<br> Elapsed milliseconds since January 1, 1970: " + currentDate.getTime())
document.write("<br> Elapsed minutes since January 1, 1970: " + currentDate.getTime() * 100 * 60)



//task no 7
var currentHours = currentDate.getHours()
document.write("<br> <br> <br>")
if (currentHours >= 0 && currentHours < 12){
    document.write("It's AM")
}
else {
    document.write("It's PM")
}


//task no 8
var setDate = new Date("31 December, 2020")
document.write("<br> <br> <br>")
document.write("Later Date: " + setDate)


//task no 9
var setDate1 = new Date("25 April, 2020")
var timePassed = currentDate.getTime() - setDate1.getTime()
var timePassedDays = timePassed / 1000 / 60 / 60 / 24
document.write("<br> <br> <br>")
document.write(Math.floor(timePassedDays) + " days have passed since 1st Ramadan, 2020")


//task no 10
var setDate2 = new Date("1 January, 2015")
document.write("<br> <br> <br>")
document.write("On reference date " + currentDate + "<br>")
document.write(Math.floor(((currentDate.getTime() - setDate2.getTime()) / 1000)) + " seconds had passed since begining of 2015")


//task no 11
var dt = new Date()
dt.setHours( dt.getHours() - 1)
document.write("<br> <br> <br>")
document.write("Current Date: " + currentDate)
document.write("<br>1 hour ago: " + dt)


//task no 12
var d = new Date()
d.setFullYear(d.getFullYear() - 100)
document.write("<br> <br> <br>")
document.write("current daet: " + currentDate)
document.write("<br> 100 years back: " + d)


//task no 13
var birthDate = new Date(prompt("Enter your DOB: (example: 1 June, 2020)"))
var timePassed = currentDate.getTime() - birthDate.getTime()
var timePassedYears = timePassed / 1000 / 60 / 60 / 24 / 30 / 12
document.write("<br> <br> <br>")
document.write("Your age is " + Math.floor(timePassedYears))
document.write("<br> Your birth year is " + birthDate.getFullYear())


//task no 14
var customerName = prompt("Enter your name:")
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
var currentMonth = months[currentDate.getMonth()]
var noOfUnits = 410
var chargesPerUnit = 16
var netAmount = noOfUnits * chargesPerUnit
var latePayment = 350
var grossAmount = netAmount + latePayment
document.write("<br> <br> <br>")
document.write("<h1> K-Electric Bill </h1>")
document.write("Customer Name: <b>" + customerName + "</b>")
document.write("<br> Month: <b>" + currentMonth + "</b>")
document.write("<br> Number of units: <b>" + noOfUnits + "</b>")
document.write("<br> Charges per unit: <b>" + chargesPerUnit + "</b>")
document.write("<br> <br> Net Amount Payable (within Due Date):  <b>" + netAmount + "</b>")
document.write("<br> Late payment surcharge: <b>" + latePayment + "</b>")
document.write("<br> Gross Amount Payable (after Due Date): <b>" + grossAmount + "</b>")