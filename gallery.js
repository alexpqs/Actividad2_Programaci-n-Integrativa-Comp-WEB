//Componente gallery.js
export class GalleryPage extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          gap: 10px;
        }
        img {
          width: 100%;
          border-radius: 8px;
        }
      </style>
      <div class="gallery"></div>
    `;
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(response => response.json())
      .then(data => {
        const gallery = shadow.querySelector('.gallery');
        data.results.forEach((pokemon, index) => {
          const img = document.createElement('img');
          img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`;
          img.alt = pokemon.name;
          gallery.appendChild(img);
        });
      });
  }
}
customElements.define('gallery-page', GalleryPage);