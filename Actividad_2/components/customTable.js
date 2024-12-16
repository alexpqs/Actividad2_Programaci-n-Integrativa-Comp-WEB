//Componente customTable.js
export class CustomTable extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          padding: 8px;
          text-align: left;
          border: 1px solid #ddd;
        }
        th {
          background: #007acc;
          color: white;
        }
      </style>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    `;
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        const tbody = shadow.querySelector('tbody');
        data.forEach(user => {
          const row = document.createElement('tr');
          row.innerHTML = `<td>${user.name}</td><td>${user.email}</td>`;
          tbody.appendChild(row);
        });
      });
  }
}
customElements.define('custom-table', CustomTable);
