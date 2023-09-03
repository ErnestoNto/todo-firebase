"use client";
import React from "react";
import * as S from "./styles";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormProps = {
  isRegister?: boolean;
  handleRegister?: () => void;
  linkText: string;
  routerLink: string;
};

const schema = z.object({
  name: z
    .string()
    .refine(
      (fafas) => fafas.split(" ").length > 1,
      "Coloque seu nome completo"
    ),
  email: z.string().email("Digite um email válido"),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
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
              {errors.name && errors.name?.message}
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
          {errors.email && errors.email?.message}
        </span>

        <input
          className={errors.password?.message && "input_error"}
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />

        <span className="error_message">
          {errors.password && errors.password?.message}
        </span>

        <button type="submit">Acessar</button>

        <Link href={routerLink}>{linkText}</Link>
      </S.Form>
    </S.Container>
  );
};

export default Form;