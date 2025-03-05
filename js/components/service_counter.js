class serviceCounter extends HTMLElement {
  constructor() {
    super();
    this.serviceImage = this.getAttribute("img-service");
    this.counter = this.getAttribute("counter");
    this.nameService = this.getAttribute("name-service");
  }

  connectedCallback() {
    this.innerHTML =
      /* HTML */
      `
        <div>
          <img
            src="./assets/images/icons/${this.serviceImage}"
            alt="icon-service"
          />
          <p>${this.counter}</p>
          <p>${this.nameService}</p>
        </div>
      `;
  }
}

customElements.define("service-counter", serviceCounter);
