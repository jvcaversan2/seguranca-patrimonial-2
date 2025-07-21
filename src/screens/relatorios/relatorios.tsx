import React, { useState } from "react";
import MainHeader from "../../components/MainHeader";

const destaqueCards = [
  {
    title: "Total de Ocorrências",
    value: 128,
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="8"
          stroke="#2196C9"
          strokeWidth="2"
        />
        <path d="M12 8v4l3 3" stroke="#2196C9" strokeWidth="2" />
      </svg>
    ),
    color: "#2196C9",
  },
  {
    title: "Ocorrências Abertas",
    value: 14,
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="#B85C2B" strokeWidth="2" />
        <path d="M12 8v4l3 3" stroke="#B85C2B" strokeWidth="2" />
      </svg>
    ),
    color: "#B85C2B",
  },
  {
    title: "Ocorrências Resolvidas",
    value: 104,
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="#5B7F95" strokeWidth="2" />
        <path d="M9 12l2 2 4-4" stroke="#5B7F95" strokeWidth="2" />
      </svg>
    ),
    color: "#5B7F95",
  },
  {
    title: "Tempo Médio de Resolução",
    value: "2d 4h",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="8"
          stroke="#AFC3D6"
          strokeWidth="2"
        />
        <path d="M12 8v4l3 3" stroke="#AFC3D6" strokeWidth="2" />
      </svg>
    ),
    color: "#AFC3D6",
  },
];

const mockCharts = [
  {
    title: "Ocorrências por Tipo",
    chart: (
      <svg width="100%" height="120" viewBox="0 0 300 120" fill="none">
        <rect x="0" y="10" width="180" height="18" rx="6" fill="#2196C9" />
        <rect x="0" y="38" width="120" height="18" rx="6" fill="#B85C2B" />
        <rect x="0" y="66" width="90" height="18" rx="6" fill="#5B7F95" />
        <rect x="0" y="94" width="60" height="18" rx="6" fill="#AFC3D6" />
        <text x="190" y="24" fontSize="14" fill="#222">
          Acesso Indevido
        </text>
        <text x="130" y="52" fontSize="14" fill="#222">
          Furto
        </text>
        <text x="100" y="80" fontSize="14" fill="#222">
          Incêndio
        </text>
        <text x="70" y="108" fontSize="14" fill="#222">
          Outros
        </text>
      </svg>
    ),
  },
  {
    title: "Evolução de Ocorrências (Últimos 12 meses)",
    chart: (
      <svg width="100%" height="120" viewBox="0 0 300 120" fill="none">
        <polyline
          points="0,100 30,80 60,90 90,60 120,70 150,40 180,60 210,30 240,50 270,40 300,60"
          fill="none"
          stroke="#2196C9"
          strokeWidth="4"
        />
        {Array.from({ length: 11 }).map((_, i) => (
          <circle
            key={i}
            cx={i * 30}
            cy={[100, 80, 90, 60, 70, 40, 60, 30, 50, 40, 60][i]}
            r="5"
            fill="#2196C9"
          />
        ))}
        <text x="0" y="115" fontSize="12" fill="#222">
          Mai
        </text>
        <text x="60" y="115" fontSize="12" fill="#222">
          Jul
        </text>
        <text x="120" y="115" fontSize="12" fill="#222">
          Set
        </text>
        <text x="180" y="115" fontSize="12" fill="#222">
          Nov
        </text>
        <text x="240" y="115" fontSize="12" fill="#222">
          Jan
        </text>
      </svg>
    ),
  },
  {
    title: "Ocorrências por Local",
    chart: (
      <svg width="100%" height="120" viewBox="0 0 300 120" fill="none">
        <rect x="40" y="60" width="10" height="10" rx="5" fill="#2196C9" />
        <rect x="80" y="80" width="14" height="14" rx="7" fill="#B85C2B" />
        <rect x="120" y="40" width="18" height="18" rx="9" fill="#5B7F95" />
        <rect x="200" y="90" width="12" height="12" rx="6" fill="#AFC3D6" />
        <rect x="250" y="60" width="16" height="16" rx="8" fill="#2196C9" />
        <rect x="180" y="30" width="10" height="10" rx="5" fill="#B85C2B" />
        <rect x="60" y="30" width="8" height="8" rx="4" fill="#5B7F95" />
        <text x="60" y="110" fontSize="13" fill="#222">
          Portaria
        </text>
        <text x="120" y="70" fontSize="13" fill="#222">
          Estacionamento
        </text>
        <text x="200" y="115" fontSize="13" fill="#222">
          Almoxarifado
        </text>
      </svg>
    ),
  },
  {
    title: "Mapa de Ocorrências (Heatmap)",
    chart: (
      <svg width="100%" height="120" viewBox="0 0 300 120" fill="none">
        <rect x="0" y="0" width="300" height="120" rx="16" fill="#e8f0fa" />
        <ellipse
          cx="80"
          cy="60"
          rx="30"
          ry="18"
          fill="#2196C9"
          fillOpacity="0.25"
        />
        <ellipse
          cx="180"
          cy="40"
          rx="20"
          ry="10"
          fill="#B85C2B"
          fillOpacity="0.25"
        />
        <ellipse
          cx="220"
          cy="90"
          rx="25"
          ry="12"
          fill="#5B7F95"
          fillOpacity="0.25"
        />
        <circle cx="80" cy="60" r="6" fill="#2196C9" />
        <circle cx="180" cy="40" r="6" fill="#B85C2B" />
        <circle cx="220" cy="90" r="6" fill="#5B7F95" />
        <text x="60" y="110" fontSize="13" fill="#222">
          Portaria
        </text>
        <text x="160" y="30" fontSize="13" fill="#222">
          Estacionamento
        </text>
        <text x="200" y="115" fontSize="13" fill="#222">
          Almoxarifado
        </text>
      </svg>
    ),
  },
  {
    title: "Ranking de Locais com Mais Ocorrências",
    chart: (
      <div className="w-full flex flex-col gap-2 mt-2">
        {[
          { local: "Portaria", valor: 32 },
          { local: "Estacionamento", valor: 28 },
          { local: "Almoxarifado", valor: 21 },
          { local: "Recepção", valor: 17 },
          { local: "Área Externa", valor: 13 },
        ].map((item, idx) => (
          <div
            key={item.local}
            className="flex items-center justify-between bg-[#e8f0fa] rounded-lg px-4 py-2"
          >
            <span className="font-semibold text-[#222]">
              {idx + 1}. {item.local}
            </span>
            <span className="text-[#2196C9] font-bold">{item.valor}</span>
          </div>
        ))}
      </div>
    ),
  },
];

