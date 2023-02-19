
function validateForm() {
  var errorMessages = ""; // create variable to store error messages
  var validFirstname = false;
  var firstname = document.getElementsByName("firstname")[0].value; // read value from HTML
  if (firstname === "" || firstname.length > 20) {
    errorMessages += "<p>The firstname is required and cannot be greater than 20 characters</p>";
  } else {
    validFirstname = true;
  }

  var validLastname = false;
  var lastname = document.getElementsByName("lastName")[0].value;
  if (lastname === "" || lastname.length > 50) {
    errorMessages += "<p>The lastname is required and cannot be greater than 50 characters</p>";
  } else {
    validlastname = true;
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

  var validPhone = false;
  var phone = document.getElementsByName("phone")[0].value;
  if (phone === "" || isNaN(phone) || phone.length > 15) {
    errorMessages += "<p>Invalid phone number</p>";
  } else {
    validPhone = true;
  }

  var validUsername = false;
  var username = document.getElementsByName("username")[0].value;
  if (username === "" || username.length > 12) {
    errorMessages += "<p>The username is required and cannot be greater than 12 characters</p>";
  } else {
    validUsername = true;
  }

  var validPassword = false;
  var password = document.getElementsByName("password")[0].value;
  if (password === "" || password.length > 7) {
    errorMessages += "<p>The password is required and cannot be greater than 7 characters</p>";
  } else {
    validPassword = true;
  }
  
  var validAddress = false;
  var address = document.getElementsByName("address")[0].value;
  if (address === "" || address.length > 50) {
    errorMessages += "<p>The address is required and cannot be greater than 50 characters</p>";
  } else {
    validAddress = true;
  }
  
  var validCity = false;
  var city = document.getElementsByName("city")[0].value;
  if (city === "" || city.length > 35) {
    errorMessages += "<p>The city is required and cannot be greater than 35 characters</p>";
  } else {
    validCity = true;
  }
  
  var validState = false;
  var state = document.getElementsByName("state")[0].value;
  if (state === "") {
    errorMessages += "<p>A state must be selected</p>";
  } else {
    validState = true;
  }
  
var validCountry = false;
var validZipcode = false;
var country = document.getElementsByName("country")[0].value;
var zipcode = document.getElementsByName("zipcode")[0].value;

if (country !== "") {
  validCountry = true;

  if (country === "USA") {
    if (zipcode === "" || zipcode.length < 5) {
      errorMessages += "<p>A valid United States Zip Code must be entered</p>";
    } else {
      validZipcode = true;
    }
  }
} else {
  errorMessages += "<p>A valid country must be selected</p>";
}
         



 document.getElementById("errorMessages").innerHTML = errorMessages; // send error messages to HTML

  return (validFirstname && validlastname && validEmail && validPhone && validUsername && validPassword && validAddress && validCity && validState && validCountry && validZipcode); // return status of each field
}
