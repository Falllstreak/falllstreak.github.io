function validateForm() {
  var validFirstname = false;
  //2) read value from HTML
  var firstname = document.getElementById("firstname").value;
  //3) Do validation
  if (firstname === "null" || firstname === "" || firstname.length > 20)
    errorMessages += "<p>The firstname is required and cannot be greater than 20 characters</p>";
  else
    validFirstname = true;
  //4) Send error message to HTML
  document.getElementById("errorMessages").innerHTML = errorMessages;

  //5) return status of each field
  return (validFirstname);
} { //1) Create variable
  var validLastname = false;
  //2) read value from HTML
  var validLastname = document.getElementById("lastname").value;

  //3) Do validation
  //4) Send error message to HMTL
  //5) return status of each field
  return (validFirstname && validLastname);
} {
  var userEmail = document.getElementById("email").value;
  var atpos = userEmail.indexOf("@");
  var dotpos = userEmail.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length)
  // send error message. For example:  
    errorMessages = "<p>Invalid email</p>";
  else
    validEmail = true

} {
  var phone = document.getElementById("phone").value;
  if (isNaN(phone) || phone.lenght > 15 || phone === null || phone === "")
    errorMessages = "<p>Invalid phone number </p>";
  else
    validPhone = true; //Or assign the value to a variable. For example validPhone = true;
}
