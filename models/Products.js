import Display from "./Display.js";

class Products extends Display {
  constructor(products, parent, cart) {
    super(products, parent);
    this.cart = cart;
  }

  showProducts() {
    this.products.forEach((product) => this.createCart(product));
  }

  cartInfo(data) {
    const { id, name, price } = data;
    const infoJSX = `
    <div id="product-info">
        <h3>${name}</h3>
        <div>
            <span>$ ${price}</span>
            <button data-id=${id}>+</button>
        </div>
    </div>`;

    return infoJSX;
  }

  handleEvent(e) {
    if (e.target.tagName !== "BUTTON") return;

    const { id } = e.target.dataset;
    this.addToCart(id);
  }

  addToCart(id) {
    const product = this.products.find((p) => p.id === +id);
    this.cart.selectedProducts.push(product);
    this.cart.showCart();
  }
}

export default Products;
