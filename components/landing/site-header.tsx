"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/providers/auth-provider"
import { Skeleton } from "@/components/ui/skeleton"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Leaf } from "lucide-react"

export function SiteHeader() {
  const { user, logout, isLoading } = useAuth()
  const pathname = usePathname()

  if (isLoading) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-green-600" />
              <span className="font-bold text-xl">MercaTerra</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="flex items-center space-x-2">
              <Skeleton className="h-9 w-16" />
              <Skeleton className="h-9 w-16" />
            </div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="font-bold text-xl">MercaTerra</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/market"
              className={cn(
                "flex items-center text-sm font-medium transition-colors hover:text-primary",
                pathname === "/market" ? "text-foreground" : "text-foreground/60",
              )}
            >
              Market
            </Link>
            <Link
              href="/about"
              className={cn(
                "flex items-center text-sm font-medium transition-colors hover:text-primary",
                pathname === "/about" ? "text-foreground" : "text-foreground/60",
              )}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={cn(
                "flex items-center text-sm font-medium transition-colors hover:text-primary",
                pathname === "/contact" ? "text-foreground" : "text-foreground/60",
              )}
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            {user ? (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
                <Button variant="outline" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/auth/login">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link href="/auth/register">Sign Up</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
