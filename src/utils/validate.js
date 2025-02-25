export const checkValidData = (email, password, name = null) => {
  const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (name) {
    const isValidName = false;
    //   /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
    //     name
    //   );
    if (isValidName) return "Full Name is not valid";
  }

  if (!isValidEmail) return "Email is not valid";
  if (!isValidPassword) return "Password is not valid";
  return null;
};
