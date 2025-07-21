import React, { useState } from "react";
import MainHeader from "../../components/MainHeader";

const NovaOcorrencia: React.FC = () => {
  const [unidade, setUnidade] = useState("Unidade A");
  const [setor, setSetor] = useState("Produção");
  const [data, setData] = useState("2024-04-23");
  const [hora, setHora] = useState("15:30");
  const [categoria, setCategoria] = useState<string[]>(["Segurança"]);
  const [descricao, setDescricao] = useState("");
  const [acoes, setAcoes] = useState("");
  const [recomendacoes, setRecomendacoes] = useState("");
  const [anexos, setAnexos] = useState<File[]>([]);

  const categorias = [
    "Segurança",
    "Meio Ambiente",
    "Qualidade",
    "Processo",
    "Manutenção",
    "Outros",
  ];

  function handleCategoria(cat: string) {
    setCategoria((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  }

  function handleAnexos(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setAnexos(Array.from(e.target.files));
    }
  }

  return (
    <div className="min-h-screen bg-[#f6f9fb] font-sans">
      <MainHeader />
      <main className="px-10 pt-10 max-w-[800px] mx-auto pb-20">
        <h1 className="text-4xl font-bold text-[#222] mb-8">
          Registro de Ocorrência
        </h1>
        <form className="space-y-6">
          <div>
            <label className="block font-semibold mb-1 text-[#222]">
              Unidade Fabril
            </label>
            <select
              value={unidade}
              onChange={(e) => setUnidade(e.target.value)}
              className="w-full rounded-lg border border-[#e3e8ee] bg-white px-4 py-3 text-base"
            >
              <option>Unidade A</option>
              <option>Unidade B</option>
              <option>Unidade C</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1 text-[#222]">
              Setor / Local da Ocorrência
            </label>
            <select
              value={setor}
              onChange={(e) => setSetor(e.target.value)}
              className="w-full rounded-lg border border-[#e3e8ee] bg-white px-4 py-3 text-base"
            >
              <option>Produção</option>
              <option>Embalagem</option>
              <option>Expedição</option>
            </select>
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
                className="w-1/2 rounded-lg border border-[#e3e8ee] bg-white px-4 py-3 text-base"
              />
              <input
                type="time"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
                className="w-1/2 rounded-lg border border-[#e3e8ee] bg-white px-4 py-3 text-base"
              />
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-1 text-[#222]">
              Categoria
            </label>
            <div className="flex flex-wrap gap-2">
              {categorias.map((cat) => (
                <button
                  type="button"
                  key={cat}
                  className={`px-4 py-2 rounded-lg border ${
                    categoria.includes(cat)
                      ? "bg-[#e3e8ee] border-[#2196C9] text-[#222]"
                      : "bg-white border-[#e3e8ee] text-[#222]"
                  }`}
                  onClick={() => handleCategoria(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-1 text-[#222]">
              Descrição da Ocorrência
            </label>
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="w-full rounded-lg border border-[#e3e8ee] bg-white px-4 py-3 text-base"
              rows={2}
              placeholder="Descreva detalhadamente o que aconteceu"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-[#222]">
              Ações Imediatas
            </label>
            <textarea
              value={acoes}
              onChange={(e) => setAcoes(e.target.value)}
              className="w-full rounded-lg border border-[#e3e8ee] bg-white px-4 py-3 text-base"
              rows={2}
              placeholder="Quais ações foram tomadas imediatamente após a ocorrência?"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-[#222]">
              Recomendações
            </label>
            <textarea
              value={recomendacoes}
              onChange={(e) => setRecomendacoes(e.target.value)}
              className="w-full rounded-lg border border-[#e3e8ee] bg-white px-4 py-3 text-base"
              rows={2}
              placeholder="Quais recomendações para evitar futuras ocorrências?"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-[#222]">
              Evidências / Anexos
            </label>
            <div className="w-full rounded-xl border border-[#e3e8ee] bg-white p-6 flex flex-col gap-3">
              <span className="font-semibold text-[#222] mb-2">
                Arraste e solte arquivos ou{" "}
                <span className="underline cursor-pointer">
                  Selecionar arquivos
                </span>
              </span>
              <input
                type="file"
                multiple
                className="hidden"
                id="anexos"
                onChange={handleAnexos}
              />
              <div className="flex flex-col gap-2">
                {anexos.map((file, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-[#f6f9fb] rounded-lg px-3 py-2 w-fit"
                  >
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
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
                    <span className="text-[#222] text-base">{file.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <label className="block font-semibold mb-1 text-[#222]">
                Responsável pelo Registro
              </label>
              <span className="block text-[#222]">João da Silva</span>
            </div>
            <div>
              <label className="block font-semibold mb-1 text-[#222]">
                Data de Registro
              </label>
              <span className="block text-[#222]">24/04/2024</span>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#2196C9] hover:bg-[#176b8a] text-white font-bold rounded-lg transition text-lg shadow-md mt-2"
          >
            Registrar Ocorrência
          </button>
        </form>
      </main>
    </div>
  );
};

export default NovaOcorrencia;
