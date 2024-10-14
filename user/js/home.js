const listCategory = [
  {
    id: 1,
    source: "./img/hoa1.jpg",
    name: "Agave 'Victoria Regina Porcupine'",
  },
];
const listBestSelling = [
  {
    id: 1,
    source: "./img/hoa1.jpg",
    name: "Agave 'Victoria Regina Porcupine'",
  },
];
const listHottest = [
  {
    id: 1,
    source: "./img/hoa1.jpg",
    name: "Agave 'Victoria Regina Porcupine'",
  },
];
const listFerntastic = [
  {
    id: 1,
    source: "./img/hoa1.jpg",
    name: "Agave 'Victoria Regina Porcupine'",
  },
];

const category = document.querySelector("#category");
const bestSelling = document.querySelector("#bestSelling");
const hottest = document.querySelector("#hottest");
const ferntastic = document.querySelector("#ferntastic");

const loadData = async () => {
  loadCategory();
  loadBestSelling();
  loadHottest();
  loadFerntastic();
};

const loadCategory = () => {
  let txt = "";
  listCategory.forEach((x) => {
    txt += `<img src=${x.source} alt="Image 1" />`;
  });
  category.innerHTML = txt;
};
const loadBestSelling = () => {
  let txt = "";
  listBestSelling.forEach((x) => {
    txt += `
        <a href="./Infor.html" class="no-decoration">
          <div class="image-wrapper">
            <img src=${x.source} alt="Additional Image 7" />
            <button class="shop-now-btn">Shop Now</button>
          </div>
        </a>
    `;
  });
  bestSelling.innerHTML = txt;
};
const loadHottest = () => {
  let txt = "";
  listHottest.forEach((x) => {
    txt += `
    <div class="image-wrapper">
        <a href="./Infor.html" class="no-decoration">
            <img src=${x.source} alt="Additional Image 7" />
            <button class="shop-now-btn">Buy</button>
        </a>
    </div>
    `;
  });
  hottest.innerHTML = txt;
};
const loadFerntastic = () => {
  let txt = "";
  listFerntastic.forEach((x) => {
    txt += `
      <div class="product">
        <a href="./Infor.html" class="no-decoration">
            <img src=${x.source} alt="String of Hearts" />
            <p${x.name}</p>
            <p class="price">$350 <span class="old-price">$450</span></p>
            <button>Buy</button>
            <div class="discount">25% OFF</div>
        </a>
      </div>
    `;
  });
  ferntastic.innerHTML = txt;
};

window.addEventListener("DOMContentLoaded", loadData);
