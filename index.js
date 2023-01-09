const alphabets = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6
  }
  let sum = 0;
  const myArr = ['a','b'];
  
  
  
  for(let i = 0; i<myArr.length; i++){
    if(alphabets.hasOwnProperty(myArr[i])){
      sum+= alphabets[myArr[i]]
    }
  }
  //console.log(sum);