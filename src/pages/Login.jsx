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

       <div>
        <img src={imgBackground} className="w-150" alt="" />
       </div>


      <Footer />
    </>
  );
}
