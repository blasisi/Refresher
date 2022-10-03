"use strict";

window.onload = function () {};

//Arrays
//Array is created using the square bracket syntax
let array = [];
console.log(array); // This tell us its an empty arrays
console.log(typeof array); //this tells the data type of the array, the variable of my array id a type of object
console.log(array.length); //this tell how many elements are in the arrays, when we execute its shows how many items in browser , i can see we have zero elements in the arrays

//arrays starts from 0 index

let student = ["Abi Ola", " Bim Bola ", "Ali Ola"]; //Gave the arrays a name of student , each students name are in strings, wrapped in quote, when i declare the variables with open and close square bracket, i populate the variable with value this time, three students separated by commas. The variable students is an array which has three elements and if i write this to the console i can see three item in the arrays
//arrays starts from 0 index,
console.log(student);

//
let studentCount = student.length; // This allow use to get the number of elements in the array. i use the length property to store this value in a variable so i can write out to the console wherever the number of items in the arrays , so arrays length student in the array
console.log(`${studentCount}`); //this shows the students in the arrays

let firstStudent = student[0]; //This allow me to get elements in the arrays using its index position starting with 0;i reference the arrays name student by using the square bracket to indicate i am accessing an element in the arrays and then pass the element's position
console.log(`First Student: ${firstStudent}`); // executing this code should tell that the first student is in this case is Abi Ola.

//if i want to get the last element in the array, i will reference the arrays like this .
let lastStudent = student[studentCount - 1]; //To reference the array name i use the square bracket and then student count which is the length of the array minus 1, as the length of the array is three and we have 3 element in the element on line 90 ["Abi Ola", " Bim Bola ", "Ali Ola"]. as we know that the index start at zero Abi ola is at index zero, bim bola is at index one and ali ola is at index 2.
console.log(`Last Student: ${lastStudent}`);

//for loop method
for (let i = 0; i < studentCount; i++) {
  //here is the for loop, i initiate the index to zero , because the first element in the array is zero position, as long as the index is less than student count, so the number of the element in the array, i can execute the code to print the current value of the index then the value of the element at that index in the users array, after i print it out i will the increment i and then do it again until we have no more student.
  console.log(`${student[i]}`);
}

console.log("\n"); //line break

//add a another student to the array
student.push("Monica Oluwa"); // this add additional item to the existing array
studentCount = student.length; // readd the value of studentCount to the new length of the student array.

for (let i = 0; i < studentCount; i++) {
  //then loop through the array each time though printing the current index and the of the element at index in the array
  console.log(`${i}: ${student[i]}`);
}

//Object literal
//
let pcUser = {}; // first i declare a variable  name pcUser and i set it to be an empty object
console.log(pcUser); // value of pc user is empty object
console.log(typeof pcUser); //value of type of  pcUser is "object" , object can have properties

//This line of code shows the properties and its values separated by a colon, the pcUser has a properties of Name
pcUser = {
  Name: "Bee", //The pcUser has a property of Name and its value is Bee
  DeskNo: "Desk2", //The pcUser has a DeskNo property and its value is desk2
  TimeLogin: "2pm", // the pcUser time login property and has value of 2pm
  Age: "30", //same for age value 30
  Email: " bee@gmail.com", //email property and value email address bee@gmail.com
};
console.log(pcUser); // this print out the object with its properties and values
console.log(
  `${pcUser.Name} ${pcUser.DeskNo} ${pcUser.TimeLogin} ${pcUser.Age} ${pcUser.Email}`
); //Here to access a particular properties values , i use dot nation. the console.log printout the usersPc properties the value of which includes  name,deskNo,timeLogin,age and email properties.

//for in loop- this method is similar to when i looped through an array and got the value at each DeskBooking in the array. i can traverse an object and get the value of each property in the object and we do that by using for in loop using a for loop
for (const key in student) {
  //for every key or property (use key to represent the property and value in the object). in this case every key in object in pcUser.
  console.log(`${key}: ${pcUser}`); // console.log the key and go to the user object in square bracket i pass the key. the first time through this loop, the key will be Name. so it will go to pcUser object use the key Name and give me a value. so when the Name execute i would expect Name and Bee. then back to the for loop and it check to see if we have  more keys, which we do DeskNo print out deskno and value Desk2, and continue doing that as long as we have keys in in the object. when we run the code we can see we printed each key and its value.
}
let deskBooking = [];

//created desk-booking user object
let room2Two = {
  Name: "Ade", //The pcUser has a property of Name and its value is Bee
  DeskNo: "Desk3", //The pcUser has a Deskno property and its value is desk2
  TimeLogin: "3pm", // the pcUser time login property and has value of 2pm
  Age: "20", //same for age value 30
  Email: " Ade@gmail.com", //email property and value email address bee@gmail.com
};

//push object to Array
deskBooking.push(room2Two);

//created room 3 users
let roomThree = {
  Name: "Sarah", //The pcUser has a property of Name and its value is Bee
  DeskNo: "Desk4", //The pcUser has a DeskNo property and its value is desk2
  TimeLogin: "5pm", // the pcUser time login property and has value of 2pm
  Age: "40", //same for age value 30
  Email: " Sarah@gmail.com", //email property and value email address bee@gmail.com
};
//push object to Array
deskBooking.push(roomThree);

//created room 4 users
let roomFour = {
  Name: "Sammy", //The pcuser has a property of Name and its value is Bee
  DeskNo: "Desk5", //The pcuser has a Deskno property and its value is desk2
  TimeLogin: "6pm", // the pcuser time login property and has value of 2pm
  Age: "35", //same for age value 30
  Email: " Sammy@gmail.com", //email property and value email address bee@gmail.com
};
//push object to Array
deskBooking.push(roomFour);

console.log(`Booking users:\n\n`);
for (let i = 0; i < deskBooking.length; i++) {
  const allUsers = deskBooking[i];
  for (const key in allUsers) {
    console.log(`${key}: ${allUsers[key]}`);
  }
  console.log(`\n`);
}

//I looped through the array three times , each time  i am getting the current object and printing the key and values for the object property. i created array  object and then pushed the object to the array and then looping though to get each element which is an object and the looping through its properties and printing those out to the console.
