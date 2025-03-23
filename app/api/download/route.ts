import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';

const execPromise = promisify(exec);

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();

    if (!url) {
      return NextResponse.json({ error: 'Invalid YouTube URL' }, { status: 400 });
    }

    const videoFile = `/tmp/video-${Date.now()}.mp4`;

    const command = `yt-dlp "${url}" -o "${videoFile}" --format "best"`;
    console.log(`Executing: ${command}`);

    const { stdout, stderr } = await execPromise(command);
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);

    if (!fs.existsSync(videoFile)) {
      throw new Error('Video file not found after download');
    }

    const videoBuffer = fs.readFileSync(videoFile);

    fs.unlinkSync(videoFile);

    const headers = new Headers({
      'Content-Type': 'video/mp4',
      'Content-Disposition': 'attachment; filename="video.mp4"',
    });

    return new NextResponse(videoBuffer, { headers });

  } catch (error: any) {
    console.error('Error:', error.message);
    return NextResponse.json({ error: error.message || 'Failed to download video' }, { status: 500 });
  }
}
