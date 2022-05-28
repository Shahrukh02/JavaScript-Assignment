//=========================Chapter 9 to 11================================
//====task 1=====
// var city = prompt("Enter Your City")
// if(city === "karachi"){
//     alert("Welcome to city of lights")
// }
// else{
//     alert("Welcome to "+ city)
// }

//=====task 2=====
// var gender = prompt("Enter Your Gender")
// if(gender === "male"){
//     alert("Good Morning Sir")
// }
// else if(gender === "female"){
//     alert("Good morning Ma'am")
// }
// else{
//     alert("Please type correct gender")
// }

//=====task 3=====
// var trafficLights = prompt("Enter your traffic light color to show whats this mean")
// if(trafficLights === "red"){
//     alert("Must stop")
// }
// else if(trafficLights === "yellow"){
//     alert("Ready to move")
// } 
// else if(trafficLights === "green"){
//     alert("Move now")
// } 
// else {
//     alert("Select right traffic color")
// }

// =======task 4=====
// var fuel = prompt("Enter remaining fuel in your car");
// if (+fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }
// else {
//     alert("Your Car fuel is full")
// }

// ======task 5====
// var a = 4; 
// if (++a === 5) 
// { 
//     alert("given condition for variable a is true"); 
// }
// var b = 82; 
// if (b++ === 83) 
// { 
//     alert("given condition for variable b is true"); 
// }
// var c = 12; 
// if (c++ === 13) 
// { 
//     alert("condition 1 is true"); 
// } 
// if (c === 13) 
// { 
//     alert("condition 2 is true"); 
// } 
// if (++c < 14) 
// { 
//     alert("condition 3 is true"); 
// } 
// if (c === 14) 
// { 
//     alert("condition 4 is true"); 
// }
// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost) 
// { 
//     alert("The cost equals"); 
// }
// if (true) 
// { 
//     alert("True"); 
// } 
// if (false) 
// { 
//     alert("False"); 
// }
// if ("car" < "cat") 
// { 
//     alert("car is smaller than cat"); 
// }


//======task 6=====
// document.write("<b>Marks Sheet</b><br><br>");
// sub1 = prompt("Enter your marks in first subject");
// sub2 = prompt("Enter your marks in second subject");
// sub3 = prompt("Enter your marks in thirs subject");
// totalMarks = prompt("Enter you total Marks");
// obMarks = +sub1 + +sub2 + +sub3;
// per = (+obMarks / +totalMarks) * 100
// document.write("Total Marks" + totalMarks + "<br>");
// document.write("Marks Obtained: " + obMarks + "<br>");
// document.write("Percentage: " + per + "%<br>");
// if (per >= 80) {
//     document.write("Grade: A-one<br>");
//     document.write("Remarks: Excellent<br>");
// }else {
// if (per >= 70) {
//     document.write("Grade: A<br>");
//     document.write("Remarks: Good<br>");
// }else {
// if (per >= 60) {
//     document.write("Grade: B<br>");
//     document.write("Remarks: You need to improve<br>");
// }else {
// if (per < 60) {
//     document.write("Grade: Fail<br>");
//     document.write("Remarks: Sorry<br>");
// }
// }
// }
// }

//======task 7=====
// var x=6;
// var y = prompt("Guess the num from 1 to 10");
// if (+y === x ){
//     alert("Bingo! Correct Answer");
// }else {
//     if (+y === x + 1) {
//     alert("Close enough to the corret answer!");
//     }else{
//         alert ("Wrong answer! Try again");
//     }
// }

// =====task 8=====
// var x = prompt("Enter any number");
// if (x%3 === 0){
//     alert("Number is Divisible by 3");
// }else {
//     alert("Number in not Divisible by 3");
// }

// =====task 9=====
// var x = prompt("Enter any number");
// if (x%2 === 0){
//     alert("Enterned number is Even");
// }else {
//     alert("Entered number is Odd");
// }

// =====task 10=====
// var T = prompt("Enter Temperature from 10 to 40");
// if (T > 40) {
//     document.write("Its too hot outside.<br>");
// }else {
// if (T > 30) {
//     document.write("The weather today is normal.<br>");
// }else {
// if (T > 20) {
//     document.write("Today's weather is cool.<br>");
// }else {
// if (T > 10) {
//     document.write("OMG! Today's weather is so Cool.<br>");
// }
// }
// }
// }

//=====task 11=====
// var fNum = prompt("Enter First Number");
// var sNUm = prompt("Enter Second Number");
// var operator = prompt("Enter any operator (+, - , *, /)");
// var ans;
// if(operator === '+'){
//     ans = fNum + sNUm;
//     document.write("The sum of numbers is: " + ans + "<br>");
// }else {
//     if(operator === '-'){
//         ans = fNum - sNUm;
//         document.write("The subtraction of numbers is: " + ans + "<br>");
//     }else {
//         if(operator === '*'){
//             ans = fNum * sNUm;
//             document.write("The multiplication of numbers is: " + ans + "<br>");
//         }else {
//             if(operator === '/'){
//                 ans = fNum / sNUm;
//                 document.write("The division of numbers is: " + ans + "<br>");
//             }
//         }
//     }
// }

