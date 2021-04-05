const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsList = document.querySelector("#ingredients");

const listElements = ingredients.map((element) => {
  const elementLi = document.createElement("li");
  elementLi.textContent = element;
  return elementLi;
});

ingredientsList.append(...listElements);
