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