const filtros = [
  "Últimos 30 dias",
  "Últimos 12 meses",
  "Este ano",
  "Personalizado",
];

const Relatorios: React.FC = () => {
  const [filtro, setFiltro] = useState(filtros[0]);
  return (
    <div className="min-h-screen bg-[#f6f9fb] font-sans">
      <MainHeader />
      <main className="px-8 pt-10 max-w-7xl mx-auto pb-20">
        <h1 className="text-4xl font-bold text-[#222] mb-8">
          Relatórios de Ocorrências
        </h1>
        {/* Filtros */}
        <div className="flex flex-wrap gap-4 mb-8">
          {filtros.map((f) => (
            <button
              key={f}
              onClick={() => setFiltro(f)}
              className={`px-6 py-2 rounded-full border text-base font-semibold transition shadow-sm ${
                filtro === f
                  ? "bg-[#2196C9] text-white border-[#2196C9]"
                  : "bg-white text-[#222] border-[#e3e8ee] hover:bg-[#e8f0fa]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        {/* Cards de destaque */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {destaqueCards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-4 border border-[#e3e8ee] hover:shadow-lg transition"
            >
              <div
                className="w-16 h-16 flex items-center justify-center rounded-xl"
                style={{ background: card.color + "22" }}
              >
                {card.icon}
              </div>
              <div>
                <div
                  className="text-2xl font-bold"
                  style={{ color: card.color }}
                >
                  {card.value}
                </div>
                <div className="text-base font-semibold text-[#222]">
                  {card.title}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Grid de relatórios BI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {mockCharts.map((chart, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-7 flex flex-col border border-[#e3e8ee] hover:shadow-lg transition"
            >
              <div className="text-lg font-semibold text-[#222] mb-4">
                {chart.title}
              </div>
              <div className="w-full flex-1 flex items-center justify-center mb-2">
                {chart.chart}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Relatorios;
