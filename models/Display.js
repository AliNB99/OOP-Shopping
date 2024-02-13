class Display {
  constructor(parent, products) {
    this.parent = parent;
    this.products = products;
    this.parent.addEventListener("click", this);
  }

  createCart(product, qty) {
    const cartEle = document.createElement("div");
    cartEle.innerHTML = this.cartImg(product);
    cartEle.innerHTML += this.cartInfo(product);

    if (this.constructor.name === "Cart") {
      cartEle.innerHTML += this.cartControl(product, qty);
    }

    this.parent.appendChild(cartEle);
  }

  cartImg(product) {
    const { image, alt } = product;

    const imgJSX = `<img src=${image} alt=${alt}/>`;
    return imgJSX;
  }
}

export default Display;
