import React, { useState, useRef, useLayoutEffect } from "react";
import MainHeader from "../../components/MainHeader";
import GptMapImage from "../../assets/ChatGPT Image 21_07_2025, 13_40_14.png";

const Home: React.FC = () => {
  const [zoom, setZoom] = useState(1);
  const [minZoom, setMinZoom] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    function updateMinZoom() {
      if (containerRef.current && imgRef.current) {
        const cW = containerRef.current.offsetWidth;
        const cH = containerRef.current.offsetHeight;
        const iW = imgRef.current.naturalWidth;
        const iH = imgRef.current.naturalHeight;
        if (iW && iH) {
          const scaleW = cW / iW;
          const scaleH = cH / iH;
          const min = Math.min(scaleW, scaleH, 1);
          setMinZoom(min);
          setZoom((z) => Math.max(z, min));
        }
      }
    }
    updateMinZoom();
    window.addEventListener("resize", updateMinZoom);
    return () => window.removeEventListener("resize", updateMinZoom);
  }, []);

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.2, 2));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.2, minZoom));
  const handleCenter = () => setZoom(1);

  return (
    <div className="min-h-screen bg-[#f6fbff] font-sans">
      <MainHeader />

      {/* Título e subtítulo */}
      <section className="px-8 mt-2 mb-6 max-w-[1200px] mx-auto">
        <h1 className="text-4xl font-bold text-[#222] mb-2">
          Relatório de Gerenciamento de Incidentes
        </h1>
        <p className="text-lg text-[#5B7F95]">
          Incidentes recentes e em alta entre todos os registros
        </p>
      </section>

      {/* Mapa e SearchBar */}
      <section className="px-8 flex flex-col items-center mb-12 max-w-[1200px] mx-auto">
        {/* Barra de busca fora do mapa */}
        <div className="w-full max-w-3xl mb-4 relative">
          <span className="absolute left-6 top-1/2 -translate-y-1/2 text-[#2196C9]">
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
            placeholder="Search for a facility"
            className="w-full pl-16 pr-7 py-4 rounded-xl border border-[#e3e8ee] bg-white text-[#222] text-lg shadow focus:outline-none"
          />
        </div>
        <div
          ref={containerRef}
          className="relative w-full h-96 rounded-2xl flex items-start justify-center overflow-hidden bg-[#008A8F]"
        >
          {/* Imagem do mapa */}
          <div
            className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden flex items-center justify-center"
            style={{ zIndex: 0 }}
          >
            <img
              ref={imgRef}
              src={GptMapImage}
              alt="Mapa"
              className="max-w-full max-h-full object-contain transition-transform duration-300"
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: "center center",
              }}
              onLoad={() => {
                if (containerRef.current && imgRef.current) {
                  const cW = containerRef.current.offsetWidth;
                  const cH = containerRef.current.offsetHeight;
                  const iW = imgRef.current.naturalWidth;
                  const iH = imgRef.current.naturalHeight;
                  if (iW && iH) {
                    const scaleW = cW / iW;
                    const scaleH = cH / iH;
                    const min = Math.min(scaleW, scaleH, 1);
                    setMinZoom(min);
                    setZoom((z) => Math.max(z, min));
                  }
                }
              }}
            />
          </div>
          {/* Botões de zoom e localização */}
          <div className="absolute right-8 bottom-8 flex flex-col gap-2 z-10">
            <button
              onClick={handleZoomIn}
              className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center border border-[#e3e8ee] text-[#2196C9] text-xl font-bold transition hover:bg-[#e8f0fa]"
            >
              +
            </button>
            <button
              onClick={handleZoomOut}
              className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center border border-[#e3e8ee] text-[#2196C9] text-xl font-bold transition hover:bg-[#e8f0fa]"
            >
              -
            </button>
            <button
              onClick={handleCenter}
              className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center border border-[#e3e8ee] text-[#2196C9] transition hover:bg-[#e8f0fa]"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <circle
                  cx="12"
                  cy="12"
                  r="8"
                  stroke="#2196C9"
                  strokeWidth="2"
                />
                <path d="M12 8v4l3 3" stroke="#2196C9" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Incidentes Recentes - Cards */}
      <section className="px-8 mb-12 max-w-[1200px] mx-auto">
        <h2 className="text-2xl font-bold text-[#222] mb-4">
          Incidentes Recentes
        </h2>
        <div className="flex gap-8 flex-wrap justify-between">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden w-80">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
              alt="Facility A"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg text-[#222]">Facility A</h3>
              <p className="text-[#5B7F95] text-sm">
                Ultimo incidente: 2 dias atrás
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden w-80">
            <img
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
              alt="Facility B"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg text-[#222]">Facility B</h3>
              <p className="text-[#5B7F95] text-sm">
                Ultimo incidente: 1 week ago
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden w-80">
            <img
              src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80"
              alt="Facility C"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg text-[#222]">Facility C</h3>
              <p className="text-[#5B7F95] text-sm">
                Last incidente: 1 monoto ao
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Incidentes Recentes - Métricas */}
      <section className="px-8 mb-12 max-w-[1200px] mx-auto">
        <h2 className="text-2xl font-bold text-[#222] mb-4">
          Incidentes Recentes
        </h2>
        <div className="flex gap-8 flex-wrap">
          {/* Incidentes por Tipo */}
          <div className="bg-white rounded-xl shadow-md p-7 flex-1 h-80 flex flex-col">
            <h3 className="font-bold text-lg text-[#222] mb-2">
              Incidentes por Tipo
            </h3>
            <div className="flex-1 flex flex-col justify-end">
              <div className="flex items-end gap-4 mb-2">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-[#222]">15</span>
                  <span className="text-xs text-[#5B7F95]">
                    Last 30 Dias:{" "}
                    <span className="text-green-600 font-bold">+10%</span>
                  </span>
                </div>
                <div className="flex-1 flex gap-2 items-end h-full pt-4">
                  <div className="w-16 h-[50%] bg-[#e8f0fa] rounded-t-lg"></div>
                  <div className="w-16 h-[75%] bg-[#e8f0fa] rounded-t-lg"></div>
                  <div className="w-16 h-[35%] bg-[#e8f0fa] rounded-t-lg"></div>
                </div>
              </div>
              <div className="flex justify-between text-xs text-[#5B7F95]">
                <span>Segurança</span>
                <span>Meio Ambiente</span>
                <span>Operacional</span>
              </div>
            </div>
          </div>
          {/* Incidentes ao Longo do Tempo */}
          <div className="bg-white rounded-xl shadow-md p-7 flex-1 h-80 flex flex-col">
            <h3 className="font-bold text-lg text-[#222] mb-2">
              Incidentes ao Longo do Tempo
            </h3>
            <div className="flex items-end gap-4 mb-2">
              <span className="text-3xl font-bold text-[#222]">20</span>
              <span className="text-xs text-[#5B7F95]">
                Last 12 Mesemś:{" "}
                <span className="text-red-600 font-bold">-5%</span>
              </span>
            </div>
            <div className="flex-1 flex flex-col">
              <svg
                className="w-full h-full"
                viewBox="0 0 200 60"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M0 40 Q 20 10 40 30 T 80 40 T 120 20 T 160 50 T 200 30"
                  stroke="#2196C9"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
              <div className="flex justify-between text-xs text-[#5B7F95] mt-2">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Abr</span>
                <span>Mai</span>
                <span>Jun</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
