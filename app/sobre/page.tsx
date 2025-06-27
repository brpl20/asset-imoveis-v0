// import Image from "next/image"
import { Award, CheckCircle, Users } from "lucide-react"
import type { Metadata } from "next"
import { WhatsappButtonSemLink } from "@/components/WhatsButton"

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
            {/* <div className="relative h-[400px] rounded-lg overflow-hidden border-4 border-primary/20">
              <Image
                src="/03-100.jpg"
                alt="Equipe da ASSET Inteligência Imobiliária"
                fill
                className="object-cover"
              />
            </div> */}
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
                Oferecer um atendimento personalizado e consultivo, ajudando nossos clientes a identificar as melhores oportunidades de investimento imobiliário com segurança, transparência e expertise. Nosso objetivo é construir relacionamentos de longo prazo, baseados em confiança e resultados excepcionais.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-t-primary">
              <h3 className="text-xl font-bold mb-4 text-secondary">Visão</h3>
              <p className="text-gray-700">
                Ser referência no mercado imobiliário como a melhor escolha para investidores, destacando-nos pela excelência no atendimento, conhecimento de mercado e soluções inteligentes que geram valor e rentabilidade.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-t-primary">
              <h3 className="text-xl font-bold mb-4 text-secondary">Valores</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Transparência e ética são obrigações que temos para um bom relacionamento com o cliente.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Respeito e compromisso com o cliente fazem de nós uma imobiliária confiável e presente no mercado.</span>
                </li>
              </ul>
            </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      {/* CTA */}
      <section className="bg-gradient py-16 px-4">
        <div className="container text-center">
          <h2 className="text-3xl font-archivo tracking-wider mb-4">Pronto para trabalhar com a melhor equipe?</h2>
          <p className="text-lg text-black/80 max-w-2xl mx-auto mb-8">
            Entre em contato conosco e descubra como podemos ajudar você a tomar as melhores decisões no mercado
            imobiliário.
          </p>
          <WhatsappButtonSemLink
            className="block m-auto w-[500px] py-3 px-4 bg-secondary text-white text-center font-medium rounded-md hover:bg-secondary/90 transition-colors"
            mensagem="Olá! quero vender meu imovel!"
            textoBotao="Vender meu imóvel"
          />
        </div>
      </section>
    </>
  )
}