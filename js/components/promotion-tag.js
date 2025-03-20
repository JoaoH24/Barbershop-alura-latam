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
          <h4 class="abril-regular">${this.namePromo}</h4>
          <p class="inter-regular">${this.descriptionPromo}</p>
          <button class="inter-regular">Book now</button>
        </div>
        <div>
          <img
            src="./assets/images/photos/${this.imagePromo}"
            alt="image promotion"
          />
        </div>
      `;
  }
}

customElements.define("promotion-tag", promotionTag);
