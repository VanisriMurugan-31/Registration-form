import { SET_ERRORS, REGISTER_USER } from "../actiontypes";

const initialState = {
  user: null,
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  dateOfBirth: "",
  errors: {},
  successMessage:"",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        user: action.payload,
        successMessage: "User registered successfully!",
      };
      case SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
