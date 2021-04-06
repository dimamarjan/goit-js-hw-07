const inputField = document.querySelector("#controls>input");
const renderBtn = document.querySelector("button[data-action='render'");
const destroyBtn = document.querySelector("button[data-action='destroy'");
const controlPanel = document.querySelector("#controls");
const blocksSection = document.querySelector("#boxes");

controlPanel.style.marginBottom = "10px";

const lasElemArry = (arr) => arr[arr.length - 1];

function createBoxes(amount) {
  let blocksContainer = [
    {
      width: 30,
      height: 30,
      color: "#" + (((1 << 24) * Math.random()) | 0).toString(16),
    },
  ];
  if (amount === 1) return blocksContainer;
  for (let i = 0; amount - 1 > i; i++) {
    const widthBlock = lasElemArry(blocksContainer).width + 10;
    const heightBlock = lasElemArry(blocksContainer).height + 10;
    const colorBlock = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
    blocksContainer.push({
      width: widthBlock,
      height: heightBlock,
      color: colorBlock,
    });
  }
  return blocksContainer;
}

function destroyBoxes() {
  while (blocksSection.firstChild) {
    blocksSection.removeChild(blocksSection.firstChild);
  }
}

renderBtn.addEventListener("click", () => {
  destroyBoxes();
  if (inputField.value > 0) {
    if (blocksSection.firstChild) {
      destroyBoxes();
    }
    let boxesArr = [];
    const boxes = createBoxes(inputField.value);
    boxes.forEach((element) => {
      const box = document.createElement("div");
      box.style.display = "block";
      box.style.width = `${element.width}px`;
      box.style.height = `${element.height}px`;
      box.style.backgroundColor = element.color;
      boxesArr.push(box);
    });
    blocksSection.append(...boxesArr);
  }
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
  inputField.value = "";
});
