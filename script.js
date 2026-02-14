const inputs = document.querySelectorAll(".code");

inputs[0].focus();

inputs.forEach((input, index) => {

  input.addEventListener("input", () => {
    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && index > 0) {
      inputs[index - 1].focus();
    }
  });

});
