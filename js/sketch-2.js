let imgA, imgB; // Variables for the two images

function preload() {
  // Load the two images before the sketch starts
  imgA = loadImage('img/Palestine Map Text -03.png');
  imgB = loadImage('img/Palestine Map Text -04.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight); // Create canvas
}

function draw() {
  background(255); // Clear the screen

  let cutoff = constrain(mouseY, 0, height); // Cutoff line based on mouseY, kept within canvas

  if (cutoff > 0) {
    // Draw the top section with imgA
    image(
      imgA,
      0, 0, width, cutoff,              // Destination area on canvas
      0, 0, imgA.width, imgA.height * (cutoff / height) // Source area from imgA
    );
  }

  if (cutoff < height) {
    // Draw the bottom section with imgB
    image(
      imgB,
      0, cutoff, width, height - cutoff, // Destination area on canvas
      0, imgB.height * (cutoff / height), imgB.width, imgB.height * (1 - (cutoff / height)) // Source area from imgB
    );
    if (cutoff < height) {
      // Draw the bottom section with imgB
      image(
        imgB,
        0, cutoff, width, height - cutoff, // Destination area on canvas
        0, imgB.height * (cutoff / height), imgB.width, imgB.height * (1 - (cutoff / height)) // Source area from imgB
      );
    }
      if(mouseY < 15){
        timeToLoadNewPage = true;
        if (timeToLoadNewPage){
          window.location.href="thirdpage.html"
    }
  
    }
  }
  }
