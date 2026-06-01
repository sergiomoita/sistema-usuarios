import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh]">
      <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
      <p className="mt-4 text-gray-500 dark:text-gray-400 font-medium animate-pulse">
        Carregando dados...
      </p>
    </main>
  );
}
