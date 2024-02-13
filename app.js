import Cart from "./models/Cart.js";
import Products from "./models/Products.js";
import { fetchData } from "./utils/httpReq.js";

const productsNode = document.getElementById("products");
const cartNode = document.getElementById("cart-list");
const totalPriceNode = document
  .getElementById("total-price")
  .querySelector("span");
const errorText = document.getElementById("error");

const render = async () => {
  try {
    const productsData = await fetchData();

    if (!productsData) return (loader.style.display = "block");

    const cartInstance = new Cart(cartNode, totalPriceNode);
    const productsInstance = new Products(
      productsNode,
      productsData,
      cartInstance
    );
    productsInstance.showProducts();
    cartInstance.showCart();
  } catch (error) {
    errorText.style.display = "block";
    errorText.innerText = error.message;
  }
};

window.addEventListener("DOMContentLoaded", render);
