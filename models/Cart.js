import Display from "./Display.js";

class Cart extends Display {
  constructor(parent, totalPrice) {
    super(parent);
    this.selectedProducts = [];
    this.show = [12];
    this.totalPrice = totalPrice;
  }
}

export default Cart;
