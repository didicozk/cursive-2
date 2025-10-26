"use client"

import { Suspense } from "react"
// No ArrowLeft or other Lucide icons are needed for this page as per the screenshot
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { QuizLayout } from "@/components/quiz-layout" // Assuming QuizLayout is flexible enough
import Image from "next/image"

function Step27Content() {
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
  const timeInvestment = searchParams.get("timeInvestment") || "" // Assuming this comes from step 26
  const targetObjective = searchParams.get("improvements") // Reusing 'improvements' for target objective, or you can pass a new param if it's different

  const handleContinue = () => {
    router.push(
      `/quiz/step-28?gender=${gender}&age=${age}&tiredness=${tiredness}&lastMinute=${lastMinute}&distraction=${distraction}&worried=${worried}&moodSwings=${moodSwings}&harmony=${harmony}&emotions=${emotions}&overwhelmed=${overwhelmed}&decision=${decision}&ambitions=${ambitions}&compliments=${compliments}&insecure=${insecure}&overthinkPartner=${overthinkPartner}&prioritizeOthers=${prioritizeOthers}&motivated=${motivated}&aspects=${aspects}&morningRoutine=${morningRoutine}&physicalActivity=${physicalActivity}&habits=${habits}&sleepImprovements=${sleepImprovements}&struggles=${struggles}&improvements=${improvements}&workOn=${workOn}&timeInvestment=${timeInvestment}`,
    )
  }

  // Define a map for objective display names if needed
  const objectiveMap: { [key: string]: string } = {
    "Comprar una casa": "Comprar una casa",
    "Una boda perfecta": "Una boda perfecta",
    "Vacaciones": "Vacaciones",
    "Comprar un coche": "Comprar un coche",
    "Jubilación sin preocupaciones": "Jubilación sin preocupaciones",
    "Otro": "Otro objetivo",
  }
  const displayObjective = targetObjective ? objectiveMap[targetObjective] || targetObjective : "tu objetivo"


  return (
    // QuizLayout might not be suitable for this page's header style.
    // If QuizLayout always includes a back arrow and step count, you might need a different layout for this specific page.
    // For now, I'll adapt the header within this component.
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center">
      <header className="w-full px-6 py-4 flex justify-between items-center absolute top-0 left-0 right-0 z-10 bg-white">
        {/* No back arrow as per screenshot */}
        <div className="flex items-center gap-2">
          {/* Central logo */}
          <Image
            src="/images/pagina27/logo.svg"
            alt="Logo Courgio"
            width={100} // Adjust width as needed
            height={30} // Adjust height as needed
            className="h-7 w-auto" // Tailwind classes for sizing
          />
        </div>
        {/* Hamburger menu icon - assuming it's a basic div for now */}
        <div className="p-2 cursor-pointer">
          <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-800"></div>
        </div>
        {/* No step count as per screenshot */}
      </header>

      <main className="flex flex-col items-center justify-center px-3 pt-28 pb-2 max-w-2xl mx-auto w-full"> {/* Adjusted pt- to clear header */}
        <div className="text-center space-y-2 mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Su reto personal de crecimiento
            <br />
            de ingresos con IA
          </h1>
          <p className="text-gray-600 text-lg">Su Desafío Personal de Crecimiento de Ingresos Impulsado por IA</p>
        </div>

        <div className="text-center mb-8">
          <p className="text-xl font-semibold text-gray-800">Maestro de la IA antes de Dic, 2025</p>
        </div>

        <div className="bg-gray-100 rounded-lg p-3 mb-12 text-center">
          <span className="text-gray-700 text-sm">Tu objetivo: </span>
          <span className="text-gray-900 font-semibold">{displayObjective}</span>
        </div>

        {/* Bar Chart Representation - This is a placeholder, you'd integrate a proper chart library here */}
        <div className="w-full max-w-lg bg-gray-50 p-6 rounded-lg shadow-inner mb-12 flex flex-col items-center relative" style={{ height: '300px' }}>
          <div className="absolute top-4 left-4 text-sm text-gray-600">100%</div>
          <div className="absolute top-[40%] left-4 text-sm text-gray-600">50%</div>
          <div className="absolute bottom-4 left-4 text-sm text-gray-600">0</div>
          <div className="flex justify-around items-end h-full w-full pt-10 px-10">
            <div className="flex flex-col items-center">
              <div className="w-12 h-16 bg-red-500 rounded-t-lg relative">
                <span className="absolute -top-6 text-xs w-full text-center">Principiante</span>
              </div>
              <span className="mt-2 text-sm text-gray-600">Oct</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-24 bg-orange-400 rounded-t-lg"></div>
              <span className="mt-2 text-sm text-gray-600">Nov</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-36 bg-green-400 rounded-t-lg"></div>
              <span className="mt-2 text-sm text-gray-600">Dic</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-48 bg-green-500 rounded-t-lg relative">
                <span className="absolute -top-6 text-xs w-full text-center">Maestro de IA</span>
              </div>
              <span className="mt-2 text-sm text-gray-600">Ene</span>
            </div>
          </div>
        </div>

        <button
          onClick={handleContinue}
          className="w-full max-w-sm bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors"
        >
          CONTINUAR
        </button>
      </main>
    </div>
  )
}

export default function Step27() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Step27Content />
    </Suspense>
  )
}"use client"

