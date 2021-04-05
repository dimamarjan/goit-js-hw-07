// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//     Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//     Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//     Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const btnIncrease = document.querySelector("button[data-action=increment]");
const btnDecrease = document.querySelector("button[data-action=decrement]");
const countField = document.querySelector("#value");

btnIncrease.addEventListener("click", () => {
  return (countField.textContent = parseInt(countField.textContent) + 1);
});

btnDecrease.addEventListener("click", () => {
  return (countField.textContent = parseInt(countField.textContent) - 1);
});
