/*header.js*/
export class AppHeader extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        header {
          background: #007acc;
          color: white;
          padding: 1rem;
          text-align: center;
        }
      </style>
      <header>
        <h1>Custom Elements Web App</h1>
      </header>
    `;
  }
}
customElements.define('app-header', AppHeader);