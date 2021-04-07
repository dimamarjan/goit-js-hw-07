const inputField = document.querySelector("#controls>input");
const renderBtn = document.querySelector("button[data-action='render'");
const destroyBtn = document.querySelector("button[data-action='destroy'");
const controlPanel = document.querySelector("#controls");
const blocksSection = document.querySelector("#boxes");

let boxContainer = [];
let boxesDivArray = [];

controlPanel.style.marginBottom = "10px";

const lasElemArry = (arr) => arr[arr.length - 1];

function Element(width = 0, height = 0, color = 0) {
  this.width = width;
  this.height = height;
  this.color = color;
}

const firstArrayBox = [
  new Element(30, 30, "#" + (((1 << 24) * Math.random()) | 0).toString(16)),
];

function createBoxes(amount) {
  let newElementArray = [];
  let tempArrayElements = [];
  if (boxContainer.length === 0) {
    tempArrayElements = new Array(amount).fill(
      new Element(20, 20, "#" + (((1 << 24) * Math.random()) | 0).toString(16))
    );
  } else {
    tempArrayElements = new Array(amount).fill(
      new Element(
        lasElemArry(boxContainer).width,
        lasElemArry(boxContainer).height
      )
    );
  }
  tempArrayElements.forEach((element, index) => {
    newElementArray.push(
      new Element(
        element.width + (index + 1) * 10,
        element.height + (index + 1) * 10,
        "#" + (((1 << 24) * Math.random()) | 0).toString(16)
      )
    );
  });
  boxContainer.push(...newElementArray);
  return (boxesDivArray = newElementArray);
}

function destroyBoxes() {
  boxContainer = [];
  while (blocksSection.firstChild) {
    blocksSection.removeChild(blocksSection.firstChild);
  }
}

renderBtn.addEventListener("click", () => {
  let boxes = [];
  if (inputField.value > 0) {
    createBoxes(parseInt(inputField.value));
    boxesDivArray.forEach((element) => {
      const box = document.createElement("div");
      box.style.display = "block";
      box.style.width = `${element.width}px`;
      box.style.height = `${element.height}px`;
      box.style.border = "0.5px solid black";
      box.style.backgroundColor = element.color;
      boxes.push(box);
    });
    blocksSection.append(...boxes);
  }
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
  inputField.value = "";
});
