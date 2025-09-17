// Lista de pistas (ejemplo)
// Si agregas 'cover' en cada objeto, se mostrará la portada: { cover: 'media/covers/01.jpg' }
const TRACKS = [
  { src: 'media/01.mp3', title: 'Beso de desayuno',  artist: 'Calle 13', cover: 'media/covers/01.jpg' },
  { src: 'media/02.mp3', title: 'Cien años',         artist: 'Pedro Infante', cover: 'media/covers/02.jpg' },
  { src: 'media/03.mp3', title: 'Cowboys Don’t Cry', artist: 'Oliver Tree', cover: 'media/covers/03.jpg' },
  { src: 'media/04.mp3', title: 'Dueles tan bien',   artist: 'Bruses', cover: 'media/covers/04.jpg' },
  { src: 'media/05.mp3', title: 'Lo que hay x aquí', artist: 'Rels B', cover: 'media/covers/05.jpg' },
  { src: 'media/06.mp3', title: 'Cure For Me',       artist: 'Aurora', cover: 'media/covers/06.jpg' },
  { src: 'media/07.m4a', title: 'SOS',               artist: 'Avicii', cover: 'media/covers/07.jpg' },
  { src: 'media/08.mp3', title: 'Hot girl bummer',   artist: 'Blackbear', cover: 'media/covers/08.jpg' },
  { src: 'media/09.m4a', title: 'Calm Down',         artist: 'Krewella', cover: 'media/covers/09.jpg' },
  { src: 'media/10.mp3', title: 'Labios rotos',      artist: 'Zoé', cover: 'media/covers/10.jpg' },
  { src: 'media/11.mp3', title: 'Lonely Day',        artist: 'System Of A Down', cover: 'media/covers/11.jpg' }


];

// Estado del reproductor
const state = { playlist: TRACKS.map(t => ({...t})), index: -1, shuffle: false, repeat: 'off' };

// Elementos
const audio = document.getElementById('audio');
const listEl = document.getElementById('list');
const emptyEl = document.getElementById('empty');
const titleEl = document.getElementById('title');
const artistEl = document.getElementById('artist');
const coverEl = document.getElementById('cover');
const curEl = document.getElementById('cur');
const durEl = document.getElementById('dur');
const progressEl = document.getElementById('progress');
const barEl = progressEl.querySelector('.bar');

const playBtn = document.getElementById('play');
const iconPlay = document.getElementById('iconPlay');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const shuffleBtn = document.getElementById('shuffle');
const repeatBtn = document.getElementById('repeat');
const muteBtn = document.getElementById('mute');
const iconVol = document.getElementById('iconVol');
const volume = document.getElementById('volume');

// Utilidades
const fmt = (s) => { if (!isFinite(s)) return '0:00'; const m = Math.floor(s / 60), r = Math.floor(s % 60); return `${m}:${r.toString().padStart(2,'0')}`; };

function renderList() {
  listEl.innerHTML = '';
  emptyEl.style.display = state.playlist.length ? 'none' : 'block';
  state.playlist.forEach((t, i) => {
    const li = document.createElement('li');
    li.className = 'track' + (i === state.index ? ' active' : '');
    li.setAttribute('role','option');
    li.setAttribute('aria-selected', i === state.index ? 'true' : 'false');
    li.innerHTML = `<div><div style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${t.title}</div><small>${t.artist || ''}</small></div><small>${i+1}</small>`;
    li.onclick = () => playAt(i);
    listEl.appendChild(li);
  });
}

function loadTrack(i) {
  if (i < 0 || i >= state.playlist.length) return;
  state.index = i;
  const track = state.playlist[i];
  audio.src = track.src;
  titleEl.textContent = track.title || '—';
  artistEl.textContent = track.artist || '—';
  document.title = `▶ ${track.title} — Canción que escucho cuando pienso en ti`;
  if (track.cover) { coverEl.src = track.cover; coverEl.alt = `Portada de ${track.title}`; coverEl.style.visibility = 'visible'; }
  else { coverEl.removeAttribute('src'); coverEl.alt=''; coverEl.style.visibility='hidden'; }
  renderList();
}

async function playAt(i) { if (i !== state.index) loadTrack(i); try { await audio.play(); } catch (e) {} updatePlayIcon(); }

function updatePlayIcon() {
  const playing = !audio.paused;
  playBtn.setAttribute('aria-pressed', playing ? 'true' : 'false');
  iconPlay.className = playing ? 'bi bi-pause-fill' : 'bi bi-play-fill';
}

function updateVolumeIcon() {
  iconVol.className = (audio.muted || audio.volume === 0)
    ? 'bi bi-volume-mute-fill'
    : 'bi bi-volume-up-fill';
}

// ——— helpers de UI para shuffle / repeat ———
function updateShuffleUI() {
  shuffleBtn.setAttribute('aria-pressed', state.shuffle ? 'true' : 'false');
}
function updateRepeatUI() {
  const mode = state.repeat; // 'off' | 'all' | 'one'
  repeatBtn.dataset.mode = mode;
  repeatBtn.setAttribute('aria-pressed', mode !== 'off' ? 'true' : 'false');
  repeatBtn.title =
    mode === 'off' ? 'Repetir: apagado'
    : mode === 'all' ? 'Repetir: todo'
    : 'Repetir: una pista';
  const i = repeatBtn.querySelector('i');
  i.className = (mode === 'one') ? 'bi bi-repeat-1' : 'bi bi-arrow-repeat';
}

