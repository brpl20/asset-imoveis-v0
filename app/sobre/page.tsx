import Image from "next/image"
import Link from "next/link"
import { Award, CheckCircle, Users } from "lucide-react"
import type { Metadata } from "next"
import { CustomButton } from "../ui/custom-button"

export const metadata: Metadata = {
  title: "Sobre | Conheça a ASSET",
  description:
    "Conheça a história, valores e equipe da ASSET: Inteligência Imobiliária. Especialistas em análise de mercado e investimentos imobiliários no Brasil.",
}

export default function SobrePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white px-4 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-archivo tracking-wider mb-4 text-primary">Sobre a ASSET</h1>
            <p className="text-xl">
              Somos especialistas em inteligência imobiliária, oferecendo análises precisas e consultoria estratégica
              para maximizar o valor dos seus investimentos.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16 px-4 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-archivo tracking-wider mb-4 text-secondary">Nossa História</h2>
              <p className="text-gray-700 mb-4">
                Fundada em 2015, a <span className="text-secondary font-semibold">ASSET: Inteligência Imobiliária</span>{" "}
                nasceu da visão de um grupo de profissionais com vasta experiência no mercado imobiliário brasileiro,
                que identificaram a necessidade de uma abordagem mais analítica e estratégica no setor.
              </p>
              <p className="text-gray-700 mb-4">
                Ao longo dos anos, desenvolvemos metodologias próprias de análise de mercado e avaliação de imóveis,
                combinando dados econômicos, tendências comportamentais e conhecimento técnico para oferecer insights
                valiosos aos nossos clientes.
              </p>
              <p className="text-gray-700 mb-4">
                Hoje, somos reconhecidos como referência em inteligência imobiliária, ajudando investidores,
                proprietários e compradores a tomarem decisões mais informadas e lucrativas no mercado imobiliário.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden border-4 border-primary/20">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Equipe da ASSET Inteligência Imobiliária"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 px-4 section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-archivo tracking-wider mb-4 text-secondary">Missão, Visão e Valores</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nossa filosofia de trabalho é baseada em princípios sólidos que norteiam todas as nossas ações e decisões.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-t-primary">
              <h3 className="text-xl font-bold mb-4 text-secondary">Missão</h3>
              <p className="text-gray-700">
                Proporcionar inteligência imobiliária de alta qualidade, oferecendo análises precisas e consultoria
                estratégica para maximizar o valor dos investimentos de nossos clientes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-t-primary">
              <h3 className="text-xl font-bold mb-4 text-secondary">Visão</h3>
              <p className="text-gray-700">
                Ser reconhecida como a empresa líder em inteligência imobiliária no Brasil, transformando a maneira como
                as pessoas tomam decisões no mercado imobiliário.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-t-primary">
              <h3 className="text-xl font-bold mb-4 text-secondary">Valores</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Excelência e precisão em nossas análises</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Transparência e ética em todas as relações</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Inovação constante em metodologias e processos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Compromisso com os resultados dos clientes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-16 px-4 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-archivo tracking-wider mb-4">Nossa Equipe</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Contamos com profissionais altamente qualificados e experientes, prontos para oferecer o melhor
              atendimento e as análises mais precisas do mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ricardo Santos",
                role: "Diretor de Análise de Mercado",
                bio: "Economista com mais de 15 anos de experiência no mercado imobiliário. Especialista em análise de tendências e valorização patrimonial.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Ana Oliveira",
                role: "Consultora de Investimentos",
                bio: "Administradora com MBA em Finanças e especialização em investimentos imobiliários. Expertise em análise de rentabilidade e estratégias de investimento.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Carlos Mendes",
                role: "Diretor Comercial",
                bio: "Mais de 20 anos de experiência em negociações imobiliárias de alto padrão. Especialista em imóveis de luxo e propriedades comerciais.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Mariana Costa",
                role: "Gerente de Avaliações",
                bio: "Engenheira Civil com especialização em avaliação e perícia de imóveis. Responsável pela metodologia de avaliação da ASSET.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Paulo Mendes",
                role: "Consultor Jurídico",
                bio: "Advogado especializado em Direito Imobiliário, com vasta experiência em contratos, regularização e due diligence de imóveis.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Carla Rodrigues",
                role: "Analista de Dados",
                bio: "Estatística com mestrado em Data Science. Responsável pela análise de dados e desenvolvimento de modelos preditivos para o mercado imobiliário.",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((member, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-secondary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-archivo tracking-wider mb-4 text-primary">Nossos Diferenciais</h2>
            <p className="text-lg max-w-3xl mx-auto">
              O que nos torna diferentes no mercado imobiliário e por que somos a escolha certa para você.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-primary/30 rounded-lg p-6 hover:border-primary transition-colors">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Metodologia Exclusiva</h3>
              <p className="text-gray-300">
                Desenvolvemos uma metodologia própria de análise de mercado e avaliação de imóveis, que combina dados
                quantitativos e qualitativos para resultados mais precisos.
              </p>
            </div>

            <div className="border border-primary/30 rounded-lg p-6 hover:border-primary transition-colors">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Equipe Multidisciplinar</h3>
              <p className="text-gray-300">
                Nossa equipe reúne profissionais de diferentes áreas, como economia, engenharia, direito e estatística,
                oferecendo uma visão completa do mercado imobiliário.
              </p>
            </div>

            <div className="border border-primary/30 rounded-lg p-6 hover:border-primary transition-colors">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Atendimento Personalizado</h3>
              <p className="text-gray-300">
                Cada cliente recebe um atendimento exclusivo, com soluções personalizadas de acordo com seus objetivos e
                necessidades específicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reconhecimentos */}
      <section className="py-16 px-4 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-archivo tracking-wider mb-4">Reconhecimentos</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ao longo dos anos, nosso trabalho tem sido reconhecido por diversas instituições e publicações
              especializadas.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
                <Image
                  src="/placeholder-logo.svg"
                  alt={`Prêmio ou reconhecimento ${item}`}
                  width={150}
                  height={75}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient py-16 px-4">
        <div className="container text-center">
          <h2 className="text-3xl font-archivo tracking-wider mb-4">Pronto para trabalhar com a melhor equipe?</h2>
          <p className="text-lg text-black/80 max-w-2xl mx-auto mb-8">
            Entre em contato conosco e descubra como podemos ajudar você a tomar as melhores decisões no mercado
            imobiliário.
          </p>
          <Link href="/contato" className="btn-secondary">
            <CustomButton variant="primary">Fale com um Especialista</CustomButton>
          </Link>
        </div>
      </section>
    </>
  )
}