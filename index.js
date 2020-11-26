// let colors = ["blue", "red","green","yellow","white"];
// console.log(colors[0]); 
// console.log(colors[2]); 
// colors[4]="ultraviolet"; 
// let fourthColor = colors[3]; 
// colors.push("black"); 
// colors. unshift("grey"); 
// console.log(colors.length); 
// colors.pop(); 
// console.log(console.length);
// var i; 
// for (i=0; i<colors.length; i++) {
//     console.log(colors[i]); 
// }
// for (i=0; i<colors.length; i++) {
// console.log(colors[i] + ","+ i);
// };

// let lastColor= colors[colors.length - 1]

// //

// const myPenguin = {
//     name: "Alfred",
//     origin: "Zig et Puce",
//     author: "Alain Saint-Ogan",     
// };

// console.log("Hello, I'm a pengiun and my name is " + myPenguin.name); 

// myPenguin.canFly=false; 

// console.log("CHIRP CHIRP! Is this what penguins sound like?"); 

// myPenguin['chirp'] = function () {
//     console.log("CHIRP CHIRP! Is this what penguins sound like?");
// }

// myPenguin.chirp()

// myPenguin["sayHello"] = function(){
//     console.log("Hello, im a penguin my name is " + this.name)
// }

// myPenguin.sayHello()  = function () {

// myPenguin.fly = function () {
//     if (canFly ) {
//         console.log(" I can fly")

//     } else {
//         console.log("no fly for me"); 
//     }

// for (key in myPenguin)
// console.log(key)

// for (key in myPenguin)
// console.log(myPenguin[key]);

// console.log(myPenguin['name'])

// // Array

// let isArray = function(arr){
//     return (Array.isArray(arr)); 
// }

// let clone_arr= function(arr) {
//     return arr.slice(0)
// }

// let mySecondArr = clone_arr(myArr)

// // overall 

// // 1. what are arrays in javascript and why are they useful? 
// An array is a special variable, which can hold more than one value at a time.
// An array can hold many values under a single name, and you can access the values by referring to an index number.
// You can loop through all the variables and find a specific one. 

// // 2. what are objects in javascript and why are they useful? 
// Object properties can be both primitive values, other objects, and functions.
// An object method is an object property containing a function definition. 
// JavaScript objects are containers for named values, called properties and methods.

// // 3. What are a couple of key differences between objects and arrays? (And can you find any good examples or metaphors that illustrate the difference?)
// Objects represent “things” with characteristics (aka properties), while arrays create and store lists of data in a single variable.
// e.g: var person =  {firstName: "John", lastName: "Doe", age: 30}; 
//     var carBrands  = ["Volvo", "BMW", "Honda"];

// // 4. What is the index of an array? What is it used for?
// to mark each element of the array, to be easily called for when needed. 


// // 5. What is a property?
// The named values, in JavaScript objects, are called properties.
// Properties are the values associated with a JavaScript object. 
// A JavaScript object is a collection of unordered properties. 
// Properties can usually be changed, added, and deleted, but some are read only.

// // 6. What is a method?
// Methods are actions that can be performed on objects.

// Object properties can be both primitive values, other objects, and functions.

// An object method is an object property containing a function definition.

// function with array

// cau 1: 
var is_array = function(input) { 
    if (toString.call(input) == "[object Array]") {
        return true; 
    }
    return false;  
}; 
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

//cau 2: 
var array_Clone = function(arra1) {       
    return arra1.slice(0);
       };
   console.log(array_Clone([1, 2, 4, 0]));
   console.log(array_Clone([1, 2, [4, 0]]));

//cau 3: 
var first =  function(array, n) {
    if (array == null) 
    return void 0;
  if (n == null) 
    return array[0];
  if (n < 0)
    return [];
  return array.slice(0, n);
};

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

//cau 4: 
var last =  function(array, n) {
    if (array == null) 
      return void 0;
    if (n == null) 
       return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));  
    };
  
  console.log(last([7, 9, 0, -2]));
  console.log(last([7, 9, 0, -2],3));
  console.log(last([7, 9, 0, -2],6));

//cau 5: 
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));

//cau 6: 
const num=window.prompt();
const str = num.toString();
const result = [str[0]];
  
for(let x=1; x<str.length; x++)
  {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
     {
      result.push('-', str[x]);
     }
    else
     {
      result.push(str[x]);
     }
  }
console.log(result.join(''));

//cau 7: 
var str = 'c';
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const result = [];
  
  for(let x=0; x<str.length; x++)
  {
    if(UPPER.includes(str[x]))
    {
      result.push(str[x].toLowerCase());
    }
    else if(LOWER.includes(str[x]))
    {
      result.push(str[x].toUpperCase());
    }
    else 
    {
      result.push(str[x]);
    }
  }
console.log(result.join(''));

//cau 8: 
var array = [1, 2, 3, 4, 5, 6],
    s = 0,
    p = 1,
    i;
for (i = 0; i < array.length; i += 1) 
   {
    s += array[i];
    p *= array[i];
    }
console.log('Sum : '+s + ' Product :  ' +p); 

//function with object: 

//cau 1: 
function _keys(obj) {
if (!isObject(obj)) return [];
    if (Object.keys) 
        return Object.keys(obj);

    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  }

  //cau 2: 
  var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
console.log(student);
delete student.rollno; 
console.log(student);


//cau 3: 
Object.size = function(obj) {
    var size = 0, key; 
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 }

var size = object.size(student); 

//cau 4: 
var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];


var readingStatus = function() {
    return library.readingStatus; 
}
console.log(library[readingStatus]); 

//cau 5: 
function my_Clock() 
  {
  this.cur_date = new Date();
  this.hours = this.cur_date.getHours();
  this.minutes = this.cur_date.getMinutes();
  this.seconds = this.cur_date.getSeconds();
  }
my_Clock.prototype.run = function ()
  {
  setInterval(this.update.bind(this), 1000);
  };
my_Clock.prototype.update = function () 
  {
  this.updateTime(1);
  console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
  };
my_Clock.prototype.updateTime = function (secs) 
  {
  this.seconds+= secs;
 if (this.seconds >= 60)
  {
  this.minutes++;
  this.seconds= 0;
  }
 if (this.minutes >= 60)
  {
  this.hours++;
  this.minutes=0;
  }
if (this.hours >= 24)
  {
  this.hours = 0;
  }
};
var clock = new my_Clock();
  clock.run();
  





    








