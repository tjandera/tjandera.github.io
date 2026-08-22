const btn = document.getElementById('playBtn');
const audio = document.getElementById('clip');
const img = document.getElementById('popupImg');
btn.addEventListener('click', function() {
    audio.play();
    img.style.display = 'block';
});
btn.addEventListener('click', function() {
    audio.play();
});