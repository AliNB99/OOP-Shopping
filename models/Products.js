import Display from "./Display.js";

class Products extends Display {
  constructor(parent, products, cart) {
    super(parent, products);
    this.cart = cart;
  }

  showProducts() {
    this.products.forEach((product) => this.createCart(product));
  }

  cartInfo(product) {
    const { id, name, price } = product;
    const infoJSX = `
      <div id="product-info">
        <h3>${name}</h3>
        <div>
          <span>$ ${price}</span>
          <button data-id=${id}>+</button>
        </div>
      </div>
    `;
    return infoJSX;
  }

  addToCart(id) {
    const product = this.products.find((i) => i.id === +id);
    const productSelectedIndex = this.cart.selectedProduct.findIndex(
      (p) => p.id === product.id
    );

    if (productSelectedIndex > -1) {
      this.cart.selectedProduct[productSelectedIndex].quantity++;
    } else {
      this.cart.selectedProduct.push({ ...product, quantity: 1 });
    }

    console.log(this.cart.selectedProduct);
  }

  handleEvent(event) {
    if (event.target.tagName !== "BUTTON") return;
    const { id } = event.target.dataset;
    this.addToCart(id);
    this.cart.showCart();
  }
}

export default Products;
