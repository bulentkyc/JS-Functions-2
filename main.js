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
