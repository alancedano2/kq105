import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Cualquier código de inicialización de Clapper o configuración adicional va aquí.
  }, []);

  return (
    <div style={{ margin: 0, padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#000' }}>
      {/* Integración del reproductor de Clapper */}
      <iframe
        src="https://clapper.com/embed/video_id"  // Reemplaza esto con tu URL o ID del video de Clapper
        frameborder="0"
        allowfullscreen
        style={{ width: '100%', height: '100%' }}
      ></iframe>
    </div>
  );
}
