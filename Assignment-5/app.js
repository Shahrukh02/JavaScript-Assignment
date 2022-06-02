//============Chapter 17-20=================
//task1
// var arr = [[],[]]

//task 2
// var arr = [[0123],[1012],[2101]]

// task 3
// for(var i=1; i<=10; i++){
//     document.write(i + "</br>")
// }

// task 4
// var tableNum = +prompt("Enter a table number")
// var tablelenght = +prompt("Enter a table length")
// for(var i=1; i <=tablelenght; i++){
//     document.write(tableNum+"x"+i+"="+tableNum*i+"</br>")
// }

//task 5
// var fruits = ["apple", "banana", "mango", "orange","strawberry"]
// for(var i=0; i < fruits.length; i++){
//     document.write(fruits[i]+"</br>")
// }
// for(var i=0; i < fruits.length; i++){
//     document.write("Element at index "+ i +" is " + fruits[i]+ "</br>")
// }

//task 6
// document.write("Reverse: <br>");
// var arr = [0,1,2,3,4,5,6,7,8,9,10];
// arr.reverse();
// document.write(arr + "<br>");

// document.write("<br><br>");  

// document.write("Even: <br>");
// var arr2 = [0,1,2,3,4,5,6,7,8,9,10];
// for(var i = 0; i <= arr2.length-1; i = i+2){
//     document.write(arr2[i] + ",");
// }

// document.write("<br><br>");  

// document.write("Odd: <br>");
// var arr2 = [0,1,2,3,4,5,6,7,8,9,10];
// for(var i = 1; i <= arr2.length-1; i = i+2){
//     document.write(arr2[i] + ",");
// }

// task 7
// var order = prompt("Welcome to ABC bakery. What do you want to order sir/ma'am?")
// var arr= ["cake","applepie","cookie","chips","patties"]
// if(arr.indexOf(order)!==-1){
//     document.write(order+" is available at index"+arr.indexOf(order)+" in our bakery")
// }
// else{
//     document.write("We are sorry "+order+" is not available in our bakery")
// }

// task 8
// var arr = [24, 53, 78, 91, 12,];
// largest = arr[0];
// for(var i = 0; i <= arr.length-1; i++){
//     if(arr[i] > largest){
//         largest = arr[i];
//     }
// }
// document.write("Largest Number is: " + largest);

// task 9
// var arr = [24, 53, 78, 91, 12];
// var smallest = arr[0];
// for(var i = 0; i <= arr.length-1; i++){
//     if(arr[i] < smallest){
//         smallest = arr[i];
//     }
// }
// document.write("Smallest Number is: " + smallest);

//task 10
// for (var i = 1; i <=100; i++){
//     if(i % 5 === 0){
//         document.write(i + ", ");
//     }
// }
