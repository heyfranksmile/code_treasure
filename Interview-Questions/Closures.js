// What is closures?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// A closure is the combination of a function bundled together 
// (enclosed) with references to its surrounding state (the lexical environment). 
// In other words, a closure gives you access to an outer function’s scope from an inner function
// In JavaScript, closures are created every time a function is created, at function creation time.


// function + its lexical environment =>  forms a closure 

// function "y" was bind to variables of "x" => closure
// it has access to its parents lexical scope 

// They still maintain their lexical scope even when it's not in the call stack.
// The closure => function + its lexical scope 

function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    a = 100; 
    return y 
}
var z = x();  // after running line, "x" is gone. No longer in the call stack
// z : y(){console.log(a)}  
// z still remembers a (reference to a)

// when "x" is gone, it was not garbage collected because it has to be used later.



// How about this?
// Will this still be a closure?
// GO CHECK DEBUGGER!!!


function z(){
    var b = 900;
    function x(){
        var a = 7;
        function y(){
            console.log(a, b); // 100, 900
        }
        a = 100;         
        y()
    }
    x();
}

z();