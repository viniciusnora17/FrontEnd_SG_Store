import React, { useState } from "react";
import "./DiscountForm.css";

const DiscountForm = () => {
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!accepted) {
      alert("Você precisa aceitar a política de privacidade.");
      return;
    }

    console.log("Email:", email);
    alert("Cupom enviado com sucesso!");
  };

  return (
    <div className="bg-[#F4F4F4] h-[40dvh] flex items-center overflow-hidden" id="container-discount">
      <form onSubmit={handleSubmit} className="w-full">
        <h2 className="text-[#758573] text-discount">
          Faça seu cadastro e <br /> Ganhe um desconto na sua primeira compra
        </h2>

        <div className="flex gap-4">
          <input
            className="input"
            placeholder="email"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="btn-discount">enviar email</button>
        </div>

        <div className="flex items-center gap-2 container-checkbox text-gray-700">
          <div>
            <span
              className="note cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              ler termos de uso & condições
            </span>

            <div className="flex gap-2 overflow-hidden">
              <input
                className="transform scale-120 cursor-pointer !ml-1"
                type="checkbox"
                name="checkbox"
                id="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
              />
              <p className="privacy-politics">
                li e aceito a política de privacidade e proteção de dados da sg
                store!
              </p>
            </div>
          </div>
        </div>

        <p className="text-gray-700 discount-text">
          fique por dentro do que rola aqui e ganhe 25% de desconto na sua
          primeira compra.
        </p>
      </form>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // evita fechar ao clicar dentro
          >
            <h3>termos de uso & condições</h3>
            <p>
              ao utilizar nossos serviços, você concorda com a coleta e uso de
              informações conforme descrito na nossa política de privacidade.
              garantimos a segurança dos seus dados e o uso exclusivo para fins
              de comunicação e promoções da SG Store.
            </p>
            <button
              className="btn-close"
              onClick={() => setIsModalOpen(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiscountForm;
