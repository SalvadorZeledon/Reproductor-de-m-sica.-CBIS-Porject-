// ———————————————————————————————————————————————————————————————————————————
// PLAYLIST (DATOS BASE)
// ¿Para qué hacemos esto? Para tener una fuente única de verdad sobre las pistas.
// ¿Por qué es necesario? La UI y la lógica necesitan saber qué reproducir y qué mostrar.
// Cada pista tiene: src (archivo de audio), title, artist y cover (portada opcional).
const TRACKS = [
  // ¿Por qué incluir 'cover'? Para mostrar imagen de portada si existe.
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

// ———————————————————————————————————————————————————————————————————————————
// ESTADO CENTRAL DE LA APP
// ¿Para qué hacemos esto? Para concentrar toda la “memoria” del reproductor.
// ¿Por qué es necesario? Tener un estado único facilita renderizar la UI y tomar decisiones.
const state = {
  // ¿Por qué copiamos TRACKS? Para no mutar la constante original accidentalmente.
  playlist: TRACKS.map(t => ({...t})),
  // ¿Por qué -1? Indica que aún no hay pista seleccionada/cargada.
  index: -1,
  // ¿Para qué 'shuffle'? Controla modo aleatorio.
  shuffle: false,
  // ¿Para qué 'repeat'? Controla ciclo: 'off' | 'all' | 'one'.
  repeat: 'off'
};

// ———————————————————————————————————————————————————————————————————————————
// REFERENCIAS AL DOM (CACHE DE ELEMENTOS)
// ¿Para qué hacemos esto? Para acceder rápido a nodos que actualizaremos con frecuencia.
// ¿Por qué es necesario? Evita búsquedas repetitivas y hace el código más claro/perfomante.
const audio = document.getElementById('audio');
const listEl = document.getElementById('list');
const emptyEl = document.getElementById('empty');
const titleEl = document.getElementById('title');
const artistEl = document.getElementById('artist');
const coverEl = document.getElementById('cover');
const curEl = document.getElementById('cur');
const durEl = document.getElementById('dur');
const progressEl = document.getElementById('progress');
// ¿Por qué buscar '.bar' dentro de progress? Es la barra que escalaremos con transform.
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

// ———————————————————————————————————————————————————————————————————————————
// UTILIDAD: FORMATEAR TIEMPO A M:SS
// ¿Para qué hacemos esto? Para mostrar tiempos de forma amigable al usuario.
// ¿Por qué es necesario? El API da segundos; la UI necesita formato legible.
const fmt = (s) => {
  // ¿Por qué validar isFinite? A veces duration no está disponible aún.
  if (!isFinite(s)) return '0:00';
  const m = Math.floor(s / 60);
  const r = Math.floor(s % 60);
  // ¿Por qué padStart(2,'0')? Para asegurar dos dígitos en los segundos.
  return `${m}:${r.toString().padStart(2,'0')}`;
};

// ———————————————————————————————————————————————————————————————————————————
// RENDERIZAR LISTA DE PISTAS
// ¿Para qué hacemos esto? Para “pintar” la playlist a partir del estado.
// ¿Por qué es necesario? La UI debe reflejar el estado actual (pista activa, vacía, etc.).
function renderList() {
  // ¿Por qué limpiar? Para evitar duplicados y re-renderizar coherentemente.
  listEl.innerHTML = '';
  // ¿Por qué mostrar/ocultar 'empty'? UX: feedback cuando no hay pistas.
  emptyEl.style.display = state.playlist.length ? 'none' : 'block';

  // ¿Por qué forEach? Para crear un <li> por cada pista.
  state.playlist.forEach((t, i) => {
    const li = document.createElement('li');
    // ¿Por qué clase 'active'? Para resaltar la pista en reproducción.
    li.className = 'track' + (i === state.index ? ' active' : '');
    // ¿Por qué ARIA? Accesibilidad: permite a lectores de pantalla entender la lista.
    li.setAttribute('role','option');
    li.setAttribute('aria-selected', i === state.index ? 'true' : 'false');

    // ¿Por qué elipsis? Para truncar títulos largos sin romper el layout.
    li.innerHTML = `
      <div>
        <div style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${t.title}</div>
        <small>${t.artist || ''}</small>
      </div>
      <small>${i+1}</small>`;

    // ¿Por qué onclick → playAt(i)? Navegación directa al hacer click en la pista.
    li.onclick = () => playAt(i);
    listEl.appendChild(li);
  });
}

// ———————————————————————————————————————————————————————————————————————————
// CARGAR UNA PISTA POR ÍNDICE
// ¿Para qué hacemos esto? Para preparar el <audio> y la UI con la pista elegida.
// ¿Por qué es necesario? Sin cargar, no podemos reproducir ni mostrar metadata.
function loadTrack(i) {
  // ¿Por qué validar rango? Para evitar errores si nos pasan índices inválidos.
  if (i < 0 || i >= state.playlist.length) return;

  // ¿Por qué actualizar state.index? Para que la UI sepa cuál es la pista activa.
  state.index = i;
  const track = state.playlist[i];

  // ¿Por qué asignar audio.src? Es lo que el elemento <audio> reproducirá.
  audio.src = track.src;

  // ¿Por qué actualizar textos y título del documento? Para feedback inmediato al usuario.
  titleEl.textContent = track.title || '—';
  artistEl.textContent = track.artist || '—';
  document.title = `▶ ${track.title} — Canción que escucho cuando pienso en ti`;

  // ¿Por qué mostrar/ocultar portada? UX: solo mostramos si existe.
  if (track.cover) {
    coverEl.src = track.cover;
    coverEl.alt = `Portada de ${track.title}`;
    coverEl.style.visibility = 'visible';
  } else {
    coverEl.removeAttribute('src');
    coverEl.alt = '';
    coverEl.style.visibility = 'hidden';
  }

  // ¿Por qué re-renderizar lista? Para marcar la activa correctamente.
  renderList();
}

// ———————————————————————————————————————————————————————————————————————————
// REPRODUCIR LA PISTA EN i (CARGA SI HACE FALTA)
// ¿Para qué hacemos esto? Para encapsular “cargar y reproducir” en una sola acción.
// ¿Por qué es necesario? Simplifica el código de botones y clicks de lista.
async function playAt(i) {
  // ¿Por qué cargar si cambió el índice? Para actualizar src/metadata.
  if (i !== state.index) loadTrack(i);
  // ¿Por qué try/catch? 'play()' puede fallar si el navegador exige interacción.
  try { await audio.play(); } catch (e) {}
  // ¿Por qué actualizar icono? Para reflejar el estado real del <audio>.
  updatePlayIcon();
}

// ———————————————————————————————————————————————————————————————————————————
// ICONO DE PLAY/PAUSE
// ¿Para qué hacemos esto? Para que el botón muestre el estado correcto.
// ¿Por qué es necesario? Coherencia visual y accesibilidad ARIA.
function updatePlayIcon() {
  const playing = !audio.paused;
  playBtn.setAttribute('aria-pressed', playing ? 'true' : 'false');
  iconPlay.className = playing ? 'bi bi-pause-fill' : 'bi bi-play-fill';
}

// ———————————————————————————————————————————————————————————————————————————
// ICONO DE VOLUMEN
// ¿Para qué hacemos esto? Para comunicar mute/volumen visualmente.
// ¿Por qué es necesario? UX: el usuario entiende si está silenciado.
function updateVolumeIcon() {
  iconVol.className = (audio.muted || audio.volume === 0)
    ? 'bi bi-volume-mute-fill'
    : 'bi bi-volume-up-fill';
}

// ———————————————————————————————————————————————————————————————————————————
// UI DE SHUFFLE Y REPEAT
// ¿Para qué hacemos esto? Para que los botones muestren su estado actual.
// ¿Por qué es necesario? Accesibilidad: aria-pressed y tooltips correctos.
function updateShuffleUI() {
  shuffleBtn.setAttribute('aria-pressed', state.shuffle ? 'true' : 'false');
}

function updateRepeatUI() {
  // ¿Por qué guardar en data-mode? Para estilos/íconos condicionados en CSS/JS.
  const mode = state.repeat; // 'off' | 'all' | 'one'
  repeatBtn.dataset.mode = mode;
  repeatBtn.setAttribute('aria-pressed', mode !== 'off' ? 'true' : 'false');
  // ¿Por qué title? Para explicar el modo actual al usuario (tooltip).
  repeatBtn.title =
    mode === 'off' ? 'Repetir: apagado'
    : mode === 'all' ? 'Repetir: todo'
    : 'Repetir: una pista';
  // ¿Por qué cambiar ícono? Para diferenciar 'one' con repeat-1.
  const i = repeatBtn.querySelector('i');
  i.className = (mode === 'one') ? 'bi bi-repeat-1' : 'bi bi-arrow-repeat';
}

// ———————————————————————————————————————————————————————————————————————————
// CÁLCULO DEL ÍNDICE SIGUIENTE/ANTERIOR
// ¿Para qué hacemos esto? Para decidir a qué pista saltar según shuffle/repeat.
// ¿Por qué es necesario? La navegación depende del modo activo.
function nextIndex() {
  // ¿Por qué aleatorio evitando el mismo índice? Para que shuffle sea útil.
  if (state.shuffle && state.playlist.length > 1) {
    let j; do { j = Math.floor(Math.random() * state.playlist.length); } while (j === state.index);
    return j;
  }
  // ¿Por qué controlar límites? Para no salir del array.
  const last = state.playlist.length - 1;
  if (state.index < last) return state.index + 1;
  // ¿Por qué repetir al inicio si 'all'? Para loop continuo de la playlist.
  return state.repeat === 'all' ? 0 : state.index;
}

function prevIndex() {
  if (state.shuffle && state.playlist.length > 1) {
    let j; do { j = Math.floor(Math.random() * state.playlist.length); } while (j === state.index);
    return j;
  }
  if (state.index > 0) return state.index - 1;
  // ¿Por qué saltar al final si 'all'? Para loop hacia atrás coherente.
  return state.repeat === 'all' ? (state.playlist.length - 1) : state.index;
}

// ———————————————————————————————————————————————————————————————————————————
// CONTROLES (EVENTOS DE BOTONES)
// ¿Para qué hacemos esto? Para conectar la UI con las acciones del reproductor.
// ¿Por qué es necesario? Sin handlers, los botones no hacen nada.
playBtn.addEventListener('click', async () => {
  // ¿Por qué chequear audio.src? Si no hay pista cargada, no reproducimos.
  if (!audio.src) return;
  // ¿Por qué alternar play/pause? Es el comportamiento esperado del botón.
  if (audio.paused) { try { await audio.play(); } catch {} }
  else audio.pause();
  updatePlayIcon();
});

prevBtn.addEventListener('click', () => {
  if (!state.playlist.length) return;
  playAt(prevIndex());
});

nextBtn.addEventListener('click', () => {
  if (!state.playlist.length) return;
  playAt(nextIndex());
});

shuffleBtn.addEventListener('click', () => {
  // ¿Por qué toggle? Activar/desactivar modo aleatorio.
  state.shuffle = !state.shuffle;
  updateShuffleUI();
});

repeatBtn.addEventListener('click', () => {
  // ¿Por qué rotar 'off' → 'all' → 'one'? Es el ciclo clásico de repeat.
  state.repeat = state.repeat === 'off' ? 'all'
              : state.repeat === 'all' ? 'one'
              : 'off';
  // ¿Por qué audio.loop en 'one'? Para repetir la misma pista automáticamente.
  audio.loop = (state.repeat === 'one');
  updateRepeatUI();
});

muteBtn.addEventListener('click', () => {
  // ¿Por qué alternar muted? Para silenciar y recuperar sonido rápido.
  audio.muted = !audio.muted;
  updateVolumeIcon();
});

// ———————————————————————————————————————————————————————————————————————————
// VOLUMEN CON SLIDER
// ¿Para qué hacemos esto? Para ajustar el volumen con precisión.
// ¿Por qué es necesario? La UI (input range) debe sincronizar con <audio>.
volume.addEventListener('input', () => {
  audio.volume = parseFloat(volume.value);
  // ¿Por qué desmutear al subir > 0? UX: si hay sonido, no queremos mute accidental.
  if (audio.volume > 0 && audio.muted) audio.muted = false;
  // ¿Por qué mutear si llega a 0? 0 equivale a silencio total.
  if (audio.volume === 0) audio.muted = true;
  updateVolumeIcon();
  // ¿Por qué guardar en localStorage? Persistencia para próxima visita.
  localStorage.setItem('vol', audio.volume);
});

// ———————————————————————————————————————————————————————————————————————————
// BARRA DE PROGRESO Y CONTROL CON TECLADO
// ¿Para qué hacemos esto? Para permitir “seek” (saltar) con click o teclado.
// ¿Por qué es necesario? Es una interacción estándar de reproductores.
const seekTo = (ratio) => {
  // ¿Por qué clamp y -0.01? Para evitar caer exactamente en el final y disparar 'ended'.
  if (isFinite(audio.duration)) {
    audio.currentTime = Math.max(0, Math.min(audio.duration * ratio, audio.duration - 0.01));
  }
};

progressEl.addEventListener('click', (e) => {
  // ¿Por qué usar bounding rect? Para convertir posición de click a ratio 0..1.
  const rect = progressEl.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  seekTo(x);
});

progressEl.addEventListener('keydown', (e) => {
  // ¿Por qué flechas? UX accesible: saltos de ±5s con teclado.
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    e.preventDefault();
    const delta = (e.key === 'ArrowRight' ? 5 : -5);
    audio.currentTime = Math.max(0, Math.min(audio.currentTime + delta, audio.duration || Infinity));
  }
});

