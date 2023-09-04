'use client'
import React from 'react'
import * as S from './styles'
import { useAuth } from '@/contexts/auth'

const Header = () => {
  const auth = useAuth()

  return (
    <S.Container>
      <span>{auth?.user.name}</span>

      <button onClick={auth?.logout}>Sair</button>
    </S.Container>
  )
}

export default Header
