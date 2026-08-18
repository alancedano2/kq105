LISTAS MUSIC - INSTRUCCIONES

1. Coloca tu logo en:
   logo.png

2. Lista 1:
   listas/lista1.txt

3. Lista 2:
   listas/lista2.txt

Cada línea del TXT representa una canción, por ejemplo:

SANTOS BRAVOS - MHM
Gilberto Santa Rosa - Cartas Sobre La Mesa
Lady Gaga, Doechii - Runway (Clean Version)

4. Para reproducir archivos locales, coloca los MP3 en:

musica/lista1/01.mp3
musica/lista1/02.mp3
musica/lista1/03.mp3

El archivo 01.mp3 corresponde a la primera línea del TXT, 02.mp3 a la segunda, etc.

Para Lista 2 usa musica/lista2/01.mp3, etc.

IMPORTANTE:
El navegador normalmente no permite fetch() de archivos TXT si abres index.html directamente con doble clic.
Para probarlo localmente usa un servidor web, por ejemplo:

Python:
python -m http.server 8000

Luego abre:
http://localhost:8000/

También funciona al subir el proyecto a Vercel.

NOTA:
El sistema actual reproduce archivos MP3 locales. Si quieres usar un stream HLS/M3U8 en vez de MP3, hay que cambiar la lógica del reproductor.
