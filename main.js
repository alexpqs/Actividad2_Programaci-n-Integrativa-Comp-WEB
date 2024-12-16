//Componente main.js
export class AppMain extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 1rem;
        }
      </style>
      <slot name="page"></slot>
    `;
  }
}
customElements.define('app-main', AppMain);