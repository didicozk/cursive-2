"use client"

import { useState, Suspense } from "react"
import { ArrowLeft } from "lucide-react" // Keep ArrowLeft for navigation
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { QuizLayout } from "@/components/quiz-layout"
import Image from "next/image" // Import the Image component

function Step16Content() {
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

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option)
    setTimeout(() => {
      router.push(
        `/quiz/step-17?gender=${gender}&age=${age}&tiredness=${tiredness}&lastMinute=${lastMinute}&distraction=${distraction}&worried=${worried}&moodSwings=${moodSwings}&harmony=${harmony}&emotions=${emotions}&overwhelmed=${overwhelmed}&decision=${decision}&ambitions=${ambitions}&compliments=${compliments}&insecure=${insecure}&overthinkPartner=${option}`,
      )
    }, 300)
  }

  // Options now include image sources
  const options = [
    { text: "Sí", imageSrc: "/images/pagina16/migrated_d14fbcf1p6wyzn_v3_ai_quiz_new-skills_1.webp" }, // Thumbs up
    { text: "No", imageSrc: "/images/pagina16/migrated_d14fbcf1p6wyzn_v3_ai_quiz_new-skills_2.webp" }, // Thumbs down
    { text: "Hmm, no estoy seguro", imageSrc: "/images/pagina16/migrated_d14fbcf1p6wyzn_v3_ai_quiz_new-skills_3.webp" }, // Thinking face
  ]

  return (
    // Utiliser QuizLayout pour la barre de progression, maintenant à l'étape 13/26
    <QuizLayout step={13} totalSteps={26}>
      <header className="w-full px-6 py-4 flex justify-between items-center absolute top-0 left-0 right-0 bg-[#f5f3f0] z-10">
        <Link
          href={`/quiz/step-15?gender=${gender}&age=${age}&tiredness=${tiredness}&lastMinute=${lastMinute}&distraction=${distraction}&worried=${worried}&moodSwings=${moodSwings}&harmony=${harmony}&emotions=${emotions}&overwhelmed=${overwhelmed}&decision=${decision}&ambitions=${ambitions}&compliments=${compliments}&insecure=${insecure}`}
          className="p-2"
        >
          <ArrowLeft className="w-6 h-6 text-black" />
        </Link>
        <div className="flex items-center gap-2">
          {/* Logo */}
          <Image
            src="/images/pagina16/logo.svg"
            alt="Logo"
            width={100} // Adjust width as needed
            height={40} // Adjust height as needed
            priority
          />
        </div>
        <span className="text-gray-600 text-sm font-medium">13/26</span>
      </header>
      <main className="flex flex-col items-center justify-center px-3 pt-1 pb-2 max-w-2xl mx-auto mt-4">
        <div className="text-center space-y-4 mb-12">
          {/* Question illustration */}
          <Image
            src="/images/pagina16/passo 16..png"
            alt="Question illustration"
            width={150} // Adjust size as needed
            height={150} // Adjust size as needed
            className="mx-auto mb-4" // Center the image
          />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            ¿Se siente cómodo aprendiendo nuevas
            <br />
            habilidades o técnicas?
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

export default function Step16() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <Step16Content />
    </Suspense>
  )
}
