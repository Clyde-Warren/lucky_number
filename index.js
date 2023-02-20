const fName = document.getElementById('name');
const dayInput = document.getElementById('dd');
const month = document.getElementById('month')
const year = document.getElementById('year');
const calc = document.getElementById('calc');
const p1 = document.getElementById('fullName');
const p2 = document.getElementById('dayOfBirth');
const reset = document.getElementById('reset');
let globalCount = 0;
let globalDivisor = 0;
let luckyNumber = 0;
let nameValue = 0;
let monthValue = 0;
let dayValue = 0;
let yearValue = 0;
let nameLength = 0;

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

function setValues(){
  nameValue += stringToNumberValue(fName.value);
  console.log(`Name Value is ${nameValue}`);
  globalCount = 0;
  monthValue += stringToNumberValue(month.value);
  console.log(`Your month Value is ${monthValue}`);
  globalCount = 0;
  dayValue += splitNumber(dayInput.value);
  console.log(`Day Value is ${dayValue}`);
  globalCount = 0;
  yearValue += splitNumber(year.value);
  console.log(`Year Value is ${yearValue}`);
  nameLength += lenName(fName.value);
  console.log(`Name length is ${nameLength}`)
  // lucky_number(globalCount,globalDivisor);
  // console.log(luckyNumber);
  p1.innerText = "Your Lucky Numbers are:";
  p2.innerHTML = `${nameValue}, ${monthValue}, ${dayValue}, ${yearValue}, ${nameLength}`;
}

function stringToNumberValue(string){
  let newName = (string.split(' ').join('')).toLowerCase();
  for (let i = 0; i < newName.length; i++){
      if(alphabets.hasOwnProperty(newName[i])){
          globalCount += alphabets[newName[i]];
      }
  }
  return globalCount;
}

const splitNumber = (num) => {
  newNum = num.split('').map(num => Number(num));
  console.log(newNum);
  let result = newNum.reduce((accumulator, currentNum) => {
    return accumulator + currentNum
  }, 0)
  return globalCount += result;
}

const lucky_number = (num1, num2) => {
  luckyNumber += Math.floor(num1/num2);
  // return luckyNumber;
}

 const lenName = (name) => {
  return name.length
}



calc.addEventListener('click', setValues)

const resetValues = () => {
  fName.value = "";
  dayInput.value = ""
  month.value ="";
  year.value = "";
  globalCount = 0;
  p1.innerHTML = "";
  p2.innerHTML = "";
  nameValue = 0;
  monthValue = 0;
  dayValue = 0;
  yearValue = 0;
  nameLength = 0;
}

reset.addEventListener('click', resetValues);

