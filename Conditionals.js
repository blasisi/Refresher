"use strict";

window.onload = function () {
  "use strict"; //use strict mode force javascript to execute in strict mode

  //Window onload prevent any javascript from executing until the dom is renders

  window.onload = function () {
    console.log("DOM loaded");

    //          console.info("infor messsage");
    // console.info("infor messsage");

    //conditional statement - used to perform different actions based on the different condition
    //in one condition we may want excute a certain block of code  and in another condition we or may not want to excute another block of code
    //If
    //if statement - most common condition- used to evaluate a condition enclosed in paratheses
    // if the condition evaluate to be true , the code wrap in curly braces will be excuted.

    let firstName = "";
    if (firstName == "")
      //check to see if the firstName is equal to empty string
      console.log("Hello, World!"); //write to the console log helloworld
  };
  console.log("\n"); //line break

  //This code checks if the value of the firstname variable is not equal to an empty string i execute the code inside curly braces
  let firstName = "Demi";
  if (firstName != "") {
    // console.log(`Hello ,${firstName}!`);
  }
  console.log("\n"); //line break

  //if - else
  if (firstName == "") {
    //console.log("Hello, World!");//if he first condition in the parentese is true it will execute this code, if the case this is not true we wont excute this code
  } else {
    //jump down into else

    console.log(`Hello, ${firstName}!`); // excute this code !
  }

  console.log("\n"); //line break

  //else if
  let counter = 200;
  if (counter < 30) {
    console.log("Too many count");
  } else if (counter >= 30 && counter < 200) {
    //console.log(`Some visitors here.);
  } else {
    console.log(`lots of visitors here!`);
  }

  console.log("\n"); //line break
};
