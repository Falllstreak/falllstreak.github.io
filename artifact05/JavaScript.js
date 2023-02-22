//Let's define our variables
i = 0;
var myImages = ["https://user-images.githubusercontent.com/121982351/220744728-0294e680-c0c3-4eff-a26b-c9d9ac5b8a06.jpeg", "https://user-images.githubusercontent.com/121982351/220744508-69da9686-759f-4e5f-827a-ca5cc9c87754.jpeg", "https://user-images.githubusercontent.com/121982351/220744121-5e0c9403-33fd-4a3f-a1ce-9a3ab27d8ca6.jpeg", "https://user-images.githubusercontent.com/121982351/220743967-963ad763-b112-4845-a400-ef69205a221e.jpeg", "https://user-images.githubusercontent.com/121982351/220743867-0d400e77-d44b-45e4-85e9-f66f30fedb87.jpeg"];
var myPhrases = ["Blooming", "Rest", "Mountains", "City", "Focus"];
window.setInterval(nextButton, 4000);


// Let us define a function that will show the phrases based on the selection of the user
function nextButton() {
  if (document.getElementById("nextButton")) {


    if (i < myPhrases.length) {
      document.getElementById("Phrases").innerHTML = "<h2>" + myPhrases[i] + "</h2>";
      document.getElementById("newImage").src = myImages[i];
      i++;
    } else
      i = 0;
  } else
    document.getElementById("Phrases").innerHTML = "";
}

addEventListener("click", function(nextButton) {
    if (i < myPhrases.length) {
      document.getElementById("Phrases").innerHTML = "<h2>" + myPhrases[i] + "</h2>";
      document.getElementById("newImage").src = myImages[i];
      i++;
    }
  });

addEventListener("click", function(previousButton) {
    if (i < myPhrases.length) {
      document.getElementById("Phrases").innerHTML = "<h1>" + myPhrases[i] + "</h1>";
      document.getElementById("newImage").src = myImages[i];
      i--;
    }
  else
    document.getElementById("Phrases").innerHTML = "";
  });
