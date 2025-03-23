'use client';

import Hyperspeed from '@/components/Backgrounds/Hyperspeed/Hyperspeed';
import { HyperText } from '@/components/magicui/hyper-text';
import { ShinyButton } from '@/components/magicui/shiny-button';
import GradientText from '@/components/TextAnimations/GradientText/GradientText';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function YouTubeDownloader() {
  const [url, setUrl] = useState<string>('');
  const [downloading, setDownloading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    if (!url) {
      setError('Please enter a valid YouTube URL.');
      return;
    }

    setDownloading(true);
    setError(null);

    try {
      const response = await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to download the video');
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'video.mp4';
      link.click();
      window.URL.revokeObjectURL(downloadUrl);

    } catch (error: any) {
      console.error('Download failed:', error.message);
      setError(error.message);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <>
      <Hyperspeed
      effectOptions={{
      onSpeedUp: () => { },
      onSlowDown: () => { },
      distortion: 'turbulentDistortion',
      length: 400,
      roadWidth: 10,
      islandWidth: 2,
      lanesPerRoad: 4,
      fov: 90,
      fovSpeedUp: 150,
      speedUp: 2,
      carLightsFade: 0.4,
      totalSideLightSticks: 20,
      lightPairsPerRoadWay: 40,
      shoulderLinesWidthPercentage: 0.05,
      brokenLinesWidthPercentage: 0.1,
      brokenLinesLengthPercentage: 0.5,
      lightStickWidth: [0.12, 0.5],
      lightStickHeight: [1.3, 1.7],
      movingAwaySpeed: [60, 80],
      movingCloserSpeed: [-120, -160],
      carLightsLength: [400 * 0.03, 400 * 0.2],
      carLightsRadius: [0.05, 0.14],
      carWidthPercentage: [0.3, 0.5],
      carShiftX: [-0.8, 0.8],
      carFloorSeparation: [0, 5],
      colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0xFFFFFF,
      brokenLines: 0xFFFFFF,
      leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
      rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
      sticks: 0x03B3C3,
      }
      }}
     />
      <div className='p-4'>
      <HyperText>Preacher</HyperText>
      </div>
      <div>
      <div className='flex justify-center pt-[150px]'><GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class"
>
  Youtube Video Downloader
</GradientText>
      </div>

      <div className='flex justify-center mt-[50px]'><Input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter YouTube URL"
        className="border p-2 w-80 mb-4 relative z-10"
      />
     </div>
<div className='flex justify-center mt-1]'><ShinyButton
        onClick={handleDownload}
        disabled={downloading}
        className='relative z-20'
      >
        {downloading ? 'Downloading...' : 'Download'}
      </ShinyButton>

      <div className='flex mt-10 justify-center'>{error && <p className="text-red-500 mt-4">{error}</p>}</div>
      </div>
      </div>
    </>
  );
}
