//task no 1
var arr = new Array()


//task no 2
var arr1 = []


//task no 3
var arr2 = ["Muneeb","Saad","Ali"]


//task no 4
var arr3 = [1, 2, 3, 4, 5]


//task no 5
var arr4 = [true , false]


//task no 6
var arr5 = ["Muneeb", 76, true]


//task no 7
var qualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"]
document.write("<h1> Qualifications </h1>")
for (i=0; i <= qualifications.length - 1; i++){
    document.write(i + 1 + ") " + qualifications[i] + "<br>")
}


//task no 8
var names = ["Michael", "john", "Tony"]
var scores =  [320, 230, 480]
document.write("<br> <br> <br>")
for (var i = 0; i <= names.length - 1; i++){
    document.write("Score of " + names[i] + " is " + scores[i] + ". Percentage: " + (scores[i] / 500) * 100 + "% <br>")
}


//task no 9
var color = []
document.write("<br> <br> <br> <h1> Color Array </h1>")
document.write(color)
color.unshift(prompt("Enter color at the beginning of the array"))
document.write("<br> " + color)
color.push(prompt("What color you want at the end of the array"))
document.write("<br> " + color)
color.unshift("Green", "Yellow")
document.write("<br> " + color)
color.shift()
document.write("<br> " + color)
color.pop()
document.write("<br> " + color)
var colorIndex = +prompt("At which index you want to add color")
color.splice(colorIndex, 0, prompt("What color you want to add"))
document.write("<br> " + color)
colorIndex = +prompt("At which index you want to delete color")
var colorNum = +prompt("How many colors you want to delete")
color.splice(colorIndex, colorNum)
document.write("<br>" + color)

//task no 10
var stdScores = [320, 230, 480, 120]
document.write("<br> <br> <br>")
document.write(stdScores)
stdScores.sort()
document.write("<br>" + stdScores)


//task no 11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
var selectedCities = []
selectedCities[0] = cities.slice(2, 4)
document.write("<br> <br> <br>")
document.write("Cities list: <br>" + cities)
document.write("<br> <br> Selected Cities list: <br>" + selectedCities)


//task no 12
var arr6 = ["This", "is", "my", "cat"]
var str = arr6.join(" ")
document.write("<br> <br> <br>")
document.write("Array: <br>" + arr6)
document.write("<br> <br> String: <br>" + str) 


//task no 13
var arr7 = []
arr7[0] = "keyboard"
arr7[1] = "mouse"
arr7[2] = "printer"
arr7[3] = "monitor"
document.write("<br> <br> <br>")
document.write("Devices: <br>" + arr7 + "<br>")

for(i = 0; i < arr7.length; i++){
    document.write("Out: <br> " + arr7[i] + "<br>")
}



//task no 14
arr7 = arr7.reverse()
document.write("<br> <br> <br>")
document.write("Devices: <br>" + arr7 + "<br>")

for(i = 0; i < arr7.length; i++){
    document.write("Out: <br> " + arr7[i] + "<br>")
}


//task no 15
var phoneCompanies = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
document.write("<br> <br> <br>")
document.write("<select id='phoneCompanies'>")
for (i = 0; i < phoneCompanies.length; i++){
document.write("<option> " + phoneCompanies[i] + "</option>")
}
document.write("</select>")