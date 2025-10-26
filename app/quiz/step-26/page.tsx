"use client"

import { useState, Suspense } from "react"
import { ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { QuizLayout } from "@/components/quiz-layout"
import Image from "next/image"

function Step26Content() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()

  // Retrieve URL parameters
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
  const improvements = searchParams.get("improvements") || ""
  const workOn = searchParams.get("workOn") || ""

  const handleOptionSelect = (optionText: string) => {
    setSelectedOption(optionText)
  }

  const handleContinue = () => {
    if (selectedOption) {
      router.push(
        `/quiz/step-27?gender=${gender}&age=${age}&tiredness=${tiredness}&lastMinute=${lastMinute}&distraction=${distraction}&worried=${worried}&moodSwings=${moodSwings}&harmony=${harmony}&emotions=${emotions}&overwhelmed=${overwhelmed}&decision=${decision}&ambitions=${ambitions}&compliments=${compliments}&insecure=${insecure}&overthinkPartner=${overthinkPartner}&prioritizeOthers=${prioritizeOthers}&motivated=${motivated}&aspects=${aspects}&morningRoutine=${morningRoutine}&physicalActivity=${physicalActivity}&habits=${habits}&sleepImprovements=${sleepImprovements}&struggles=${struggles}&improvements=${improvements}&workOn=${workOn}&timeInvestment=${selectedOption}`,
      )
    }
  }

  const options = [{ text: "5 min/día" }, { text: "10 min/día" }, { text: "15 min/día" }, { text: "20 min/día" }]

  return (
    <QuizLayout step={23} totalSteps={26}>
      <header className="w-full px-6 py-4 flex justify-between items-center absolute top-0 left-0 right-0 bg-[#f5f3f0] z-10">
        <Link
          href={`/quiz/step-25?gender=${gender}&age=${age}&tiredness=${tiredness}&lastMinute=${lastMinute}&distraction=${distraction}&worried=${worried}&moodSwings=${moodSwings}&harmony=${harmony}&emotions=${emotions}&overwhelmed=${overwhelmed}&decision=${decision}&ambitions=${ambitions}&compliments=${compliments}&insecure=${insecure}&overthinkPartner=${overthinkPartner}&prioritizeOthers=${prioritizeOthers}&motivated=${motivated}&aspects=${aspects}&morningRoutine=${morningRoutine}&physicalActivity=${physicalActivity}&habits=${habits}&sleepImprovements=${sleepImprovements}&struggles=${struggles}&improvements=${improvements}&workOn=${workOn}`}
          className="p-2"
        >
          <ArrowLeft className="w-6 h-6 text-black" />
        </Link>
        <div className="flex items-center gap-2">
          <Image src="/images/pagina26/logo.svg" alt="Logo Courgio" width={100} height={30} className="h-7 w-auto" />
        </div>
        <span className="text-gray-600 text-sm font-medium">23/23</span>
      </header>

      <div className="absolute right-0 top-0 bottom-0 z-0 hidden lg:block">
        <Image
          src="/images/pagina26/migrated_d14fbcf1p6wyzn_v3_ai_quiz_time_male_25-34_background.webp"
          alt="Happy man celebrating"
          width={600}
          height={800}
          className="h-full w-auto object-cover"
        />
      </div>

      <main className="relative flex flex-col items-center justify-center px-3 pt-1 pb-2 max-w-2xl mx-auto mt-20 z-10 bg-[#f5f3f0] lg:bg-transparent">
        <div className="text-center space-y-2 mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            ¿Cuánto tiempo estás dispuesto a invertir para
            <br />
            alcanzar tu objetivo?
          </h1>
        </div>
        <div className="w-full max-w-md space-y-4 mb-8">
          {options.map((option) => {
            const isSelected = selectedOption === option.text
            return (
              <button
                key={option.text}
                onClick={() => handleOptionSelect(option.text)}
                className={`w-full p-4 text-center text-lg font-medium rounded-lg border-2 transition-all duration-200 flex items-center justify-center gap-4 ${
                  isSelected
                    ? "border-teal-500 bg-white text-gray-800"
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                }`}
              >
                <span>{option.text}</span>
                {isSelected && (
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ml-auto ${
                      isSelected ? "border-teal-500 bg-teal-500" : "border-gray-300 bg-white"
                    }`}
                  >
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
              </button>
            )
          })}
        </div>
        <button
          onClick={handleContinue}
          disabled={!selectedOption}
          className={`w-full max-w-sm font-medium py-4 px-8 rounded-full text-lg transition-colors ${
            selectedOption
              ? "bg-green-600 hover:bg-green-700 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Continuar
        </button>
        <div className="mt-8">
          <Image src="/images/pagina26/poweredbtcky.svg" alt="Powered by Tcky" width={120} height={30} />
        </div>
      </main>
    </QuizLayout>
  )
}

export default function Step26Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Step26Content />
    </Suspense>
  )
}
