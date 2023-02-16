// var rHeight =5;
// var colorEven = "orange";
// var colorOdd = "black";
// var symbol ="*";

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
  upper(pHeight, pColorEven, pColorOdd, pSymbol);
  down(pHeight, pColorEven, pColorOdd, pSymbol);
}

function upper(pHeight, pColorEven, pColorOdd, pSymbol) {
  var rLine = "";
  for (i = 0; i < pHeight; i++) {
    rLine += "<p>";
    //Create each line on the Rhombus
    for (j = 0; j <= i; j++) {
      //Is the position even or odd so we change the color
      if (j % 2)
        //even
        rLine +=
          "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
      //odd
      else
        rLine +=
          "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
    }
    rLine += "</p>";
    // console.log(rLine);
  }

  document.getElementById("upper").innerHTML = rLine;
}

function down(pHeight, pColorEven, pColorOdd, pSymbol) {
  var rLine = "";
  for (i = pHeight; i > 0; i--) {
    rLine += "<p>";
    //Create each line on the Rhombus
    for (j = 0; j < i -1; j++) {
      //Is the position even or odd so we change the color
      if (j % 2)
        //even
        rLine +=
          "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
      //odd
      else
        rLine +=
          "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
    }
    rLine += "</p>";
    // console.log(rLine);
  }

  document.getElementById("down").innerHTML = rLine;
}
