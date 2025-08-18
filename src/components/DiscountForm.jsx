// DiscountForm.jsx
import React, { useState } from "react";
import './DiscountForm.css';

const DiscountForm = () => {
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);

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
    <div className="bg-[#F4F4F4] h-[40dvh] flex items-center">
      <form onSubmit={handleSubmit} className="w-full">
        <h2 className="text-[#758573]">desconto especial na primeira compra!</h2>
        
        <div className="flex justify-center gap-4">
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
          <button className="btn-discount">inserir cupom</button>
        </div>

        <div className="flex items-center gap-2 justify-center container-checkbox text-gray-700">
          <input
  
            className="transform scale-130 cursor-pointer"
            type="checkbox"
            name="checkbox"
            id="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
          />
          <p>li e aceito a política de privacidade e proteção de dados da sg store!</p>
        </div>

        <p className="text-center text-gray-700">
          fique por dentro do que rola aqui e ganhe 25% de desconto na sua primeira compra.
        </p>
      </form>
    </div>
  );
};

export default DiscountForm;
