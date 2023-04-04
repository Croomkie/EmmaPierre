class NavbarComponent extends HTMLElement {
  constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
      this.render();
  }

  render() {
      this.shadowRoot.innerHTML = `
          <style>
              .navbar {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  background-color: #333;
                  padding: 1rem;
                  font-family: Arial, sans-serif;
              }

              .navbar a {
                  color: white;
                  text-decoration: none;
                  padding: 0.5rem;
              }

              .navbar a:hover {
                  background-color: #555;
                  border-radius: 5px;
              }
          </style>
          <nav class="navbar">
              <a href="/">Accueil</a>
              <a href="/about">À propos</a>
              <a href="/contact">Contact</a>
          </nav>
      `;
  }
}

customElements.define('navbar-component', NavbarComponent);
