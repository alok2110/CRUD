
const Validations = (state) => {
  let errors = {};

  if (!state.name) {
    errors.name = "Name is required";
  } else if (/[0-9]/g.test(state.name)) {
    errors.name = "Name is invalid";
  }
  if (!state.email) {
    errors.email = "Email required";
  } else if (state.email.indexOf("@") <= 0) {
    errors.email = "Invalid email";
  } else if (
    state.email.charAt(state.email.length - 4) !== "." &&
    state.email.charAt(state.email.length - 3) !== "."
  )
   {
    errors.email = "Invalid email";
  }

  return errors;
};

export default Validations;
