var user = [
  { useremail: "user1@gmail.com", password: "pass1", ghim: [], name: "" },
  { useremail: "use2@gmail.com", password: "pass2", ghim: [], name: "" },
];

function checkdangki() {
  event.preventDefault();
  localStorage.setItem("user", JSON.stringify(user));
  user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  let name = document.forms["register"]["name"].value;
  let pass = document.forms["register"]["pass"].value;
  let repass = document.forms["register"]["repass"].value;
  let email = document.forms["register"]["email"].value;
  if (pass === "" || repass === "" || email === "" || name === "") {
    document.forms["register"]["pass"].value = "";
    document.forms["register"]["repass"].value = "";
    document.forms["register"]["email"].value = "";
    document.forms["register"]["name"].value = "";
    alert("Register Error");
    return;
  }
  //alert(name + pass + email);
  var existinguser = user.find(function (user) {
    return user.useremail === email;
  });
  if (existinguser) {
    document.forms["register"]["email"].value = "";
    alert("Register Error");
    return;
  }
  if (pass != repass) {
    alert("Register Error");
    document.forms["register"]["repass"].value = "";
    return;
  }
  if (!existinguser && repass === pass) {
    user.push({ useremail: email, password: pass, ghim: [], name: name });
    localStorage.setItem("user", JSON.stringify(user));
    document.forms["register"]["pass"].value = "";
    document.forms["register"]["repass"].value = "";
    document.forms["register"]["email"].value = "";
    document.forms["register"]["name"].value = "";
    alert("Register success!!");
  }
}

function checkdangnhap() {
  event.preventDefault();
  user = JSON.parse(localStorage.getItem("user"));
  let pass = document.forms["login"]["pass"].value;
  let email = document.forms["login"]["email"].value;
  //alert(name + pass + email);
  var founduser = user.find(function (user) {
    return user.useremail === email && user.password === pass;
  });
  if (founduser) {
    document.forms["login"]["pass"].value = "";
    document.forms["login"]["email"].value = "";
    window.location.href = "main.html";
    alert("Login success!!!!");
  } else {
    document.forms["login"]["pass"].value = "";
    document.forms["login"]["email"].value = "";
    alert("Invalid name or wrong password");
  }
}

function signin() {
  window.location.href = "dangnhap.html";
}

function signup() {
  window.location.href = "dangki.html";
}
