"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PlusCircle, Trash2, Save, ImageIcon } from "lucide-react"

// Simulação de posts existentes
const existingPosts = [
  {
    id: 1,
    title: "Como escolher o imóvel ideal para investimento",
    excerpt: "Descubra as principais dicas para fazer um investimento imobiliário seguro e lucrativo.",
    date: "15/04/2023",
    category: "Investimentos",
    status: "Publicado",
  },
  {
    id: 2,
    title: "Tendências do mercado imobiliário para 2023",
    excerpt: "Conheça as principais tendências que estão moldando o mercado imobiliário neste ano.",
    date: "28/03/2023",
    category: "Mercado",
    status: "Publicado",
  },
  {
    id: 3,
    title: "Dicas para decorar seu apartamento com estilo",
    excerpt: "Aprenda como transformar seu apartamento com dicas de decoração que combinam estilo e funcionalidade.",
    date: "10/03/2023",
    category: "Decoração",
    status: "Publicado",
  },
]

export default function AdminBlogPage() {
  const [posts, setPosts] = useState(existingPosts)
  const [isCreating, setIsCreating] = useState(false)
  const [isEditing, setIsEditing] = useState<number | null>(null)

  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    tags: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }))
  }

  const handleCreatePost = () => {
    setIsCreating(true)
    setIsEditing(null)
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      category: "",
      tags: "",
    })
  }

  const handleEditPost = (id: number) => {
    const postToEdit = posts.find((post) => post.id === id)
    if (postToEdit) {
      setIsEditing(id)
      setIsCreating(false)
      setFormData({
        title: postToEdit.title,
        excerpt: postToEdit.excerpt,
        content: "",
        category: postToEdit.category,
        tags: "",
      })
    }
  }

  const handleDeletePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id))
  }

  const handleSavePost = () => {
    const currentDate = new Date().toLocaleDateString("pt-BR")

    if (isCreating) {
      const newPost = {
        id: posts.length > 0 ? Math.max(...posts.map((p) => p.id)) + 1 : 1,
        title: formData.title,
        excerpt: formData.excerpt,
        date: currentDate,
        category: formData.category,
        status: "Publicado",
      }

      setPosts([...posts, newPost])
      setIsCreating(false)
    } else if (isEditing) {
      setPosts(
        posts.map((post) =>
          post.id === isEditing
            ? {
                ...post,
                title: formData.title,
                excerpt: formData.excerpt,
                category: formData.category,
              }
            : post,
        ),
      )
      setIsEditing(null)
    }

    setFormData({
      title: "",
      excerpt: "",
      content: "",
      category: "",
      tags: "",
    })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-archivo tracking-wider">Gerenciador de Blog</h1>
          <Button onClick={handleCreatePost} className="bg-[#f3c76c] text-black hover:bg-[#c38d51]">
            <PlusCircle className="h-4 w-4 mr-2" />
            Novo Post
          </Button>
        </div>

        {(isCreating || isEditing !== null) && (
          <div className="mb-8 border p-6 rounded-lg">
            <h2 className="text-xl font-archivo tracking-wider mb-4">
              {isCreating ? "Criar Novo Post" : "Editar Post"}
            </h2>

            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="title">Título</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Digite o título do post"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="excerpt">Resumo</Label>
                <Textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  placeholder="Digite um breve resumo do post"
                  rows={3}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="content">Conteúdo</Label>
                <Textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  placeholder="Digite o conteúdo completo do post"
                  rows={10}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="category">Categoria</Label>
                  <Select value={formData.category} onValueChange={handleSelectChange}>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Investimentos">Investimentos</SelectItem>
                      <SelectItem value="Mercado">Mercado</SelectItem>
                      <SelectItem value="Decoração">Decoração</SelectItem>
                      <SelectItem value="Sustentabilidade">Sustentabilidade</SelectItem>
                      <SelectItem value="Vendas">Vendas</SelectItem>
                      <SelectItem value="Financiamento">Financiamento</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="tags">Tags (separadas por vírgula)</Label>
                  <Input
                    id="tags"
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    placeholder="Ex: investimento, imóveis, mercado"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="image">Imagem de Capa</Label>
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
                  onClick={handleSavePost}
                  className="bg-[#f3c76c] text-black hover:bg-[#c38d51]"
                  disabled={!formData.title || !formData.excerpt || !formData.category}
                >
                  <Save className="h-4 w-4 mr-2" />
                  Salvar Post
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
                <th className="p-3 font-archivo">Categoria</th>
                <th className="p-3 font-archivo">Data</th>
                <th className="p-3 font-archivo">Status</th>
                <th className="p-3 font-archivo text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{post.title}</td>
                  <td className="p-3">{post.category}</td>
                  <td className="p-3">{post.date}</td>
                  <td className="p-3">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">{post.status}</span>
                  </td>
                  <td className="p-3 text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm" onClick={() => handleEditPost(post.id)}>
                        Editar
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={() => handleDeletePost(post.id)}
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
