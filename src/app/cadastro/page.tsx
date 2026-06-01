"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Info } from "lucide-react";

export default function Cadastro() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birthDate: "",
    nickname: "",
    phone: "",
  });

  const [erros, setErros] = useState({
    name: "",
    email: "",
    birthDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErros({ ...erros, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let formValido = true;
    const novosErros = { name: "", email: "", birthDate: "" };

    if (!formData.name.trim()) {
      novosErros.name = "O nome é obrigatório.";
      formValido = false;
    }

    if (!formData.email.trim()) {
      novosErros.email = "O email é obrigatório.";
      formValido = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      novosErros.email = "Digite um formato de email válido.";
      formValido = false;
    }

    if (!formData.birthDate) {
      novosErros.birthDate = "A data de nascimento é obrigatória.";
      formValido = false;
    }

    if (!formValido) {
      setErros(novosErros);
      return;
    }

    alert(
      "Usuário validado com sucesso! (O salvamento real no banco será na Etapa de Backend)",
    );
    router.push("/");
  };

  return (
    <main className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 p-4 md:p-8">
      <div className="max-w-2xl mx-auto bg-gray-50 dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow border border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl font-bold mb-6 border-b pb-4 dark:border-gray-700">
          Cadastrar Novo Usuário
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo: Nome */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              Nome Completo *
              <span title="Campo Obrigatório. Digite o seu nome e sobrenome completos, sem abreviações.">
                <Info className="w-4 h-4 text-gray-400 cursor-help hover:text-blue-500 transition-colors" />
              </span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 ${
                erros.name
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 dark:border-gray-600 focus:ring-blue-500"
              }`}
              placeholder="Ex: João da Silva"
              title="Campo Obrigatório. Digite o seu nome e sobrenome completos, sem abreviações."
            />
            {erros.name && (
              <p className="text-red-500 text-sm mt-1">{erros.name}</p>
            )}
          </div>

          {/* Campo: Email */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              Email *
              <span title="Campo Obrigatório. O email será usado para o seu login. Exemplo: seu.nome@dominio.com">
                <Info className="w-4 h-4 text-gray-400 cursor-help hover:text-blue-500 transition-colors" />
              </span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 ${
                erros.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 dark:border-gray-600 focus:ring-blue-500"
              }`}
              placeholder="Ex: joao@email.com"
              title="Campo Obrigatório. O email será usado para o seu login. Exemplo: seu.nome@dominio.com"
            />
            {erros.email && (
              <p className="text-red-500 text-sm mt-1">{erros.email}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Campo: Data de Nascimento */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2">
                Data de Nascimento *
                <span title="Campo Obrigatório. Clique no ícone de calendário para selecionar o dia, mês e ano do seu nascimento.">
                  <Info className="w-4 h-4 text-gray-400 cursor-help hover:text-blue-500 transition-colors" />
                </span>
              </label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 ${
                  erros.birthDate
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 dark:border-gray-600 focus:ring-blue-500"
                }`}
                title="Campo Obrigatório. Clique no ícone de calendário para selecionar o dia, mês e ano do seu nascimento."
              />
              {erros.birthDate && (
                <p className="text-red-500 text-sm mt-1">{erros.birthDate}</p>
              )}
            </div>

            {/* Campo: Telefone */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2">
                Telefone
                <span title="Campo Opcional. Digite seu telefone com DDD. Exemplo: (11) 98765-4321">
                  <Info className="w-4 h-4 text-gray-400 cursor-help hover:text-blue-500 transition-colors" />
                </span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="(00) 00000-0000"
                title="Campo Opcional. Digite seu telefone com DDD. Exemplo: (11) 98765-4321"
              />
            </div>
          </div>

          {/* Campo: Nickname */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              Nickname
              <span title="Campo Opcional. Digite um apelido ou nome social de como você prefere ser chamado.">
                <Info className="w-4 h-4 text-gray-400 cursor-help hover:text-blue-500 transition-colors" />
              </span>
            </label>
            <input
              type="text"
              name="nickname"
              value={formData.nickname}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ex: joaozinho"
              title="Campo Opcional. Digite um apelido ou nome social de como você prefere ser chamado."
            />
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-col md:flex-row justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={() => router.push("/")}
              className="px-6 py-2 rounded-lg font-medium bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Salvar Usuário
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
