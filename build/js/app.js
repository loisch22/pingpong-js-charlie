(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};

Calculator.prototype.addition = function(num, num2) {
  return num + num2;
};

Calculator.prototype.subtraction = function(num, num2) {
  return num - num2;
};

Calculator.prototype.division = function(num, num2) {
  return num / num2;
};

Calculator.prototype.multiplication = function(num, num2) {
  return num * num2;
};

exports.calculatorModule = Calculator;

},{}],2:[function(require,module,exports){
var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });

  $('#calc-form-num').submit(function(event){
    event.preventDefault();
    var simpleCalculator = new Calculator("neon");
    var operation = $(this).find("button[type=submit]:focus").val();
    var num1 = parseInt($('#num').val());
    var num2 = parseInt($('#num2').val());
    var output = 0;

    switch(operation) {
      case 'addition':
        output = simpleCalculator.addition(num1, num2);
        break;
      case 'subtraction':
        output = simpleCalculator.subtraction(num1, num2);
        break;
      case 'multiplication':
        output = simpleCalculator.multiplication(num1, num2);
        break;
      case 'division':
        output = simpleCalculator.division(num1, num2);
        break;
    }

    $('#solution').append('<li>' + output + '</li>');
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

},{"./../js/pingpong.js":1}]},{},[2]);
