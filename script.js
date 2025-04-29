document.addEventListener('DOMContentLoaded', function() {
  // Clappr player
  new Clappr.Player({
    source: 'https://ssh101stream.ssh101.com/akamaissh101/ssh101/kq105/playlist.m3u8',
    parentId: '#player',
    autoPlay: true,
    mute: false,
    height: '100%',
    width: '100%'
  });

  // Song request form
  const form = document.getElementById('songForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const songName = document.getElementById('songName').value;
    const response = await fetch('http://localhost:3001/api/request-song', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ songName })
    });
    const msg = await response.text();
    document.getElementById('responseMsg').innerText = msg;
    form.reset();
  });
});
