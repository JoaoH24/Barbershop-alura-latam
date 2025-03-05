class brandsTag extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let imagesHTML = "";

    for (let i = 1; i < 6; i++) {
      imagesHTML += /* HTML */ `<img
        src="/assets/images/brand-${i}.jpg"
        alt="brand-${i}"
      />`;
    }

    this.innerHTML =
      /* HTML */
      `
        <div>
          <h2>BRANDS WE CARRY</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae saepe, natus dolorum sapiente facere dignissimos
            repellendus. Nihil, quae magni impedit suscipit id nemo omnis
            soluta! Tempora natus distinctio voluptatem nesciunt?
          </p>
        </div>
        <div>${imagesHTML}</div>
      `;
  }
}

customElements.define("brands-tag", brandsTag);
