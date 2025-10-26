import { ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Dados para os cards de seleção de idade com os caminhos das imagens corrigidos.
const ageRanges = [
  {
    label: "Idade: 18-24",
    imageSrc: "/images/pagina2/migrated_d14fbcf1p6wyzn_v3_ai_age-picker_male_18-24.webp",
    href: "/quiz/step-3?age=18-24",
  },
  {
    label: "Idade: 25-34",
    // Corrigido: Removido o "age-25-34.webp" extra no início do nome do arquivo
    imageSrc: "/images/pagina2/migrated_d14fbcf1p6wyzn_v3_ai_age-picker_male_25-34.webp",
    href: "/quiz/step-3?age=25-34",
  },
  {
    label: "Idade: 35-44",
    // Corrigido: Removido o "age-35-44.webp" extra no início do nome do arquivo
    imageSrc: "/images/pagina2/migrated_d14fbcf1p6wyzn_v3_ai_age-picker_male_35-44.webp",
    href: "/quiz/step-3?age=35-44",
  },
  {
    label: "Idade: 45+",
    // Corrigido: Removido o "age-45-plus." extra no início do nome do arquivo
    imageSrc: "/images/pagina2/migrated_d14fbcf1p6wyzn_v3_ai_age-picker_male_45.webp",
    href: "/quiz/step-3?age=45+",
  },
]

export default function AgeSelectionPage() {
  return (
    // Estrutura principal com flexbox para centralizar o conteúdo
    <div className="min-h-screen bg-white flex flex-col items-center">
      <main className="flex flex-col items-center justify-center flex-grow w-full px-4 text-center">
        
        {/* Logo no topo */}
        <div className="mb-10">
          <Image
            src="/images/pagina1/logo.svg" // Reutilizando o mesmo logo
            alt="Courziv Logo"
            width={120}
            height={40}
          />
        </div>

        {/* Seção de Títulos */}
        <div className="space-y-4 mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            DESAFIO DE CRESCIMENTO
            <br />
            DE RECEITA DA IA
          </h1>
          <p className="text-lg sm:text-xl text-gray-800 font-semibold">
            DE ACORDO COM VOCÊ IDADE IDADE
          </p>
          <p className="text-gray-600 font-medium text-sm sm:text-base">
            QUESTIONÁRIO DE 1 MINUTO
          </p>
        </div>

        {/* Grid responsivo para os cards de idade */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-6">
          {ageRanges.map((age) => (
            <Link key={age.label} href={age.href} className="flex flex-col items-center group">
              {/* Contêiner da Imagem com borda */}
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl border-2 border-blue-300 p-2 overflow-hidden mb-3 transition-transform group-hover:scale-105">
                <div className="relative w-full h-full">
                  <Image
                    src={age.imageSrc}
                    alt={`Personagem representando a idade ${age.label}`}
                    layout="fill"
                    objectFit="contain" // Garante que a imagem inteira apareça sem cortes
                  />
                </div>
              </div>
              {/* Botão de Ação */}
              <div className="w-32 sm:w-40 bg-blue-500 group-hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-between transition-colors text-xs sm:text-sm">
                <span>{age.label}</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        {/* Texto de Termos e Condições */}
        <div className="text-center text-xs text-gray-500 max-w-sm mt-4">
          <p>
            Ao escolher sua idade, você aceita os{" "}
            <Link href="/terms" className="underline hover:text-blue-600">
              Termos e Condições
            </Link>
            ,{" "}
            <Link href="/privacy" className="underline hover:text-blue-600">
              Política de privacidade
            </Link>
            ,{" "}
            <Link href="/subscription" className="underline hover:text-blue-600">
              Termos Assinatura
            </Link>
          </p>
        </div>
      </main>

      {/* Rodapé com novas informações */}
      <footer className="w-full py-6 text-center">
        <p className="text-xs text-gray-500">
          Courziv Limited, Limassol, Chipre
        </p>
      </footer>
    </div>
  )
}
