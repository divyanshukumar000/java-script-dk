const name = "divyanshu"
const repoCount = 30

// console.log(name + repoCount + "value"); // wrong way to write code 
console.log(`Hello my name is ${name} and my repo is ${repoCount}`);


const gameName = new String ('Divyanshu.ab.com')
console.log(gameName.split('.'));

console.log(gameName[4]);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('6'));
console.log(gameName.indexOf('u'));

const newString = gameName.substring (0,4)
console.log(newString);

const anotherString = gameName.slice (-9,4)
console.log(anotherString);

const newStringOne = "  Divyanshu   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https:divyanshu.com/divyanshu%20seth"
console.log(url.replace('%20',('_')))
console.log(url.includes('seth'));






