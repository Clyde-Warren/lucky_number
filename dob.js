/*  Covnverts the users D.O.B into a figure
    User enters DOB in the format of dd.mm.yyyy
 */

let mm = 'July';
let dd = 20;
let yyyy = 1978;

/*
Take the user day and year
convert them to strings then split them into an array
convert them back to numbers so the array can be summed
 */
// dd = String(dd).split("").map((dd)=>{
//     return Number(dd)
//   })
    
// yyyy = String(yyyy).split("").map((yyyy)=>{
//     return Number(yyyy)
//   })
    
// console.log(yyyy);
// console.log(dd);

/*
A function to wrap the above code
 */

const splitNumber = (number) => {
    let newNumber = String(number).split('').map((number) => {
        return Number(number);
    });
    return newNumber;
}

const numberArray = splitNumber(dd);

console.log(splitNumber(dd));
// console.log(splitNumber(dd));



/*
Function that takes an array of numbers and returns the sum of the numbers
*/
const sumArray = (array) => {
    let result = array.reduce((accumulator, num) => {
         return accumulator + num;
    },
    0)
    return result;
}

console.log(sumArray(numberArray));

// let sum = yyyy.reduce((accumulator, num) => {
//     return accumulator + num;
// },0);

// console.log(sum);