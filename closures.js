// Problems
// Create a function called toggler using closures
// function toggler(){ ... }
// const toggle = toggler(1,2,3)

// toggle() // 1 toggle() // 2 toggle() // 3 // the next time you toggle it the output is 1 toggle() // 1 toggle() // 2

function toggler(){
    let arr = arguments;
    let i = 0;
    return () => {
        if(i === arr.length){
            i = 0;
        }
        return arr[i++]
    }

}
const toggle = toggler("on","off");
console.log('toggle: ', toggle());
console.log('toggle: ', toggle());
console.log('toggle: ', toggle());
console.log('toggle: ', toggle());

const toggle2 = toggler(1,2,3);
console.log('toggle2: ', toggle2());
console.log('toggle2: ', toggle2());
console.log('toggle2: ', toggle2());
console.log('toggle2: ', toggle2());


// What are IIFE?
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The name IIFE is promoted by Ben Alman in his blog.

//example

(function IIFE(){
    console.log('this is example for IIFE');
})();

// It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:

// The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). 
// This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// The second part creates the immediately invoked function expression () through which the JavaScript 
// engine will directly interpret the function.
//
//
//
//
//
//
//
//
//
// What is currying?
// It is a transformatio of a function with multiple arguments 
// into several functions of single arguments


function normal(x,y,z){
    return x+y+z
}

// Normal way for funtion with multiple arguments
console.log(normal(1,5,9)); // output 15


// 
function currying(x){
    return function(y){
        return function(z){
            return x+y+z
        }
    }
}

// calling by Currying (in sequential manner)
console.log(currying(1)(5)(9));