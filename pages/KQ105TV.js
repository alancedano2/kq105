import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function KQ105TV() {
  const router = useRouter();

  useEffect(() => {
    // Redirige automáticamente a Clapper o el reproductor m3u8
    router.push('https://clapper.com/embed/video_id'); // Reemplaza con tu URL del video de Clapper
  }, [router]);

  return null;  // No se renderiza nada, ya que se redirige automáticamente
}
