 // PROBLEM 3  
 // what is alerted to the screen when button 5 is clicked? why? 
 
 function createButtons() {
  for (var i = 1; i <= 5; i++) {
    var body = document.getElementsByTagName("BODY")[0];
    var button = document.createElement("BUTTON");
    button.innerHTML = 'Button ' + i;
    // this i is already at 6 by the time it gets to the click portion of the code
    button.onclick = function() {
         alert('This is button ' + i);
    }
    body.appendChild(button);
  }
}

createButtons();

 // Soluiton 1 - IIFE 

function createButtons() {
  for (var i = 1; i <= 5; i++) {
    var body = document.getElementsByTagName("BODY")[0];
    var button = document.createElement("BUTTON");
    button.innerHTML = 'Button ' + i;
   
    (function(num) {
       button.onclick = function() {
         alert('This is button ' + num);
    };
    // the current i 
    })(i);

    
    body.appendChild(button);
  }
}

createButtons();

// Solution 2 - add a function 

function createButtons() {
  for (var i = 1; i <= 5; i++) {
    var body = document.getElementsByTagName("BODY")[0];
    var button = document.createElement("BUTTON");
    button.innerHTML = 'Button ' + i;
    addClickFunctionality(button, i);
    body.appendChild(button);
  }
}

createButtons();

function addClickFunctionality(button, num){
  button.onclick = function() {
    alert('This is button ' + num);
  }
}

 // Solution 3 - 'let' 

 function createButtons() {
   //let is block scoped, not function scoped
    for (let i = 1; i <= 5; i++) {
      var body = document.getElementsByTagName("BODY")[0];
      var button = document.createElement("BUTTON");
      button.innerHTML = 'Button ' + i;
      button.onclick = function() {
           alert('This is button ' + i);
      }
      body.appendChild(button);
    }
 }
  
 createButtons();