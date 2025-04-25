import { Search } from "lucide-react"

export default function Hero() {
  return (
    <div className="relative bg-black text-[#f3c76c] py-20 md:py-32 w-full">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('asset_pattern_com-fundo_01.png')",
        }}
      />

      <div className="flex flex-col items-center justify-center relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl text-center md:text-5xl lg:text-6xl font-archivo font-semibold tracking-wider mb-6">
            Encontre o Imóvel Perfeito para Você
          </h1>
          <p className="text-lg text-center md:text-xl mb-8">
            Soluções imobiliárias inteligentes com a expertise que você precisa para fazer o melhor negócio.
          </p>

          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <select className="w-full p-3 border border-gray-300 rounded-md text-black">
                  <option value="">Tipo de Imóvel</option>
                  <option value="apartamento">Apartamento</option>
                  <option value="casa">Casa</option>
                  <option value="comercial">Comercial</option>
                  <option value="terreno">Terreno</option>
                </select>
              </div>
              <div className="flex-1">
                <select className="w-full p-3 border border-gray-300 rounded-md text-black">
                  <option value="">Localização</option>
                  <option value="zona-sul">Zona Sul</option>
                  <option value="zona-oeste">Zona Oeste</option>
                  <option value="zona-norte">Zona Norte</option>
                  <option value="zona-leste">Zona Leste</option>
                  <option value="centro">Centro</option>
                </select>
              </div>
              <div className="flex-1">
                <select className="w-full p-3 border border-gray-300 rounded-md text-black">
                  <option value="">Preço Máximo</option>
                  <option value="500000">Até R$ 500.000</option>
                  <option value="1000000">Até R$ 1.000.000</option>
                  <option value="1500000">Até R$ 1.500.000</option>
                  <option value="2000000">Até R$ 2.000.000</option>
                  <option value="3000000">Acima de R$ 2.000.000</option>
                </select>
              </div>
              <div>
                <button className="w-full md:w-auto bg-[#f3c76c] text-black p-3 rounded-md flex items-center justify-center hover:bg-[#c38d51] transition-colors">
                  <Search className="h-5 w-5 mr-2" />
                  <span>Buscar</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
