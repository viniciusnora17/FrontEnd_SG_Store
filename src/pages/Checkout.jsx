import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import "./Checkout.css";

export default function CheckoutPage() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const total = cartItems.reduce((acc, item) => {
    const priceNumber = parseFloat(
      item.price.replace("R$", "").replace(",", ".")
    );
    return acc + priceNumber * item.quantity;
  }, 0);

  const handleGoPayment = (e) => {
    e.preventDefault();
    navigate("/pagamento"); 
  };

  return (
    <>
      <div className="navbar-container-fixed">
        <Navbar />
      </div>

      <div className="checkout-container">
        <h2 className="checkout-title">Adicione um endereço</h2>

          {/* --- FORMULÁRIO DE ENDEREÇO --- */}
          <div className="checkout-form">
           
              <div className="form-group">
                <label>CEP</label>
                <input type="text" placeholder="Ex: 02900-010" required />
              </div>

            <form onSubmit={handleGoPayment}>
              <div className="form-group">
                <label>Rua / Avenida</label>
                <input type="text" placeholder="Ex: Rua Olivas, 177" required />
              </div>

              <div className="form-group">
                <label>Número</label>
                <input type="text" placeholder="Ex: 8493" required />
              </div>

              <div className="form-group">
                <label>Complemento (opicional)</label>
                <input type="text" placeholder="Ex: 245" required />
              </div>

              <button type="submit" className="btn-go-payment">
                Continuar para Pagamento
              </button>
            </form>
          </div>
        </div>
     

      <Footer />
    </>
  );
}
