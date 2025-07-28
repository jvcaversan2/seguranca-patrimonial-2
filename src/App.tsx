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
import EditarOcorrencias from "./screens/editarocorrencia/editarocorrencia";
import { PrivateRoute } from "./store/privateRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/ocorrencias"
          element={
            <PrivateRoute>
              <Ocorrencias />
            </PrivateRoute>
          }
        />
        <Route
          path="/novaocorrencia"
          element={
            <PrivateRoute>
              <NovaOcorrencia />
            </PrivateRoute>
          }
        />
        <Route
          path="/detalhesocorrencias/:id"
          element={
            <PrivateRoute>
              <DetalhesOcorrencias />
            </PrivateRoute>
          }
        />
        <Route
          path="/detalhesocorrencias/:id/editar"
          element={
            <PrivateRoute>
              <EditarOcorrencias />
            </PrivateRoute>
          }
        />
        <Route
          path="/perfilconfiguracao"
          element={
            <PrivateRoute>
              <PerfilConfiguracao />
            </PrivateRoute>
          }
        />
        <Route
          path="/relatorios"
          element={
            <PrivateRoute>
              <Relatorios />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
