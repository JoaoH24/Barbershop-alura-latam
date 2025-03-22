class Contact extends HTMLElement {
  constructor() {
    super();
    this.contactDescription = this.getAttribute("text-description");
    this.addresIcon = this.getAttribute("addres-icon");
    this.emailIcon = this.getAttribute("email-icon");
    this.phoneIcon = this.getAttribute("phone-icon");
    this.workingIcon = this.getAttribute("work-icon");
  }

  connectedCallback() {
    this.innerHTML =
      /* HTML */
      `
        <h2 class="abril-regular">CONTACT US</h2>
        <p class="inter-regular">${this.contactDescription}</p>

        <div class="container-contact-items">
          <div>
            <img
              src="assets/images/icons/${this.addresIcon}.png"
              alt="${this.addresIcon}"
            />
            <h4 class="abril-regular">ADDRESS</h4>
            <address class="inter-regular">304 North Cardinal St.</address>
            <address class="inter-regular">Dorchester Center, MA 02124</address>
          </div>
          <div>
            <img
              src="assets/images/icons/${this.emailIcon}.png"
              alt="${this.emailIcon}"
            />
            <h4 class="abril-regular">EMAIL</h4>
            <a class="inter-regular">info@companu.com</a>
          </div>
          <div>
            <img
              src="assets/images/icons/${this.phoneIcon}.png"
              alt="${this.phoneIcon}"
            />
            <h4 class="abril-regular">PHONE</h4>
            <p class="inter-regular">(+63) 555 1212</p>
            <p class="inter-regular">(+63) 555 1212</p>
          </div>
          <div>
            <img
              src="assets/images/icons/${this.workingIcon}.png"
              alt="${this.workingIcon}"
            />
            <h4 class="abril-regular">WORKING HOURS</h4>
            <p class="inter-regular">Mon - Fri: 10am - 6pm</p>
            <p class="inter-regular">Sat - Sun: 10am - 6pm</p>
          </div>
        </div>
      `;
  }
}

customElements.define("contact-comp", Contact);
