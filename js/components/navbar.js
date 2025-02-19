class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = /* html */ `
      <nav>
        <div>
          <a href="./index.html">
            <img src="/assets/icons/poste-de-barbero.png" alt="Logo empresarial" class="logo" />
          </a>
        </div>
        <div>
          <ul>
            <li class="item-navbar"><a href="./index.html">Home</a></li>
            <li class="item-navbar"><a href="./pages/services.html">Services</a></li>
            <li class="item-navbar">
              <a href="./pages/about.html">About Us</a>
            </li>
            <li class="item-navbar"><a href="./pages/blog.html">Blog</a></li>
            <li class="item-navbar">
              <a href="./pages/contact.html">Contact Us</a>
            </li>
            <li class="item-navbar">
              <a href="./pages/products.html">Products</a>
            </li>
          </ul>
        </div>
        <div>
          <button>
            <a href="./pages/appointment.html">BOOK APPOINTMENT</a>
          </button>
        </div>
      </nav>    `;
  }
}

customElements.define("navbar-comp", NavBar);
