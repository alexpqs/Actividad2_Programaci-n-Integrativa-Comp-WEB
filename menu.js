//Componente menu.js
export class AppMenu extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        nav {
          background: #555;
          color: white;
          padding: 0.5rem;
        }
        nav a {
          color: white;
          margin: 0 1rem;
          text-decoration: none;
        }
      </style>
      <nav>
        <a href="compnents/socialProfile.js" data-page="profile">Perfil de usuario</a>
        <a href="#table" data-page="table">Tabla</a>
        <a href="#gallery" data-page="gallery">Galleria Pokemón</a>
      </nav>
    `;
    shadow.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.getAttribute('data-page');
        this.dispatchEvent(new CustomEvent('navigate', { detail: page }));
      });
    });
  }
}
customElements.define('app-menu', AppMenu);