import React from "react";
import MainHeader from "../../components/MainHeader";
import { Link, useNavigate } from "react-router-dom";

const user = {
  nome: "Sofia Almeida",
  email: "sofia.almeida@email.com",
  avatar: "https://randomuser.me/api/portraits/women/44.jpg",
};

const sidebarItems = [
  {
    label: "Vigilância",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="#b0bdc6" strokeWidth="2" />
      </svg>
    ),
  },
  {
    label: "Visão geral",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="4"
          stroke="#b0bdc6"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    label: "Ocorrências",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path d="M4 7h16M4 12h16M4 17h16" stroke="#b0bdc6" strokeWidth="2" />
      </svg>
    ),
  },
  {
    label: "Relatórios",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="2"
          stroke="#b0bdc6"
          strokeWidth="2"
        />
        <path d="M8 4v16" stroke="#b0bdc6" strokeWidth="2" />
      </svg>
    ),
  },
  {
    label: "Equipes",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" stroke="#b0bdc6" strokeWidth="2" />
        <path
          d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4"
          stroke="#b0bdc6"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    label: "Configurações",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="#2196C9" strokeWidth="2" />
        <path d="M12 8v4l3 3" stroke="#2196C9" strokeWidth="2" />
      </svg>
    ),
    active: true,
  },
];

const configCards = [
  {
    title: "Perfil",
    desc: "Gerenciar informações do perfil",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" stroke="#2196C9" strokeWidth="2" />
        <path
          d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4"
          stroke="#2196C9"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Senha",
    desc: "Alterar sua senha",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
        <rect
          x="6"
          y="10"
          width="12"
          height="10"
          rx="2"
          stroke="#2196C9"
          strokeWidth="2"
        />
        <path d="M9 10V7a3 3 0 1 1 6 0v3" stroke="#2196C9" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Notificações",
    desc: "Gerenciar suas preferências de notificação",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
        <path
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
          stroke="#2196C9"
          strokeWidth="2"
        />
        <path d="M12 6v6l4 2" stroke="#2196C9" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Idioma",
    desc: "Gerenciar suas preferências de idioma",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="#2196C9" strokeWidth="2" />
        <path d="M8 12h8" stroke="#2196C9" strokeWidth="2" />
        <path d="M12 8v8" stroke="#2196C9" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Tema",
    desc: "Gerenciar suas preferências de tema",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="#2196C9" strokeWidth="2" />
        <path
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
          stroke="#2196C9"
          strokeWidth="2"
        />
      </svg>
    ),
  },
];

const PerfilConfiguracao: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#f6f9fb] font-sans">
      <MainHeader avatarUrl={user.avatar} />
      <div className="flex max-w-[1400px] mx-auto pt-6">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 min-w-[220px] bg-transparent pr-8 border-r border-[#e3e8ee]">
          <nav className="flex flex-col gap-1 mt-2">
            {sidebarItems.map((item) => (
              <button
                key={item.label}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg text-base font-medium transition ${
                  item.active
                    ? "bg-[#e8f0fa] text-[#2196C9]"
                    : "text-[#222] hover:bg-[#f2f7fa]"
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>
          <Link
            to="/novaocorrencia"
            className="mt-8 mb-2 px-4 py-3 rounded-lg bg-[#2196C9] text-white font-semibold text-center shadow hover:bg-[#176b8a] transition"
          >
            Nova ocorrência
          </Link>
          <button className="mt-2 flex items-center gap-2 px-4 py-2 rounded-lg text-[#5B7F95] hover:bg-[#f2f7fa] text-base font-medium transition">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path d="M12 4v16M4 12h16" stroke="#5B7F95" strokeWidth="2" />
            </svg>
            Ajuda e feedback
          </button>
          <button
            className="mt-2 flex items-center gap-2 px-4 py-2 rounded-lg text-[#B85C2B] hover:bg-[#fbe9e6] text-base font-medium transition"
            onClick={() => navigate("/")}
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" stroke="#B85C2B" strokeWidth="2" />
            </svg>
            Logout
          </button>
        </aside>
        {/* Conteúdo principal moderno */}
        <main className="flex-1 flex flex-col items-center px-2 sm:px-8">
          <div className="w-full max-w-2xl flex flex-col items-center mt-2 mb-10">
            <img
              src={user.avatar}
              alt="Avatar"
              className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg mb-3"
            />
            <div className="text-2xl font-bold text-[#222]">{user.nome}</div>
            <div className="text-base text-[#5B7F95] mb-2">{user.email}</div>
          </div>
          <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-7">
            {configCards.map((card) => (
              <div
                key={card.title}
                className="flex items-center gap-5 p-6 rounded-2xl bg-white/80 border border-[#e3e8ee] shadow-lg hover:shadow-2xl transition group backdrop-blur-md cursor-pointer"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-[#e8f0fa] group-hover:bg-[#2196C9]/10 transition">
                  {card.icon}
                </div>
                <div>
                  <div className="text-xl font-semibold text-[#222] group-hover:text-[#2196C9] transition">
                    {card.title}
                  </div>
                  <div className="text-[#5B7F95] text-sm mt-1">{card.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PerfilConfiguracao;
