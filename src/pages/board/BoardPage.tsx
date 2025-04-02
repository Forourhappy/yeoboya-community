import { Button } from '~/shared/ui/shadcn/button.tsx';
import { Tabs, TabsContent } from '~/shared/ui/shadcn/tabs.tsx';
import { ChevronDown } from 'lucide-react';
import { BoardCard } from './ui/BoardCard.tsx';

export function BoardPage() {
	const posts = [
		{
			id: 1,
			title: '2024년 상반기 커뮤니티 업데이트 안내',
			category: 'notice',
			categoryName: '공지사항',
			author: '관리자',
			date: '2024.03.10',
			views: 1243,
			likes: 56,
			comments: 8,
			thumbnail: '',
			isNew: true,
			isPinned: true,
		},
		{
			id: 2,
			title: '최신 디자인 트렌드에 대한 의견을 나눠주세요',
			category: 'general',
			categoryName: '일반',
			author: '디자인러버',
			date: '2024.03.11',
			views: 421,
			likes: 32,
			comments: 15,
			thumbnail: '',
		},
		{
			id: 3,
			title: 'React 18에서 새롭게 추가된 기능 정리',
			category: 'share',
			categoryName: '정보공유',
			author: '프론트엔드개발자',
			date: '2024.03.09',
			views: 876,
			likes: 124,
			comments: 23,
			thumbnail: '',
			isHot: true,
		},
		{
			id: 4,
			title: 'Next.js 앱 라우터 사용 시 문제가 발생합니다',
			category: 'question',
			categoryName: '질문',
			author: '코딩초보',
			date: '2024.03.08',
			views: 342,
			likes: 12,
			comments: 18,
			thumbnail: '',
		},
		{
			id: 5,
			title: '3월 온라인 웹 개발 컨퍼런스 참가자 모집',
			category: 'event',
			categoryName: '이벤트',
			author: '이벤트팀',
			date: '2024.03.07',
			views: 567,
			likes: 45,
			comments: 7,
			thumbnail: '',
		},
		{
			id: 6,
			title: 'UI/UX 디자인 포트폴리오 피드백 부탁드립니다',
			category: 'general',
			categoryName: '일반',
			author: '디자이너지망생',
			date: '2024.03.06',
			views: 289,
			likes: 18,
			comments: 24,
			thumbnail: '',
		},
	];

	return (
		// <div className="grid grid-cols-1 gap-6 md:grid-cols-[16rem_1fr]">
		<div className="mx-auto grid grid-cols-1 sm:max-w-2xl">
			{/* Sidebar */}
			{/* <aside className="space-y-6">
				<div className="sticky top-20 space-y-6">
					
					<div className="rounded-lg border bg-card p-4">
						<h3 className="mb-3 font-medium">카테고리</h3>
						<div className="space-y-2">
							<Button variant="ghost" className="w-full justify-start">
								전체
							</Button>
							<Button variant="ghost" className="w-full justify-start">
								자유게시판
							</Button>
							<Button variant="ghost" className="w-full justify-start">
								중고마켓
							</Button>
						</div>
					</div>

					
					<div className="rounded-lg border bg-card p-4">
						<h3 className="mb-3 font-medium">인기 태그</h3>
						<div className="flex flex-wrap gap-2">
							<Badge variant="secondary">#디자인</Badge>
							<Badge variant="secondary">#개발</Badge>
							<Badge variant="secondary">#React</Badge>
							<Badge variant="secondary">#Next.js</Badge>
							<Badge variant="secondary">#UI/UX</Badge>
							<Badge variant="secondary">#프론트엔드</Badge>
						</div>
					</div>
				</div>
			</aside> */}

			{/* Content */}
			<div className="mb-6 flex items-center justify-between">
				<h2 className="font-bold text-2xl">전체 게시글</h2>
				<Button variant="secondary">글쓰기</Button>
			</div>

			{/* 검색 */}
			{/* <div className="mb-6">
					<div className="relative">
						<Search className="-translate-y-1/2 absolute top-1/2 left-3 size-4 text-muted-foreground" />
						<Input
							type="search"
							placeholder="검색어를 입력하세요..."
							className="py-2.5 pl-10"
						/>
					</div>
				</div> */}

			<Tabs defaultValue="all">
				{/* <TabsList className="mb-4 flex flex-wrap">
						<TabsTrigger value="all">전체</TabsTrigger>
						<TabsTrigger value="popular">인기</TabsTrigger>
						<TabsTrigger value="recent">최신</TabsTrigger>
						<TabsTrigger value="comments">댓글</TabsTrigger>
						<TabsTrigger value="views">조회</TabsTrigger>
					</TabsList> */}

				<TabsContent value="all" className="space-y-4">
					{posts.map((post) => (
						<BoardCard key={post.id} post={post} />
					))}
				</TabsContent>
			</Tabs>

			<div className="mt-6 flex justify-center">
				<div className="flex items-center gap-1">
					<Button variant="outline" size="icon" className="size-8">
						<span className="sr-only">이전 페이지</span>
						<ChevronDown className="size-4 rotate-90" />
					</Button>
					<Button variant="outline" size="sm" className="size-8">
						1
					</Button>
					<Button
						variant="outline"
						size="sm"
						className="size-8 bg-primary text-primary-foreground"
					>
						2
					</Button>
					<Button variant="outline" size="sm" className="size-8">
						3
					</Button>
					<Button variant="outline" size="sm" className="size-8">
						4
					</Button>
					<Button variant="outline" size="sm" className="size-8">
						5
					</Button>
					<Button variant="outline" size="icon" className="size-8">
						<span className="sr-only">다음 페이지</span>
						<ChevronDown className="-rotate-90 size-4" />
					</Button>
				</div>
			</div>
		</div>
	);
}
