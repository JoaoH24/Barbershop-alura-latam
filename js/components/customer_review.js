class customerReview extends HTMLElement {
  constructor() {
    super();
    this.imageCustomer = this.getAttribute("image-customer");
    this.reviewCustomer = this.getAttribute("review");
    this.nameCustomer = this.getAttribute("name");
  }

  connectedCallback() {
    this.innerHTML =
      /* HTML */
      `
        <img
          class="client-image"
          src="/assets/images/photos/${this.imageCustomer}"
          alt="customer-image"
        />
        <p class="inter-regular">${this.reviewCustomer}</p>
        <p class="inter-regular">${this.nameCustomer}</p>
      `;
  }
}

customElements.define("customer-review", customerReview);
