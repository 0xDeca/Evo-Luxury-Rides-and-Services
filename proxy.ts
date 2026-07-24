import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/_next/') || pathname.startsWith('/api/')) {
    return NextResponse.next()
  }

  if (hostname.startsWith('admin.') && !pathname.startsWith('/admin')) {
    return NextResponse.rewrite(new URL(`/admin${pathname === '/' ? '' : pathname}${request.nextUrl.search}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|favicon.ico).*)'],
}