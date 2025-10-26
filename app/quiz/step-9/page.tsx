"use client"

import { useState, Suspense } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { QuizLayout } from "@/components/quiz-layout"
import Image from "next/image" // Importar o componente Image do Next.js

function Step9Content() {
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
    challenges: searchParams.get("challenges") || "",
    financialSituation: searchParams.get("financialSituation") || "", // Parâmetro da Step 8
  }

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option)
    setTimeout(() => {
      const nextParams = new URLSearchParams({
        ...urlParams,
        annualIncome: option, // Novo parâmetro para esta etapa
      })
      router.push(`/quiz/step-10?${nextParams.toString()}`)
    }, 500)
  }

  // Opções para a etapa 9 com os textos e sem ícones, como na imagem
  const options = [
    { text: "US$30,000 - US$50,000" },
    { text: "US$50,000 - US$100,000" },
    { text: "Más de US$100,000" },
  ]

  const backLinkHref = `/quiz/step-8?${new URLSearchParams(urlParams).toString()}`

  return (
    <QuizLayout step={6} totalSteps={23}> {/* Total de passos ajustado para 23 */}
      
      <header className="w-full px-6 py-4 flex justify-between items-center absolute top-0 left-0 right-0 bg-[#f5f3f0] z-10">
        <Link href={backLinkHref} className="p-2">
          <ArrowLeft className="w-6 h-6 text-black" />
        </Link>
        <div className="flex items-center gap-2">
          {/* Logo central */}
          <Image
            src="/images/pagina9/logo.svg"
            alt="Logo"
            width={90}
            height={24}
          />
        </div>
        <span className="text-gray-600 text-sm font-medium">6/23</span> {/* Numeração da etapa atualizada para 6/23 */}
      </header>

      <main className="flex flex-col items-center pt-24 pb-2 max-w-4xl mx-auto px-4 w-full min-h-screen relative"> {/* Adiciona relative para posicionar a imagem de fundo */}
        
        {/* Imagem de fundo no canto inferior direito */}
        <div className="absolute bottom-0 right-0 z-0 opacity-80"> {/* Ajusta z-index e opacidade se necessário */}
          <Image
            src="/images/pagina9/migrated_d14fbcf1p6wyzn_v3_ai_quiz_income_male_25-34_background.webp"
            alt="Homem com dinheiro"
            width={400} // Ajuste o tamanho conforme a necessidade, ex: 400px
            height={400} // Ajuste o tamanho conforme a necessidade
            className="object-contain" // Garante que a imagem se ajuste sem cortar
          />
        </div>

        <div className="text-center space-y-2 mb-8 z-10"> {/* Adiciona z-10 para manter o texto acima da imagem */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            ¿A qué nivel de ingresos anuales deseas llegar?
          </h1>
        </div>
        
        <div className="w-full max-w-md space-y-4 z-10"> {/* Adiciona z-10 para manter as opções acima da imagem */}
          {options.map((option) => (
            <button
              key={option.text}
              onClick={() => handleOptionSelect(option.text)}
              className={`w-full p-4 text-center text-lg font-medium rounded-lg border-2 transition-all duration-200 ${ // Centraliza o texto
                selectedOption === option.text
                  ? "border-purple-600 bg-purple-50 text-gray-800"
                  : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
              }`}
            >
              <span>{option.text}</span>
            </button>
          ))}
        </div>
      </main>

      {/* Footer com o logo "Powered by" */}
      <footer className="w-full px-6 py-4 flex justify-center items-center absolute bottom-0 left-0 right-0 bg-[#f5f3f0] z-10">
        <Image
          src="/images/pagina9/poweredbtcky.svg"
          alt="Powered by TCKY"
          width={100}
          height={20}
        />
      </footer>
    </QuizLayout>
  )
}

export default function Step9() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#f5f3f0] flex items-center justify-center text-gray-500">Cargando...</div>
      }
    >
      <Step9Content />
    </Suspense>
  )
}
