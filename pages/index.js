
import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const m3u8Url = 'https://ssh101stream.ssh101.com/akamaissh101/ssh101/kq105/playlist.m3u8';
    const videoElement = document.getElementById('video-player');
    videoElement.src = m3u8Url;
  }, []);

  return (
    <div style={{ margin: 0, padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#000' }}>
      <video id="video-player" controls autoPlay style={{ width: '100%', height: 'auto' }}>
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
