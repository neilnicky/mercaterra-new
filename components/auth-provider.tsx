"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

type UserRole = "farmer" | "buyer"

interface User {
  id: string
  name: string
  email: string
  role: UserRole
  region?: string
  phone?: string
  photo?: string
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
  const router = useRouter()

  // Check if user is logged in on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("mercaterra-user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  // Mock login function
  const login = async (email: string, password: string) => {
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock user data based on email
      const mockUser: User = {
        id: "user-" + Math.random().toString(36).substr(2, 9),
        name: email.split("@")[0],
        email,
        role: email.includes("farmer") ? "farmer" : "buyer",
      }

      setUser(mockUser)
      localStorage.setItem("mercaterra-user", JSON.stringify(mockUser))
      router.push("/dashboard")
    } catch (error) {
      console.error("Login failed:", error)
      throw new Error("Invalid credentials")
    } finally {
      setIsLoading(false)
    }
  }

  // Mock register function
  const register = async (userData: Partial<User> & { password: string }) => {
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Create mock user
      const mockUser: User = {
        id: "user-" + Math.random().toString(36).substr(2, 9),
        name: userData.name || "",
        email: userData.email || "",
        role: userData.role || "buyer",
        region: userData.region,
        phone: userData.phone,
        photo: userData.photo,
      }

      setUser(mockUser)
      localStorage.setItem("mercaterra-user", JSON.stringify(mockUser))
      router.push("/dashboard")
    } catch (error) {
      console.error("Registration failed:", error)
      throw new Error("Registration failed")
    } finally {
      setIsLoading(false)
    }
  }

  // Logout function
  const logout = () => {
    setUser(null)
    localStorage.removeItem("mercaterra-user")
    router.push("/")
  }

  return <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
