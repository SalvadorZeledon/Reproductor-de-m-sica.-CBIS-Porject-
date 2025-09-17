
    /**
     * CONFIGURACIÓN
     * 1) Crea una carpeta /media y coloca ahí tus 5 archivos .mp3
     * 2) Actualiza la lista TRACKS con: src (ruta al mp3), title, artist, dedication, lyrics, cover (opcional).
     * 3) Sube todo a Netlify. El QR de tu carta debe apuntar a la URL donde publiques esto.
     */
    const TRACKS = [
      {
        src: 'media/01.mp3',
        title: 'Beso de desayuno',
        artist: 'Calle 13',
        dedication: 'Cada que escucho esta canción pienso en ti, porque esta canción la escuchamos juntos, tu la pusiste en la casa de la Denisse y de ahí la agregue a mi lista de reproducción.',
        lyrics: `Oye, eh, pa' que veas que
Yo también escribo cosas bonitas
Yo quiero caminar por encima de tu pelo
Hasta llegar al ombligo de tu oreja
Y recitarte un poquito de cosquillas
Y regalarte una sábana de almejas

Darte un beso de desayuno
Pa' irnos volando hasta Neptuno
Si hace frío, te caliento con una sopa de amapolas
Y con un fricasé de acerolas

Quiero caminar por encima de tu pelo
Hasta llegar al ombligo de tu oreja
Y recitarte un poquito de cosquillas
Y regalarte una sábana de almejas

Darte un beso de desayuno
Pa' irnos volando hasta Neptuno
Si hace frío, te caliento con una sopa de amapolas
Y con un fricasé de acerolas

Tú eres un panal de dulces frutas frescas
Tú tienes una mirada demasia'o pintoresca
Una mirada color infinito
Tú me pones el estómago blandito

Vamos, pasito a pasito, siguiéndonos las huellas
Caminando en una tómbola de estrellas
Un trayecto con clima perfecto
Regálame una sonrisita con sabor a viento

Tú eres mi vitamina del pecho, mi fibra
Tú eres todo que me equilibra
Un balance, lo que me complementa
Un masajito con sabor a menta

Tú tienes una cosita que brilla, que sobresale
Por eso yo quiero que tú me regales
30 carnavales, 400 mil cuentos
Una cajita pa' guardar los momentos

Vamos a hacer burbujas dentro el café
Vamos a tener 100 bebés y dejar los clichés pa' otro día
Tú me hiciste brujería
¡Bruja!

Vámonos pa' Cuba a 100 millas, patinando por las Antillas
Vamos a hacer un compromiso sin capilla
Con una siembra de trigo y con la luna de testigo
Enrolladitos, usando el mismo abrigo

Quiero caminar por encima de tu pelo
Hasta llegar al ombligo de tu oreja
Y recitarte un poquito de cosquillas
Y regalarte una sábana de almejas

Darte un beso de desayuno
Pa' irnos volando hasta Neptuno
Si hace frío, te caliento con una sopa de amapolas
Y con un fricasé de acerolas

Tú eres todo un evento, una pintura en movimiento
Un árbol que respira
Tú eres una diosa Kalima
Tú rimas, conmigo tú combinas

¿Qué tal si yo me inyecto el pulgar en la boca
Y me inflo como un globo?
Nos estacionamos en un árbol de algarrobo
Vámonos, que el tiempo es oro

La noche a da'o un estirón
Y tengo el océano de chaperón
Mis piernas se convirtieron en algodón
Porque estar contigo se siente cabrón

Quiero caminar por encima de tu pelo
Hasta llegar al ombligo de tu oreja
Y recitarte un poquito de cosquillas
Y regalarte una sábana de almejas

Darte un beso de desayuno
Pa' irnos volando hasta Neptuno
Si hace frío, te caliento con una sopa de amapolas
Y con un fricasé de acerolas

Quiero caminar por encima de tu pelo
Hasta llegar al ombligo de tu oreja
Y recitarte un poquito de cosquillas
Y regalarte una sábana de almejas

Darte un beso de desayuno
Pa' irnos volando hasta Neptuno
Si hace frío te caliento con una sopa de amapolas
Y con un fricasé de acerolas

Ey, ey, ey, chica
Ey, ey, ey, chica
Ey, ey, ey, chica
Ey, ey, ey, Calle 13
Ey, ey, chica
Ey, ey, ey, chica
Ey, ey, ey, chica
Oye Hector, métele ahí en la guitarra`
      },
      {
        src: 'media/02.mp3',
        title: 'Cien años',
        artist: 'Pedro Infante',
        dedication: 'Creo que esta canción hablá por si sola, espero la disfrutes porque "si vivo cien años, cien años pensaré en ti".',
        lyrics: `Pasaste a mi lado
Con gran indiferencia
Tus ojos ni siquiera
Voltearon hacia mí

Te vi sin que me vieras
Te hablé sin que me oyeras
Y toda mi amargura
Se ahogó dentro de mí

Me duele hasta la vida
Saber que me olvidaste
Pensar que ni desprecios
Merezca, yo, de ti

Y, sin embargo, sigues
Unida a mi existencia
Y si vivo cien años
Cien años, pienso en ti

Pasaste a mi lado
Con gran indiferencia
Tus ojos ni siquiera
Voltearon hacia mí

Te vi sin que me vieras
Te hablé sin que me oyeras
Y toda mi amargura
Se ahogó dentro de mí

Me duele hasta la vida
Saber que me olvidaste
Pensar que ni desprecios
Merezca, yo, de ti

Y, sin embargo, sigues
Unida a mi existencia
Y si vivo cien años
Cien años, pienso en ti`
      },
      {
        src: 'media/03.mp3',
        title: 'Cowboys Don’t Cry',
        artist: 'Oliver Tree',
        dedication: 'Esta canción representa muy bien como me he sentido todo este tiempo, porque soy malo para las despedidas y porque extraño el brillo del sol en tus ojos.',
        lyrics: `I'm not good at goodbyes
(no soy bueno para las despedidas)
I miss the sunshine in your eyes
(Extraño el brillo del sol en tus ojos)
Who said cowboys don't cry?
(quien dijo que los vaqueros no lloran?)
Come on, baby, let's take one last ride
(vamos nena, tomemos un último paseo)

We're riding 'round this carousel if you catch my drift
(somos como un carrusel si entiendes a lo que me refiero)
We're riding 'round this wagon wheel, she took me for a spin
(somos como una rueda de carreta, ella me hizo girar)
We're riding 'round this carousel, getting dizzy 'til we're sick
(somos como un carrusel, mareándonos hasta enfermarnos)
Love is like a circle, there's no easy way to end
(el amor es como un círculo, no hay una manera fácil de terminar)

It's too much, I can't take anymore
(Es demasiado, no puedo soportarlo más)
Stuck feeling like we've been here before
(Atascado sintiendo que hemos estado aquí antes)
But now the sun stopped shining here in the Wild West
(Pero ahora el sol dejó de brillar aquí en el salvaje oeste)
My heart stopped beating, and it's sunk into my chest
(Mi corazón dejó de latir, y se hundió en mi pecho)

We're riding 'round this carousel if you catch my drift
(somos como un carrusel si entiendes a lo que me refiero)
We're riding 'round this wagon wheel, she took me for a spin
(somos como una rueda de carreta, ella me hizo girar)
We're riding 'round this carousel, getting dizzy 'til we're sick
(somos como un carrusel, mareándonos hasta enfermarnos)
Love is like a circle, there's no easy way to end
(el amor es como un círculo, no hay una manera fácil de terminar)

Just an outlaw who only had one friend
(Solo un forajido que solo tenía un amigo)
I wonder if I'll ever see her face again
(Me pregunto si alguna vez volveré a ver su rostro)
Dark clouds hanging over, they follow where I've been
(Nubes oscuras colgando, siguen donde he estado)
My cowboy tears are still blowing in the wind
(Mis lágrimas de vaquero todavía soplan con el viento)

We're riding 'round this carousel if you catch my drift
(somos como un carrusel si entiendes a lo que me refiero)
We're riding 'round this wagon wheel, she took me for a spin
(somos como una rueda de carreta, ella me hizo girar)
We're riding 'round this carousel, getting dizzy 'til we're sick
(somos como un carrusel, mareándonos hasta enfermarnos)
Love is like a circle, there's no easy way to end
(el amor es como un círculo, no hay una manera fácil de terminar)

I'm not good at goodbyes
(no soy bueno para las despedidas)
I miss the sunshine in your eyes
(Extraño el brillo del sol en tus ojos)
Who said cowboys don't cry?
(quien dijo que los vaqueros no lloran?)
Come on, baby, let's take one last ride
(vamos nena, tomemos un último paseo)

We're riding 'round this carousel if you catch my drift
(somos como un carrusel si entiendes a lo que me refiero)
We're riding 'round this wagon wheel, she took me for a spin
(somos como una rueda de carreta, ella me hizo girar)
We're riding 'round this carousel, getting dizzy 'til we're sick
(somos como un carrusel, mareándonos hasta enfermarnos)
Love is like a circle, there's no easy way to end
(el amor es como un círculo, no hay una manera fácil de terminar)`
      },
      {
        src: 'media/04.mp3',
        title: 'Dueles tan bien',
        artist: 'Bruses',
        dedication: 'Perdón si no lo demostré pero yo si te queria de verdad y eso lo sé porque dueles mas de lo que debes doler.',
        lyrics: `Siempre
He creído lo que me han vendido en la tele y el cine
Qué triste
Quieren
Que crea en el para siempre y finales felices
Qué triste
Pa ra ra ra ra, ra ra ra
Siempre acabo mal
Y me quiero matar
Porque
Dueles, dueles, dueles
Más de lo que debes
Dueles, dueles
Y dueles tan bien
Que no sé qué hacer
Dueles, dueles, dueles
Más de lo que debes
Dueles, dueles
Y dueles tan bien
Que me intoxiqué contigo
Sabes
Me sabes mejor que el alcohol
Lo sabes y tienes control
De toda mi estabilidad
Mi estado de salud mental
Cuidado (cuidado)
Cuidado (cuidado)
Cuidado me puedo quebrar
Porque
Dueles, dueles, dueles
Más de lo que debes
Dueles, dueles
Y dueles tan bien
Que no sé qué hacer
Dueles, dueles, dueles
Más de lo que debes
Dueles, dueles
Y dueles tan bien
Que me intoxiqué contigo
Siempre acabo mal
Y me quiero matar
Porque
Dueles, dueles, dueles
Más de lo que debes
Dueles, dueles
Y dueles tan bien
Que no sé qué hacer
Dueles, dueles, dueles
Mas de lo que debes
Dueles, dueles
Y dueles tan bien
Que me intoxiqué contigo
Contigo
Contigo
Dueles, dueles, dueles, dueles tan bien`
      },
      {
        src: 'media/05.mp3',
        title: 'Lo que hay x aquí',
        artist: 'Rels B',
        dedication: 'Si te tomaste el tiempo de llegar hasta aquí, te lo agradezco. Sabes intento ser un buen perdedor, pero no soy tonto, tampoco perfecto, qusiera haber hecho las cosas bien. Quizá eras demasiado para mí.',
        lyrics: `¿Yo nunca te he hablado de ella?
Ella era como
Como una puesta de sol, ¿sabes?
Como ver el mar después de mucho tiempo
Mi hogar
¿Quién estará besando esos labio'?
Me tiene pensando, yo antes no era así
Seguro es un tipo más guapo que yo
Ella era demasiado guapa para mí
Dime, de qué sirve toda esta ambición
Si al llegar no tengo con quién compartir
Que no la perdiera, mamá me avisó
Y yo como un tonto fue que la perdí
Ya no tengo a quién mandar estos TikToks
Ni con quién criticar to antes de dormir
Sus amigas dicen que es mejor que yo
Y que se la ve mucho mejor así
Y aunque duela, es verdad
Porque ser mejor es muy fácil
¿Y pa qué iba a volver a buscarme?
Si no echa de menos lo que hay por aquí, yeah
Amanecí pensando en ti, mi amor
Entré a tus redes pa ver cómo estás
Vi que hace poco cambiaste de look
Y aún no borraste la foto nuestra
Me salió un recuerdo de nosotros dos
De la noche desnudos, bebiendo en el mar
Y me puso triste pensar que ya no
Y que hay otro que ahora ocupa mi lugar
Por lo menos ahora no te piden fotos
Entrando en el cine o en el restaurant
Y todas las cosas que querías hacer
Y que por ser quien soy, tuviste que cortar
Ojalá que guardes el primer anillo
Que pude comprarte con la música
Y que me recuerdes como el primer día
Oh-oh, oh-oh
Skinny
¿Quién estará besando esos labio'?
Me tiene pensando, yo antes no era así
Seguro es un tipo más guapo que yo
Ella era demasiado guapa para mí
Dime, de qué sirve toda esta ambición
Si al llegar no tengo con quién compartir
Que no la perdiera, mamá me avisó
Y yo como un tonto fue que la perdí
Y aunque duela, es verdad
Porque ser mejor es muy fácil
¿Y pa qué iba a volver a buscarme?
Si no echa de menos lo que hay por aquí`
      }
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

    const dedicationEl = document.getElementById('dedication');
    const lyricsEl = document.getElementById('lyrics');

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
      dedicationEl.textContent = track.dedication || '—';
      lyricsEl.textContent = track.lyrics || '—';
      document.title = `▶ ${track.title} — Canción que escucho cuando pienso en ti`;
      if (track.cover) { coverEl.src = track.cover; coverEl.alt = `Portada de ${track.title}`; coverEl.style.visibility = 'visible'; }
      else { coverEl.removeAttribute('src'); coverEl.alt=''; coverEl.style.visibility='hidden'; }
      renderList();
    }

    async function playAt(i) { if (i !== state.index) loadTrack(i); try { await audio.play(); } catch (e) {} updatePlayIcon(); }

    function updatePlayIcon() {
      const playing = !audio.paused; playBtn.setAttribute('aria-pressed', playing ? 'true' : 'false');
      iconPlay.innerHTML = playing ? '<path d="M6 5h4v14H6zM14 5h4v14h-4z"/>' : '<path d="M8 5v14l11-7z"/>';
    }

    function updateVolumeIcon() {
      iconVol.innerHTML = audio.muted || audio.volume === 0
        ? '<path d="M3 9v6h4l5 4V5L7 9H3zm12.5 1.1l1.4-1.4L22 13l-1.1 1.1-5.4-5.4z"/>'
        : '<path d="M3 9v6h4l5 4V5L7 9H3zm13.5 3a4.5 4.5 0 0 0-3-4.243v8.486A4.5 4.5 0 0 0 16.5 12z"/>';
    }

    function nextIndex() {
      if (state.shuffle && state.playlist.length > 1) { let j; do { j = Math.floor(Math.random() * state.playlist.length); } while (j === state.index); return j; }
      const last = state.playlist.length - 1; if (state.index < last) return state.index + 1; return state.repeat === 'all' ? 0 : state.index;
    }
    function prevIndex() {
      if (state.shuffle && state.playlist.length > 1) { let j; do { j = Math.floor(Math.random() * state.playlist.length); } while (j === state.index); return j; }
      if (state.index > 0) return state.index - 1; return state.repeat === 'all' ? (state.playlist.length - 1) : state.index;
    }

    // Controles
    playBtn.addEventListener('click', async () => { if (!audio.src) return; if (audio.paused) { try { await audio.play(); } catch {} } else audio.pause(); updatePlayIcon(); });
    prevBtn.addEventListener('click', () => { if (!state.playlist.length) return; playAt(prevIndex()); });
    nextBtn.addEventListener('click', () => { if (!state.playlist.length) return; playAt(nextIndex()); });
    shuffleBtn.addEventListener('click', () => { state.shuffle = !state.shuffle; shuffleBtn.setAttribute('aria-pressed', state.shuffle ? 'true' : 'false'); });
    repeatBtn.addEventListener('click', () => { state.repeat = state.repeat === 'off' ? 'all' : state.repeat === 'all' ? 'one' : 'off'; repeatBtn.dataset.mode = state.repeat; repeatBtn.setAttribute('aria-pressed', state.repeat !== 'off' ? 'true' : 'false'); repeatBtn.title = state.repeat === 'off' ? 'Repetir: apagado' : state.repeat === 'all' ? 'Repetir: todo' : 'Repetir: una pista'; audio.loop = (state.repeat === 'one'); });
    muteBtn.addEventListener('click', () => { audio.muted = !audio.muted; updateVolumeIcon(); });
    volume.addEventListener('input', () => { audio.volume = parseFloat(volume.value); audio.muted = audio.volume === 0; updateVolumeIcon(); localStorage.setItem('vol', audio.volume); });

    // Barra de progreso y teclado
    const seekTo = (ratio) => { if (isFinite(audio.duration)) { audio.currentTime = Math.max(0, Math.min(audio.duration * ratio, audio.duration - 0.01)); } };
    progressEl.addEventListener('click', (e) => { const rect = progressEl.getBoundingClientRect(); const x = (e.clientX - rect.left) / rect.width; seekTo(x); });
    progressEl.addEventListener('keydown', (e) => { if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); const delta = (e.key === 'ArrowRight' ? 5 : -5); audio.currentTime = Math.max(0, Math.min(audio.currentTime + delta, audio.duration || Infinity)); } });

    window.addEventListener('keydown', (e) => { if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable)) return; if (e.code === 'Space') { e.preventDefault(); playBtn.click(); } if (e.key === 'ArrowRight') { nextBtn.click(); } if (e.key === 'ArrowLeft') { prevBtn.click(); } if (e.key === 'ArrowUp') { audio.volume = Math.min(1, (audio.volume || 0) + 0.05); volume.value = audio.volume; updateVolumeIcon(); } if (e.key === 'ArrowDown') { audio.volume = Math.max(0, (audio.volume || 0) - 0.05); audio.muted = audio.volume === 0; volume.value = audio.volume; updateVolumeIcon(); } if (e.key.toLowerCase() === 'm') { muteBtn.click(); } });

    // Eventos de audio
    audio.addEventListener('loadedmetadata', () => { durEl.textContent = fmt(audio.duration || 0); });
    audio.addEventListener('timeupdate', () => { const cur = audio.currentTime || 0; const dur = audio.duration || 0; curEl.textContent = fmt(cur); durEl.textContent = fmt(dur); const ratio = dur ? cur / dur : 0; barEl.style.transform = `scaleX(${ratio})`; progressEl.setAttribute('aria-valuenow', Math.round(ratio * 100)); });
    audio.addEventListener('play', updatePlayIcon);
    audio.addEventListener('pause', updatePlayIcon);
    audio.addEventListener('ended', () => { if (state.repeat === 'one') { audio.currentTime = 0; audio.play(); return; } const ni = nextIndex(); if (ni === state.index && state.repeat !== 'all') { updatePlayIcon(); return; } playAt(ni); });

    // Inicializar
    renderList(); if (state.playlist.length) loadTrack(0);
    const saved = parseFloat(localStorage.getItem('vol')); if (!Number.isNaN(saved)) { audio.volume = saved; volume.value = saved; } updateVolumeIcon();