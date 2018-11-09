window.addEventListener("DOMContentLoaded", function() {
  var calculator = {
    numbers: [0],
    operators: [],
    _getLastNumber: function() {
      return this.numbers[this.numbers.length - 1];
    },
    _getLastOperator: function() {
      return this.operators[this.operators.length - 1];
    },
    _concatNumber: function(num, str) {
      return parseInt(String(num) + str, 10);
    },
    _calculate: function(operator, right, left) {
      switch (operator) {
        case "add":
          return left + right;
        case "substract":
          return left - right;
        case "multiply":
          return left * right;
        case "divide":
          return left / right;
      }
    },
    _handleLowerPriorityOperator: function() {
      var numberCount = this.numbers.length;
      var operatorCount = this.operators.length;

      if (numberCount === operatorCount) {
        this.operators.pop();
      } else if (operatorCount && numberCount > operatorCount) {
        this.numbers.push(
          this._calculate(
            this.operators.pop(),
            this.numbers.pop(),
            this.numbers.pop()
          )
        );
      } else {
        console.log(this.numbers, this.operators);
      }

      return this;
    },
    _isHigherPriorityOperator: function() {
      var op = this._getLastOperator();
      return op === "multiply" || op === "divide";
    },
    _handleHigherPriorityOperator: function() {
      var numberCount = this.numbers.length;
      var operatorCount = this.operators.length;

      if (numberCount === operatorCount) {
        this.operators.pop();
      } else if (
        operatorCount &&
        numberCount > operatorCount &&
        this._isHigherPriorityOperator()
      ) {
        this.numbers.push(
          this._calculate(
            this.operators.pop(),
            this.numbers.pop(),
            this.numbers.pop()
          )
        );
      } else {
        console.log(this.numbers, this.operators);
      }

      return this;
    },
    inputValue: function(input) {
      if (this.numbers.length === this.operators.length) {
        this.numbers.push(parseInt(input, 10));
      } else {
        this.numbers.push(this._concatNumber(this.numbers.pop(), input));
      }

      return this;
    },
    clear: function() {
      this.numbers = [0];
      this.operators = [];
      return this;
    },
    toggleSign: function() {
      this.numbers.push(this.numbers.pop() * -1);
      return this;
    },
    percent: function() {
      this.numbers.push(this.numbers.pop() / 100);
      return this;
    },
    add: function() {
      this._handleLowerPriorityOperator();
      this.operators.push("add");
      return this;
    },
    substract: function() {
      this._handleLowerPriorityOperator();
      this.operators.push("substract");
      return this;
    },
    multiply: function() {
      this._handleHigherPriorityOperator();
      this.operators.push("multiply");
      return this;
    },
    divide: function() {
      this._handleHigherPriorityOperator();
      this.operators.push("divide");
      return this;
    },
    enter: function _enter() {
      if (this.operators.length === 0) return this;

      if (this.operators.length === this.numbers.length) {
        this.operators.pop();
      } else {
        this.numbers.push(
          this._calculate(
            this.operators.pop(),
            this.numbers.pop(),
            this.numbers.pop()
          )
        );
      }

      _enter.call(this);
    }
  };

  var $view = document.getElementById("ivalue");

  function click() {
    var operator = this.dataset.operator;
    if (operator) {
      calculator[operator].call(calculator);
    } else {
      calculator.inputValue(this.innerHTML);
    }

    $view.innerHTML = calculator._getLastNumber();
  }

  Array.prototype.forEach.call(
    document.querySelectorAll("div.calculator-button > button"),
    function(col) {
      col.addEventListener("click", click, false);
    }
  );
});
