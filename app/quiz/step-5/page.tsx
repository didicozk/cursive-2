"use client"

import { useState, Suspense } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"

// Dados para as opções de fonte de renda
const incomeSourceOptions = [
  {
    text: "Trabalho em tempo integral",
    imageSrc: "/images/pagina5/migrated_d14fbcf1p6wyzn_v3_ai_quiz_income-source_1.webp",
    value: "full_time",
  },
  {
    text: "Renda passiva",
    imageSrc: "/images/pagina5/migrated_d14fbcf1p6wyzn_v3_ai_quiz_income-source_2.webp",
    value: "passive_income",
  },
  {
    text: "Outro", // Corrigido de "Outro outro" para maior clareza
    imageSrc: "/images/pagina5/migrated_d14fbcf1p6wyzn_v3_ai_quiz_income-source_3.webp",
    value: "other",
  },
]

function Step5Content() {
  const [selectedOption, setSelectedOption] = useState<string>("")
  const router = useRouter()
  const searchParams = useSearchParams()
  
  // Coletando os parâmetros da URL das etapas anteriores
  const gender = searchParams.get("gender") || "male"
  const age = searchParams.get("age") || ""
  const goal = searchParams.get("goal") || ""

  const handleOptionSelect = (optionValue: string) => {
    setSelectedOption(optionValue)
    // Navega para a próxima página após um breve delay
    setTimeout(() => {
      // Adiciona o novo parâmetro 'incomeSource' à URL
      router.push(`/quiz/step-6?gender=${gender}&age=${age}&goal=${goal}&incomeSource=${optionValue}`)
    }, 300)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Barra de progresso roxa no topo */}
      <div className="w-full bg-gray-200 h-1">
        <div className="bg-purple-600 h-1" style={{ width: `${(2 / 23) * 100}%` }}></div>
      </div>
      
      {/* Cabeçalho da Página */}
      <header className="w-full px-4 py-3 flex justify-between items-center">
        {/* O link de voltar agora inclui todos os parâmetros anteriores para manter o estado do quiz */}
        <Link href={`/quiz/step-4?gender=${gender}&age=${age}&goal=${goal}`} className="p-2">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </Link>
        <Image src="/images/pagina1/logo.svg" alt="Courziv Logo" width={90} height={30} />
        <span className="text-gray-600 text-sm font-semibold w-10 text-right">2 / 23</span>
      </header>
      
      <main className="flex flex-col items-center px-4 pt-8 pb-4 max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Com que fonte de renda você está mais familiarizado?
          </h1>
        </div>

        {/* Lista de Opções */}
        <div className="w-full max-w-md space-y-3">
          {incomeSourceOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleOptionSelect(option.value)}
              className={`w-full p-4 text-left rounded-lg border transition-all duration-200 flex items-center gap-4 ${
                selectedOption === option.value
                  ? "border-purple-500 bg-purple-50" // Estilo quando selecionado
                  : "border-transparent bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                  <Image
                    src={option.imageSrc}
                    alt={option.text}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
              </div>
              <span className="text-base font-semibold text-gray-800">{option.text}</span>
            </button>
          ))}
        </div>
      </main>
    </div>
  )
}

// O componente de exportação continua o mesmo, envolvendo a lógica principal com Suspense
export default function Step5() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Carregando...</div>}>
      <Step5Content />
    </Suspense>
  )
}
