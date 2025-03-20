class Service extends HTMLElement {
  constructor() {
    super();
    this.imageService = this.getAttribute("img-service");
    this.nameService = this.getAttribute("name-service");
    this.descriptionService = this.getAttribute("description-service");
  }

  connectedCallback() {
    this.innerHTML =
      /* HTML */
      `
        <div class="service">
          <img
            class="icon-service"
            src="./assets/images/icons/${this.imageService}"
            alt="${this.imageService}"
          />
          <h4 class="name-service abril-regular">${this.nameService}</h4>
          <p class="description-service inter-regular">
            ${this.descriptionService}
          </p>
        </div>
      `;
  }
}

customElements.define("service-comp", Service);
