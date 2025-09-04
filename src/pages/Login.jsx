import { useState } from "react";
import Navbar from '../components/navbar/Navbar';
import Dropdown from '../components/navbar/Dropdown';
import Footer from '../components/footer/Footer';
import './Login.css';
import Google from "../icons/google.png";
import Apple from "../icons/apple.png";
import imgModal from "/img-modal.png";
import GoogleGreen from "../icons/google-green.png"
import AppleGreen from "../icons/apple-green.png"

export default function Login() {
 const [showModal, setShowModal] = useState(false);
  const [cpf, setCpf] = useState("");
  const [cpfError, setCpfError] = useState("");

  const [accepted, setAccepted] = useState(false);
  const [acceptError, setAcceptError] = useState("");

  const handleCpfChange = (e) => {
  let value = e.target.value.replace(/\D/g, ""); 
  if (value.length > 11) value = value.slice(0, 11);

  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  setCpf(value);

  if (value.length === 14) {
    setCpfError("");
  } else {
    setCpfError("Digite um CPF válido (000.000.000-00)");
  }
};

// ✅ Agora handleSubmit está fora
const handleSubmit = (e) => {
  e.preventDefault();
  let valid = true;

  if (cpf.length !== 14) {
    setCpfError("Digite um CPF válido (000.000.000-00)");
    valid = false;
  }

  if (!accepted) {
    setAcceptError("Você precisa aceitar os termos para continuar");
    valid = false;
  } else {
    setAcceptError("");
  }

  if (valid) {
    alert("Cadastro realizado com sucesso!");
  }
};
  

  return (
    <>
      <div className="navbar-container-fixed">
        <Navbar />
        <Dropdown />
      </div>

      <div className="flex items-center justify-evenly h-[100vh] container-login">
        <form className="form-login overflow-hidden" action="">
          <h2 className="subtitle-access overflow-hidden">acessar minha conta</h2>

          <div className="flex flex-col justify-evenly w-full h-[53%]">
            <div>
              <label className="text-gray-700" htmlFor="">email</label>
              <input className="input-login" type="email" />
            </div>

            <div>
              <label className="text-gray-700" htmlFor="">senha</label>
              <input className="input-login" type="password" />
            </div>
          </div>

          <div className="flex items-center justify-between w-95 overflow-hidden">
            <button className="btn-entrar">entrar</button>
            <a className="underline" href="">esqueci minha senha</a>
          </div>

          <div className="flex items-center justify-around gap-20 w-[100%] btn-google">
            <button type="button">entrar com sua conta google</button>
            <img src={Google} alt="" />
          </div>

          <div className="flex items-center justify-around gap-20 w-[100%] btn-apple">
            <button type="button">entrar com sua conta apple</button>
            <img src={Apple} alt="" />
          </div>
        </form>

        <div className="line-login"></div>

        <div className="flex flex-col h-[50%] justify-center gap-6 container-create-account">
          <h2 className="subtitle-login">não possui uma conta?</h2>
          <div className="text-gray-600">
            <p>-crie sua conta para ficar por dentro de novidades</p>
            <p>-saiba de descontos</p>
            <p>-fique por dentro de lançamentos</p>
          </div>
          <button
            className="btn-entrar"
            type="button"
            onClick={() => setShowModal(true)}
          >
            criar conta
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center !mt-10 !z-50"
          onClick={() => setShowModal(false)} // clique no fundo fecha
        >
          <div
            className="flex rounded-lg shadow-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()} // impede o fechamento ao clicar dentro
          >
            {/* Coluna da imagem */}
            <div className="w-[400px] h-[65dvh]">
              <img
                src={imgModal}
                alt="background"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Coluna do formulário */}
            <div className="bg-[#F4F4F4] !p-10 w-[420px] h-[65dvh] flex flex-col">
              <div className="flex items-center justify-center !mb-6">
                <h2 className="text-5xl font-light overflow-hidden font-bold text-[#71836e]">
                  criar conta
                </h2>
              </div>

              <form className="flex flex-col gap-5 flex-1 ">
                <input
                  type="text"
                  placeholder="Nome completo"
                  className="input-login !p-2 shadow-lg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="input-login !p-2 shadow-lg"
                />
                
                {/* CPF formatado */}
                <div className="flex flex-col overflow-hidden">
                  <input
                    type="text"
                    placeholder="CPF"
                    value={cpf}
                    onChange={handleCpfChange}
                    className={`input-login !p-2 shadow-lg ${cpfError ? "border-red-500" : ""}`}
                  />
                  {/* {cpfError && (
                    <span className="text-red-500 text-sm !mt-1">{cpfError}</span>
                  )} */}
                </div>

                <input
                  type="password"
                  placeholder="Senha"
                  className="input-login !p-2 shadow-lg"
                />

                <div className="flex items-center justify-start gap-2">
                  <input
                    className="cursor-pointer"
                    type="checkbox"
                    name="aceito"
                    id="aceito"
                  />
                    <label htmlFor="aceito" className="use-terms cursor-pointer">
                    aceito termos e condições de uso
                    </label>
                </div>
                    {acceptError && (
                  <span className="text-red-500 text-sm  span-error">{acceptError}</span>
                )}

                <button type="submit"  onClick={handleSubmit} className="btn-modal">
                  cadastrar-se →
                </button>

                <div className="line-container flex items-center justify-between">
                  <div className="line-modal"></div>
                  <span className="span">ou</span>
                  <div className="line-modal"></div>
                </div>

                <div className="flex flex-col gap-5">
                  <div className="btn-social">
                    <img src={AppleGreen} alt="" />
                    <p>crie sua conta com a apple</p>
                  </div>

                  <div className="btn-social">
                    <img src={GoogleGreen} alt="" />
                    <p>crie sua conta com google</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
)}



      <Footer />
    </>
  );
}