import { Suspense } from "react"
// No ArrowLeft or other Lucide icons are needed for this page as per the screenshot
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { QuizLayout } from "@/components/quiz-layout" // Assuming QuizLayout is flexible enough
import Image from "next/image"

function Step27Content() {
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
  const timeInvestment = searchParams.get("timeInvestment") || "" // Assuming this comes from step 26
  const targetObjective = searchParams.get("improvements") // Reusing 'improvements' for target objective, or you can pass a new param if it's different

  const handleContinue = () => {
    router.push(
      `/quiz/step-28?gender=${gender}&age=${age}&tiredness=${tiredness}&lastMinute=${lastMinute}&distraction=${distraction}&worried=${worried}&moodSwings=${moodSwings}&harmony=${harmony}&emotions=${emotions}&overwhelmed=${overwhelmed}&decision=${decision}&ambitions=${ambitions}&compliments=${compliments}&insecure=${insecure}&overthinkPartner=${overthinkPartner}&prioritizeOthers=${prioritizeOthers}&motivated=${motivated}&aspects=${aspects}&morningRoutine=${morningRoutine}&physicalActivity=${physicalActivity}&habits=${habits}&sleepImprovements=${sleepImprovements}&struggles=${struggles}&improvements=${improvements}&workOn=${workOn}&timeInvestment=${timeInvestment}`,
    )
  }

  // Define a map for objective display names if needed
  const objectiveMap: { [key: string]: string } = {
    "Comprar una casa": "Comprar una casa",
    "Una boda perfecta": "Una boda perfecta",
    "Vacaciones": "Vacaciones",
    "Comprar un coche": "Comprar un coche",
    "Jubilación sin preocupaciones": "Jubilación sin preocupaciones",
    "Otro": "Otro objetivo",
  }
  const displayObjective = targetObjective ? objectiveMap[targetObjective] || targetObjective : "tu objetivo"


  return (
    // QuizLayout might not be suitable for this page's header style.
    // If QuizLayout always includes a back arrow and step count, you might need a different layout for this specific page.
    // For now, I'll adapt the header within this component.
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center">
      <header className="w-full px-6 py-4 flex justify-between items-center absolute top-0 left-0 right-0 z-10 bg-white">
        {/* No back arrow as per screenshot */}
        <div className="flex items-center gap-2">
          {/* Central logo */}
          <Image
            src="/images/pagina27/logo.svg"
            alt="Logo Courgio"
            width={100} // Adjust width as needed
            height={30} // Adjust height as needed
            className="h-7 w-auto" // Tailwind classes for sizing
          />
        </div>
        {/* Hamburger menu icon - assuming it's a basic div for now */}
        <div className="p-2 cursor-pointer">
          <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-800"></div>
        </div>
        {/* No step count as per screenshot */}
      </header>

      <main className="flex flex-col items-center justify-center px-3 pt-28 pb-2 max-w-2xl mx-auto w-full"> {/* Adjusted pt- to clear header */}
        <div className="text-center space-y-2 mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Su reto personal de crecimiento
            <br />
            de ingresos con IA
          </h1>
          <p className="text-gray-600 text-lg">Su Desafío Personal de Crecimiento de Ingresos Impulsado por IA</p>
        </div>

        <div className="text-center mb-8">
          <p className="text-xl font-semibold text-gray-800">Maestro de la IA antes de Dic, 2025</p>
        </div>

        <div className="bg-gray-100 rounded-lg p-3 mb-12 text-center">
          <span className="text-gray-700 text-sm">Tu objetivo: </span>
          <span className="text-gray-900 font-semibold">{displayObjective}</span>
        </div>

        {/* Bar Chart Representation - This is a placeholder, you'd integrate a proper chart library here */}
        <div className="w-full max-w-lg bg-gray-50 p-6 rounded-lg shadow-inner mb-12 flex flex-col items-center relative" style={{ height: '300px' }}>
          <div className="absolute top-4 left-4 text-sm text-gray-600">100%</div>
          <div className="absolute top-[40%] left-4 text-sm text-gray-600">50%</div>
          <div className="absolute bottom-4 left-4 text-sm text-gray-600">0</div>
          <div className="flex justify-around items-end h-full w-full pt-10 px-10">
            <div className="flex flex-col items-center">
              <div className="w-12 h-16 bg-red-500 rounded-t-lg relative">
                <span className="absolute -top-6 text-xs w-full text-center">Principiante</span>
              </div>
              <span className="mt-2 text-sm text-gray-600">Oct</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-24 bg-orange-400 rounded-t-lg"></div>
              <span className="mt-2 text-sm text-gray-600">Nov</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-36 bg-green-400 rounded-t-lg"></div>
              <span className="mt-2 text-sm text-gray-600">Dic</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-48 bg-green-500 rounded-t-lg relative">
                <span className="absolute -top-6 text-xs w-full text-center">Maestro de IA</span>
              </div>
              <span className="mt-2 text-sm text-gray-600">Ene</span>
            </div>
          </div>
        </div>

        <button
          onClick={handleContinue}
          className="w-full max-w-sm bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-full text-lg transition-colors"
        >
          CONTINUAR
        </button>
      </main>
    </div>
  )
}

export default function Step27() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Step27Content />
    </Suspense>
  )
}
