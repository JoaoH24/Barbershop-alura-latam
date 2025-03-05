class promotionTag extends HTMLElement {
  constructor() {
    super();
    this.namePromo = this.getAttribute("name-promo");
    this.descriptionPromo = this.getAttribute("description-promo");
    this.imagePromo = this.getAttribute("image-promo");
  }
  connectedCallback() {
    this.innerHTML =
      /* HTML */
      `
        <div>
          <h3>${this.namePromo}</h3>
          <p>${this.descriptionPromo}</p>
        </div>
        <div>
          <img src="./assets/images/photos/" alt="image promotion" />
        </div>
      `;
  }
}

customElements.define("promotion-tag", promotionTag);
