import { useState } from "react";
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import './Login.css';
import Google from "../icons/google.png";
import Apple from "../icons/apple.png";

import GoogleGreen from "../icons/google-green.png"
import AppleGreen from "../icons/apple-green.png"

import imgBackground from "../../public/background-login.png"



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
      </div>

      <div className="background-login overflow-hidden" >
        <div className="overflow-hidden">
          <img src={imgBackground} className="w-148 img-login" alt="" />
        </div>

        <div className="container-login">
          <h3 className="text-login">Entre com sua conta</h3>
          <p className="text-gray-600 !pb-10">Faça seu cadastro ou entre com sua conta Google ou da Apple</p>

          <div className="flex justify-between w-[52%] container-btn">
            <button className="flex justify-center items-center gap-2 btn-login">
              <img src={Google} alt="" /> <p className="text-btn">Google</p>
            </button>

            <button className="flex justify-center items-center gap-2 btn-login">
              <img className="" src={Apple} alt="" /> <p className="text-btn">Apple</p>
            </button>
          </div>

          <div className="flex justify-center items-center gap-3 !pt-10 !pb-4 w-[80%]">
            <div className="line-login"> </div> <p className="text-gray-600">Ou</p> <div className="line-login"></div>
          </div>

          <div className="form-container !pb-8">
            <form className="form-login" action="" method="POST">
              <div>
                <label htmlFor="">Nome Completo</label>
                <input type="text" name="name" id="name" placeholder="ex: Julia Nora" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Email</label>
                <input type="email" name="email" id="password" placeholder="ex: julia@gmail.com" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Senha</label>
                <input type="password" name="password" id="password" placeholder="Senha" />
                <span className="span-text">Sua senha deve conter mais de 8 caracteres</span>
              </div>

              <button className="btn-cadastrar" type="submit">Cadastrar-se</button>
            </form>
            <p className="text-center !pt-5">
              Já tem uma conta? Faça seu{" "}
              <span
                className="cursor-pointer underline hover:text-gray-600"
                onClick={() => setShowModal(true)}
              >
                login
              </span>
            </p>
          </div>
        </div>

      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center !z-50">
          <div className="bg-white !p-8  shadow-xl w-[400px] relative">

            <button
              className="absolute right-4 !top-4 text-xl cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>

            <h2 className="text-3xl font-light !mb-4">Entrar na conta</h2>

            <form className="flex flex-col gap-4">
              <div>
                <label>Email</label>
                <input
                  type="email"
                  className="mt-1 w-full border !px-3 !py-2 "
                  placeholder="seuemail@gmail.com"
                />
              </div>

              <div>
                <label>Senha</label>
                <input
                  type="password"
                  className="mt-1 w-full border !px-3 !py-2 "
                  placeholder="••••••••"
                />
              </div>

              <button className="bg-[#A3BC9F] hover:bg-[#94ad90] cursor-pointer text-white !py-2 transition">

                Entrar
              </button>
            </form>

          </div>
        </div>
      )}
 

      <Footer />
    </>
  );
}
