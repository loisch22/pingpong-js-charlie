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
