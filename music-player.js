function fadeAudio(audio, from, to, duration) {
  let step = (to - from) / (duration / 50);
  let volume = from;
  let interval = setInterval(() => {
    volume += step;
    if ((step > 0 && volume >= to) || (step < 0 && volume <= to)) {
      volume = to;
      clearInterval(interval);
    }
    audio.volume = volume;
  }, 50);
}

// Contoh penggunaan:
playBtn.addEventListener('click', () => {
  if (music.paused) {
    fadeAudio(music, 0, 0.5, 500); // fade in 0.5 volume selama 0.5 detik
    music.play();
    playBtn.textContent = '⏸ Jeda';
  } else {
    fadeAudio(music, music.volume, 0, 500); // fade out
    setTimeout(() => music.pause(), 500);
    playBtn.textContent = '▶️ Putar';
  }
});
