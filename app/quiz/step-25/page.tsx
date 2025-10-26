"use client"

import { useState, Suspense } from "react"
import { ArrowLeft, Check } from "lucide-react" // Only Check and ArrowLeft are needed from lucide-react now
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { QuizLayout } from "@/components/quiz-layout"
import Image from "next/image" // Import the Image component from next/image

function Step25Content() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
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
  const struggles = searchParams.get("struggles") || ""

  const handleOptionToggle = (optionText: string) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(optionText)
        ? prevSelected.filter((item) => item !== optionText)
        : [...prevSelected, optionText],
    )
  }

  const handleContinue = () => {
    const selectedImprovements = selectedOptions.join(",")
    router.push(
      `/quiz/step-26?gender=${gender}&age=${age}&tiredness=${tiredness}&lastMinute=${lastMinute}&distraction=${distraction}&worried=${worried}&moodSwings=${moodSwings}&harmony=${harmony}&emotions=${emotions}&overwhelmed=${overwhelmed}&decision=${decision}&ambitions=${ambitions}&compliments=${compliments}&insecure=${insecure}&overthinkPartner=${overthinkPartner}&prioritizeOthers=${prioritizeOthers}&motivated=${motivated}&aspects=${aspects}&morningRoutine=${morningRoutine}&physicalActivity=${physicalActivity}&habits=${habits}&sleepImprovements=${sleepImprovements}&struggles=${struggles}&improvements=${selectedImprovements}`,
    )
  }

  // Updated options to use image paths
  const options = [
    { text: "Comprar una casa", image: "/images/pagina25/migrated_d14fbcf1p6wyzn_v3_quiz_wish_1.webp" },
    { text: "Una boda perfecta", image: "/images/pagina25/migrated_d14fbcf1p6wyzn_v3_quiz_wish_2.webp" },
    { text: "Vacaciones", image: "/images/pagina25/migrated_d14fbcf1p6wyzn_v3_quiz_wish_3.webp" },
    { text: "Comprar un coche", image: "/images/pagina25/migrated_d14fbcf1p6wyzn_v3_quiz_wish_4.webp" },
    { text: "Jubilación sin preocupaciones", image: "/images/pagina25/migrated_d14fbcf1p6wyzn_v3_quiz_wish_5.webp" },
    { text: "Otro", image: "/images/pagina25/migrated_d14fbcf1p6wyzn_v3_quiz_wish_5.webp" }, // Using the same image for "Otro" for now, you can change it if you have a specific one
  ]

  return (
    // Utiliser QuizLayout pour la barre de progression, maintenant à l'étape 22/26
    <QuizLayout step={22} totalSteps={26}>
      <header className="w-full px-6 py-4 flex justify-between items-center absolute top-0 left-0 right-0 bg-[#f5f3f0] z-10">
        <Link
          href={`/quiz/step-24?gender=${gender}&age=${age}&tiredness=${tiredness}&lastMinute=${lastMinute}&distraction=${distraction}&worried=${worried}&moodSwings=${moodSwings}&harmony=${harmony}&emotions=${emotions}&overwhelmed=${overwhelmed}&decision=${decision}&ambitions=${ambitions}&compliments=${compliments}&insecure=${insecure}&overthinkPartner=${overthinkPartner}&prioritizeOthers=${prioritizeOthers}&motivated=${motivated}&aspects=${aspects}&morningRoutine=${morningRoutine}&physicalActivity=${physicalActivity}&habits=${habits}&sleepImprovements=${sleepImprovements}&struggles=${struggles}`}
          className="p-2"
        >
          <ArrowLeft className="w-6 h-6 text-black" />
        </Link>
        <div className="flex items-center gap-2">
          {/* Central logo */}
          <Image
            src="/images/pagina25/logo.svg"
            alt="Logo"
            width={100} // Adjust width as needed
            height={30} // Adjust height as needed
            className="h-7 w-auto" // Tailwind classes for sizing
          />
        </div>
        <span className="text-gray-600 text-sm font-medium">22/26</span>
      </header>
      <main className="flex flex-col items-center justify-center px-3 pt-1 pb-2 max-w-2xl mx-auto mt-20"> {/* Adjusted mt-4 to mt-20 to account for header height */}
        <div className="text-center space-y-2 mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            ¿Hay algo especial que desees lograr?
          </h1>
          <p className="text-gray-600 text-base">Es más probable que alcances tu objetivo si tienes algo importante a lo que apuntar</p>
        </div>
        <div className="w-full max-w-md space-y-4 mb-8">
          {options.map((option) => {
            const isSelected = selectedOptions.includes(option.text)
            return (
              <button
                key={option.text}
                onClick={() => handleOptionToggle(option.text)}
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
                    width={24} // Adjust based on desired icon size
                    height={24} // Adjust based on desired icon size
                    className={`w-6 h-6 ${isSelected ? "text-teal-500" : "text-gray-400"}`} // You might not need these text classes for images
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
          className="w-full max-w-sm bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors"
        >
          Continuar
        </button>
        {/* Footer with poweredbtcky.svg - assuming QuizLayout has a slot for this or you add it directly here */}
        <div className="mt-8">
           <Image
            src="/images/pagina25/poweredbtcky.svg"
            alt="Powered by Tcky"
            width={120} // Adjust width as needed
            height={30} // Adjust height as needed
           />
        </div>
      </main>
    </QuizLayout>
  )
}

export default function Step25() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <Step25Content />
    </Suspense>
  )
}
