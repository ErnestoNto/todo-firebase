"use client";
import React from "react";
import * as S from "./styles";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/contexts/auth";

type FormProps = {
  isRegister?: boolean;
  handleRegister: (data: any) => void;
  linkText: string;
  routerLink: string;
};

const schema = z.object({
  name: z.string().refine(fafas => {
    if (typeof fafas === 'string') {
      return fafas.split(" ").length > 1;
    }
    return false;
  }, 'Coloque seu nome completo').optional(),
  email: z.string().email("Digite um email válido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

const Form = ({
  isRegister,
  handleRegister,
  linkText,
  routerLink,
}: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const auth = useAuth();

  return (
    <S.Container>
      <h2>Todo-Firebase</h2>
      <S.Form onSubmit={handleSubmit(handleRegister)}>
        {isRegister && (
          <>
            <input
              className={errors.name?.message && "input_error"}
              type="text"
              placeholder="Digite o seu nome"
              {...register("name")}
            />

            <span className="error_message">
              {errors.name && errors.name?.message?.toString()}
            </span>
          </>
        )}
        <input
          className={errors.email?.message && "input_error"}
          type="email"
          placeholder="Digite seu email"
          {...register("email")}
        />

        <span className="error_message">
          {errors.email && errors.email?.message?.toString()}
        </span>

        <input
          className={errors.password?.message && "input_error"}
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />

        <span className="error_message">
          {errors.password && errors.password?.message?.toString()}
        </span>

        <button type="submit">{auth?.loading ? "Carregando" : "Acessar"}</button>

        <Link href={routerLink}>{linkText}</Link>
      </S.Form>
    </S.Container>
  );
};

export default Form;
