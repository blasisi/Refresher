
        "use strict";//use strict mode force javascript to excute in strict mode

        //windowonload prevent any javascript from excuting until the dom is renders

        window.onload =function(){
          console.log("DOM loaded")
                 
          //          console.info("infor messsage");
          // console.info("infor messsage");


          //conditional statement - used to perform different actions based on the different condition
          //in one condition we may want excute a certain block of code  and in another condition we or may not want to excute another block of code 
          //If
          //if statement - most common condition- used to evaluate a condition enclosed in paratheses
          // if the condition evaluate to true , the code wrap in curly braces will be excuted.

          let firstName = "";
          if(firstName == "")//check to see if the firstName is equal to empty string
          console.log("Hello, World!"); //write to the console log helloworld
        
    
        }
        console.log('\n') //line break

        //This code checks if the value of the firstname variable is not equal to an empty string i excgute the code inside curly braces
        let firstName = "Demi";
        if (firstName != "") {

          // console.log(`Hello ,${firstName}!`);
        }
        console.log('\n') //line break


        //if - else
        if(firstName == ""){
              //console.log("Hello, World!");//if he first condition in the parentese is true it will excute this code, if the case this is not true we wont excute this code

        }else { //jump down into else 
        console.log(`Hello, ${firstName}!`)  // excute this code !


        }

        console.log('\n') //line break

        //else if
        let counter = 200;
        if(counter < 30 ){
          console.log('Too many count');
        }else if(counter >=30 && counter <200) {
          //console.log(`Some visitors here.);
        }else {
             console.log(`lots of visitors here!`);
        }

        console.log('\n') //line break

      

       //For loop 

       //loop are use to excute the same code multiples times each time with a different value
       //for loop has syntax of declaring a variables to use as the index, whats the start point in the loop, thene check the condition to see if it evaluate to true and they increment the index

       for(let index = 1; index <=10; index++){ //created variable name index, i set the value equal 1, as long as the index is less than 11 i am going to excute the code inside of the curly braces. which is to simply console.log value of the index.after i finish excution of the code inside of the curly braces i jump up and increment that index(index = index +1 )
        console.log(`The current index ${index}.`);

       }
       console.log('\n') //line break


       for(let index = 10; index >=0; index--){ //print the number in reverse order, first by starting with index of 10, as long as the index is graeater than or equal to 0  we write to the console  and decreament the index by 1 meaning subtracting 1 until the index is no longer granter than or equal to zero . 

        console.log(`The current index ${index}.`);

       }
       console.log('\n') //line break

//Arrays
//Array is created using the square bracket syntax
let array = [];
console.log[array];// This tell us its an empty arrays
console.log[typeof array];//this tells the data type of the array, the variable of my array id a type of object
console.log[array.length];//this tell how many elements are in the arrays, when we excute its shows how many items in browser , i can see we have zero elements in thr arrays

//arrays starts from 0 index, th

let student =["Abi Ola", " Bim Bola ", "Ali Ola"];//Gave the arrays a name of student , each students name are in strings, wrapped in quote, when i declare the variables with open and close square bracket, i populate the variable with value this time, three students separated by commas. this variable students is an array which has three elements and if i write this to the console i can see three item in the arrays
//arrays starts from 0 index, 
console.log[student];

//
let studentCount = student.length;// this allow use o get the number of elements in the array. i use the length property to store this value in a variable so i can write out to the console wherever the number of items in the arrays , so arrays length student in the arrray 
console.log(`${studentCount}`);//this shows the students in the arrays


let firstStudent = student[0];//This allow me to get elements in the arrays using its index position starting with 0;i reference the arrays name student by using the square bracket to indicate i am accessing an element in the arrays and then pass the element's position
console.log(`First Student: ${firstStudent}`);// excuting this code should tell that the first student is in this case is Abi Ola.


//if i want to get the last element in the array, i will reference the arrays like this .
let lastStudent = student[studentCount -1];//To reference the array name i use the square bracket and then student count which is the length of the array minus 1, as the length of the array is three and we have 3 element in the element on line 90 ["Abi Ola", " Bim Bola ", "Ali Ola"]. as we know that the index start at zero Abi ola is at index zero, bim bola is at index one and ali ola is at index 2.
console.log(`Last Student: ${lastStudent}`);


//for loop method
for(let i = 0; i < studentCount; i++){ //here is the for loop, i initiate the index to zero , because the first element in the array is zero position, as long as the index is less than student count, so the number of the element in the array, i can excute the code to print the current value of the index then the value of the element at that index in the users array, after i print it out i will the increment i and then do it again untill we have no more student.
  console.log(`${student[i]}`);
}

console.log('\n') //line break

//add a another student to the array
student.push("Monica Oluwa");// this add additional item to the existing array
studentCount = student.length;// readd the value of studentCount to the new length of the student array, the loop throught the array each time though printing the current index and the of the element at index in the array
for(let i =0; i < studentCount; i++){
console.log(`${i}: ${student[i]}`);
}

//Object literal
//
let pcUser ={} // first i decleared a variable  name pcUser ands i set it to be an empty object
  console.log(pcUser);// value of pc user is empty object
  console.log(typeof pcUser); //value of type of  pcuser is "object" , object can have properties


//This line of code shows the properties and its values separated by a colon, the pcuser has a properties of Name
  pcUser ={
            "Name": "Bee",//The pcuser has a property of Name and its value is Bee
            "DeskNo": "Desk2",//The pcuser has a Deskno property and its value is desk2
            "TimeLogin": "2pm",// the pcuser time login property and has value of 2pm
            "Age": "30",//same for age value 30
            "Email":" bee@gmail.com" //email property and value email address bee@gmail.com
  };
console.log(pcUser);// this print out the object with its properties and values
console.log(`${pcUser.Name} ${pcUser.DeskNo} ${pcUser.TimeLogin} ${pcUser.Age} ${pcUser.Email}`);//Here to access a particular properties values , i use dot nation. the console.log printout the usersPc properties the value of which includes  name,deskno,timelogin,age and email properties.

//for in loop- this method is similar ti when i looped through an array and got the value at each element in the array. i can travese an object and get the value of each property in the object and we do that by using for in loopusing a for loop
for(const key in student){ //for every key or property (use key to represent the property and value in the object). in this case every key in object which pcuser.
  console.log(`${key}: ${pcUser}`);// console.log the key and go to the user object in square bracket i pass the key. the first time through this loop, the key will be Name. so it will got to pcuser object use the key Name and give me a value. so when the Name excute i would expect Name and Bee. then back to the for loop and it check to see if we have  more keys, which we do DeskNo print out deskno and value Desk2, and continue doing that as long as we have keys in in the object. when we run the code we can see we printed each key and its value.
}







