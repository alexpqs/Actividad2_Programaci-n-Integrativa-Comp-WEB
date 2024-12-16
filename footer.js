/*Componente footer.js*/
export class AppFooter extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        footer {
          background: #333;
          color: white;
          padding: 1rem;
          text-align: center;
          position: fixed;
          bottom: 0;
          width: 100%;
        }
      </style>
      <footer>
        <p>&copy; 2024 Todos los derechos reservados</p>
      </footer>
    `;
  }
}
customElements.define('app-footer', AppFooter);