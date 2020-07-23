//task no 1
var a = 10
document.write("Result: <br> The value of a is" + a + "<br><br> The value of ++a is: " + ++a + "<br>Now the value of a is: " + a)
document.write("<br><br> The value of a++ is: " + a++ + "<br>Now the value of a is: " + a + "<br><br>The value of --a is: " + --a)
document.write("<br>Now the value of a is: " + a + "<br><br>The value of a-- is: " + a-- + "<br>Now the value of a is: " + a)


//task no 2
var a = 2
var b = 1
document.write("<br> <br> <br>")
document.write("--a; <br> a is 1 <br> --a - b-- <br> value of b is 1 than b becomes 0 <br> --a - b-- + ++b <br> b becomes 1 than it prints b <br> --a - --b + ++b + b-- <br> first it prints b than its value become 0")
document.write("<br> Result: " + (--a - --b + ++b + b--))


//task no 3
var name = prompt("Enter your name: ")
document.write("<br> <br> <br>")
document.write("Welcome! " + name)


//task no 5
var num = +prompt("Enter number: ")
if (num == 0){
    num = 5
}
document.write("<br> <br> <br>")
for (var i = 1; i <= 10; i++){
    document.write("<br>" + num + " x " + i + " = " + (num * i))
}


//task no 6
var totalMarks = 100

var firstSubject = prompt("Enter 1st Subject")
var firstSubjectMarks = +prompt("Enter Marks")

var secondSubject = prompt("Enter 2nd Subject")
var secondSubjectMarks = +prompt("Enter Marks")

var thirdSubject = prompt("Enter 3rd Subject")
var thirdSubjectMarks = +prompt("Enter Marks")

document.write("<br> <br> <br>")
document.write("<table>")

document.write("<tr>")
document.write("<td> <b> Subject </b> </td>")
document.write("<td> <b> Total Marks </b> </td>")
document.write("<td> <b> Obtained Marks </b> </td>")
document.write("<td> <b> Percentage </b> </td>")
document.write("</tr>")

document.write("<tr>")
document.write("<td>" + firstSubject + "</td>" )
document.write("<td>" + totalMarks + "</td>" )
document.write("<td>" + firstSubjectMarks + "</td>" )
document.write("<td>" + (firstSubjectMarks/totalMarks) * 100 + "%" + "</td>" )
document.write("</tr>")

document.write("<tr>")
document.write("<td>" + secondSubject + "</td>" )
document.write("<td>" + totalMarks + "</td>" )
document.write("<td>" + secondSubjectMarks + "</td>" )
document.write("<td>" + (secondSubjectMarks/totalMarks) * 100 + "%" + "</td>" )
document.write("</tr>")

document.write("<tr>")
document.write("<td>" + thirdSubject + "</td>" )
document.write("<td>" + totalMarks + "</td>" )
document.write("<td>" + thirdSubjectMarks + "</td>" )
document.write("<td>" + (thirdSubjectMarks/totalMarks) * 100 + "%" + "</td>" )
document.write("</tr>")

document.write("<tr>")
document.write("<td> </td>")
document.write("<td>" + (totalMarks + totalMarks + totalMarks) + "</td>")
document.write("<td>" + (firstSubjectMarks + secondSubjectMarks + thirdSubjectMarks) + "</td>")
document.write("<td>" + ((firstSubjectMarks + secondSubjectMarks + thirdSubjectMarks) / 300) * 100 + "% </td>" )
document.write("</tr>")

document.write("</table>")