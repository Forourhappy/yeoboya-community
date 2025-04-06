import { POST } from "~/shared/api/client";
import type { SignupReq, SignupRes } from "../model/types";

export const signup = async (data: SignupReq) => {
  const res = await POST<SignupRes, SignupReq>("/user/sign-up", data);

  return res;
};
