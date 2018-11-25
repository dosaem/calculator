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
      if (numArray.length == operArray.length) {
        numArray.push(Number(num));
        _newView();
      } else {
        var numStr = String(numArray.pop());
        numArray.push(Number(numStr + num));
        if (num == ".") {
          numArray.push(String(numArray.pop() + num));
        }
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
      console.log(numArray);
      console.log(operArray);
      if (
        lastOper &&
        currOper != "=" &&
        _compareOper(lastOper, currOper) >= 0
      ) {
        _numPush();
        _newView();
        operArray.push(currOper);
        console.log(numArray);
        console.log(operArray);
        if (operArray.length == 2) {
          tempOper = operArray.pop();
          _numPush();
          _view.innerHTML = numArray[0];
          operArray.push(tempOper);
        }
        console.log(1);
      } else if (
        lastOper &&
        currOper != "=" &&
        _compareOper(lastOper, currOper) == -1
      ) {
        operArray.push(currOper);
        console.log(2);
      } else if (currOper == "=") {
        _numPush();
        operArray.pop();
        _newView();
        console.log(3);
      } else {
        operArray.push(currOper);
        console.log(4);
      }
      console.log(numArray);
      console.log(operArray);
    }

    function _handleInputEtc() {
      var etc = this.innerHTML;
      if (etc == "AC") {
        numArray = [0];
        operArray = [];
        _view.innerHTML = 0;
        lastOper = null;
        currOper = null;
      } else if (etc == "%") {
        var percentView = numArray.pop() / 100;
        numArray.push(percentView);
        _newView();
      } else if (etc == "+/-") {
        var pm = numArray.pop();
        if (pm < 0) {
          numArray.push(Math.abs(pm));
          _newView();
        } else {
          numArray.push((pm *= -1));
          _newView();
        }
      }
    }

    return {
      init: _init,
      handleInputNumber: _handleInputNumber,
      handleInputOper: _handleInputOper,
      handleInputEtc: _handleInputEtc
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
        col.addEventListener("click", calculator.handleInputEtc, false);
      }
    });
  });
})();
