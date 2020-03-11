

var play = document.querySelector('#play');
var video = document.querySelector('#video');
var pause = document.querySelector('#pause');
var restart = document.querySelector('#restart');
var range = document.querySelector('.volume');
var isPlaying = false;
var pBar = document.getElementById('timer');

video.addEventListener('timeupdate', function() {
  var percent = Math.floor((100 /          video.duration) * video.currentTime);
  pBar.value = percent;
  pBar.getElementsByTagName('span')[0].innerHTML = percent;
}, false);


video.onended = function() {
  alert("La vidéo est finito pepito ʕ•ᴥ•ʔ");
};
play.addEventListener('click', function() {
  video.play();
  });
pause.addEventListener('click', function() {
  video.pause();
  });
restart.addEventListener('click', function() {
  if(isPlaying == true) {
    video.pause();
    isPlaying = false;
    video.currentTime = 0;
  } else {
    video.play();
    isPlaying = true;
  }
  });

range.addEventListener('input', function() {
  video.volume = range.value
});
