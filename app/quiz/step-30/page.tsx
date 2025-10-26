"use client"

import { Suspense } from "react"
import { ArrowLeft } from "lucide-react" // Keep ArrowLeft, remove Check as it's not in the new layout
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"

// Mock de QuizLayout pour que l'exemple fonctionne de manière autonome
const QuizLayout = ({ children, step, totalSteps }: { children: React.ReactNode, step: number, totalSteps: number }) => (
    <div className="bg-white min-h-screen"> {/* Changed background to white to match the image */}
      {children}
    </div>
);

function Step30Content() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams.toString();
  
  const handleContinue = () => {
    // This will route to step 31, as per original logic, but now it's for the "Continuar" button.
    router.push(`/quiz/step-31?${query}`)
  }
  
  return (
    <QuizLayout step={26} totalSteps={26}> {/* Step and totalSteps are placeholders */}
      <header className="w-full px-6 py-4 flex justify-between items-center bg-white z-20 border-b border-gray-100"> {/* Changed background to white */}
        {/* Logo at the left, similar to the new image's header */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/pagina30/logo.svg"
            alt="Courziu Logo"
            width={100} 
            height={30} 
            className="h-7 w-auto" 
          />
        </div>
        {/* Hamburger menu icon on the right, as seen in the image */}
        <button className="p-2">
            <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-gray-600"></span>
                <span className="block w-6 h-0.5 bg-gray-600"></span>
                <span className="block w-6 h-0.5 bg-gray-600"></span>
            </div>
        </button>
      </header>

      <main className="flex flex-col items-center px-3 pt-1 pb-2 max-w-2xl mx-auto mt-8"> {/* Adjusted margin-top */}
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
            Tu nivel de habilidades en IA
          </h1>
          
          {/* AI Skills Graph Image */}
          <Image
            src="/images/pagina30/passo 30.png"
            alt="Gráfico de nivel de habilidades en IA"
            width={400} // Adjust width as per your image's aspect ratio and desired size
            height={250} // Adjust height as per your image's aspect ratio and desired size
            className="mx-auto mt-4 max-w-full h-auto"
          />
          <p className="text-gray-500 text-xs italic mt-4">
            Este gráfico es solo con fines ilustrativos
          </p>
        </div>

        {/* Call to action at the bottom */}
        <div className="fixed bottom-0 left-0 right-0 p-6 bg-white shadow-lg text-center">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              ¡Su desafío de aumento de ingresos con IA de 4 semanas está listo!
            </h2>
            <button
              onClick={handleContinue}
              className="w-full max-w-sm bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg text-lg transition-colors" // Changed color to match image
            >
              CONTINUAR
            </button>
        </div>
      </main>
    </QuizLayout>
  )
}

export default function Step30() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <Step30Content />
    </Suspense>
  )
}
