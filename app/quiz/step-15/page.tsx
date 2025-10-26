"use client"

import { useState, Suspense } from "react"
import { ArrowLeft } from "lucide-react" // Keep ArrowLeft for navigation
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { QuizLayout } from "@/components/quiz-layout"
import Image from "next/image" // Import the Image component

function Step15Content() {
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

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option)
    setTimeout(() => {
      router.push(
        `/quiz/step-16?gender=${gender}&age=${age}&tiredness=${tiredness}&lastMinute=${lastMinute}&distraction=${distraction}&worried=${worried}&moodSwings=${moodSwings}&harmony=${harmony}&emotions=${emotions}&overwhelmed=${overwhelmed}&decision=${decision}&ambitions=${ambitions}&compliments=${compliments}&insecure=${option}`,
      )
    }, 300)
  }

  // The options now use the provided image assets as custom icons
  const options = [
    { text: "Sí, trabajos paralelos ocasionales", imageSrc: "/images/pagina15/migrated_d14fbcf1p6wyzn_v3_ai_quiz_side-hustle_1.webp" }, // Flying money
    { text: "No, solo un trabajo común", imageSrc: "/images/pagina15/migrated_d14fbcf1p6wyzn_v3_ai_quiz_side-hustle_2.webp" }, // Tools (hammer & wrench)
    { text: "Trabajé como freelance", imageSrc: "/images/pagina15/migrated_d14fbcf1p6wyzn_v3_ai_quiz_side-hustle_3.webp" }, // Notepad with pencil
  ]

  return (
    // Utiliser QuizLayout pour la barre de progression, maintenant à l'étape 12/26
    <QuizLayout step={12} totalSteps={26}>
      <header className="w-full px-6 py-4 flex justify-between items-center absolute top-0 left-0 right-0 bg-[#f5f3f0] z-10">
        <Link
          href={`/quiz/step-14?gender=${gender}&age=${age}&tiredness=${tiredness}&lastMinute=${lastMinute}&distraction=${distraction}&worried=${worried}&moodSwings=${moodSwings}&harmony=${harmony}&emotions=${emotions}&overwhelmed=${overwhelmed}&decision=${decision}&ambitions=${ambitions}&compliments=${compliments}`}
          className="p-2"
        >
          <ArrowLeft className="w-6 h-6 text-black" />
        </Link>
        <div className="flex items-center gap-2">
          {/* Logo */}
          <Image
            src="/images/pagina15/logo.svg"
            alt="Logo"
            width={100} // Adjust width as needed
            height={40} // Adjust height as needed
            priority
          />
        </div>
        <span className="text-gray-600 text-sm font-medium">12/26</span>
      </header>
      <main className="flex flex-col items-center justify-center px-3 pt-1 pb-2 max-w-2xl mx-auto mt-4">
        <div className="text-center space-y-4 mb-12">
          {/* Question illustration */}
          <Image
            src="/images/pagina15/passo 15..png"
            alt="Question illustration"
            width={150} // Adjust size as needed
            height={150} // Adjust size as needed
            className="mx-auto mb-4" // Center the image
          />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            ¿Ha explorado formas de ganar dinero además
            <br />
            del trabajo regular?
          </h1>
        </div>
        <div className="w-full max-w-md space-y-4">
          {options.map((option) => (
            <button
              key={option.text}
              onClick={() => handleOptionSelect(option.text)}
              className={`w-full p-4 text-left text-lg font-medium rounded-lg border-2 transition-all duration-200 flex items-center gap-4 ${
                selectedOption === option.text
                  ? "border-teal-500 bg-white text-gray-800"
                  : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
              }`}
            >
              <Image
                src={option.imageSrc}
                alt={option.text}
                width={32} // Adjust icon size as needed
                height={32} // Adjust icon size as needed
              />
              <span>{option.text}</span>
            </button>
          ))}
        </div>
      </main>
    </QuizLayout>
  )
}

export default function Step15() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <Step15Content />
    </Suspense>
  )
}
