'use client';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

export function VideoEditor() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [timeline, setTimeline] = useState([0, 100]);
  const [isProcessing, setIsProcessing] = useState(false);

  const trimVideo = () => {
    if (!videoRef.current) return;
    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => setIsProcessing(false), 2000);
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <video
        ref={videoRef}
        src="/sample.mp4"
        controls
        className="w-full rounded-lg"
      />
      <Slider
        value={timeline}
        onValueChange={setTimeline}
        max={100}
        step={1}
      />
      <Button onClick={trimVideo} disabled={isProcessing}>
        {isProcessing ? 'Processing...' : 'Trim Video'}
      </Button>
    </div>
  );
}