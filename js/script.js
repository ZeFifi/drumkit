window.addEventListener("keydown", function(e) { // listening for the keydown event and then runs the function which will give the event
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // is there an audio document that has a data-key of e.keyCode ?
  if (!audio) return;
  audio.currentTime = 0; // rewind to the start of the audio files : allow to replay the audio before it ends
  audio.play(); // if there's no audio, stop the function, else play the audio
});
