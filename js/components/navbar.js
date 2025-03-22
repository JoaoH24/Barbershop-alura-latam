class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = /* html */ `
      <nav class="navbar">
        <div>
          <a href="/index.html">
            <img src="/assets/images/Logo.png" alt="Logo empresarial" class="logo" />
          </a>
        </div>
        <div>
          <ul class="inter-regular list-navbar">
            <li class="item-navbar"><a class="links-navbar" href="/index.html">Home</a></li>
            <li class="item-navbar"><a class="links-navbar" href="/pages/services.html">Services</a></li>
            <li class="item-navbar">
              <a class="links-navbar" href="/pages/about.html">About Us</a>
            </li>
            <li class="item-navbar"><a class="links-navbar" href="/pages/blog.html">Blog</a></li>
            <li class="item-navbar">
              <a class="links-navbar" href="/pages/contact.html">Contact Us</a>
            </li>
            <li class="item-navbar">
              <a class="links-navbar" href="/pages/products.html">Products</a>
            </li>
          </ul>
        </div>
        <div>
          <button class="book-appointment">
            <a class="inter-regular links-navbar" href="/pages/appointment.html">BOOK APPOINTMENT</a>
          </button>
        </div>
      </nav>    `;
  }
}

customElements.define("navbar-comp", NavBar);
