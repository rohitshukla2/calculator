let display = document.getElementById("display");
    let currentInput = "";

    function append(value) {
      if (currentInput === "0") currentInput = "";
      currentInput += value;
      display.innerText = currentInput;
    }

    function clearDisplay() {
      currentInput = "";
      display.innerText = "0";
    }

    function backspace() {
      currentInput = currentInput.slice(0, -1);
      display.innerText = currentInput || "0";
    }

    function calculate() {
      try {
        let result = eval(currentInput);
        display.innerText = result;
        currentInput = result.toString();
      } catch (error) {
        display.innerText = "Error";
        currentInput = "";
      }
    }