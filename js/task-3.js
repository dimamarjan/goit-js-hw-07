const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const mainGalery = document.querySelector("#gallery");
mainGalery.classList.add("gallery");

const galeryElements = images.map((element) => {
  const galeryElementLi = `<li><img src="${element.url}" alt="${element.alt}"> </li>`;
  return galeryElementLi;
});

mainGalery.insertAdjacentHTML("afterbegin", galeryElements.join(""));

const galeryItem = document.querySelectorAll("img");
galeryItem.forEach((element) => element.classList.add("galery-item"));
