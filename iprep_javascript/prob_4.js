 // Problem 4 
 // What is closure? 
 
 // an inner function that has access to the scope
 // of the enclosing function 

 // Example 1 

 function OuterFunction() {

    var outerVariable = 100;

    function InnerFunction() {
        alert(outerVariable);
    } // closure

    return InnerFunction;
}
var innerFunc = OuterFunction();

innerFunc(); // 100

// Three scopes closure has access to: 
// 1. variables in its own scope
// 2. variables in the scope of an outer function 
// 3. variables in the global scope 

// The closure also has access to: 
// 1. Its own parameters
// 2. Parameters of the outer function(s)

// Example 2

const globalVariable = 'global var';
 
function outterFunc(param1) {
  const variable1 = 'var one';
  
  function innerFunc(param2) {
    const variable2 = 'var two';
    
    console.log('globalVariable: ', globalVariable);
    console.log('variable1: ', variable1);
    console.log('variable2: ', variable2);
    console.log('param1: ', param1);
    console.log('param2: ', param2);
  }
  
  innerFunc('param one');
}
 
outterFunc('param two');