class Display {
  constructor(parent, products) {
    if (this.constructor.name === "Display") {
      throw new Error("abstraction classes can't be instantiated");
    }
    this.parent = parent;
    this.products = products;
    this.parent.addEventListener("click", this);
  }

  showCart() {
    this.show = [...new Set(this.selectedProducts)];

    this.show.forEach((p) => {
      const cartJSX = document.createElement("div");
    });
  }

  createCart(data) {
    const cartEle = document.createElement("div");
    cartEle.innerHTML = this.cartImg(data);
    cartEle.innerHTML += this.cartInfo(data);

    this.parent.appendChild(cartEle);
  }

  cartImg(data) {
    const { image, alt } = data;
    const imgJSX = `<img src=${image} alt=${alt}></img>`;
    return imgJSX;
  }

}

export default Display;
