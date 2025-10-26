"use client"

import { useState, Suspense } from "react"
import { ArrowLeft, Check } from "lucide-react" // Manter Check para o ícone de seleção
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { QuizLayout } from "@/components/quiz-layout"
import Image from "next/image" // Importar o componente Image do Next.js

function Step17Content() {
  const [selectedTools, setSelectedTools] = useState<string[]>([]) // Para seleção múltipla
  const router = useRouter()
  const searchParams = useSearchParams()

  // Mapeamento de texto para o nome do parâmetro na URL para cada ferramenta
  const toolParamMap: { [key: string]: string } = {
    "Soy nuevo en las herramientas de IA": "newToAI",
    "ChatGPT": "chatGPT",
    "MidJourney": "midJourney",
    "Google Bard": "googleBard",
    "Otter.ai": "otterAI",
    "AIVA": "aiva",
    "DALL-E": "dallE",
    "Jaspar": "jaspar",
    "Copilot": "copilot",
    "OpenAI Playground": "openAIPlayground",
  }

  // Mapeamento de texto para o caminho da imagem
  const toolImageMap: { [key: string]: string } = {
    "Soy nuevo en las herramientas de IA": "/images/pagina17/migrated_d14fbcf1p6wyzn_v3_ai_quiz_ai-tools_6.webp", // Ícone de pensar
    "ChatGPT": "/images/pagina17/migrated_d14fbcf1p6wyzn_v3_ai_quiz_ai-tools_1.webp", // Ícone de robô
    "MidJourney": "/images/pagina17/migrated_d14fbcf1p6wyzn_v3_ai_quiz_ai-tools_2.webp", // Ícone de paleta de cores
    "Google Bard": "/images/pagina17/migrated_d14fbcf1p6wyzn_v3_ai_quiz_ai-tools_3.webp", // Ícone de laptop
    "Otter.ai": "/images/pagina17/migrated_d14fbcf1p6wyzn_v3_ai_quiz_ai-tools_4.webp", // Ícone de lontra
    "AIVA": "/images/pagina17/migrated_d14fbcf1p6wyzn_v3_ai_quiz_ai-tools_5.webp", // Ícone de fone de ouvido
    "DALL-E": "/images/pagina17/migrated_d14fbcf1p6wyzn_v3_ai_quiz_ai-tools_7.webp", // Ícone de artista
    "Jaspar": "/images/pagina17/migrated_d14fbcf1p6wyzn_v3_ai_quiz_ai-tools_8.webp", // Ícone de rosto feliz
    "Copilot": "/images/pagina17/migrated_d14fbcf1p6wyzn_v3_ai_quiz_ai-tools_9.webp", // Ícone de piloto
    "OpenAI Playground": "/images/pagina17/migrated_d14fbcf1p6wyzn_v3_ai_quiz_ai-tools_10.webp", // Ícone de escorregador
  }

  const handleToolSelect = (tool: string) => {
    setSelectedTools((prevSelectedTools) =>
      prevSelectedTools.includes(tool)
        ? prevSelectedTools.filter((t) => t !== tool)
        : [...prevSelectedTools, tool],
    )
  }

  const handleNextStep = () => {
    const newSearchParams = new URLSearchParams(searchParams.toString())

    // Define todos os parâmetros das ferramentas como '0' (não selecionado) por padrão
    Object.values(toolParamMap).forEach(param => {
        newSearchParams.set(param, "0");
    });

    // Define '1' para as ferramentas selecionadas
    selectedTools.forEach((tool) => {
      const paramName = toolParamMap[tool]
      if (paramName) {
        newSearchParams.set(paramName, "1")
      }
    })

    router.push(`/quiz/step-18?${newSearchParams.toString()}`)
  }

  const options = [
    { text: "Soy nuevo en las herramientas de IA", imageUrl: toolImageMap["Soy nuevo en las herramientas de IA"] },
    { text: "ChatGPT", imageUrl: toolImageMap["ChatGPT"] },
    { text: "MidJourney", imageUrl: toolImageMap["MidJourney"] },
    { text: "Google Bard", imageUrl: toolImageMap["Google Bard"] },
    { text: "Otter.ai", imageUrl: toolImageMap["Otter.ai"] },
    { text: "AIVA", imageUrl: toolImageMap["AIVA"] },
    { text: "DALL-E", imageUrl: toolImageMap["DALL-E"] },
    { text: "Jaspar", imageUrl: toolImageMap["Jaspar"] },
    { text: "Copilot", imageUrl: toolImageMap["Copilot"] },
    { text: "OpenAI Playground", imageUrl: toolImageMap["OpenAI Playground"] },
  ]

  // Função para mapear o parâmetro de volta para o texto da opção
  const getPreviousStepLink = () => {
    const previousSearchParams = new URLSearchParams(searchParams.toString());
    // Remove os parâmetros específicos das ferramentas de IA para não "poluir" a URL anterior
    Object.values(toolParamMap).forEach(param => {
        previousSearchParams.delete(param);
    });
    // Aponta para a etapa 16 ou para onde você deseja que o botão de voltar leve
    return `/quiz/step-16?${previousSearchParams.toString()}`;
  };


  return (
    <QuizLayout step={14} totalSteps={23}> {/* Atualizado para 14/23 */}
      <header className="w-full px-6 py-4 flex justify-between items-center absolute top-0 left-0 right-0 bg-[#f5f3f0] z-10">
        <Link
          href={getPreviousStepLink()}
          className="p-2"
        >
          <ArrowLeft className="w-6 h-6 text-black" />
        </Link>
        {/* Adicione o logo.svg aqui, se desejar, como no seu design */}
        <Image src="/images/pagina17/logo.svg" alt="Logo Courziv" width={80} height={30} className="h-auto" />
        <span className="text-gray-600 text-sm font-medium">14 / 23</span>
      </header>
      <main className="flex flex-col items-center px-3 pt-1 pb-2 max-w-4xl mx-auto mt-20 sm:mt-24"> {/* Ajuste de margem superior */}
        <div className="text-center space-y-4 mb-8"> {/* Reduzida a margem inferior */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            ¿Con qué herramientas de IA ya estás
            <br />
            familiarizado?
          </h1>
          <p className="text-gray-600 text-sm">Selecciona todas las que correspondan</p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl"> {/* Grid para as opções */}
          {options.map((option) => (
            <button
              key={option.text}
              onClick={() => handleToolSelect(option.text)}
              className={`relative w-full p-4 h-24 sm:h-20 text-left text-lg font-medium rounded-lg border-2 transition-all duration-200 flex items-center justify-between ${
                selectedTools.includes(option.text)
                  ? "border-purple-500 bg-white text-gray-800"
                  : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center gap-4">
                {/* Usar o componente Image do Next.js para otimização */}
                <Image src={option.imageUrl} alt={option.text} width={40} height={40} className="w-10 h-10" />
                <span>{option.text}</span>
              </div>
              {selectedTools.includes(option.text) && (
                <div className="absolute top-2 right-2 flex items-center justify-center w-6 h-6 rounded-full bg-purple-500 text-white">
                  <Check className="w-4 h-4" />
                </div>
              )}
            </button>
          ))}
        </div>
        <button
          onClick={handleNextStep}
          className="mt-8 w-full max-w-xs py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors duration-200"
        >
          SIGUIENTE PASO
        </button>
      </main>
    </QuizLayout>
  )
}

export default function Step17() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <Step17Content />
    </Suspense>
  )
}
