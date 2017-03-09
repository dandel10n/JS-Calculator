function Calculator() {

  this.equation = [];
  this.symbol = " ";
  this.result = 0;
  var self = this;

  this.cleanAll = function() {
    self.equation = [];
    self.symbol = '';
    self.result = 0;
  }

  this.deleteLastSign = function() {
    self.equation.pop();
    self.symbol = '';
  }

  this.numberInsered = function(entry) {
    if (self.equation[self.equation.length-1] == "=") {
      self.symbol = '';
      self.equation = [];
      self.result = 0;
    }
    self.symbol += entry;
  }

  this.ariphmeticSignInsered = function(entry) {
    if (self.symbol) {
      self.equation.push(Number(self.symbol));
    }
    if (self.equation && typeof self.equation[self.equation.length-1] !== "number") {
      self.equation.pop();
    }
    if (self.equation[self.equation.length-3] == "=") {
      self.equation = [self.result];
      self.result = 0;
    }
    self.equation.push(entry);
    self.symbol = "";
  }

  this.calculationResult = function() {
    self.equation.push(Number(self.symbol), "=");
    self.result = self.equation[0];
    for (var i = 1; i < self.equation.length; i++) {
      if (self.equation[i] == "/") {
        self.result /= self.equation[i+1];
      } else if (self.equation[i] == "*") {
         self.result *= self.equation[i+1];
      } else if (self.equation[i] == "+") {
        self.result += self.equation[i+1];
      } else if (self.equation[i] == "-") {
        self.result -= self.equation[i+1];
      }
    }
    self.equation.push(self.result);
    self.symbol = self.result;
  }
}