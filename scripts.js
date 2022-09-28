
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






      
