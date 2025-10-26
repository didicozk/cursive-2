"use client"

import { useState, Suspense } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { QuizLayout } from "@/components/quiz-layout"
import Image from "next/image" // Importar o componente Image do Next.js

function Step18Content() {
  const [selectedOption, setSelectedOption] = useState<string>("")
  const router = useRouter()
  const searchParams = useSearchParams()
  // Récupère les paramètres de l'URL existants
  const gender = searchParams.get("gender") || ""
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
  // Parâmetros de IA da etapa anterior (Step 17)
  const newToAI = searchParams.get("newToAI") || "0"
  const chatGPT = searchParams.get("chatGPT") || "0"
  const midJourney = searchParams.get("midJourney") || "0"
  const googleBard = searchParams.get("googleBard") || "0"
  const otterAI = searchParams.get("otterAI") || "0"
  const aiva = searchParams.get("aiva") || "0"
  const dallE = searchParams.get("dallE") || "0"
  const jaspar = searchParams.get("jaspar") || "0"
  const copilot = searchParams.get("copilot") || "0"
  const openAIPlayground = searchParams.get("openAIPlayground") || "0"


  const handleOptionSelect = (option: string) => {
    setSelectedOption(option)
    setTimeout(() => {
      // Cria um objeto URLSearchParams com os parâmetros existentes
      const currentSearchParams = new URLSearchParams(searchParams.toString());
      // Adiciona o novo parâmetro contentWritingKnowledge
      currentSearchParams.set("contentWritingKnowledge", option);

      router.push(
        `/quiz/step-19?${currentSearchParams.toString()}`
      )
    }, 300)
  }

  const options = [
    { text: "Experto", imageUrl: "/images/pagina18/migrated_d14fbcf1p6wyzn_v3_quiz_content-writing_1.webp" }, // Estrelas nos olhos
    { text: "Competente", imageUrl: "/images/pagina18/migrated_d14fbcf1p6wyzn_v3_quiz_content-writing_2.webp" }, // Piscada
    { text: "Intermedio", imageUrl: "/images/pagina18/migrated_d14fbcf1p6wyzn_v3_quiz_content-writing_3.webp" }, // Pensando
    { text: "Novato", imageUrl: "/images/pagina18/migrated_d14fbcf1p6wyzn_v3_quiz_content-writing_4.webp" }, // Dentes cerrados
  ]

  // Função para construir o link de volta, mantendo todos os parâmetros anteriores, incluindo os de IA
  const getPreviousStepLink = () => {
    const currentSearchParams = new URLSearchParams(searchParams.toString());
    // Remove o parâmetro contentWritingKnowledge se estiver presente para a navegação de volta
    currentSearchParams.delete("contentWritingKnowledge");
    return `/quiz/step-17?${currentSearchParams.toString()}`;
  };


  return (
    // Utilizar QuizLayout para a barra de progresso, agora na etapa 15/23
    <QuizLayout step={15} totalSteps={23}>
      <header className="w-full px-6 py-4 flex justify-between items-center absolute top-0 left-0 right-0 bg-[#f5f3f0] z-10">
        <Link
          href={getPreviousStepLink()}
          className="p-2"
        >
          <ArrowLeft className="w-6 h-6 text-black" />
        </Link>
        {/* Adicione o logo.svg aqui */}
        <Image src="/images/pagina18/logo.svg" alt="Logo Courziv" width={80} height={30} className="h-auto" />
        <span className="text-gray-600 text-sm font-medium">15 / 23</span>
      </header>
      <main className="flex flex-col items-center justify-center px-3 pt-1 pb-2 max-w-2xl mx-auto mt-20 sm:mt-24"> {/* Ajuste de margem superior */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Evalúa su conocimiento en redacción de
            <br />
            contenido
          </h1>
          <p className="text-gray-600 text-sm">
            Según Upwork, un escritor de contenido freelance gana alrededor de US$42,000 al año.
          </p>
        </div>
        <div className="w-full max-w-md space-y-4">
          {options.map((option) => (
            <button
              key={option.text}
              onClick={() => handleOptionSelect(option.text)}
              className={`w-full p-4 text-left text-lg font-medium rounded-lg border-2 transition-all duration-200 flex items-center gap-4 ${
                selectedOption === option.text
                  ? "border-purple-500 bg-white text-gray-800" // Cor de borda roxa para seleção
                  : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
              }`}
            >
              {/* Usar o componente Image do Next.js para otimização */}
              <Image src={option.imageUrl} alt={option.text} width={40} height={40} className="w-10 h-10" />
              <span>{option.text}</span>
            </button>
          ))}
        </div>
      </main>
    </QuizLayout>
  )
}

export default function Step18() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <Step18Content />
    </Suspense>
  )
}
