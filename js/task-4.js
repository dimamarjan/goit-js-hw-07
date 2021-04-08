// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//     Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//     Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//     Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const btnIncrease = document.querySelector("button[data-action=increment]");
const btnDecrease = document.querySelector("button[data-action=decrement]");
const countField = document.querySelector("div>span");

let counterValue = 0;

btnIncrease.addEventListener("click", () => {
  counterValue += 1;
  return (countField.textContent = counterValue);
});

btnDecrease.addEventListener("click", () => {
  counterValue -= 1;
  return (countField.textContent = counterValue);
});
