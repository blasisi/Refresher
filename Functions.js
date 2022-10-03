"use strict";

window.onload = function () {};
//Function
//function is a block of code design to perform a particular task and it execute when something invoke it (call it)

function welcomeUsers(deskUsers) {
  //  i started using function key world, gave function name welcomeUsers, and  excute when i invoke the function. the function is contained within opening and closing curly braces.
  let greeting = `Welcome Refresher Course, ${deskUsers}`; // so here i have added code to declare a variable with the text welcome refresher course and uses alert to display the greeting

  alert(greeting);
}

welcomeUsers("bee"); // This to invoke the function i reference by its name and then add the opening and closing parentheses

//in addition to executing the code inside the function i can pass values when i invoke and it values are called parameters which in defined inside the opening and closing  parentheses.
// Here i have added a parameter name deskUsers and reference the value of thr deskUser parameter by referencing to parameter by name. set the value of the greeeting to the string welcome referesher course and then inject the deskuser value greeting

// function can also return values
function calcSum(enduser, addendUser) {
  // This calculate the sum of two numbers passed in as paramenter.
  const sum = enduser + addendUser;
  return sum;
}

let sum = calcSum(1, 2); // also created a variable name sum and set it equal to a value of calcsum function and passing the parameter 1 and 2, when i excute the function, it will calculate the sum and then return, if theres no return statement, the value will be undefine
console.log(`1 + 2 = ${sum}`);

function calTotalAverage(num) {
  // I created  a function name calculateAverage and it take paramenter num . inside of the calTotalAverage function i declare a variable  named sumTotal and set it equal to zero
  let sumTotal = 0;
  for (let i = 0; i < num.length; i++) {
    //then looping throught the num array, each time through increment by sum plus equal the values in the num array  increment index.
    sum += num[i];
    {
      return [sum / num.length].toFixed(2); // after i  calcuate the sum i divide it by numbers.length and round it using tofixed at two decimal places and return it and the value will be added to the  calTotalAverage variables
    }
    const num = [20, 30, 40, 50, 60]; // declared a const with the name of number and set it equal to an array with  6 values, then have a variables name result, which is equal to the result of call the calTotalAverage function pas the array of num. the for loop will loop through these numbers each time through getting the current value and add it to the sum
    let result = calTotalAverage[num];
    console.log(result);
  }
}

//--------------Another function example-----

function addSum(add, subtract) {
  //in this line  i declare a function called addSum, which take two argument
}

function divSum() {
  //also have another function and declare it as divSum, this function doesn't have no arguement.

  let totalSum = 0; // Declare a variable name totalSum and set it to equal to zero
  //This line allow me to get the values from user

  let num1 = prompt("please enter the first num.", "0"); //populate num1 and num2 variable to calculate the total sum using javascript prompt to ask users to enter first num

  let num2 = prompt("please enter the second num.", "0"); //When the user enters the values.

  totalSum = addSum(parseInt(num1), parseInt(num2)); // i set totalSum to equal to the the result of addSum function and passing  num1 and num2 values. so when the user enter those values it giving back result as strings, take the num1 and num2 values and pass them into the parseint method which will convert it
  return totalSum;
}

let totalSum = divSum(); // And then a variable names totalSum which is equal to divsum function
console.log(`The sum total sum is: ${totalSum}`);

//When the user enters the values
