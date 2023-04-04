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
            @import url('../src/input.css');
            </style>
            <nav class ="bg-blue-100">
                <img class="logo" src="../images/logo/logo_emma_pierre.png"></img>
                <a href="/">Accueil</a>
                <a href="/about">À propos</a>
                <a href="/contact">Contact</a>
            </nav>
        `;
    }
  }
  
  customElements.define('navbar-component', NavbarComponent);
  