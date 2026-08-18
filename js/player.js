(() => {
  const script = document.currentScript;
  const listName = script.dataset.list || "lista1";
  const audio = document.getElementById("audio");
  const queue = document.getElementById("queue");
  const title = document.getElementById("now-title");
  const count = document.getElementById("count");
  const status = document.getElementById("track-status");
  const prev = document.getElementById("prevBtn");
  const next = document.getElementById("nextBtn");

  let tracks = [];
  let current = 0;

  async function loadList() {
    try {
      const response = await fetch(`listas/${listName}.txt`, { cache: "no-store" });
      if (!response.ok) throw new Error("No se pudo cargar el TXT");
      const text = await response.text();

      tracks = text.split(/\r?\n/)
        .map(line => line.trim())
        .filter(Boolean);

      count.textContent = tracks.length;
      renderQueue();

      if (tracks.length) {
        loadTrack(0, false);
      } else {
        title.textContent = "La lista está vacía";
        status.textContent = listName.toUpperCase();
      }
    } catch (error) {
      console.error(error);
      title.textContent = "No se pudo cargar la lista";
      queue.innerHTML = `<div class="empty">Abre el sitio mediante un servidor web para que el navegador pueda leer el archivo TXT.</div>`;
    }
  }

  function renderQueue() {
    queue.innerHTML = "";
    tracks.forEach((track, index) => {
      const item = document.createElement("button");
      item.className = "track" + (index === current ? " active" : "");
      item.type = "button";
      item.innerHTML = `
        <span class="track-number">${String(index + 1).padStart(2, "0")}</span>
        <span class="track-name">${escapeHTML(track)}</span>
        <span class="track-play">${index === current ? "●" : "›"}</span>
      `;
      item.addEventListener("click", () => loadTrack(index, true));
      queue.appendChild(item);
    });
  }

  function loadTrack(index, autoplay = false) {
    if (!tracks.length) return;
    current = (index + tracks.length) % tracks.length;

    // Convención: 01.mp3, 02.mp3, 03.mp3...
    const fileNumber = String(current + 1).padStart(2, "0");
    audio.src = `musica/${listName}/${fileNumber}.mp3`;
    title.textContent = tracks[current];
    status.textContent = `LISTA ${listName.replace("lista", "")} · ${String(current + 1).padStart(2, "0")} / ${String(tracks.length).padStart(2, "0")}`;

    renderQueue();

    if (autoplay) {
      audio.play().catch(() => {});
    }
  }

  audio.addEventListener("ended", () => {
    loadTrack(current + 1, true);
  });

  prev.addEventListener("click", () => loadTrack(current - 1, true));
  next.addEventListener("click", () => loadTrack(current + 1, true));

  function escapeHTML(value) {
    const div = document.createElement("div");
    div.textContent = value;
    return div.innerHTML;
  }

  loadList();
})();