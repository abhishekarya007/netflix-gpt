const handleValidate = (email, password) => {
  const isEmailValid =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );

  const isPasswordValid =
    /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/.test(
      password
    );


  if (!isEmailValid) {
    return "Email is not valid";
  } else if (!isPasswordValid) {
    return "Password not valid";
  } else {
    return "";
  }
};

export default handleValidate;
