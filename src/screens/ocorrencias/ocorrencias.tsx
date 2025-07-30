import React from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../../components/MainHeader";
import { useOccurrences } from "../../hooks/useOccurrences";
import { statusMap, statusColorMap } from "../../utils/statusUtils";

const Ocorrencias: React.FC = () => {
  const navigate = useNavigate();
  const { data: ocorrencias, isLoading } = useOccurrences();

  return (
    <div className="min-h-screen bg-[#f6f9fb] font-sans">
      <MainHeader />

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
              disabled
            />
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          {["Status", "Data"].map((f) => (
            <button
              key={f}
              className="flex items-center gap-2 px-6 py-2 bg-[#b0bdc6] bg-opacity-60 rounded-lg text-[#222] font-semibold text-base"
            >
              {f}
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5" stroke="#222" strokeWidth="2" />
              </svg>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow p-4 overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="text-[#222] text-opacity-80 text-base">
                <th className="py-3 px-4 font-semibold">ID</th>
                <th className="py-3 px-4 font-semibold">Unidade</th>
                <th className="py-3 px-4 font-semibold">Data</th>
                <th className="py-3 px-4 font-semibold">Status</th>
                <th className="py-3 px-4 font-semibold">Descrição</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={5} className="py-6 px-4 text-center text-[#999]">
                    Carregando...
                  </td>
                </tr>
              ) : ocorrencias && ocorrencias.length > 0 ? (
                ocorrencias.map((o) => (
                  <tr
                    key={o.id}
                    className="border-t border-[#e3e8ee] hover:bg-[#f6f9fb] transition"
                  >
                    <td
                      className="py-3 px-4 font-medium text-[#2196C9] cursor-pointer hover:underline"
                      onClick={() => navigate(`/detalhesocorrencias/${o.id}`)}
                    >
                      {o.id}
                    </td>
                    <td className="py-3 px-4 text-[#2196C9] font-semibold cursor-pointer hover:underline">
                      {o.location}
                    </td>
                    <td className="py-3 px-4">{o.date}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-4 py-1 rounded-full text-sm font-semibold ${
                          o.status && statusColorMap[o.status]
                            ? statusColorMap[o.status]
                            : "bg-[#e3e8ee] text-[#222]"
                        }`}
                      >
                        {o.status && statusMap[o.status]
                          ? statusMap[o.status]
                          : "Indefinido"}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-[#222] text-opacity-80">
                      {o.report}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-6 px-4 text-center text-[#999]">
                    Nenhuma ocorrência encontrada.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Ocorrencias;
