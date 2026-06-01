"use client"; // Páginas de erro devem ser sempre Client Components

import { useEffect } from "react";
import { ShieldAlert } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Registra o erro no console (ou num serviço como Sentry)
  useEffect(() => {
    console.error("Erro capturado pelo sistema:", error);
  }, [error]);

  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] p-4 text-center">
      <ShieldAlert className="w-20 h-20 text-red-500 mb-6" />
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
        Ops! Algo deu errado.
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
        Nosso sistema encontrou um erro inesperado. Já registramos o problema
        para análise.
      </p>

      {/* O reset() tenta renderizar a página novamente */}
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
      >
        Tentar Novamente
      </button>
    </main>
  );
}
