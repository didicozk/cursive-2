"use client"

import { useState, Suspense } from "react"
import { ArrowLeft, Check } from "lucide-react" // Manter 'Check' para o ícone de seleção
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { QuizLayout } from "@/components/quiz-layout"
import Image from "next/image" // Importar o componente Image do Next.js

function Step22Content() {
  const [selectedOption, setSelectedOption] = useState<string>("") // Alterar para string para seleção única
  const router = useRouter()
  const searchParams = useSearchParams()
  // Récupère les paramètres de l'URL
  const gender = searchParams.get("gender") || "male"
  const age = searchParams.get("age") || ""
  const tiredness = searchParams.get("tiredness") || ""
  const lastMinute = searchParams.get("lastMinute") || ""
  const distraction = searchParams.get("distraction") || ""
  const worried = searchParams.get("worried") || ""
  const moodSwings = searchParams.get("moodSwings") || ""
  const harmony = searchParams.get("harmony") || ""
  const emotions = searchParams.get("emotions") || ""
  const overwhelmed = searchParams.get("overwhelmed") || ""
  const decision = searchParams.get("decision") || ""
  const ambitions = searchParams.get("ambitions") || ""
  const compliments = searchParams.get("compliments") || ""
  const insecure = searchParams.get("insecure") || ""
  const overthinkPartner = searchParams.get("overthinkPartner") || ""
  const prioritizeOthers = searchParams.get("prioritizeOthers") || ""
  const motivated = searchParams.get("motivated") || ""
  const aspects = searchParams.get("aspects") || ""
  const morningRoutine = searchParams.get("morningRoutine") || ""
  const physicalActivity = searchParams.get("physicalActivity") || ""
  const selectedFields = searchParams.get("selectedFields") || "" // Adicionar este parâmetro

  const handleOptionSelect = (optionText: string) => {
    setSelectedOption(optionText)
    setTimeout(() => {
      router.push(
        `/quiz/step-23?gender=${gender}&age=${age}&tiredness=${tiredness}&lastMinute=${lastMinute}&distraction=${distraction}&worried=${worried}&moodSwings=${moodSwings}&harmony=${harmony}&emotions=${emotions}&overwhelmed=${overwhelmed}&decision=${decision}&ambitions=${ambitions}&compliments=${compliments}&insecure=${insecure}&overthinkPartner=${overthinkPartner}&prioritizeOthers=${prioritizeOthers}&motivated=${motivated}&aspects=${aspects}&morningRoutine=${morningRoutine}&physicalActivity=${physicalActivity}&selectedFields=${selectedFields}&aiPreparation=${optionText}`,
      )
    }, 300)
  }

  // Opções de preparação com imagens correspondentes
  const options = [
    { text: "Todo listo", image: "/images/pagina22/migrated_d14fbcf1p6wyzn_v3_quiz_freelancing_1.webp" },
    { text: "Listo", image: "/images/pagina22/migrated_d14fbcf1p6wyzn_v3_quiz_freelancing_2.webp" },
    { text: "Preparado", image: "/images/pagina22/migrated_d14fbcf1p6wyzn_v3_quiz_freelancing_3.webp" },
    { text: "No estoy listo/a", image: "/images/pagina22/migrated_d14fbcf1p6wyzn_v3_quiz_freelancing_4.webp" },
  ]

  return (
    // Utilizar QuizLayout para a barra de progresso
    <QuizLayout step={19} totalSteps={23}> {/* Alterado totalSteps para 23 conforme a imagem */}
      <header className="w-full px-6 py-4 flex justify-between items-center absolute top-0 left-0 right-0 bg-[#f5f3f0] z-10">
        <Link
          href={`/quiz/step-21?gender=${gender}&age=${age}&tiredness=${tiredness}&lastMinute=${lastMinute}&distraction=${distraction}&worried=${worried}&moodSwings=${moodSwings}&harmony=${harmony}&emotions=${emotions}&overwhelmed=${overwhelmed}&decision=${decision}&ambitions=${ambitions}&compliments=${compliments}&insecure=${insecure}&overthinkPartner=${overthinkPartner}&prioritizeOthers=${prioritizeOthers}&motivated=${motivated}&aspects=${aspects}&morningRoutine=${morningRoutine}&physicalActivity=${physicalActivity}`}
          className="p-2"
        >
          <ArrowLeft className="w-6 h-6 text-black" />
        </Link>
        <div className="flex items-center gap-2">
          {/* Logo Coungiu no centro */}
          <Image
            src="/images/pagina22/logo.svg"
            alt="Coungiu Logo"
            width={100} // Ajuste conforme necessário
            height={40} // Ajuste conforme necessário
            priority
          />
        </div>
        <span className="text-gray-600 text-sm font-medium">19/23</span> {/* Alterado para 19/23 */}
      </header>
      <main className="flex flex-col items-center justify-center px-3 pt-1 pb-2 max-w-2xl mx-auto mt-24"> {/* Ajuste mt- para compensar o header fixo */}
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Evalúa su preparación para dominar la IA
          </h1>
        </div>
        <div className="w-full max-w-md space-y-4">
          {options.map((option) => {
            const isSelected = selectedOption === option.text
            return (
              <button
                key={option.text}
                onClick={() => handleOptionSelect(option.text)}
                className={`w-full p-4 text-left text-lg font-medium rounded-lg border-2 transition-all duration-200 flex items-center justify-start gap-4 ${ // Alterado para justify-start
                  isSelected
                    ? "border-purple-500 bg-purple-50 text-gray-800" // Cor de destaque para seleção
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                }`}
              >
                <Image
                  src={option.image}
                  alt={option.text}
                  width={40} // Ajuste o tamanho da imagem conforme necessário
                  height={40} // Ajuste o tamanho da imagem conforme necessário
                  className="object-contain"
                />
                <span>{option.text}</span>
              </button>
            )
          })}
        </div>
        {/* Não há botão de continuar explícito na imagem, a seleção já avança */}
      </main>
    </QuizLayout>
  )
}

export default function Step22() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <Step22Content />
    </Suspense>
  )
}
