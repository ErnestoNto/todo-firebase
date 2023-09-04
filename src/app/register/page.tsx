'use client'
import Form from '@/components/Form'
import { useAuth } from '@/contexts/auth'
import React from 'react'

const Register = () => {
  const auth = useAuth()

  return (
    <>
      <Form
        // @ts-ignore
        handleRegister={auth && auth.handleRegister}
        linkText='Já possui uma conta? Login'
        routerLink='/'
        isRegister
      />
    </>
  )
}

export default Register
