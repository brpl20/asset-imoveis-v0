import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  
  if (secret !== process.env.MY_REVALIDATION_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
  }

  try {
    await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate-tag?tag=properties`),
      fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate-tag?tag=property`),
    ]);
    
    return NextResponse.json({ revalidated: true })
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 })
  }
}