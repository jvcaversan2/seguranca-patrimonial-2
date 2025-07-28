import React from "react";

type Option = { id: number; name: string };

type OcorrenciaFormProps = {
  unidade: string;
  setUnidade: (value: string) => void;
  setor: string;
  setSetor: (value: string) => void;
  data: string;
  setData: (value: string) => void;
  hora: string;
  setHora: (value: string) => void;
  categoria: string;
  setCategoria: (value: string) => void;
  gravidade: string;
  setGravidade: (value: string) => void;
  classificacao: string;
  setClassificacao: (value: string) => void;
  selectedTipo: "AVU" | "BRO" | "";
  setSelectedTipo: (value: "AVU" | "BRO" | "") => void;
  descricao: string;
  setDescricao: (value: string) => void;
  cidade: string;
  setCidade: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
  moeda: string;
  setMoeda: (value: string) => void;
  custoEvento: string;
  setCustoEvento: (value: string) => void;
  custoTotal: string;
  setCustoTotal: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  isPending: boolean;
  todasUnidades: Option[] | undefined;
  setores: Option[] | undefined;
  isLoadingUnidades: boolean;
  isLoadingSetores: boolean;
  ocorrencias: string[];
};

export const OcorrenciaForm: React.FC<OcorrenciaFormProps> = ({
  unidade,
  setUnidade,
  setor,
  setSetor,
  data,
  setData,
  hora,
  setHora,
  categoria,
  setCategoria,
  gravidade,
  setGravidade,
  classificacao,
  setClassificacao,
  selectedTipo,
  setSelectedTipo,
  descricao,
  setDescricao,
  cidade,
  setCidade,
  status,
  setStatus,
  moeda,
  setMoeda,
  custoEvento,
  setCustoEvento,
  custoTotal,
  setCustoTotal,
  handleSubmit,
  isPending,
  todasUnidades,
  setores,
  isLoadingUnidades,
  isLoadingSetores,
  ocorrencias,
}) => {
  const gravidades = ["Leve", "Moderado", "Grave"];
  const classificacoes = ["Positiva", "Negativa"];
  const statusList = ["Aberto", "Fechado", "Em andamento"];
  const moedas = ["BRL", "USD", "EUR"];

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block font-semibold mb-1 text-[#222]">
          Unidade Fabril
        </label>
        <select
          value={unidade}
          onChange={(e) => setUnidade(e.target.value)}
          className="w-full rounded-lg border border-[#e3e8ee] bg-white px-4 py-3"
        >
          <option value="">Selecione</option>
          {isLoadingUnidades ? (
            <option>Carregando unidades...</option>
          ) : (
            (todasUnidades ?? []).map((u) => (
              <option key={u.id} value={u.name}>
                {u.name}
              </option>
            ))
          )}
        </select>
      </div>

      <div>
        <label className="block font-semibold mb-1 text-[#222]">
          Setor / Local da Ocorrência
        </label>
        <select
          value={setor}
          onChange={(e) => setSetor(e.target.value)}
          className="w-full rounded-lg border border-[#e3e8ee] bg-white px-4 py-3"
        >
          <option value="">Selecione</option>
          {isLoadingSetores ? (
            <option>Carregando setores...</option>
          ) : (
            (setores ?? []).map((s) => (
              <option key={s.id} value={s.name}>
                {s.name}
              </option>
            ))
          )}
        </select>
      </div>

      <div>
        <label className="block font-semibold mb-1 text-[#222]">Tipo</label>
        <div className="flex gap-3 mt-1 mb-2">
          {["AVU", "BRO"].map((tipo) => (
            <button
              key={tipo}
              type="button"
              className={`px-6 h-9 rounded-full border text-base font-medium transition-all shadow-sm ${
                selectedTipo === tipo
                  ? "bg-[#2196C9] text-white border-[#2196C9] ring-2 ring-[#2196C9]/30"
                  : "bg-white text-[#222] border-[#e3e8ee] hover:bg-[#e8f0fa]"
              }`}
              onClick={() => setSelectedTipo(tipo as "AVU" | "BRO")}
            >
              {tipo}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block font-semibold mb-1 text-[#222]">
          Data e Hora da Ocorrência
        </label>
        <div className="flex gap-4">
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="w-1/2 rounded-lg border border-[#e3e8ee] px-4 py-3 bg-white"
          />
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            className="w-1/2 rounded-lg border border-[#e3e8ee] px-4 py-3 bg-white"
          />
        </div>
      </div>

      <div>
        <label className="block font-semibold mb-1 text-[#222]">Cidade</label>
        <input
          type="text"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          className="w-full rounded-lg border border-[#e3e8ee] px-4 py-3 bg-white"
          placeholder="Digite a cidade"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1 text-[#222]">
          Categoria da Ocorrência
        </label>
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="w-full rounded-lg border border-[#e3e8ee] px-4 py-3 bg-white"
        >
          {ocorrencias.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-semibold mb-1 text-[#222]">
          Classificação
        </label>
        <select
          value={classificacao}
          onChange={(e) => setClassificacao(e.target.value)}
          className="w-full rounded-lg border border-[#e3e8ee] px-4 py-3 bg-white"
        >
          {classificacoes.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-semibold mb-1 text-[#222]">
          Gravidade
        </label>
        <select
          value={gravidade}
          onChange={(e) => setGravidade(e.target.value)}
          className="w-full rounded-lg border border-[#e3e8ee] px-4 py-3 bg-white"
        >
          {gravidades.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-semibold mb-1 text-[#222]">
          Descrição da Ocorrência
        </label>
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className="w-full rounded-lg border border-[#e3e8ee] px-4 py-3 bg-white"
          rows={3}
          placeholder="Descreva detalhadamente o que aconteceu"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1 text-[#222]">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full rounded-lg border border-[#e3e8ee] px-4 py-3 bg-white"
        >
          {statusList.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-semibold mb-1 text-[#222]">
          Moeda de Custo
        </label>
        <select
          value={moeda}
          onChange={(e) => setMoeda(e.target.value)}
          className="w-full rounded-lg border border-[#e3e8ee] px-4 py-3 bg-white"
        >
          {moedas.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-4">
        <div className="w-1/2">
          <label className="block font-semibold mb-1 text-[#222]">
            Custo do Evento
          </label>
          <input
            type="number"
            value={custoEvento}
            onChange={(e) => setCustoEvento(e.target.value)}
            className="w-full rounded-lg border border-[#e3e8ee] px-4 py-3 bg-white"
            placeholder="Ex: 1000"
          />
        </div>
        <div className="w-1/2">
          <label className="block font-semibold mb-1 text-[#222]">
            Custo Total
          </label>
          <input
            type="number"
            value={custoTotal}
            onChange={(e) => setCustoTotal(e.target.value)}
            className="w-full rounded-lg border border-[#e3e8ee] px-4 py-3 bg-white"
            placeholder="Ex: 1500"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full py-3 bg-[#2196C9] hover:bg-[#176b8a] text-white font-bold rounded-lg text-lg mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isPending ? "Registrando..." : "Registrar Ocorrência"}
      </button>
    </form>
  );
};
