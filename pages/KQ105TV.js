import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function KQ105TV() {
  const router = useRouter();

  useEffect(() => {
    // Esto hará la redirección cuando la página se cargue.
    router.push('https://clapper.com/embed/video_id'); // Reemplaza con la URL de Clapper o la URL de tu reproductor m3u8
  }, [router]);

  return null;  // No es necesario renderizar nada en esta página, ya que solo redirigimos
}
