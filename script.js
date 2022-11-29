const cheap = document.querySelector(".cheap");
const expensive = document.querySelector(".expensive");
const sums = document.querySelector(".sum");
const adds = document.querySelector(".add");

const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
];

items.filter((item) => {
  if (item.price < 100) {
    cheap.innerHTML += `<p>*${item.name}</p> `;
  }
  if (item.price > 100) {
    expensive.innerHTML += `<p>*${item.name}</p>`;
  }
});

let sum = 0;
items.forEach((i) => {
  sum += i.price;
});
sums.innerHTML += `<p>${sum}</p>`;

let add = 0;
items.forEach((i) => {
  if (i.price > 10) {
    add += i.price;
  }
});
adds.innerHTML += `<p>${add}</p>`;

