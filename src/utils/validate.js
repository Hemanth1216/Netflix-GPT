const validate = (name, email, password, confirmPassword) => {
  if (name != null && name !== undefined && name.trim() === "") {
    return "Name should not be empty";
  }

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword = /^(?=.*[0-9])(?=.*[A-Za-z]).{8,32}$/.test(password);

  if (!isValidEmail) {
    return "Email is not valid";
  }

  if (!isValidPassword) {
    return "Password is not valid";
  }

  if (
    confirmPassword !== undefined &&
    confirmPassword !== null &&
    password !== confirmPassword
  ) {
    return "Confirm password is not matching Password";
  }

  return null;
};

export default validate;
