function validateForm() {
  var errorMessages = ""; // create variable to store error messages
  var validName = false;
  var name = document.getElementsByName("name")[0].value; // read value from HTML
  var letters = /^[A-Za-z]+$/;
  if (name === "" || name.length > 70 || !name.match(letters)) {
    errorMessages += "<p>Name is required, cannot be greater than 70 characters, and can only contain alphabet letters</p>";
  } else {
    validName = true;
  }

  var validEmail = false;
  var email = document.getElementsByName("email")[0].value;
  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
    errorMessages += "<p>Invalid email</p>";
  } else {
    validEmail = true;
  }
  
  var validComment = false;
  var comment = document.getElementsByName("comments")[0].value;
  if (comment === "" || comment.length > 500) {
    errorMessages += "<p>A comment is required and cannot be greater than 500 characters</p>";
  } else {
    validComment = true;
  }
         



 document.getElementById("errorMessages").innerHTML = errorMessages; // send error messages to HTML

  return (validName && validEmail && validComment); // return status of each field
}
