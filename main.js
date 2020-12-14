'use strict';

console.log('Hello Functions-2');
/* Function Syntaxes */

/*
A function is a value representing an “action”
Regular values like strings or numbers represent the data.

A function can be perceived as an action.

We can pass it between variables and run when we want.
 */

//Function Declaration
//This is function declaration
//First function deceleration method can be called everywhere (even 
//before then the definition)

//Other 2 function deceleration methods can be called after the definition
/* 
myFirstFunc(33);
mySecFunc(34);
myThirdFunc(35);
 */

function myFirstFunc(param) {
    alert(param);
}

//Function Expression : Functions declarations as values
//This is assignment expression
const mySecFunc = function (param) {
    //Hey
    alert(param);
};

const myThirdFunc = (param) => {
    alert(param);
    //return('Maria');
};

myFirstFunc(33);
mySecFunc(34);
myThirdFunc(35);

console.log(typeof(myFirstFunc)); //function
console.log(typeof(mySecFunc)); //function
console.log(typeof(myThirdFunc)); //function

console.log(myFirstFunc);
console.log(mySecFunc);
console.log(myThirdFunc);

alert(myFirstFunc);
alert(mySecFunc);
alert(myThirdFunc());


let age = prompt('How old are you?');

if (age>18) {
    function welcome() {
        alert('Hello');
    }
    //welcome();
} else {

    function welcome() {
        alert('Greetings');
    }
    //welcome();
}

//welcome(); Error welcome is not defined
//let welcome;

let welcome;

if (age>18) {
    welcome = function() {
        alert('Hello');
    }
    //welcome();
} else {

    welcome = function() {
        alert('Greetings');
    }
    //welcome();
}

welcome(); //works as well


const myFunc = function (x,y) {
    return x + y;
}

const myArFunc = (x,y) => {
    return x + y
}

const myArFunc2 = (x,y) => x + y;

//const myArFunc2 = (x,y) => x + y;   //returns x+y
//const myArFunc2 = (x,y) => {x + y}; //calculates but not return x+y

const myArFunc3 = x => x*5;


/* 
//SAME AS NEXT BLOCK
x => x*5;

//SAME AS PREVIOUS LINE
function (x) {
    return x*5;
}
 */