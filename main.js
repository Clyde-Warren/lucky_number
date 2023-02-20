let globalCount = 0;
let globalDivisor = 0;
let lucky_number = 0;
let luckyNumForDay = 0;
const dayOfWeek = new Date().getDay();


const alphabets = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16, 
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
  }


let userName = "Marilyn Francis";
let month = "July";
let day = 10;
let year = 1978;

/*
stringToNumberValue function:
takes a string, strips whitespace
and reduces to lower case
assigns a value based on each letter assigned to the alphabets
*/
function stringToNumberValue(string){
    let newName = (string.split(' ').join('')).toLowerCase();
    for (let i = 0; i < newName.length; i++){
        if(alphabets.hasOwnProperty(newName[i])){
            globalCount += alphabets[newName[i]];
        }
    }
}

// stringToNumberValue(month);
// console.log(`Global Count after adding Month value ${globalCount}`)
stringToNumberValue(userName);
console.log(`Global Count after adding userName value ${globalCount}`)

/*------------------------------------------------------------------------------------------------------ */

/*
splitNumber Function:
takes a number and converts it to a string
adds it to an array
converts it back to a number
then adds the numbers
returns the sum of the numbers
*/
const splitNumber = (number) => {
    let newNumber = String(number).split('').map((number) => {
        return globalDivisor += Number(number);
    });
    // let result = newNumber.reduce((accumulator, num) => {
    //     return accumulator + num;
    // },
    // 0)
    // globalCount += result;
}

splitNumber(day);
console.log('this is ' + day);
// console.log(`Global Count after adding day value ${globalCount}`);
// splitNumber(year);
// console.log(`Global Count after adding year value ${globalCount}`);

/*-------------------------------------------------------------------------------------------------------- */

/*
Length string Calculator
This function takes a string and simply returns the no of characters
 */

// const calcLengthOfString = (string) => {
//     return globalDivisor += string.length;
// }

// calcLengthOfString(userName);
// console.log(`Global Divisor after adding user Name length ${globalDivisor}`);
// calcLengthOfString(month);
// console.log(`Global Divisor after adding month length ${globalDivisor}`);

/*------------------------------------------------------------------------------------------------------------- */

// This function returns the lucky number by: dividing the globalCount by the globalDivisor

const luckyNumber = (num1, num2) => {
    lucky_number = Math.floor(num1/num2);
    return lucky_number;
}

luckyNumber(globalCount, day);
console.log(`Your Lucky Number is ${lucky_number}`);


// const luckyNumberForDay = (num1,num2) => {
//     luckyNumForDay += Math.round(num1/num2);
//     return luckyNumForDay;
// }

// luckyNumberForDay(globalCount, dayOfWeek);
// console.log(`Your Lucky Number for today is: ${luckyNumForDay}`);
