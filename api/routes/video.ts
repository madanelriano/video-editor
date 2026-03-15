import { NextResponse } from 'next/server';
import { processVideo } from '@/services/ffmpeg';
import { validateVideoInput } from '@/utils/validation';
import { authMiddleware } from '@/api/lib/auth';

export async function POST(request: Request) {
  try {
    const user = await authMiddleware(request as any);
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const formData = await request.formData();
    const file = formData.get('video') as File;
    const input = { file, userId: user.id };
    const validated = validateVideoInput(input);

    if (!validated.success) {
      return NextResponse.json({ error: validated.error }, { status: 400 });
    }

    const result = await processVideo(validated.data);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}