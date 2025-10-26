"use client"

import { useState, Suspense } from "react"
import { ArrowLeft } from "lucide-react" // Manter apenas ArrowLeft, as outras serão substituídas por imagens
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { QuizLayout } from "@/components/quiz-layout"
import Image from "next/image" // Importar o componente Image do Next.js

function Step7Content() {
  const [selectedOption, setSelectedOption] = useState<string>("")
  const router = useRouter()
  const searchParams = useSearchParams()
  const gender = searchParams.get("gender") || ""
  const age = searchParams.get("age") || ""
  const tiredness = searchParams.get("tiredness") || ""
  const lastMinute = searchParams.get("lastMinute") || ""
  const distraction = searchParams.get("distraction") || ""

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option)
    setTimeout(() => {
      router.push(
        `/quiz/step-8?gender=${gender}&age=${age}&tiredness=${tiredness}&lastMinute=${lastMinute}&distraction=${distraction}&worried=${option}`,
      )
    }, 500)
  }

  // Opções para a etapa 7, com os textos e os caminhos das imagens
  const options = [
    { text: "Sentirse mal pagado", imageSrc: "/images/pagina7/migrated_d14fbcf1p6wyzn_v3_ai_quiz_anxious_7.webp" },
    { text: "Dependencia financiera", imageSrc: "/images/pagina7/migrated_d14fbcf1p6wyzn_v3_ai_quiz_anxious_6.webp" },
    { text: "Falta de tiempo libre", imageSrc: "/images/pagina7/migrated_d14fbcf1p6wyzn_v3_ai_quiz_anxious_3.webp" },
    { text: "Rutina", imageSrc: "/images/pagina7/migrated_d14fbcf1p6wyzn_v3_ai_quiz_anxious_4.webp" },
    { text: "Preocupación constante", imageSrc: "/images/pagina7/migrated_d14fbcf1p6wyzn_v3_ai_quiz_anxious_1.webp" },
    { text: "Ambiente tóxico", imageSrc: "/images/pagina7/migrated_d14fbcf1p6wyzn_v3_ai_quiz_anxious_2.webp" },
    { text: "Otros", imageSrc: "/images/pagina7/migrated_d14fbcf1p6wyzn_v3_ai_quiz_anxious_5.webp" },
  ]

  return (
    <QuizLayout step={4} totalSteps={23}> {/* Total de passos ajustado para 23 conforme a imagem */}
      
      <header className="w-full px-6 py-4 flex justify-between items-center absolute top-0 left-0 right-0 bg-[#f5f3f0] z-10">
        <Link
          href={`/quiz/step-6?gender=${gender}&age=${age}&tiredness=${tiredness}&lastMinute=${lastMinute}&distraction=${distraction}`}
          className="p-2"
        >
          <ArrowLeft className="w-6 h-6 text-black" />
        </Link>
        <div className="flex items-center gap-2">
          {/* Logo central, substituindo o círculo por uma imagem de logo */}
          <Image
            src="/images/pagina7/logo.svg" // Caminho para o seu logo
            alt="Logo"
            width={90} // Ajuste conforme o tamanho desejado
            height={24} // Ajuste conforme o tamanho desejado
          />
        </div>
        <span className="text-gray-600 text-sm font-medium">4/23</span> {/* Numeração da etapa atualizada para 4/23 */}
      </header>

      <main className="flex flex-col items-center pt-24 pb-2 max-w-4xl mx-auto px-4 w-full"> {/* Ajustar padding-top para acomodar o header */}
        
        <div className="text-center space-y-2 mb-8"> {/* Ajustar margem inferior */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            ¿Cuáles son los desafíos con su trabajo actual?
          </h1>
          <p className="text-gray-600 text-sm">Elige todas las opciones correspondientes</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl"> {/* Grid para as opções */}
          {options.map((option) => (
            <button
              key={option.text}
              onClick={() => handleOptionSelect(option.text)}
              className={`w-full p-4 text-left text-lg font-medium rounded-lg border-2 transition-all duration-200 flex flex-col items-center justify-center text-center space-y-2 h-40 ${ // Ajustes para o layout do botão
                selectedOption === option.text
                  ? "border-purple-500 bg-purple-50 text-gray-800" // Cor de seleção para roxo claro
                  : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
              }`}
            >
              <Image
                src={option.imageSrc}
                alt={option.text}
                width={60} // Tamanho da imagem
                height={60} // Tamanho da imagem
                className="mb-2"
              />
              <span className="text-base font-semibold">{option.text}</span> {/* Ajustar tamanho da fonte */}
            </button>
          ))}
        </div>
        
        {/* Botão "CONTINUAR" fixo na parte inferior */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-lg flex justify-center">
          <button
            onClick={() => { /* Lógica para continuar, pode ser a mesma de handleOptionSelect se necessário */ }}
            className="w-full max-w-md py-3 rounded-lg bg-purple-600 text-white text-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
          >
            CONTINUAR
          </button>
        </div>
      </main>
    </QuizLayout>
  )
}

export default function Step7() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f5f3f0] flex items-center justify-center">Chargement...</div>}>
      <Step7Content />
    </Suspense>
  )
}