// ———————————————————————————————————————————————————————————————————————————
// ATAJOS DE TECLADO GLOBALES
// ¿Para qué hacemos esto? Para controlar el player sin usar el mouse.
// ¿Por qué es necesario? Mejora de accesibilidad y rapidez de uso.
window.addEventListener('keydown', (e) => {
  // ¿Por qué ignorar si escribimos en inputs? Para no interferir con formularios.
  if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable)) return;

  // ¿Por qué prevenir default en Space? Para evitar scroll de la página.
  if (e.code === 'Space') { e.preventDefault(); playBtn.click(); }
  if (e.key === 'ArrowRight') { nextBtn.click(); }
  if (e.key === 'ArrowLeft') { prevBtn.click(); }

  // ¿Por qué pasos de 0.05 en volumen? Compromiso entre precisión y rapidez.
  if (e.key === 'ArrowUp') {
    e.preventDefault();
    audio.volume = Math.min(1, (audio.volume || 0) + 0.05);
    if (audio.volume > 0 && audio.muted) audio.muted = false; // desmutea al subir
    volume.value = audio.volume; // sincroniza slider
    updateVolumeIcon();
  }
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    audio.volume = Math.max(0, (audio.volume || 0) - 0.05);
    audio.muted = audio.volume === 0; // mute si llega a 0
    volume.value = audio.volume;
    updateVolumeIcon();
  }
  // ¿Por qué tecla 'm'? Atajo estándar para mute/unmute.
  if (e.key && e.key.toLowerCase() === 'm') { muteBtn.click(); }
}, { passive: false });

