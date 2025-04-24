import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Button } from "~/shared/ui/Button";
import { Card } from "~/shared/ui/Card";
import { Input } from "~/shared/ui/Input";
import { Textarea } from "~/shared/ui/Textarea";

export function PostEditPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: 게시글 작성 API 호출
    console.log({ title, content });
  };

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-6 font-bold text-2xl">게시글 작성</h1>
      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="title" className="font-medium text-sm">
              제목
            </label>
            <Input
              id="title"
              value={title}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
              placeholder="제목을 입력하세요"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="content" className="font-medium text-sm">
              내용
            </label>
            <Textarea
              id="content"
              value={content}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setContent(e.target.value)
              }
              placeholder="내용을 입력하세요"
              className="min-h-[300px]"
              required
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit">작성하기</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
