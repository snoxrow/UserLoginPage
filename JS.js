let userName = document.getElementById("userName");
let password = document.getElementById("password");
let btn = document.getElementById("submit");

function verify_signin() {
  if (userName.value == "" || password.value == "") {
    alert("User Name field cannot be empty, please enter again");
  } else if (!/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/.test(userName.value)) {
    alert("Please enter a valid email address");
  } else {
    alert("We are logging you in!");
  }
}

btn.addEventListener("click", verify_signin);
