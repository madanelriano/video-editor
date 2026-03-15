import { NextRequest } from 'next/server';
import * as jose from 'jose';

export async function authMiddleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;
  if (!token) return null;

  try {
    const { payload } = await jose.jwtVerify(
      token,
      new TextEncoder().encode(process.env.NEXTAUTH_SECRET!)
    );
    return payload;
  } catch (error) {
    return null;
  }
}