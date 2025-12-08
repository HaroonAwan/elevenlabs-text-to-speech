import { NextRequest } from 'next/server';
import { ElevenLabsClient } from '@elevenlabs/elevenlabs-js';

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();
    
    if (!prompt) {
      return new Response(
        JSON.stringify({ error: 'Prompt is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Get API key from environment variables
    const apiKey = process.env.ELEVENLABS_API_KEY;
    
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'Missing ELEVENLABS_API_KEY in environment variables' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const client = new ElevenLabsClient({ apiKey });
    
    // Generate audio using ElevenLabs
    const audioStream = await client.textToSpeech.convert("JBFqnCBsd6RMkjVDRZzb", {
      text: prompt,
      modelId: "eleven_multilingual_v2", 
      voiceSettings: {
        stability: 0.5,
        similarityBoost: 0.5
      }
    });

    // Create a TransformStream to handle the audio data
    const transformStream = new TransformStream<Uint8Array, Uint8Array>();
    const writer = transformStream.writable.getWriter();
    
    // Process the stream from ElevenLabs
    (async () => {
      try {
        // @ts-ignore - ElevenLabs stream typing issue
        for await (const chunk of audioStream) {
          await writer.write(chunk);
        }
        await writer.close();
      } catch (error) {
        await writer.abort(error as Error);
      }
    })();

    // Return the audio stream as a response
    return new Response(transformStream.readable, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
      },
    });
  } catch (error) {
    console.error('Error generating audio:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to generate audio' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}