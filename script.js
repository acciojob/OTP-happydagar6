const inputs = document.querySelectorAll(".code");

// Ensure first input is focused immediately
window.onload = () => {
  inputs[0].focus();
};

inputs.forEach((input, index) => {

  // Move forward on typing
  input.addEventListener("input", () => {
    if (index < inputs.length - 1 && input.value !== "") {
      inputs[index + 1].focus();
    }
  });

  // Move backward on backspace ALWAYS
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && index > 0) {
      inputs[index - 1].focus();
    }
  });

});