function nextIndex() {
  if (state.shuffle && state.playlist.length > 1) {
    let j; do { j = Math.floor(Math.random() * state.playlist.length); } while (j === state.index);
    return j;
  }
  const last = state.playlist.length - 1;
  if (state.index < last) return state.index + 1;
  return state.repeat === 'all' ? 0 : state.index;
}
function prevIndex() {
  if (state.shuffle && state.playlist.length > 1) {
    let j; do { j = Math.floor(Math.random() * state.playlist.length); } while (j === state.index);
    return j;
  }
  if (state.index > 0) return state.index - 1;
  return state.repeat === 'all' ? (state.playlist.length - 1) : state.index;
}

// Controles
playBtn.addEventListener('click', async () => {
  if (!audio.src) return;
  if (audio.paused) { try { await audio.play(); } catch {} }
  else audio.pause();
  updatePlayIcon();
});
prevBtn.addEventListener('click', () => { if (!state.playlist.length) return; playAt(prevIndex()); });
nextBtn.addEventListener('click', () => { if (!state.playlist.length) return; playAt(nextIndex()); });
shuffleBtn.addEventListener('click', () => {
  state.shuffle = !state.shuffle;
  updateShuffleUI();
});
repeatBtn.addEventListener('click', () => {
  state.repeat = state.repeat === 'off' ? 'all'
              : state.repeat === 'all' ? 'one'
              : 'off';
  audio.loop = (state.repeat === 'one');
  updateRepeatUI();
});
muteBtn.addEventListener('click', () => {
  audio.muted = !audio.muted;
  updateVolumeIcon();
});

// ——— Volumen por slider: subir > 0 desmutea automáticamente ———
volume.addEventListener('input', () => {
  audio.volume = parseFloat(volume.value);
  if (audio.volume > 0 && audio.muted) audio.muted = false; // ← clave
  if (audio.volume === 0) audio.muted = true;
  updateVolumeIcon();
  localStorage.setItem('vol', audio.volume);
});

// Barra de progreso y teclado
const seekTo = (ratio) => {
  if (isFinite(audio.duration)) {
    audio.currentTime = Math.max(0, Math.min(audio.duration * ratio, audio.duration - 0.01));
  }
};
progressEl.addEventListener('click', (e) => {
  const rect = progressEl.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  seekTo(x);
});
progressEl.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    e.preventDefault();
    const delta = (e.key === 'ArrowRight' ? 5 : -5);
    audio.currentTime = Math.max(0, Math.min(audio.currentTime + delta, audio.duration || Infinity));
  }
});

// Atajos: impedir scroll con ↑/↓ y manejar volumen
window.addEventListener('keydown', (e) => {
  if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable)) return;

  if (e.code === 'Space') { e.preventDefault(); playBtn.click(); }
  if (e.key === 'ArrowRight') { nextBtn.click(); }
  if (e.key === 'ArrowLeft') { prevBtn.click(); }

  if (e.key === 'ArrowUp') {
    e.preventDefault();
    audio.volume = Math.min(1, (audio.volume || 0) + 0.05);
    if (audio.volume > 0 && audio.muted) audio.muted = false; // ← clave
    volume.value = audio.volume;
    updateVolumeIcon();
  }
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    audio.volume = Math.max(0, (audio.volume || 0) - 0.05);
    audio.muted = audio.volume === 0; // mute si llega a 0
    volume.value = audio.volume;
    updateVolumeIcon();
  }
  if (e.key && e.key.toLowerCase() === 'm') { muteBtn.click(); }
}, { passive: false });

// Eventos de audio
audio.addEventListener('loadedmetadata', () => { durEl.textContent = fmt(audio.duration || 0); });
audio.addEventListener('timeupdate', () => {
  const cur = audio.currentTime || 0; const dur = audio.duration || 0;
  curEl.textContent = fmt(cur); durEl.textContent = fmt(dur);
  const ratio = dur ? cur / dur : 0; barEl.style.transform = `scaleX(${ratio})`;
  progressEl.setAttribute('aria-valuenow', Math.round(ratio * 100));
});
audio.addEventListener('play', updatePlayIcon);
audio.addEventListener('pause', updatePlayIcon);
audio.addEventListener('ended', () => {
  if (state.repeat === 'one') { audio.currentTime = 0; audio.play(); return; }
  const ni = nextIndex(); if (ni === state.index && state.repeat !== 'all') { updatePlayIcon(); return; }
  playAt(ni);
});

// Inicializar
renderList(); if (state.playlist.length) loadTrack(0);
const saved = parseFloat(localStorage.getItem('vol'));
if (!Number.isNaN(saved)) { audio.volume = saved; volume.value = saved; }
updateVolumeIcon();
updateShuffleUI();
updateRepeatUI();
