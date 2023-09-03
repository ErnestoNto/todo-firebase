'use client'
import Form from '@/components/Form'
import { useAuth } from '@/contexts/auth'
import React from 'react'

const Home = () => {

  const {handleLogin} = useAuth()

  return (
    <>
      <Form
        handleRegister={handleLogin}
        routerLink='/register'
        linkText='Não possui uma conta? Cadastre-se'
      />
    </>
  )
}

export default Home
