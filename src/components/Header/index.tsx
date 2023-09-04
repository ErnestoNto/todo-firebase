'use client'
import React from 'react'
import * as S from './styles'
import { useAuth } from '@/contexts/auth'

const Header = () => {
  const {user, logout} = useAuth()

  return (
    <S.Container>
      <span>{user.name}</span>

      <button onClick={logout}>Sair</button>
    </S.Container>
  )
}

export default Header
