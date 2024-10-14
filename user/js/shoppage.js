const listProduct = [
  {
    id: 1,
    source: "./img/hoa1.jpg",
    name: "Agave 'Victoria Regina Porcupine'",
    price: 123333,
  },
  {
    id: 1,
    source: "./img/hoa1.jpg",
    name: "Agave 'Victoria Regina Porcupine'",
    price: 123333,
  },
  {
    id: 1,
    source: "./img/hoa1.jpg",
    name: "Agave 'Victoria Regina Porcupine'",
    price: 123333,
  },
  {
    id: 1,
    source: "./img/hoa1.jpg",
    name: "Agave 'Victoria Regina Porcupine'",
    price: 123333,
  },
  {
    id: 1,
    source: "./img/hoa1.jpg",
    name: "Agave 'Victoria Regina Porcupine'",
    price: 123333,
  },
  {
    id: 1,
    source: "./img/hoa1.jpg",
    name: "Agave 'Victoria Regina Porcupine'",
    price: 123333,
  },
  {
    id: 1,
    source: "./img/hoa1.jpg",
    name: "Agave 'Victoria Regina Porcupine'",
    price: 123333,
  },
  {
    id: 1,
    source: "./img/hoa1.jpg",
    name: "Agave 'Victoria Regina Porcupine'",
    price: 123333,
  },
  {
    id: 1,
    source: "./img/hoa1.jpg",
    name: "Agave 'Victoria Regina Porcupine'",
    price: 123333,
  },
  {
    id: 1,
    source: "./img/hoa1.jpg",
    name: "Agave 'Victoria Regina Porcupine'",
    price: 123333,
  },
  {
    id: 1,
    source: "./img/hoa1.jpg",
    name: "Agave 'Victoria Regina Porcupine'",
    price: 123333,
  },
  {
    id: 1,
    source: "./img/hoa1.jpg",
    name: "Agave 'Victoria Regina Porcupine'",
    price: 123333,
  },
  {
    id: 1,
    source: "./img/hoa1.jpg",
    name: "Agave 'Victoria Regina Porcupine'",
    price: 123333,
  },
  {
    id: 1,
    source: "./img/hoa1.jpg",
    name: "Agave 'Victoria Regina Porcupine'",
    price: 123333,
  },
  {
    id: 1,
    source: "./img/hoa1.jpg",
    name: "Agave 'Victoria Regina Porcupine'",
    price: 123333,
  },
  {
    id: 1,
    source: "./img/hoa1.jpg",
    name: "Agave 'Victoria Regina Porcupine'",
    price: 123333,
  },
  {
    id: 1,
    source: "./img/hoa1.jpg",
    name: "Agave 'Victoria Regina Porcupine'",
    price: 123333,
  },
  {
    id: 1,
    source: "./img/hoa1.jpg",
    name: "Agave 'Victoria Regina Porcupine'",
    price: 123333,
  },
  {
    id: 1,
    source: "./img/hoa1.jpg",
    name: "Agave 'Victoria Regina Porcupine'",
    price: 123333,
  },
  {
    id: 1,
    source: "./img/hoa1.jpg",
    name: "Agave 'Victoria Regina Porcupine'",
    price: 123333,
  },
  {
    id: 1,
    source: "./img/hoa1.jpg",
    name: "Agave 'Victoria Regina Porcupine'",
    price: 123333,
  },
  {
    id: 1,
    source: "./img/hoa1.jpg",
    name: "Agave 'Victoria Regina Porcupine'",
    price: 123333,
  },
  {
    id: 1,
    source: "./img/hoa1.jpg",
    name: "Agave 'Victoria Regina Porcupine'",
    price: 123333,
  },
];
const plants = document.querySelector("#plants");
const moreBtn = document.querySelector("#moreBtn");
let index = 1;

const loadData = () => {
  let _listItem = [...listProduct].slice(0, 6 * index);
  let txt = "";
  _listItem.forEach((x) => {
    txt += `
            <div class="plant" >
                <a href="./Infor.html" class="no-decoration">
                    <img src=${
                      x.source
                    } alt="Agave Victoria Regina Porcupine" />
                    <p>${x.name}</p>
                    <p class="price">${convertNumberToPrice(x.price)}</p>
                </a>
            </div>
      `;
  });
  plants.innerHTML = txt;
};

window.addEventListener("DOMContentLoaded", loadData);

const handleButtonMoreClick = () => {
  index++;
  loadData();
};

moreBtn.addEventListener("click", handleButtonMoreClick);
