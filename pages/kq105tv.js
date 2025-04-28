import React from 'react';

const KQ105TV = () => {
  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
      <video
        width="100%"
        height="100%"
        controls
        autoPlay
        preload="auto"
        poster="https://path_to_your_poster_image.com/poster.jpg"  // Opcional: puedes agregar una imagen de portada si lo deseas
      >
        <source src="https://ssh101stream.ssh101.com/akamaissh101/ssh101/kq105/playlist.m3u8" type="application/x-mpegURL" />
        Tu navegador no soporta la etiqueta de video.
      </video>
    </div>
  );
}

export default KQ105TV;
