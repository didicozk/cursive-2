import { ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Você pode remover a importação do Header se o logo for ser adicionado diretamente aqui.
// import { Header } from "@/components/header"

export default function HomePage() {
  return (
    // Estrutura principal com flexbox para centralizar o conteúdo verticalmente e horizontalmente
    <div className="min-h-screen bg-white flex flex-col items-center">

      {/* Container principal que cresce para ocupar o espaço, empurrando o rodapé para baixo */}
      <main className="flex flex-col items-center justify-center flex-grow w-full px-4 text-center">

        {/* Logo no topo */}
        <div className="mb-10">
          <Image
            src="/images/pagina1/logo.svg"
            alt="Courziv Logo"
            width={120} // Ajuste a largura conforme necessário
            height={40}  // Ajuste a altura conforme necessário
          />
        </div>

        {/* Seção de Títulos */}
        <div className="space-y-4 mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            DESAFIO DE CRESCIMENTO
            <br />
            DE RECEITA DA IA
          </h1>
          <p className="text-lg sm:text-xl text-gray-800 font-semibold">
            SELECIONE SEU GÊNERO
          </p>
          <p className="text-gray-600 font-medium text-sm sm:text-base">
            QUESTIONÁRIO DE 1 MINUTO
          </p>
        </div>

        {/* Seção de Seleção de Gênero */}
        <div className="w-full flex flex-row justify-center items-center gap-4 sm:gap-6 mb-6">

          {/* Card Masculino */}
          <Link
            href="/quiz/step-2?gender=male"
            className="flex flex-col items-center group"
          >
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl border-2 border-blue-300 p-2 overflow-hidden mb-3 transition-transform group-hover:scale-105">
              <div className="relative w-full h-full">
                <Image
                  src="/images/pagina1/h.webp"
                  alt="Personagem masculino"
                  layout="fill"
                  objectFit="contain" // Use contain para garantir que a imagem inteira apareça
                />
              </div>
            </div>
            <div
              className="w-40 sm:w-48 bg-blue-500 group-hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-between transition-colors text-sm sm:text-base"
            >
              <span>HOMEM</span>
              <ChevronRight className="w-5 h-5" />
            </div>
          </Link>

          {/* Card Feminino */}
          <Link
            href="/quiz/step-2?gender=female"
            className="flex flex-col items-center group"
          >
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl border-2 border-blue-300 p-2 overflow-hidden mb-3 transition-transform group-hover:scale-105">
              <div className="relative w-full h-full">
                <Image
                  src="/images/pagina1/m.webp"
                  alt="Personagem feminino"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div
              className="w-40 sm:w-48 bg-blue-500 group-hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-between transition-colors text-sm sm:text-base"
            >
              <span>MULHER</span>
              <ChevronRight className="w-5 h-5" />
            </div>
          </Link>

        </div>

        {/* Texto de Termos e Condições */}
        <div className="text-center text-xs text-gray-500 max-w-sm mt-4">
          <p>
            Clicando em "Homem" ou "Mulher", você aceita os{" "}
            <Link href="/terms" className="underline hover:text-blue-600">
              Termos e Condições
            </Link>
            ,{" "}
            <Link href="/privacy" className="underline hover:text-blue-600">
              Política de privacidade
            </Link>
            ,{" "}
            <Link href="/subscription" className="underline hover:text-blue-600">
              Termos Assinatura
            </Link>
          </p>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="w-full py-6 text-center">
        <p className="text-xs text-gray-500">
          Produto Courziv da Courziv Limited.
          <br />
          2024 © Todos os direitos reservados.
        </p>
      </footer>

    </div>
  )
}
