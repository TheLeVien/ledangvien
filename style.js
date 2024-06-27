var userk = [
  {
    username: "",
    useremail: "user1@gmail.com",
    password: "pass1",
    ghim: [],
    play: [],
  },
  {
    username: "",
    useremail: "use2r@gmail.com",
    password: "pass2",
    ghim: [],
    play: [],
  },
];

///đăng kí here

function checkdangki() {
  event.preventDefault();
  user = JSON.parse(localStorage.getItem("user"));
  if (user == null) localStorage.setItem("user", JSON.stringify(userk));
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
  var existinguser = user.find(function (user) {
    return user.useremail === email;
  });

  var existingname = user.find(function (user) {
    return user.username === name;
  });

  if (existingname) {
    document.forms["register"]["name"].value = "";
    alert("Register Error(Name)");
    return;
  }

  if (existinguser) {
    document.forms["register"]["email"].value = "";
    alert("Register Error(Email)");
    return;
  }
  if (pass != repass) {
    alert("Register Error(Password)");
    document.forms["register"]["repass"].value = "";
    return;
  }
  if (!existinguser && repass === pass && !existingname) {
    user.push({
      username: name,
      useremail: email,
      password: pass,
      ghim: [],
      play: [],
    });
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "dangnhap.html";
    alert("Register success!!");
  }
}

///dang nhap here

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
    localStorage.setItem("useremail", email);
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
