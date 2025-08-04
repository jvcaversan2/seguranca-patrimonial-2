import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainHeader from "../../components/MainHeader";
import { useOccurrenceById } from "../../hooks/useOccorrencyById";
import { statusMap } from "../../utils/statusUtils";

const DetalhesOcorrencias: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: occurrence, isLoading } = useOccurrenceById(id);

  const navigate = useNavigate();

  if (isLoading || !occurrence) {
    return (
      <div className="min-h-screen bg-[#f6f9fb] font-sans">
        <MainHeader />
        <main className="px-10 pt-10 max-w-[1100px] mx-auto pb-20">
          <p className="text-[#222]">Carregando ocorrência...</p>
        </main>
      </div>
    );
  }

  const etapas = ["Aberto", "Em Análise", "Em Andamento", "Concluído"];
  const statusFormatado =
    statusMap[occurrence.status as keyof typeof statusMap];
  const statusAtualIndex = etapas.findIndex(
    (etapa) => etapa === statusFormatado
  );
  const etapaIndexValido = statusAtualIndex === -1 ? 0 : statusAtualIndex;

  return (
    <div className="min-h-screen bg-[#f6f9fb] font-sans">
      <MainHeader />

      <main className="px-10 pt-10 max-w-[1100px] mx-auto pb-20">
        <h1 className="text-3xl font-bold text-[#222] mb-1">
          OC-{occurrence.id}
        </h1>
        <h2 className="text-xl font-semibold text-[#222] mb-8">
          Detalhamento da Ocorrência
        </h2>

        <div className="flex items-center mb-10">
          {etapas.map((etapa, idx, arr) => (
            <React.Fragment key={etapa}>
              <div className="flex flex-col items-center">
                <span className="text-xs text-[#222] mb-2">
                  {idx === 0 && occurrence.createdAt
                    ? new Date(occurrence.createdAt).toLocaleString("pt-BR")
                    : ""}
                </span>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center z-10 ${
                    idx <= etapaIndexValido
                      ? "bg-[#2196C9] border-[#2196C9]"
                      : "bg-white border-[#b0bdc6]"
                  }`}
                ></div>
                <span className="text-sm text-[#222] mt-2">{etapa}</span>
              </div>
              {idx < arr.length - 1 && (
                <div
                  className={`h-1 ${
                    idx < etapaIndexValido ? "bg-[#2196C9]" : "bg-[#b0bdc6]"
                  } flex-1`}
                  style={{ minWidth: 40 }}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="bg-white rounded-xl border border-[#e3e8ee] p-8 mb-10 grid grid-cols-3 gap-8">
          <div>
            <div className="font-semibold text-lg text-[#222] mb-1">
              Emissor
            </div>
            <div className="mb-4">{occurrence.emitente.name}</div>

            <div className="font-semibold text-lg text-[#222] mb-1">
              Localização
            </div>
            <div className="text-[#2196C9] underline">
              {occurrence.location}
              <br />
              {occurrence.city}
            </div>
          </div>

          <div>
            <div className="font-semibold text-lg text-[#222] mb-1">
              Descrição
            </div>
            <div className="mb-4">{occurrence.report}</div>

            <div className="font-semibold text-lg text-[#222] mb-1">Status</div>
            <div>{statusMap[occurrence.status as keyof typeof statusMap]}</div>
          </div>

          <div>
            <div className="font-semibold text-lg text-[#222] mb-1">Custos</div>
            <div className="mb-4 font-bold text-xl text-[#222]">
              R$ {Number(occurrence.totalCost || 0).toFixed(2)}
            </div>

            <div className="font-semibold text-lg text-[#222] mb-1">
              Arquivos
            </div>
            <div className="flex gap-2 mt-2">
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

        <div className="bg-white rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="font-semibold text-lg text-[#222]">
              Histórico da Ocorrência
            </span>
            <div className="flex gap-2">
              <button
                className="px-4 py-1 rounded bg-[#e3e8ee] text-[#222] font-semibold"
                onClick={() =>
                  navigate(`/detalhesocorrencias/${occurrence.id}/editar`)
                }
              >
                Editar
              </button>
              <button className="px-4 py-1 rounded bg-[#2196C9] text-white font-semibold">
                Exportar
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {[1, 2, 3].map((_, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-[#f6f9fb] rounded-lg px-4 py-3"
              >
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
                <span className="text-[#b0bdc6] text-sm">
                  {new Date(occurrence.createdAt).toLocaleString("pt-BR")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DetalhesOcorrencias;
