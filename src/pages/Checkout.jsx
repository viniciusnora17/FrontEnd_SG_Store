import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import "./Checkout.css";

export default function CheckoutPage() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);

  const total = cartItems.reduce((acc, item) => {
  const priceNumber = parseFloat(
    item.price.replace("R$", "").replace(",", ".")
  );
  return acc + priceNumber * item.quantity;
}, 0);

  const [address, setAddress] = useState({
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
  });

  // Carregar endereço e carrinho
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);

    const savedAddress = JSON.parse(localStorage.getItem("address"));
    if (savedAddress) {
      setAddress(savedAddress);
    }
  }, []);

  // Atualiza os campos conforme digita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


 const handleGoPayment = (e) => {
  e.preventDefault();

  localStorage.setItem("address", JSON.stringify(address));
  localStorage.setItem("totalPayment", JSON.stringify(total));

  navigate("/pagamento");
};


  return (
    <>
      <div className="navbar-container-fixed">
        <Navbar />
      </div>

      <div className="checkout-container">
        <h2 className="checkout-title">Adicione um endereço</h2>

        <div className="checkout-form">
          <form onSubmit={handleGoPayment}>
            <div className="form-group">
              <label>CEP</label>
              <input
                type="text"
                name="cep"
                placeholder="Ex: 02900-010"
                value={address.cep}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Rua / Avenida</label>
              <input
                type="text"
                name="rua"
                placeholder="Ex: Rua Olivas, 177"
                value={address.rua}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Número</label>
              <input
                type="text"
                name="numero"
                placeholder="Ex: 8493"
                value={address.numero}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Complemento (opcional)</label>
              <input
                type="text"
                name="complemento"
                placeholder="Ex: 245"
                value={address.complemento}
                onChange={handleChange}
              />
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
