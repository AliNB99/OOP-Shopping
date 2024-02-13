import Display from "./Display.js";

class Cart extends Display {
  constructor(parent, totalPrice) {
    super(parent);
    this.selectedProduct = JSON.parse(localStorage.getItem("products")) || [];
    this.show = [];
    this.totalPrice = totalPrice;
  }

  showCart() {
    this.show = this.selectedProduct.filter((p) => p.quantity !== 0);
    localStorage.setItem("products", JSON.stringify(this.show));

    if (!this.show.length) {
      this.parent.innerHTML = "<h5>Empty</h5>";
      this.totalPrice.innerText = "$0";
    } else {
      this.parent.innerHTML = "";

      this.show.forEach((product) => {
        const qty = product.quantity;
        this.createCart(product, qty);
      });
      this.totalPrice.innerHTML = this.calcPrice();
    }
  }

  cartInfo(product) {
    const { name, price } = product;
    const infoJSX = `
      <div id="cart-info">
        <h4>${name}</h4>
        <span>$ ${price}</span>
      </div>
    `;

    return infoJSX;
  }

  cartControl(product, qty) {
    const { id } = product;
    const controlJSX = `
      <div id="cart-control">
        <div>
          <button data-id=${id}>+</button>
          <span>${qty}</span>
          <button data-id=${id}>-</button>
        </div>
          <button data-id=${id}>Remove</button>
      </div>
    `;
    return controlJSX;
  }

  handleEvent(event) {
    if (event.target.tagName !== "BUTTON") return;
    const { id } = event.target.dataset;
    const type = event.target.innerText;

    switch (type) {
      case "+":
        this.increase(id);
        break;
      case "-":
        this.decrease(id);
        break;
      case "Remove":
        this.remove(id);
        break;
    }
  }

  increase(id) {
    const productIndex = this.selectedProduct.findIndex((i) => i.id === +id);
    this.selectedProduct[productIndex].quantity++;
    this.showCart();
  }

  decrease(id) {
    const productIndex = this.selectedProduct.findIndex((i) => i.id === +id);
    this.selectedProduct[productIndex].quantity--;
    this.showCart();
  }

  remove(id) {
    const newProducts = this.selectedProduct.filter((i) => i.id !== +id);
    this.selectedProduct = newProducts;
    this.showCart();
  }

  calcPrice() {
    const totalPrice = this.selectedProduct.reduce(
      (acc, cur) => (acc += cur.price * cur.quantity),
      0
    );
    const result = "$" + totalPrice;
    return result;
  }
}

export default Cart;
