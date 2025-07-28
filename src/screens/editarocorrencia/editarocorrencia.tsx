import React, { useEffect, useState } from "react";
import MainHeader from "../../components/MainHeader";
import { ocorrencias } from "../../data/data";
import { useUnidades } from "../../hooks/useUnidades";
import { useSetores } from "../../hooks/useSetores";
import { useParams } from "react-router-dom";

import { useUpdateOccurrence } from "../../hooks/useUpdateOccurrence";
import { useOccurrenceById } from "../../hooks/useOccorrencyById";
import { OcorrenciaForm } from "../../components/Form";

// 🔁 Importe o statusMap do seu utilitário:
import { statusMap } from "../../utils/statusUtils"; // ajuste o caminho se necessário

const gravidades = ["Leve", "Moderado", "Grave"];
const classificacoes = ["Positiva", "Negativa"];
const moedas = ["BRL", "USD", "EUR"];
const statusList = Object.keys(statusMap); // ['Aberto', 'Em_analise', 'Em_andamento', 'Concluido']

const EditarOcorrencia: React.FC = () => {
  const { id } = useParams();

  const { data: ocorrencia, isLoading: loadingOcorrencia } =
    useOccurrenceById(id);
  const { mutateAsync: updateOccurrence, isPending } = useUpdateOccurrence();

  const { data: todasUnidades, isLoading } = useUnidades();
  const { data: setores, isLoading: loadingSetores } = useSetores();

  const [unidade, setUnidade] = useState("");
  const [setor, setSetor] = useState("");
  const [dataOcorrencia, setDataOcorrencia] = useState("");
  const [hora, setHora] = useState("");
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

  useEffect(() => {
    if (ocorrencia) {
      setUnidade(ocorrencia.location || "");
      setSetor(ocorrencia.attendedArea || "");
      setDescricao(ocorrencia.report || "");
      setCategoria(ocorrencia.occurrenceFamily || ocorrencias[0]);
      setGravidade(
        ocorrencia.severity === "Moderada" ? "Moderado" : ocorrencia.severity
      );
      setClassificacao(ocorrencia.classification);
      setSelectedTipo(ocorrencia.type ?? "");
      setCidade(ocorrencia.city || "");
      setStatus(ocorrencia.status); // valor com underscore
      setMoeda(ocorrencia.currency);
      setCustoEvento(ocorrencia.eventCost?.toString() || "");
      setCustoTotal(ocorrencia.totalCost?.toString() || "");

      const dateObj = new Date(ocorrencia.time);
      setDataOcorrencia(dateObj.toISOString().slice(0, 10));
      setHora(dateObj.toTimeString().slice(0, 5));
    }
  }, [ocorrencia]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const gravidadeCorrigida =
      gravidade === "Moderado" ? "Moderada" : gravidade;
    const isoDateTime = new Date(`${dataOcorrencia}T${hora}:00`).toISOString();

    try {
      await updateOccurrence({
        id: Number(id),
        data: {
          date: dataOcorrencia,
          time: isoDateTime,
          location: unidade,
          attendedArea: setor,
          report: descricao,
          classification: classificacao as "Positiva" | "Negativa",
          severity: gravidadeCorrigida as "Leve" | "Moderada" | "Grave",
          type: selectedTipo ? (selectedTipo as "AVU" | "BRO") : undefined,
          city: cidade || undefined,
          status: status as
            | "Aberto"
            | "Em_analise"
            | "Em_andamento"
            | "Concluido"
            | undefined,
          currency: moeda as "BRL" | "USD" | "EUR",
          eventCost: custoEvento ? parseFloat(custoEvento) : undefined,
          totalCost: custoTotal ? parseFloat(custoTotal) : undefined,
        },
      });
      alert("Ocorrência atualizada com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar ocorrência:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f9fb] font-sans">
      <MainHeader />
      <main className="px-10 pt-10 max-w-[800px] mx-auto pb-20">
        <h1 className="text-4xl font-bold text-[#222] mb-8">
          Editar Ocorrência
        </h1>

        {loadingOcorrencia ? (
          <p className="text-gray-600">Carregando dados da ocorrência...</p>
        ) : (
          <OcorrenciaForm
            unidade={unidade}
            setUnidade={setUnidade}
            setor={setor}
            setSetor={setSetor}
            data={dataOcorrencia}
            setData={setDataOcorrencia}
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
        )}
      </main>
    </div>
  );
};

export default EditarOcorrencia;
