import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sistema de Usuários",
  description: "Sistema de cadastro criado com Next.js e Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      {/* O min-h-screen e flex-col garantem que o footer fique no final */}
      <body className="flex flex-col min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        {/* O flex-grow empurra o footer para baixo */}
        <div className="flex-grow">{children}</div>

        {/* Nosso Footer Global */}
        <footer className="py-6 text-center border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400">
          <p>
            © {new Date().getFullYear()} Sistema de Usuários. Desenvolvido para
            fins educacionais.
          </p>
        </footer>
      </body>
    </html>
  );
}
