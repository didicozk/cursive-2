"use client"

import { useState, Suspense } from "react"
import { ArrowLeft } from "lucide-react" // Removido 'Clock' pois será substituído por imagens
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { QuizLayout } from "@/components/quiz-layout"
import Image from "next/image" // Importar o componente Image do Next.js

function Step21Content() {
  const [selectedOption, setSelectedOption] = useState<string>("")
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

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option)
    setTimeout(() => {
      router.push(
        `/quiz/step-22?gender=${gender}&age=${age}&tiredness=${tiredness}&lastMinute=${lastMinute}&distraction=${distraction}&worried=${worried}&moodSwings=${moodSwings}&harmony=${harmony}&emotions=${emotions}&overwhelmed=${overwhelmed}&decision=${decision}&ambitions=${ambitions}&compliments=${compliments}&insecure=${insecure}&overthinkPartner=${overthinkPartner}&prioritizeOthers=${prioritizeOthers}&motivated=${motivated}&aspects=${aspects}&morningRoutine=${morningRoutine}&physicalActivity=${option}`,
      )
    }, 300)
  }

  // Atualizado para refletir os novos rótulos e as imagens correspondentes
  const options = [
    { text: "Diseño Gráfico", image: "/images/pagina21/migrated_d14fbcf1p6wyzn_v3_quiz_topic_1.webp" },
    { text: "Creación de Contenido", image: "/images/pagina21/migrated_d14fbcf1p6wyzn_v3_quiz_topic_2.webp" },
    { text: "Desarrollo Web", image: "/images/pagina21/migrated_d14fbcf1p6wyzn_v3_quiz_topic_3.webp" },
    { text: "Inteligencia Artificial", image: "/images/pagina21/migrated_d14fbcf1p6wyzn_v3_quiz_topic_4.webp" },
    { text: "Marketing Digital", image: "/images/pagina21/migrated_d14fbcf1p6wyzn_v3_quiz_topic_5.webp" },
    { text: "Gestión de Redes Sociales", image: "/images/pagina21/migrated_d14fbcf1p6wyzn_v3_quiz_topic_6.webp" },
    { text: "Edición de Video", image: "/images/pagina21/migrated_d14fbcf1p6wyzn_v3_quiz_topic_7.webp" },
    { text: "Fotografía", image: "/images/pagina21/migrated_d14fbcf1p6wyzn_v3_quiz_topic_8.webp" },
    { text: "Comercio Electrónico", image: "/images/pagina21/migrated_d14fbcf1p6wyzn_v3_quiz_topic_9.webp" },
    { text: "Consultoría", image: "/images/pagina21/migrated_d14fbcf1p6wyzn_v3_quiz_topic_10.webp" },
  ]

  return (
    // Utilizar QuizLayout para a barra de progresso
    <QuizLayout step={18} totalSteps={23}> {/* Alterado totalSteps para 23 conforme a imagem */}
      <header className="w-full px-6 py-4 flex justify-between items-center absolute top-0 left-0 right-0 bg-[#f5f3f0] z-10">
        <Link
          href={`/quiz/step-20?gender=${gender}&age=${age}&tiredness=${tiredness}&lastMinute=${lastMinute}&distraction=${distraction}&worried=${worried}&moodSwings=${moodSwings}&harmony=${harmony}&emotions=${emotions}&overwhelmed=${overwhelmed}&decision=${decision}&ambitions=${ambitions}&compliments=${compliments}&insecure=${insecure}&overthinkPartner=${overthinkPartner}&prioritizeOthers=${prioritizeOthers}&motivated=${motivated}&aspects=${aspects}&morningRoutine=${morningRoutine}`}
          className="p-2"
        >
          <ArrowLeft className="w-6 h-6 text-black" />
        </Link>
        <div className="flex items-center gap-2">
          {/* Logo Coungiu no centro */}
          <Image
            src="/images/pagina21/logo.svg"
            alt="Coungiu Logo"
            width={100} // Ajuste conforme necessário
            height={40} // Ajuste conforme necessário
            priority
          />
        </div>
        <span className="text-gray-600 text-sm font-medium">18/23</span> {/* Alterado para 18/23 */}
      </header>
      <main className="flex flex-col items-center justify-center px-3 pt-1 pb-2 max-w-2xl mx-auto mt-24"> {/* Ajuste mt- para compensar o header fixo */}
        <div className="text-center space-y-2 mb-8"> {/* Reduzir mb para mais espaço */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            ¿En qué campos le gustaría probarse a usted
            <br />
            mismo?
          </h1>
          <p className="text-gray-600 text-sm">Elige todas las opciones que correspondan</p>
        </div>
        <div className="w-full max-w-4xl grid grid-cols-2 gap-4"> {/* Layout de grid com 2 colunas */}
          {options.map((option) => (
            <button
              key={option.text}
              onClick={() => handleOptionSelect(option.text)}
              className={`w-full p-4 text-left text-lg font-medium rounded-lg border-2 transition-all duration-200 flex items-center gap-4 ${
                selectedOption === option.text
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
          ))}
        </div>
        {/* Botão Continuar */}
        <button
          onClick={() => {
            // Lógica para continuar. Por enquanto, apenas um placeholder.
            // Em uma aplicação real, você pode querer verificar se algo foi selecionado.
            // Por simplicidade, vou simular o avanço para a próxima etapa.
            router.push(`/quiz/step-22?gender=${gender}&age=${age}&tiredness=${tiredness}&lastMinute=${lastMinute}&distraction=${distraction}&worried=${worried}&moodSwings=${moodSwings}&harmony=${harmony}&emotions=${emotions}&overwhelmed=${overwhelmed}&decision=${decision}&ambitions=${ambitions}&compliments=${compliments}&insecure=${insecure}&overthinkPartner=${overthinkPartner}&prioritizeOthers=${prioritizeOthers}&motivated=${motivated}&aspects=${aspects}&morningRoutine=${morningRoutine}&selectedFields=${selectedOption}`)
          }}
          className="mt-8 w-full max-w-md p-4 bg-[#b0a8f7] text-white font-bold rounded-lg hover:bg-[#9a91e3] transition-colors duration-200"
        >
          CONTINUAR
        </button>
      </main>
    </QuizLayout>
  )
}

export default function Step21() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <Step21Content />
    </Suspense>
  )
}
