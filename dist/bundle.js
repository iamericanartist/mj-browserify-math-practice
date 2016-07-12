(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function add(a,b) {
  return a + b;
}

module.exports = add;
},{}],2:[function(require,module,exports){
"use strict";

let MathModule = require("./math");

// console.log("MathModule", MathModule);
console.log("adding", MathModule.adding(3,5));
console.log("subtracting", MathModule.subtracting(8,5));
console.log("multiplying", MathModule.multiplying(8,5));
console.log("dividing", MathModule.dividing(40,5));


},{"./math":4}],3:[function(require,module,exports){
"use strict";

function divide(a,b) {
  return a / b;
}

module.exports = divide;
},{}],4:[function(require,module,exports){
"use strict";

let adding = require("./add");
let subtracting = require("./subtract");
let multiplying = require("./multiply");
let dividing = require("./divide");

let Calculator = {
  adding,
  subtracting,
  multiplying,
  dividing
};

module.exports = Calculator;
},{"./add":1,"./divide":3,"./multiply":5,"./subtract":6}],5:[function(require,module,exports){
"use strict";

function multiply(a,b) {
  return a * b;
}

module.exports = multiply;
},{}],6:[function(require,module,exports){
"use strict";

function subtract(a,b) {
  return a - b;
}

module.exports = subtract;
},{}]},{},[2])


//# sourceMappingURL=bundle.js.map
