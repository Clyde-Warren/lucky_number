/*
-Write a function that takes a name and:
    a)strips all white space
    b)converts it to lower case
 */

const nameConvertor = (name) =>{
    name = (name.split(' ').join('')).toLowerCase();
    return name;
}

const newOuput = nameConvertor("Clyde  Warren Govender");
console.log(newOuput);

const d = new Date();
console.log(d.getDay());