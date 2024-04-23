// import '/index.js');

// import x from './index.js';

// console.log(x);

// const i = require('./index.js');

// console.log(i.z);

const fs = require('fs');
// import { readFile } from 'node:fs';

// const colors = require('colors');

// console.log('hello'.green); // outputs green text
// console.log('i like cake and pies'.underline.red) // outputs red underlined text
// console.log('inverse the color'.inverse); // inverses the color
// console.log('OMG Rainbows!'.rainbow); // rainbow
// console.log('Run the trap'.trap); // Drops the bass



// var colors = require('colors/safe');
 
// console.log(colors.green('hello')); // outputs green text
// console.log(colors.red.underline('i like cake and pies')) // outputs red underlined text
// console.log(colors.inverse('inverse the color')); // inverses the color
// console.log(colors.rainbow('OMG Rainbows!')); // rainbow
// console.log(colors.trap('Run the trap')); // Drops the bass



var colors = require('colors');
 
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});
 

// outputs red text
console.log("this is an error".silly);
 
// outputs yellow text
console.log("this is a warning".warn);


fs.readFile('file1.txt', 'UTF8', (err, data)=>{
    if(err){
        console.log(err)
    }else{
            console.log(data);
    }
})

fs.writeFileSync('file2.txt','This is file two content','utf8')``

// fs.writeFile('file2.txt','second line for file two content','utf8',()=>{
//     console.log('data added successfully');
// })

fs.appendFileSync("file2.txt", "\nSecond line for file two", );




fetch('https://dummyjson.com/products/4')
.then(res => res.json())
.then(data => console.log(data))
            
fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(data=>console.log(data));