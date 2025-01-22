import React from 'react';

const Sidebar = () => (
  <section id="MaisVendidos" className="section">
    <h1>Mais Vendidos</h1>
    <p>Todos os produtos</p>
    <div className="product-grid">
      <div className="product-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRabZMZSio9ACTb3uALwSuvMq5h9yLHWr9zaA&s" alt="Imagem" />
        <h2>Call of Duty®: Black Ops 6</h2>
        <p>R$ 150,00</p>
        <button>Adicionar ao Carrinho</button>
      </div>
      <div className="product-card">
        <img src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2124490/header.jpg?t=1728470029" alt="Imagem" />
        <h2>Silent Hill 2</h2>
        <p>R$ 230,00</p>
        <button>Adicionar ao Carrinho</button>
      </div>
      <div className="product-card">
        <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/header.jpg?t=1728067832" alt="Imagem" />
        <h2>God of War Ragnarök</h2>
        <p>R$ 178,90</p>
        <button>Adicionar ao Carrinho</button>
      </div>
    </div>
  </section>
);

export default Sidebar;
