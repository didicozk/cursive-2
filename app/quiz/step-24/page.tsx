"use client"

import { useState, Suspense } from "react"
import { ArrowLeft, Check } from "lucide-react"
import Image from "next/image" // Import Image component
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { QuizLayout } from "@/components/quiz-layout"

function Step24Content() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null) // Only one option can be selected
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
  const habits = searchParams.get("habits") || ""
  const sleepImprovements = searchParams.get("sleepImprovements") || ""
  const struggles = searchParams.get("struggles") || "" // New struggle parameter


  const handleOptionSelect = (optionText: string) => {
    setSelectedOption(optionText)
  }

  const handleContinue = () => {
    // Only proceed if an option is selected
    if (selectedOption) {
      router.push(
        `/quiz/step-25?gender=${gender}&age=${age}&tiredness=${tiredness}&lastMinute=${lastMinute}&distraction=${distraction}&worried=${worried}&moodSwings=${moodSwings}&harmony=${harmony}&emotions=${emotions}&overwhelmed=${overwhelmed}&decision=${decision}&ambitions=${ambitions}&compliments=${compliments}&insecure=${insecure}&overthinkPartner=${overthinkPartner}&prioritizeOthers=${prioritizeOthers}&motivated=${motivated}&aspects=${aspects}&morningRoutine=${morningRoutine}&physicalActivity=${physicalActivity}&habits=${habits}&sleepImprovements=${sleepImprovements}&struggles=${struggles}&mainWish=${selectedOption}`, // Added mainWish
      )
    }
  }

  const options = [
    { text: "Mejorar mi salud y bienestar general", image: "/images/pagina25/migrated_d14fbcf1p6wyzn_v3_quiz_wish_1.webp" },
    { text: "Lograr mis objetivos personales y profesionales", image: "/images/pagina25/migrated_d14fbcf1p6wyzn_v3_quiz_wish_2.webp" },
    { text: "Reducir el estrés y la ansiedad", image: "/images/pagina25/migrated_d14fbcf1p6wyzn_v3_quiz_wish_3webp" },
    { text: "Construir relaciones más fuertes", image: "/images/pagina25/migrated_d14fbcf1p6wyzn_v3_quiz_wish_4.webp" },
    { text: "Aumentar mi confianza y autoestima", image: "/images/pagina25/migrated_d14fbcf1p6wyzn_v3_quiz_wish_5.webp" },
    { text: "Tener más energía y vitalidad", image: "/images/pagina25/migrated_d14fbcf1p6wyzn_v3_quiz_wish_6.webp" },
  ]

  return (
    <QuizLayout step={21} totalSteps={23}> {/* Adjusted to 21/23 */}
      <header className="w-full px-6 py-4 flex justify-between items-center absolute top-0 left-0 right-0 bg-[#f5f3f0] z-10">
        <Link
          href={`/quiz/step-23?gender=${gender}&age=${age}&tiredness=${tiredness}&lastMinute=${lastMinute}&distraction=${distraction}&worried=${worried}&moodSwings=${moodSwings}&harmony=${harmony}&emotions=${emotions}&overwhelmed=${overwhelmed}&decision=${decision}&ambitions=${ambitions}&compliments=${compliments}&insecure=${insecure}&overthinkPartner=${overthinkPartner}&prioritizeOthers=${prioritizeOthers}&motivated=${motivated}&aspects=${aspects}&morningRoutine=${morningRoutine}&physicalActivity=${physicalActivity}&habits=${habits}&sleepImprovements=${sleepImprovements}`}
          className="p-2"
        >
          <ArrowLeft className="w-6 h-6 text-black" />
        </Link>
        <Image
          src="/images/pagina25/logo.svg" // Adjust path as needed
          alt="Counzly Logo"
          width={100}
          height={24}
          className="h-6"
        />
        <span className="text-gray-600 text-sm font-medium">21/23</span>
      </header>
      <main className="flex flex-col items-center justify-center px-3 pt-1 pb-2 max-w-2xl mx-auto mt-4">
        <div className="text-center space-y-2 mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            ¿Cuál es tu principal deseo o el cambio
            <br />
            más importante que buscas en tu vida?
          </h1>
          <p className="text-gray-600 text-base">Selecciona solo una opción</p>
        </div>
        <div className="w-full max-w-md space-y-4 mb-8">
          {options.map((option) => {
            const isSelected = selectedOption === option.text
            return (
              <button
                key={option.text}
                onClick={() => handleOptionSelect(option.text)}
                className={`w-full p-4 text-left text-lg font-medium rounded-lg border-2 transition-all duration-200 flex items-center justify-between gap-4 ${
                  isSelected
                    ? "border-teal-500 bg-white text-gray-800"
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={option.image}
                    alt={option.text}
                    width={40} // Adjust size as needed
                    height={40} // Adjust size as needed
                    className="w-10 h-10"
                  />
                  <span>{option.text}</span>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    isSelected ? "border-teal-500 bg-teal-500" : "border-gray-300 bg-white"
                  }`}
                >
                  {isSelected && <Check className="w-4 h-4 text-white" />}
                </div>
              </button>
            )
          })}
        </div>
        <button
          onClick={handleContinue}
          disabled={!selectedOption} // Disable button if no option is selected
          className={`w-full max-w-sm bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors ${
            !selectedOption ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Continuer
        </button>
        <Image
          src="/images/pagina25/poweredbtcky.svg" // Adjust path as needed
          alt="Powered by TCKY"
          width={120} // Adjust size as needed
          height={30} // Adjust size as needed
          className="mt-8"
        />
      </main>
    </QuizLayout>
  )
}

export default function Step24() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Step24Content />
    </Suspense>
  )
}
