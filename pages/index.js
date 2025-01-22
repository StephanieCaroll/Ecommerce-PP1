import Head from 'next/head';
import '../styles/module.css';
import Sidebar from '@/components/Sidebar';


export default function Home() {
  return (
      <div>
        <Head>
          <title>E-Commerce Gamer</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <header>
          <button className="menu-btn">Menu</button>
          <h1>Seção Gamer</h1>
        </header>
        <div id="container">
          <Sidebar />
          <section id="SecaoGamer" className="section">
            <h1>Seção Gamer</h1>
            <p>Produtos para quem ama jogos, explore os últimos lançamentos!</p>
            <div className="product-grid">
              <div className="product-card">
                <img src="https://s2-techtudo.glbimg.com/Dx-d7zd6abaVIdY1QqGVKl_QvJ4=/0x0:620x349/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/s/i/R6L1HDR3GxheHSo2ECLQ/2013-10-11-grand-theft-auto-5-gta-finais.jpg" alt="Imagem" />
                <h2>Grand Theft Auto V</h2>
                <p>R$ 82,41</p>
                <button>Adicionar ao Carrinho</button>
              </div>
              <div className="product-card">
                <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/capsule_616x353.jpg?t=1726158438" alt="Imagem" />
                <h2>Sekiro™: Shadows Die Twice - GOTY Edition</h2>
                <p>R$ 100,00</p>
                <button>Adicionar ao Carrinho</button>
              </div>
              <div className="product-card">
                <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/capsule_616x353.jpg?t=1711128146" alt="Imagem" />
                <h2>Stardew Valley</h2>
                <p>R$ 12,49</p>
                <button>Adicionar ao Carrinho</button>
              </div>
              <div className="product-card">
                <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/750920/header.jpg?t=1709834464" alt="Imagem" />
                <h2>Shadow of the Tomb Raider: Definitive Edition</h2>
                <p>R$ 49,97</p>
                <button>Adicionar ao Carrinho</button>
              </div>
              <div className="product-card">
                <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/238320/header.jpg?t=1666817106" alt="Imagem" />
                <h2>Outlast</h2>
                <p>R$ 59,99</p>
                <button>Adicionar ao Carrinho</button>
              </div>
              <div className="product-card">
                <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/214490/header.jpg?t=1728557065" alt="Imagem" />
                <h2>Alien: Isolation</h2>
                <p>R$ 179,99</p>
                <button>Adicionar ao Carrinho</button>
              </div>
              <div className="product-card">
                <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg?t=1728603021" alt="Imagem" />
                <h2>The Last of Us™ Part I</h2>
                <p>R$ 249,90</p>
                <button>Adicionar ao Carrinho</button>
              </div>
              <div className="product-card">
                <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg?t=1728439147" alt="Imagem" />
                <h2>Resident Evil 4</h2>
                <p>R$ 169,00</p>
                <button>Adicionar ao Carrinho</button>
              </div>
              <div className="product-card">
                <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1962663/header.jpg?t=1726766667" alt="Imagem" />
                <h2>Call of Duty®: Warzone™</h2>
                <p>Gratuito</p>
                <button>Adicionar ao Carrinho</button>
              </div>
              <div className="product-card">
                <h2>Entre Outros</h2>
              </div>
            </div>
          </section>
        </div>
      </div>
   );
}
