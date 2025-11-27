import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import "./OrderSummary.css";

export default function OrderSummaryPage() {
  const navigate = useNavigate();

  const [address, setAddress] = useState(null);
  const [order, setOrder] = useState(null);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const addr = JSON.parse(localStorage.getItem("address"));
      const ord = JSON.parse(localStorage.getItem("orderSummary"));
      const cartData = JSON.parse(localStorage.getItem("cart")) || [];
      const totalPayment = JSON.parse(localStorage.getItem("totalPayment"));

      const finalOrder =
        ord ||
        (totalPayment !== null
          ? {
              productTotal: totalPayment,
              discount: 0,
              finalTotal: totalPayment,
              paymentMethod: null,
              cardLast4: null,
            }
          : null);

      setAddress(addr || null);
      setOrder(finalOrder);
      setCart(cartData);
    } catch (err) {
      console.error("Erro ao ler localStorage:", err);
      setAddress(null);
      setOrder(null);
      setCart([]);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading)
    return (
      <>
        <Navbar />
        <div className="order-summary-container">
          <p>Carregando...</p>
        </div>
        <Footer />
      </>
    );

  if (!address || !order || cart.length === 0) {
    return (
      <>
        <Navbar />
        <div className="order-summary-container">
          <h2 className="summary-title">Revise e confirme</h2>
          <div className="summary-card">
            <p>Não foi possível carregar todos os dados do pedido.</p>
            <ul>
              {!address && <li>Endereço: não cadastrado (volte ao checkout)</li>}
              {!order && <li>Resumo do pedido: não encontrado</li>}
              {cart.length === 0 && <li>Carrinho vazio</li>}
            </ul>
            <button className="link-btn" onClick={() => navigate("/checkout")}>
              Voltar ao checkout
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // formata preço vindo como "R$ 80,00" ou número
  const parsePrice = (p) => {
    if (typeof p === "number") return p;
    if (!p) return 0;

    return parseFloat(
      String(p).replace("R$", "").replace(/\./g, "").replace(",", ".").trim()
    );
  };

  const productLines = cart.map((item, idx) => {
    const price = parsePrice(item.price);
    const lineTotal = price * (item.quantity || 1);

    return {
      ...item,
      priceNumber: price,
      lineTotal,
      idx,
    };
  });

  return (
    <>
      <Navbar />
      <div className="order-summary-container">
        <h2 className="summary-title">Revise e confirme</h2>

        {/* FATURAMENTO */}
        <div className="summary-card">
          <h3 className="card-title">Faturamento</h3>

          <div className="card-line">
            <div className="icon-circle">
                <img src="https://http2.mlstatic.com/storage/buyingflow-core-assets-web/bf-assets/svg/bf_v6_bill.svg" alt="" />
            </div>
            <div>
              <p className="bold">{address.name}</p>
              {address.cpf && <p>CPF {address.cpf}</p>}
              <p className="small-info">
                Os dados do seu cartão serão utilizados para emitir a NF-e.
              </p>
            </div>
          </div>

          <button className="link-btn" onClick={() => navigate("/checkout")}>
            Modificar dados de faturamento / endereço
          </button>
        </div>

        {/* ENDEREÇO */}
        <div className="summary-card">
          <h3 className="card-title">Detalhe da entrega</h3>

          <div className="card-line">
            <div className="icon-circle">
                <img src="https://http2.mlstatic.com/storage/buyingflow-core-assets-web/bf-assets/svg/bf_v6_gps_pin.svg" alt="" />
            </div>
            <div>
              <p className="bold">
                {address.rua}
                {address.numero ? `, ${address.numero}` : ""}
                {address.complemento ? ` • ${address.complemento}` : ""}
              </p>
              <p className="small-info">CEP {address.cep}</p>
              <p className="small-info">Enviar no meu endereço</p>
            </div>
          </div>

          <button className="link-btn" onClick={() => navigate("/checkout")}>
            Alterar ou escolher outro endereço
          </button>

          {/* LISTA DE PRODUTOS */}
          <div className="product-list">
            {productLines.map((it) => (
              <div key={it.idx} className="product-box">
                <img
                  src={it.img}
                  alt={it.title}
                  className="product-img"
                />

                <div className="product-info">
                  <p className="delivery-title">
                    Chegará entre <b>12 e 14/dez</b>
                  </p>

                  <p className="product-details">{it.title}</p>

                  <p className="small-info">
                    Quantidade: {it.quantity || 1} • Tamanho: {it.size}
                  </p>
                </div>

              
              </div>
            ))}
          </div>
        </div>

        {/* PAGAMENTO */}
        <div className="summary-card">
          <h3 className="card-title">Detalhe do pagamento</h3>

          <div className="card-line">
            <div className="icon-circle">💳</div>
            <div>
              {order.paymentMethod === "pix" && (
                <>
                  <p className="bold">Pix</p>
                  <p className="price">
                    R$ {order.finalTotal?.toFixed(2).replace(".", ",")}
                  </p>
                  <p className="small-info">
                    Você receberá o QR Code ao confirmar.
                  </p>
                </>
              )}

              {order.paymentMethod === "boleto" && (
                <>
                  <p className="bold">Boleto Bancário</p>
                  <p className="price">
                    R$ {order.finalTotal?.toFixed(2).replace(".", ",")}
                  </p>
                  <p className="small-info">
                    O boleto pode levar até 2 dias úteis para compensar.
                  </p>
                </>
              )}

              {order.paymentMethod === "card" && (
                <>
                  <p className="bold">Cartão de Crédito</p>
                  <p className="price">**** {order.cardLast4}</p>
                  <p className="small-info">
                    Pagamento será processado no cartão informado.
                  </p>
                </>
              )}

              {!order.paymentMethod && (
                <>
                  <p className="bold">Método de pagamento não selecionado</p>
                  <p className="small-info">
                    Volte e escolha um método de pagamento.
                  </p>
                </>
              )}
            </div>
          </div>

          <button className="link-btn" onClick={() => navigate("/pagamento")}>
            Alterar forma de pagamento
          </button>
        </div>

        {/* RESUMO FINAL */}
        <div className="summary-card">
          <h3 className="card-title">Resumo do pedido</h3>

          <div className="resume-line">
            <span>Subtotal</span>
            <span>R$ {order.productTotal?.toFixed(2)}</span>
          </div>

          <div className="resume-line">
            <span>Frete</span>
            <span className="green">Grátis</span>
          </div>

          {order.discount > 0 && (
            <div className="resume-line">
              <span>Desconto</span>
              <span className="green">
                - R$ {order.discount.toFixed(2)}
              </span>
            </div>
          )}

          <div className="resume-total">
            <span>Total</span>
            <span className="total">
              R$ {order.finalTotal?.toFixed(2)}
            </span>
          </div>

          <button
            className="btn-finish"
            onClick={() => {
              localStorage.removeItem("cart");
              navigate("/obrigado");
            }}
          >
            Confirmar compra
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
