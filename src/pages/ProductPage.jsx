import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import "./ProductPage.css";

export default function ProductPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!state) {
    return <p>Produto não encontrado.</p>;
  }

  // 🔹 Converte preço para número
  const priceNumber = parseFloat(state.price.replace("R$", "").replace(",", ".").trim());
  const installments = 5;
  const installmentValue = priceNumber / installments;

  // 🔹 Quando clicar em comprar
  const handleBuy = () => {
    if (!selectedSize) {
      setErrorMessage("Por favor, selecione um tamanho antes de comprar.");
      return;
    }

    setErrorMessage("");
    setShowModal(true);
  };

 
  const handleFinalize = () => {
    const productToAdd = {
      title: state.title,
      price: state.price,
      img: state.img,
      size: selectedSize,
      quantity: 1,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // verifica se já existe o mesmo produto + tamanho
    const existingItemIndex = existingCart.findIndex(
      (item) => item.title === productToAdd.title && item.size === productToAdd.size
    );

    if (existingItemIndex !== -1) {
      existingCart[existingItemIndex].quantity += 1;
      localStorage.setItem("cart", JSON.stringify(existingCart));
    } else {
      const updatedCart = [...existingCart, productToAdd];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

   
    console.log("Carrinho salvo:", JSON.parse(localStorage.getItem("cart")));
    setTimeout(() => {
      setShowModal(false);
      navigate("/carrinho");
    }, 100);
  };

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

            <div className="card-payment">
              ou R$ {priceNumber.toFixed(2).replace(".", ",")} em até {installments}x de R${" "}
              {installmentValue.toFixed(2).replace(".", ",")} sem juros
            </div>
          </div>

          {/* 🔹 Seleção de tamanho */}
          <div className="size-select">
            <h3>Tamanho:</h3>
            <div className="flex justify-start gap-3 sizes-selector overflow-hidden">
              {["PP", "P", "M", "G", "GG"].map((size) => (
                <label key={size} className={`size-option ${selectedSize === size ? "selected" : ""}`}>
                  <input
                    type="radio"
                    name="size"
                    value={size}
                    onChange={(e) => setSelectedSize(e.target.value)}
                  />
                  <span>{size}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 🔹 Botão comprar */}
          <button className="btn-buy" onClick={handleBuy}>
            Comprar
          </button>

          {/* 🔹 Mensagem de erro se não selecionar tamanho */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          {/* 🔹 Campo CEP */}
          <div className="cep">
            <p>Calcular seu frete</p>
            <input type="text" placeholder="cep" />
            <button className="cep-button">calcular</button>
          </div>

          <a
            className="cep-href"
            href="https://buscacepinter.correios.com.br/app/endereco/index.php"
            target="blank"
          >
            não sei meu cep
          </a>

          <h4 className="description-product">descrição do produto</h4>
          <p className="about-product">
            <span className="span-description">produto:</span> body <br />
            <span className="span-description">cor:</span> preto <br />
            <span className="span-description">decote:</span> quadrado <br />
            <span className="span-description">modelagem:</span> justa <br />
            <span className="span-description">tecido:</span> poliamida <br />
            <span className="span-description">composição:</span> 90% poliamida 10% elastano <br />
            <span className="span-description">acabamento:</span> embutido <br />
            <span className="span-description">forro:</span> com forro <br />
            <span className="span-description">manga:</span> alças largas <br />
            <span className="span-description">detalhe:</span> body com desenho do decote quadrado, todo duplo e <br />
            com fechamento em botões de pressão no entrepernas.
          </p>
        </div>
      </div>

      {/* 🔹 Modal de confirmação */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Produto adicionado ao carrinho!</h2>
            <p>
              {state.title} — Tamanho <strong>{selectedSize}</strong>
            </p>
            <div className="modal-button">
              <button className="btn-finalize" onClick={handleFinalize}>
                Finalizar compra
              </button>
              <button className="btn-continue" onClick={() => setShowModal(false)}>
                Continuar comprando
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
