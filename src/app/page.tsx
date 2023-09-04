'use client'
import Form from '@/components/Form'
import { useAuth } from '@/contexts/auth'
import React from 'react'

const Home = () => {

  const auth = useAuth()

  return (
    <>
      <Form
        // @ts-ignore
        handleRegister={auth?.handleLogin}
        routerLink='/register'
        linkText='Não possui uma conta? Cadastre-se'
      />
    </>
  )
}

export default Home
