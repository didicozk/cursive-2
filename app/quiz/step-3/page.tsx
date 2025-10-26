"use client"

import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Suspense } from "react"
import Image from "next/image"

// O conteúdo principal da página foi completamente reestruturado
function Step3Content() {
  const router = useRouter()
  // Mantemos os searchParams para poder passá-los para a próxima etapa
  const searchParams = useSearchParams()
  const gender = searchParams.get("gender") || "male"
  const age = searchParams.get("age") || ""

  const handleContinue = () => {
    // A rota de continuação permanece, levando os dados para a próxima etapa
    router.push(`/quiz/step-4?gender=${gender}&age=${age}`)
  }

  return (
    // Estrutura principal com fundo branco e conteúdo centralizado
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      {/* O logo agora fica no topo da página, fora do card principal */}
      <header className="absolute top-0 w-full flex justify-center py-6">
        <Image
          src="/images/pagina1/logo.svg" // Reutilizando o logo da página 1
          alt="Courziv Logo"
          width={120}
          height={40}
        />
      </header>
      
      <main className="flex flex-col items-center w-full">
        {/* Card principal com fundo lilás claro */}
        <div className="bg-violet-100 rounded-2xl p-6 sm:p-8 max-w-md w-full flex flex-col items-center space-y-6">
          
          {/* Seção "Mais de 600 mil pessoas" */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Mais de 600 mil
              <br />
              <span className="text-violet-600">pessoas</span>
            </h1>
            <p className="text-gray-800 text-lg mt-1">já usam Coursiv</p>
          </div>

          {/* Card da Citação */}
          <div className="bg-white rounded-xl p-4 w-full relative shadow-sm border border-gray-200">
            <span className="absolute top-2 left-3 text-5xl font-serif text-gray-200">“</span>
            <p className="text-center font-semibold text-gray-800 px-4 py-2">
              A IA não substituirá os humanos, mas os humanos pela IA substituirão os humanos sem IA
            </p>
            <span className="absolute bottom-1 right-3 text-5xl font-serif text-gray-200">”</span>
            <div className="flex items-center justify-center mt-3 border-t pt-3">
              <Image
                src="/images/pagina3/hw_social-proof_harvard_logo.webp"
                alt="Harvard Business Review Logo"
                width={120} // Ajuste o tamanho conforme necessário
                height={24}
                className="opacity-70"
              />
            </div>
          </div>
          
          {/* Seção "Mencionadas em" */}
          <div className="text-center w-full">
            <p className="text-sm text-gray-600 mb-3">ferramentas de IA mencionadas em</p>
            <Image
              src="/images/pagina3/hw_social-proof_source_logo.webp"
              alt="Logos de mídias parceiras"
              width={280} // Ajuste o tamanho da imagem de logos
              height={60}
              className="mx-auto"
            />
          </div>

        </div>

        {/* Botão de Continuação */}
        <button
          onClick={handleContinue}
          className="w-full max-w-md mt-6 bg-violet-600 hover:bg-violet-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
        >
          CONTINUAÇÃO
        </button>
      </main>
    </div>
  )
}

// O componente exportado que envolve o conteúdo com Suspense permanece o mesmo
export default function Step3() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Carregando...</div>}>
      <Step3Content />
    </Suspense>
  )
}
