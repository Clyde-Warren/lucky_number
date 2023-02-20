/* OVERVIEW
-The program will calculate the users Lucky Number by doing simple Math with the users name.
-Each letter of the alphabet will be assigned a number based on the position in the Alphabet (eg a=1, b=2).
-The User will be prompted to enter their name and the program would add up the alphabets contained in the name.
-This total will then be divided by the number of characters in the users name and return a "Lucky Number".
*/

/*
STEPS
1. Create an input for the user to enter their name
2. Remove all spaces from the name.
3. Convert all characters to lowercase.
4. Split the characters so that they appear as individual elements.
5. Store these elements in a list.
6. Create a JS object that stores all alphabets with the alphabet as the key and the position as the value.
7. Initialise a variable sum and set its value to 0.
8. Initialise a variable called name length and set it to the lenght of the list.
9. Iterate over the characters in the list to match them with their corresponding number value in the JS object.
10. After iteration the value must be added to sum.
11. Divide sum by the length of the list element.
12 Return this number as the users lucky number.
 */

// const alphabets = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5,
//     f: 6,
//     g: 7,
//     h: 8,
//     i: 9,
//     j: 10,
//     k: 11,
//     l: 12,
//     m: 13,
//     n: 14,
//     o: 15,
//     p: 16, 
//     q: 17,
//     r: 18,
//     s: 19,
//     t: 20,
//     u: 21,
//     v: 22,
//     w: 23,
//     x: 24,
//     y: 25,
//     z: 26
//   }

//   let userInput = "Clyde Warren Govender"; // this info will be entered by the user
//   let newName = '';
//   let sum = 0;
//   let nameLength = 0;

/*  2 ways to remove space from string:
let newStr = userInput.replace(/\s+/g, ''); -- using regex
let newStr = userInput.split(' ').join('');
*/


/* Below is the name convertor without using a function */
// userInput = (userInput.split(' ').join('')).toLowerCase()
// console.log(userInput);

/******************************* FUNCTION 1. ***************************************************** */
// userInput converted using a function
// const nameConvertor = (userInput) =>{
//   newName = (userInput.split(' ').join('')).toLowerCase();
//   return newName;  
// }

// console.log(`1. newName = Name stripped of space and Capitals: ${nameConvertor(userInput)}`);

/************************************************************************************************ */

// TODO - divide name by name length
// nameLength += mytrimedUserInputList.length;
// nameLength += newName.length;
// console.log(`2. Length of name without spaces: ${nameLength}`);

// for (let i = 0; i < newName.length; i++){
//   if(alphabets.hasOwnProperty(newName[i])){
//     sum += alphabets[newName[i]]
//   }
// }

// const luckyNumber = Math.floor(sum/nameLength);
// console.log(`3. ${luckyNumber}`);

/*--------------------------------------- FUNCTION 2 --------------------------------------------------*/
// const mainLuckyNumber = (name) => {
  // nameLength += name.length;
//   for (let i = 0; i < name.length; i++){
//     if(alphabets.hasOwnProperty(name[i])){
//       sum += alphabets[name[i]]
//       ;
//     }
//   }
//   let luckyNumber = Math.floor(sum/nameLength);
//   return luckyNumber ;
// }

// console.log(`4. Sum of name based on aplhabets: ${mainLuckyNumber(newName)}`);

/*----------------------------------------------------------------------------------------------------- */

  
