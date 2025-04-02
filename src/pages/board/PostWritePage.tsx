"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft, ImageIcon, Link, Bold, Italic, List, ListOrdered } from "lucide-react"
import { Button } from "~/shared/ui/Button"
import { Input } from "~/shared/ui/Input"
import { Textarea } from "~/shared/ui/Textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/shared/ui/Select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/shared/ui/Tabs"
import { Card, CardContent } from "~/shared/ui/Card"
import { Avatar, AvatarFallback } from "~/shared/ui/Avatar"
import { Badge } from "~/shared/ui/Badge"
import { Separator } from "~/shared/ui/Separator"
import { Label } from "~/shared/ui/Label"

export default function PostWritePage() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [category, setCategory] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeTab, setActiveTab] = useState("write")

  const categories = [
    { id: "notice", name: "공지사항" },
    { id: "general", name: "일반" },
    { id: "question", name: "질문" },
    { id: "share", name: "정보공유" },
    { id: "event", name: "이벤트" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim()) {
      alert("제목을 입력해주세요.")
      return
    }

    if (!content.trim()) {
      alert("내용을 입력해주세요.")
      return
    }

    if (!category) {
      alert("카테고리를 선택해주세요.")
      return
    }

    setIsSubmitting(true)

    try {
      // 여기에 실제 데이터 저장 로직이 들어갑니다
      // 예: await savePost({ title, content, category })

      // 성공 시 목록 페이지로 이동
      setTimeout(() => {
        router.push("/")
      }, 1000)
    } catch (error) {
      console.error("글 작성 중 오류가 발생했습니다:", error)
      alert("글 작성 중 오류가 발생했습니다. 다시 시도해주세요.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCancel = () => {
    if (title || content) {
      if (confirm("작성 중인 내용이 있습니다. 정말 취소하시겠습니까?")) {
        router.push("/")
      }
    } else {
      router.push("/")
    }
  }

  const formatDate = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, "0")
    const day = String(now.getDate()).padStart(2, "0")
    return `${year}.${month}.${day}`
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={handleCancel}>
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold">글 작성하기</h1>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={handleCancel}>
              취소
            </Button>
            <Button onClick={handleSubmit} disabled={isSubmitting || !title || !content || !category}>
              {isSubmitting ? "저장 중..." : "저장하기"}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="category">카테고리</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger id="category">
                  <SelectValue placeholder="카테고리 선택" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="title">제목</Label>
              <Input
                id="title"
                placeholder="제목을 입력하세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-lg"
              />
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="write">작성</TabsTrigger>
              <TabsTrigger value="preview">미리보기</TabsTrigger>
            </TabsList>

            <TabsContent value="write" className="mt-4">
              <div className="border rounded-md">
                <div className="flex items-center gap-1 p-2 border-b bg-muted/40">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Bold className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Italic className="h-4 w-4" />
                  </Button>
                  <Separator orientation="vertical" className="mx-1 h-6" />
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <List className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ListOrdered className="h-4 w-4" />
                  </Button>
                  <Separator orientation="vertical" className="mx-1 h-6" />
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Link className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ImageIcon className="h-4 w-4" />
                  </Button>
                </div>
                <Textarea
                  placeholder="내용을 입력하세요..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="min-h-[400px] border-0 rounded-none focus-visible:ring-0 resize-none"
                />
              </div>
            </TabsContent>

            <TabsContent value="preview" className="mt-4">
              {title || content ? (
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        {category && (
                          <Badge variant="outline">{categories.find((cat) => cat.id === category)?.name || ""}</Badge>
                        )}
                      </div>

                      {title && <h2 className="text-2xl font-bold">{title}</h2>}

                      <div className="flex items-center text-sm text-muted-foreground gap-4">
                        <div className="flex items-center gap-1">
                          <Avatar className="h-5 w-5">
                            <AvatarFallback className="text-[10px]">사용자</AvatarFallback>
                          </Avatar>
                          <span>사용자</span>
                        </div>
                        <span>{formatDate()}</span>
                      </div>

                      <Separator />

                      {content ? (
                        <div className="prose prose-sm max-w-none">
                          {content.split("\n").map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground">내용을 입력하면 미리보기가 표시됩니다.</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <div className="flex h-[400px] items-center justify-center rounded-md border border-dashed">
                  <div className="text-center">
                    <p className="text-muted-foreground">제목과 내용을 입력하면 미리보기가 표시됩니다.</p>
                  </div>
                </div>
              )}
            </TabsContent>
          </Tabs>

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={handleCancel}>
              취소
            </Button>
            <Button type="submit" disabled={isSubmitting || !title || !content || !category}>
              {isSubmitting ? "저장 중..." : "저장하기"}
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}

