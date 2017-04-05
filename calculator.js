function Calculator() {

  var equation = [];
  var symbol = " ";
  var result = 0;

  this.getEquation = function() {
    return equation;
  }

  this.getSymbol = function() {
    return symbol;
  }

  this.getResult = function() {
    return result;
  }

  this.cleanAll = function() {
    equation = [];
    symbol = '';
    result = 0;
  }

  this.deleteLastSign = function() {
    equation.pop();
    symbol = '';
  }

  this.numberInsered = function(entry) {
    if (equation[equation.length-2] == "=") {
      symbol = '';
      equation = [];
      result = 0;
    }
    symbol += entry;
  }

  this.ariphmeticSignInsered = function(entry) {
    if (symbol) {
      equation.push(Number(symbol));
    }
    if (equation && typeof equation[equation.length-1] !== "number") {
      equation.pop();
    }
    if (equation[equation.length-3] == "=") {
      equation = [result];
      result = 0;
    }
    equation.push(entry);
    symbol = "";
  }

  this.calculationResult = function() {
    equation.push(Number(symbol), "=");
    result = equation[0];
    for (var i = 1; i < equation.length; i++) {
      if (equation[i] == "/") {
        result /= equation[i+1];
      } else if (equation[i] == "*") {
         result *= equation[i+1];
      } else if (equation[i] == "+") {
        result += equation[i+1];
      } else if (equation[i] == "-") {
        result -= equation[i+1];
      }
    }
    equation.push(result);
    symbol = result;
  }
}