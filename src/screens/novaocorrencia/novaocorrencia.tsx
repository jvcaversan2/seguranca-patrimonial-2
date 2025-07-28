import React, { useState } from "react";
import MainHeader from "../../components/MainHeader";
import { ocorrencias } from "../../data/data";
import { useCreateOccurrence } from "../../hooks/useCreateOccurrence";
import { useUnidades } from "../../hooks/useUnidades";
import { useSetores } from "../../hooks/useSetores";
import { OcorrenciaForm } from "../../components/Form";

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
        location: unidade,
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

  return (
    <div className="min-h-screen bg-[#f6f9fb] font-sans">
      <MainHeader />
      <main className="px-10 pt-10 max-w-[800px] mx-auto pb-20">
        <h1 className="text-4xl font-bold text-[#222] mb-8">
          Registro de Ocorrência
        </h1>
        <OcorrenciaForm
          unidade={unidade}
          setUnidade={setUnidade}
          setor={setor}
          setSetor={setSetor}
          data={data}
          setData={setData}
          hora={hora}
          setHora={setHora}
          categoria={categoria}
          setCategoria={setCategoria}
          gravidade={gravidade}
          setGravidade={setGravidade}
          classificacao={classificacao}
          setClassificacao={setClassificacao}
          selectedTipo={selectedTipo}
          setSelectedTipo={setSelectedTipo}
          descricao={descricao}
          setDescricao={setDescricao}
          cidade={cidade}
          setCidade={setCidade}
          status={status}
          setStatus={setStatus}
          moeda={moeda}
          setMoeda={setMoeda}
          custoEvento={custoEvento}
          setCustoEvento={setCustoEvento}
          custoTotal={custoTotal}
          setCustoTotal={setCustoTotal}
          handleSubmit={handleSubmit}
          isPending={isPending}
          todasUnidades={todasUnidades}
          setores={setores}
          isLoadingUnidades={isLoading}
          isLoadingSetores={loadingSetores}
          ocorrencias={ocorrencias}
        />
      </main>
    </div>
  );
};

export default NovaOcorrencia;
