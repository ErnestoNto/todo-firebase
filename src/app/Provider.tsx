import AuthProvider from '@/contexts/auth'
import React from 'react'

const Provider = ({children}: {children: React.ReactNode}) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default Provider
