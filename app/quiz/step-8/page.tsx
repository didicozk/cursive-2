"use client"

import { useState, Suspense } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { QuizLayout } from "@/components/quiz-layout"
import Image from "next/image"

function Step8Content() {
  const [selectedOption, setSelectedOption] = useState<string>("")
  const router = useRouter()
  const searchParams = useSearchParams()

  const urlParams = {
    gender: searchParams.get("gender") || "",
    age: searchParams.get("age") || "",
    tiredness: searchParams.get("tiredness") || "",
    lastMinute: searchParams.get("lastMinute") || "",
    distraction: searchParams.get("distraction") || "",
    worried: searchParams.get("worried") || "",
    challenges: searchParams.get("challenges") || "", // Adiciona o parâmetro da etapa anterior (Step 7)
  }

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option)
    setTimeout(() => {
      const nextParams = new URLSearchParams({
        ...urlParams,
        financialSituation: option, // Parâmetro para esta etapa
      })
      router.push(`/quiz/step-9?${nextParams.toString()}`)
    }, 500)
  }

  const options = [
    { text: "Cómoda", imageSrc: "/images/pagina8/migrated_d14fbcf1p6wyzn_v3_ai_quiz_financial-situation_1.webp" },
    { text: "Me gustaría tener más estabilidad", imageSrc: "/images/pagina8/migrated_d14fbcf1p6wyzn_v3_ai_quiz_financial-situation_2.webp" },
    { text: "Estoy luchando para alcanzar mis metas financieras", imageSrc: "/images/pagina8/migrated_d14fbcf1p6wyzn_v3_ai_quiz_financial-situation_3.webp" }, // Usando a imagem "3.webp"
  ]

  const backLinkHref = `/quiz/step-7?${new URLSearchParams(urlParams).toString()}`

  return (
    <QuizLayout step={5} totalSteps={23}>
      
      <header className="w-full px-6 py-4 flex justify-between items-center absolute top-0 left-0 right-0 bg-[#f5f3f0] z-10">
        <Link href={backLinkHref} className="p-2">
          <ArrowLeft className="w-6 h-6 text-black" />
        </Link>
        <div className="flex items-center gap-2">
          {/* Logo central */}
          <Image
            src="/images/pagina8/logo.svg" // Caminho para o logo específico da página 8, se houver
            alt="Logo"
            width={90}
            height={24}
          />
        </div>
        <span className="text-gray-600 text-sm font-medium">5/23</span>
      </header>

      <main className="flex flex-col items-center pt-24 pb-2 max-w-4xl mx-auto px-4 w-full min-h-screen"> {/* Adiciona min-h-screen para garantir que o conteúdo não seja muito curto */}
        
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            ¿Cómo se siente acerca de su situación financiera?
          </h1>
        </div>
        
        <div className="w-full max-w-md space-y-4">
          {options.map((option) => (
            <button
              key={option.text}
              onClick={() => handleOptionSelect(option.text)}
              className={`w-full p-4 text-left text-lg font-medium rounded-lg border-2 transition-all duration-200 flex items-center gap-4 ${
                selectedOption === option.text
                  ? "border-purple-600 bg-purple-50 text-gray-800" // Ajusta a cor da borda e fundo para roxo mais escuro
                  : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
              }`}
            >
              <Image
                src={option.imageSrc}
                alt={option.text}
                width={40}
                height={40}
                className="flex-shrink-0"
              />
              <span className="text-base font-semibold">{option.text}</span>
            </button>
          ))}
        </div>
      </main>

      {/* Footer com o logo "Powered by" */}
      <footer className="w-full px-6 py-4 flex justify-center items-center absolute bottom-0 left-0 right-0 bg-[#f5f3f0] z-10">
        <Image
          src="/images/pagina8/poweredbtcky.svg" // Caminho para o logo "Powered by"
          alt="Powered by TCKY"
          width={100} // Ajuste conforme o tamanho desejado
          height={20} // Ajuste conforme o tamanho desejado
        />
      </footer>
    </QuizLayout>
  )
}

export default function Step8() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#f5f3f0] flex items-center justify-center text-gray-500">Cargando...</div>
      }
    >
      <Step8Content />
    </Suspense>
  )
}
