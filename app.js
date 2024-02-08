// Api
import { getData } from "./utils/httpReq.js";

// Class
import Products from "./models/Products.js";
import Cart from "./models/Cart.js";

// Elements
const productsNode = document.getElementById("products");
const CartNode = document.getElementById("cart");
const totalPriceNode = document.getElementById("total-price");

const render = async () => {
  const ProductsData = await getData();

  const cartInstance = new Cart(CartNode, totalPriceNode);
  const productsInstance = new Products(
    productsNode,
    ProductsData,
    cartInstance
  );
  productsInstance.showProducts();
};

document.addEventListener("DOMContentLoaded", render);
