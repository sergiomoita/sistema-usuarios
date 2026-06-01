import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] p-4 text-center">
      <AlertCircle className="w-20 h-20 text-blue-500 mb-6" />
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-gray-100">
        404
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-600 dark:text-gray-300">
        Página não encontrada
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
        Desculpe, não conseguimos encontrar a página que você está procurando.
        Talvez ela tenha sido movida ou não exista mais.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
      >
        Voltar para o Início
      </Link>
    </main>
  );
}
