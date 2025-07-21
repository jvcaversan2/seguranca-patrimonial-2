import React from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../../components/MainHeader";

const ocorrencias = [
  {
    id: "#12345",
    unidade: "Unidade A",
    data: "2024-07-26",
    status: "Em aberto",
    prioridade: "Alta",
    descricao: "Vazamento de água na área de produção.",
    foto: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=40&q=80",
  },
  {
    id: "#12346",
    unidade: "Unidade B",
    data: "2024-07-25",
    status: "Resolvido",
    prioridade: "Média",
    descricao: "Problema com a esteira transportadora.",
    foto: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=40&q=80",
  },
  {
    id: "#12347",
    unidade: "Unidade A",
    data: "2024-07-24",
    status: "Em aberto",
    prioridade: "Baixa",
    descricao: "Iluminação inadequada no setor de embalagem.",
    foto: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=40&q=80",
  },
  {
    id: "#12348",
    unidade: "Unidade C",
    data: "2024-07-23",
    status: "Resolvido",
    prioridade: "Alta",
    descricao: "Falha no sistema de refrigeração.",
    foto: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=40&q=80",
  },
  {
    id: "#12349",
    unidade: "Unidade B",
    data: "2024-07-22",
    status: "Em aberto",
    prioridade: "Média",
    descricao: "Problema com a bomba de água.",
    foto: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=40&q=80",
  },
];

const Ocorrencias: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#f6f9fb] font-sans">
      <MainHeader />

      {/* Conteúdo */}
      <main className="px-10 pt-10 max-w-[1300px] mx-auto pb-20">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold text-[#222] mb-2">Ocorrências</h1>
            <p className="text-lg text-[#222] text-opacity-80">
              Visualize e gerencie as ocorrências registradas nas unidades.
            </p>
          </div>
          <button
            className="flex items-center gap-2 px-5 py-2 bg-[#b0bdc6] bg-opacity-60 rounded-xl text-[#222] font-semibold text-base shadow hover:bg-opacity-80 transition"
            onClick={() => navigate("/novaocorrencia")}
          >
            + Nova Ocorrência
          </button>
        </div>
        {/* Barra de busca */}
        <div className="mb-6">
          <div className="relative w-full">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[#fff] opacity-60">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path stroke="currentColor" strokeWidth="2" d="M20 20l-3-3" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Buscar Ocorrências"
              className="w-full pl-16 pr-7 py-4 rounded-lg bg-[#b0bdc6] bg-opacity-60 text-[#222] text-lg placeholder-white placeholder-opacity-80 focus:outline-none"
            />
          </div>
        </div>
        {/* Filtros */}
        <div className="flex gap-4 mb-6">
          <button className="flex items-center gap-2 px-6 py-2 bg-[#b0bdc6] bg-opacity-60 rounded-lg text-[#222] font-semibold text-base">
            Status{" "}
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5" stroke="#222" strokeWidth="2" />
            </svg>
          </button>
          <button className="flex items-center gap-2 px-6 py-2 bg-[#b0bdc6] bg-opacity-60 rounded-lg text-[#222] font-semibold text-base">
            Prioridade{" "}
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5" stroke="#222" strokeWidth="2" />
            </svg>
          </button>
          <button className="flex items-center gap-2 px-6 py-2 bg-[#b0bdc6] bg-opacity-60 rounded-lg text-[#222] font-semibold text-base">
            Data{" "}
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5" stroke="#222" strokeWidth="2" />
            </svg>
          </button>
        </div>
        {/* Tabela */}
        <div className="bg-white rounded-2xl shadow p-4 overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="text-[#222] text-opacity-80 text-base">
                <th className="py-3 px-4 font-semibold">ID</th>
                <th className="py-3 px-4 font-semibold">Unidade</th>
                <th className="py-3 px-4 font-semibold">Data</th>
                <th className="py-3 px-4 font-semibold">Status</th>
                <th className="py-3 px-4 font-semibold">Prioridade</th>
                <th className="py-3 px-4 font-semibold">Descrição</th>
                <th className="py-3 px-4 font-semibold">Fotos</th>
              </tr>
            </thead>
            <tbody>
              {ocorrencias.map((o) => (
                <tr
                  key={o.id}
                  className="border-t border-[#e3e8ee] hover:bg-[#f6f9fb] transition"
                >
                  <td
                    className="py-3 px-4 font-medium text-[#2196C9] cursor-pointer hover:underline"
                    onClick={() => navigate("/detalhesocorrencias")}
                  >
                    {o.id}
                  </td>
                  <td className="py-3 px-4 text-[#2196C9] font-semibold cursor-pointer hover:underline">
                    {o.unidade}
                  </td>
                  <td className="py-3 px-4">{o.data}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-4 py-1 rounded-full text-sm font-semibold ${
                        o.status === "Em aberto"
                          ? "bg-[#e3e8ee] text-[#222]"
                          : "bg-[#b0bdc6] text-[#222]"
                      }`}
                    >
                      {o.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-4 py-1 rounded-full text-sm font-semibold ${
                        o.prioridade === "Alta"
                          ? "bg-[#e3e8ee] text-[#222]"
                          : o.prioridade === "Média"
                          ? "bg-[#b0bdc6] text-[#222]"
                          : "bg-[#f6f9fb] text-[#222]"
                      }`}
                    >
                      {o.prioridade}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-[#222] text-opacity-80">
                    {o.descricao}
                  </td>
                  <td className="py-3 px-4">
                    <img
                      src={o.foto}
                      alt="Foto"
                      className="w-10 h-10 rounded-full object-cover border-2 border-[#e3e8ee]"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Ocorrencias;
