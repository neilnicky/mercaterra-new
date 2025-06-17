"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type UserRole = "farmer" | "buyer"

interface User {
  id: string
  name: string
  email: string
  role: UserRole
  region?: string
  phone?: string
  photo?: string
  createdAt: Date
  updatedAt: Date
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  register: (userData: Partial<User> & { password: string }) => Promise<void>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing session on mount
    const savedUser = localStorage.getItem("mercaterra-user")
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser)
        // Convert date strings back to Date objects
        parsedUser.createdAt = new Date(parsedUser.createdAt)
        parsedUser.updatedAt = new Date(parsedUser.updatedAt)
        setUser(parsedUser)
      } catch (error) {
        console.error("Error parsing saved user:", error)
        localStorage.removeItem("mercaterra-user")
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Mock authentication - in real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const mockUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        name: email.split("@")[0],
        email,
        role: email.includes("farmer") ? "farmer" : "buyer",
        phone: "",
        region: "",
        photo: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      setUser(mockUser)
      localStorage.setItem("mercaterra-user", JSON.stringify(mockUser))
    } catch (error) {
      throw new Error("Login failed")
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (userData: Partial<User> & { password: string }) => {
    setIsLoading(true)
    try {
      // Mock registration - in real app, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const mockUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        name: userData.name || "",
        email: userData.email || "",
        role: userData.role || "buyer",
        region: userData.region || "",
        phone: userData.phone || "",
        photo: userData.photo || "",
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      setUser(mockUser)
      localStorage.setItem("mercaterra-user", JSON.stringify(mockUser))
    } catch (error) {
      throw new Error("Registration failed")
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("mercaterra-user")
  }

  return <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
