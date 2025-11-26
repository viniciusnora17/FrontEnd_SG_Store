import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import "./Checkout.css";

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("pix");

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const total = cartItems.reduce((acc, item) => {
    const priceNumber = parseFloat(item.price.replace("R$", "").replace(",", "."));
    return acc + priceNumber * item.quantity;
  }, 0);

  return (
    <>
      <div className="navbar-container-fixed">
        <Navbar />
      </div>

      <div className="checkout-container">
        <h1>Finalizar Pedido</h1>

        <div className="checkout-content">
          {/* --- ITENS DO CARRINHO --- */}
          <div className="checkout-items">
            <h2>Produtos</h2>
            {cartItems.map((item, i) => (
              <div className="checkout-item" key={i}>
                <img src={item.img} alt={item.title} />
                <div>
                  <p>{item.title}</p>
                  <p>Tamanho: {item.size}</p>
                  <p>Qtd: {item.quantity}</p>
                  <p>Preço: {item.price}</p>
                </div>
              </div>
            ))}

            <h2 className="checkout-total">
              Total: R$ {total.toFixed(2).replace(".", ",")}
            </h2>
          </div>

          {/* --- ENDEREÇO --- */}
          <div className="checkout-form">
            <h2>Endereço de Entrega</h2>

            <form>
              <input type="text" placeholder="Rua / Avenida" required />
              <input type="text" placeholder="Número" required />
              <input type="text" placeholder="Bairro" required />
              <input type="text" placeholder="Cidade" required />
              <input type="text" placeholder="CEP" required />

              <h2>Método de Pagamento</h2>

              <label>
                <input 
                  type="radio" 
                  name="payment" 
                  value="pix"
                  checked={paymentMethod === "pix"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                /> 
                PIX
              </label>

              <label>
                <input 
                  type="radio" 
                  name="payment" 
                  value="credito"
                  checked={paymentMethod === "credito"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                /> 
                Cartão de Crédito
              </label>

              <label>
                <input 
                  type="radio" 
                  name="payment" 
                  value="debito"
                  checked={paymentMethod === "debito"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                /> 
                Cartão de Débito
              </label>

              {paymentMethod === "pix" && (
                <p className="pix-info">
                  O QRCode será gerado após confirmar o pedido.
                </p>
              )}

              <button type="submit" className="btn-confirm">
                Confirmar Pedido
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
