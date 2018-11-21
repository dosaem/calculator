(function() {
  var calculator = (function() {
    var _view = null;
    var numArray = [0];
    var operArray = [];

    function _init(view) {
      _view = view;
    }

    function _handleInputNumber() {
      var num = this.innerHTML;

      // 새로운 숫자 입력
      if (numArray.length == operArray.length) {
        console.log("hi");
        numArray.push(Number(num));
        _newView();
      } else {
        // 합치는 경우
        var numStr = String(numArray.pop());
        numArray.push(Number(numStr + num));
        _newView();
      }
    }

    function _getOperWeigth(oper) {
      return oper === "+" || oper === "-" ? 0 : 1;
    }

    function _compareOper(oper1, oper2) {
      if (_getOperWeigth(oper1) > _getOperWeigth(oper2)) {
        return 1;
      } else if (_getOperWeigth(oper1) == _getOperWeigth(oper2)) {
        return 0;
      }

      return -1;
    }

    function _calculator(num2, num1, oper) {
      switch (oper) {
        case "+":
          return num1 + num2;
        case "-":
          return num1 - num2;
        case "*":
          return num1 * num2;
        case "/":
          return num1 / num2;
      }
    }

    function _numPush() {
      numArray.push(
        _calculator(numArray.pop(), numArray.pop(), operArray.pop())
      );
    }

    function _newView() {
      _view.innerHTML = numArray[operArray.length];
    }

    function _handleInputOper() {
      var lastOper = operArray[operArray.length - 1];
      var currOper = this.innerHTML;

      if (
        lastOper &&
        currOper != "=" &&
        _compareOper(lastOper, currOper) >= 0
      ) {
        _numPush();
        _newView();
        operArray.push(currOper);
      } else if (currOper == "=") {
        _numPush();
        operArray.pop();
        _newView();
      } else {
        operArray.push(currOper);
      }
    }

    return {
      init: _init,
      handleInputNumber: _handleInputNumber,
      handleInputOper: _handleInputOper
    };
  })();

  window.addEventListener("DOMContentLoaded", function() {
    calculator.init(document.getElementById("ivalue"));

    var cols = document.querySelectorAll("div.calculator-button > button");

    Array.prototype.forEach.call(cols, function(col) {
      if (col.dataset.numvalue) {
        col.addEventListener("click", calculator.handleInputNumber, false);
      } else if (col.dataset.opervalue) {
        col.addEventListener("click", calculator.handleInputOper, false);
      } else {
      }
    });
  });
})();
