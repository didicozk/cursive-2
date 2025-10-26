"use client"

import type React from "react"
import { useState, Suspense } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { QuizLayout } from "@/components/quiz-layout"
import Image from "next/image"

function Step13Content() {
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
    moodSwings: searchParams.get("moodSwings") || "",
    harmony: searchParams.get("harmony") || "",
    emotions: searchParams.get("emotions") || "",
    overwhelmed: searchParams.get("overwhelmed") || "",
    routineTasks: searchParams.get("routineTasks") || "", // From Step 11
    savedTimeActivity: searchParams.get("savedTimeActivity") || "", // From Step 12
  }

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option)
    setTimeout(() => {
      const nextParams = new URLSearchParams({
        ...urlParams,
        jobInterest: option, // New parameter name
      })
      router.push(`/quiz/step-14?${nextParams.toString()}`)
    }, 500)
  }

  const options = [
    { value: "absolutely", label: "Absolutamente" },
    { value: "somewhat", label: "En cierta medida" },
    { value: "maybe", label: "Tal vez" },
    { value: "not-necessarily", label: "No necesariamente" },
  ]

  const backLinkHref = `/quiz/step-12?${new URLSearchParams(urlParams).toString()}`

  return (
    <QuizLayout step={10} totalSteps={23}> {/* Updated step and totalSteps */}
      
      <header className="w-full px-6 py-4 flex justify-between items-center absolute top-0 left-0 right-0 bg-[#f5f3f0] z-10">
        <Link href={backLinkHref} className="p-2">
          <ArrowLeft className="w-6 h-6 text-black" />
        </Link>
        <div className="flex items-center gap-2">
          <Image
            src="/images/pagina13/logo.svg" // Updated logo path for pagina13
            alt="Counzly Logo"
            width={90}
            height={24}
            priority
          />
        </div>
        <div className="flex items-center gap-1">
            <div className="w-12 h-2 bg-blue-200 rounded-full overflow-hidden">
                <div className="h-full bg-[#6a3dfc]" style={{ width: `${(10 / 23) * 100}%` }}></div> {/* Progreso */}
            </div>
            <span className="text-gray-600 text-sm font-medium">10/23</span> {/* Número de etapa */}
        </div>
      </header>

      <main className="relative flex flex-col items-center justify-center px-3 pt-1 pb-2 max-w-2xl mx-auto mt-28 mb-4 min-h-[calc(100vh-theme(space.28)-theme(space.16))]">
        
        <div className="text-center space-y-3 mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            ¿Le gustaría un trabajo que coincida con sus intereses?
          </h1>
        </div>
        
        <div className="w-full max-w-lg mx-auto space-y-4">
          {options.map((option) => {
            const isSelected = selectedOption === option.value
            return (
              <button
                key={option.value}
                onClick={() => handleOptionSelect(option.value)}
                className={`w-full py-4 px-6 text-lg font-medium rounded-xl border-2 transition-all duration-200 flex items-center justify-center
                  ${isSelected
                    ? "border-[#6a3dfc] bg-white text-[#6a3dfc] shadow-md"
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:shadow-sm"
                  }`}
              >
                <span>{option.label}</span>
              </button>
            )
          })}
        </div>

        <div className="absolute bottom-[-40px] right-[-100px] w-[350px] h-[350px] pointer-events-none z-0 hidden sm:block">
          <Image
            src="/images/pagina13/migrated_d14fbcf1p6wyzn_v3_ai_quiz_boss_male_25-34_background.webp" // Updated character image path for pagina13
            alt="Man in suit" // Changed alt text to match the boss image
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </main>

      <footer className="w-full py-4 text-center mt-auto mb-4 z-10 bg-[#f5f3f0]">
        <Image
          src="/images/pagina13/poweredbtcky.svg" // Updated footer path for pagina13
          alt="Powered by TCKY"
          width={120}
          height={20}
          className="mx-auto"
        />
      </footer>
    </QuizLayout>
  )
}

export default function Step13() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen w-full bg-[#f5f3f0] flex items-center justify-center text-gray-500">Cargando...</div>
      }
    >
      <Step13Content />
    </Suspense>
  )
}
