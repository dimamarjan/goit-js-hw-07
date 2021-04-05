const inputField = document.querySelector("#validation-input");

inputField.addEventListener("blur", () => {
  if (inputField.value.length < parseInt(inputField.dataset.length)) {
    inputField.classList.add("invalid");
  } else {
    inputField.classList = "valid";
  }
});
