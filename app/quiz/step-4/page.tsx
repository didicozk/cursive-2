"use client"

import { useState, Suspense } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"

// Assumindo que você tenha um componente QuizLayout que renderiza a barra de progresso.
// Se não tiver, você pode remover o <QuizLayout> e a barra não aparecerá.
// import { QuizLayout } from "@/components/quiz-layout" 

// Dados das opções de objetivo
const objectiveOptions = [
  {
    text: "Crescer em riqueza",
    imageSrc: "/images/pagina4/migrated_d14fbcf1p6wyzn_v3_ai_quiz_goal_male_4.webp",
    value: "wealth",
  },
  {
    text: "Ser meu próprio chefe",
    imageSrc: "/images/pagina4/migrated_d14fbcf1p6wyzn_v3_ai_quiz_goal_male_2.webp",
    value: "be_own_boss",
  },
  {
    text: "Liberdade financeira",
    imageSrc: "/images/pagina4/migrated_d14fbcf1p6wyzn_v3_ai_quiz_goal_male_6.webp",
    value: "financial_freedom",
  },
  {
    text: "Viajar pelo mundo",
    imageSrc: "/images/pagina4/migrated_d14fbcf1p6wyzn_v3_ai_quiz_goal_male_5.webp",
    value: "travel",
  },
  {
    text: "Crescimento profissional",
    imageSrc: "/images/pagina4/migrated_d14fbcf1p6wyzn_v3_ai_quiz_goal_male_1.webp",
    value: "professional_growth",
  },
  {
    text: "Equilíbrio entre trabalho e vida",
    imageSrc: "/images/pagina4/migrated_d14fbcf1p6wyzn_v3_ai_quiz_goal_male_3.webp",
    value: "work_life_balance",
  },
]

function Step4Content() {
  const [selectedOption, setSelectedOption] = useState<string>("")
  const router = useRouter()
  const searchParams = useSearchParams()
  const gender = searchParams.get("gender") || "male"
  const age = searchParams.get("age") || ""

  const handleOptionSelect = (optionValue: string) => {
    setSelectedOption(optionValue)
    // Navega para a próxima página após um breve delay
    setTimeout(() => {
      router.push(`/quiz/step-5?gender=${gender}&age=${age}&goal=${optionValue}`)
    }, 300) // Delay de 300ms
  }

  return (
    // <QuizLayout step={11} totalSteps={23}> // Descomente se você tiver o QuizLayout
    <div className="min-h-screen bg-white">
      {/* Barra de progresso roxa no topo */}
      <div className="w-full bg-gray-200 h-1">
        <div className="bg-purple-600 h-1" style={{ width: `${(11 / 23) * 100}%` }}></div>
      </div>
      
      {/* Cabeçalho da Página */}
      <header className="w-full px-4 py-3 flex justify-between items-center">
        <Link href={`/quiz/step-3?gender=${gender}&age=${age}`} className="p-2">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </Link>
        <Image src="/images/pagina1/logo.svg" alt="Courziv Logo" width={90} height={30} />
        <span className="text-gray-600 text-sm font-semibold w-10 text-right">11 / 23</span>
      </header>
      
      <main className="flex flex-col items-center px-4 pt-8 pb-4 max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Qual o seu objetivo principal?
          </h1>
        </div>

        {/* Lista de Opções */}
        <div className="w-full max-w-md space-y-3">
          {objectiveOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleOptionSelect(option.value)}
              className={`w-full p-3 text-left rounded-lg border transition-all duration-200 flex items-center gap-4 ${
                selectedOption === option.value
                  ? "border-purple-500 bg-purple-50" // Estilo quando selecionado
                  : "border-transparent bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <div className="w-14 h-14 flex-shrink-0">
                  <Image
                    src={option.imageSrc}
                    alt={option.text}
                    width={56}
                    height={56}
                    className="object-contain w-full h-full"
                  />
              </div>
              <span className="text-base font-semibold text-gray-800">{option.text}</span>
            </button>
          ))}
        </div>
      </main>
    </div>
    // </QuizLayout> // Descomente se você tiver o QuizLayout
  )
}

export default function Step4() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Carregando...</div>}>
      <Step4Content />
    </Suspense>
  )
}
