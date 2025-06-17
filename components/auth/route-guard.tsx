"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useAuth } from "@/lib/providers/auth-provider"
import { Skeleton } from "@/components/ui/skeleton"

interface RouteGuardProps {
  children: React.ReactNode
  requireAuth?: boolean
  allowedRoles?: Array<"farmer" | "buyer">
}

export function RouteGuard({ children, requireAuth = false, allowedRoles }: RouteGuardProps) {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (isLoading) return

    // If auth is required but user is not logged in
    if (requireAuth && !user) {
      router.push(`/auth/login?redirectTo=${encodeURIComponent(pathname)}`)
      return
    }

    // If user is logged in but trying to access auth pages
    if (user && (pathname === "/auth/login" || pathname === "/auth/register")) {
      router.push("/dashboard")
      return
    }

    // If specific roles are required
    if (requireAuth && user && allowedRoles && !allowedRoles.includes(user.role)) {
      router.push("/dashboard") // Redirect to dashboard if role not allowed
      return
    }
  }, [user, isLoading, requireAuth, allowedRoles, router, pathname])

  // Show loading state while checking auth
  if (isLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="space-y-4">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>
    )
  }

  // If auth is required but user is not logged in, don't render children
  if (requireAuth && !user) {
    return null
  }

  // If role is required but user doesn't have it, don't render children
  if (requireAuth && user && allowedRoles && !allowedRoles.includes(user.role)) {
    return null
  }

  return <>{children}</>
}
