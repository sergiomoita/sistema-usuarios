"use client";

import { useState } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { mockUsers } from "../lib/mockData";

export default function Home() {
  const [busca, setBusca] = useState("");
  const [isDark, setIsDark] = useState(false);

  // Função para alternar o tema manualmente
  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  };

  // Filtra os usuários com base no campo de busca
  const usuariosFiltrados = mockUsers.filter((user) => {
    const termoBusca = busca.toLowerCase();
    return (
      user.name.toLowerCase().includes(termoBusca) ||
      user.email.toLowerCase().includes(termoBusca) ||
      (user.nickname && user.nickname.toLowerCase().includes(termoBusca))
    );
  });

  return (
    <main className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Cabeçalho: Responsivo (empilha no celular, lado a lado no PC) */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-2xl md:text-3xl font-bold">
            Usuários Cadastrados
          </h1>

          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            <button
              onClick={toggleTheme}
              className="p-2 w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              title="Alternar Tema"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>

            <Link
              href="/cadastro"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-center whitespace-nowrap"
            >
              + Novo Usuário
            </Link>
          </div>
        </div>

        {/* Campo de Busca */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Buscar por nome, email ou nickname..."
            className="w-full max-w-4xl px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 dark:text-white transition-colors"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>

        {/* Tabela de Usuários */}
        <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 transition-colors">
          <table className="min-w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-100 dark:bg-gray-700 uppercase font-semibold">
              <tr>
                <th className="px-6 py-4">Nome</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Nickname</th>
                <th className="px-6 py-4">Nascimento</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {usuariosFiltrados.length > 0 ? (
                usuariosFiltrados.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer"
                  >
                    <td className="px-6 py-4 font-medium">{user.name}</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                      {user.nickname || "-"}
                    </td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                      {new Date(user.birthDate).toLocaleDateString("pt-BR")}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="px-6 py-8 text-center text-gray-500 dark:text-gray-400"
                  >
                    Nenhum usuário encontrado para {busca}.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
