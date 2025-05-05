import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { CustomButton } from "./ui/custom-button"

export default function AboutSection() {
  return (
    <section className="section bg-black text-white p-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-archivo tracking-wider mb-6 text-primary">Por que escolher a ASSET?</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Combinamos expertise de mercado, análise de dados e atendimento personalizado para oferecer as melhores
              soluções imobiliárias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-primary/30 rounded-lg p-6 hover:border-primary transition-colors">
              <h3 className="text-xl font-bold mb-3 text-primary">Expertise de Mercado</h3>
              <p className="text-gray-300">
                Nossa equipe possui ampla experiência e conhecimento do mercado imobiliário brasileiro, com
                especialização em diferentes segmentos e regiões.
              </p>
            </div>

            <div className="border border-primary/30 rounded-lg p-6 hover:border-primary transition-colors">
              <h3 className="text-xl font-bold mb-3 text-primary">Análise de Dados</h3>
              <p className="text-gray-300">
                Utilizamos tecnologia avançada e análise de dados para identificar tendências, oportunidades e riscos no
                mercado imobiliário.
              </p>
            </div>

            <div className="border border-primary/30 rounded-lg p-6 hover:border-primary transition-colors">
              <h3 className="text-xl font-bold mb-3 text-primary">Atendimento Personalizado</h3>
              <p className="text-gray-300">
                Cada cliente recebe um atendimento exclusivo, com soluções personalizadas de acordo com seus objetivos e
                necessidades específicas.
              </p>
            </div>

            <div className="border border-primary/30 rounded-lg p-6 hover:border-primary transition-colors">
              <h3 className="text-xl font-bold mb-3 text-primary">Transparência</h3>
              <p className="text-gray-300">
                Trabalhamos com total transparência em todas as etapas do processo, fornecendo informações claras e
                precisas para nossos clientes.
              </p>
            </div>

            <div className="border border-primary/30 rounded-lg p-6 hover:border-primary transition-colors">
              <h3 className="text-xl font-bold mb-3 text-primary">Rede de Parceiros</h3>
              <p className="text-gray-300">
                Contamos com uma ampla rede de parceiros estratégicos, incluindo advogados, arquitetos, engenheiros e
                instituições financeiras.
              </p>
            </div>

            <div className="border border-primary/30 rounded-lg p-6 hover:border-primary transition-colors">
              <h3 className="text-xl font-bold mb-3 text-primary">Resultados Comprovados</h3>
              <p className="text-gray-300">
                Nossa trajetória é marcada por casos de sucesso e clientes satisfeitos, com resultados concretos em
                diferentes tipos de operações imobiliárias.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}
