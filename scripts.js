
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


let firstStudent = student[0];//this allow me to get elements in the arrays using its index position starting with 0;i reference the arrays name student by using the square bracket to indicate i am accessing an element in the arrays and then pass the element's position
console.log(`First Student: ${firstStudent}`);// excuting this code should tell that the first student is in this case is Abi Ola.


//if i want to get the last element in the array, i will reference the arrrays like this .
let lastStudent = student[studentCount -1];//To reference the array name i use the square bracket and then student count which is the length of the array minus 1, as the length of the array is three and we have 3 element in the element on line 90 ["Abi Ola", " Bim Bola ", "Ali Ola"]. as we know that the index start at zero Abi ola is at index zero, bim bola is at index one and ali ola is at index 2.
console.log(`Last Student: ${lastStudent}`);



      
