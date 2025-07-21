import React from "react";
import MainHeader from "../../components/MainHeader";

const DetalhesOcorrencias: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f6f9fb] font-sans">
      <MainHeader />

      <main className="px-10 pt-10 max-w-[1100px] mx-auto pb-20">
        <h1 className="text-3xl font-bold text-[#222] mb-1">INC-123456</h1>
        <h2 className="text-xl font-semibold text-[#222] mb-8">
          Detalhamento da Ocorrência
        </h2>
        {/* Barra de progresso */}
        <div className="flex items-center mb-10">
          {["Reportado", "Em análise", "Em Andamento", "Concluído"].map(
            (etapa, idx, arr) => (
              <React.Fragment key={etapa}>
                <div className="flex flex-col items-center">
                  <span className="text-xs text-[#222] mb-2">
                    {idx === 0 ? "Apr 25, 10:53 AM" : ""}
                  </span>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center z-10 ${
                      idx <= 2
                        ? "bg-[#2196C9] border-[#2196C9]"
                        : "bg-white border-[#b0bdc6]"
                    }`}
                  ></div>
                  <span className="text-sm text-[#222] mt-2">{etapa}</span>
                </div>
                {idx < arr.length - 1 && (
                  <div
                    className={`h-1 ${
                      idx < 2 ? "bg-[#2196C9]" : "bg-[#b0bdc6]"
                    } flex-1`}
                    style={{ minWidth: 40 }}
                  />
                )}
              </React.Fragment>
            )
          )}
        </div>
        {/* Card de detalhes */}
        <div className="bg-white rounded-xl border border-[#e3e8ee] p-8 mb-10 grid grid-cols-3 gap-8">
          <div>
            <div className="font-semibold text-lg text-[#222] mb-1">
              Emissor
            </div>
            <div className="mb-4">João Vitor, Araxá</div>
            <div className="font-semibold text-lg text-[#222] mb-1">
              Localização
            </div>
            <a href="#" className="text-[#2196C9] underline">
              Rua Inácio Higino 673,
              <br />
              Vila Velha, ES, 29101-085
            </a>
          </div>
          <div>
            <div className="font-semibold text-lg text-[#222] mb-1">
              Descrição do Incidente
            </div>
            <div className="mb-4">
              O Incidente foi identificado no setor de engenharia e reportado
              por João Vitor
            </div>
            <div className="font-semibold text-lg text-[#222] mb-1">
              Investigadores
            </div>
            <div>João Vitor</div>
          </div>
          <div>
            <div className="font-semibold text-lg text-[#222] mb-1">Custos</div>
            <div className="mb-4 font-bold text-xl text-[#222]">R$ 2500,00</div>
            <div className="font-semibold text-lg text-[#222] mb-1">
              Arquivos
            </div>
            <div className="flex gap-2 mt-2">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=60&q=80"
                alt="Arquivo"
                className="w-12 h-12 rounded object-cover border border-[#e3e8ee]"
              />
              <div className="w-12 h-12 rounded bg-[#f6f9fb] border border-[#e3e8ee] flex items-center justify-center">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <rect
                    x="3"
                    y="7"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="#2196C9"
                    strokeWidth="2"
                  />
                  <path d="M3 7l9 6 9-6" stroke="#2196C9" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Histórico */}
        <div className="bg-white rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="font-semibold text-lg text-[#222]">
              Histórico da Ocorrência
            </span>
            <div className="flex gap-2">
              <button className="px-4 py-1 rounded bg-[#e3e8ee] text-[#222] font-semibold">
                Editar
              </button>
              <button className="px-4 py-1 rounded bg-[#2196C9] text-white font-semibold">
                Exportar
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4 bg-[#f6f9fb] rounded-lg px-4 py-3">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <rect
                  x="3"
                  y="7"
                  width="18"
                  height="14"
                  rx="2"
                  stroke="#2196C9"
                  strokeWidth="2"
                />
                <path d="M3 7l9 6 9-6" stroke="#2196C9" strokeWidth="2" />
              </svg>
              <span className="flex-1 text-[#222]">
                E-mail de notificação enviado
              </span>
              <span className="text-[#b0bdc6] text-sm">24/04/2023, 10:25</span>
            </div>
            <div className="flex items-center gap-4 bg-[#f6f9fb] rounded-lg px-4 py-3">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <rect
                  x="3"
                  y="7"
                  width="18"
                  height="14"
                  rx="2"
                  stroke="#2196C9"
                  strokeWidth="2"
                />
                <path d="M3 7l9 6 9-6" stroke="#2196C9" strokeWidth="2" />
              </svg>
              <span className="flex-1 text-[#222]">
                E-mail de notificação enviado
              </span>
              <span className="text-[#b0bdc6] text-sm">24/04/2023, 10:44</span>
            </div>
            <div className="flex items-center gap-4 bg-[#f6f9fb] rounded-lg px-4 py-3">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <rect
                  x="3"
                  y="7"
                  width="18"
                  height="14"
                  rx="2"
                  stroke="#2196C9"
                  strokeWidth="2"
                />
                <path d="M3 7l9 6 9-6" stroke="#2196C9" strokeWidth="2" />
              </svg>
              <span className="flex-1 text-[#222]">
                E-mail de notificação enviado
              </span>
              <span className="text-[#b0bdc6] text-sm">24/04/2023, 10:46</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DetalhesOcorrencias;
