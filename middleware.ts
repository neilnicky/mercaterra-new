import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Define public paths that don't require authentication
  const isPublicPath =
    path === "/" ||
    path === "/auth/login" ||
    path === "/auth/register" ||
    path === "/market" ||
    path.startsWith("/api/") ||
    path.startsWith("/_next/") ||
    path.startsWith("/favicon")

  // For now, we'll skip middleware auth checks since we're using localStorage
  // In a production app, you'd want to use httpOnly cookies and server-side session management

  // If the user is trying to access auth pages and might be logged in,
  // we'll let the client-side handle the redirect
  return NextResponse.next()
}

// Configure the paths that should be checked by the middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|public/).*)",
  ],
}
