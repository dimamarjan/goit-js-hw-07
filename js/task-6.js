// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

//     Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//     Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid.

const inputField = document.querySelector("#validation-input");

function classListChecker(valueAdd, valueRem) {
  inputField.classList.add(valueAdd);
  if (inputField.classList.contains(valueRem)) {
    inputField.classList.remove(valueRem);
  }
}

inputField.addEventListener("blur", () => {
  if (inputField.value.length === parseInt(inputField.dataset.length)) {
    classListChecker("valid", "invalid");
  }
  if (inputField.value.length !== parseInt(inputField.dataset.length)) {
    classListChecker("invalid", "valid");
  }
});
