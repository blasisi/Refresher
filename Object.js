"use strict";

window.onload = function () {;
//
//Object properties and methods 
//Object has properties and methods
//When creating an object we use the new keyword and object contructor function
//Function can be pass parameter
//

const person_details ={//Json object literal, i define the oject and its property and values
    "firstName":"Bee",
    "lastName":"Sisi",
    "email":"Bee@studytime.com",
    "age": "23",
    "postCode":"Lk2 9tj"
}

console.log(person_details);

//Here i define the object that hold person details then reference  the properties on the object and setting the values.

let studentNames = [];
const person =new Object();
person.firstName ="Tee";
person.lastName ="Ali";
person.email = "tee@studytime.com";
person.age ="33";
person.postCode = "MK2 5ER"

//This has value of a function which when i invoked it will return this person object email.
person.getEmail = function(){
    return this.email;
}
console.log(person.getEmail());
//This will set this person email to a new value
person.setEmail = function(email){
    return this.email = email;
}
person.setEmail("new@studtime.com");
console.log(person.getEmail())

studentNames.push(person);
console.log(studentNames)
}

// object can also have methods

