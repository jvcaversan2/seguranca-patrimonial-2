import React from "react";
import { Link } from "react-router-dom";
import Group47 from "../assets/Group 47.svg";

interface MainHeaderProps {
  avatarUrl?: string;
}

const MainHeader: React.FC<MainHeaderProps> = ({ avatarUrl }) => {
  return (
    <header className="flex items-center justify-between px-10 py-4 border-b border-[#e3e8ee] bg-white">
      <div className="flex items-center gap-2">
        <img
          src={Group47}
          alt="Mosaic Logo"
          className="w-30 h-10 object-contain"
        />
        <nav className="flex gap-8 text-[#222] font-semibold text-base ml-8">
          <Link to="/home" className="hover:text-[#2196C9]">
            Home
          </Link>
          <Link to="/ocorrencias" className="hover:text-[#2196C9]">
            Ocorrências
          </Link>
          <Link to="/relatorios" className="hover:text-[#2196C9]">
            Relatórios
          </Link>
          <Link to="/perfilconfiguracao" className="hover:text-[#2196C9]">
            Configurações
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-4 py-2 bg-[#b0bdc6] bg-opacity-40 rounded-xl border border-[#b0bdc6] text-[#222]">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" stroke="#2196C9" strokeWidth="2" />
            <path stroke="#2196C9" strokeWidth="2" d="M20 20l-3-3" />
          </svg>
          Search
        </button>
        <img
          src={avatarUrl || "https://randomuser.me/api/portraits/men/32.jpg"}
          alt="Avatar"
          className="w-10 h-10 rounded-full object-cover border-2 border-[#e3e8ee]"
        />
      </div>
    </header>
  );
};

export default MainHeader;
