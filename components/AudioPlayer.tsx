'use client';

import React, { useState, useEffect } from 'react';

interface AudioPlayerProps {
  audioUrl: string | null;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure this component only renders on the client side
    setIsClient(true);
  }, []);

  // Don't render on the server to prevent hydration mismatch
  if (!isClient || !audioUrl) {
    return null;
  }

  return (
    <div className="mt-6 w-full max-w-2xl">
      <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4 shadow-inner">
        <audio 
          src={audioUrl}
          controls 
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
};