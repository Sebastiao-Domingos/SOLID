import { UserSession } from "@/services/Session";
import { LoginPorps } from "@/types/login";
import { useForm } from "react-hook-form";

function useLogin() {
  const { register, handleSubmit } = useForm<LoginPorps>();

  const handleLogin = (data: LoginPorps) => {
    new UserSession().login(data);
  };
  const handle = handleSubmit(handleLogin);
  return {
    register,
    handle,
  };
}

export { useLogin };
