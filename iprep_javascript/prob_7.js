// Problem 7
// what is logged out to the console

var myCar = {
    color: "Blue",
    logColor: function() {
      // 'this' references myCar object
        var self = this;
        console.log("In logColor - this.color: " + this.color);
        console.log("In logColor - self.color: " + self.color);
        // IIFE
        (function() {
          // reaching for global scope where property is not defined
            console.log("In IIFE - this.color: " + this.color);
            console.log("In IIFE - self.color: " + self.color);
        })();
    }
};

myCar.logColor();
