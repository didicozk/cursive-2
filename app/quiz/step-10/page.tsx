"use client"

import type React from "react"
import { useState, Suspense } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { QuizLayout } from "@/components/quiz-layout"
import Image from "next/image" // Importe Image para usar as suas imagens

function Step10Content() {
  const [selectedOption, setSelectedOption] = useState<string>("")
  const router = useRouter()
  const searchParams = useSearchParams()

  // Rassemble tous les paramètres de l'URL pour les transmettre proprement
  const urlParams = {
    gender: searchParams.get("gender") || "",
    age: searchParams.get("age") || "",
    tiredness: searchParams.get("tiredness") || "",
    lastMinute: searchParams.get("lastMinute") || "",
    distraction: searchParams.get("distraction") || "",
    worried: searchParams.get("worried") || "",
    moodSwings: searchParams.get("moodSwings") || "",
    harmony: searchParams.get("harmony") || "",
  }

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option)
    setTimeout(() => {
      // Adiciona o novo parâmetro e navega para a próxima etapa
      const nextParams = new URLSearchParams({
        ...urlParams,
        control: option, // Usando 'control' como o nome do parâmetro para esta pergunta
      })
      router.push(`/quiz/step-11?${nextParams.toString()}`)
    }, 500)
  }

  // Constroi o link de "retour" dynamiquement
  const backLinkHref = `/quiz/step-9?${new URLSearchParams(urlParams).toString()}`

  return (
    <QuizLayout step={7} totalSteps={23}> {/* Atualizado totalSteps para 23 conforme a imagem */}
      
      {/* Cabeçalho modificado para usar suas imagens e espelhar o screenshot */}
      <header className="w-full px-6 py-4 flex justify-between items-center absolute top-0 left-0 right-0 bg-[#f5f3f0] z-10">
        <Link href={backLinkHref} className="p-2">
          <ArrowLeft className="w-6 h-6 text-black" />
        </Link>
        <div className="flex items-center gap-2">
          <Image
            src="/images/pagina10/logo.svg" // Seu logo Counzly
            alt="Counzly Logo"
            width={90} // Ajuste o tamanho conforme necessário
            height={24} // Ajuste o tamanho conforme necessário
            priority
          />
        </div>
        <div className="flex items-center gap-1"> {/* Contêiner para a barra de progresso e o texto "7/23" */}
            <div className="w-12 h-2 bg-blue-200 rounded-full overflow-hidden">
                <div className="h-full bg-[#6a3dfc]" style={{ width: `${(7 / 23) * 100}%` }}></div> {/* Progresso */}
            </div>
            <span className="text-gray-600 text-sm font-medium">7/23</span> {/* Número da etapa (agora sem imagem) */}
        </div>
      </header>

      {/* Main com o conteúdo da pergunta */}
      <main className="flex flex-col items-center justify-center px-3 pt-1 pb-2 max-w-2xl mx-auto mt-28 mb-4"> {/* Ajustei o mt para dar espaço ao cabeçalho */}
        
        {/* Titulo com um estilo padronizado da sua imagem */}
        <div className="text-center space-y-3 mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            ¿Deseas tener más control sobre sus horarios de trabajo y ubicación?
          </h1>
        </div>
        
        {/* Opções de seleção replicando o estilo do screenshot */}
        <div className="w-full max-w-lg mx-auto space-y-4">
          <button
            onClick={() => handleOptionSelect("si")}
            className={`flex items-center p-4 rounded-xl border-2 transition-all duration-200 w-full text-left
              ${selectedOption === "si" ? "border-purple-500 bg-white shadow-md" : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"}
            `}
          >
            <Image
              src="/images/pagina10/migrated_d14fbcf1p6wyzn_v3_ai_quiz_control_1.webp" // Imagem do polegar para cima
              alt="Sí"
              width={32}
              height={32}
              className="mr-3"
            />
            <span className="font-semibold text-lg">Sí</span>
          </button>

          <button
            onClick={() => handleOptionSelect("no")}
            className={`flex items-center p-4 rounded-xl border-2 transition-all duration-200 w-full text-left
              ${selectedOption === "no" ? "border-purple-500 bg-white shadow-md" : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"}
            `}
          >
            <Image
              src="/images/pagina10/migrated_d14fbcf1p6wyzn_v3_ai_quiz_control_2.webp" // Imagem do polegar para baixo
              alt="No"
              width={32}
              height={32}
              className="mr-3"
            />
            <span className="font-semibold text-lg">No</span>
          </button>

          <button
            onClick={() => handleOptionSelect("not-sure")}
            className={`flex items-center p-4 rounded-xl border-2 transition-all duration-200 w-full text-left
              ${selectedOption === "not-sure" ? "border-purple-500 bg-white shadow-md" : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"}
            `}
          >
            <Image
              src="/images/pagina10/migrated_d14fbcf1p6wyzn_v3_ai_quiz_control_3.webp" // <-- AGORA USANDO ESTA IMAGEM AQUI para o emoji pensando
              alt="Hmm, no estoy seguro"
              width={32}
              height={32}
              className="mr-3"
            />
            <span className="font-semibold text-lg">Hmm, no estoy seguro</span>
          </button>
        </div>
      </main>

      {/* Footer com "Powered by" */}
      <footer className="w-full py-4 text-center mt-auto mb-4">
        <Image
          src="/images/pagina10/poweredbtcky.svg"
          alt="Powered by TCKY"
          width={120} // Ajuste conforme necessário
          height={20} // Ajuste conforme necessário
          className="mx-auto"
        />
      </footer>
    </QuizLayout>
  )
}

export default function Step10() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#f5f3f0] flex items-center justify-center text-gray-500">Cargando...</div>
      }
    >
      <Step10Content />
    </Suspense>
  )
}
