//Componente socialProfile.js
export class SocialProfile extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
        <style>
          .profile {
            font-family: Arial, sans-serif;
            padding: 1rem;
            border: 1px solid #ddd;
            border-radius: 5px;
            background: #f9f9f9;
            text-align: center;
          }
          .profile img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 1rem;
          }
        </style>
        <div class="profile">
          <img src="Uno.jpg" alt="Imagen de perfil">
          <h2>Perfil de usuario</h2>
          <p>Nombre: Alex Quishpe Salgado</p>
          <p>Teléfono: 0991234567</p>
          <p>Email: apquishpe@espe.edu.ec</p>
          <p>Dirección: Valle</p>
        </div>
      `;
    }
  }
  customElements.define('social-profile', SocialProfile);
