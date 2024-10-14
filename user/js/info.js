const title = document.querySelector("#title");
const coverImage = document.querySelector("#coverImage");
const subTitle = document.querySelector("#subTitle");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const quantity = document.querySelector("#quantity");

const item = {
    id: 1,
    title: "title",
    coverImage: "./img/hoa3.jpg",
    subTitle: "subTitle",
    price: "price",
    description: "description",
    quantity: 2,
};

const getDetailProduct = async () => {
    title.innerHTML = item.title;
    coverImage.src = item.coverImage; 
    subTitle.innerHTML = item.subTitle;
    price.innerText = item.price;
    description.innerHTML = item.description;
    quantity.value = item.quantity;
};

window.addEventListener("DOMContentLoaded", getDetailProduct);

const handleAddToCart = () => {

}