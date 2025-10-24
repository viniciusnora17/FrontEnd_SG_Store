import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import "./CartPage.css";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // 🔹 Atualiza o localStorage sempre que o carrinho muda
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // 🔹 Aumentar quantidade
  const handleIncrease = (index) => {
    const updated = [...cartItems];
    updated[index].quantity += 1;
    setCartItems(updated);
  };

  // 🔹 Diminuir quantidade
  const handleDecrease = (index) => {
    const updated = [...cartItems];
    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
      setCartItems(updated);
    }
  };

  // 🔹 Remover item
  const handleRemove = (index) => {
    const updated = cartItems.filter((_, i) => i !== index);
    setCartItems(updated);
  };

  // 🔹 Calcular total
  const total = cartItems.reduce((acc, item) => {
    const priceNumber = parseFloat(item.price.replace("R$", "").replace(",", "."));
    return acc + priceNumber * item.quantity;
  }, 0);

  return (
    <>
      <div className="navbar-container-fixed">
        <Navbar />
      </div>

      <div className="cart-container">
        <h1>Meu Carrinho</h1>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Seu carrinho está vazio 😕</p>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div className="cart-item" key={index}>
                  <img src={item.img} alt={item.title} />
                  <div className="cart-info">
                    <h3>{item.title}</h3>
                    <p>Tamanho: {item.size}</p>
                    <p>{item.price}</p>

                    <div className="quantity-control">
                     <p>Quantidade:</p>
                      <button onClick={() => handleDecrease(index)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleIncrease(index)}>+</button>
                    </div>
                  </div>
                  <button className="remove-btn" onClick={() => handleRemove(index)}>
                    remover
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Total: R$ {total.toFixed(2).replace(".", ",")}</h2>
              <button className="btn-finalize-order">Finalizar pedido</button>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}
