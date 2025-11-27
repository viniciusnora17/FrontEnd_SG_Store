import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Pix from "../../public/pix.png";
import Card from "../../public/credit-card.png";
import CodigoDeBarras from "../../public/codigo-de-barras.png";
import "./Payment.css";

export default function PaymentPage() {
  const navigate = useNavigate();

  const [total, setTotal] = useState(0);
  const [selectedMethod, setSelectedMethod] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [savedCard, setSavedCard] = useState(null);
  const [newCard, setNewCard] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  // --- CUPOM ---
  const [showCouponModal, setShowCouponModal] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [discountValue, setDiscountValue] = useState(0);

  const [errorMessage, setErrorMessage] = useState("");


  // Carrega total e cartão salvo
  useEffect(() => {
    const savedTotal = JSON.parse(localStorage.getItem("totalPayment"));
    if (savedTotal) setTotal(savedTotal);

    const storedCard = JSON.parse(localStorage.getItem("savedCard"));
    if (storedCard) setSavedCard(storedCard);
  }, []);

  // Atualiza campos do modal do cartão
  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setNewCard((prev) => ({ ...prev, [name]: value }));
  };

  // Salvar cartão
  const saveCard = (e) => {
    e.preventDefault();

    const lastDigits = newCard.number.slice(-4);
    const cardData = {
      ...newCard,
      last4: lastDigits,
    };

    localStorage.setItem("savedCard", JSON.stringify(cardData));
    setSavedCard(cardData);

    setShowModal(false);
    setSelectedMethod("card");
  };

  // Aplicar cupom
  const applyCoupon = (e) => {
    e.preventDefault();

    if (coupon.toUpperCase() === "DESCONTO10") {
      setDiscountValue(10);
      setShowCouponModal(false);
    } else {
      alert("Cupom inválido!");
    }
  };

  // --- VALIDAR SE PODE CONTINUAR ---
  const canContinue = () => {
    if (!selectedMethod) return false;

    if (selectedMethod === "card" && !savedCard) return false;

    if (selectedMethod === "new-card") return false; // só libera quando salvar no modal

    return true;
  };

  
 const handleContinue = () => {
  if (!canContinue()) {
    setErrorMessage("Por favor, selecione um método de pagamento.");
    return;
  }

  setErrorMessage(""); // limpar erro quando continuar normalmente

  const orderSummary = {
    productTotal: total,
    discount: discountValue,
    finalTotal: total - discountValue,
    paymentMethod: selectedMethod,
    cardLast4: savedCard?.last4 || null,
  };

  localStorage.setItem("orderSummary", JSON.stringify(orderSummary));

  navigate("/order-summary");
};


  return (
    <>
      <Navbar />

      <div className="payment-container">
        <h2 className="payment-title">Escolha como pagar</h2>

        <div className="payment-options">

          {/* PIX */}
          <div
            className={`payment-option ${selectedMethod === "pix" ? "selected" : ""}`}
            onClick={() => setSelectedMethod("pix")}
          >
            <img style={{ width: "30px", height: "30px" }} src={Pix} alt="Pix" />
            <div className="flex flex-col justify-center">
              <span>Pix</span>
              <span className="description-payment">Aprovação imediata</span>
            </div>
          </div>

          {/* BOLETO */}
          <div
            className={`payment-option ${selectedMethod === "boleto" ? "selected" : ""}`}
            onClick={() => setSelectedMethod("boleto")}
          >
            <img style={{ width: "30px", height: "30px" }} src={CodigoDeBarras} alt="Boleto" />
            <div className="flex flex-col justify-center">
              <span>Boleto Bancário</span>
              <span className="description-payment">Aprovação de 1 a 2 dias</span>
            </div>
          </div>

          {/* CARTÃO SALVO */}
          {savedCard && (
            <div
              className={`payment-option ${selectedMethod === "card" ? "selected" : ""}`}
              onClick={() => setSelectedMethod("card")}
            >
              <img style={{ width: "30px", height: "30px" }} src={Card} alt="Cartão" />
              <span>**** {savedCard.last4}</span>
            </div>
          )}

          {/* ADICIONAR NOVO CARTÃO */}
          <div>
            <h4>Adicionar novo cartão</h4>
            <div
              className={`payment-option ${selectedMethod === "new-card" ? "selected" : ""}`}
              onClick={() => {
                setSelectedMethod("new-card");
                setShowModal(true);
              }}
            >
              <span>Novo cartão de crédito</span>
            </div>
          </div>
        </div>

        {/* RESUMO */}
        <div className="resume-container">
          <h4 className="!pt-4 !pb-4 resume-text">Resumo da compra</h4>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <p>Produto:</p>
              <span>R$ {total.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <p>Frete:</p>
              <span className="text-green-600">Grátis</span>
            </div>

            {/* DESCONTO */}
            {discountValue > 0 && (
              <div className="flex justify-between text-green-600">
                <p>Desconto:</p>
                <span>- R$ {discountValue.toFixed(2)}</span>
              </div>
            )}

            {/* ABRIR MODAL DO CUPOM */}
            <button
              className="text-blue-500 underline text-left cursor-pointer"
              onClick={() => setShowCouponModal(true)}
            >
              Inserir cupom de desconto
            </button>

            <p className="!pt-3 !pb-3">
              Você pagará: R$ {(total - discountValue).toFixed(2)}
            </p>
          </div>
        </div>

        <button
          className={`btn-payment ${!canContinue() ? "disable-btn" : ""}`}
         
          onClick={handleContinue}
        >
          Continuar
        </button>

        {errorMessage && (
        <p className="payment-error-message">{errorMessage}</p>
        )}

      </div>

      <Footer />

      {/* MODAL DE CARTÃO */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Adicionar novo cartão</h3>

            <form onSubmit={saveCard} className="modal-form">

              <label>Número do Cartão</label>
              <input type="text" name="number" maxLength="16" onChange={handleCardChange} required />

              <label>Nome impresso</label>
              <input type="text" name="name" onChange={handleCardChange} required />

              <label>Validade</label>
              <input type="text" name="expiry" placeholder="MM/AA" maxLength="5" onChange={handleCardChange} required />

              <label>CVV</label>
              <input type="text" name="cvv" maxLength="3" onChange={handleCardChange} required />

              <div className="modal-buttons">
                <button type="button" className="cancel" onClick={() => setShowModal(false)}>
                  Cancelar
                </button>
                <button type="submit" className="confirm">
                  Salvar Cartão
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* MODAL DE CUPOM */}
      {showCouponModal && (
        <div className="modal-overlay">
          <div className="modal-box">

            <h3>Adicionar cupom</h3>

            <form onSubmit={applyCoupon} className="modal-form">

              <label>Digite seu cupom:</label>
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Ex: DESCONTO10"
                required
              />

              <div className="modal-buttons">
                <button type="button" className="cancel" onClick={() => setShowCouponModal(false)}>
                  Cancelar
                </button>
                <button type="submit" className="confirm">
                  Aplicar cupom
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </>
  );
}
