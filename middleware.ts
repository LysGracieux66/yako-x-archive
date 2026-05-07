import { NextResponse, type NextRequest } from 'next/server';
export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  res.headers.set('X-Robots-Tag', req.nextUrl.pathname.startsWith('/api/') ? 'noindex' : 'index, follow');
  return res;
}
export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] };
