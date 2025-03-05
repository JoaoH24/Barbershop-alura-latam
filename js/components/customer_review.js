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
          src="/assets/images/customers/${this.imageCustomer}"
          alt="customer-image"
        />
        <p>${this.reviewCustomer}</p>
        <p>${this.nameCustomer}</p>
      `;
  }
}

customElements.define("customer-review", customerReview);
