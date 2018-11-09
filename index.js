window.addEventListener("DOMContentLoaded", function() {
  var calculator = (function() {
    var numbers = [0];
    var operators = [];

    function _getLastOperator() {
      return operators[operators.length - 1];
    }

    function _concatNumber(num, str) {
      return parseInt(String(num) + str, 10);
    }

    function _calculate(operator, right, left) {
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
    }

    function _disposeOperator(cond) {
      var numberCount = numbers.length;
      var operatorCount = operators.length;

      if (numberCount === operatorCount) {
        operators.pop();
      } else if (operatorCount && numberCount > operatorCount && cond()) {
        numbers.push(_calculate(operators.pop(), numbers.pop(), numbers.pop()));
      } else if (operatorCount !== 0) {
        throw "error~";
      }
    }

    function _isHigherPriorityOperator() {
      var op = _getLastOperator();
      return op === "multiply" || op === "divide";
    }

    return {
      inputValue: function(input) {
        if (numbers.length === operators.length) {
          numbers.push(parseInt(input, 10));
        } else {
          numbers.push(_concatNumber(numbers.pop(), input));
        }
        return this;
      },
      clear: function() {
        numbers = [0];
        operators = [];
        return this;
      },
      toggleSign: function() {
        numbers.push(numbers.pop() * -1);
        return this;
      },
      percent: function() {
        numbers.push(numbers.pop() / 100);
        return this;
      },
      add: function() {
        _disposeOperator(function() {
          return true;
        });
        operators.push("add");
        return this;
      },
      substract: function() {
        _disposeOperator(function() {
          return true;
        });
        operators.push("substract");
        return this;
      },
      multiply: function() {
        _disposeOperator(_isHigherPriorityOperator);
        operators.push("multiply");
        return this;
      },
      divide: function() {
        _disposeOperator(_isHigherPriorityOperator);
        operators.push("divide");
        return this;
      },
      enter: function _enter() {
        if (operators.length === 0) return this;

        if (operators.length === numbers.length) {
          operators.pop();
        } else {
          numbers.push(
            _calculate(operators.pop(), numbers.pop(), numbers.pop())
          );
        }

        _enter.call(this);
      },
      getNumber: function() {
        return numbers[numbers.length - 1];
      }
    };
  })();

  var $view = document.getElementById("ivalue");

  function click() {
    var operator = this.dataset.operator;
    if (operator) {
      calculator[operator].call(calculator);
    } else {
      calculator.inputValue(this.innerHTML);
    }

    $view.innerHTML = calculator.getNumber();
  }

  Array.prototype.forEach.call(
    document.querySelectorAll("div.calculator-button > button"),
    function(col) {
      col.addEventListener("click", click, false);
    }
  );
});
