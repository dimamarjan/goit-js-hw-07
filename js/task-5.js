// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputForm = document.querySelector("#name-input");
const outputField = document.querySelector("#name-output");

inputForm.addEventListener("input", () =>
  inputForm.value
    ? (outputField.textContent = inputForm.value)
    : (outputField.textContent = "незнакомец")
);
