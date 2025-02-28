import { SET_ERRORS, REGISTER_USER } from "../actiontypes";

export const registerUser = (userData) => async (dispatch) => {
  console.log("Dispatching registerUser action with data:", userData); // Debugging
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Failed to register user");
    }

    const data = await response.json();
    console.log("User registered successfully:", data); // Debugging

    dispatch({
      type: REGISTER_USER,
      payload: data,
     
    });
  } catch (error) {
    console.error("Error in registerUser:", error.message);
    dispatch({
      type: SET_ERRORS,
      payload: error.message,
     
    });
  }
};
