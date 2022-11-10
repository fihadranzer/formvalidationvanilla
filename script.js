let username = document.getElementById("username");
let password = document.getElementById("password");
let flag = 1;
function validateForm() {
  if (username.value == "") {
    document.getElementById("usererror").innerHTML =
      "Username should not empty";
    flag = 0;
  } else if (username.value.length < 3) {
    document.getElementById("usererror").innerHTML =
      "Username must be more than 3 char";
    flag = 0;
  } else {
    document.getElementById("usererror").innerHTML = "";
    flag = 1;
  }

  if (password.value == "") {
    document.getElementById("passworderror").innerHTML = "Password is empty";
    flag = 0;
  } else {
    document.getElementById("passworderror").innerHTML = "";
  }

  if (flag) {
    return ture;
  } else {
    return false;
  }
}
