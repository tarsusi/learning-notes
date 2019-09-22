this.addEventListener("DOMContentLoaded", preloadImages, true);

function preloadImages(e) {
  // Create an array with image paths where images line in
  var imageArray = new Array(
    "path/image.png",
    "path/image2.png",
    "path/image3.png"
  );

  for (var i = 0; i < imageArray.length; i++) {
    var tempImage = new Image();

    tempImage.addEventListener("load", trackProgress, true);
    // When setting src attribute, the browser automatically downloads images from src link.
    tempImage.src = imageArray[i];
  }
}

function trackProgress() {
  loadedImages++;

  if (loadedImages == imageArray.length) {
    // when all images are uploaded
    imagesLoaded();
  }
}

function imagesLoaded() {
  // do something
}
