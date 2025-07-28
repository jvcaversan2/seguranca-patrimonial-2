import React, { useState } from "react";
import MainHeader from "../../components/MainHeader";
import { ocorrencias } from "../../data/data";
import { useCreateOccurrence } from "../../hooks/useCreateOccurrence";
import { useUnidades } from "../../hooks/useUnidades";
import { useSetores } from "../../hooks/useSetores";

const gravidades = ["Leve", "Moderado", "Grave"];
const classificacoes = ["Positiva", "Negativa"];
const statusList = ["Aberto", "Fechado", "Em andamento"];
const moedas = ["BRL", "USD", "EUR"];

const NovaOcorrencia: React.FC = () => {
  const [unidade, setUnidade] = useState("");
  const [setor, setSetor] = useState("");
  const [data, setData] = useState("2024-04-23");
  const [hora, setHora] = useState("15:30");
  const [categoria, setCategoria] = useState(ocorrencias[0]);
  const [gravidade, setGravidade] = useState(gravidades[0]);
  const [classificacao, setClassificacao] = useState(classificacoes[0]);
  const [selectedTipo, setSelectedTipo] = useState<"AVU" | "BRO" | "">("");
  const [descricao, setDescricao] = useState("");
  const [cidade, setCidade] = useState("");
  const [status, setStatus] = useState(statusList[0]);
  const [moeda, setMoeda] = useState(moedas[0]);
  const [custoEvento, setCustoEvento] = useState("");
  const [custoTotal, setCustoTotal] = useState("");

  const { mutateAsync: createOccurrence, isPending } = useCreateOccurrence(
    () => {
      alert("Ocorrência registrada com sucesso!");
    }
  );

  const { data: todasUnidades, isLoading } = useUnidades();
  const { data: setores, isLoading: loadingSetores } = useSetores();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!unidade) return alert("Selecione uma unidade");

    const gravidadeCorrigida =
      gravidade === "Moderado" ? "Moderada" : gravidade;
    const isoDateTime = new Date(`${data}T${hora}:00`).toISOString();

    try {
      await createOccurrence({
        date: data,
        time: isoDateTime,
        attendedArea: setor,
        location: unidade, // ← Enviando o nome da unidade como location
        report: descricao,
        classification: classificacao as "Positiva" | "Negativa",
        severity: gravidadeCorrigida as "Leve" | "Moderada" | "Grave",
        type: selectedTipo || undefined,
        city: cidade || undefined,
        status: status || undefined,
        currency: moeda || undefined,
        eventCost: custoEvento ? parseFloat(custoEvento) : undefined,
        totalCost: custoTotal ? parseFloat(custoTotal) : undefined,
      });
    } catch (err) {
      console.error("Erro ao registrar ocorrência:", err);
    }
  };

  console.log("todasUnidades:", todasUnidades);

  return (
    <div className="min-h-screen bg-[#f6f9fb] font-sans">
      <MainHeader />
      <main className="px-10 pt-10 max-w-[800px] mx-auto pb-20">
        <h1 className="text-4xl font-bold text-[#222] mb-8">
          Registro de Ocorrência
        </h1>
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
              {isLoading ? (
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
              {loadingSetores ? (
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
            <label className="block font-semibold mb-1 text-[#222]">
              Cidade
            </label>
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
            <label className="block font-semibold mb-1 text-[#222]">
              Status
            </label>
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
      </main>
    </div>
  );
};

export default NovaOcorrencia;
