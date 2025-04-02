import { Avatar, AvatarFallback } from '~/shared/ui/shadcn/avatar';
import { Badge } from '~/shared/ui/shadcn/badge';
import { Button } from '~/shared/ui/shadcn/button';
import { Card, CardContent, CardFooter } from '~/shared/ui/shadcn/card';
import { BookmarkIcon, Eye, Heart, MessageSquare } from 'lucide-react';

export const BoardCard = ({ post }) => {
	return (
		<Card
			key={post.id}
			className="gap-0 overflow-hidden transition-all hover:shadow-md"
		>
			<CardContent className="flex items-start gap-4 p-4">
				<div className="hidden shrink-0 sm:block">
					<img
						src={post.thumbnail || '/placeholder.svg'}
						alt=""
						className="size-20 rounded-md object-cover"
					/>
				</div>
				<div className="flex flex-grow flex-col gap-1">
					<div className="flex flex-wrap items-center gap-2">
						<Badge variant="outline">{post.categoryName}</Badge>
						{post.isPinned && <Badge variant="secondary">공지</Badge>}
						{post.isNew && (
							<Badge className="bg-blue-500 hover:bg-blue-600">NEW</Badge>
						)}
						{post.isHot && (
							<Badge className="bg-red-500 hover:bg-red-600">HOT</Badge>
						)}
					</div>
					<h3 className="cursor-pointer font-medium text-sm hover:text-primary sm:text-lg">
						{post.title}
					</h3>
					<div className="flex-1 space-y-2">
						<div className="flex items-center gap-4 text-muted-foreground text-sm">
							<div className="flex items-center gap-1">
								<Avatar className="size-5">
									<AvatarFallback className="text-[10px]">
										{post.author.slice(0, 2)}
									</AvatarFallback>
								</Avatar>
								<span>{post.author}</span>
							</div>
							<span>{post.date}</span>
						</div>
					</div>
				</div>
			</CardContent>

			<CardFooter className="flex justify-between border-t bg-muted/30 px-4 py-2">
				<div className="flex items-center gap-4 text-muted-foreground text-sm">
					<div className="flex items-center gap-1">
						<Eye className="size-4" />
						<span>{post.views}</span>
					</div>
					<div className="flex items-center gap-1">
						<Heart className="size-4" />
						<span>{post.likes}</span>
					</div>
					<div className="flex items-center gap-1">
						<MessageSquare className="size-4" />
						<span>{post.comments}</span>
					</div>
				</div>
				<Button variant="ghost" size="icon" className="size-8">
					<BookmarkIcon className="size-4" />
				</Button>
			</CardFooter>
		</Card>
	);
};
