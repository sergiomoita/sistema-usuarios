import Link from "next/link";
import { notFound } from "next/navigation";
import { mockUsers } from "../../../lib/mockData";

export default async function DetalhesUsuario({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const usuario = mockUsers.find((u) => u.id === id);

  if (!usuario) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 p-4 md:p-8">
      <div className="max-w-3xl mx-auto bg-gray-50 dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b pb-4 dark:border-gray-700 gap-4">
          <h1 className="text-2xl font-bold">Detalhes do Usuário</h1>
          <Link
            href="/"
            className="px-4 py-2 rounded-lg font-medium bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Voltar para Listagem
          </Link>
        </div>

        {/* Grid de Informações */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
              Nome Completo
            </h3>
            <p className="text-lg font-semibold">{usuario.name}</p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
              Email
            </h3>
            <p className="text-lg font-semibold">{usuario.email}</p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
              Data de Nascimento
            </h3>
            <p className="text-lg font-semibold">
              {new Date(usuario.birthDate).toLocaleDateString("pt-BR")}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
              Telefone
            </h3>
            <p className="text-lg font-semibold">
              {usuario.phone || "Não informado"}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
              Nickname
            </h3>
            <p className="text-lg font-semibold">
              {usuario.nickname || "Não informado"}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
              Escritório
            </h3>
            <p className="text-lg font-semibold">
              {usuario.office || "Não informado"}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
