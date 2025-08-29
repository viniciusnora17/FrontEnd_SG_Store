import { useState } from "react";
import Navbar from '../components/navbar/Navbar';
import Dropdown from '../components/navbar/Dropdown';
import Footer from '../components/footer/Footer';
import './Login.css';
import Google from "../icons/google.png";
import Apple from "../icons/apple.png";

export default function Login() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="navbar-container-fixed">
        <Navbar />
        <Dropdown />
      </div>

      <div className="flex items-center justify-evenly h-[100vh] ">
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

        <div className="flex flex-col h-[50%] justify-center gap-6">
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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white !p-14 rounded-lg w-[500px] h-[500px] shadow-lg">
            <div className="flex !items-center justify-between">
              <h2 className="text-4xl font-light !mb-4 overflow-hidden">criar conta</h2>
              <button
                onClick={() => setShowModal(false)}
                className="!mb-3 underline text-gray-600 cursor-pointer"
              >
                Fechar
              </button>
            </div>
            <form className="flex flex-col gap-5 !mt-6">
              <input type="text" placeholder="Nome completo" className="input-login !p-2" />
              <input type="email" placeholder="Email" className="input-login !p-2" />
              <input type="password" placeholder="Senha" className="input-login !p-2" />
              <button className="btn-entrar">registrar</button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