//===========================Chapter 12-13=======================
// Task 1
// var x = prompt("Enter any num from 65 to 90 or 97 t0 192");
// if (x >= 65 && x <= 90){
//     alert("The letter is capital.");
// } else if
//     (x >= 97 && x <= 122){
//         alert("The letter is lowercase.");
//     }

// Task 2
// var x = prompt("Enter First num:");
// var y = prompt("Enter Second num:");
// if (x > y){
//     alert("The larger num is X " + x + "<br>");
// }else {
//     if (y > x){
//     alert("The larger num is Y " + y + "<br>");
//     }else {
//         if(x === y){
//             alert("Both numbers are equal. <br>");
//         }
//     }
// }

// Task 3
// var x = prompt("Enter any num:");
// if (x < 0) {
//     alert("The number is negative.");
// }else {
//     if (x > 0){
//         alert("The number is positive.");
//     }else {
//         if (x === 0){
//         alert("The number is zero.");
//         }
//     }
// }

// Task 4
// var c = prompt("Enter any letter");
// if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u'){
//     alert("The letter is a vowel:");
// }else {
//     alert("The letter is not a vowel:");
// }

// Task 5
// var p = prompt("Enter your password here:");
// var p2 = prompt("Enter your password again:");
// if (p2 === ' '){
//     alert("Enter your password");
// }else{
// if (p === p2){
//     alert("Correct! The password you entered matches the original password");
// }else {
//     alert("Incorrect Password:");
// }
// }

// Task 6
// var greeting; 
// var hour = 13; 
// if (hour < 18) 
// { greeting = "Good day"; 
// }else {
//     greeting = "Good evening";
//      }

// Task 7
// var time = prompt("Enter time in 24 hours format:");
// if (time >= 0000 && time < 1200){
//     alert("Good Morning!");
// }else {
//     if (time >= 1200 && time < 1700){
//         alert("Good Afernoon!");
//     }else {
//         if(time >= 1700 && time < 2100){
//             alert("Good Evening!");
//         }else {
//             if(time >= 2100 && time <= 2359){
//                 alert("Good Night!");
//             }
//         }
//     }
// }

// -------- Chapter # 14-16 ----------- 

// Task 1
// var arr = [];
// for (var x = 0; x<=10; x++){
//     arr[x] = prompt("Enter Student name:");
// }

// Task 2
// var arr = [];

// Task 3
// var names = [];

// Task 4
// var nums = [];

// Task 5
// var bol = [];

// Task 6
// var mix = [];

// Task 7
// var pakQualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'MPhil', 'PhD'];
// document.write("<b>QUalifications: </b><br><br>")
// for (i = 0; i <=7; i++){
//     document.write(i + ") " + pakQualifications[i] + "<br>");
// }

// Task 8
// var names = [];
// for (i = 0; i <=2; i++){
//     names[i] = prompt("Enter Student Names:");
// }
// var marks = [];
// for (i = 0; i <=2; i++){
//     marks[i] = prompt("Enter Student marks:");
// }
// var totalMarks = 500;
// var per1 = (marks[0]/totalMarks)*100;
// var per2 = (marks[1]/totalMarks)*100;
// var per3 = (marks[2]/totalMarks)*100;
// document.write("Score of " + names[0] + " is " + marks[0] + " Percentage: " + per1 + "% <br>");
// document.write("Score of " + names[1] + " is " + marks[1] + " Percentage: " + per2 + "% <br>");
// document.write("Score of " + names[2] + " is " + marks[2] + " Percentage: " + per3 + "% <br>");

// Task 9
// var arr = ['Orange', 'White', 'Violet'];
// var enterColor = prompt("Enter the color name: ");
// arr.unshift(enterColor);
// document.write(arr + "<br>");

// var arr1 = ['Orange', 'White', 'Violet'];
// var enterColor1 = prompt("Enter the color name which will be added in the last: ");
// arr1.push(enterColor1);
// document.write(arr1 + "<br>");

// var arr1 = ['Orange', 'White', 'Violet'];
// var enterColor2 = prompt("Enter the first color name: ");
// var enterColor3 = prompt("Enter the second color name: ");
// arr1.unshift(enterColor2, enterColor3);
// document.write(arr1 + "<br>");

// arr1.splice(0, 1);
// document.write(arr1 + "<br>");

// Task 10
// var scores = [320, 230, 480, 120];
// document.write("Scores of students: " + scores + "<br>");
// scores.sort();
// document.write("Ordered Scores of students: " + scores + "<br>");

// Task 11
// var cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
// document.write("Cities List: <br>" + cities + "<br>");
// var city = cities.slice(2,4);
// document.write("Selected cities List: <br>" + city + "<br>");

// // Task 12
// var arr = ["This", " is ", " my ", " cat"];
// var joint = arr.join();
// document.write(joint + "<br>");

// // Task 15
// var arr = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
// document.write("<select>");
// for(var i = 0; i < arr.length; i++){
//     document.write("<option>" + arr[i] + "</option>")
// }
// document.write("</select>");

