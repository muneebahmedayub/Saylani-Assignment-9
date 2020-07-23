//task no 1
var arr1 = [[], []]


//task no 2
var arr2 = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]]
for (var i = 0; i < arr2.length; i++) {
    arr2[i] = arr2[i].join(" ")
    document.write(arr2[i] + "<br>")
}


//task no 3
var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
document.write("<br> <br> <br>")
for (i = 0; i < arr3.length; i++) {
    document.write(arr3[i] + "<br>")
}


//task no 4
var tableNum = +prompt("Enter a number to show its multiplication table")
var tableLength = +prompt("Enter length of multiplication table")
document.write("<br> <br> <br>")
document.write("Multiplication table of " + tableNum)
document.write("<br> length is " + tableLength + "<br> <br>")
for (i = 1; i <= tableLength; i++) {
    document.write(tableNum + " x " + i + " = " + (tableNum * i) + "<br>")
}


//task no 5
var fruits = ["apple", "banana", "mango", "orange", "strawbery"]
document.write("<br> <br> <br>")
for (i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>")
}
document.write("<br>")
for (i = 0; i < fruits.length; i++) {
    document.write("Element at index " + i + " is " + fruits[i] + "<br>")
}


//task no 6
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
document.write("<br> <br> <br>")
document.write("<b> Counting: </b> <br> <br> " + num.slice(0, 15))
document.write("<br> <br> <b> Reverse counting: </b> <br> <br>" + num.slice(0, 10).reverse())
document.write("<br> <br> <b> Even: </b> <br> <br>")
for (i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
        document.write(num[i] + ",")
    }
}
document.write("<br> <br> <b> Odd: </b> <br> <br>")
for (i = 0; i < num.length; i++) {
    if (num[i] % 2 === 1) {
        document.write(num[i] + ",")
    }
}
document.write("<br> <br> <b> Series: </b> <br> <br>")
for (i = 0; i < num.length; i += 2) {
    document.write(num[i] + "k,")
}


//task no 7
var A = ["cake", "apple pie", "cookie", "chips", "patties"]
var search = prompt("Welcome to ABC Bakery, What do you want to order sir/ma'am?")
var matchFound = false
for (i = 0; i < A.length; i++) {
    if (search === A[i]) {
        matchFound = true
        alert(search + " is available at index " + i + " in our bakery")
        break
    }
}
if (matchFound === false) {
    alert("We are sorry. " + search + " is not available in our bakery")
}


//task no 8
A = [24, 53, 78, 91, 12]
document.write("<br> <br> <br>")
document.write("Array items: " + A)
for (i = 0; i < A.length; i++) {
    var found = 0
    for (j = 0; j < A.length; j++) {
        if (A[i] > A[j]) {
            found += 1
        }
        if (found === A.length - 1) {
            document.write("<br> The largest number is " + A[i])
            break
        }
    }
}


//task no 9
A = [24, 53, 78, 91, 12]
document.write("<br> <br> <br>")
document.write("Array items: " + A)
for (i = 0; i < A.length; i++) {
    var found = 0
    for (j = 0; j < A.length; j++) {
        if (A[i] < A[j]) {
            found += 1
        }
        if (found === A.length - 1) {
            document.write("<br> The smallest number is " + A[i])
            break
        }
    }
}


//task no 10
document.write("<br> <br> <br>")
for (i = 5; i <= 100; i += 5){
    document.write(i + ", ")
}

