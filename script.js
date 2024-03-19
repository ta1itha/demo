var productOnSpecial = "shoes";
var price = 200;
console.log("The product on special is " + productOnSpecial + " for $" + price);
productOnSpecial = "handbags";
console.log("The product on special is " + productOnSpecial + " for $" + price);

// if statement

//is a user logged in?
var isTanerTired = false;
var isTanerANirvanaFan = true;

if (isTanerTired && isTanerANirvanaFan) {
  console.log("Go take a nap and dream of Nirvana writing Javascript");
} else {
  console.log("Go practice if else statements while listening to Coldplay");
}

// 1. nested if statement
var kilometersToHoliday = 400;
var forgottenItem = "toothbrush";
var anotherForgottenItem = "socks";
var turnBack = false;

let hour = 10;

if(){

} else {

}



  // 2. undefined

  /*
     In JavaScript, when dealing with variables, we sometimes encounter null and undefined.
     Both represent the absence of a value, but in slightly different ways.

     Discovering a New Planet (Understanding UNDEFINED:

     Imagine we've just spotted a new planet through our telescope.
     We have a record for it in our database, but we haven't collected any data about it yet.
     This planet's details (name, size, composition) are undefined.

     In JavaScript, undefined means a variable has been declared but has not yet been assigned a value.
     It's like our new planet that's logged but not yet explored.

     let newPlanetDetails;
     console.log(newPlanetDetails);
*/

//  3. null

/*

    Choosing Not to Explore a Planet (Understanding null):

    Now, suppose we decide that, due to its hostile environment, we will not land on or collect data about a certain planet.
    We intentionally leave its exploration details empty, signifying our decision not to explore it.
    This is recorded in our database as null.

    In JavaScript, null is used to intentioNULLy indicate that a variable has no value.
    It's an assignment value, showing that it's deliberately set to have no value.

    let unexploredPlanetDetails = null;
    console.log(unexploredPlanetDetails);

    Use null to explicitly denote that a variable should be empty or act as a placeholder to be filled later.
    Or - When you want to reset or clear the value of a variable, especially in web applications, setting it
    to null can indicate that the value has been intentionally emptied. For example, when a user logs out,
    their session information stored in a variable could be set to null to clear it.

*/


// 4. looping
for (let number = 10; number >= 1; number--) {
    console.log(number + " seconds to launch");
}

console.log("Liftoff!");

// 5. arrays
let groceryList = [];

// accessing an element in an array - remember that arrays count from 0!
console.log(groceryList[]);

// modify array elements
groceryList[] = "";

// array properties - length
console.log(groceryList.length);

// array methods
// pop
// push

// looping through arrays:

for (let i = 0; i < groceryList.length; i++) {
    console.log(groceryList[i]);
  }

  // 5.strings and string properties

  // toUpperCase, toLowerCase, .length

  // 6. the ! operator

  // 7. functions and arguments and the return statement

  // 8. what is the difference between the global and window object?

  /*
  The Global Object is like wrapper we write all of our variables and functions inside. We call it
  global because it lets us access our code.

  The Window Object is basically the entire browser window, it is also referred to as an Object.
  It has properties and methods that control the browser, such as the URL. It's functions can
  manipulate web pages.

  */

  // 9. global

  // global.myGlobalVar = "Hello, global!";
  // console.log(myGlobalVar);

  // 10. window

  // window.alert('It's a good day to learn Javascript!');


  // 11. objects

  /* what is it? A description of something at its most basic form, it needs to take in "descriptors"
     known as properties, and their values, such as:

     age: 14
     name: "Harry Potter"

     But they are declared like this:


     var dreamHouse = {};

  /*

  // accessing properties on objects

  // looping on object property values:

  // for(const houseDescription in dreamHouse){
    console.log(dreamHouse[houseDescription]);
  }
  */
