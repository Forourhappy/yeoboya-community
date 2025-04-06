import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useSignup } from "~/features/auth/signup/model/useSignup";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/shared/ui/Form";
import { Button } from "~/shared/ui/shadcn/button";
import { Input } from "~/shared/ui/shadcn/input";

const formSchema = z
  .object({
    loginId: z.string().nonempty("아이디를 입력해주세요."),
    email: z.string().email("이메일 형식이 아닙니다."),
    name: z
      .string()
      .max(20, {
        message: "이름은 20자 이하로 입력해주세요.",
      })
      .nonempty("이름을 입력해주세요."),
    password: z
      .string()
      .min(8, {
        message: "비밀번호는 8자 이상으로 입력해주세요.",
      })
      .max(16, {
        message: "비밀번호는 16자 이하로 입력해주세요.",
      })
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^\w\s]).{8,}$/,
        "비밀번호는 영문/숫자/특수문자 포함해야 합니다"
      ),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["passwordConfirm"],
  });

type FormSchema = z.infer<typeof formSchema>;

export const SignupPage = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      loginId: "",
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });
  const { mutate } = useSignup();

  const handleSubmit: SubmitHandler<FormSchema> = async (data) => {
    mutate(data);
  };

  return (
    <div className="flex w-sm flex-col gap-8">
      <h2 className="self-center font-extrabold text-2xl">회원가입</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="loginId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>아이디</FormLabel>
                <FormControl>
                  <Input placeholder="아이디를를 입력해주세요." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이메일</FormLabel>
                <FormControl>
                  <Input placeholder="이메일을 입력해주세요." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이름</FormLabel>
                <FormControl>
                  <Input placeholder="이름을 입력해주세요." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>비밀번호</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="비밀번호를 입력해주세요."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>비밀번호 확인</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="비밀번호를 확인해주세요."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">회원가입</Button>
        </form>
      </Form>
    </div>
  );
};
