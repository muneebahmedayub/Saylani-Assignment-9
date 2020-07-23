// Chapter 38-39 Starts//

// task no 1
function power(a, b) {
    alert(a ** b)
}
power(15, 4)


// task no 2
function leapyear(year) {
    switch (year % 4) {
        case 0:
            alert("it is a leap year")
            break
        default:
            alert("it is not a leap year")
    }
}
leapyear(2016)


// task on 3
function AOT(a, b ,c) {
    s = (a + b + c) / 2
    A = s * (s - a) * (s - b) * (s - c)
    alert(A)
}
AOT(5, 4 ,3)


//task no 4
var sub1 = 78
var sub2 = 89
var sub3 = 99
function average() {
    alert((sub1 + sub2 + sub3) / 3)
}
function percentage() {
    alert(((sub1 + sub2 + sub3) / 300) * 100)
}
function mainFunction() {
    average()
    percentage()
}
mainFunction()


//task no 5
var str = "Muneeb"
function indexOf(letter) {
    var i = 0
    while (i < str.length){
        if (letter === str[i]){
            alert(i)
            break
        }
        i++
    }
}
indexOf("e")


// task on 6
sentence = "What are you doing today. Have you had your meal"
function removeVowels() {
    var a = "a"
    var e = "e"
    var i = 'i'
    var o = "o"
    var u = "u"

    j = 0
    while (j < sentence.length) {
        switch (sentence[j]){
            case a:
                sentence = sentence.slice(0, j) + sentence.slice(j+1, )
                break
            case e:
                sentence = sentence.slice(0, j) + sentence.slice(j+1, )
                break
            case i:
                sentence = sentence.slice(0, j) + sentence.slice(j+1, )
                break
            case o:
                sentence = sentence.slice(0, j) + sentence.slice(j+1, )
                break
            case u:
                sentence = sentence.slice(0, j) + sentence.slice(j+1, )
                break
        }
        if (j > 24) {
            break
        }
        j++
    }
    alert(sentence)
}
removeVowels()


// task no 7
sentence = "Pleases read this application and give me gratuity"
function task7() {
    occurance = 0

    var a = "a"
    var e = "e"
    var i = 'i'
    var o = "o"
    var u = "u"

    j = 0
    while (j < sentence.length) {
        switch (sentence[j]) {
            case a:
                switch (sentence[j + 1]) {
                    case a:
                        occurance++
                        break
                    case e:
                        occurance++
                        break
                    case i:
                        occurance++
                        break
                    case o:
                        occurance++
                        break
                    case u:
                        occurance++
                        break
                }
                break
            case e:
                switch (sentence[j + 1]) {
                    case a:
                        occurance++
                        break
                    case e:
                        occurance++
                        break
                    case i:
                        occurance++
                        break
                    case o:
                        occurance++
                        break
                    case u:
                        occurance++
                        break
                }
                break
            case i:
                switch (sentence[j + 1]) {
                    case a:
                        occurance++
                        break
                    case e:
                        occurance++
                        break
                    case i:
                        occurance++
                        break
                    case o:
                        occurance++
                        break
                    case u:
                        occurance++
                        break
                }
                break
            case o:
                switch (sentence[j + 1]) {
                    case a:
                        occurance++
                        break
                    case e:
                        occurance++
                        break
                    case i:
                        occurance++
                        break
                    case o:
                        occurance++
                        break
                    case u:
                        occurance++
                        break
                }
                break
            case u:
                switch (sentence[j + 1]) {
                    case a:
                        occurance++
                        break
                    case e:
                        occurance++
                        break
                    case i:
                        occurance++
                        break
                    case o:
                        occurance++
                        break
                    case u:
                        occurance++
                        break
                }
                break
        }

        j++
    }
    alert(occurance)
}
task7()


// task no 8
var len = +prompt("Enter distance between two cities:")
function kmToM () {
    return len * 1000
}
function kmToFt () {
    return len * 3280.8399
}
function kmToIn () {
    return len * 39370.0787
}
function kmToCm () {
    return len * 100000
}

function task8 () {
    var convertor = "In meter: " + kmToM()
    convertor +=  "\nIn feet: " + kmToFt()
    convertor += "\nIn Inches: " + kmToIn()
    convertor += "\nIn centimeter: " + kmToCm()
    alert(convertor)
}
task8()


// task no 9
var workedTime = 48
function overtimePay () {
    if (workedTime > 40) {
        var overtime = workedTime - 40
        var pay = overtime * 12
        alert("Rs " + pay + " are your overtime pay")
    }
    else{
        alert("You are not working overtime")
    }
}
overtimePay()


// task no 10
var amount = +prompt("Entere amount to withdraw in hundreds:")
function task10() {
    hundredNotes = parseInt(amount / 100)
    amount = amount - (hundredNotes * 100)

    fiftyNotes = parseInt(amount / 50)
    amount = amount - (fiftyNotes * 50)

    tenNotes = parseInt(amount / 10)
    amount = amount - (tenNotes * 10)

    alert("You will have " + hundredNotes + " hundred notes and " + fiftyNotes + " fifty note and " + tenNotes + " ten notes")
}
task10()


// Chapter 38-42 Ends //

