var myImages = ["https://user-images.githubusercontent.com/121982351/220744728-0294e680-c0c3-4eff-a26b-c9d9ac5b8a06.jpeg",

  "https://user-images.githubusercontent.com/121982351/220744508-69da9686-759f-4e5f-827a-ca5cc9c87754.jpeg",

  "https://user-images.githubusercontent.com/121982351/220744121-5e0c9403-33fd-4a3f-a1ce-9a3ab27d8ca6.jpeg",

  "https://user-images.githubusercontent.com/121982351/220743967-963ad763-b112-4845-a400-ef69205a221e.jpeg",

  "https://user-images.githubusercontent.com/121982351/220743867-0d400e77-d44b-45e4-85e9-f66f30fedb87.jpeg"
];


var captionImages = ["Spring Bloom",

  "Branch Frost",

  "Peak Path",

  "City Sky",

  "Focusing"
];

var i = 0;

function updateImage() {
  document.getElementById("slideshow").src = myImages[i];
  document.getElementById("slideshow").alt = captionImages[i];
  document.getElementById("caption").textContent = captionImages[i];
}

function next() {
  if (myImages.length == i + 1) {
    i = 0;
  } else {
    i = i + 1;
  }
  updateImage();
}


function back() {
  if (i === 0)
    i = myImages.length - 1;
  else {
    i = i - 1;
  }

  updateImage();
}

var nextButton = document.getElementById("next");
var previousButton = document.getElementById("previous");

previousButton.addEventListener("click", back, false);
nextButton.addEventListener("click", next, false);

function autoSlide() {
  if (document.getElementById("auto"))
    next();
}


setInterval(autoSlide, 8000); // Next
