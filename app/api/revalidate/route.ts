import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { revalidateTag } from 'next/cache';


export async function POST(request: NextRequest | Request) {
  let secret: string | null = null;

  if ('nextUrl' in request) {
    secret = request.nextUrl.searchParams.get('secret');
    if (secret !== process.env.MY_REVALIDATION_SECRET) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    try {
      await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate-tag?tag=properties`),
        fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate-tag?tag=property`),
      ]);
      return NextResponse.json({ revalidated: true });
    } catch (err) {
      return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
    }
  } else {
    // Fallback for generic Request (headers)
    secret = (request as Request).headers.get('x-secret-key');
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    try {
      revalidateTag('featured-properties');
      return NextResponse.json({ revalidated: true, now: Date.now() });
    } catch (err) {
      return NextResponse.json(
        { message: 'Error revalidating', error: err instanceof Error ? err.message : 'Unknown error' },
        { status: 500 }
      );
    }
  }
}