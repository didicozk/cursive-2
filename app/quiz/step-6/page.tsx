"use client"

import { useState, Suspense } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"

// Array de dados para as opções de horário de trabalho
const workScheduleOptions = [
  {
    text: "De 9 a 5",
    imageSrc: "/images/pagina6/migrated_d14fbcf1p6wyzn_v3_ai_quiz_schedule_1.webp",
    value: "9_to_5",
  },
  {
    text: "Turnos noturnos",
    imageSrc: "/images/pagina6/migrated_d14fbcf1p6wyzn_v3_ai_quiz_schedule_2.webp",
    value: "night_shifts",
  },
  {
    text: "Horários flexíveis",
    imageSrc: "/images/pagina6/migrated_d14fbcf1p6wyzn_v3_ai_quiz_schedule_3.webp",
    value: "flexible",
  },
  {
    text: "Estou aposentado",
    imageSrc: "/images/pagina6/migrated_d14fbcf1p6wyzn_v3_ai_quiz_schedule_4.webp",
    value: "retired",
  },
]

function Step6Content() {
  const [selectedOption, setSelectedOption] = useState<string>("")
  const router = useRouter()
  const searchParams = useSearchParams()

  // Coletando todos os parâmetros das URLs anteriores para manter o estado
  const gender = searchParams.get("gender") || "male"
  const age = searchParams.get("age") || ""
  const goal = searchParams.get("goal") || ""
  const incomeSource = searchParams.get("incomeSource") || ""

  const handleOptionSelect = (optionValue: string) => {
    setSelectedOption(optionValue)
    // Navega para a próxima página após um breve delay
    setTimeout(() => {
      // Adiciona o novo parâmetro 'workSchedule' à URL
      router.push(
        `/quiz/step-7?gender=${gender}&age=${age}&goal=${goal}&incomeSource=${incomeSource}&workSchedule=${optionValue}`
      )
    }, 300)
  }

  // Constrói a URL para o botão de voltar com todos os parâmetros
  const backHref = `/quiz/step-5?gender=${gender}&age=${age}&goal=${goal}&incomeSource=${incomeSource}`

  return (
    <div className="min-h-screen bg-white">
      {/* Barra de progresso roxa no topo */}
      <div className="w-full bg-gray-200 h-1">
        <div className="bg-purple-600 h-1" style={{ width: `${(3 / 23) * 100}%` }}></div>
      </div>
      
      {/* Cabeçalho da Página */}
      <header className="w-full px-4 py-3 flex justify-between items-center">
        <Link href={backHref} className="p-2">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </Link>
        <Image src="/images/pagina1/logo.svg" alt="Courziv Logo" width={90} height={30} />
        <span className="text-gray-600 text-sm font-semibold w-10 text-right">3 / 23</span>
      </header>
      
      <main className="flex flex-col items-center px-4 pt-8 pb-4 max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Como é o seu horário de trabalho?
          </h1>
        </div>

        {/* Lista de Opções */}
        <div className="w-full max-w-md space-y-3">
          {workScheduleOptions.map((option) => (
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

// O componente de exportação com Suspense permanece o mesmo
export default function Step6() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Carregando...</div>}>
      <Step6Content />
    </Suspense>
  )
}
