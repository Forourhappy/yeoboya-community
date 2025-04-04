import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/shared/ui/shadcn/form.tsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "~/shared/ui/shadcn/input";
import { z } from "zod";

const formSchema = z.object({
  username: z
    .string()
    .max(10, {
      message: "이름은 10자 이하로 입력해주세요.",
    })
    .nonempty("이름을 입력해주세요."),
});

export const SignupPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  console.log(form);
  return (
    <div>
      <h2>회원가입</h2>
      <Form {...form}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이름</FormLabel>
              <FormControl>
                <Input placeholder="asdf" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </Form>
    </div>
  );
};
