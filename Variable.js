"use strict";

window.onload = function () {

  //Variable are containers of data which stores data . variable is assigned to a value .

  //Variable declaration
  //Declared different variables of different data types
  const firstName = "Bimbola";
  const lastName = "Lasisi";
  let streetName = "40 Makinde Road";
  const city = "Lagos";
  const country = "Nigeria";
  console.log(firstName + " " + lastName);

  //const vs let
  //const values cant be change , let can be changed, see example

  streetName = "52 Makinde Road";

  //String interpolation
  console.log(`${firstName} ${lastName}`);
  console.log(`${streetName}, ${city} ${country}`);

  //Escape character
  //Number
  const age = 30;
  const price = 44.23;

  //Boolean
  const employed = true;
  const unemployed = false;

};
