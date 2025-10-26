"use client"

import { Suspense, useEffect, useState } from "react" // Added useEffect and useState for dynamic progress
// No Lucide icons needed for this page as per the screenshot
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
// Assuming QuizLayout is not used for this unique page structure, or it's very flexible.
// If you must use QuizLayout, you'd need to significantly modify it or create a new layout.
import Image from "next/image"

function Step28Content() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // State for dynamic progress (optional, can be static '48%' if not needed)
  const [progress, setProgress] = useState(0);

  // Retrieve URL parameters (keeping them for future steps)
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
  const timeInvestment = searchParams.get("timeInvestment") || "" // From step 26

  useEffect(() => {
    // Simulate progress increase and then redirect
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 1; // Increase by a small amount
      if (currentProgress > 48) { // Stop at 48% as shown in the image
        clearInterval(interval);
      }
      setProgress(currentProgress);
    }, 50); // Update every 50ms

    // Redirect after a delay, simulating generation time
    const redirectTimeout = setTimeout(() => {
      router.push(
        `/quiz/step-29?gender=${gender}&age=${age}&tiredness=${tiredness}&lastMinute=${lastMinute}&distraction=${distraction}&worried=${worried}&moodSwings=${moodSwings}&harmony=${harmony}&emotions=${emotions}&overwhelmed=${overwhelmed}&decision=${decision}&ambitions=${ambitions}&compliments=${compliments}&insecure=${insecure}&overthinkPartner=${overthinkPartner}&prioritizeOthers=${prioritizeOthers}&motivated=${motivated}&aspects=${aspects}&morningRoutine=${morningRoutine}&physicalActivity=${physicalActivity}&habits=${habits}&sleepImprovements=${sleepImprovements}&struggles=${struggles}&improvements=${improvements}&workOn=${workOn}&timeInvestment=${timeInvestment}`,
      )
    }, 4000); // Redirect after 4 seconds

    return () => {
      clearInterval(interval);
      clearTimeout(redirectTimeout);
    };
  }, [router, gender, age, tiredness, lastMinute, distraction, worried, moodSwings, harmony, emotions, overwhelmed, decision, ambitions, compliments, insecure, overthinkPartner, prioritizeOthers, motivated, aspects, morningRoutine, physicalActivity, habits, sleepImprovements, struggles, improvements, workOn, timeInvestment]);


  // Circular progress bar component
  const CircularProgress = ({ percentage }: { percentage: number }) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <svg className="w-32 h-32 transform -rotate-90">
        <circle
          className="text-gray-200"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="64"
          cy="64"
        />
        <circle
          className="text-blue-600"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="64"
          cy="64"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-2xl font-bold text-gray-800"
          transform="rotate(90 64 64)" // Rotate text back
        >
          {percentage}%
        </text>
      </svg>
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center">
      <header className="w-full px-6 py-4 flex justify-between items-center absolute top-0 left-0 right-0 z-10 bg-white">
        {/* No back arrow as per screenshot */}
        <div className="flex items-center gap-2">
          {/* Central logo */}
          <Image
            src="/images/pagina28/logo.svg"
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
        <div className="text-center space-y-4 mb-12">
          {/* Progress Circle */}
          <CircularProgress percentage={progress} />
          <p className="text-xl text-gray-700 mt-4">Creando su desafío personal...</p>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-600">
            Más de 600,000 personas
          </h2>
          <p className="text-lg text-gray-700">han elegido Coursiv</p>
        </div>

        {/* Testimonial Card */}
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 mb-8 border border-gray-200">
          <div className="flex items-center mb-4">
            {/* Trustpilot Stars (simplified) */}
            <div className="flex text-yellow-500 mr-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.295l-7.416 3.918 1.48-8.279L.332 9.306l8.332-1.151L12 .587z"/>
                </svg>
              ))}
            </div>
            <p className="text-sm text-gray-500 ml-auto">Jeremy</p>
          </div>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            La experiencia es de primera
            <br />
            El conocimiento de IA que he ganado del programa se puede aplicar
            inmediatamente en mi trabajo. He adquirido habilidades que mejoran mi
            eficiencia y efectividad en el trabajo.
          </p>
        </div>

        <p className="text-gray-500 text-sm mt-4">Reseñas destacadas de Trustpilot.</p>
      </main>
    </div>
  )
}

export default function Step28() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Step28Content />
    </Suspense>
  )
}
