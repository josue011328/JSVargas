
fetch('data/products.json')
  .then(response => response.json())
  .then(products => {
    const container = document.getElementById('product-list');
    products.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.price}</p>
        <a href="${product.link}" target="_blank"><button>Ver Oferta</button></a>
      `;
      container.appendChild(div);
    });
  });
