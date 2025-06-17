"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, ShoppingBasket, Package, MessageSquare, FileText, Settings, User } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/providers/auth-provider"

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
  roles?: Array<"farmer" | "buyer">
}

export function DashboardNav() {
  const pathname = usePathname()
  const { user } = useAuth()

  const navItems: NavItem[] = [
    {
      title: "Overview",
      href: "/dashboard",
      icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
    },
    {
      title: "Marketplace",
      href: "/dashboard/market",
      icon: <ShoppingBasket className="mr-2 h-4 w-4" />,
    },
    {
      title: "My Products",
      href: "/dashboard/products",
      icon: <Package className="mr-2 h-4 w-4" />,
      roles: ["farmer"],
    },
    {
      title: "Orders",
      href: "/dashboard/orders",
      icon: <FileText className="mr-2 h-4 w-4" />,
    },
    {
      title: "Messages",
      href: "/dashboard/messages",
      icon: <MessageSquare className="mr-2 h-4 w-4" />,
    },
    {
      title: "Profile",
      href: "/dashboard/profile",
      icon: <User className="mr-2 h-4 w-4" />,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
    },
  ]

  // Filter nav items based on user role
  const filteredNavItems = navItems.filter(
    (item) => !item.roles || item.roles.includes(user?.role as "farmer" | "buyer"),
  )

  return (
    <nav className="grid items-start gap-2 px-2 py-4">
      {filteredNavItems.map((item) => (
        <Button
          key={item.href}
          variant={pathname === item.href ? "secondary" : "ghost"}
          className={cn("justify-start", pathname === item.href && "bg-muted font-medium")}
          asChild
        >
          <Link href={item.href}>
            {item.icon}
            {item.title}
          </Link>
        </Button>
      ))}
    </nav>
  )
}
