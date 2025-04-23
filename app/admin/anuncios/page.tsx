"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PlusCircle, Trash2, Save, ImageIcon, LinkIcon } from "lucide-react"

// Simulação de anúncios existentes
const existingAds = [
  {
    id: 1,
    title: "Lançamento Exclusivo",
    description: "Condomínio de luxo com vista para o mar",
    position: "home-top",
    link: "/imoveis/lancamento-exclusivo",
    startDate: "01/04/2023",
    endDate: "30/06/2023",
    status: "Ativo",
  },
  {
    id: 2,
    title: "Financiamento Facilitado",
    description: "Taxas especiais para imóveis selecionados",
    position: "home-middle",
    link: "/financiamento",
    startDate: "15/03/2023",
    endDate: "15/05/2023",
    status: "Ativo",
  },
  {
    id: 3,
    title: "Avaliação Gratuita",
    description: "Saiba quanto vale seu imóvel",
    position: "blog-sidebar",
    link: "/avaliacao",
    startDate: "01/03/2023",
    endDate: "01/06/2023",
    status: "Ativo",
  },
]

export default function AdminAdsPage() {
  const [ads, setAds] = useState(existingAds)
  const [isCreating, setIsCreating] = useState(false)
  const [isEditing, setIsEditing] = useState<number | null>(null)

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    position: "",
    link: "",
    startDate: "",
    endDate: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, position: value }))
  }

  const handleCreateAd = () => {
    setIsCreating(true)
    setIsEditing(null)
    setFormData({
      title: "",
      description: "",
      position: "",
      link: "",
      startDate: "",
      endDate: "",
    })
  }

  const handleEditAd = (id: number) => {
    const adToEdit = ads.find((ad) => ad.id === id)
    if (adToEdit) {
      setIsEditing(id)
      setIsCreating(false)
      setFormData({
        title: adToEdit.title,
        description: adToEdit.description,
        position: adToEdit.position,
        link: adToEdit.link,
        startDate: adToEdit.startDate,
        endDate: adToEdit.endDate,
      })
    }
  }

  const handleDeleteAd = (id: number) => {
    setAds(ads.filter((ad) => ad.id !== id))
  }

  const handleSaveAd = () => {
    if (isCreating) {
      const newAd = {
        id: ads.length > 0 ? Math.max(...ads.map((a) => a.id)) + 1 : 1,
        title: formData.title,
        description: formData.description,
        position: formData.position,
        link: formData.link,
        startDate: formData.startDate,
        endDate: formData.endDate,
        status: "Ativo",
      }

      setAds([...ads, newAd])
      setIsCreating(false)
    } else if (isEditing) {
      setAds(
        ads.map((ad) =>
          ad.id === isEditing
            ? {
                ...ad,
                title: formData.title,
                description: formData.description,
                position: formData.position,
                link: formData.link,
                startDate: formData.startDate,
                endDate: formData.endDate,
              }
            : ad,
        ),
      )
      setIsEditing(null)
    }

    setFormData({
      title: "",
      description: "",
      position: "",
      link: "",
      startDate: "",
      endDate: "",
    })
  }

  return (
    <div className="container-custom py-12">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-archivo tracking-wider">Gerenciador de Anúncios</h1>
          <Button onClick={handleCreateAd} className="bg-[#f3c76c] text-black hover:bg-[#c38d51]">
            <PlusCircle className="h-4 w-4 mr-2" />
            Novo Anúncio
          </Button>
        </div>

        {(isCreating || isEditing !== null) && (
          <div className="mb-8 border p-6 rounded-lg">
            <h2 className="text-xl font-archivo tracking-wider mb-4">
              {isCreating ? "Criar Novo Anúncio" : "Editar Anúncio"}
            </h2>

            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="title">Título</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Digite o título do anúncio"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Digite uma breve descrição do anúncio"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="position">Posição</Label>
                  <Select value={formData.position} onValueChange={handleSelectChange}>
                    <SelectTrigger id="position">
                      <SelectValue placeholder="Selecione uma posição" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="home-top">Topo da Página Inicial</SelectItem>
                      <SelectItem value="home-middle">Meio da Página Inicial</SelectItem>
                      <SelectItem value="blog-sidebar">Lateral do Blog</SelectItem>
                      <SelectItem value="property-detail">Detalhe do Imóvel</SelectItem>
                      <SelectItem value="search-results">Resultados de Busca</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="link">Link</Label>
                  <div className="flex">
                    <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-gray-50">
                      <LinkIcon className="h-4 w-4 text-gray-500" />
                    </div>
                    <Input
                      id="link"
                      name="link"
                      value={formData.link}
                      onChange={handleInputChange}
                      placeholder="Ex: /imoveis/lancamento"
                      className="rounded-l-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="startDate">Data de Início</Label>
                  <Input
                    id="startDate"
                    name="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="endDate">Data de Término</Label>
                  <Input
                    id="endDate"
                    name="endDate"
                    type="date"
                    value={formData.endDate}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="image">Imagem do Anúncio</Label>
                <div className="flex items-center gap-4">
                  <Button type="button" variant="outline" className="flex items-center gap-2">
                    <ImageIcon className="h-4 w-4" />
                    Selecionar Imagem
                  </Button>
                  <span className="text-sm text-gray-500">Nenhuma imagem selecionada</span>
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsCreating(false)
                    setIsEditing(null)
                  }}
                >
                  Cancelar
                </Button>
                <Button
                  onClick={handleSaveAd}
                  className="bg-[#f3c76c] text-black hover:bg-[#c38d51]"
                  disabled={!formData.title || !formData.description || !formData.position}
                >
                  <Save className="h-4 w-4 mr-2" />
                  Salvar Anúncio
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3 font-archivo">Título</th>
                <th className="p-3 font-archivo">Posição</th>
                <th className="p-3 font-archivo">Período</th>
                <th className="p-3 font-archivo">Status</th>
                <th className="p-3 font-archivo text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {ads.map((ad) => (
                <tr key={ad.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{ad.title}</td>
                  <td className="p-3">
                    {ad.position === "home-top" && "Topo da Página Inicial"}
                    {ad.position === "home-middle" && "Meio da Página Inicial"}
                    {ad.position === "blog-sidebar" && "Lateral do Blog"}
                    {ad.position === "property-detail" && "Detalhe do Imóvel"}
                    {ad.position === "search-results" && "Resultados de Busca"}
                  </td>
                  <td className="p-3">
                    {ad.startDate} a {ad.endDate}
                  </td>
                  <td className="p-3">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">{ad.status}</span>
                  </td>
                  <td className="p-3 text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm" onClick={() => handleEditAd(ad.id)}>
                        Editar
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={() => handleDeleteAd(ad.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
