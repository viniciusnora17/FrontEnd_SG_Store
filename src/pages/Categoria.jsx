import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from '../components/navbar/Navbar';
import Dropdown from '../components/navbar/Dropdown';
import Footer from '../components/footer/Footer';

export default function Categoria() {
  const { slug } = useParams();
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/produtos/categoria/${slug}`)
      .then((res) => res.json())
      .then((data) => setProdutos(data));
  }, [slug]);

  return (
    <>
        <div className="navbar-container-fixed">
          <Navbar />
          <Dropdown />
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 h-[90vh]">
      {produtos.map((p) => (
        <div
          key={p.id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col"
        >
          <img
            src={p.imagem_url}
            alt={p.nome}
            className="w-full h-72 object-cover"
          />

          <div className="p-4 flex flex-col flex-grow">
            {/* Nome */}
            <h3 className="text-base md:text-lg font-semibold text-gray-800 line-clamp-2">
              {p.nome}
            </h3>

            {/* Preço */}
            <p className="text-lg md:text-xl font-bold text-green-600 mt-2">
              R$ {Number(p.preco).toFixed(2)}
            </p>

            {/* Botão */}
            <button className="mt-auto w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-300">
              Comprar
            </button>
          </div>
        </div>
      ))}
</div>
    
    <Footer />
    </>
  );
}