// ———————————————————————————————————————————————————————————————————————————
// EVENTOS DEL ELEMENTO <audio>
// ¿Para qué hacemos esto? Para reaccionar a cambios de reproducción en tiempo real.
// ¿Por qué es necesario? UI y estado deben reflejar duración/progreso/fin.
audio.addEventListener('loadedmetadata', () => {
  // ¿Por qué aquí? Cuando carga metadata conocemos la duración.
  durEl.textContent = fmt(audio.duration || 0);
});

audio.addEventListener('timeupdate', () => {
  // ¿Por qué actualizar en cada 'tick'? Para mostrar tiempo y barra de progreso.
  const cur = audio.currentTime || 0;
  const dur = audio.duration || 0;
  curEl.textContent = fmt(cur);
  durEl.textContent = fmt(dur);
  // ¿Por qué usar transform scaleX? Es más performante que cambiar width.
  const ratio = dur ? cur / dur : 0;
  barEl.style.transform = `scaleX(${ratio})`;
  // ¿Por qué aria-valuenow? Accesibilidad de la barra (0-100).
  progressEl.setAttribute('aria-valuenow', Math.round(ratio * 100));
});

audio.addEventListener('play', updatePlayIcon);
audio.addEventListener('pause', updatePlayIcon);

audio.addEventListener('ended', () => {
  // ¿Por qué controlar repeat 'one'? Para repetir la misma pista sin avanzar.
  if (state.repeat === 'one') { audio.currentTime = 0; audio.play(); return; }
  // ¿Por qué calcular nextIndex? Para decidir siguiente según shuffle/repeat.
  const ni = nextIndex();
  // ¿Por qué comprobar si ni === index y repeat !== 'all'? Para detener al final sin loop.
  if (ni === state.index && state.repeat !== 'all') { updatePlayIcon(); return; }
  // ¿Por qué playAt(ni)? Para avanzar automáticamente y mantener UI actualizada.
  playAt(ni);
});

// ———————————————————————————————————————————————————————————————————————————
// INICIALIZACIÓN
// ¿Para qué hacemos esto? Para dejar la app lista al cargar la página.
renderList();                         // Dibuja la lista (aunque no haya pista activa).
if (state.playlist.length) loadTrack(0); // ¿Por qué cargar 0? Comenzar desde la primera pista.

const saved = parseFloat(localStorage.getItem('vol'));
// ¿Por qué recuperar volumen guardado? Persistencia mejora la experiencia.
if (!Number.isNaN(saved)) { audio.volume = saved; volume.value = saved; }

// ¿Por qué sincronizar iconos/estados al inicio? Para que la UI sea coherente desde el primer momento.
updateVolumeIcon();
updateShuffleUI();
updateRepeatUI();
