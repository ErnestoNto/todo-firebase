'use client'
import Form from '@/components/Form'
import React from 'react'

const Register = () => {
  const handleRegister = () => {
    alert('Register')
  }

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
