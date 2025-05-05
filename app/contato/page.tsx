"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export default function ContatoPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    propertyInterest: "Não especificado",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      // Simulação de envio - em um ambiente real, isso seria uma chamada à API
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        propertyInterest: "Não especificado",
      })
    } catch (err) {
      setSubmitError("Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className=" py-16 px-4 bg-black text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-archivo tracking-wider mb-4 text-primary">Contato</h1>
            <p className="text-xl">
              Entre em contato conosco e descubra como podemos ajudar você a tomar as melhores decisões no mercado
              imobiliário.
            </p>
          </div>
        </div>
      </section>

      {/* Formulário e Informações de Contato */}
      <section className="py-16 px-4 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-archivo tracking-wider mb-4 text-secondary">Envie-nos uma mensagem</h2>

              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
                  <p className="font-medium">Mensagem enviada com sucesso!</p>
                  <p className="mt-2">
                    Agradecemos seu contato. Um de nossos especialistas entrará em contato com você em breve.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-secondary hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                      {submitError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nome completo <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full shadow-sm focus:ring-secondary focus:border-secondary sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full shadow-sm focus:ring-secondary focus:border-secondary sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="block w-full shadow-sm focus:ring-secondary focus:border-secondary sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Assunto *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="block w-full shadow-sm focus:ring-secondary focus:border-secondary sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="propertyInterest" className="block text-sm font-medium text-gray-700 mb-1">
                      Interesse em imóveis
                    </label>
                    <select
                      id="propertyInterest"
                      name="propertyInterest"
                      value={formData.propertyInterest}
                      onChange={handleChange}
                      className="block w-full shadow-sm focus:ring-secondary focus:border-secondary sm:text-sm border-gray-300 rounded-md"
                    >
                      <option value="Não especificado">Selecione uma opção</option>
                      <option value="Compra de imóvel residencial">Compra de imóvel residencial</option>
                      <option value="Compra de imóvel comercial">Compra de imóvel comercial</option>
                      <option value="Venda de imóvel">Venda de imóvel</option>
                      <option value="Locação">Locação</option>
                      <option value="Investimento imobiliário">Investimento imobiliário</option>
                      <option value="Avaliação de imóvel">Avaliação de imóvel</option>
                      <option value="Consultoria">Consultoria</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full shadow-sm focus:ring-secondary focus:border-secondary sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>Enviando...</>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Enviar Mensagem
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-secondary">Informações de Contato</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Endereço</h3>
                    <p className="text-gray-600">Av. Paulista, 1000, São Paulo - SP, 01310-100</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Telefone</h3>
                    <p className="text-gray-600">(11) 3000-0000</p>
                    <p className="text-gray-600">(11) 99999-9999 (WhatsApp)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-bold">E-mail</h3>
                    <p className="text-gray-600">contato@asset-imobiliaria.com.br</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 text-secondary">Horário de Atendimento</h3>
              <div className="bg-gray-50 rounded-lg p-6 mb-8 border-l-4 border-l-primary">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Segunda a Sexta</p>
                    <p className="text-gray-600">09:00 - 18:00</p>
                  </div>
                  <div>
                    <p className="font-medium">Sábado</p>
                    <p className="text-gray-600">09:00 - 13:00</p>
                  </div>
                  <div className="col-span-2">
                    <p className="font-medium">Domingo e Feriados</p>
                    <p className="text-gray-600">Fechado</p>
                  </div>
                </div>
              </div>

              <div className="relative h-[300px] rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center border-4 border-primary/20">
                <MapPin className="h-12 w-12 text-secondary" />
                <span className="absolute">Mapa indisponível na visualização</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-archivo tracking-wider mb-4 text-secondary">Perguntas Frequentes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Encontre respostas para as perguntas mais comuns sobre nossos serviços e processos.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-l-primary">
              <h3 className="text-lg font-bold mb-2 text-secondary">
                Como funciona o processo de avaliação de imóveis?
              </h3>
              <p className="text-gray-600">
                Nosso processo de avaliação inclui análise comparativa de mercado, visita técnica ao imóvel, estudo da
                documentação e elaboração de laudo detalhado com o valor de mercado estimado.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-l-primary">
              <h3 className="text-lg font-bold mb-2 text-secondary">
                Quais documentos são necessários para vender um imóvel?
              </h3>
              <p className="text-gray-600">
                Para vender um imóvel, você precisará de documentos pessoais (RG, CPF), documentos do imóvel (escritura,
                matrícula atualizada, IPTU), e, se aplicável, documentos relacionados ao financiamento e ao condomínio.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-l-primary">
              <h3 className="text-lg font-bold mb-2 text-secondary">Como é calculada a comissão da imobiliária?</h3>
              <p className="text-gray-600">
                A comissão é calculada como um percentual sobre o valor da transação, geralmente entre 5% e 6% para
                vendas e um valor equivalente a um mês de aluguel para locações. Valores exatos são definidos em
                contrato.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-l-primary">
              <h3 className="text-lg font-bold mb-2 text-secondary">Quanto tempo leva para vender um imóvel?</h3>
              <p className="text-gray-600">
                O tempo de venda varia conforme o tipo de imóvel, localização, preço e condições de mercado. Em média,
                imóveis bem precificados e em boas condições são vendidos em 3 a 6 meses.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-l-primary">
              <h3 className="text-lg font-bold mb-2 text-secondary">A ASSET oferece financiamento próprio?</h3>
              <p className="text-gray-600">
                Não oferecemos financiamento próprio, mas temos parcerias com as principais instituições financeiras do
                mercado e podemos auxiliar em todo o processo de financiamento imobiliário.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient py-16 px-4">
        <div className="container text-center">
          <h2 className="text-3xl font-archivo tracking-wider mb-4 text-black">Ainda tem dúvidas?</h2>
          <p className="text-lg text-black/80 max-w-2xl mx-auto mb-8">
            Entre em contato por telefone ou WhatsApp e fale diretamente com um de nossos especialistas.
          </p>
          <a
            href="tel:+554599810-0566"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-secondary hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
          >
            <Phone className="h-5 w-5 mr-2" />
            Entrar em contato
          </a>
        </div>
      </section>
    </>
  )
}