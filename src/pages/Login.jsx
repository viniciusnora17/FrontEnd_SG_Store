import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from '../components/navbar/Navbar';
import Dropdown from '../components/navbar/Dropdown';
import Footer from '../components/footer/Footer';
import './Login.css'
import Google from "../icons/google.png";
import Apple from "../icons/apple.png";


import { Link } from "react-router-dom";

export default function Login() {
  return (
     <>
        <div className="navbar-container-fixed">
          <Navbar />
          <Dropdown />
        </div>

    <div className="flex items-center justify-evenly h-[100vh] ">
      <form className="form-login overflow-hidden"  action="">

        <h2 className="subtitle-access overflow-hidden">acessar minha conta</h2>

        <div className="flex flex-col justify-evenly w-full h-[53%]">

          <div>
            <label className="text-gray-700"  htmlFor="">email</label>
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
       <button>entrar com sua conta google</button>
        <img src={Google} alt="" />
      </div>

      <div className="flex items-center justify-around gap-20 w-[100%] btn-apple">
       <button>entrar com sua conta apple</button>
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
        <button className="btn-entrar">criar conta</button>
     
      </div>

  
    </div>

    </>
  );
}