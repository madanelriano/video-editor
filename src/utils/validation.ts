import { z } from 'zod';

export const videoInputSchema = z.object({
  file: z.instanceof(File),
  userId: z.string(),
});

export function validateVideoInput(input: unknown) {
  return videoInputSchema.safeParse(input);
}