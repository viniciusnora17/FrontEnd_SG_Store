import { useLocation } from "react-router-dom";
import Navbar from '../components/navbar/Navbar';
import Dropdown from '../components/navbar/Dropdown';
import Footer from '../components/footer/Footer';

import './ProductPage.css'

export default function ProductPage() {
  const { state } = useLocation();

  if (!state) {
    return <p>Produto não encontrado.</p>;
  }

  return (
      <>
         <div className="navbar-container-fixed">
          <Navbar />
        
        </div>
      <div className="flex gap-14 items-center justify-center h-[95vh] bg-[#F4F4F4] container-product">
      <img src={state.img} alt={state.title} className="w-[23%] img-buy" />
      <div className="flex flex-col h-[70%] text-buy">
          <h1 className="text-4xl mt-4 font-light overflow-hidden">{state.title}</h1>
          <div className="flex items-baseline gap-1 overflow-hidden">
            <p className="text-lg font-light text-[#339933] price">{state.price}</p>
            <span>no Pix <span className="text-[#339933]">(5% de desconto)</span> </span>
          </div>
            <div className="line-product"></div>
            <div className="card-payment">
              ou R$ 159,90 em até 5x de R$ 31,98 sem juros
            </div>

       <div className="size-select ">
          <h3>tamanho:</h3>
          <div className="flex justify-start gap-4 sizes-selector overflow-hidden">
            {['pp', 'p', 'm', 'g', 'gg'].map((size) => (
              <label key={size} className="size-option">
                <input type="radio" name="size" value={size} />
                <span>{size}</span>
              </label>
            ))}
          </div>
        </div>
          <button className="btn-buy">
            Comprar
          </button>

        <div className="cep">
          <p>calcular seu frete</p>
          <input type="text" placeholder="cep" />
          
          <button className="cep-button">calcular</button>
        </div>

      </div>

    </div>
      <Footer />
    </>
  );
}