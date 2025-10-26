"use client"

import { useState, Suspense } from "react"
import { ArrowLeft } from "lucide-react" // Mantemos ArrowLeft para o botão de voltar
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image" // Importamos o componente Image do Next.js

// Não precisamos do QuizLayout nem dos ícones lucide para as opções,
// pois a imagem usa emojis e um layout diferente para a barra de progresso.

function Step20Content() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null) // Apenas uma opção pode ser selecionada
  const router = useRouter()
  const searchParams = useSearchParams()
  // Recupere os parâmetros da URL como antes, se necessário para a navegação
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
  const aspects = searchParams.get("aspects") || "" // Parâmetro da etapa anterior

  const handleOptionSelect = (optionText: string) => {
    setSelectedOption(optionText)
    // Redireciona automaticamente após a seleção, como no seu código original
    setTimeout(() => {
      router.push(
        `/quiz/step-21?gender=${gender}&age=${age}&tiredness=${tiredness}&lastMinute=${lastMinute}&distraction=${distraction}&worried=${worried}&moodSwings=${moodSwings}&harmony=${harmony}&emotions=${emotions}&overwhelmed=${overwhelmed}&decision=${decision}&ambitions=${ambitions}&compliments=${compliments}&insecure=${insecure}&overthinkPartner=${overthinkPartner}&prioritizeOthers=${prioritizeOthers}&motivated=${motivated}&aspects=${aspects}&aiKnowledge=${optionText}`, // Novo parâmetro 'aiKnowledge'
      )
    }, 300)
  }

  const options = [
    { text: "Sí, he oído hablar de ello", emoji: "/images/pagina20/migrated_d14fbcf1p6wyzn_v3_quiz_ai-tools_1.webp" }, // Emoji com corações
    { text: "Tengo curiosidad", emoji: "/images/pagina20/migrated_d14fbcf1p6wyzn_v3_quiz_ai-tools_2.webp" }, // Emoji nerd
    { text: "No, esto es nuevo para mí", emoji: "/images/pagina20/migrated_d14fbcf1p6wyzn_v3_quiz_ai-tools_3.webp" }, // Emoji monóculo
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Header */}
      <header className="w-full px-6 py-4 flex justify-between items-center bg-white border-b border-gray-200">
        <Link
          href={`/quiz/step-19?gender=${gender}&age=${age}&tiredness=${tiredness}&lastMinute=${lastMinute}&distraction=${distraction}&worried=${worried}&moodSwings=${moodSwings}&harmony=${harmony}&emotions=${emotions}&overwhelmed=${overwhelmed}&decision=${decision}&ambitions=${ambitions}&compliments=${compliments}&insecure=${insecure}&overthinkPartner=${overthinkPartner}&prioritizeOthers=${prioritizeOthers}&motivated=${motivated}&aspects=${aspects}`}
          className="p-2"
        >
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </Link>
        <div className="flex-grow flex justify-center">
          <Image
            src="/images/pagina20/logo.svg"
            alt="Courzii Logo"
            width={90} // Ajuste conforme necessário
            height={30} // Ajuste conforme necessário
            className="h-7 w-auto"
          />
        </div>
        <span className="text-gray-600 text-sm font-medium">17/23</span>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-start flex-grow px-4 pt-10 pb-6 max-w-2xl mx-auto">
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            ¿Sabías que las herramientas de IA pueden
            <br />
            aumentar aún más su potencial de ingresos?
          </h1>
        </div>

        <div className="w-full max-w-md space-y-4">
          {options.map((option) => {
            const isSelected = selectedOption === option.text
            return (
              <button
                key={option.text}
                onClick={() => handleOptionSelect(option.text)}
                className={`w-full p-4 rounded-lg border-2 transition-all duration-200 flex items-center gap-4 ${
                  isSelected
                    ? "border-blue-500 bg-blue-50 text-gray-800" // Cor de seleção para combinar com o exemplo
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                }`}
              >
                <Image
                  src={option.emoji}
                  alt={option.text}
                  width={40} // Ajuste o tamanho do emoji conforme necessário
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-lg font-medium">{option.text}</span>
              </button>
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default function Step20() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <Step20Content />
    </Suspense>
  )
}
