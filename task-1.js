const allCattegies = document.querySelector("#categories");

const liItem = document.getElementsByTagName("h2");

const allItems = document.querySelectorAll(".item");

for (let item = 0; liItem.length > item; item++) {
  console.log(liItem[item].textContent);
}

console.log(liItem);

// console.log(allItems);

// allItems.forEach((item) => console.log(item));
