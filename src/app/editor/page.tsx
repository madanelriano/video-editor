import { VideoEditor } from '@/components/video/editor';

export default function EditorPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Video Editor</h1>
      <VideoEditor />
    </main>
  );
}