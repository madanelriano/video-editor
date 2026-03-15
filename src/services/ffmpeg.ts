import ffmpeg from 'fluent-ffmpeg';
import { FFmpegError } from '@/utils/errors';

export async function processVideo({ file, userId }: { file: File; userId: string }) {
  return new Promise((resolve, reject) => {
    const outputPath = `/tmp/${userId}-${Date.now()}.mp4`;
    ffmpeg(file.path)
      .output(outputPath)
      .on('end', () => resolve({ success: true, path: outputPath }))
      .on('error', (err) => reject(new FFmpegError(err.message)))
      .run();
  });
}