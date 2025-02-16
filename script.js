let zoomLevel = 1;
let currentAlbum = [];
let currentIndex = 0;

function showAlbum(images) {
  currentAlbum = images;
  currentIndex = 0;
  showLightbox(currentAlbum[currentIndex]);
}

function showLightbox(imageSrc) {
  document.getElementById('lightboxImg').src = imageSrc;
  document.getElementById('lightbox').classList.add('active');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.getElementById('lightboxImg').style.transform = 'scale(1)';
  zoomLevel = 1;
}

function zoomImage(event) {
  if (event.deltaY < 0) {
    zoomLevel += 0.1;
  } else {
    zoomLevel = Math.max(1, zoomLevel - 0.1);
  }
  document.getElementById('lightboxImg').style.transform = `scale(${zoomLevel})`;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % currentAlbum.length;
  showLightbox(currentAlbum[currentIndex]);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + currentAlbum.length) % currentAlbum.length;
  showLightbox(currentAlbum[currentIndex]);
}