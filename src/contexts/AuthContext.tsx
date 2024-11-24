"use client"

import React, { createContext, useState, useContext, ReactNode } from 'react'

interface User {
  id: string
  username: string
  email: string
  bio: string
  chessStats: {
    rating: number
    gamesPlayed: number
    winRate: number
    averageGameTime: number
    memberSince: string
  }
}

interface AuthContextType {
  user: User | null
  login: (username: string, password: string) => Promise<void>
  register: (username: string, password: string) => Promise<void>
  logout: () => void
  updateProfile: (updates: Partial<User>) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  const login = async (username: string, password: string) => {
    // In a real app, you would validate credentials against a backend
    if (username) {
      setUser({
        id: '1',
        username,
        email: 'user@example.com',
        bio: 'Chess enthusiast and coffee lover',
        chessStats: {
          rating: 1200,
          gamesPlayed: 50,
          winRate: 60,
          averageGameTime: 15,
          memberSince: '2023-01-01'
        }
      })
    } else {
      throw new Error('Invalid credentials')
    }
  }

  const register = async (username: string, password: string) => {
    // In a real app, you would send this data to a backend to create a new user
    if (username) {
      setUser({
        id: '1',
        username,
        email: 'user@example.com',
        bio: 'New chess player',
        chessStats: {
          rating: 1000,
          gamesPlayed: 0,
          winRate: 0,
          averageGameTime: 0,
          memberSince: new Date().toISOString().split('T')[0]
        }
      })
    } else {
      throw new Error('Invalid username')
    }
  }

  const logout = () => {
    setUser(null)
  }

  const updateProfile = async (updates: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...updates })
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

