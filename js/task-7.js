// Напиши скрипт, который реагирует на изменение значения input#font-size-control
// (событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const rangeControl = document.querySelector("#font-size-control");
const textMessage = document.querySelector("#text");

rangeControl.value = 16;

rangeControl.addEventListener("input", () => {
  textMessage.style.fontSize = `${rangeControl.value}px`;
});
