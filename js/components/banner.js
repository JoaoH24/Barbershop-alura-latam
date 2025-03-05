class Banner extends HTMLElement {
  constructor() {
    super();
    this.textBanner = this.getAttribute("text-banner");
    this.imageBanner = this.getAttribute("image-banner");
  }

  connectedCallback() {
    this.innerHTML =
      /* HTML */
      `
        <div class="banner">
          <img src="/assets/images/${this.imageBanner}" alt="image on banner" />
          <h2>${this.textBanner}</h2>
        </div>
      `;
  }
}

customElements.define("banner-comp", Banner);
