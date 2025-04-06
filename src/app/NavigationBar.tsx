import { Button } from "~/shared/ui/shadcn/button.tsx";
import { Link } from "@tanstack/react-router";

export const NavigationBar = () => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-white px-4 shadow-sm">
      <Link to="/" className="mr-auto">
        <h1 className="p-4 font-bold text-xl">커뮤니티</h1>
      </Link>
      {/* <div className="flex items-center gap-2"> */}
      <Link to="/login">
        <Button variant="secondary">로그인</Button>
      </Link>
      <Link to="/signup">
        <Button>회원가입</Button>
      </Link>
      {/* </div> */}
    </header>
    // <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
    //     <div className="container flex h-16 items-center justify-between">
    //       <div className="flex items-center gap-4">
    //         <Button variant="ghost" size="icon" className="md:hidden">
    //           <Menu className="size-5" />
    //         </Button>
    //         <h1 className="text-xl font-bold">커뮤니티</h1>
    //       </div>

    //       <div className="hidden md:flex items-center gap-6">
    //         <nav className="flex items-center gap-4">
    //           <Button variant="ghost" className="text-sm font-medium">
    //             홈
    //           </Button>
    //           <Button variant="ghost" className="text-sm font-medium">
    //             인기글
    //           </Button>
    //           <Button variant="ghost" className="text-sm font-medium">
    //             최신글
    //           </Button>
    //           <Button variant="ghost" className="text-sm font-medium">
    //             태그
    //           </Button>
    //         </nav>
    //       </div>

    //       <div className="flex items-center gap-4">
    //         <Button variant="ghost" size="icon" className="relative">
    //           <Bell className="size-5" />
    //           <span className="absolute top-1 right-1 size-2 rounded-full bg-primary"></span>
    //         </Button>
    //         <Avatar className="size-8">
    //           <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
    //           <AvatarFallback>사용자</AvatarFallback>
    //         </Avatar>
    //       </div>
    //     </div>
    //   </header>
  );
};
