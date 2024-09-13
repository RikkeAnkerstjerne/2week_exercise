// User form //
const form = document.getElementById("userForm");
form.onsubmit = (event) => {
  event.preventDefault();
  console.log(event.target);
  const formData = new FormData(form);

  // Username
  const username = formData.get("username");
  const errorMessage = document.getElementById("username");
  const border = errorMessage.classList;
  const usernameErrorMessage = console.log(username);
  if (!username) {
    border.add("errorMessage");
    console.log(errorMessage);
    throw new Error("Please fill out a username");
  } else {
    border.remove("errorMessage");
  }

  console.log(form);

  // Password
  const password = formData.get("password");
  console.log(password);
  if (!password) {
    throw new Error("Please fill out a password");
  }
  console.log(form);

  // Email
  const email = formData.get("email");
  console.log(email);
  if (!email) {
    throw new Error("Please fill out a email");
  }
  console.log(form);
};
