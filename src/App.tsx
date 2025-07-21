import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/auth/login";
import Register from "./screens/auth/register";
import Home from "./screens/home/Home";
import Ocorrencias from "./screens/ocorrencias/ocorrencias";
import NovaOcorrencia from "./screens/novaocorrencia/novaocorrencia";
import DetalhesOcorrencias from "./screens/detalhesocorrencias/detalhesocorrencias";
import PerfilConfiguracao from "./screens/perfilconfiguracao/perfilconfiguracao";
import Relatorios from "./screens/relatorios/relatorios";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ocorrencias" element={<Ocorrencias />} />
        <Route path="/novaocorrencia" element={<NovaOcorrencia />} />
        <Route path="/detalhesocorrencias" element={<DetalhesOcorrencias />} />
        <Route path="/perfilconfiguracao" element={<PerfilConfiguracao />} />
        <Route path="/relatorios" element={<Relatorios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
