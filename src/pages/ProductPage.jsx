import { useLocation } from "react-router-dom";
import Navbar from '../components/navbar/Navbar';
import Dropdown from '../components/navbar/Dropdown';
import Footer from '../components/footer/Footer';
import './ProductPage.css';

export default function ProductPage() {
  const { state } = useLocation();

  if (!state) {
    return <p>Produto não encontrado.</p>;
  }

  // 🔹 Pega o preço e converte pra número
  const priceNumber = parseFloat(state.price.replace("R$", "").replace(",", ".").trim());

  // 🔹 Calcula o valor parcelado
  const installments = 5;
  const installmentValue = priceNumber / installments;

  return (
    <>
      <div className="navbar-container-fixed">
        <Navbar />
      </div>

      <div className="flex gap-14 items-center justify-center h-auto !pt-10 !pb-10 bg-[#F4F4F4] container-product">
        <div className="flex gap-6">
            <img src={state.img} alt={state.title} className="img-buy" />
            {state.imgHover && (
              <img src={state.imgHover} alt={`${state.title} (detalhe)`} className="img-buy" />
            )}
          </div>


        <div className="flex flex-col text-buy h-[100dvh]">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl !mt-4 font-light overflow-hidden">{state.title}</h1>
            <div className="flex items-baseline gap-1 overflow-hidden">
              <p className="text-lg font-light text-[#339933] price">{state.price}</p>
              <span>
                no Pix <span className="text-[#339933]">(5% de desconto)</span>
              </span>
            </div>

          <div className="line-product"></div>

          {/* 🔹 Valor parcelado dinâmico */}
          <div className="card-payment">
            ou R$ {priceNumber.toFixed(2).replace(".", ",")} em até {installments}x de R$ {installmentValue.toFixed(2).replace(".", ",")} sem juros
          </div>

          </div>
          <div className="size-select">
            <h3>Tamanho:</h3>
            <div className="flex justify-start gap-3 sizes-selector overflow-hidden">
              {["PP", "P", "M", "G", "GG"].map((size) => (
                <label key={size} className="size-option">
                  <input type="radio" name="size" value={size} />
                  <span>{size}</span>
                </label>
              ))}
            </div>
          </div>

          <button className="btn-buy">comprar</button>

          <div className="cep">
            <p>Calcular seu frete</p>
            <input type="text" placeholder="cep" />
            <button className="cep-button">calcular</button>
          </div>
            <a className="cep-href" href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="blank">não sei meu cep</a>
        <h4 className="description-product">descrição do produto</h4>
        <p className="about-product"><span className="span-description">produto:</span> body <br />
          <span className="span-description">cor:</span> preto <br />
          <span className="span-description">decote:</span> quadrado <br />
          <span className="span-description">modelagem:</span> justa <br />
          <span className="span-description">tecido:</span> poliamida <br />
          <span className="span-description">composição:</span> 90% poliamida 10% elastano <br />
          <span className="span-description">acabamento:</span> embutido <br />
          <span className="span-description">forro:</span> com forro <br />
          <span className="span-description">manga:</span> alças largas <br />
          <span className="span-description">detalhe:</span> body com desenho do decote quadrado, todo duplo e <br /> com fechamento em botões de pressão no entrepernas. <br />
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
