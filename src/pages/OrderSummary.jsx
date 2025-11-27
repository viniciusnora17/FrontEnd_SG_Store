import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import "./OrderSummary.css";

export default function OrderSummaryPage() {
  const [total, setTotal] = useState(0);
  const [method, setMethod] = useState("");
  const [savedCard, setSavedCard] = useState(null);

  useEffect(() => {
    const savedTotal = JSON.parse(localStorage.getItem("totalPayment"));
    if (savedTotal) setTotal(savedTotal);

    const payMethod = localStorage.getItem("selectedPaymentMethod");
    if (payMethod) setMethod(payMethod);

    const storedCard = JSON.parse(localStorage.getItem("savedCard"));
    if (storedCard) setSavedCard(storedCard);
  }, []);

  return (
    <>
      <Navbar />

      <div className="order-summary-container">

        <h2 className="order-title">Resumo do Pedido</h2>

        <div className="order-box">

          {/* MÉTODO DE PAGAMENTO */}
          <div className="order-section">
            <h3>Método de Pagamento</h3>

            {method === "pix" && (
              <div className="payment-summary">
                <p><strong>Pix</strong></p>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/QR_code_for_mobile_English_Wikipedia.svg/512px-QR_code_for_mobile_English_Wikipedia.svg.png"
                  alt="QR Code"
                  className="qr-img"
                />
                <p className="pix-info">Escaneie o QR Code para finalizar o pagamento</p>
              </div>
            )}

            {method === "boleto" && (
              <div className="payment-summary">
                <p><strong>Boleto Bancário</strong></p>
                <p>Código de barras:</p>
                <div className="boleto-box">
                  23793.38127 60008.172726 01000.421204 8 97120000005000
                </div>
                <p className="boleto-info">O boleto pode levar até 2 dias úteis para compensar.</p>
              </div>
            )}

            {method === "card" && savedCard && (
              <div className="payment-summary">
                <p><strong>Cartão de Crédito</strong></p>
                <p>**** {savedCard.last4}</p>
              </div>
            )}
          </div>

          {/* RESUMO FINAL */}
          <div className="order-section">
            <h3>Resumo da Compra</h3>

            <div className="resume-line">
              <span>Produto:</span>
              <span>R$ {total.toFixed(2)}</span>
            </div>

            <div className="resume-line">
              <span>Frete:</span>
              <span className="green">Grátis</span>
            </div>

            <div className="resume-total">
              <span>Total a pagar:</span>
              <span className="total">R$ {total.toFixed(2)}</span>
            </div>
          </div>

          <button className="btn-finish">
            Finalizar Compra
          </button>

        </div>
      </div>

      <Footer />
    </>
  );
}
