'use client'
import Form from '@/components/Form'
import { useAuth } from '@/contexts/auth'
import React from 'react'

const Register = () => {
  const {handleRegister} = useAuth()

  return (
    <>
      <Form
        handleRegister={handleRegister}
        linkText='Já possui uma conta? Login'
        routerLink='/'
        isRegister
      />
    </>
  )
}

export default Register
