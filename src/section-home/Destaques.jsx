import React from "react";
import imgJeans from "../assets/destaques-img.jpg";
import imgGrafica from "../assets/destaques-img2.jpg";
import './Destaques.css';

const Destaques = () => {
  return (
    
    <section className="w-full flex-wrap h-[85dvh] bg-[#F4F4F4] flex justify-center items-center overflow-hidden ">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Card 1 */}
        <div className="relative overflow-hidden h-[770px] w-[750px]">
          <img
            src={imgJeans}
            alt="Modelos usando jeans"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-6 left-6 text-white max-w-[80%]">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              love them shawty
            </h2>
            <p className="text-sm md:text-base mb-2">
              SE VOCÊ USA JEANS, VOCÊ SABE
            </p>
            <button className="btn-destaque">
              Compre Agora
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative overflow-hidden h-[770px] ">
          <img
            src={imgGrafica}
            alt="Camisetas gráficas"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-6 left-6 text-white max-w-[80%]">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              monte seu look
            </h2>
            <p className="text-sm md:text-base mb-2">
              DIGA SIM PARA NOVAS GRÁFICAS
            </p>
            <button className="btn-destaque">
              Compre Camisetas Gráficas
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Destaques;
