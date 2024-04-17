"use client";

import { useLogin } from "@/hooks/useLogin";

export default function Login() {
  const { handle, register } = useLogin();
  return (
    <div className="m-auto w-[400px] mt-16 space-y-8">
      <h1 className="text-2xl font-bold text-purple-600">Login</h1>

      <form action="" className="flex flex-col gap-4" onSubmit={handle}>
        <input
          type="text"
          id=""
          placeholder="login dados"
          className="p-2 rounded border"
          {...register("email")}
        />
        <input
          type="password"
          {...register("senha")}
          id=""
          placeholder="login dados"
          className="p-2 rounded border"
        />
        <button className="p-2 bg-purple-600 rounded text-white font-bold active:bg-purple-500">
          Entrar
        </button>
      </form>
    </div>
  );
}
